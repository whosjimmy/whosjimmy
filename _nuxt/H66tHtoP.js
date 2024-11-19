const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Djc673bt.js","./Du_4QtcV.js","./CMxNZxK2.js","./DNDRg7Og.js","./index.ASLudlX-.css","./Bm33EntZ.js","./cvzk3HBg.js","./ow3wUsKG.js","./BTWQNzM5.js","./Gallery.BdWwPq4R.css","./Film.D8qa6UOd.css","./Film.CyscwsSS.css","./Bj-G3HHS.js","./Bio.BaV4dkSc.css","./BnaDikB1.js","./Contact.Bq_tjq4M.css","./DQHnrX4R.js","./Clocks.CaZdgkmv.css","./CNaKRCtX.js","./index.EfND0qCY.css","./C0F0zL0h.js","./998-M1C6.js","./index.CAtFJWG6.css","./tnefvn6j.js","./Celebrities.BS01JuXe.css","./C57pYOmS.js","./Clocks.Dmp-oUCd.css","./DG9_p7sb.js","./index.ByThmlNc.css","./ptp3Zn1f.js","./Cd754Wel.js","./BlNBUzrJ.js","./wYKFlpms.js","./default.DfNHKe1R.css"])))=>i.map(i=>d[i]);
var OT=Object.defineProperty;var xT=(t,e,n)=>e in t?OT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var to=(t,e,n)=>xT(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},ii=[],kn=()=>{},NT=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nf=t=>t.startsWith("onUpdate:"),st=Object.assign,Df=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},DT=Object.prototype.hasOwnProperty,ke=(t,e)=>DT.call(t,e),ce=Array.isArray,oi=t=>Li(t)==="[object Map]",Di=t=>Li(t)==="[object Set]",nm=t=>Li(t)==="[object Date]",LT=t=>Li(t)==="[object RegExp]",de=t=>typeof t=="function",ze=t=>typeof t=="string",vn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",xy=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),Ny=Object.prototype.toString,Li=t=>Ny.call(t),MT=t=>Li(t).slice(8,-1),Dy=t=>Li(t)==="[object Object]",Lf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=xf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},VT=/-(\w)/g,hn=fl(t=>t.replace(VT,(e,n)=>n?n.toUpperCase():"")),FT=/\B([A-Z])/g,Ls=fl(t=>t.replace(FT,"-$1").toLowerCase()),dl=fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),bu=fl(t=>t?`on${dl(t)}`:""),Ur=(t,e)=>!Object.is(t,e),ci=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ly=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Sc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},My=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let rm;const pl=()=>rm||(rm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ml(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?$T(r):ml(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Le(t))return t}const UT=/;(?![^(]*\))/g,BT=/:([^]+)/,jT=/\/\*[^]*?\*\//g;function $T(t){const e={};return t.replace(jT,"").split(UT).forEach(n=>{if(n){const r=n.split(BT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(ze(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function lU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=aa(e)),n&&(t.style=ml(n)),t}const HT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qT=xf(HT);function Vy(t){return!!t||t===""}function zT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ca(t[r],e[r]);return n}function ca(t,e){if(t===e)return!0;let n=nm(t),r=nm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?zT(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ca(t[o],e[o]))return!1}}return String(t)===String(e)}function Mf(t,e){return t.findIndex(n=>ca(n,e))}const Fy=t=>!!(t&&t.__v_isRef===!0),Vf=t=>ze(t)?t:t==null?"":ce(t)||Le(t)&&(t.toString===Ny||!de(t.toString))?Fy(t)?Vf(t.value):JSON.stringify(t,Uy,2):String(t),Uy=(t,e)=>Fy(e)?Uy(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tu(r,i)+" =>"]=s,n),{})}:Di(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tu(n))}:vn(e)?Tu(e):Le(e)&&!ce(e)&&!Dy(e)?String(e):e,Tu=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class By{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ff(t){return new By(t)}function la(){return Ft}function Cc(t,e=!1){Ft&&Ft.cleanups.push(t)}let Ue;const Iu=new WeakSet;class jy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Iu.has(this)&&(Iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sm(this),qy(this);const e=Ue,n=_n;Ue=this,_n=!0;try{return this.fn()}finally{zy(this),Ue=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jf(e);this.deps=this.depsTail=void 0,sm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uh(this)&&this.run()}get dirty(){return uh(this)}}let $y=0,_o,yo;function Hy(t,e=!1){if(t.flags|=8,e){t.next=yo,yo=t;return}t.next=_o,_o=t}function Uf(){$y++}function Bf(){if(--$y>0)return;if(yo){let e=yo;for(yo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_o;){let e=_o;for(_o=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),jf(r),WT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function uh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lo))return;t.globalVersion=Lo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uh(t)){t.flags&=-3;return}const n=Ue,r=_n;Ue=t,_n=!0;try{qy(t);const s=t.fn(t._value);(e.version===0||Ur(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,_n=r,zy(t),t.flags&=-3}}function jf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function WT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const Ky=[];function ns(){Ky.push(_n),_n=!1}function rs(){const t=Ky.pop();_n=t===void 0?!0:t}function sm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Lo=0;class KT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!_n||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new KT(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Gy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Lo++,this.notify(e)}notify(e){Uf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bf()}}}function Gy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,Es=Symbol(""),hh=Symbol(""),Mo=Symbol("");function Ct(t,e,n){if(_n&&Ue){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gl),s.map=r,s.key=n),s.track()}}function Gn(t,e,n,r,s,i){const o=Pc.get(t);if(!o){Lo++;return}const a=l=>{l&&l.trigger()};if(Uf(),e==="clear")o.forEach(a);else{const l=ce(t),u=l&&Lf(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===Mo||!vn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Mo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Es)),oi(t)&&a(o.get(hh)));break;case"delete":l||(a(o.get(Es)),oi(t)&&a(o.get(hh)));break;case"set":oi(t)&&a(o.get(Es));break}}Bf()}function GT(t,e){const n=Pc.get(t);return n&&n.get(e)}function Ks(t){const e=Ie(t);return e===t?e:(Ct(e,"iterate",Mo),cn(t)?e:e.map(Pt))}function _l(t){return Ct(t=Ie(t),"iterate",Mo),t}const QT={__proto__:null,[Symbol.iterator](){return Au(this,Symbol.iterator,Pt)},concat(...t){return Ks(this).concat(...t.map(e=>ce(e)?Ks(e):e))},entries(){return Au(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return qn(this,"every",t,e,void 0,arguments)},filter(t,e){return qn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return qn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ru(this,"includes",t)},indexOf(...t){return Ru(this,"indexOf",t)},join(t){return Ks(this).join(t)},lastIndexOf(...t){return Ru(this,"lastIndexOf",t)},map(t,e){return qn(this,"map",t,e,void 0,arguments)},pop(){return no(this,"pop")},push(...t){return no(this,"push",t)},reduce(t,...e){return im(this,"reduce",t,e)},reduceRight(t,...e){return im(this,"reduceRight",t,e)},shift(){return no(this,"shift")},some(t,e){return qn(this,"some",t,e,void 0,arguments)},splice(...t){return no(this,"splice",t)},toReversed(){return Ks(this).toReversed()},toSorted(t){return Ks(this).toSorted(t)},toSpliced(...t){return Ks(this).toSpliced(...t)},unshift(...t){return no(this,"unshift",t)},values(){return Au(this,"values",Pt)}};function Au(t,e,n){const r=_l(t),s=r[e]();return r!==t&&!cn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const YT=Array.prototype;function qn(t,e,n,r,s,i){const o=_l(t),a=o!==t&&!cn(t),l=o[e];if(l!==YT[e]){const d=l.apply(t,i);return a?Pt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Pt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function im(t,e,n,r){const s=_l(t);let i=n;return s!==t&&(cn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Pt(a),l,t)}),s[e](i,...r)}function Ru(t,e,n){const r=Ie(t);Ct(r,"iterate",Mo);const s=r[e](...n);return(s===-1||s===!1)&&qf(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function no(t,e,n=[]){ns(),Uf();const r=Ie(t)[e].apply(t,n);return Bf(),rs(),r}const XT=xf("__proto__,__v_isRef,__isVue"),Qy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function JT(t){vn(t)||(t=String(t));const e=Ie(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Yy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cI:ev:i?Zy:Jy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=QT[n]))return l;if(n==="hasOwnProperty")return JT}const a=Reflect.get(e,n,Je(e)?e:r);return(vn(n)?Qy.has(n):XT(n))||(s||Ct(e,"get",n),i)?a:Je(a)?o&&Lf(n)?a:a.value:Le(a)?s?tv(a):fr(a):a}}class Xy extends Yy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Wr(i);if(!cn(r)&&!Wr(r)&&(i=Ie(i),r=Ie(r)),!ce(e)&&Je(i)&&!Je(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Lf(n)?Number(n)<e.length:ke(e,n),a=Reflect.set(e,n,r,Je(e)?e:s);return e===Ie(s)&&(o?Ur(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),a}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!Qy.has(n))&&Ct(e,"has",n),r}ownKeys(e){return Ct(e,"iterate",ce(e)?"length":Es),Reflect.ownKeys(e)}}class ZT extends Yy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const eI=new Xy,tI=new ZT,nI=new Xy(!0);const fh=t=>t,ja=t=>Reflect.getPrototypeOf(t);function rI(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=oi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?fh:e?dh:Pt;return!e&&Ct(i,"iterate",l?hh:Es),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function $a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sI(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);t||(Ur(s,a)&&Ct(o,"get",s),Ct(o,"get",a));const{has:l}=ja(o),u=e?fh:t?dh:Pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ct(Ie(s),"iterate",Es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);return t||(Ur(s,a)&&Ct(o,"has",s),Ct(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ie(a),u=e?fh:t?dh:Pt;return!t&&Ct(l,"iterate",Es),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:$a("add"),set:$a("set"),delete:$a("delete"),clear:$a("clear")}:{add(s){!e&&!cn(s)&&!Wr(s)&&(s=Ie(s));const i=Ie(this);return ja(i).has.call(i,s)||(i.add(s),Gn(i,"add",s,s)),this},set(s,i){!e&&!cn(i)&&!Wr(i)&&(i=Ie(i));const o=Ie(this),{has:a,get:l}=ja(o);let u=a.call(o,s);u||(s=Ie(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Ur(i,h)&&Gn(o,"set",s,i):Gn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:a}=ja(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Gn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=rI(s,t,e)}),n}function $f(t,e){const n=sI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const iI={get:$f(!1,!1)},oI={get:$f(!1,!0)},aI={get:$f(!0,!1)};const Jy=new WeakMap,Zy=new WeakMap,ev=new WeakMap,cI=new WeakMap;function lI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uI(t){return t.__v_skip||!Object.isExtensible(t)?0:lI(MT(t))}function fr(t){return Wr(t)?t:Hf(t,!1,eI,iI,Jy)}function Jn(t){return Hf(t,!1,nI,oI,Zy)}function tv(t){return Hf(t,!0,tI,aI,ev)}function Hf(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rr(t){return Wr(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function qf(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function zf(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Ly(t,"__v_skip",!0),t}const Pt=t=>Le(t)?fr(t):t,dh=t=>Le(t)?tv(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function Kt(t){return nv(t,!1)}function Vo(t){return nv(t,!0)}function nv(t,e){return Je(t)?t:new hI(t,e)}class hI{constructor(e,n){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||cn(e)||Wr(e);e=r?e:Ie(e),Ur(e,n)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function Qe(t){return Je(t)?t.value:t}const fI={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rv(t){return rr(t)?t:new Proxy(t,fI)}class dI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new gl,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function pI(t){return new dI(t)}function mI(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=sv(t,n);return e}class gI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return GT(Ie(this._object),this._key)}}class _I{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function yI(t,e,n){return Je(t)?t:de(t)?new _I(t):Le(t)&&arguments.length>1?sv(t,e,n):Kt(t)}function sv(t,e,n){const r=t[e];return Je(r)?r:new gI(t,e,n)}class vI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Hy(this,!0),!0}get value(){const e=this.dep.track();return Wy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function EI(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new vI(r,s,n)}const Ha={},kc=new WeakMap;let ms;function wI(t,e=!1,n=ms){if(n){let r=kc.get(n);r||kc.set(n,r=[]),r.push(t)}}function bI(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=R=>s?R:cn(R)||s===!1||s===0?Qn(R,1):Qn(R);let h,d,p,g,I=!1,O=!1;if(Je(t)?(d=()=>t.value,I=cn(t)):rr(t)?(d=()=>u(t),I=!0):ce(t)?(O=!0,I=t.some(R=>rr(R)||cn(R)),d=()=>t.map(R=>{if(Je(R))return R.value;if(rr(R))return u(R);if(de(R))return l?l(R,2):R()})):de(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){ns();try{p()}finally{rs()}}const R=ms;ms=h;try{return l?l(t,3,[g]):t(g)}finally{ms=R}}:d=kn,e&&s){const R=d,D=s===!0?1/0:s;d=()=>Qn(R(),D)}const N=la(),x=()=>{h.stop(),N&&N.active&&Df(N.effects,h)};if(i&&e){const R=e;e=(...D)=>{R(...D),x()}}let C=O?new Array(t.length).fill(Ha):Ha;const E=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const D=h.run();if(s||I||(O?D.some((V,b)=>Ur(V,C[b])):Ur(D,C))){p&&p();const V=ms;ms=h;try{const b=[D,C===Ha?void 0:O&&C[0]===Ha?[]:C,g];l?l(e,3,b):e(...b),C=D}finally{ms=V}}}else h.run()};return a&&a(E),h=new jy(d),h.scheduler=o?()=>o(E,!1):E,g=R=>wI(R,!1,h),p=h.onStop=()=>{const R=kc.get(h);if(R){if(l)l(R,4);else for(const D of R)D();kc.delete(h)}},e?r?E(!0):C=h.run():o?o(E.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Qn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Qn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(Di(t)||oi(t))t.forEach(r=>{Qn(r,e,n)});else if(Dy(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t,e,n,r){try{return r?t(...r):t()}catch(s){ha(s,e,n)}}function En(t,e,n,r){if(de(t)){const s=ua(t,e,n,r);return s&&xy(s)&&s.catch(i=>{ha(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){ns(),ua(i,null,10,[t,l,u]),rs();return}}TI(t,n,s,r,o)}function TI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ut=[];let In=-1;const li=[];let Ar=null,Ys=0;const iv=Promise.resolve();let Oc=null;function Un(t){const e=Oc||iv;return t?e.then(this?t.bind(this):t):e}function II(t){let e=In+1,n=Ut.length;for(;e<n;){const r=e+n>>>1,s=Ut[r],i=Fo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wf(t){if(!(t.flags&1)){const e=Fo(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=Fo(n)?Ut.push(t):Ut.splice(II(e),0,t),t.flags|=1,ov()}}function ov(){Oc||(Oc=iv.then(av))}function ph(t){ce(t)?li.push(...t):Ar&&t.id===-1?Ar.splice(Ys+1,0,t):t.flags&1||(li.push(t),t.flags|=1),ov()}function om(t,e,n=In+1){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xc(t){if(li.length){const e=[...new Set(li)].sort((n,r)=>Fo(n)-Fo(r));if(li.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ys=0;Ys<Ar.length;Ys++){const n=Ar[Ys];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Ys=0}}const Fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function av(t){try{for(In=0;In<Ut.length;In++){const e=Ut[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ua(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Ut.length;In++){const e=Ut[In];e&&(e.flags&=-2)}In=-1,Ut.length=0,xc(),Oc=null,(Ut.length||li.length)&&av()}}let at=null,cv=null;function Nc(t){const e=at;return at=t,cv=t&&t.type.__scopeId||null,e}function An(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ym(-1);const i=Nc(e);let o;try{o=t(...s)}finally{Nc(i),r._d&&ym(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function uU(t,e){if(at===null)return t;const n=Il(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ns(),En(l,n,8,[t.el,a,t,e]),rs())}}const AI=Symbol("_vte"),lv=t=>t.__isTeleport,Rr=Symbol("_leaveCb"),qa=Symbol("_enterCb");function RI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return El(()=>{t.isMounted=!0}),fa(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],uv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},hv=t=>{const e=t.subTree;return e.component?hv(e.component):e},SI={name:"BaseTransition",props:uv,setup(t,{slots:e}){const n=Tl(),r=RI();return()=>{const s=e.default&&pv(e.default(),!0);if(!s||!s.length)return;const i=fv(s),o=Ie(t),{mode:a}=o;if(r.isLeaving)return Su(i);const l=am(i);if(!l)return Su(i);let u=mh(l,o,r,n,d=>u=d);l.type!==it&&yi(l,u);let h=n.subTree&&am(n.subTree);if(h&&h.type!==it&&!gn(l,h)&&hv(n).type!==it){let d=mh(h,o,r,n);if(yi(h,d),a==="out-in"&&l.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Su(i);a==="in-out"&&l.type!==it?d.delayLeave=(p,g,I)=>{const O=dv(r,h);O[String(h.key)]=h,p[Rr]=()=>{g(),p[Rr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{I(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function fv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const CI=SI;function dv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function mh(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:I,onLeaveCancelled:O,onBeforeAppear:N,onAppear:x,onAfterAppear:C,onAppearCancelled:E}=e,R=String(t.key),D=dv(n,t),V=(_,w)=>{_&&En(_,r,9,w)},b=(_,w)=>{const P=w[1];V(_,w),ce(_)?_.every(S=>S.length<=1)&&P():_.length<=1&&P()},y={mode:o,persisted:a,beforeEnter(_){let w=l;if(!n.isMounted)if(i)w=N||l;else return;_[Rr]&&_[Rr](!0);const P=D[R];P&&gn(t,P)&&P.el[Rr]&&P.el[Rr](),V(w,[_])},enter(_){let w=u,P=h,S=d;if(!n.isMounted)if(i)w=x||u,P=C||h,S=E||d;else return;let T=!1;const me=_[qa]=ye=>{T||(T=!0,ye?V(S,[_]):V(P,[_]),y.delayedLeave&&y.delayedLeave(),_[qa]=void 0)};w?b(w,[_,me]):me()},leave(_,w){const P=String(t.key);if(_[qa]&&_[qa](!0),n.isUnmounting)return w();V(p,[_]);let S=!1;const T=_[Rr]=me=>{S||(S=!0,w(),me?V(O,[_]):V(I,[_]),_[Rr]=void 0,D[P]===t&&delete D[P])};D[P]=t,g?b(g,[_,T]):T()},clone(_){const w=mh(_,e,n,r,s);return s&&s(w),w}};return y}function Su(t){if(yl(t))return t=ir(t),t.children=null,t}function am(t){if(!yl(t))return lv(t.type)&&t.children?fv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function yi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(pv(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?ir(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Bn(t,e){return de(t)?st({name:t.name},e,{setup:t}):t}function mv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Uo(t,e,n,r,s=!1){if(ce(t)){t.forEach((I,O)=>Uo(I,e&&(ce(e)?e[O]:e),n,r,s));return}if(Br(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Uo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Il(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ve?a.refs={}:a.refs,d=a.setupState,p=Ie(d),g=d===Ve?()=>!1:I=>ke(p,I);if(u!=null&&u!==l&&(ze(u)?(h[u]=null,g(u)&&(d[u]=null)):Je(u)&&(u.value=null)),de(l))ua(l,a,12,[o,h]);else{const I=ze(l),O=Je(l);if(I||O){const N=()=>{if(t.f){const x=I?g(l)?d[l]:h[l]:l.value;s?ce(x)&&Df(x,i):ce(x)?x.includes(i)||x.push(i):I?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else I?(h[l]=o,g(l)&&(d[l]=o)):O&&(l.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,gt(N,n)):N()}}}let cm=!1;const Gs=()=>{cm||(console.error("Hydration completed but contains mismatches."),cm=!0)},PI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",kI=t=>t.namespaceURI.includes("MathML"),za=t=>{if(t.nodeType===1){if(PI(t))return"svg";if(kI(t))return"mathml"}},Wa=t=>t.nodeType===8;function OI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(E,R)=>{if(!R.hasChildNodes()){n(null,E,R),xc(),R._vnode=E;return}d(R.firstChild,E,null,null,null),xc(),R._vnode=E},d=(E,R,D,V,b,y=!1)=>{y=y||!!R.dynamicChildren;const _=Wa(E)&&E.data==="[",w=()=>O(E,R,D,V,b,_),{type:P,ref:S,shapeFlag:T,patchFlag:me}=R;let ye=E.nodeType;R.el=E,me===-2&&(y=!1,R.dynamicChildren=null);let J=null;switch(P){case Ts:ye!==3?R.children===""?(l(R.el=s(""),o(E),E),J=E):J=w():(E.data!==R.children&&(Gs(),E.data=R.children),J=i(E));break;case it:C(E)?(J=i(E),x(R.el=E.content.firstChild,E,D)):ye!==8||_?J=w():J=i(E);break;case Eo:if(_&&(E=i(E),ye=E.nodeType),ye===1||ye===3){J=E;const re=!R.children.length;for(let te=0;te<R.staticCount;te++)re&&(R.children+=J.nodeType===1?J.outerHTML:J.data),te===R.staticCount-1&&(R.anchor=J),J=i(J);return _?i(J):J}else w();break;case kt:_?J=I(E,R,D,V,b,y):J=w();break;default:if(T&1)(ye!==1||R.type.toLowerCase()!==E.tagName.toLowerCase())&&!C(E)?J=w():J=p(E,R,D,V,b,y);else if(T&6){R.slotScopeIds=b;const re=o(E);if(_?J=N(E):Wa(E)&&E.data==="teleport start"?J=N(E,E.data,"teleport end"):J=i(E),e(R,re,null,D,V,za(re),y),Br(R)&&!R.type.__asyncResolved){let te;_?(te=Se(kt),te.anchor=J?J.previousSibling:re.lastChild):te=E.nodeType===3?an(""):Se("div"),te.el=E,R.component.subTree=te}}else T&64?ye!==8?J=w():J=R.type.hydrate(E,R,D,V,b,y,t,g):T&128&&(J=R.type.hydrate(E,R,D,V,za(o(E)),b,y,t,d))}return S!=null&&Uo(S,null,V,R),J},p=(E,R,D,V,b,y)=>{y=y||!!R.dynamicChildren;const{type:_,props:w,patchFlag:P,shapeFlag:S,dirs:T,transition:me}=R,ye=_==="input"||_==="option";if(ye||P!==-1){T&&Rn(R,null,D,"created");let J=!1;if(C(E)){J=Fv(null,me)&&D&&D.vnode.props&&D.vnode.props.appear;const te=E.content.firstChild;J&&me.beforeEnter(te),x(te,E,D),R.el=E=te}if(S&16&&!(w&&(w.innerHTML||w.textContent))){let te=g(E.firstChild,R,E,D,V,b,y);for(;te;){Ka(E,1)||Gs();const We=te;te=te.nextSibling,a(We)}}else if(S&8){let te=R.children;te[0]===`
`&&(E.tagName==="PRE"||E.tagName==="TEXTAREA")&&(te=te.slice(1)),E.textContent!==te&&(Ka(E,0)||Gs(),E.textContent=R.children)}if(w){if(ye||!y||P&48){const te=E.tagName.includes("-");for(const We in w)(ye&&(We.endsWith("value")||We==="indeterminate")||oa(We)&&!ai(We)||We[0]==="."||te)&&r(E,We,null,w[We],void 0,D)}else if(w.onClick)r(E,"onClick",null,w.onClick,void 0,D);else if(P&4&&rr(w.style))for(const te in w.style)w.style[te]}let re;(re=w&&w.onVnodeBeforeMount)&&Ht(re,D,R),T&&Rn(R,null,D,"beforeMount"),((re=w&&w.onVnodeMounted)||T||J)&&qv(()=>{re&&Ht(re,D,R),J&&me.enter(E),T&&Rn(R,null,D,"mounted")},V)}return E.nextSibling},g=(E,R,D,V,b,y,_)=>{_=_||!!R.dynamicChildren;const w=R.children,P=w.length;for(let S=0;S<P;S++){const T=_?w[S]:w[S]=Qt(w[S]),me=T.type===Ts;E?(me&&!_&&S+1<P&&Qt(w[S+1]).type===Ts&&(l(s(E.data.slice(T.children.length)),D,i(E)),E.data=T.children),E=d(E,T,V,b,y,_)):me&&!T.children?l(T.el=s(""),D):(Ka(D,1)||Gs(),n(null,T,D,null,V,b,za(D),y))}return E},I=(E,R,D,V,b,y)=>{const{slotScopeIds:_}=R;_&&(b=b?b.concat(_):_);const w=o(E),P=g(i(E),R,w,D,V,b,y);return P&&Wa(P)&&P.data==="]"?i(R.anchor=P):(Gs(),l(R.anchor=u("]"),w,P),P)},O=(E,R,D,V,b,y)=>{if(Ka(E.parentElement,1)||Gs(),R.el=null,y){const P=N(E);for(;;){const S=i(E);if(S&&S!==P)a(S);else break}}const _=i(E),w=o(E);return a(E),n(null,R,w,_,D,V,za(w),b),D&&(D.vnode.el=R.el,bl(D,R.el)),_},N=(E,R="[",D="]")=>{let V=0;for(;E;)if(E=i(E),E&&Wa(E)&&(E.data===R&&V++,E.data===D)){if(V===0)return i(E);V--}return E},x=(E,R,D)=>{const V=R.parentNode;V&&V.replaceChild(E,R);let b=D;for(;b;)b.vnode.el===R&&(b.vnode.el=b.subTree.el=E),b=b.parent},C=E=>E.nodeType===1&&E.tagName==="TEMPLATE";return[h,d]}const lm="data-allow-mismatch",xI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ka(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(lm);)t=t.parentElement;const n=t&&t.getAttribute(lm);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(xI[e])}}pl().requestIdleCallback;pl().cancelIdleCallback;const Br=t=>!!t.type.__asyncLoader,yl=t=>t.type.__isKeepAlive,NI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Tl(),r=n.ctx;if(!r.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(C,E,R,D,V)=>{const b=C.component;u(C,E,R,0,a),l(b.vnode,C,E,R,b,a,D,C.slotScopeIds,V),gt(()=>{b.isDeactivated=!1,b.a&&ci(b.a);const y=C.props&&C.props.onVnodeMounted;y&&Ht(y,b.parent,C)},a)},r.deactivate=C=>{const E=C.component;Lc(E.m),Lc(E.a),u(C,p,null,1,a),gt(()=>{E.da&&ci(E.da);const R=C.props&&C.props.onVnodeUnmounted;R&&Ht(R,E.parent,C),E.isDeactivated=!0},a)};function g(C){Cu(C),h(C,n,a,!0)}function I(C){s.forEach((E,R)=>{const D=Th(E.type);D&&!C(D)&&O(R)})}function O(C){const E=s.get(C);E&&(!o||!gn(E,o))?g(E):o&&Cu(o),s.delete(C),i.delete(C)}yn(()=>[t.include,t.exclude],([C,E])=>{C&&I(R=>oo(C,R)),E&&I(R=>!oo(E,R))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(Mc(n.subTree.type)?gt(()=>{s.set(N,Ga(n.subTree))},n.subTree.suspense):s.set(N,Ga(n.subTree)))};return El(x),vv(x),fa(()=>{s.forEach(C=>{const{subTree:E,suspense:R}=n,D=Ga(E);if(C.type===D.type&&C.key===D.key){Cu(D);const V=D.component.da;V&&gt(V,R);return}g(C)})}),()=>{if(N=null,!e.default)return o=null;const C=e.default(),E=C[0];if(C.length>1)return o=null,C;if(!Cs(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let R=Ga(E);if(R.type===it)return o=null,R;const D=R.type,V=Th(Br(R)?R.type.__asyncResolved||{}:D),{include:b,exclude:y,max:_}=t;if(b&&(!V||!oo(b,V))||y&&V&&oo(y,V))return R.shapeFlag&=-257,o=R,E;const w=R.key==null?D:R.key,P=s.get(w);return R.el&&(R=ir(R),E.shapeFlag&128&&(E.ssContent=R)),N=w,P?(R.el=P.el,R.component=P.component,R.transition&&yi(R,R.transition),R.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),_&&i.size>parseInt(_,10)&&O(i.values().next().value)),R.shapeFlag|=256,o=R,Mc(E.type)?E:R}}},DI=NI;function oo(t,e){return ce(t)?t.some(n=>oo(n,e)):ze(t)?t.split(",").includes(e):LT(t)?(t.lastIndex=0,t.test(e)):!1}function gv(t,e){yv(t,"a",e)}function _v(t,e){yv(t,"da",e)}function yv(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)yl(s.parent.vnode)&&LI(r,e,n,s),s=s.parent}}function LI(t,e,n,r){const s=vl(e,t,r,!0);Ev(()=>{Df(r[e],s)},n)}function Cu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ga(t){return t.shapeFlag&128?t.ssContent:t}function vl(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ns();const a=da(n),l=En(e,n,t,o);return a(),rs(),l});return r?s.unshift(i):s.push(i),i}}const dr=t=>(e,n=ft)=>{(!Ho||t==="sp")&&vl(t,(...r)=>e(...r),n)},MI=dr("bm"),El=dr("m"),VI=dr("bu"),vv=dr("u"),fa=dr("bum"),Ev=dr("um"),FI=dr("sp"),UI=dr("rtg"),BI=dr("rtc");function wv(t,e=ft){vl("ec",t,e)}const bv="components";function Bo(t,e){return Iv(bv,t,!0,e)||t}const Tv=Symbol.for("v-ndc");function jI(t){return ze(t)?Iv(bv,t,!1)||t:t||Tv}function Iv(t,e,n=!0,r=!1){const s=at||ft;if(s){const i=s.type;{const a=Th(i,!1);if(a&&(a===e||a===hn(e)||a===dl(hn(e))))return i}const o=um(s[t]||i[t],e)||um(s.appContext[t],e);return!o&&r?i:o}}function um(t,e){return t&&(t[e]||t[hn(e)]||t[dl(hn(e))])}function hU(t,e,n,r){let s;const i=n,o=ce(t);if(o||ze(t)){const a=o&&rr(t);let l=!1;a&&(l=!cn(t),t=_l(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?Pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function fU(t,e,n={},r,s){if(at.ce||at.parent&&Br(at.parent)&&at.parent.ce)return Bt(),Yn(kt,null,[Se("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Bt();const o=i&&Av(i(n)),a=n.key||o&&o.key,l=Yn(kt,{key:(a&&!vn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Av(t){return t.some(e=>Cs(e)?!(e.type===it||e.type===kt&&!Av(e.children)):!0)?t:null}const gh=t=>t?Qv(t)?Il(t):gh(t.parent):null,vo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gh(t.parent),$root:t=>gh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Kf(t),$forceUpdate:t=>t.f||(t.f=()=>{Wf(t.update)}),$nextTick:t=>t.n||(t.n=Un.bind(t.proxy)),$watch:t=>cA.bind(t)}),Pu=(t,e)=>t!==Ve&&!t.__isScriptSetup&&ke(t,e),$I={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pu(r,e))return o[e]=1,r[e];if(s!==Ve&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ve&&ke(n,e))return o[e]=4,n[e];_h&&(o[e]=0)}}const h=vo[e];let d,p;if(h)return e==="$attrs"&&Ct(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&ke(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pu(s,e)?(s[e]=n,!0):r!==Ve&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&ke(t,o)||Pu(e,o)||(a=i[0])&&ke(a,o)||ke(r,o)||ke(vo,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _h=!0;function HI(t){const e=Kf(t),n=t.proxy,r=t.ctx;_h=!1,e.beforeCreate&&fm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:I,activated:O,deactivated:N,beforeDestroy:x,beforeUnmount:C,destroyed:E,unmounted:R,render:D,renderTracked:V,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:P,components:S,directives:T,filters:me}=e;if(u&&qI(u,r,null),o)for(const re in o){const te=o[re];de(te)&&(r[re]=te.bind(n))}if(s){const re=s.call(n,n);Le(re)&&(t.data=fr(re))}if(_h=!0,i)for(const re in i){const te=i[re],We=de(te)?te.bind(n,n):de(te.get)?te.get.bind(n,n):kn,fn=!de(te)&&de(te.set)?te.set.bind(n):kn,nn=Fe({get:We,set:fn});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Ke=>nn.value=Ke})}if(a)for(const re in a)Rv(a[re],r,n,re);if(l){const re=de(l)?l.call(n):l;Reflect.ownKeys(re).forEach(te=>{bs(te,re[te])})}h&&fm(h,t,"c");function J(re,te){ce(te)?te.forEach(We=>re(We.bind(n))):te&&re(te.bind(n))}if(J(MI,d),J(El,p),J(VI,g),J(vv,I),J(gv,O),J(_v,N),J(wv,y),J(BI,V),J(UI,b),J(fa,C),J(Ev,R),J(FI,_),ce(w))if(w.length){const re=t.exposed||(t.exposed={});w.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:We=>n[te]=We})})}else t.exposed||(t.exposed={});D&&t.render===kn&&(t.render=D),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),T&&(t.directives=T),_&&mv(t)}function qI(t,e,n=kn){ce(t)&&(t=yh(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function fm(t,e,n){En(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rv(t,e,n,r){let s=r.includes(".")?jv(n,r):()=>n[r];if(ze(t)){const i=e[t];de(i)&&yn(s,i)}else if(de(t))yn(s,t.bind(n));else if(Le(t))if(ce(t))t.forEach(i=>Rv(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&yn(s,i,t)}}function Kf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Dc(l,u,o,!0)),Dc(l,e,o)),Le(e)&&i.set(e,l),l}function Dc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Dc(t,i,n,!0),s&&s.forEach(o=>Dc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zI={data:dm,props:pm,emits:pm,methods:ao,computed:ao,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ao,directives:ao,watch:KI,provide:dm,inject:WI};function dm(t,e){return e?t?function(){return st(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function WI(t,e){return ao(yh(t),yh(e))}function yh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ao(t,e){return t?st(Object.create(null),t,e):e}function pm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:st(Object.create(null),hm(t),hm(e??{})):e}function KI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function Sv(){return{app:null,config:{isNativeTag:NT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GI=0;function QI(t,e){return function(r,s=null){de(r)||(r=st({},r)),s!=null&&!Le(s)&&(s=null);const i=Sv(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:GI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Xv,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...d)):de(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const g=u._ceVNode||Se(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,h):t(g,h,p),l=!0,u._container=h,h.__vue_app__=u,Il(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(En(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ws;ws=u;try{return h()}finally{ws=d}}};return u}}let ws=null;function bs(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=ft||at;if(r||ws){const s=ws?ws._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Gf(){return!!(ft||at||ws)}const Cv={},Pv=()=>Object.create(Cv),kv=t=>Object.getPrototypeOf(t)===Cv;function YI(t,e,n,r=!1){const s={},i=Pv();t.propsDefaults=Object.create(null),Ov(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function XI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(wl(t.emitsOptions,p))continue;const g=e[p];if(l)if(ke(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const I=hn(p);s[I]=vh(l,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Ov(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!ke(e,d)&&((h=Ls(d))===d||!ke(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=vh(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!ke(e,d))&&(delete i[d],u=!0)}u&&Gn(t.attrs,"set","")}function Ov(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ai(l))continue;const u=e[l];let h;s&&ke(s,h=hn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:wl(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=a||Ve;for(let h=0;h<i.length;h++){const d=i[h];n[d]=vh(s,l,d,u[d],t,!ke(u,d))}}return o}function vh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=da(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ls(n))&&(r=!0))}return r}const JI=new WeakMap;function xv(t,e,n=!1){const r=n?JI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=d=>{l=!0;const[p,g]=xv(d,e,!0);st(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Le(t)&&r.set(t,ii),ii;if(ce(i))for(let h=0;h<i.length;h++){const d=hn(i[h]);mm(d)&&(o[d]=Ve)}else if(i)for(const h in i){const d=hn(h);if(mm(d)){const p=i[h],g=o[d]=ce(p)||de(p)?{type:p}:st({},p),I=g.type;let O=!1,N=!0;if(ce(I))for(let x=0;x<I.length;++x){const C=I[x],E=de(C)&&C.name;if(E==="Boolean"){O=!0;break}else E==="String"&&(N=!1)}else O=de(I)&&I.name==="Boolean";g[0]=O,g[1]=N,(O||ke(g,"default"))&&a.push(d)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function mm(t){return t[0]!=="$"&&!ai(t)}const Nv=t=>t[0]==="_"||t==="$stable",Qf=t=>ce(t)?t.map(Qt):[Qt(t)],ZI=(t,e,n)=>{if(e._n)return e;const r=An((...s)=>Qf(e(...s)),n);return r._c=!1,r},Dv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nv(s))continue;const i=t[s];if(de(i))e[s]=ZI(s,i,r);else if(i!=null){const o=Qf(i);e[s]=()=>o}}},Lv=(t,e)=>{const n=Qf(e);t.slots.default=()=>n},Mv=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},eA=(t,e,n)=>{const r=t.slots=Pv();if(t.vnode.shapeFlag&32){const s=e._;s?(Mv(r,e,n),n&&Ly(r,"_",s,!0)):Dv(e,r)}else e&&Lv(t,e)},tA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Mv(s,e,n):(i=!e.$stable,Dv(e,s)),o=e}else e&&(Lv(t,e),o={default:1});if(i)for(const a in s)!Nv(a)&&o[a]==null&&delete s[a]},gt=qv;function nA(t){return Vv(t)}function rA(t){return Vv(t,OI)}function Vv(t,e){const n=pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=kn,insertStaticContent:I}=t,O=(A,k,M,$=null,U=null,q=null,Q=void 0,K=null,W=!!k.dynamicChildren)=>{if(A===k)return;A&&!gn(A,k)&&($=B(A),Ke(A,U,q,!0),A=null),k.patchFlag===-2&&(W=!1,k.dynamicChildren=null);const{type:z,ref:le,shapeFlag:X}=k;switch(z){case Ts:N(A,k,M,$);break;case it:x(A,k,M,$);break;case Eo:A==null&&C(k,M,$,Q);break;case kt:S(A,k,M,$,U,q,Q,K,W);break;default:X&1?D(A,k,M,$,U,q,Q,K,W):X&6?T(A,k,M,$,U,q,Q,K,W):(X&64||X&128)&&z.process(A,k,M,$,U,q,Q,K,W,ne)}le!=null&&U&&Uo(le,A&&A.ref,q,k||A,!k)},N=(A,k,M,$)=>{if(A==null)r(k.el=a(k.children),M,$);else{const U=k.el=A.el;k.children!==A.children&&u(U,k.children)}},x=(A,k,M,$)=>{A==null?r(k.el=l(k.children||""),M,$):k.el=A.el},C=(A,k,M,$)=>{[A.el,A.anchor]=I(A.children,k,M,$,A.el,A.anchor)},E=({el:A,anchor:k},M,$)=>{let U;for(;A&&A!==k;)U=p(A),r(A,M,$),A=U;r(k,M,$)},R=({el:A,anchor:k})=>{let M;for(;A&&A!==k;)M=p(A),s(A),A=M;s(k)},D=(A,k,M,$,U,q,Q,K,W)=>{k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),A==null?V(k,M,$,U,q,Q,K,W):_(A,k,U,q,Q,K,W)},V=(A,k,M,$,U,q,Q,K)=>{let W,z;const{props:le,shapeFlag:X,transition:oe,dirs:se}=A;if(W=A.el=o(A.type,q,le&&le.is,le),X&8?h(W,A.children):X&16&&y(A.children,W,null,$,U,ku(A,q),Q,K),se&&Rn(A,null,$,"created"),b(W,A,A.scopeId,Q,$),le){for(const Ce in le)Ce!=="value"&&!ai(Ce)&&i(W,Ce,null,le[Ce],q,$);"value"in le&&i(W,"value",null,le.value,q),(z=le.onVnodeBeforeMount)&&Ht(z,$,A)}se&&Rn(A,null,$,"beforeMount");const he=Fv(U,oe);he&&oe.beforeEnter(W),r(W,k,M),((z=le&&le.onVnodeMounted)||he||se)&&gt(()=>{z&&Ht(z,$,A),he&&oe.enter(W),se&&Rn(A,null,$,"mounted")},U)},b=(A,k,M,$,U)=>{if(M&&g(A,M),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(U){let q=U.subTree;if(k===q||Mc(q.type)&&(q.ssContent===k||q.ssFallback===k)){const Q=U.vnode;b(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},y=(A,k,M,$,U,q,Q,K,W=0)=>{for(let z=W;z<A.length;z++){const le=A[z]=K?Sr(A[z]):Qt(A[z]);O(null,le,k,M,$,U,q,Q,K)}},_=(A,k,M,$,U,q,Q)=>{const K=k.el=A.el;let{patchFlag:W,dynamicChildren:z,dirs:le}=k;W|=A.patchFlag&16;const X=A.props||Ve,oe=k.props||Ve;let se;if(M&&hs(M,!1),(se=oe.onVnodeBeforeUpdate)&&Ht(se,M,k,A),le&&Rn(k,A,M,"beforeUpdate"),M&&hs(M,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&h(K,""),z?w(A.dynamicChildren,z,K,M,$,ku(k,U),q):Q||te(A,k,K,null,M,$,ku(k,U),q,!1),W>0){if(W&16)P(K,X,oe,M,U);else if(W&2&&X.class!==oe.class&&i(K,"class",null,oe.class,U),W&4&&i(K,"style",X.style,oe.style,U),W&8){const he=k.dynamicProps;for(let Ce=0;Ce<he.length;Ce++){const Ae=he[Ce],bt=X[Ae],ut=oe[Ae];(ut!==bt||Ae==="value")&&i(K,Ae,bt,ut,U,M)}}W&1&&A.children!==k.children&&h(K,k.children)}else!Q&&z==null&&P(K,X,oe,M,U);((se=oe.onVnodeUpdated)||le)&&gt(()=>{se&&Ht(se,M,k,A),le&&Rn(k,A,M,"updated")},$)},w=(A,k,M,$,U,q,Q)=>{for(let K=0;K<k.length;K++){const W=A[K],z=k[K],le=W.el&&(W.type===kt||!gn(W,z)||W.shapeFlag&70)?d(W.el):M;O(W,z,le,null,$,U,q,Q,!0)}},P=(A,k,M,$,U)=>{if(k!==M){if(k!==Ve)for(const q in k)!ai(q)&&!(q in M)&&i(A,q,k[q],null,U,$);for(const q in M){if(ai(q))continue;const Q=M[q],K=k[q];Q!==K&&q!=="value"&&i(A,q,K,Q,U,$)}"value"in M&&i(A,"value",k.value,M.value,U)}},S=(A,k,M,$,U,q,Q,K,W)=>{const z=k.el=A?A.el:a(""),le=k.anchor=A?A.anchor:a("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:se}=k;se&&(K=K?K.concat(se):se),A==null?(r(z,M,$),r(le,M,$),y(k.children||[],M,le,U,q,Q,K,W)):X>0&&X&64&&oe&&A.dynamicChildren?(w(A.dynamicChildren,oe,M,U,q,Q,K),(k.key!=null||U&&k===U.subTree)&&Uv(A,k,!0)):te(A,k,M,le,U,q,Q,K,W)},T=(A,k,M,$,U,q,Q,K,W)=>{k.slotScopeIds=K,A==null?k.shapeFlag&512?U.ctx.activate(k,M,$,Q,W):me(k,M,$,U,q,Q,W):ye(A,k,W)},me=(A,k,M,$,U,q,Q)=>{const K=A.component=RA(A,$,U);if(yl(A)&&(K.ctx.renderer=ne),SA(K,!1,Q),K.asyncDep){if(U&&U.registerDep(K,J,Q),!A.el){const W=K.subTree=Se(it);x(null,W,k,M)}}else J(K,A,k,M,U,q,Q)},ye=(A,k,M)=>{const $=k.component=A.component;if(pA(A,k,M))if($.asyncDep&&!$.asyncResolved){re($,k,M);return}else $.next=k,$.update();else k.el=A.el,$.vnode=k},J=(A,k,M,$,U,q,Q)=>{const K=()=>{if(A.isMounted){let{next:X,bu:oe,u:se,parent:he,vnode:Ce}=A;{const Tt=Bv(A);if(Tt){X&&(X.el=Ce.el,re(A,X,Q)),Tt.asyncDep.then(()=>{A.isUnmounted||K()});return}}let Ae=X,bt;hs(A,!1),X?(X.el=Ce.el,re(A,X,Q)):X=Ce,oe&&ci(oe),(bt=X.props&&X.props.onVnodeBeforeUpdate)&&Ht(bt,he,X,Ce),hs(A,!0);const ut=Ou(A),dt=A.subTree;A.subTree=ut,O(dt,ut,d(dt.el),B(dt),A,U,q),X.el=ut.el,Ae===null&&bl(A,ut.el),se&&gt(se,U),(bt=X.props&&X.props.onVnodeUpdated)&&gt(()=>Ht(bt,he,X,Ce),U)}else{let X;const{el:oe,props:se}=k,{bm:he,m:Ce,parent:Ae,root:bt,type:ut}=A,dt=Br(k);if(hs(A,!1),he&&ci(he),!dt&&(X=se&&se.onVnodeBeforeMount)&&Ht(X,Ae,k),hs(A,!0),oe&&Ne){const Tt=()=>{A.subTree=Ou(A),Ne(oe,A.subTree,A,U,null)};dt&&ut.__asyncHydrate?ut.__asyncHydrate(oe,A,Tt):Tt()}else{bt.ce&&bt.ce._injectChildStyle(ut);const Tt=A.subTree=Ou(A);O(null,Tt,M,$,A,U,q),k.el=Tt.el}if(Ce&&gt(Ce,U),!dt&&(X=se&&se.onVnodeMounted)){const Tt=k;gt(()=>Ht(X,Ae,Tt),U)}(k.shapeFlag&256||Ae&&Br(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&A.a&&gt(A.a,U),A.isMounted=!0,k=M=$=null}};A.scope.on();const W=A.effect=new jy(K);A.scope.off();const z=A.update=W.run.bind(W),le=A.job=W.runIfDirty.bind(W);le.i=A,le.id=A.uid,W.scheduler=()=>Wf(le),hs(A,!0),z()},re=(A,k,M)=>{k.component=A;const $=A.vnode.props;A.vnode=k,A.next=null,XI(A,k.props,$,M),tA(A,k.children,M),ns(),om(A),rs()},te=(A,k,M,$,U,q,Q,K,W=!1)=>{const z=A&&A.children,le=A?A.shapeFlag:0,X=k.children,{patchFlag:oe,shapeFlag:se}=k;if(oe>0){if(oe&128){fn(z,X,M,$,U,q,Q,K,W);return}else if(oe&256){We(z,X,M,$,U,q,Q,K,W);return}}se&8?(le&16&&jt(z,U,q),X!==z&&h(M,X)):le&16?se&16?fn(z,X,M,$,U,q,Q,K,W):jt(z,U,q,!0):(le&8&&h(M,""),se&16&&y(X,M,$,U,q,Q,K,W))},We=(A,k,M,$,U,q,Q,K,W)=>{A=A||ii,k=k||ii;const z=A.length,le=k.length,X=Math.min(z,le);let oe;for(oe=0;oe<X;oe++){const se=k[oe]=W?Sr(k[oe]):Qt(k[oe]);O(A[oe],se,M,null,U,q,Q,K,W)}z>le?jt(A,U,q,!0,!1,X):y(k,M,$,U,q,Q,K,W,X)},fn=(A,k,M,$,U,q,Q,K,W)=>{let z=0;const le=k.length;let X=A.length-1,oe=le-1;for(;z<=X&&z<=oe;){const se=A[z],he=k[z]=W?Sr(k[z]):Qt(k[z]);if(gn(se,he))O(se,he,M,null,U,q,Q,K,W);else break;z++}for(;z<=X&&z<=oe;){const se=A[X],he=k[oe]=W?Sr(k[oe]):Qt(k[oe]);if(gn(se,he))O(se,he,M,null,U,q,Q,K,W);else break;X--,oe--}if(z>X){if(z<=oe){const se=oe+1,he=se<le?k[se].el:$;for(;z<=oe;)O(null,k[z]=W?Sr(k[z]):Qt(k[z]),M,he,U,q,Q,K,W),z++}}else if(z>oe)for(;z<=X;)Ke(A[z],U,q,!0),z++;else{const se=z,he=z,Ce=new Map;for(z=he;z<=oe;z++){const Dt=k[z]=W?Sr(k[z]):Qt(k[z]);Dt.key!=null&&Ce.set(Dt.key,z)}let Ae,bt=0;const ut=oe-he+1;let dt=!1,Tt=0;const _r=new Array(ut);for(z=0;z<ut;z++)_r[z]=0;for(z=se;z<=X;z++){const Dt=A[z];if(bt>=ut){Ke(Dt,U,q,!0);continue}let rn;if(Dt.key!=null)rn=Ce.get(Dt.key);else for(Ae=he;Ae<=oe;Ae++)if(_r[Ae-he]===0&&gn(Dt,k[Ae])){rn=Ae;break}rn===void 0?Ke(Dt,U,q,!0):(_r[rn-he]=z+1,rn>=Tt?Tt=rn:dt=!0,O(Dt,k[rn],M,null,U,q,Q,K,W),bt++)}const js=dt?sA(_r):ii;for(Ae=js.length-1,z=ut-1;z>=0;z--){const Dt=he+z,rn=k[Dt],$s=Dt+1<le?k[Dt+1].el:$;_r[z]===0?O(null,rn,M,$s,U,q,Q,K,W):dt&&(Ae<0||z!==js[Ae]?nn(rn,M,$s,2):Ae--)}}},nn=(A,k,M,$,U=null)=>{const{el:q,type:Q,transition:K,children:W,shapeFlag:z}=A;if(z&6){nn(A.component.subTree,k,M,$);return}if(z&128){A.suspense.move(k,M,$);return}if(z&64){Q.move(A,k,M,ne);return}if(Q===kt){r(q,k,M);for(let X=0;X<W.length;X++)nn(W[X],k,M,$);r(A.anchor,k,M);return}if(Q===Eo){E(A,k,M);return}if($!==2&&z&1&&K)if($===0)K.beforeEnter(q),r(q,k,M),gt(()=>K.enter(q),U);else{const{leave:X,delayLeave:oe,afterLeave:se}=K,he=()=>r(q,k,M),Ce=()=>{X(q,()=>{he(),se&&se()})};oe?oe(q,he,Ce):Ce()}else r(q,k,M)},Ke=(A,k,M,$=!1,U=!1)=>{const{type:q,props:Q,ref:K,children:W,dynamicChildren:z,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:se}=A;if(X===-2&&(U=!1),K!=null&&Uo(K,null,M,A,!0),se!=null&&(k.renderCache[se]=void 0),le&256){k.ctx.deactivate(A);return}const he=le&1&&oe,Ce=!Br(A);let Ae;if(Ce&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&Ht(Ae,k,A),le&6)Tn(A.component,M,$);else{if(le&128){A.suspense.unmount(M,$);return}he&&Rn(A,null,k,"beforeUnmount"),le&64?A.type.remove(A,k,M,ne,$):z&&!z.hasOnce&&(q!==kt||X>0&&X&64)?jt(z,k,M,!1,!0):(q===kt&&X&384||!U&&le&16)&&jt(W,k,M),$&&Ge(A)}(Ce&&(Ae=Q&&Q.onVnodeUnmounted)||he)&&gt(()=>{Ae&&Ht(Ae,k,A),he&&Rn(A,null,k,"unmounted")},M)},Ge=A=>{const{type:k,el:M,anchor:$,transition:U}=A;if(k===kt){gr(M,$);return}if(k===Eo){R(A);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,W=()=>Q(M,q);K?K(A.el,q,W):W()}else q()},gr=(A,k)=>{let M;for(;A!==k;)M=p(A),s(A),A=M;s(k)},Tn=(A,k,M)=>{const{bum:$,scope:U,job:q,subTree:Q,um:K,m:W,a:z}=A;Lc(W),Lc(z),$&&ci($),U.stop(),q&&(q.flags|=8,Ke(Q,A,k,M)),K&&gt(K,k),gt(()=>{A.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},jt=(A,k,M,$=!1,U=!1,q=0)=>{for(let Q=q;Q<A.length;Q++)Ke(A[Q],k,M,$,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const k=p(A.anchor||A.el),M=k&&k[AI];return M?p(M):k};let Z=!1;const Y=(A,k,M)=>{A==null?k._vnode&&Ke(k._vnode,null,null,!0):O(k._vnode||null,A,k,null,null,null,M),k._vnode=A,Z||(Z=!0,om(),xc(),Z=!1)},ne={p:O,um:Ke,m:nn,r:Ge,mt:me,mc:y,pc:te,pbc:w,n:B,o:t};let we,Ne;return e&&([we,Ne]=e(ne)),{render:Y,hydrate:we,createApp:QI(Y,we)}}function ku({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uv(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Uv(o,a)),a.type===Ts&&(a.el=o.el)}}function sA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bv(e)}function Lc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const iA=Symbol.for("v-scx"),oA=()=>xt(iA);function aA(t,e){return Yf(t,null,e)}function yn(t,e,n){return Yf(t,e,n)}function Yf(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(Ho){if(i==="sync"){const g=oA();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=kn,g.resume=kn,g.pause=kn,g}}const h=ft;a.call=(g,I,O)=>En(g,h,I,O);let d=!1;i==="post"?a.scheduler=g=>{gt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,I)=>{I?g():Wf(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=bI(t,e,a);return Ho&&(u?u.push(p):l&&p()),p}function cA(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?jv(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=da(this),a=Yf(s,i.bind(r),n);return o(),a}function jv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Ls(e)}Modifiers`];function uA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&lA(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>ze(h)?h.trim():h)),o.number&&(s=n.map(Sc)));let a,l=r[a=bu(e)]||r[a=bu(hn(e))];!l&&i&&(l=r[a=bu(Ls(e))]),l&&En(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,En(u,t,6,s)}}function $v(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=$v(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Le(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):st(o,i),Le(t)&&r.set(t,o),o)}function wl(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Ls(e))||ke(t,e))}function Ou(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:I,inheritAttrs:O}=t,N=Nc(t);let x,C;try{if(n.shapeFlag&4){const R=s||r,D=R;x=Qt(u.call(D,R,h,d,g,p,I)),C=a}else{const R=e;x=Qt(R.length>1?R(d,{attrs:a,slots:o,emit:l}):R(d,null)),C=e.props?a:fA(a)}}catch(R){wo.length=0,ha(R,t,1),x=Se(it)}let E=x;if(C&&O!==!1){const R=Object.keys(C),{shapeFlag:D}=E;R.length&&D&7&&(i&&R.some(Nf)&&(C=dA(C,i)),E=ir(E,C,!1,!0))}return n.dirs&&(E=ir(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&yi(E,n.transition),x=E,Nc(N),x}function hA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Cs(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const fA=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},dA=(t,e)=>{const n={};for(const r in t)(!Nf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!wl(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gm(r,o,u):!0:!!o;return!1}function gm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wl(n,i))return!0}return!1}function bl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mc=t=>t.__isSuspense;let Eh=0;const mA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)gA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}_A(t,e,n,r,s,o,a,l,u)}},hydrate:yA,normalize:vA},Xf=mA;function jo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function gA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Hv(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(jo(t,"onPending"),jo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ui(p,t.ssFallback)):p.resolve(!1,!0)}function _A(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:I,pendingBranch:O,isInFallback:N,isHydrating:x}=d;if(O)d.pendingBranch=p,gn(p,O)?(l(O,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(x||(l(I,g,n,r,s,null,i,o,a),ui(d,g)))):(d.pendingId=Eh++,x?(d.isHydrating=!1,d.activeBranch=O):u(O,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(I,g,n,r,s,null,i,o,a),ui(d,g))):I&&gn(p,I)?(l(I,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(I&&gn(p,I))l(I,p,n,r,s,d,i,o,a),ui(d,p);else if(jo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=Eh++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:C,pendingId:E}=d;C>0?setTimeout(()=>{d.pendingId===E&&d.fallback(g)},C):C===0&&d.fallback(g)}}function Hv(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:g,n:I,o:{parentNode:O,remove:N}}=u;let x;const C=EA(t);C&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const E=t.props?My(t.props.timeout):void 0,R=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Eh++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:y,activeBranch:_,pendingBranch:w,pendingId:P,effects:S,parentComponent:T,container:me}=D;let ye=!1;D.isHydrating?D.isHydrating=!1:V||(ye=_&&w.transition&&w.transition.mode==="out-in",ye&&(_.transition.afterLeave=()=>{P===D.pendingId&&(p(w,me,i===R?I(_):i,0),ph(S))}),_&&(O(_.el)===me&&(i=I(_)),g(_,T,D,!0)),ye||p(w,me,i,0)),ui(D,w),D.pendingBranch=null,D.isInFallback=!1;let J=D.parent,re=!1;for(;J;){if(J.pendingBranch){J.effects.push(...S),re=!0;break}J=J.parent}!re&&!ye&&ph(S),D.effects=[],C&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),jo(y,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:b,activeBranch:y,parentComponent:_,container:w,namespace:P}=D;jo(b,"onFallback");const S=I(y),T=()=>{D.isInFallback&&(d(null,V,w,S,_,null,P,a,l),ui(D,V))},me=V.transition&&V.transition.mode==="out-in";me&&(y.transition.afterLeave=T),D.isInFallback=!0,g(y,_,null,!0),me||T()},move(V,b,y){D.activeBranch&&p(D.activeBranch,V,b,y),D.container=V},next(){return D.activeBranch&&I(D.activeBranch)},registerDep(V,b,y){const _=!!D.pendingBranch;_&&D.deps++;const w=V.vnode.el;V.asyncDep.catch(P=>{ha(P,V,0)}).then(P=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:S}=V;bh(V,P,!1),w&&(S.el=w);const T=!w&&V.subTree.el;b(V,S,O(w||V.subTree.el),w?null:I(V.subTree),D,o,y),T&&N(T),bl(V,S.el),_&&--D.deps===0&&D.resolve()})},unmount(V,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,b),D.pendingBranch&&g(D.pendingBranch,n,V,b)}};return D}function yA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Hv(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function vA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=_m(r?n.default:n),t.ssFallback=r?_m(n.fallback):Se(it)}function _m(t){let e;if(de(t)){const n=vi&&t._c;n&&(t._d=!1,Bt()),t=t(),n&&(t._d=!0,e=Wt,zv())}return ce(t)&&(t=hA(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function qv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):ph(t)}function ui(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,bl(r,s))}function EA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const kt=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),wo=[];let Wt=null;function Bt(t=!1){wo.push(Wt=t?null:[])}function zv(){wo.pop(),Wt=wo[wo.length-1]||null}let vi=1;function ym(t,e=!1){vi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Wv(t){return t.dynamicChildren=vi>0?Wt||ii:null,zv(),vi>0&&Wt&&Wt.push(t),t}function $o(t,e,n,r,s,i){return Wv($e(t,e,n,r,s,i,!0))}function Yn(t,e,n,r,s){return Wv(Se(t,e,n,r,s,!0))}function Cs(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Kv=({key:t})=>t??null,uc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Je(t)||de(t)?{i:at,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kv(e),ref:e&&uc(e),scopeId:cv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return a?(Jf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),vi>0&&!o&&Wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Wt.push(l),l}const Se=wA;function wA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tv)&&(t=it),Cs(t)){const a=ir(t,e,!0);return n&&Jf(a,n),vi>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag=-2,a}if(OA(t)&&(t=t.__vccOpts),e){e=bA(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=aa(a)),Le(l)&&(qf(l)&&!ce(l)&&(l=st({},l)),e.style=ml(l))}const o=ze(t)?1:Mc(t)?128:lv(t)?64:Le(t)?4:de(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function bA(t){return t?qf(t)||kv(t)?st({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Gv(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Kv(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(uc(e)):[i,uc(e)]:uc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&yi(h,l.clone(h)),h}function an(t=" ",e=0){return Se(Ts,null,t,e)}function dU(t,e){const n=Se(Eo,null,t);return n.staticCount=e,n}function TA(t="",e=!1){return e?(Bt(),Yn(it,null,t)):Se(it,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Se(it):ce(t)?Se(kt,null,t.slice()):Cs(t)?Sr(t):Se(Ts,null,String(t))}function Sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function Jf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!kv(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(s==="style")e.style=ml([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ht(t,e,n,r=null){En(t,e,7,[n,r])}const IA=Sv();let AA=0;function RA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||IA,i={uid:AA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new By(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xv(r,s),emitsOptions:$v(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uA.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Tl=()=>ft||at;let Vc,wh;{const t=pl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vc=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),wh=e("__VUE_SSR_SETTERS__",n=>Ho=n)}const da=t=>{const e=ft;return Vc(t),t.scope.on(),()=>{t.scope.off(),Vc(e)}},vm=()=>{ft&&ft.scope.off(),Vc(null)};function Qv(t){return t.vnode.shapeFlag&4}let Ho=!1;function SA(t,e=!1,n=!1){e&&wh(e);const{props:r,children:s}=t.vnode,i=Qv(t);YI(t,r,i,e),eA(t,s,n);const o=i?CA(t,e):void 0;return e&&wh(!1),o}function CA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$I);const{setup:r}=n;if(r){ns();const s=t.setupContext=r.length>1?kA(t):null,i=da(t),o=ua(r,t,0,[t.props,s]),a=xy(o);if(rs(),i(),(a||t.sp)&&!Br(t)&&mv(t),a){if(o.then(vm,vm),e)return o.then(l=>{bh(t,l,e)}).catch(l=>{ha(l,t,0)});t.asyncDep=o}else bh(t,o,e)}else Yv(t,e)}function bh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=rv(e)),Yv(t,n)}let Em;function Yv(t,e,n){const r=t.type;if(!t.render){if(!e&&Em&&!r.render){const s=r.template||Kf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=st(st({isCustomElement:i,delimiters:a},o),l);r.render=Em(s,u)}}t.render=r.render||kn}{const s=da(t);ns();try{HI(t)}finally{rs(),s()}}}const PA={get(t,e){return Ct(t,"get",""),t[e]}};function kA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,PA),slots:t.slots,emit:t.emit,expose:e}}function Il(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rv(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vo)return vo[n](t)},has(e,n){return n in e||n in vo}})):t.proxy}function Th(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function OA(t){return de(t)&&"__vccOpts"in t}const Fe=(t,e)=>EI(t,e,Ho);function vt(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ce(e)?Cs(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cs(n)&&(n=[n]),Se(t,e,n))}const Xv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ih;const wm=typeof window<"u"&&window.trustedTypes;if(wm)try{Ih=wm.createPolicy("vue",{createHTML:t=>t})}catch{}const Jv=Ih?t=>Ih.createHTML(t):t=>t,xA="http://www.w3.org/2000/svg",NA="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,bm=Kn&&Kn.createElement("template"),DA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Kn.createElementNS(xA,t):e==="mathml"?Kn.createElementNS(NA,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bm.innerHTML=Jv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=bm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wr="transition",ro="animation",qo=Symbol("_vtc"),Zv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},LA=st({},uv,Zv),MA=t=>(t.displayName="Transition",t.props=LA,t),eE=MA((t,{slots:e})=>vt(CI,VA(t),e)),fs=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tm=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function VA(t){const e={};for(const S in t)S in Zv||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,I=FA(s),O=I&&I[0],N=I&&I[1],{onBeforeEnter:x,onEnter:C,onEnterCancelled:E,onLeave:R,onLeaveCancelled:D,onBeforeAppear:V=x,onAppear:b=C,onAppearCancelled:y=E}=e,_=(S,T,me,ye)=>{S._enterCancelled=ye,ds(S,T?h:a),ds(S,T?u:o),me&&me()},w=(S,T)=>{S._isLeaving=!1,ds(S,d),ds(S,g),ds(S,p),T&&T()},P=S=>(T,me)=>{const ye=S?b:C,J=()=>_(T,S,me);fs(ye,[T,J]),Im(()=>{ds(T,S?l:i),zn(T,S?h:a),Tm(ye)||Am(T,r,O,J)})};return st(e,{onBeforeEnter(S){fs(x,[S]),zn(S,i),zn(S,o)},onBeforeAppear(S){fs(V,[S]),zn(S,l),zn(S,u)},onEnter:P(!1),onAppear:P(!0),onLeave(S,T){S._isLeaving=!0;const me=()=>w(S,T);zn(S,d),S._enterCancelled?(zn(S,p),Cm()):(Cm(),zn(S,p)),Im(()=>{S._isLeaving&&(ds(S,d),zn(S,g),Tm(R)||Am(S,r,N,me))}),fs(R,[S,me])},onEnterCancelled(S){_(S,!1,void 0,!0),fs(E,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),fs(y,[S])},onLeaveCancelled(S){w(S),fs(D,[S])}})}function FA(t){if(t==null)return null;if(Le(t))return[xu(t.enter),xu(t.leave)];{const e=xu(t);return[e,e]}}function xu(t){return My(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qo]||(t[qo]=new Set)).add(e)}function ds(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qo];n&&(n.delete(e),n.size||(t[qo]=void 0))}function Im(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let UA=0;function Am(t,e,n,r){const s=t._endId=++UA,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=BA(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function BA(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${wr}Delay`),i=r(`${wr}Duration`),o=Rm(s,i),a=r(`${ro}Delay`),l=r(`${ro}Duration`),u=Rm(a,l);let h=null,d=0,p=0;e===wr?o>0&&(h=wr,d=o,p=i.length):e===ro?u>0&&(h=ro,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?wr:ro:null,p=h?h===wr?i.length:l.length:0);const g=h===wr&&/\b(transform|all)(,|$)/.test(r(`${wr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:g}}function Rm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Sm(n)+Sm(t[r])))}function Sm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Cm(){return document.body.offsetHeight}function jA(t,e,n){const r=t[qo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pm=Symbol("_vod"),$A=Symbol("_vsh"),HA=Symbol(""),qA=/(^|;)\s*display\s*:/;function zA(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&hc(r,a,"")}else for(const o in e)n[o]==null&&hc(r,o,"");for(const o in n)o==="display"&&(i=!0),hc(r,o,n[o])}else if(s){if(e!==n){const o=r[HA];o&&(n+=";"+o),r.cssText=n,i=qA.test(n)}}else e&&t.removeAttribute("style");Pm in t&&(t[Pm]=i?r.display:"",t[$A]&&(r.display="none"))}const km=/\s*!important$/;function hc(t,e,n){if(ce(n))n.forEach(r=>hc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=WA(t,e);km.test(n)?t.setProperty(Ls(r),n.replace(km,""),"important"):t[r]=n}}const Om=["Webkit","Moz","ms"],Nu={};function WA(t,e){const n=Nu[e];if(n)return n;let r=hn(e);if(r!=="filter"&&r in t)return Nu[e]=r;r=dl(r);for(let s=0;s<Om.length;s++){const i=Om[s]+r;if(i in t)return Nu[e]=i}return e}const xm="http://www.w3.org/1999/xlink";function Nm(t,e,n,r,s,i=qT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xm,e.slice(6,e.length)):t.setAttributeNS(xm,e,n):n==null||i&&!Vy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function Dm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Vy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function kr(t,e,n,r){t.addEventListener(e,n,r)}function KA(t,e,n,r){t.removeEventListener(e,n,r)}const Lm=Symbol("_vei");function GA(t,e,n,r,s=null){const i=t[Lm]||(t[Lm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=QA(e);if(r){const u=i[e]=JA(r,s);kr(t,a,u,l)}else o&&(KA(t,a,o,l),i[e]=void 0)}}const Mm=/(?:Once|Passive|Capture)$/;function QA(t){let e;if(Mm.test(t)){e={};let r;for(;r=t.match(Mm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let Du=0;const YA=Promise.resolve(),XA=()=>Du||(YA.then(()=>Du=0),Du=Date.now());function JA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(ZA(r,n.value),e,5,[r])};return n.value=t,n.attached=XA(),n}function ZA(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,e1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?jA(t,r,o):e==="style"?zA(t,n,r):oa(e)?Nf(e)||GA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t1(t,e,r,o))?(Dm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Dm(t,hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nm(t,e,r,o))};function t1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vm(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vm(e)&&ze(n)?!1:e in t}const Ei=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ci(e,n):e};function n1(t){t.target.composing=!0}function Fm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sr=Symbol("_assign"),pU={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sr]=Ei(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Sc(a)),t[sr](a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",n1),kr(t,"compositionend",Fm),kr(t,"change",Fm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sr]=Ei(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Sc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},mU={deep:!0,created(t,e,n){t[sr]=Ei(n),kr(t,"change",()=>{const r=t._modelValue,s=zo(t),i=t.checked,o=t[sr];if(ce(r)){const a=Mf(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Di(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(tE(t,i))})},mounted:Um,beforeUpdate(t,e,n){t[sr]=Ei(n),Um(t,e,n)}};function Um(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=Mf(e,r.props.value)>-1;else if(Di(e))s=e.has(r.props.value);else{if(e===n)return;s=ca(e,tE(t,!0))}t.checked!==s&&(t.checked=s)}const gU={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Di(e);kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Sc(zo(o)):zo(o));t[sr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Un(()=>{t._assigning=!1})}),t[sr]=Ei(r)},mounted(t,{value:e}){Bm(t,e)},beforeUpdate(t,e,n){t[sr]=Ei(n)},updated(t,{value:e}){t._assigning||Bm(t,e)}};function Bm(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Di(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=zo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Mf(e,a)>-1}else o.selected=e.has(a);else if(ca(zo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function zo(t){return"_value"in t?t._value:t.value}function tE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const r1=["ctrl","shift","alt","meta"],s1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>r1.some(n=>t[`${n}Key`]&&!e.includes(n))},_U=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=s1[e[o]];if(a&&a(s,e))return}return t(s,...i)})},nE=st({patchProp:e1},DA);let bo,jm=!1;function i1(){return bo||(bo=nA(nE))}function o1(){return bo=jm?bo:rA(nE),jm=!0,bo}const a1=(...t)=>{const e=i1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},c1=(...t)=>{const e=o1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(s)return n(s,!0,rE(s))},e};function rE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sE(t){return ze(t)?document.querySelector(t):t}const l1=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,u1=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,h1=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function f1(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){d1(t);return}return e}function d1(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Wo(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!h1.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(l1.test(t)||u1.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,f1)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const p1=/#/g,m1=/&/g,g1=/\//g,_1=/=/g,Zf=/\+/g,y1=/%5e/gi,v1=/%60/gi,E1=/%7c/gi,w1=/%20/gi;function b1(t){return encodeURI(""+t).replace(E1,"|")}function Ah(t){return b1(typeof t=="string"?t:JSON.stringify(t)).replace(Zf,"%2B").replace(w1,"+").replace(p1,"%23").replace(m1,"%26").replace(v1,"`").replace(y1,"^").replace(g1,"%2F")}function Lu(t){return Ah(t).replace(_1,"%3D")}function Fc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function T1(t){return Fc(t.replace(Zf," "))}function I1(t){return Fc(t.replace(Zf," "))}function iE(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=T1(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=I1(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function A1(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Lu(t)}=${Ah(n)}`).join("&"):`${Lu(t)}=${Ah(e)}`:Lu(t)}function R1(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>A1(e,t[e])).filter(Boolean).join("&")}const S1=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,C1=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,P1=/^([/\\]\s*){2,}[^/\\]/,k1=/^[\s\0]*(blob|data|javascript|vbscript):$/i,O1=/\/$|\/\?|\/#/,x1=/^\.?\//;function pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?S1.test(t):C1.test(t)||(e.acceptRelative?P1.test(t):!1)}function N1(t){return!!t&&k1.test(t)}function Rh(t="",e){return e?O1.test(t):t.endsWith("/")}function Al(t="",e){if(!e)return(Rh(t)?t.slice(0,-1):t)||"/";if(!Rh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Uc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Rh(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function D1(t=""){return t.startsWith("/")}function $m(t=""){return D1(t)?t:"/"+t}function L1(t,e){if(aE(e)||pr(t))return t;const n=Al(e);return t.startsWith(n)?t:Rl(n,t)}function Hm(t,e){if(aE(e))return t;const n=Al(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function oE(t,e){const n=F1(t),r={...iE(n.search),...e};return n.search=R1(r),U1(n)}function aE(t){return!t||t==="/"}function M1(t){return t&&t!=="/"}function Rl(t,...e){let n=t||"";for(const r of e.filter(s=>M1(s)))if(n){const s=r.replace(x1,"");n=Uc(n)+s}else n=r;return n}function cE(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&pr(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function V1(t,e,n={}){return n.trailingSlash||(t=Uc(t),e=Uc(e)),n.leadingSlash||(t=$m(t),e=$m(e)),n.encoding||(t=Fc(t),e=Fc(e)),t===e}const lE=Symbol.for("ufo:protocolRelative");function F1(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!pr(t,{acceptRelative:!0}))return qm(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=qm(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[lE]:!r}}function qm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function U1(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[lE]?(t.protocol||"")+"//":"")+s+i+e+n+r}class B1 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function j1(t){var l,u,h,d,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new B1(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[I]}});return a}const $1=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function zm(t="GET"){return $1.has(t.toUpperCase())}function H1(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const q1=new Set(["image/svg","application/xml","application/xhtml","application/html"]),z1=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function W1(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return z1.test(e)?"json":q1.has(e)||e.startsWith("text/")?"text":"blob"}function K1(t,e,n,r){const s=G1((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function G1(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Qa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Q1=new Set([408,409,425,429,500,502,503,504]),Y1=new Set([101,204,205,304]);function uE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=zm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):Q1.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=j1(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:K1(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Qa(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=L1(h.request,h.options.baseURL)),h.options.query&&(h.request=oE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&zm(h.options.method)&&(H1(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,g.abort(I)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await Qa(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!Y1.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||W1(h.response.headers.get("content-type")||"");switch(g){case"json":{const I=await h.response.text(),O=h.options.parseResponse||Wo;h.response._data=O(I);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await Qa(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Qa(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>uE({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const Bc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),X1=Bc.fetch?(...t)=>Bc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),J1=Bc.Headers,Z1=Bc.AbortController,eR=uE({fetch:X1,Headers:J1,AbortController:Z1}),tR=eR,nR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},jc=nR().app,rR=()=>jc.baseURL,sR=()=>jc.buildAssetsDir,ed=(...t)=>cE(td(),sR(),...t),td=(...t)=>{const e=jc.cdnURL||jc.baseURL;return t.length?cE(e,...t):e};globalThis.__buildAssetsURL=ed,globalThis.__publicAssetsURL=td;globalThis.$fetch||(globalThis.$fetch=tR.create({baseURL:rR()}));function Sh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Sh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const iR={run:t=>t()},oR=()=>iR,hE=typeof console.createTask<"u"?console.createTask:oR;function aR(t,e){const n=e.shift(),r=hE(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function cR(t,e){const n=e.shift(),r=hE(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Mu(t,e){for(const n of[...t])n(e)}class lR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Sh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Sh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(aR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(cR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Mu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Mu(this._after,s)}):(this._after&&s&&Mu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function fE(){return new lR}function uR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Ch.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Ch.delete(u)}}}}function hR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=uR({...t,...r})),e[n],e[n]}}}const $c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Wm="__unctx__",fR=$c[Wm]||($c[Wm]=hR()),dR=(t,e={})=>fR.get(t,e),Km="__unctx_async_handlers__",Ch=$c[Km]||($c[Km]=new Set);function hi(t){const e=[];for(const s of Ch){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ph={name:"page",mode:"out-in"},pR=!1,mR=!1,gR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},_R=null,yR="#__nuxt",dE="nuxt-app",Gm=36e5,vR="vite:preloadError";function pE(t=dE){return dR(t,{asyncContext:!1})}const ER="__nuxt_plugin";function wR(t){var s;let e=0;const n={_id:t.id||dE||"nuxt-app",_scope:Ff(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.159"},get vue(){return n.vueApp.version}},payload:Jn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Jn({}),state:fr({}),once:new Set,_errors:Jn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!la()?n._scope.run(()=>Qm(n,i)):Qm(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Jn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=fE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Ya(n,a,o),Ya(n.vueApp.config.globalProperties,a,o)},Ya(n.vueApp,"$nuxt",n),Ya(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(vR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||De;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function bR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function TR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function IR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(p=>p._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=TR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(p=>i.push(p))):await d}}for(const l of e)bR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function en(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ER]:!0,_name:e})}function Qm(t,e,n){const r=()=>e();return pE(t._id).set(t),t.vueApp.runWithContext(r)}function AR(t){var n;let e;return Gf()&&(e=(n=Tl())==null?void 0:n.appContext.app.$nuxt),e=e||pE(t).tryUse(),e||null}function De(t){const e=AR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ms(t){return De().$config}function Ya(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function RR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||SR;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r!=null&&r.filter&&!(r!=null&&r.filter(l))){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=CR(u,s)}i=a+1}return n}function SR(t){return t.includes("%")?decodeURIComponent(t):t}function CR(t,e){try{return e(t)}catch{return t}}const Xa=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Ym(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Xa.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Xa.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Xa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Xa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!PR(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function PR(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const Xm=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Jm(t,e){e?e={...Xm,...e}:e=Xm;const n=mE(e);return n.dispatch(t),n.toString()}const kR=Object.freeze(["prototype","__proto__","constructor"]);function mE(t){let e="",n=new Map;const r=s=>{e+=s};return{toString(){return e},getContext(){return n},dispatch(s){return t.replacer&&(s=t.replacer(s)),this[s===null?"null":typeof s](s)},object(s){if(s&&typeof s.toJSON=="function")return this.object(s.toJSON());const i=Object.prototype.toString.call(s);let o="";const a=i.length;a<10?o="unknown:["+i+"]":o=i.slice(8,a-1),o=o.toLowerCase();let l=null;if((l=n.get(s))===void 0)n.set(s,n.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return r("buffer:"),r(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](s):t.ignoreUnknown||this.unkown(s,o);else{let u=Object.keys(s);t.unorderedObjects&&(u=u.sort());let h=[];t.respectType!==!1&&!Zm(s)&&(h=kR),t.excludeKeys&&(u=u.filter(p=>!t.excludeKeys(p)),h=h.filter(p=>!t.excludeKeys(p))),r("object:"+(u.length+h.length)+":");const d=p=>{this.dispatch(p),r(":"),t.excludeValues||this.dispatch(s[p]),r(",")};for(const p of u)d(p);for(const p of h)d(p)}},array(s,i){if(i=i===void 0?t.unorderedArrays!==!1:i,r("array:"+s.length+":"),!i||s.length<=1){for(const l of s)this.dispatch(l);return}const o=new Map,a=s.map(l=>{const u=mE(t);u.dispatch(l);for(const[h,d]of u.getContext())o.set(h,d);return u.toString()});return n=o,a.sort(),this.array(a,!1)},date(s){return r("date:"+s.toJSON())},symbol(s){return r("symbol:"+s.toString())},unkown(s,i){if(r(i),!!s&&(r(":"),s&&typeof s.entries=="function"))return this.array(Array.from(s.entries()),!0)},error(s){return r("error:"+s.toString())},boolean(s){return r("bool:"+s)},string(s){r("string:"+s.length+":"),r(s)},function(s){r("fn:"),Zm(s)?this.dispatch("[native]"):this.dispatch(s.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),t.respectFunctionProperties&&this.object(s)},number(s){return r("number:"+s)},xml(s){return r("xml:"+s.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(s){return r("regex:"+s.toString())},uint8array(s){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},uint8clampedarray(s){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},int8array(s){return r("int8array:"),this.dispatch(Array.prototype.slice.call(s))},uint16array(s){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},int16array(s){return r("int16array:"),this.dispatch(Array.prototype.slice.call(s))},uint32array(s){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},int32array(s){return r("int32array:"),this.dispatch(Array.prototype.slice.call(s))},float32array(s){return r("float32array:"),this.dispatch(Array.prototype.slice.call(s))},float64array(s){return r("float64array:"),this.dispatch(Array.prototype.slice.call(s))},arraybuffer(s){return r("arraybuffer:"),this.dispatch(new Uint8Array(s))},url(s){return r("url:"+s.toString())},map(s){r("map:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},set(s){r("set:");const i=[...s];return this.array(i,t.unorderedSets!==!1)},file(s){return r("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(s){return r("bigint:"+s.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const gE="[native code] }",OR=gE.length;function Zm(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-OR)===gE}function xR(t,e,n={}){return t===e||Jm(t,n)===Jm(e,n)}function NR(t,e){return{ctx:{table:t},matchAll:n=>yE(n,t)}}function _E(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,_E(s)])):new Map(Object.entries(t[n]));return e}function DR(t){return NR(_E(t))}function yE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of eg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of eg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...yE(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function eg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Vu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function kh(t,e,n=".",r){if(!Vu(e))return kh(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Vu(o)&&Vu(s[i])?s[i]=kh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function LR(t){return(...e)=>e.reduce((n,r)=>kh(n,r,"",t),{})}const vE=LR();function MR(t,e){try{return e in t}catch{return!1}}var VR=Object.defineProperty,FR=(t,e,n)=>e in t?VR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gs=(t,e,n)=>(FR(t,typeof e!="symbol"?e+"":e,n),n);class Oh extends Error{constructor(e,n={}){super(e,n),gs(this,"statusCode",500),gs(this,"fatal",!1),gs(this,"unhandled",!1),gs(this,"statusMessage"),gs(this,"data"),gs(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Nh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=EE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}gs(Oh,"__h3_error__",!0);function xh(t){if(typeof t=="string")return new Oh(t);if(UR(t))return t;const e=new Oh(t.message??t.statusMessage??"",{cause:t.cause||t});if(MR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Nh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Nh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;EE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function UR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const BR=/[^\u0009\u0020-\u007E]/g;function EE(t=""){return t.replace(BR,"")}function Nh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const wE=Symbol("layout-meta"),pa=Symbol("route"),Et=()=>{var t;return(t=De())==null?void 0:t.$router},nd=()=>Gf()?xt(pa,De()._route):De()._route;function yU(t){return t}const jR=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},$R=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Dh(t):Et().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=pr(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&N1(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=jR();if(!s&&i)return t;const o=Et(),a=De();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Dh(t){return oE(t.path||"",t.query||{})+(t.hash||"")}const bE="__nuxt_error",Sl=()=>yI(De().payload,"error"),ni=t=>{const e=Cl(t);try{const n=De(),r=Sl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},TE=async(t={})=>{const e=De(),n=Sl();e.callHook("app:error:cleared",t),t.redirect&&await Et().replace(t.redirect),n.value=_R},HR=t=>!!t&&typeof t=="object"&&bE in t,Cl=t=>{const e=xh(t);return Object.defineProperty(e,bE,{value:!0,configurable:!1,writable:!1}),e};function tg(t){const e=zR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const qR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function zR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=qR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const WR=-1,KR=-2,GR=-3,QR=-4,YR=-5,XR=-6;function JR(t,e){return ZR(JSON.parse(t),e)}function ZR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===WR)return;if(i===GR)return NaN;if(i===QR)return 1/0;if(i===YR)return-1/0;if(i===XR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],I=a[1],O=tg(I),N=new g(O);r[i]=N;break}case"ArrayBuffer":{const g=a[1],I=tg(g);r[i]=I;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==KR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const eS=new Set(["title","titleTemplate","script","style","noscript"]),fc=new Set(["base","meta","link","style","script","noscript"]),tS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),nS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),IE=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),rS=typeof window<"u";function Hc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Lh(t){if(t._h)return t._h;if(t._d)return Hc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Hc(e)}function sS(t,e){return t instanceof Promise?t.then(e):e(t)}function Mh(t,e,n,r){const s=r||RE(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Mh(t,e,n,o));const i={tag:t,props:s};for(const o of IE){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||eS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function iS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function AE(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=iS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,AE(t,e,n,s)));if(!e&&!IE.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function RE(t,e=!1){const n=AE(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const oS=10;function SE(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,SE(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function aS(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!tS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Mh(s,o,t));continue}e.push(Mh(s,i,t))}}if(e.length===0)return[];const r=[];return sS(SE(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<oS)+i,s)))}const ng=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),rg={base:-10,title:10},sg={critical:-80,high:-10,low:20};function qc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in rg&&(n=rg[t.tag]),e&&e in sg?n+sg[e]:n}const cS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],lS=["name","property","http-equiv"];function CE(t){const{props:e,tag:n}=t;if(nS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of lS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Cr="%separator";function uS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const hS=new RegExp(`${Cr}(?:\\s*${Cr})*`,"g");function Ja(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Cr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Cr||!i.includes(a))return a;const l=uS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Cr)&&(t=t.slice(0,-Cr.length)),t.startsWith(Cr)&&(t=t.slice(Cr.length)),t=t.replace(hS,n).trim()),t}function ig(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function PE(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(p=>({tag:p,id:fc.has(p.tag)?Lh(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const g of["body","head"]){const I=(d=n[g])==null?void 0:d.children;for(const O of I){const N=O.tagName.toLowerCase();if(!fc.has(N))continue;const x={tag:N,props:await RE(O.getAttributeNames().reduce((D,V)=>({...D,[V]:O.getAttribute(V)}),{})),innerHTML:O.innerHTML},C=CE(x);let E=C,R=1;for(;E&&p.has(E);)E=`${C}:${R++}`;E&&(x._d=E,p.add(E)),o.elMap[O.getAttribute("data-hid")||Lh(x)]=O}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,g,I){const O=`${p}:${g}`;o.sideEffects[O]=I,delete o.pendingSideEffects[O]}function l({id:p,$el:g,tag:I}){const O=I.tag.endsWith("Attrs");if(o.elMap[p]=g,O||(I.textContent&&I.textContent!==g.textContent&&(g.textContent=I.textContent),I.innerHTML&&I.innerHTML!==g.innerHTML&&(g.innerHTML=I.innerHTML),a(p,"el",()=>{var N;(N=o.elMap[p])==null||N.remove(),delete o.elMap[p]})),I._eventHandlers)for(const N in I._eventHandlers)Object.prototype.hasOwnProperty.call(I._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((I.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),I._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in I.props){if(!Object.prototype.hasOwnProperty.call(I.props,N))continue;const x=I.props[N],C=`attr:${N}`;if(N==="class"){if(!x)continue;for(const E of x.split(" "))O&&a(p,`${C}:${E}`,()=>g.classList.remove(E)),!g.classList.contains(E)&&g.classList.add(E)}else if(N==="style"){if(!x)continue;for(const E of x.split(";")){const R=E.indexOf(":"),D=E.substring(0,R).trim(),V=E.substring(R+1).trim();a(p,`${C}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,V)}}else g.getAttribute(N)!==x&&g.setAttribute(N,x===!0?"":String(x)),O&&a(p,C,()=>g.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:g,shouldRender:I,id:O}=p;if(I){if(g.tag==="title"){n.title=g.textContent;continue}p.$el=p.$el||o.elMap[O],p.$el?l(p):fc.has(g.tag)&&u.push(p)}}for(const p of u){const g=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function fS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>PE(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function dS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{fS(i,t)}}}}}const pS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),mS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=CE(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Lh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&pS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(qc(r)>qc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&fc.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},gS=new Set(["script","link","bodyAttrs"]),_S=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!gS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&ng.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Hc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);ng.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),yS=new Set(["link","style","script","noscript"]),vS={hooks:{"tag:normalise":({tag:t})=>{t.key&&yS.has(t.tag)&&(t.props["data-hid"]=t._h=Hc(t.key))}}},ES={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},wS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of cS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=qc(n),i=qc(r);return s<i?-1:s>i?1:n._p-r._p})}}},bS={meta:"content",link:"href",htmlAttrs:"lang"},TS=["innerHTML","textContent"],IS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Ja(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=bS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Ja(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of TS)typeof a[u]=="string"&&(a[u]=Ja(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Ja(n.textContent,t._templateParams,t._separator))}}}),AS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=ig(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=ig(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},RS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};function SS(t={}){const e=CS(t);return e.use(dS()),e}function og(t,e){return!t||t==="server"&&e||t==="client"&&!e}function CS(t={}){const e=fE();e.addHooks(t.hooks||{}),t.document=t.document||(rS?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),og(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return og(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const p of i)p._i===h._i&&(p.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await aS(u)){const p={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[mS,ES,_S,vS,wS,IS,AS,RS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}const PS=Xv[0]==="3";function kS(t){return typeof t=="function"?t():Qe(t)}function Vh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=kS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Vh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Vh(e[r])}return n}return e}const OS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Vh(e.input)}}},xS="usehead";function NS(t){return{install(n){PS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(xS,t))}}.install}function DS(t={}){t.domDelayFn=t.domDelayFn||(n=>Un(()=>setTimeout(()=>n(),0)));const e=SS(t);return e.use(OS),e.install=NS(e),e}const LS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},MS="__unhead_injection_handler__";function VS(t){LS[MS]=t}let dc,pc;function FS(){return dc=$fetch(ed(`builds/meta/${Ms().app.buildId}.json`),{responseType:"json"}),dc.then(t=>{pc=DR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),dc}function Pl(){return dc||FS()}async function rd(t){if(await Pl(),!pc)return console.error("[nuxt] Error creating app manifest matcher.",pc),{};try{return vE({},...pc.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function ag(t,e={}){const n=await BS(t,e),r=De(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=OE(t).then(i=>i?kE(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const US="_payload.json";async function BS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Ms(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await OE(t)?i:r.app.baseURL;return Rl(o,n.pathname,US+(s?`?${s}`:""))}async function kE(t){const e=fetch(t).then(n=>n.text().then(xE));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function OE(t=nd().path){if(t=Al(t),(await Pl()).prerendered.includes(t))return!0;const n=await rd(t);return!!n.prerender&&!n.redirect}let ps=null;async function jS(){var r;if(ps)return ps;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await xE(t.textContent||""),n=t.dataset.src?await kE(t.dataset.src):void 0;return ps={...e,...n,...window.__NUXT__},(r=ps.config)!=null&&r.public&&(ps.config.public=fr(ps.config.public)),ps}async function xE(t){return await JR(t,De()._payloadRevivers)}function $S(t,e){De()._payloadRevivers[t]=e}const HS=[["NuxtError",t=>Cl(t)],["EmptyShallowRef",t=>Vo(t==="_"?void 0:t==="0n"?BigInt(0):Wo(t))],["EmptyRef",t=>Kt(t==="_"?void 0:t==="0n"?BigInt(0):Wo(t))],["ShallowRef",t=>Vo(t)],["ShallowReactive",t=>Jn(t)],["Ref",t=>Kt(t)],["Reactive",t=>fr(t)]],qS=en({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of HS)$S(r,s);Object.assign(t.payload,([e,n]=hi(()=>t.runWithContext(jS)),e=await e,n(),e)),window.__NUXT__=t.payload}});let zS;function WS(){return zS}function KS(t){return typeof t=="function"?t():Qe(t)}function Fh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=KS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Fh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Fh(e[r])}return n}return e}const GS="usehead",cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lg="__unhead_injection_handler__";function QS(){if(lg in cg)return cg[lg]();const t=xt(GS);return t||WS()}function ug(t,e={}){const n=e.head||QS();if(n)return n.ssr?n.push(t,e):YS(n,t,e)}function YS(t,e,n={}){const r=Kt(!1),s=Kt({});aA(()=>{s.value=r.value?{}:Fh(e)});const i=t.push(s.value,n);return yn(s,a=>{i.patch(a)}),Tl()&&(fa(()=>{i.dispose()}),_v(()=>{r.value=!0}),gv(()=>{r.value=!1})),i}const XS=[],JS=en({name:"nuxt:head",enforce:"pre",setup(t){const e=DS({plugins:XS});VS(()=>De().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await PE(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof document<"u";function NE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&NE(t.default)}const xe=Object.assign;function Fu(t,e){const n={};for(const r in e){const s=e[r];n[r]=wn(s)?s.map(t):t(s)}return n}const To=()=>{},wn=Array.isArray,DE=/#/g,eC=/&/g,tC=/\//g,nC=/=/g,rC=/\?/g,LE=/\+/g,sC=/%5B/g,iC=/%5D/g,ME=/%5E/g,oC=/%60/g,VE=/%7B/g,aC=/%7C/g,FE=/%7D/g,cC=/%20/g;function sd(t){return encodeURI(""+t).replace(aC,"|").replace(sC,"[").replace(iC,"]")}function lC(t){return sd(t).replace(VE,"{").replace(FE,"}").replace(ME,"^")}function Uh(t){return sd(t).replace(LE,"%2B").replace(cC,"+").replace(DE,"%23").replace(eC,"%26").replace(oC,"`").replace(VE,"{").replace(FE,"}").replace(ME,"^")}function uC(t){return Uh(t).replace(nC,"%3D")}function hC(t){return sd(t).replace(DE,"%23").replace(rC,"%3F")}function fC(t){return t==null?"":hC(t).replace(tC,"%2F")}function Ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dC=/\/$/,pC=t=>t.replace(dC,"");function Uu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=yC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ko(o)}}function mC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&wi(e.matched[r],n.matched[s])&&UE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_C(t[n],e[n]))return!1;return!0}function _C(t,e){return wn(t)?fg(t,e):wn(e)?fg(e,t):t===e}function fg(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Go;(function(t){t.pop="pop",t.push="push"})(Go||(Go={}));var Io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Io||(Io={}));function vC(t){if(!t)if(Xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pC(t)}const EC=/^[^#]+#/;function wC(t,e){return t.replace(EC,"#")+e}function bC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kl=()=>({left:window.scrollX,top:window.scrollY});function TC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dg(t,e){return(history.state?history.state.position-e:-1)+t}const Bh=new Map;function IC(t,e){Bh.set(t,e)}function AC(t){const e=Bh.get(t);return Bh.delete(t),e}let RC=()=>location.protocol+"//"+location.host;function BE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),hg(l,"")}return hg(n,t)+r+s}function SC(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=BE(t,location),I=n.value,O=e.value;let N=0;if(p){if(n.value=g,e.value=p,o&&o===I){o=null;return}N=O?p.position-O.position:0}else r(g);s.forEach(x=>{x(n.value,I,{delta:N,type:Go.pop,direction:N?N>0?Io.forward:Io.back:Io.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(xe({},p.state,{scroll:kl()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function pg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kl():null}}function CC(t){const{history:e,location:n}=window,r={value:BE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:RC()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=xe({},e.state,pg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=xe({},s.value,e.state,{forward:l,scroll:kl()});i(h.current,h,!0);const d=xe({},pg(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function jE(t){t=vC(t);const e=CC(t),n=SC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:wC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function PC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jE(t)}function kC(t){return typeof t=="string"||t&&typeof t=="object"}function $E(t){return typeof t=="string"||typeof t=="symbol"}const HE=Symbol("");var mg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mg||(mg={}));function bi(t,e){return xe(new Error,{type:t,[HE]:!0},e)}function Wn(t,e){return t instanceof Error&&HE in t&&(e==null||!!(t.type&e))}const gg="[^/]+?",OC={sensitive:!1,strict:!1,start:!0,end:!0},xC=/[.+*?^${}()[\]/\\]/g;function NC(t,e){const n=xe({},OC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(xC,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:O,optional:N,regexp:x}=p;i.push({name:I,repeatable:O,optional:N});const C=x||gg;if(C!==gg){g+=10;try{new RegExp(`(${C})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${I}" (${C}): `+R.message)}}let E=O?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),O&&(g+=-20),C===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",I=i[p-1];d[I.name]=g&&I.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:I,repeatable:O,optional:N}=g,x=I in u?u[I]:"";if(wn(x)&&!O)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const C=wn(x)?x.join("/"):x;if(!C)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);h+=C}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function DC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_g(r))return 1;if(_g(s))return-1}return s.length-r.length}function _g(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LC={type:0,value:""},MC=/[a-zA-Z0-9_]/;function VC(t){if(!t)return[[]];if(t==="/")return[[LC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:MC.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function FC(t,e,n){const r=NC(VC(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function UC(t,e){const n=[],r=new Map;e=wg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const I=!g,O=vg(d);O.aliasOf=g&&g.record;const N=wg(e,d),x=[O];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of R)x.push(vg(xe({},O,{components:g?g.record.components:O.components,path:D,aliasOf:g?g.record:O})))}let C,E;for(const R of x){const{path:D}=R;if(p&&D[0]!=="/"){const V=p.record.path,b=V[V.length-1]==="/"?"":"/";R.path=p.record.path+(D&&b+D)}if(C=FC(R,p,N),g?g.alias.push(C):(E=E||C,E!==C&&E.alias.push(C),I&&d.name&&!Eg(C)&&o(d.name)),zE(C)&&l(C),O.children){const V=O.children;for(let b=0;b<V.length;b++)i(V[b],C,g&&g.children[b])}g=g||C}return E?()=>{o(E)}:To}function o(d){if($E(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=$C(d,n);n.splice(p,0,d),d.record.name&&!Eg(d)&&r.set(d.record.name,d)}function u(d,p){let g,I={},O,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw bi(1,{location:d});N=g.record.name,I=xe(yg(p.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&yg(d.params,g.keys.map(E=>E.name))),O=g.stringify(I)}else if(d.path!=null)O=d.path,g=n.find(E=>E.re.test(O)),g&&(I=g.parse(O),N=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw bi(1,{location:d,currentLocation:p});N=g.record.name,I=xe({},p.params,d.params),O=g.stringify(I)}const x=[];let C=g;for(;C;)x.unshift(C.record),C=C.parent;return{name:N,path:O,params:I,matched:x,meta:jC(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function yg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:BC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function BC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Eg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jC(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function wg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $C(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qE(t,e[i])<0?r=i:n=i+1}const s=HC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HC(t){let e=t;for(;e=e.parent;)if(zE(e)&&qE(t,e)===0)return e}function zE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(LE," "),o=i.indexOf("="),a=Ko(o<0?i:i.slice(0,o)),l=o<0?null:Ko(i.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function bg(t){let e="";for(let n in t){const r=t[n];if(n=uC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(i=>i&&Uh(i)):[r&&Uh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const WC=Symbol(""),Tg=Symbol(""),id=Symbol(""),od=Symbol(""),jh=Symbol("");function so(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(bi(4,{from:n,to:e})):p instanceof Error?l(p):kC(p)?l(bi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Bu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(NE(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Pr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ZS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Pr(g,n,r,o,a,s)()}))}}return i}function Ig(t){const e=xt(id),n=xt(od),r=Fe(()=>{const l=Qe(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(wi.bind(null,h));if(p>-1)return p;const g=Ag(l[u-2]);return u>1&&Ag(h)===g&&d[d.length-1].path!==g?d.findIndex(wi.bind(null,l[u-2])):p}),i=Fe(()=>s.value>-1&&YC(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&UE(n.params,r.value.params));function a(l={}){return QC(l)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(To):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const KC=Bn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ig,setup(t,{slots:e}){const n=fr(Ig(t)),{options:r}=xt(id),s=Fe(()=>({[Rg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GC=KC;function QC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ag(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rg=(t,e,n)=>t??e??n,XC=Bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(jh),s=Fe(()=>t.route||r.value),i=xt(Tg,0),o=Fe(()=>{let u=Qe(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);bs(Tg,Fe(()=>o.value+1)),bs(WC,a),bs(jh,s);const l=Kt();return yn(()=>[l.value,a.value,t.name],([u,h,d],[p,g,I])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!wi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return Sg(n.default,{Component:p,route:u});const g=d.props[h],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=vt(p,xe({},I,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Sg(n.default,{Component:N,route:u})||N}}});function Sg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=XC;function JC(t){const e=UC(t.routes,t),n=t.parseQuery||qC,r=t.stringifyQuery||bg,s=t.history,i=so(),o=so(),a=so(),l=Vo(pn);let u=pn;Xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Fu.bind(null,B=>""+B),d=Fu.bind(null,fC),p=Fu.bind(null,Ko);function g(B,Z){let Y,ne;return $E(B)?(Y=e.getRecordMatcher(B),ne=Z):ne=B,e.addRoute(ne,Y)}function I(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function O(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=xe({},Z||l.value),typeof B=="string"){const k=Uu(n,B,Z.path),M=e.resolve({path:k.path},Z),$=s.createHref(k.fullPath);return xe(k,M,{params:p(M.params),hash:Ko(k.hash),redirectedFrom:void 0,href:$})}let Y;if(B.path!=null)Y=xe({},B,{path:Uu(n,B.path,Z.path).path});else{const k=xe({},B.params);for(const M in k)k[M]==null&&delete k[M];Y=xe({},B,{params:d(k)}),Z.params=d(Z.params)}const ne=e.resolve(Y,Z),we=B.hash||"";ne.params=h(p(ne.params));const Ne=mC(r,xe({},B,{hash:lC(we),path:ne.path})),A=s.createHref(Ne);return xe({fullPath:Ne,hash:we,query:r===bg?zC(B.query):B.query||{}},ne,{redirectedFrom:void 0,href:A})}function C(B){return typeof B=="string"?Uu(n,B,l.value.path):xe({},B)}function E(B,Z){if(u!==B)return bi(8,{from:Z,to:B})}function R(B){return b(B)}function D(B){return R(xe(C(B),{replace:!0}))}function V(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let ne=typeof Y=="function"?Y(B):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=C(ne):{path:ne},ne.params={}),xe({query:B.query,hash:B.hash,params:ne.path!=null?{}:B.params},ne)}}function b(B,Z){const Y=u=x(B),ne=l.value,we=B.state,Ne=B.force,A=B.replace===!0,k=V(Y);if(k)return b(xe(C(k),{state:typeof k=="object"?xe({},we,k.state):we,force:Ne,replace:A}),Z||Y);const M=Y;M.redirectedFrom=Z;let $;return!Ne&&gC(r,ne,Y)&&($=bi(16,{to:M,from:ne}),nn(ne,ne,!0,!1)),($?Promise.resolve($):w(M,ne)).catch(U=>Wn(U)?Wn(U,2)?U:fn(U):te(U,M,ne)).then(U=>{if(U){if(Wn(U,2))return b(xe({replace:A},C(U.to),{state:typeof U.to=="object"?xe({},we,U.to.state):we,force:Ne}),Z||M)}else U=S(M,ne,!0,A,we);return P(M,ne,U),U})}function y(B,Z){const Y=E(B,Z);return Y?Promise.reject(Y):Promise.resolve()}function _(B){const Z=gr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let Y;const[ne,we,Ne]=ZC(B,Z);Y=Bu(ne.reverse(),"beforeRouteLeave",B,Z);for(const k of ne)k.leaveGuards.forEach(M=>{Y.push(Pr(M,B,Z))});const A=y.bind(null,B,Z);return Y.push(A),jt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(Pr(k,B,Z));return Y.push(A),jt(Y)}).then(()=>{Y=Bu(we,"beforeRouteUpdate",B,Z);for(const k of we)k.updateGuards.forEach(M=>{Y.push(Pr(M,B,Z))});return Y.push(A),jt(Y)}).then(()=>{Y=[];for(const k of Ne)if(k.beforeEnter)if(wn(k.beforeEnter))for(const M of k.beforeEnter)Y.push(Pr(M,B,Z));else Y.push(Pr(k.beforeEnter,B,Z));return Y.push(A),jt(Y)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Y=Bu(Ne,"beforeRouteEnter",B,Z,_),Y.push(A),jt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(Pr(k,B,Z));return Y.push(A),jt(Y)}).catch(k=>Wn(k,8)?k:Promise.reject(k))}function P(B,Z,Y){a.list().forEach(ne=>_(()=>ne(B,Z,Y)))}function S(B,Z,Y,ne,we){const Ne=E(B,Z);if(Ne)return Ne;const A=Z===pn,k=Xs?history.state:{};Y&&(ne||A?s.replace(B.fullPath,xe({scroll:A&&k&&k.scroll},we)):s.push(B.fullPath,we)),l.value=B,nn(B,Z,Y,A),fn()}let T;function me(){T||(T=s.listen((B,Z,Y)=>{if(!Tn.listening)return;const ne=x(B),we=V(ne);if(we){b(xe(we,{replace:!0}),ne).catch(To);return}u=ne;const Ne=l.value;Xs&&IC(dg(Ne.fullPath,Y.delta),kl()),w(ne,Ne).catch(A=>Wn(A,12)?A:Wn(A,2)?(b(A.to,ne).then(k=>{Wn(k,20)&&!Y.delta&&Y.type===Go.pop&&s.go(-1,!1)}).catch(To),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),te(A,ne,Ne))).then(A=>{A=A||S(ne,Ne,!1),A&&(Y.delta&&!Wn(A,8)?s.go(-Y.delta,!1):Y.type===Go.pop&&Wn(A,20)&&s.go(-1,!1)),P(ne,Ne,A)}).catch(To)}))}let ye=so(),J=so(),re;function te(B,Z,Y){fn(B);const ne=J.list();return ne.length?ne.forEach(we=>we(B,Z,Y)):console.error(B),Promise.reject(B)}function We(){return re&&l.value!==pn?Promise.resolve():new Promise((B,Z)=>{ye.add([B,Z])})}function fn(B){return re||(re=!B,me(),ye.list().forEach(([Z,Y])=>B?Y(B):Z()),ye.reset()),B}function nn(B,Z,Y,ne){const{scrollBehavior:we}=t;if(!Xs||!we)return Promise.resolve();const Ne=!Y&&AC(dg(B.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Un().then(()=>we(B,Z,Ne)).then(A=>A&&TC(A)).catch(A=>te(A,B,Z))}const Ke=B=>s.go(B);let Ge;const gr=new Set,Tn={currentRoute:l,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:x,options:t,push:R,replace:D,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:We,install(B){const Z=this;B.component("RouterLink",GC),B.component("RouterView",WE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Xs&&!Ge&&l.value===pn&&(Ge=!0,R(s.location).catch(we=>{}));const Y={};for(const we in pn)Object.defineProperty(Y,we,{get:()=>l.value[we],enumerable:!0});B.provide(id,Z),B.provide(od,Jn(Y)),B.provide(jh,l);const ne=B.unmount;gr.add(B),B.unmount=function(){gr.delete(B),gr.size<1&&(u=pn,T&&T(),T=null,l.value=pn,Ge=!1,re=!1),ne()}}};function jt(B){return B.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return Tn}function ZC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>wi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>wi(u,l))||s.push(l))}return[n,r,s]}function eP(t){return xt(od)}const tP=/(:\w+)\([^)]+\)/g,nP=/(:\w+)[?+*]/g,rP=/:\w+/g,sP=(t,e)=>e.path.replace(tP,"$1").replace(nP,"$1").replace(rP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),$h=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&sP(t.route,n));return typeof r=="function"?r(t.route):r},iP=(t,e)=>({default:()=>t?vt(DI,t===!0?{}:t,e):e});function ad(t){return Array.isArray(t)?t:[t]}const oP="modulepreload",aP=function(t,e){return new URL(t,e).href},Cg={},Pe=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=aP(u,r),u in Cg)return;Cg[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let I=o.length-1;I>=0;I--){const O=o[I];if(O.href===u&&(!h||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":oP,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((I,O)=>{g.addEventListener("load",I),g.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},cP={middleware:"auth"},lP={middleware:"auth"},uP={middleware:"auth"},ju=[{name:"Admin-Bio",path:"/Admin/Bio",component:()=>Pe(()=>import("./DplMNkKl.js"),[],import.meta.url)},{name:"Admin-Contact",path:"/Admin/Contact",component:()=>Pe(()=>import("./CGrOFVa1.js"),[],import.meta.url)},{name:"Admin-ForSale",path:"/Admin/ForSale",component:()=>Pe(()=>import("./DXnhM6Nv.js"),[],import.meta.url)},{name:"Admin-Home",path:"/Admin/Home",meta:cP||{},component:()=>Pe(()=>import("./Djc673bt.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"Admin",path:"/Admin",meta:lP||{},component:()=>Pe(()=>import("./DNDRg7Og.js"),__vite__mapDeps([3,4]),import.meta.url)},{name:"Admin-Portfolio-Celebs",path:"/Admin/Portfolio/Celebs",component:()=>Pe(()=>import("./BJhrxwIx.js"),[],import.meta.url)},{name:"Admin-Portfolio-Clocks",path:"/Admin/Portfolio/Clocks",component:()=>Pe(()=>import("./XFQt_Zzx.js"),[],import.meta.url)},{name:"Admin-Portfolio-Film",path:"/Admin/Portfolio/Film",meta:uP||{},component:()=>Pe(()=>import("./Bm33EntZ.js"),__vite__mapDeps([5,6,2,7,8,9,10,11]),import.meta.url)},{name:"Admin-Portfolio",path:"/Admin/Portfolio",component:()=>Pe(()=>import("./CzIvfG0b.js"),[],import.meta.url)},{name:"Admin-Portfolio-Machinery",path:"/Admin/Portfolio/Machinery",component:()=>Pe(()=>import("./DFXTAEu_.js"),[],import.meta.url)},{name:"Admin-Portfolio-Truck",path:"/Admin/Portfolio/Truck",component:()=>Pe(()=>import("./Ca32nMZ0.js"),[],import.meta.url)},{name:"Admin-Portfolio-Videos",path:"/Admin/Portfolio/Videos",component:()=>Pe(()=>import("./TAPmFY5D.js"),[],import.meta.url)},{name:"Admin-Stuff",path:"/Admin/Stuff",component:()=>Pe(()=>import("./MDiFeFCi.js"),[],import.meta.url)},{name:"Bio",path:"/Bio",component:()=>Pe(()=>import("./Bj-G3HHS.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"Contact",path:"/Contact",component:()=>Pe(()=>import("./BnaDikB1.js"),__vite__mapDeps([14,15]),import.meta.url)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>Pe(()=>import("./DQHnrX4R.js"),__vite__mapDeps([16,8,9,17]),import.meta.url)},{name:"ForSale",path:"/ForSale",component:()=>Pe(()=>import("./CNaKRCtX.js"),__vite__mapDeps([18,19]),import.meta.url)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>Pe(()=>import("./C0F0zL0h.js"),__vite__mapDeps([20,8,9]),import.meta.url)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>Pe(()=>import("./DRZ8y_Ms.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>Pe(()=>import("./998-M1C6.js"),__vite__mapDeps([21,1,22]),import.meta.url)},{name:"Login",path:"/Login",component:()=>Pe(()=>import("./DboVPso7.js"),[],import.meta.url)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>Pe(()=>import("./tnefvn6j.js"),__vite__mapDeps([23,8,9,24]),import.meta.url)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>Pe(()=>import("./C57pYOmS.js"),__vite__mapDeps([25,8,9,26]),import.meta.url)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>Pe(()=>import("./ow3wUsKG.js"),__vite__mapDeps([7,6,8,9,10]),import.meta.url)},{name:"Portfolio",path:"/Portfolio",component:()=>Pe(()=>import("./DG9_p7sb.js"),__vite__mapDeps([27,28]),import.meta.url)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>Pe(()=>import("./ptp3Zn1f.js"),__vite__mapDeps([29,8,9]),import.meta.url)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>Pe(()=>import("./Cd754Wel.js"),__vite__mapDeps([30,8,9]),import.meta.url)},{name:"Portfolio-Videos",path:"/Portfolio/Videos",component:()=>Pe(()=>import("./CNgRugHo.js"),[],import.meta.url)},{name:"Stuff",path:"/Stuff",component:()=>Pe(()=>import("./BlNBUzrJ.js"),__vite__mapDeps([31,8,9]),import.meta.url)}],KE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?vt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),hP=/(:\w+)\([^)]+\)/g,fP=/(:\w+)[?+*]/g,dP=/:\w+/g;function Pg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(hP,"$1").replace(fP,"$1").replace(dP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function pP(t,e){return t===e||e===pn?!1:Pg(t)!==Pg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const mP={scrollBehavior(t,e,n){var u;const r=De(),s=((u=Et().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&pP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:kg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Ph),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:kg(t.hash),behavior:s}),h(i)})})}};function kg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const gP={hashMode:!1,scrollBehaviorType:"auto"},on={...gP,...mP},_P=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=De(),s=Et(),i=([e,n]=hi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Cl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>ni(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},yP=async t=>{let e,n;const r=([e,n]=hi(()=>rd(t.path)),e=await e,n(),e);if(r.redirect)return pr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},vP=[_P,yP],Ao={auth:()=>Pe(()=>import("./Sh7Gstvb.js"),[],import.meta.url)};function EP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Hm(h,"")}const a=Hm(r,t),l=!n||V1(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const wP=en({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=Ms().app.baseURL;on.hashMode&&!r.includes("#")&&(r+="#");const s=((N=on.history)==null?void 0:N.call(on,r))??(on.hashMode?PC(r):jE(r)),i=on.routes?([e,n]=hi(()=>on.routes(ju)),e=await e,n(),e??ju):ju;let o;const a=JC({...on,scrollBehavior:(x,C,E)=>{if(C===pn){o=E;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(x,pn,o||E)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Vo(a.currentRoute.value);a.afterEach((x,C)=>{l.value=C}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=EP(r,window.location,t.payload.path),h=Vo(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((x,C)=>{var E,R,D,V;((R=(E=x.matched[0])==null?void 0:E.components)==null?void 0:R.default)===((V=(D=C.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&d()});const p={};for(const x in h.value)Object.defineProperty(p,x,{get:()=>h.value[x],enumerable:!0});t._route=Jn(p),t._middleware=t._middleware||{global:[],named:{}};const g=Sl();a.afterEach(async(x,C,E)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(TE),E&&await t.callHook("page:loading:end")});try{[e,n]=hi(()=>a.isReady()),await e,n()}catch(x){[e,n]=hi(()=>t.runWithContext(()=>ni(x))),await e,n()}const I=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const O=t.payload.state._layout;return a.beforeEach(async(x,C)=>{var E;await t.callHook("page:loading:start"),x.meta=fr(x.meta),t.isHydrating&&O&&!Wr(x.meta.layout)&&(x.meta.layout=O),t._processingMiddleware=!0;{const R=new Set([...vP,...t._middleware.global]);for(const D of x.matched){const V=D.meta.middleware;if(V)for(const b of ad(V))R.add(b)}{const D=await t.runWithContext(()=>rd(x.path));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?R.add(V):R.delete(V)}for(const D of R){const V=typeof D=="string"?t._middleware.named[D]||await((E=Ao[D])==null?void 0:E.call(Ao).then(y=>y.default||y)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>V(x,C));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const y=b||xh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ni(y)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(x,C)=>{x.matched.length===0&&await t.runWithContext(()=>ni(xh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await a.replace({...I,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(x){await t.runWithContext(()=>ni(x))}}),{provide:{router:a}}}}),Hh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),bP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Ol=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Hh(()=>t())}):Hh(()=>t())},TP=en({name:"nuxt:payload",setup(t){Et().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await ag(e.path);r&&Object.assign(t.static.data,r.data)}),Ol(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await ag(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Pl,1e3)})}}),IP=en(()=>{const t=Et();Ol(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),AP=en(t=>{let e;async function n(){const r=await Pl();e&&clearTimeout(e),e=setTimeout(n,Gm);try{const s=await $fetch(ed("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Ol(()=>{e=setTimeout(n,Gm)})});function RP(t={}){const e=t.path||window.location.pathname;let n={};try{n=Wo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const SP=en({name:"nuxt:chunk-reload",setup(t){const e=Et(),n=Ms(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Rl(n.app.baseURL,i.fullPath);RP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),CP=en({name:"nuxt:global-components"}),Mr={default:()=>Pe(()=>import("./wYKFlpms.js"),__vite__mapDeps([32,6,1,33]),import.meta.url)},PP=en({name:"nuxt:prefetch",setup(t){const e=Et();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Mr[r]=="function"&&await Mr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(pr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=ad(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ao[o]=="function"&&Ao[o]();s&&typeof Mr[s]=="function"&&Mr[s]()})}});var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},QE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(GE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new OP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const I=u<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xP=function(t){const e=GE(t);return QE.encodeByteArray(e,!0)},zc=function(t){return xP(t).replace(/\./g,"")},YE=function(t){try{return QE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DP=()=>NP().__FIREBASE_DEFAULTS__,LP=()=>{if(typeof process>"u"||typeof Og>"u")return;const t=Og.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&YE(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return DP()||LP()||MP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XE=t=>{var e,n;return(n=(e=xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JE=t=>{const e=XE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZE=()=>{var t;return(t=xl())===null||t===void 0?void 0:t.config},e0=t=>{var e;return(e=xl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function t0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zc(JSON.stringify(n)),zc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function UP(){var t;const e=(t=xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function BP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $P(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HP(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qP(){return!UP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zP(){try{return typeof indexedDB=="object"}catch{return!1}}function WP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KP,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ma.prototype.create)}}class ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jn(s,a,r)}}function GP(t,e){return t.replace(QP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QP=/\{\$([^}]+)}/g;function YP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xg(i)&&xg(o)){if(!Wc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XP(t,e){const n=new JP(t,e);return n.subscribe.bind(n)}class JP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$u),s.error===void 0&&(s.error=$u),s.complete===void 0&&(s.complete=$u);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $u(){}/**
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
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nk(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tk(t){return t===_s?void 0:t}function nk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ek(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const sk={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},ik=ve.INFO,ok={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},ak=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ok[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=ik,this._logHandler=ak,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const ck=(t,e)=>e.some(n=>t instanceof n);let Ng,Dg;function lk(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uk(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,qh=new WeakMap,r0=new WeakMap,Hu=new WeakMap,ld=new WeakMap;function hk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),ld.set(e,t),e}function fk(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dk(t){zh=t(zh)}function pk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qu(this),e,...n);return r0.set(r,e.sort?e.sort():[e]),jr(r)}:uk().includes(t)?function(...e){return t.apply(qu(this),e),jr(n0.get(this))}:function(...e){return jr(t.apply(qu(this),e))}}function mk(t){return typeof t=="function"?pk(t):(t instanceof IDBTransaction&&fk(t),ck(t,lk())?new Proxy(t,zh):t)}function jr(t){if(t instanceof IDBRequest)return hk(t);if(Hu.has(t))return Hu.get(t);const e=mk(t);return e!==t&&(Hu.set(t,e),ld.set(e,t)),e}const qu=t=>ld.get(t);function gk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jr(o.result),l.oldVersion,l.newVersion,jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _k=["get","getKey","getAll","getAllKeys","count"],yk=["put","add","delete","clear"],zu=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_k.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return zu.set(e,i),i}dk(t=>({...t,get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Mg="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new cd("@firebase/app"),wk="@firebase/app-compat",bk="@firebase/analytics-compat",Tk="@firebase/analytics",Ik="@firebase/app-check-compat",Ak="@firebase/app-check",Rk="@firebase/auth",Sk="@firebase/auth-compat",Ck="@firebase/database",Pk="@firebase/data-connect",kk="@firebase/database-compat",Ok="@firebase/functions",xk="@firebase/functions-compat",Nk="@firebase/installations",Dk="@firebase/installations-compat",Lk="@firebase/messaging",Mk="@firebase/messaging-compat",Vk="@firebase/performance",Fk="@firebase/performance-compat",Uk="@firebase/remote-config",Bk="@firebase/remote-config-compat",jk="@firebase/storage",$k="@firebase/storage-compat",Hk="@firebase/firestore",qk="@firebase/vertexai",zk="@firebase/firestore-compat",Wk="firebase",Kk="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="[DEFAULT]",Gk={[Wh]:"fire-core",[wk]:"fire-core-compat",[Tk]:"fire-analytics",[bk]:"fire-analytics-compat",[Ak]:"fire-app-check",[Ik]:"fire-app-check-compat",[Rk]:"fire-auth",[Sk]:"fire-auth-compat",[Ck]:"fire-rtdb",[Pk]:"fire-data-connect",[kk]:"fire-rtdb-compat",[Ok]:"fire-fn",[xk]:"fire-fn-compat",[Nk]:"fire-iid",[Dk]:"fire-iid-compat",[Lk]:"fire-fcm",[Mk]:"fire-fcm-compat",[Vk]:"fire-perf",[Fk]:"fire-perf-compat",[Uk]:"fire-rc",[Bk]:"fire-rc-compat",[jk]:"fire-gcs",[$k]:"fire-gcs-compat",[Hk]:"fire-fst",[zk]:"fire-fst-compat",[qk]:"fire-vertex","fire-js":"fire-js",[Wk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map,Qk=new Map,Gh=new Map;function Vg(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Gh.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Kc.values())Vg(n,t);for(const n of Qk.values())Vg(n,t);return!0}function Nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new ma("app","Firebase",Yk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=Kk;function s0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=ZE()),!n)throw $r.create("no-options");const i=Kc.get(s);if(i){if(Wc(n,i.options)&&Wc(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new rk(s);for(const l of Gh.values())o.addComponent(l);const a=new Xk(n,r,o);return Kc.set(s,a),a}function ud(t=Kh){const e=Kc.get(t);if(!e&&t===Kh&&ZE())return s0();if(!e)throw $r.create("no-app",{appName:t});return e}function On(t,e,n){var r;let s=(r=Gk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Ps(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Jk="firebase-heartbeat-database",Zk=1,Qo="firebase-heartbeat-store";let Wu=null;function i0(){return Wu||(Wu=gk(Jk,Zk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),Wu}async function eO(t){try{const n=(await i0()).transaction(Qo),r=await n.objectStore(Qo).get(o0(t));return await n.done,r}catch(e){if(e instanceof jn)or.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Fg(t,e){try{const r=(await i0()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,o0(t)),await r.done}catch(n){if(n instanceof jn)or.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tO=1024,nO=30*24*60*60*1e3;class rO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ug();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ug(),{heartbeatsToSend:r,unsentEntries:s}=sO(this._heartbeatsCache.heartbeats),i=zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function sO(t,e=tO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zP()?WP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bg(t){return zc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t){Ps(new Kr("platform-logger",e=>new vk(e),"PRIVATE")),Ps(new Kr("heartbeat",e=>new rO(e),"PRIVATE")),On(Wh,Mg,t),On(Wh,Mg,"esm2017"),On("fire-js","")}oO("");var aO="firebase",cO="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(aO,cO,"app");function hd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lO=a0,c0=new ma("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new cd("@firebase/auth");function uO(t,...e){Gc.logLevel<=ve.WARN&&Gc.warn(`Auth (${Vs}): ${t}`,...e)}function mc(t,...e){Gc.logLevel<=ve.ERROR&&Gc.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw fd(t,...e)}function xn(t,...e){return fd(t,...e)}function l0(t,e,n){const r=Object.assign(Object.assign({},lO()),{[e]:n});return new ma("auth","Firebase",r).create(e,{appName:t.name})}function Hr(t){return l0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c0.create(t,...e)}function fe(t,e,...n){if(!t)throw fd(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function ar(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hO(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hO()||jP()||"connection"in navigator)?navigator.onLine:!0}function dO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=FP()||$P()}get(){return fO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new _a(3e4,6e4);function Fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ss(t,e,n,r,s={}){return h0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ga(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return BP()||(u.referrerPolicy="no-referrer"),u0.fetch()(f0(t,t.config.apiHost,n,a),u)})}async function h0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pO),e);try{const s=new _O(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw l0(t,h,u);bn(t,h)}}catch(s){if(s instanceof jn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function Dl(t,e,n,r,s={}){const i=await ss(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function f0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?dd(t.config,s):`${t.config.apiScheme}://${s}`}function gO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _O{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),mO.get())})}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xn(t,e,r);return s.customData._tokenResponse=n,s}function $g(t){return t!==void 0&&t.enterprise!==void 0}class yO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vO(t,e){return ss(t,"GET","/v2/recaptchaConfig",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function d0(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wO(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=pd(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ro(Ku(s.auth_time)),issuedAtTime:Ro(Ku(s.iat)),expirationTime:Ro(Ku(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ku(t){return Number(t)*1e3}function pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const s=YE(n);return s?JSON.parse(s):(mc("Failed to decode base64 JWT payload"),null)}catch(s){return mc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hg(t){const e=pd(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&bO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Yo(t,d0(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?p0(i.providerUserInfo):[],a=AO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function IO(t){const e=Ze(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,r=hd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e){const n=await h0(t,{},async()=>{const r=ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=f0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SO(t,e){return ss(t,"POST","/v2/accounts:revokeToken",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wO(this,e)}reload(){return IO(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await Yo(this,EO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:R,isAnonymous:D,providerData:V,stsTokenManager:b}=n;fe(E&&b,e,"internal-error");const y=fi.fromJSON(this.name,b);fe(typeof E=="string",e,"internal-error"),br(d,e.name),br(p,e.name),fe(typeof R=="boolean",e,"internal-error"),fe(typeof D=="boolean",e,"internal-error"),br(g,e.name),br(I,e.name),br(O,e.name),br(N,e.name),br(x,e.name),br(C,e.name);const _=new tr({uid:E,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:D,photoURL:I,phoneNumber:g,tenantId:O,stsTokenManager:y,createdAt:x,lastLoginAt:C});return V&&Array.isArray(V)&&(_.providerData=V.map(w=>Object.assign({},w))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?p0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new fi;a.updateFromIdToken(r);const l=new tr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Map;function nr(t){ar(t instanceof Function,"Expected a class definition");let e=qg.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const zg=m0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gc(this.userKey,s.apiKey,i),this.fullPersistenceKey=gc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(nr(zg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nr(zg);const o=gc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=tr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new di(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(b0(e))return"Webos";if(_0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(E0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=Nt()){return/firefox\//i.test(t)}function _0(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(t=Nt()){return/crios\//i.test(t)}function v0(t=Nt()){return/iemobile/i.test(t)}function E0(t=Nt()){return/android/i.test(t)}function w0(t=Nt()){return/blackberry/i.test(t)}function b0(t=Nt()){return/webos/i.test(t)}function md(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CO(t=Nt()){var e;return md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PO(){return HP()&&document.documentMode===10}function T0(t=Nt()){return md(t)||E0(t)||b0(t)||w0(t)||/windows phone/i.test(t)||v0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e=[]){let n;switch(t){case"Browser":n=Wg(Nt());break;case"Worker":n=`${Wg(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class kO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OO(t,e={}){return ss(t,"GET","/v2/passwordPolicy",Fs(t,e))}/**
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
 */const xO=6;class NO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new kO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await d0(this,{idToken:e}),r=await tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Hr(this));const n=e?Ze(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OO(this),n=new NO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mi(t){return Ze(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XP(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LO(t){Ll=t}function A0(t){return Ll.loadJS(t)}function MO(){return Ll.recaptchaEnterpriseScript}function VO(){return Ll.gapiScript}function FO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class UO{constructor(){this.enterprise=new BO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jO="recaptcha-enterprise",R0="NO_RECAPTCHA";class $O{constructor(e){this.type=jO,this.auth=Mi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{vO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;$g(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(R0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UO().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&$g(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=MO();l.length!==0&&(l+=a),A0(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Gg(t,e,n,r=!1,s=!1){const i=new $O(t);let o;if(s)o=R0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qg(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Gg(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e){const n=Nl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wc(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function qO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zO(t,e,n){const r=Mi(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=S0(e),{host:o,port:a}=WO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),KO()}function S0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WO(t){const e=S0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yg(o)}}}function Yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function GO(t,e){return ss(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e){return Dl(t,"POST","/v1/accounts:signInWithPassword",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}async function XO(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends gd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,n,"signInWithPassword",QO);case"emailLink":return YO(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,r,"signUpPassword",GO);case"emailLink":return XO(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return Dl(t,"POST","/v1/accounts:signInWithIdp",Fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO="http://localhost";class ks extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ks(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:JO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ga(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ex(t){const e=co(lo(t)).link,n=e?co(lo(e)).deep_link_id:null,r=co(lo(t)).deep_link_id;return(r?co(lo(r)).link:null)||r||n||e||t}class _d{constructor(e){var n,r,s,i,o,a;const l=co(lo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=ZO((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ex(e);try{return new _d(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_d.parseLink(n);return fe(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ya extends C0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends ya{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ya{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends ya{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tr._fromIdTokenResponse(e,r,s),o=Xg(r);return new Ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xg(r);return new Ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yc(e,n,r,s)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,i,e,r):i})}async function tx(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject(Hr(r));const s="reauthenticate";try{const i=await Yo(t,P0(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=pd(i.idToken);fe(o,r,"internal-error");const{sub:a}=o;return fe(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e,n=!1){if(Zn(t.app))return Promise.reject(Hr(t));const r="signIn",s=await P0(t,r,e),i=await Ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rx(t,e){return k0(Mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t){const e=Mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ix(t,e,n){return Zn(t.app)?Promise.reject(Hr(t)):rx(Ze(t),Vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sx(t),r})}function ox(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function ax(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function cx(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function lx(t){return Ze(t).signOut()}const Xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=1e3,hx=10;class x0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const fx=x0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await dx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=yd("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function mx(t){Nn().location.href=t}/**
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
 */function L0(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _x(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yx(){return L0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebaseLocalStorageDb",vx=1,Jc="firebaseLocalStorage",V0="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function Ex(){const t=indexedDB.deleteDatabase(M0);return new va(t).toPromise()}function Xh(){const t=indexedDB.open(M0,vx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:V0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await Ex(),e(await Xh()))})})}async function Jg(t,e,n){const r=Vl(t,!0).put({[V0]:e,value:n});return new va(r).toPromise()}async function wx(t,e){const n=Vl(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=Vl(t,!0).delete(e);return new va(n).toPromise()}const bx=800,Tx=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Tx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(yx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gx(),!this.activeServiceWorker)return;this.sender=new px(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await Jg(e,Xc,"1"),await Zg(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vl(s,!1).getAll();return new va(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const Ix=F0;new _a(3e4,6e4);/**
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
 */function Ax(t,e){return e?nr(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rx(t){return k0(t.auth,new vd(t),t.bypassAuthState)}function Sx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),nx(n,new vd(t),t.bypassAuthState)}async function Cx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),tx(n,new vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rx;case"linkViaPopup":case"linkViaRedirect":return Cx;case"reauthViaPopup":case"reauthViaRedirect":return Sx;default:bn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new _a(2e3,1e4);class ri extends U0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Px.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="pendingRedirect",_c=new Map;class Ox extends U0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const r=await xx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xx(t,e){const n=Lx(e),r=Dx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Nx(t,e){_c.set(t._key(),e)}function Dx(t){return nr(t._redirectPersistence)}function Lx(t){return gc(kx,t.config.apiKey,t.name)}async function Mx(t,e,n=!1){if(Zn(t.app))return Promise.reject(Hr(t));const r=Mi(t),s=Ax(r,e),o=await new Ox(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=10*60*1e3;class Fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ux(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vx&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(e))}saveEventToCache(e){this.cachedEventUids.add(e_(e)),this.lastProcessedEventTime=Date.now()}}function e_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$x=/^https?/;async function Hx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bx(t);for(const n of e)try{if(qx(n))return}catch{}bn(t,"unauthorized-domain")}function qx(t){const e=Qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$x.test(n))return!1;if(jx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zx=new _a(3e4,6e4);function t_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wx(t){return new Promise((e,n)=>{var r,s,i;function o(){t_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t_(),n(xn(t,"network-request-failed"))},timeout:zx.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const a=FO("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},A0(`${VO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yc=null,e})}let yc=null;function Kx(t){return yc=yc||Wx(t),yc}/**
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
 */const Gx=new _a(5e3,15e3),Qx="__/auth/iframe",Yx="emulator/auth/iframe",Xx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zx(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,Yx):`https://${t.config.authDomain}/${Qx}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=Jx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ga(r).slice(1)}`}async function eN(t){const e=await Kx(t),n=Nn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:Zx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Nn().setTimeout(()=>{i(o)},Gx.get());function l(){Nn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const tN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nN=500,rN=600,sN="_blank",iN="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oN(t,e,n,r=nN,s=rN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Nt().toLowerCase();n&&(a=y0(u)?sN:n),g0(u)&&(e=e||iN,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(CO(u)&&a!=="_self")return aN(e||"",a),new n_(null);const d=window.open(e||"",a,h);fe(d,t,"popup-blocked");try{d.focus()}catch{}return new n_(d)}function aN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cN="__/auth/handler",lN="emulator/auth/handler",uN=encodeURIComponent("fac");async function r_(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof C0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ya){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${uN}=${encodeURIComponent(l)}`:"";return`${hN(t)}?${ga(a).slice(1)}${u}`}function hN({config:t}){return t.emulator?dd(t,lN):`https://${t.authDomain}/${cN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=Mx,this._overrideRedirectResult=Nx}async _openPopup(e,n,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await r_(e,n,r,Qh(),s);return oN(e,o,yd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await r_(e,n,r,Qh(),s);return mx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eN(e),r=new Fx(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gu];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T0()||_0()||md()}}const dN=fN;var s_="@firebase/auth",i_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gN(t){Ps(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I0(t)},u=new DO(r,s,i,l);return qO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Kr("auth-internal",e=>{const n=Mi(e.getProvider("auth").getImmediate());return(r=>new pN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(s_,i_,mN(t)),On(s_,i_,"esm2017")}/**
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
 */const _N=5*60,yN=e0("authIdTokenMaxAge")||_N;let o_=null;const vN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yN)return;const s=n==null?void 0:n.token;o_!==s&&(o_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EN(t=ud()){const e=Nl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HO(t,{popupRedirectResolver:dN,persistence:[Ix,fx,D0]}),r=e0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vN(i.toString());ax(n,o,()=>o(n.currentUser)),ox(n,a=>o(a))}}const s=XE("auth");return s&&zO(n,`http://${s}`),n}function wN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gN("Browser");function mn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=mn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:mn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=mn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=mn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(mn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(mn(i),mn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(mn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const bN={path:"/",watch:!0,decode:t=>Wo(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},ec=window.cookieStore;function TN(t,e){var l;const n={...bN,...e};n.filter??(n.filter=u=>u===t);const r=a_(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=mn(i?void 0:r[t]??((l=n.default)==null?void 0:l.call(n))),a=s&&!i?RN(o,s,n.watch&&n.watch!=="shallow"):Kt(o);{let u=null;try{!ec&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=()=>{n.readonly||xR(a.value,r[t])||(AN(t,a.value,n),r[t]=mn(a.value),u==null||u.postMessage({value:n.encode(a.value)}))},d=I=>{var N;const O=I.refresh?(N=a_(n))==null?void 0:N[t]:n.decode(I.value);p=!0,a.value=O,r[t]=mn(O),Un(()=>{p=!1})};let p=!1;const g=!!la();if(g&&Cc(()=>{p=!0,h(),u==null||u.close()}),ec){const I=O=>{const N=O.changed.find(C=>C.name===t),x=O.deleted.find(C=>C.name===t);N&&d({value:N.value}),x&&d({value:null})};ec.addEventListener("change",I),g&&Cc(()=>ec.removeEventListener("change",I))}else u&&(u.onmessage=({data:I})=>d(I));n.watch?yn(a,()=>{p||h()},{deep:n.watch!=="shallow"}):h()}return a}function a_(t={}){return RR(document.cookie,t)}function IN(t,e,n={}){return e==null?Ym(t,e,{...n,maxAge:-1}):Ym(t,e,n)}function AN(t,e,n={}){document.cookie=IN(t,e,n)}const c_=2147483647;function RN(t,e,n){let r,s,i=0;const o=n?Kt(t):{value:t};return la()&&Cc(()=>{s==null||s(),clearTimeout(r)}),pI((a,l)=>{n&&(s=yn(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<c_?h:c_;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}async function j0(t,e=Et()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>j0(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const SN=(...t)=>t.find(e=>e!==void 0);function CN(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return l_(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:l_(o,t.trailingSlash)}}function r(s){const i=Et(),o=Ms(),a=Fe(()=>!!s.target&&s.target!=="_self"),l=Fe(()=>{const O=s.to||s.href||"";return typeof O=="string"&&pr(O,{acceptRelative:!0})}),u=Bo("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Fe(()=>{if(s.external)return!0;const O=s.to||s.href||"";return typeof O=="object"?!1:O===""||l.value}),p=Fe(()=>{const O=s.to||s.href||"";return d.value?O:n(O,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:p}),I=Fe(()=>{var O;if(!p.value||l.value)return p.value;if(d.value){const N=typeof p.value=="object"&&"path"in p.value?Dh(p.value):p.value,x=typeof N=="object"?i.resolve(N).href:N;return n(x,i.resolve)}return typeof p.value=="object"?((O=i.resolve(p.value))==null?void 0:O.href)??null:n(Rl(o.app.baseURL,p.value),i.resolve)});return{to:p,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:I,isActive:(g==null?void 0:g.isActive)??Fe(()=>p.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Fe(()=>p.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Fe(()=>i.resolve(p.value)),async navigate(){await $R(I.value,{replace:s.replace,external:d.value||a.value})}}}return Bn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Et(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:p}=r(s),g=Kt(!1),I=Kt(null),O=C=>{var E;I.value=s.custom?(E=C==null?void 0:C.$el)==null?void 0:E.nextElementSibling:C==null?void 0:C.$el};function N(C){var E,R;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===C:((E=s.prefetchOn)==null?void 0:E[C])??((R=t.prefetchOn)==null?void 0:R[C]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!xN()}async function x(C=De()){if(g.value)return;g.value=!0;const E=typeof a.value=="string"?a.value:h.value?Dh(a.value):o.resolve(a.value).fullPath,R=h.value?new URL(E,window.location.href).href:E;await Promise.all([C.hooks.callHook("link:prefetch",R).catch(()=>{}),!h.value&&!d.value&&j0(a.value,o).catch(()=>{})])}if(N("visibility")){const C=De();let E,R=null;El(()=>{const D=kN();Ol(()=>{E=Hh(()=>{var V;(V=I==null?void 0:I.value)!=null&&V.tagName&&(R=D.observe(I.value,async()=>{R==null||R(),R=null,await x(C)}))})})}),fa(()=>{E&&bP(E),R==null||R(),R=null})}return()=>{var R;if(!h.value&&!d.value){const D={ref:O,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=x.bind(null,void 0),D.onFocus=x.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),vt(Bo("RouterLink"),D,i.default)}const C=s.target||null,E=SN(s.noRel?"":s.rel,t.externalRelAttribute,p.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,prefetch:x,get route(){if(!l.value)return;const D=new URL(l.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return iE(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:E,target:C,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:vt("a",{ref:I,href:l.value||null,rel:E,target:C},(R=i.default)==null?void 0:R.call(i))}}})}const PN=CN(gR);function l_(t,e){const n=e==="append"?Uc:Al;return pr(t)&&!t.startsWith("http")?t:n(t,!0)}function kN(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}const ON=/2g/;function xN(){const t=navigator.connection;return!!(t&&(t.saveData||ON.test(t.effectiveType)))}var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,$0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,P,S){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return y.prototype[P].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)w[P]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(P=0;16>P;++P)w[P]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],P=b.g[2];var S=b.g[3],T=y+(S^_&(P^S))+w[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=S+(P^y&(_^P))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=P+(_^S&(y^_))+w[2]+606105819&4294967295,P=S+(T<<17&4294967295|T>>>15),T=_+(y^P&(S^y))+w[3]+3250441966&4294967295,_=P+(T<<22&4294967295|T>>>10),T=y+(S^_&(P^S))+w[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(P^y&(_^P))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=P+(_^S&(y^_))+w[6]+2821735955&4294967295,P=S+(T<<17&4294967295|T>>>15),T=_+(y^P&(S^y))+w[7]+4249261313&4294967295,_=P+(T<<22&4294967295|T>>>10),T=y+(S^_&(P^S))+w[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(P^y&(_^P))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=P+(_^S&(y^_))+w[10]+4294925233&4294967295,P=S+(T<<17&4294967295|T>>>15),T=_+(y^P&(S^y))+w[11]+2304563134&4294967295,_=P+(T<<22&4294967295|T>>>10),T=y+(S^_&(P^S))+w[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=S+(P^y&(_^P))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=P+(_^S&(y^_))+w[14]+2792965006&4294967295,P=S+(T<<17&4294967295|T>>>15),T=_+(y^P&(S^y))+w[15]+1236535329&4294967295,_=P+(T<<22&4294967295|T>>>10),T=y+(P^S&(_^P))+w[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^P&(y^_))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=P+(y^_&(S^y))+w[11]+643717713&4294967295,P=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(P^S))+w[0]+3921069994&4294967295,_=P+(T<<20&4294967295|T>>>12),T=y+(P^S&(_^P))+w[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^P&(y^_))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=P+(y^_&(S^y))+w[15]+3634488961&4294967295,P=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(P^S))+w[4]+3889429448&4294967295,_=P+(T<<20&4294967295|T>>>12),T=y+(P^S&(_^P))+w[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^P&(y^_))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=P+(y^_&(S^y))+w[3]+4107603335&4294967295,P=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(P^S))+w[8]+1163531501&4294967295,_=P+(T<<20&4294967295|T>>>12),T=y+(P^S&(_^P))+w[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=S+(_^P&(y^_))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=P+(y^_&(S^y))+w[7]+1735328473&4294967295,P=S+(T<<14&4294967295|T>>>18),T=_+(S^y&(P^S))+w[12]+2368359562&4294967295,_=P+(T<<20&4294967295|T>>>12),T=y+(_^P^S)+w[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^P)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=P+(S^y^_)+w[11]+1839030562&4294967295,P=S+(T<<16&4294967295|T>>>16),T=_+(P^S^y)+w[14]+4259657740&4294967295,_=P+(T<<23&4294967295|T>>>9),T=y+(_^P^S)+w[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^P)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=P+(S^y^_)+w[7]+4139469664&4294967295,P=S+(T<<16&4294967295|T>>>16),T=_+(P^S^y)+w[10]+3200236656&4294967295,_=P+(T<<23&4294967295|T>>>9),T=y+(_^P^S)+w[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^P)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=P+(S^y^_)+w[3]+3572445317&4294967295,P=S+(T<<16&4294967295|T>>>16),T=_+(P^S^y)+w[6]+76029189&4294967295,_=P+(T<<23&4294967295|T>>>9),T=y+(_^P^S)+w[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=S+(y^_^P)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=P+(S^y^_)+w[15]+530742520&4294967295,P=S+(T<<16&4294967295|T>>>16),T=_+(P^S^y)+w[2]+3299628645&4294967295,_=P+(T<<23&4294967295|T>>>9),T=y+(P^(_|~S))+w[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~P))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=P+(y^(S|~_))+w[14]+2878612391&4294967295,P=S+(T<<15&4294967295|T>>>17),T=_+(S^(P|~y))+w[5]+4237533241&4294967295,_=P+(T<<21&4294967295|T>>>11),T=y+(P^(_|~S))+w[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~P))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=P+(y^(S|~_))+w[10]+4293915773&4294967295,P=S+(T<<15&4294967295|T>>>17),T=_+(S^(P|~y))+w[1]+2240044497&4294967295,_=P+(T<<21&4294967295|T>>>11),T=y+(P^(_|~S))+w[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~P))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=P+(y^(S|~_))+w[6]+2734768916&4294967295,P=S+(T<<15&4294967295|T>>>17),T=_+(S^(P|~y))+w[13]+1309151649&4294967295,_=P+(T<<21&4294967295|T>>>11),T=y+(P^(_|~S))+w[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=S+(_^(y|~P))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=P+(y^(S|~_))+w[2]+718787259&4294967295,P=S+(T<<15&4294967295|T>>>17),T=_+(S^(P|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,w=this.B,P=this.h,S=0;S<y;){if(P==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(w[P++]=b.charCodeAt(S++),P==this.blockSize){s(this,w),P=0;break}}else for(;S<y;)if(w[P++]=b[S++],P==this.blockSize){s(this,w),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)b[_++]=this.g[y]>>>w&255;return b};function i(b,y){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],w=!0,P=b.length-1;0<=P;P--){var S=b[P]|0;w&&S==y||(_[P]=S,w=!1)}this.g=_}var a={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var y=[],_=1,w=0;b>=_;w++)y[w]=b/_|0,_*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=d,P=0;P<b.length;P+=8){var S=Math.min(8,b.length-P),T=parseInt(b.substring(P,P+S),y);8>S?(S=u(Math.pow(y,S)),w=w.j(S).add(u(T))):(w=w.j(_),w=w.add(u(T)))}return w}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(O(this))return"-"+N(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,w="";;){var P=R(_,y).g;_=x(_,P.j(y));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=P,I(_))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=x(this,b),O(b)?-1:I(b)?0:1};function N(b){for(var y=b.g.length,_=[],w=0;w<y;w++)_[w]=~b.g[w];return new o(_,~b.h).add(p)}t.abs=function(){return O(this)?N(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0,P=0;P<=y;P++){var S=w+(this.i(P)&65535)+(b.i(P)&65535),T=(S>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);w=T>>>16,S&=65535,T&=65535,_[P]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(b,y){return b.add(N(y))}t.j=function(b){if(I(this)||I(b))return d;if(O(this))return O(b)?N(this).j(N(b)):N(N(this).j(b));if(O(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var P=0;P<b.g.length;P++){var S=this.i(w)>>>16,T=this.i(w)&65535,me=b.i(P)>>>16,ye=b.i(P)&65535;_[2*w+2*P]+=T*ye,C(_,2*w+2*P),_[2*w+2*P+1]+=S*ye,C(_,2*w+2*P+1),_[2*w+2*P+1]+=T*me,C(_,2*w+2*P+1),_[2*w+2*P+2]+=S*me,C(_,2*w+2*P+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function C(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function E(b,y){this.g=b,this.h=y}function R(b,y){if(I(y))throw Error("division by zero");if(I(b))return new E(d,d);if(O(b))return y=R(N(b),y),new E(N(y.g),N(y.h));if(O(y))return y=R(b,N(y)),new E(N(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,w=y;0>=w.l(b);)_=D(_),w=D(w);var P=V(_,1),S=V(w,1);for(w=V(w,2),_=V(_,2);!I(w);){var T=S.add(w);0>=T.l(b)&&(P=P.add(_),S=T),w=V(w,1),_=V(_,1)}return y=x(b,P.j(y)),new E(P,y)}for(P=d;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(_),T=S.j(y);O(T)||0<T.l(b);)_-=w,S=u(_),T=S.j(y);I(S)&&(S=p),P=P.add(S),b=x(b,T)}return new E(P,b)}t.A=function(b){return R(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&b.i(w);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|b.i(w);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^b.i(w);return new o(_,this.h^b.h)};function D(b){for(var y=b.g.length+1,_=[],w=0;w<y;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(_,b.h)}function V(b,y){var _=y>>5;y%=32;for(var w=b.g.length-_,P=[],S=0;S<w;S++)P[S]=0<y?b.i(S+_)>>>y|b.i(S+_+1)<<32-y:b.i(S+_);return new o(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Is=o}).apply(typeof u_<"u"?u_:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,uo,q0,vc,Jh,z0,W0,K0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var L=c[v];if(!(L in m))break e;m=m[L]}c=c[c.length-1],v=m[c],f=f(v),f!=v&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,v=!1,L={next:function(){if(!v&&m<c.length){var F=m++;return{value:f(F,c[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function I(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(v,L,F){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return f.prototype[L].apply(v,G)}}function O(c){const f=c.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=c[v];return m}return[]}function N(c,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const L=c.length||0,F=v.length||0;c.length=L+F;for(let G=0;G<F;G++)c[L+G]=v[G]}else c.push(v)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(c){return/^[\s\xa0]*$/.test(c)}function E(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function R(c){return R[" "](c),c}R[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(c,f,m){for(const v in c)f.call(m,c[v],v,c)}function b(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function y(c){const f={};for(const m in c)f[m]=c[m];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,f){let m,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(m in v)c[m]=v[m];for(let F=0;F<_.length;F++)m=_[F],Object.prototype.hasOwnProperty.call(v,m)&&(c[m]=v[m])}}function P(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function T(){var c=We;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class me{constructor(){this.h=this.g=null}add(f,m){const v=ye.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var ye=new x(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let re,te=!1,We=new me,fn=()=>{const c=a.Promise.resolve(void 0);re=()=>{c.then(nn)}};var nn=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(m){S(m)}var f=ye;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}te=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function Tn(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{R(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:jt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Tn.aa.h.call(this)}}I(Tn,Ge);var jt={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(c,f,m,v,L){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=L,this.key=++Z,this.da=this.fa=!1}function ne(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,f,m,v,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=A(c,f,v,L);return-1<G?(f=c[G],m||(f.fa=!1)):(f=new Y(f,this.src,F,!!v,L),f.fa=m,c.push(f)),f};function Ne(c,f){var m=f.type;if(m in c.g){var v=c.g[m],L=Array.prototype.indexOf.call(v,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(v,L,1),F&&(ne(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,f,m,v){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==v)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function $(c,f,m,v,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)$(c,f[F],m,v,L);return null}return m=oe(m),c&&c[B]?c.K(f,m,u(v)?!!v.capture:!!v,L):U(c,f,m,!1,v,L)}function U(c,f,m,v,L,F){if(!f)throw Error("Invalid event type");var G=u(L)?!!L.capture:!!L,Me=le(c);if(Me||(c[k]=Me=new we(c)),m=Me.add(f,m,v,G,F),m.proxy)return m;if(v=q(),m.proxy=v,v.src=c,v.listener=m,c.addEventListener)gr||(L=G),L===void 0&&(L=!1),c.addEventListener(f.toString(),v,L);else if(c.attachEvent)c.attachEvent(W(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return f.call(c.src,c.listener,m)}const f=z;return c}function Q(c,f,m,v,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Q(c,f[F],m,v,L);else v=u(v)?!!v.capture:!!v,m=oe(m),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],m=A(F,m,v,L),-1<m&&(ne(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=le(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,m,v,L)),(m=-1<c?f[c]:null)&&K(m))}function K(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Ne(f.i,c);else{var m=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(m,v,c.capture):f.detachEvent?f.detachEvent(W(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=le(f))?(Ne(m,c),m.h==0&&(m.src=null,f[k]=null)):ne(c)}}}function W(c){return c in M?M[c]:M[c]="on"+c}function z(c,f){if(c.da)c=!0;else{f=new Tn(f,this);var m=c.listener,v=c.ha||c.src;c.fa&&K(c),c=m.call(v,f)}return c}function le(c){return c=c[k],c instanceof we?c:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[X]||(c[X]=function(f){return c.handleEvent(f)}),c[X])}function se(){Ke.call(this),this.i=new we(this),this.M=this,this.F=null}I(se,Ke),se.prototype[B]=!0,se.prototype.removeEventListener=function(c,f,m,v){Q(this,c,f,m,v)};function he(c,f){var m,v=c.F;if(v)for(m=[];v;v=v.F)m.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var L=f;f=new Ge(v,c),w(f,L)}if(L=!0,m)for(var F=m.length-1;0<=F;F--){var G=f.g=m[F];L=Ce(G,v,!0,f)&&L}if(G=f.g=c,L=Ce(G,v,!0,f)&&L,L=Ce(G,v,!1,f)&&L,m)for(F=0;F<m.length;F++)G=f.g=m[F],L=Ce(G,v,!1,f)&&L}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],v=0;v<m.length;v++)ne(m[v]);delete c.g[f],c.h--}}this.F=null},se.prototype.K=function(c,f,m,v){return this.i.add(String(c),f,!1,m,v)},se.prototype.L=function(c,f,m,v){return this.i.add(String(c),f,!0,m,v)};function Ce(c,f,m,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var G=f[F];if(G&&!G.da&&G.capture==m){var Me=G.listener,pt=G.ha||G.src;G.fa&&Ne(c.i,G),L=Me.call(pt,v)!==!1&&L}}return L&&!v.defaultPrevented}function Ae(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function bt(c){c.g=Ae(()=>{c.g=null,c.i&&(c.i=!1,bt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class ut extends Ke{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(c){Ke.call(this),this.h=c,this.g={}}I(dt,Ke);var Tt=[];function _r(c){V(c.g,function(f,m){this.g.hasOwnProperty(m)&&K(f)},c),c.g={}}dt.prototype.N=function(){dt.aa.N.call(this),_r(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=a.JSON.stringify,Dt=a.JSON.parse,rn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function $s(){}$s.prototype.h=null;function hp(c){return c.h||(c.h=c.i())}function fp(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cu(){Ge.call(this,"d")}I(cu,Ge);function lu(){Ge.call(this,"c")}I(lu,Ge);var as={},dp=null;function Ra(){return dp=dp||new se}as.La="serverreachability";function pp(c){Ge.call(this,as.La,c)}I(pp,Ge);function qi(c){const f=Ra();he(f,new pp(f))}as.STAT_EVENT="statevent";function mp(c,f){Ge.call(this,as.STAT_EVENT,c),this.stat=f}I(mp,Ge);function Lt(c){const f=Ra();he(f,new mp(f,c))}as.Ma="timingevent";function gp(c,f){Ge.call(this,as.Ma,c),this.size=f}I(gp,Ge);function zi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function cT(c,f,m,v,L,F){c.info(function(){if(c.g)if(F)for(var G="",Me=F.split("&"),pt=0;pt<Me.length;pt++){var Re=Me[pt].split("=");if(1<Re.length){var It=Re[0];Re=Re[1];var At=It.split("_");G=2<=At.length&&At[1]=="type"?G+(It+"="+Re+"&"):G+(It+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+f+`
`+m+`
`+G})}function lT(c,f,m,v,L,F,G){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+f+`
`+m+`
`+F+" "+G})}function Hs(c,f,m,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+hT(c,m)+(v?" "+v:"")})}function uT(c,f){c.info(function(){return"TIMEOUT: "+f})}Wi.prototype.info=function(){};function hT(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var v=m[c];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return js(m)}catch{return f}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_p={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uu;function Ca(){}I(Ca,$s),Ca.prototype.g=function(){return new XMLHttpRequest},Ca.prototype.i=function(){return{}},uu=new Ca;function yr(c,f,m,v){this.j=c,this.i=f,this.l=m,this.R=v||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yp}function yp(){this.i=null,this.g="",this.h=!1}var vp={},hu={};function fu(c,f,m){c.L=1,c.v=xa($n(f)),c.m=m,c.P=!0,Ep(c,null)}function Ep(c,f){c.F=Date.now(),Pa(c),c.A=$n(c.v);var m=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Dp(m.i,"t",v),c.C=0,m=c.j.J,c.h=new yp,c.g=Jp(c.j,m?f:null,!c.m),0<c.O&&(c.M=new ut(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,v=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(Tt[0]=L.toString()),L=Tt);for(var F=0;F<L.length;F++){var G=$(m,L[F],v||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),qi(),cT(c.i,c.u,c.A,c.l,c.R,c.m)}yr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Hn(c)==3?f.j():this.Y(c)},yr.prototype.Y=function(c){try{if(c==this.g)e:{const At=Hn(this.g);var f=this.g.Ba();const Ws=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||jp(this.g)))){this.J||At!=4||f==7||(f==8||0>=Ws?qi(3):qi(2)),du(this);var m=this.g.Z();this.X=m;t:if(wp(this)){var v=jp(this.g);c="";var L=v.length,F=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),Ki(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(F&&f==L-1)});v.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,lT(this.i,this.u,this.A,this.l,this.R,At,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,pt=this.g;if((Me=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(Me)){var Re=Me;break t}}Re=null}if(m=Re)Hs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pu(this,m);else{this.o=!1,this.s=3,Lt(12),cs(this),Ki(this);break e}}if(this.P){m=!0;let dn;for(;!this.J&&this.C<G.length;)if(dn=fT(this,G),dn==hu){At==4&&(this.s=4,Lt(14),m=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==vp){this.s=4,Lt(15),Hs(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Hs(this.i,this.l,dn,null),pu(this,dn);if(wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||G.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)Hs(this.i,this.l,G,"[Invalid Chunked Response]"),cs(this),Ki(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Eu(It),It.M=!0,Lt(11))}}else Hs(this.i,this.l,G,null),pu(this,G);At==4&&cs(this),this.o&&!this.J&&(At==4?Gp(this.j,this):(this.o=!1,Pa(this)))}else PT(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),cs(this),Ki(this)}}}catch{}finally{}};function wp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fT(c,f){var m=c.C,v=f.indexOf(`
`,m);return v==-1?hu:(m=Number(f.substring(m,v)),isNaN(m)?vp:(v+=1,v+m>f.length?hu:(f=f.slice(v,v+m),c.C=v+m,f)))}yr.prototype.cancel=function(){this.J=!0,cs(this)};function Pa(c){c.S=Date.now()+c.I,bp(c,c.I)}function bp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=zi(p(c.ba,c),f)}function du(c){c.B&&(a.clearTimeout(c.B),c.B=null)}yr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(uT(this.i,this.A),this.L!=2&&(qi(),Lt(17)),cs(this),this.s=2,Ki(this)):bp(this,this.S-c)};function Ki(c){c.j.G==0||c.J||Gp(c.j,c)}function cs(c){du(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,_r(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function pu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||mu(m.h,c))){if(!c.K&&mu(m.h,c)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)Fa(m),Ma(m);else break e;vu(m),Lt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=zi(p(m.Za,m),6e3));if(1>=Ap(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else us(m,11)}else if((c.K||m.g==c)&&Fa(m),!C(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let Re=L[f];if(m.T=Re[0],Re=Re[1],m.G==2)if(Re[0]=="c"){m.K=Re[1],m.ia=Re[2];const It=Re[3];It!=null&&(m.la=It,m.j.info("VER="+m.la));const At=Re[4];At!=null&&(m.Aa=At,m.j.info("SVER="+m.Aa));const Ws=Re[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(v=1.5*Ws,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const dn=c.g;if(dn){const Ba=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ba){var F=v.h;F.g||Ba.indexOf("spdy")==-1&&Ba.indexOf("quic")==-1&&Ba.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(gu(F,F.h),F.h=null))}if(v.D){const wu=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(v.ya=wu,Be(v.I,v.D,wu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var G=c;if(v.qa=Xp(v,v.J?v.ia:null,v.W),G.K){Rp(v.h,G);var Me=G,pt=v.L;pt&&(Me.I=pt),Me.B&&(du(Me),Pa(Me)),v.g=G}else Wp(v);0<m.i.length&&Va(m)}else Re[0]!="stop"&&Re[0]!="close"||us(m,7);else m.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?us(m,7):yu(m):Re[0]!="noop"&&m.l&&m.l.ta(Re),m.v=0)}}qi(4)}catch{}}var dT=class{constructor(c,f){this.g=c,this.map=f}};function Tp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ip(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ap(c){return c.h?1:c.g?c.g.size:0}function mu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function gu(c,f){c.g?c.g.add(f):c.h=f}function Rp(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Tp.prototype.cancel=function(){if(this.i=Sp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Sp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return O(c.i)}function pT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,v=0;v<m;v++)f.push(c[v]);return f}f=[],m=0;for(v in c)f[m++]=c[v];return f}function mT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const v in c)f[m++]=v;return f}}}function Cp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=mT(c),v=pT(c),L=v.length,F=0;F<L;F++)f.call(void 0,v[F],m&&m[F],c)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gT(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var v=c[m].indexOf("="),L=null;if(0<=v){var F=c[m].substring(0,v);L=c[m].substring(v+1)}else F=c[m];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ls(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ls){this.h=c.h,ka(this,c.j),this.o=c.o,this.g=c.g,Oa(this,c.s),this.l=c.l;var f=c.i,m=new Yi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),kp(this,m),this.m=c.m}else c&&(f=String(c).match(Pp))?(this.h=!1,ka(this,f[1]||"",!0),this.o=Gi(f[2]||""),this.g=Gi(f[3]||"",!0),Oa(this,f[4]),this.l=Gi(f[5]||"",!0),kp(this,f[6]||"",!0),this.m=Gi(f[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}ls.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Qi(f,Op,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Qi(f,Op,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Qi(m,m.charAt(0)=="/"?vT:yT,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Qi(m,wT)),c.join("")};function $n(c){return new ls(c)}function ka(c,f,m){c.j=m?Gi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Oa(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function kp(c,f,m){f instanceof Yi?(c.i=f,bT(c.i,c.h)):(m||(f=Qi(f,ET)),c.i=new Yi(f,c.h))}function Be(c,f,m){c.i.set(f,m)}function xa(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Gi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,_T),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _T(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Op=/[#\/\?@]/g,yT=/[#\?:]/g,vT=/[#\?]/g,ET=/[#\?@]/g,wT=/#/g;function Yi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function vr(c){c.g||(c.g=new Map,c.h=0,c.i&&gT(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Yi.prototype,t.add=function(c,f){vr(this),this.i=null,c=qs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function xp(c,f){vr(c),f=qs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Np(c,f){return vr(c),f=qs(c,f),c.g.has(f)}t.forEach=function(c,f){vr(this),this.g.forEach(function(m,v){m.forEach(function(L){c.call(f,L,v,this)},this)},this)},t.na=function(){vr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const L=c[v];for(let F=0;F<L.length;F++)m.push(f[v])}return m},t.V=function(c){vr(this);let f=[];if(typeof c=="string")Np(this,c)&&(f=f.concat(this.g.get(qs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return vr(this),this.i=null,c=qs(this,c),Np(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Dp(c,f,m){xp(c,f),0<m.length&&(c.i=null,c.g.set(qs(c,f),O(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const F=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var L=F;G[v]!==""&&(L+="="+encodeURIComponent(String(G[v]))),c.push(L)}}return this.i=c.join("&")};function qs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function bT(c,f){f&&!c.j&&(vr(c),c.i=null,c.g.forEach(function(m,v){var L=v.toLowerCase();v!=L&&(xp(this,v),Dp(this,L,m))},c)),c.j=f}function TT(c,f){const m=new Wi;if(a.Image){const v=new Image;v.onload=g(Er,m,"TestLoadImage: loaded",!0,f,v),v.onerror=g(Er,m,"TestLoadImage: error",!1,f,v),v.onabort=g(Er,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=g(Er,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function IT(c,f){const m=new Wi,v=new AbortController,L=setTimeout(()=>{v.abort(),Er(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(F=>{clearTimeout(L),F.ok?Er(m,"TestPingServer: ok",!0,f):Er(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Er(m,"TestPingServer: error",!1,f)})}function Er(c,f,m,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(m)}catch{}}function AT(){this.g=new rn}function RT(c,f,m){const v=m||"";try{Cp(c,function(L,F){let G=L;u(L)&&(G=js(L)),f.push(v+F+"="+encodeURIComponent(G))})}catch(L){throw f.push(v+"type="+encodeURIComponent("_badmap")),L}}function Na(c){this.l=c.Ub||null,this.j=c.eb||!1}I(Na,$s),Na.prototype.g=function(){return new Da(this.l,this.j)},Na.prototype.i=function(c){return function(){return c}}({});function Da(c,f){se.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Da,se),t=Da.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Ji(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Xi(this):Ji(this),this.readyState==3&&Lp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Xi(this))},t.Qa=function(c){this.g&&(this.response=c,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ji(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Ji(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mp(c){let f="";return V(c,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function _u(c,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Mp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Be(c,f,m))}function Xe(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Xe,se);var ST=/^https?$/i,CT=["POST","PUT"];t=Xe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uu.g(),this.v=this.o?hp(this.o):hp(uu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Vp(this,F);return}if(c=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)m.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())m.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(CT,f,void 0))||v||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bp(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Vp(this,F)}};function Vp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Fp(c),La(c)}function Fp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),La(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),La(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Hn(c)!=4||c.Z()!=2)){if(c.u&&Hn(c)==4)Ae(c.Ea,0,c);else if(he(c,"readystatechange"),Hn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=G===0){var L=String(c.D).match(Pp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),v=!ST.test(L?L.toLowerCase():"")}m=v}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var F=2<Hn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Fp(c)}}finally{La(c)}}}}function La(c,f){if(c.g){Bp(c);const m=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||he(c,"ready");try{m.onreadystatechange=v}catch{}}}function Bp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Hn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Dt(f)}};function jp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function PT(c){const f={};c=(c.g&&2<=Hn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(C(c[v]))continue;var m=P(c[v]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[L]||[];f[L]=F,F.push(m)}b(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function $p(c){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zi("baseRetryDelayMs",5e3,c),this.cb=Zi("retryDelaySeedMs",1e4,c),this.Wa=Zi("forwardChannelMaxRetries",2,c),this.wa=Zi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(c&&c.concurrentRequestLimit),this.Da=new AT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$p.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,v){Lt(0),this.W=c,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Xp(this,null,this.W),Va(this)};function yu(c){if(Hp(c),c.G==3){var f=c.U++,m=$n(c.I);if(Be(m,"SID",c.K),Be(m,"RID",f),Be(m,"TYPE","terminate"),eo(c,m),f=new yr(c,c.j,f),f.L=2,f.v=xa($n(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Jp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Pa(f)}Yp(c)}function Ma(c){c.g&&(Eu(c),c.g.cancel(),c.g=null)}function Hp(c){Ma(c),c.u&&(a.clearTimeout(c.u),c.u=null),Fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Va(c){if(!Ip(c.h)&&!c.s){c.s=!0;var f=c.Ga;re||fn(),te||(re(),te=!0),We.add(f,c),c.B=0}}function kT(c,f){return Ap(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=zi(p(c.Ga,c,f),Qp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new yr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=zp(this,L,f),m=$n(this.I),Be(m,"RID",c),Be(m,"CVER",22),this.D&&Be(m,"X-HTTP-Session-Id",this.D),eo(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(Mp(F)))+"&"+f:this.m&&_u(m,this.m,F)),gu(this.h,L),this.Ua&&Be(m,"TYPE","init"),this.P?(Be(m,"$req",f),Be(m,"SID","null"),L.T=!0,fu(L,m,null)):fu(L,m,f),this.G=2}}else this.G==3&&(c?qp(this,c):this.i.length==0||Ip(this.h)||qp(this))};function qp(c,f){var m;f?m=f.l:m=c.U++;const v=$n(c.I);Be(v,"SID",c.K),Be(v,"RID",m),Be(v,"AID",c.T),eo(c,v),c.m&&c.o&&_u(v,c.m,c.o),m=new yr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=zp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),gu(c.h,m),fu(m,v,f)}function eo(c,f){c.H&&V(c.H,function(m,v){Be(f,v,m)}),c.l&&Cp({},function(m,v){Be(f,v,m)})}function zp(c,f,m){m=Math.min(c.i.length,m);var v=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=L[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Me=!0;for(let pt=0;pt<m;pt++){let Re=L[pt].g;const It=L[pt].map;if(Re-=F,0>Re)F=Math.max(0,L[pt].g-100),Me=!1;else try{RT(It,G,"req"+Re+"_")}catch{v&&v(It)}}if(Me){v=G.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,v}function Wp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;re||fn(),te||(re(),te=!0),We.add(f,c),c.v=0}}function vu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=zi(p(c.Fa,c),Qp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Kp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=zi(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Ma(this),Kp(this))};function Eu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Kp(c){c.g=new yr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=$n(c.qa);Be(f,"RID","rpc"),Be(f,"SID",c.K),Be(f,"AID",c.T),Be(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(f,"TO",c.ja),Be(f,"TYPE","xmlhttp"),eo(c,f),c.m&&c.o&&_u(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=xa($n(f)),m.m=null,m.P=!0,Ep(m,c)}t.Za=function(){this.C!=null&&(this.C=null,Ma(this),vu(this),Lt(19))};function Fa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Gp(c,f){var m=null;if(c.g==f){Fa(c),Eu(c),c.g=null;var v=2}else if(mu(c.h,f))m=f.D,Rp(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;v=Ra(),he(v,new gp(v,m)),Va(c)}else Wp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(v==1&&kT(c,f)||v==2&&vu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),L){case 1:us(c,5);break;case 4:us(c,10);break;case 3:us(c,6);break;default:us(c,2)}}}function Qp(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function us(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),v=c.Xa;const L=!v;v=new ls(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ka(v,"https"),xa(v),L?TT(v.toString(),m):IT(v.toString(),m)}else Lt(2);c.G=0,c.l&&c.l.sa(f),Yp(c),Hp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Yp(c){if(c.G=0,c.ka=[],c.l){const f=Sp(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.ra()}}function Xp(c,f,m){var v=m instanceof ls?$n(m):new ls(m);if(v.g!="")f&&(v.g=f+"."+v.g),Oa(v,v.s);else{var L=a.location;v=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new ls(null);v&&ka(F,v),f&&(F.g=f),L&&Oa(F,L),m&&(F.l=m),v=F}return m=c.D,f=c.ya,m&&f&&Be(v,m,f),Be(v,"VER",c.la),eo(c,v),v}function Jp(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Xe(new Na({eb:m})):new Xe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zp(){}t=Zp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ua(){}Ua.prototype.g=function(c,f){return new Gt(c,f)};function Gt(c,f){se.call(this),this.g=new $p(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!C(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!C(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new zs(this)}I(Gt,se),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){yu(this.g)},Gt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=js(c),c=m);f.i.push(new dT(f.Ya++,c)),f.G==3&&Va(f)},Gt.prototype.N=function(){this.g.l=null,delete this.j,yu(this.g),delete this.g,Gt.aa.N.call(this)};function em(c){cu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}I(em,cu);function tm(){lu.call(this),this.status=1}I(tm,lu);function zs(c){this.g=c}I(zs,Zp),zs.prototype.ua=function(){he(this.g,"a")},zs.prototype.ta=function(c){he(this.g,new em(c))},zs.prototype.sa=function(c){he(this.g,new tm)},zs.prototype.ra=function(){he(this.g,"b")},Ua.prototype.createWebChannel=Ua.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,K0=function(){return new Ua},W0=function(){return Ra()},z0=as,Jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,vc=Sa,_p.COMPLETE="complete",q0=_p,fp.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",se.prototype.listen=se.prototype.K,uo=fp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,H0=Xe}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const h_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Fi="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new cd("@firebase/firestore");function Js(){return Os.logLevel}function ee(t,...e){if(Os.logLevel<=ve.DEBUG){const n=e.map(Ed);Os.debug(`Firestore (${Fi}): ${t}`,...n)}}function cr(t,...e){if(Os.logLevel<=ve.ERROR){const n=e.map(Ed);Os.error(`Firestore (${Fi}): ${t}`,...n)}}function Ii(t,...e){if(Os.logLevel<=ve.WARN){const n=e.map(Ed);Os.warn(`Firestore (${Fi}): ${t}`,...n)}}function Ed(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Oe(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class DN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LN{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new G0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new St(e)}}class MN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class VN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new MN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Oe(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new FN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=BN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ct(0,0))}static max(){return new ge(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Jo{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const jN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Jo{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return jN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ae(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ae(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ae(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}function $N(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Gr(s,ue.empty(),e)}function HN(t){return new Gr(t.readTime,t.key,-1)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ge.min(),ue.empty(),-1)}static max(){return new Gr(ge.max(),ue.empty(),-1)}}function qN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==zN)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fl.oe=-1;function Ul(t){return t==null}function Zc(t){return t===0&&1/t==-1/0}function GN(t){return typeof t=="number"&&Number.isInteger(t)&&!Zc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=f_(e)),e=YN(t.get(n),e);return f_(e)}function YN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function f_(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new p_(this.data.getIterator())}getIteratorFrom(e){return new p_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class p_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new lt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new X0("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const XN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=XN.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bl(t){const e=t.mapValue.fields.__previous_value__;return wd(e)?Bl(e):e}function Zo(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wd(t)?4:e2(t)?9007199254740991:ZN(t)?10:11:pe()}function Mn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qr(s.timestampValue),a=Qr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Yr(s.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),a=nt(i.doubleValue);return o===a?Zc(o)===Zc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ai(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(d_(o)!==d_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function ta(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Ri(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return m_(t.timestampValue,e.timestampValue);case 4:return m_(Zo(t),Zo(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Yr(i),l=Yr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=be(a[u],l[u]);if(h!==0)return h}return be(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(nt(i.latitude),nt(o.latitude));return a!==0?a:be(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return g_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,O=be(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return O!==0?O:g_(g,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rc.mapValue&&o===rc.mapValue)return 0;if(i===rc.mapValue)return 1;if(o===rc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=be(l[d],h[d]);if(p!==0)return p;const g=Ri(a[l[d]],u[h[d]]);if(g!==0)return g}return be(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function m_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Qr(t),r=Qr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function g_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ri(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Si(t){return Zh(t)}function Zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Ec(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bl(t);return e?16+Ec(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ec(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return is(r.fields,(i,o)=>{s+=i.length+Ec(o)}),s}(t.mapValue);default:throw pe()}}function ef(t){return!!t&&"integerValue"in t}function bd(t){return!!t&&"arrayValue"in t}function __(t){return!!t&&"nullValue"in t}function y_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wc(t){return!!t&&"mapValue"in t}function ZN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function e2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=So(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(So(this.value))}}function J0(t){const e=[];return is(t.fields,(n,r)=>{const s=new yt([n]);if(wc(r)){const i=J0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ot(e,0,ge.min(),ge.min(),ge.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ot(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Ot(e,2,n,ge.min(),ge.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,ge.min(),ge.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function v_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function E_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function t2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Z0{}class ot extends Z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new r2(e,n,r):n==="array-contains"?new o2(e,r):n==="in"?new a2(e,r):n==="not-in"?new c2(e,r):n==="array-contains-any"?new l2(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new s2(e,r):new i2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ri(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends Z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vn(e,n)}matches(e){return ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ew(t){return t.op==="and"}function tw(t){return n2(t)&&ew(t)}function n2(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function tf(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(tw(t))return t.filters.map(e=>tf(e)).join(",");{const e=t.filters.map(n=>tf(n)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof Vn?function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nw(o,s.filters[a]),!0):!1}(t,e):void pe()}function rw(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(rw).join(" ,")+"}"}(t):"Filter"}class r2 extends ot{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class s2 extends ot{constructor(e,n){super(e,"in",n),this.keys=sw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class i2 extends ot{constructor(e,n){super(e,"not-in",n),this.keys=sw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class o2 extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bd(n)&&ta(n.arrayValue,this.value)}}class a2 extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class c2 extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ta(this.value.arrayValue,n)}}class l2 extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function w_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new u2(t,e,n,r,s,i,o)}function Td(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.ue=n}return e.ue}function Id(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!t2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!E_(t.startAt,e.startAt)&&E_(t.endAt,e.endAt)}function nf(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function h2(t,e,n,r,s,i,o,a){return new jl(t,e,n,r,s,i,o,a)}function iw(t){return new jl(t)}function b_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f2(t){return t.collectionGroup!==null}function Co(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new tl(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new tl(yt.keyField(),r))}return e.ce}function Dn(t){const e=_e(t);return e.le||(e.le=d2(e,Co(t))),e.le}function d2(t,e){if(t.limitType==="F")return w_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tl(s.field,i)});const n=t.endAt?new el(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new el(t.startAt.position,t.startAt.inclusive):null;return w_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rf(t,e,n){return new jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Id(Dn(t),Dn(e))&&t.limitType===e.limitType}function ow(t){return`${Td(Dn(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rw(s)).join(", ")}]`),Ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Si(s)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Co(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=v_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Co(r),s)||r.endAt&&!function(o,a,l){const u=v_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Co(r),s))}(t,e)}function p2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aw(t){return(e,n)=>{let r=!1;for(const s of Co(t)){const i=m2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function m2(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ri(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new Ye(ue.comparator);function lr(){return g2}const cw=new Ye(ue.comparator);function ho(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function lw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vs(){return Po()}function uw(){return Po()}function Po(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const _2=new Ye(ue.comparator),y2=new lt(ue.comparator);function Ee(...t){let e=y2;for(const n of t)e=e.add(n);return e}const v2=new lt(be);function E2(){return v2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function w2(t,e){return GN(e)?hw(e):Ad(t,e)}/**
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
 */class ql{constructor(){this._=void 0}}function b2(t,e,n){return t instanceof nl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wd(i)&&(i=Bl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof na?dw(t,e):t instanceof ra?pw(t,e):function(s,i){const o=fw(s,i),a=T_(o)+T_(s.Pe);return ef(o)&&ef(s.Pe)?hw(a):Ad(s.serializer,a)}(t,e)}function T2(t,e,n){return t instanceof na?dw(t,e):t instanceof ra?pw(t,e):n}function fw(t,e){return t instanceof rl?function(r){return ef(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nl extends ql{}class na extends ql{constructor(e){super(),this.elements=e}}function dw(t,e){const n=mw(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends ql{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class rl extends ql{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function T_(t){return nt(t.integerValue||t.doubleValue)}function mw(t){return bd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function I2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof na&&s instanceof na||r instanceof ra&&s instanceof ra?Ai(r.elements,s.elements,Mn):r instanceof rl&&s instanceof rl?Mn(r.Pe,s.Pe):r instanceof nl&&s instanceof nl}(t.transform,e.transform)}class A2{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zl{}function gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rd(t.key,ln.none()):new Ea(t.key,t.data,ln.none());{const n=t.data,r=zt.empty();let s=new lt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new Yt(s.toArray()),ln.none())}}function R2(t,e,n){t instanceof Ea?function(s,i,o){const a=s.value.clone(),l=A_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,i,o){if(!bc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=A_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(_w(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof Ea?function(i,o,a,l){if(!bc(i.precondition,o))return a;const u=i.value.clone(),h=R_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof os?function(i,o,a,l){if(!bc(i.precondition,o))return a;const u=R_(i.fieldTransforms,l,o),h=o.data;return h.setAll(_w(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return bc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fw(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function I_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ai(r,s,(i,o)=>I2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends zl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends zl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _w(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function A_(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,T2(o,a,n[s]))}return r}function R_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,b2(i,o,e))}return r}class Rd extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C2 extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=gw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Ai(this.mutations,e.mutations,(n,r)=>I_(n,r))&&Ai(this.baseMutations,e.baseMutations,(n,r)=>I_(n,r))}}class Sd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return _2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sd(e,n,r,s)}}/**
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
 */var rt,Te;function x2(t){switch(t){default:return pe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function yw(t){if(t===void 0)return cr("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return pe()}}(Te=rt||(rt={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const D2=new Is([4294967295,4294967295],0);function S_(t){const e=N2().encode(t),n=new $0;return n.update(e),new Uint8Array(n.digest())}function C_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Is([n,r],0),new Is([s,i],0)]}class Cd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fo(`Invalid padding: ${n}`);if(r<0)throw new fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Is.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Is.fromNumber(r)));return s.compare(D2)===1&&(s=new Is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=S_(e),[r,s]=C_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=S_(e),[r,s]=C_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wl(ge.min(),s,new Ye(be),lr(),Ee())}}class wa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class vw{constructor(e,n){this.targetId=e,this.me=n}}class Ew{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class P_{constructor(){this.fe=0,this.ge=k_(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=k_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class L2{constructor(e){this.Le=e,this.Be=new Map,this.ke=lr(),this.qe=sc(),this.Qe=sc(),this.Ke=new Ye(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(nf(i))if(r===0){const o=new ue(i.path);this.We(n,o,Ot.newNoDocument(o,ge.min()))}else Oe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Yr(r).toUint8Array()}catch(l){if(l instanceof X0)return Ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Cd(o,s,i)}catch(l){return Ii(l instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&nf(a.target)){const l=new ue(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,Ot.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Wl(e,n,this.Ke,this.ke,r);return this.ke=lr(),this.qe=sc(),this.Qe=sc(),this.Ke=new Ye(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new P_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new lt(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new P_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sc(){return new Ye(ue.comparator)}function k_(){return new Ye(ue.comparator)}const M2={asc:"ASCENDING",desc:"DESCENDING"},V2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F2={and:"AND",or:"OR"};class U2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sf(t,e){return t.useProto3Json||Ul(e)?e:{value:e}}function sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B2(t,e){return sl(t,e.toTimestamp())}function Ln(t){return Oe(!!t),ge.fromTimestamp(function(n){const r=Qr(n);return new ct(r.seconds,r.nanos)}(t))}function Pd(t,e){return of(t,e).canonicalString()}function of(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bw(t){const e=He.fromString(t);return Oe(Sw(e)),e}function af(t,e){return Pd(t.databaseId,e.path)}function Qu(t,e){const n=bw(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Iw(n))}function Tw(t,e){return Pd(t.databaseId,e)}function j2(t){const e=bw(t);return e.length===4?He.emptyPath():Iw(e)}function cf(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iw(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function O_(t,e,n){return{name:af(t,e),fields:n.value.mapValue.fields}}function $2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Oe(h===void 0||typeof h=="string"),wt.fromBase64String(h||"")):(Oe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:yw(u.code);return new ae(h,u.message||"")}(o);n=new Ew(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qu(t,r.document.name),i=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):ge.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=Ot.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Tc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qu(t,r.document),i=r.readTime?Ln(r.readTime):ge.min(),o=Ot.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qu(t,r.document),i=r.removedTargetIds||[];n=new Tc([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new O2(s,i),a=r.targetId;n=new vw(a,o)}}return n}function H2(t,e){let n;if(e instanceof Ea)n={update:O_(t,e.key,e.value)};else if(e instanceof Rd)n={delete:af(t,e.key)};else if(e instanceof os)n={update:O_(t,e.key,e.data),updateMask:J2(e.fieldMask)};else{if(!(e instanceof C2))return pe();n={verify:af(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:B2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function q2(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ln(s.updateTime):Ln(i);return o.isEqual(ge.min())&&(o=Ln(i)),new A2(o,s.transformResults||[])}(n,e))):[]}function z2(t,e){return{documents:[Tw(t,e.path)]}}function W2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,s);const i=function(u){if(u.length!==0)return Rw(Vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:ei(p.field),direction:Q2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=sf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function K2(t){let e=j2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=Aw(d);return p instanceof Vn&&tw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new tl(ti(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Ul(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new el(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new el(g,p)}(n.endAt)),h2(e,s,o,i,a,"F",l,u)}function G2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Aw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ti(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ti(n.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ti(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ti(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>Aw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function Q2(t){return M2[t]}function Y2(t){return V2[t]}function X2(t){return F2[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return yt.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof ot?function(n){if(n.op==="=="){if(y_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(__(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(y_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(__(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:Y2(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(s=>Rw(s));return r.length===1?r[0]:{compositeFilter:{op:X2(n.op),filters:r}}}(t):pe()}function J2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Z2{constructor(e){this.ht=e}}function eD(t){const e=K2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.ln=new nD}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Gr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class nD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(He.comparator)).toArray()}}/**
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
 */const x_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(41943040,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ci(0)}static Qn(){return new Ci(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class rD{constructor(e){this.Gn=e,this.buffer=new lt(N_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class sD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bi(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ui(n)}await this.Yn(3e5)})}}class iD{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Fl.oe);const r=new rD(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(x_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),x_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Js()<=ve.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function oD(t,e){return new iD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ko(r.mutation,s,Yt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ho();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=lr();const o=Po(),a=function(){return Po()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof os)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ko(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new cD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new Ye((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Yt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Ee()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=uw();h.forEach(p=>{if(!i.has(p)){const g=gw(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(vs());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ee())).next(h=>({batchId:a,changes:lw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=ho();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ho();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(d,p){return new jl(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))});let a=ho();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ko(h.mutation,u,Yt.empty(),ct.now()),Hl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ln(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:eD(s.bundledQuery),readTime:Ln(s.readTime)}}(n)),j.resolve()}}/**
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
 */class hD{constructor(){this.overlays=new Ye(ue.comparator),this.Er=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=vs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=vs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new k2(n,r));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class fD{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.dr=new lt(ht.Ar),this.Rr=new lt(ht.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ht(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ue(new He([])),r=new ht(n,e),s=new ht(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ue(new He([])),r=new ht(n,e),s=new ht(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ht(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ue.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new lt(ht.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new P2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(be);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ht(new ue(i),0);let a=new lt(be);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ht(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ot.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,a=new ue(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qN(HN(h),r)<=0||(s.has(h.key)||Hl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Lr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mD(this)}getSize(e){return j.resolve(this.size)}}class mD extends aD{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.persistence=e,this.Br=new Us(n=>Td(n),Id),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new kd,this.targetCount=0,this.Qr=Ci.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ci(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Fl(0),this.Ur=!1,this.Ur=!0,this.Wr=new fD,this.referenceDelegate=e(this),this.Gr=new gD(this),this.indexManager=new tD,this.remoteDocumentCache=function(s){return new pD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Z2(n),this.jr=new uD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new dD(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new _D(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class _D extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class Od{constructor(e){this.persistence=e,this.Zr=new kd,this.Xr=null}static ei(e){return new Od(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=ue.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class il{constructor(e,n){this.persistence=e,this.ri=new Us(r=>QN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=oD(this,n)}static ei(e,n){return new il(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ec(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xd(e,n.fromCache,r,s)}}/**
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
 */class yD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return qP()?8:KN(Nt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yD;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Js()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Js()<=ve.DEBUG&&ee("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Js()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):j.resolve())}Xi(e,n){if(b_(n))return j.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=rf(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,rf(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return b_(n)||s.isEqual(ge.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(Js()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zs(n)),this.os(e,o,n,$N(s,-1)).next(a=>a))})}rs(e,n){let r=new lt(aw(e));return n.forEach((s,i)=>{Hl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Js()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Gr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(be),this.cs=new Us(i=>Td(i),Id),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function wD(t,e,n,r){return new ED(t,e,n,r)}async function Pw(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function bD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=j.resolve();return p.forEach(I=>{g=g.next(()=>h.getEntry(l,I)).next(O=>{const N=u.docVersions.get(I);Oe(N!==null),O.version.compareTo(N)<0&&(d.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kw(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function TD(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(wt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(O,N,x){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let l=lr(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(ID(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.Es})),!r.isEqual(ge.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function ID(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:s}})}function AD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RD(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function lf(t,e,n){const r=_e(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Bi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function D_(t,e,n){const r=_e(t);let s=ge.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=_e(l),p=d.cs.get(h);return p!==void 0?j.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,Dn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ee())).next(a=>(SD(r,p2(e),a),{documents:a,ds:i})))}function SD(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class L_{constructor(){this.activeTargetIds=E2()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CD{constructor(){this._o=new L_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new L_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function Yu(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class xD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=Yu(),l=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,l,u,s).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ii("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=kD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Yu();return new Promise((o,a)=>{const l=new H0;l.setWithCredentials(!0),l.listenOnce(q0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vc.NO_ERROR:const h=l.getResponseJson();ee(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case vc.TIMEOUT:ee(Rt,`RPC '${e}' ${i} timed out`),a(new ae(H.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const d=l.getStatus();if(ee(Rt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(g.status);a(new ae(I,g.message))}else a(new ae(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ae(H.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ee(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(Rt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Yu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K0(),a=W0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ee(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const I=new OD({Eo:N=>{g?ee(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(ee(Rt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ee(Rt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ao:()=>d.close()}),O=(N,x,C)=>{N.listen(x,E=>{try{C(E)}catch(R){setTimeout(()=>{throw R},0)}})};return O(d,uo.EventType.OPEN,()=>{g||(ee(Rt,`RPC '${e}' stream ${s} transport opened.`),I.So())}),O(d,uo.EventType.CLOSE,()=>{g||(g=!0,ee(Rt,`RPC '${e}' stream ${s} transport closed`),I.Do())}),O(d,uo.EventType.ERROR,N=>{g||(g=!0,Ii(Rt,`RPC '${e}' stream ${s} transport errored:`,N),I.Do(new ae(H.UNAVAILABLE,"The operation could not be completed")))}),O(d,uo.EventType.MESSAGE,N=>{var x;if(!g){const C=N.data[0];Oe(!!C);const E=C,R=(E==null?void 0:E.error)||((x=E[0])===null||x===void 0?void 0:x.error);if(R){ee(Rt,`RPC '${e}' stream ${s} received error:`,R);const D=R.status;let V=function(_){const w=rt[_];if(w!==void 0)return yw(w)}(D),b=R.message;V===void 0&&(V=H.INTERNAL,b="Unknown error status: "+D+" with message "+R.message),g=!0,I.Do(new ae(V,b)),d.close()}else ee(Rt,`RPC '${e}' stream ${s} received:`,C),I.vo(C)}}),O(a,z0.STAT_EVENT,N=>{N.stat===Jh.PROXY?ee(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Jh.NOPROXY&&ee(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function Xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t){return new U2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ow(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ae(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ND extends xw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=$2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Ln(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=cf(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=nf(l)?{documents:z2(i,l)}:{query:W2(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ww(i,o.resumeToken);const u=sf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=sl(i,o.snapshotVersion.toTimestamp());const u=sf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=G2(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=cf(this.serializer),n.removeTarget=e,this.c_(n)}}class DD extends xw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=q2(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=cf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>H2(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,of(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae(H.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,of(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(H.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class MD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(cr(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Bs(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.k_.add(4),await ba(u),u.K_.set("Unknown"),u.k_.delete(4),await Gl(u)}(this))})}),this.K_=new MD(r,s)}}async function Gl(t){if(Bs(t))for(const e of t.q_)await e(!0)}async function ba(t){for(const e of t.q_)await e(!1)}function Nw(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Md(n)?Ld(n):ji(n).s_()&&Dd(n,e))}function Nd(t,e){const n=_e(t),r=ji(n);n.B_.delete(e),r.s_()&&Dw(n,e),n.B_.size===0&&(r.s_()?r.a_():Bs(n)&&n.K_.set("Unknown"))}function Dd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ji(t).V_(e)}function Dw(t,e){t.U_.xe(e),ji(t).m_(e)}function Ld(t){t.U_=new L2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ji(t).start(),t.K_.F_()}function Md(t){return Bs(t)&&!ji(t).i_()&&t.B_.size>0}function Bs(t){return _e(t).k_.size===0}function Lw(t){t.U_=void 0}async function FD(t){t.K_.set("Online")}async function UD(t){t.B_.forEach((e,n)=>{Dd(t,e)})}async function BD(t,e){Lw(t),Md(t)?(t.K_.O_(e),Ld(t)):t.K_.set("Unknown")}async function jD(t,e,n){if(t.K_.set("Online"),e instanceof Ew&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ol(t,r)}else if(e instanceof Tc?t.U_.$e(e):e instanceof vw?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await kw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.B_.get(l);if(!h)return;i.B_.set(l,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),Dw(i,l);const d=new Vr(h.target,l,u,h.sequenceNumber);Dd(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await ol(t,r)}}async function ol(t,e,n){if(!Bi(e))throw e;t.k_.add(1),await ba(t),t.K_.set("Offline"),n||(n=()=>kw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Gl(t)})}function Mw(t,e){return e().catch(n=>ol(t,n,e))}async function Ql(t){const e=_e(t),n=Jr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;$D(e);)try{const s=await AD(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,HD(e,s)}catch(s){await ol(e,s)}Vw(e)&&Fw(e)}function $D(t){return Bs(t)&&t.L_.length<10}function HD(t,e){t.L_.push(e);const n=Jr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Vw(t){return Bs(t)&&!Jr(t).i_()&&t.L_.length>0}function Fw(t){Jr(t).start()}async function qD(t){Jr(t).w_()}async function zD(t){const e=Jr(t);for(const n of t.L_)e.g_(n.mutations)}async function WD(t,e,n){const r=t.L_.shift(),s=Sd.from(r,e,n);await Mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ql(t)}async function KD(t,e){e&&Jr(t).f_&&await async function(r,s){if(function(o){return x2(o)&&o!==H.ABORTED}(s.code)){const i=r.L_.shift();Jr(r).__(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ql(r)}}(t,e),Vw(t)&&Fw(t)}async function V_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Bs(n);n.k_.add(3),await ba(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Gl(n)}async function GD(t,e){const n=_e(t);e?(n.k_.delete(2),await Gl(n)):e||(n.k_.add(2),await ba(n),n.K_.set("Unknown"))}function ji(t){return t.W_||(t.W_=function(n,r,s){const i=_e(n);return i.b_(),new ND(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:FD.bind(null,t),mo:UD.bind(null,t),po:BD.bind(null,t),R_:jD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Md(t)?Ld(t):t.K_.set("Unknown")):(await t.W_.stop(),Lw(t))})),t.W_}function Jr(t){return t.G_||(t.G_=function(n,r,s){const i=_e(n);return i.b_(),new DD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:qD.bind(null,t),po:KD.bind(null,t),p_:zD.bind(null,t),y_:WD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ql(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Vd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Bi(t))return new ae(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{static emptySet(e){return new mi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=ho(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.z_=new Ye(ue.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Pi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pi(e,n,mi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class YD{constructor(){this.queries=U_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=U_(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new ae(H.ABORTED,"Firestore shutting down"))}}function U_(){return new Us(t=>ow(t),$l)}async function XD(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new QD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Fd(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Ud(n)}async function JD(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&Ud(n)}function eL(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Ud(t){t.X_.forEach(e=>{e.next()})}var uf,B_;(B_=uf||(uf={})).na="default",B_.Cache="cache";class tL{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==uf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class nL{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=aw(e),this.ma=new mi(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new F_,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=Hl(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),O=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?I!==O&&(r.track({type:3,doc:g}),N=!0):this.ya(p,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Va(g,l)>0||u&&this.Va(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),N=!0):p&&!g&&(r.track({type:1,doc:p}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),i=O?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,I){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return O(g)-O(I)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new Pi(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new F_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Bw(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Pi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class rL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sL{constructor(e){this.key=e,this.Fa=!1}}class iL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Us(a=>ow(a),$l),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ue.comparator),this.Ba=new Map,this.ka=new kd,this.qa={},this.Qa=new Map,this.Ka=Ci.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function oL(t,e,n=!0){const r=Ww(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await jw(r,e,n,!0),s}async function aL(t,e){const n=Ww(t);await jw(n,e,!0,!1)}async function jw(t,e,n,r){const s=await RD(t.localStore,Dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await cL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Nw(t.remoteStore,s),a}async function cL(t,e,n,r,s){t.Ua=(d,p,g)=>async function(O,N,x,C){let E=N.view.ga(x);E.ss&&(E=await D_(O.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,E)));const R=C&&C.targetChanges.get(N.targetId),D=C&&C.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(E,O.isPrimaryClient,R,D);return $_(O,N.targetId,V.ba),V.snapshot}(t,d,p,g);const i=await D_(t.localStore,e,!0),o=new nL(e,i.ds),a=o.ga(i.documents),l=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);$_(t,n,u.ba);const h=new rL(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function lL(t,e,n){const r=_e(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!$l(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nd(r.remoteStore,s.targetId),hf(r,s.targetId)}).catch(Ui)):(hf(r,s.targetId),await lf(r.localStore,s.targetId,!0))}async function uL(t,e){const n=_e(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nd(n.remoteStore,r.targetId))}async function hL(t,e,n){const r=yL(t);try{const s=await function(o,a){const l=_e(o),u=ct.now(),h=a.reduce((g,I)=>g.add(I.key),Ee());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=lr(),O=Ee();return l.hs.getEntries(g,h).next(N=>{I=N,I.forEach((x,C)=>{C.isValidDocument()||(O=O.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(N=>{d=N;const x=[];for(const C of a){const E=S2(C,d.get(C.key).overlayedDocument);E!=null&&x.push(new os(C.key,E,J0(E.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(N=>{p=N;const x=N.applyToLocalDocumentSet(d,O);return l.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:p.batchId,changes:lw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(be)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ta(r,s.changes),await Ql(r.remoteStore)}catch(s){const i=Fd(s,"Failed to persist write");n.reject(i)}}async function $w(t,e){const n=_e(t);try{const r=await TD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Oe(o.Fa):s.removedDocuments.size>0&&(Oe(o.Fa),o.Fa=!1))}),await Ta(n,r,e)}catch(r){await Ui(r)}}function j_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&Ud(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fL(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ue.comparator);o=o.insert(i,Ot.newNoDocument(i,ge.min()));const a=Ee().add(i),l=new Wl(ge.min(),new Map,new Ye(be),o,a);await $w(r,l),r.La=r.La.remove(i),r.Ba.delete(e),Bd(r)}else await lf(r.localStore,e,!1).then(()=>hf(r,e,n)).catch(Ui)}async function dL(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await bD(n.localStore,e);qw(n,r,null),Hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,s)}catch(s){await Ui(s)}}async function pL(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Oe(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);qw(r,e,n),Hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,s)}catch(s){await Ui(s)}}function Hw(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function qw(t,e,n){const r=_e(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function hf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||zw(t,r)})}function zw(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Nd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Bd(t))}function $_(t,e,n){for(const r of n)r instanceof Uw?(t.ka.addReference(r.key,e),mL(t,r)):r instanceof Bw?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||zw(t,r.key)):pe()}function mL(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),Bd(t))}function Bd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ue(He.fromString(e)),r=t.Ka.next();t.Ba.set(r,new sL(n)),t.La=t.La.insert(n,r),Nw(t.remoteStore,new Vr(Dn(iw(n.path)),r,"TargetPurposeLimboResolution",Fl.oe))}}async function Ta(t,e,n){const r=_e(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=xd.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,p=>j.forEach(p.Wi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>j.forEach(p.Gi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Bi(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.us.get(p),I=g.snapshotVersion,O=g.withLastLimboFreeSnapshotVersion(I);h.us=h.us.insert(p,O)}}}(r.localStore,i))}async function gL(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Pw(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new ae(H.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.Ts)}}function _L(t,e){const n=_e(t),r=n.Ba.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function Ww(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_L.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fL.bind(null,e),e.Ma.R_=ZD.bind(null,e.eventManager),e.Ma.Wa=eL.bind(null,e.eventManager),e}function yL(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pL.bind(null,e),e}class al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return wD(this.persistence,new vD,e.initialUser,this.serializer)}ja(e){return new Cw(Od.ei,this.serializer)}za(e){return new CD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}al.provider={build:()=>new al};class vL extends al{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Oe(this.persistence.referenceDelegate instanceof il);const r=this.persistence.referenceDelegate.garbageCollector;return new sD(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new Cw(r=>il.ei(r,n),this.serializer)}}class ff{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gL.bind(null,this.syncEngine),await GD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YD}()}createDatastore(e){const n=Kl(e.databaseInfo.databaseId),r=function(i){return new xD(i)}(e.databaseInfo);return function(i,o,a,l){return new LD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new VD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j_(this.syncEngine,n,0),function(){return M_.p()?new M_:new PD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new iL(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ba(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ff.provider={build:()=>new ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class EL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ju(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function H_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bL(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>V_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>V_(e.remoteStore,s)),t._onlineComponents=e}async function bL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ju(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await Ju(t,new al)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Ju(t,new vL(void 0));return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await H_(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await H_(t,new ff))),t._onlineComponents}function TL(t){return Kw(t).then(e=>e.syncEngine)}async function IL(t){const e=await Kw(t),n=e.eventManager;return n.onListen=oL.bind(null,e.syncEngine),n.onUnlisten=lL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uL.bind(null,e.syncEngine),n}function AL(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new EL({next:p=>{h.eu(),o.enqueueAndForget(()=>JD(i,d)),p.fromCache&&l.source==="server"?u.reject(new ae(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new tL(a,h,{includeMetadataChanges:!0,ua:!0});return XD(i,d)}(await IL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const q_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e,n){if(!n)throw new ae(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RL(t,e,n,r){if(e===!0&&r===!0)throw new ae(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z_(t){if(!ue.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function W_(t){if(ue.isDocumentKey(t))throw new ae(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ki(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jd(t);throw new ae(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NN;switch(r.type){case"firstParty":return new VN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q_.get(n);r&&(ee("ComponentProvider","Removing Datastore"),q_.delete(n),r.terminate())}(this),Promise.resolve()}}function SL(t,e,n,r={}){var s;const i=(t=ki(t,Yl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=St.MOCK_USER;else{a=t0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ae(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(u)}t._authCredentials=new DN(new G0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xl(this.firestore,e,this._query)}}class un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class zr extends Xl{constructor(e,n,r){super(e,n,iw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new ue(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function bU(t,e,...n){if(t=Ze(t),Qw("collection","path",e),t instanceof Yl){const r=He.fromString(e,...n);return W_(r),new zr(t,null,r)}{if(!(t instanceof un||t instanceof zr))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return W_(r),new zr(t.firestore,null,r)}}function TU(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=Q0.newId()),Qw("doc","path",e),t instanceof Yl){const r=He.fromString(e,...n);return z_(r),new un(t,null,new ue(r))}{if(!(t instanceof un||t instanceof zr))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return z_(r),new un(t.firestore,t instanceof zr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ow(this,"async_queue_retry"),this.fu=()=>{const r=Xu();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Xu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new qr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Bi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Vd.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Jl extends Yl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new G_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G_(e),this._firestoreClient=void 0,await e}}}function CL(t,e){const n=typeof t=="object"?t:ud(),r=typeof t=="string"?t:"(default)",s=Nl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JE("firestore");i&&SL(s,...i)}return s}function $d(t){if(t._terminated)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PL(t),t._firestoreClient}function PL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new JN(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Gw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new wL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(wt.fromBase64String(e))}catch(n){throw new ae(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class zd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=/^__.*__$/;class OL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class Yw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Wd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return cl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Xw(this.Mu)&&kL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class xL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kl(e)}$u(e,n,r,s=!1){return new Wd({Mu:e,methodName:n,Ku:r,path:yt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jw(t){const e=t._freezeSettings(),n=Kl(t._databaseId);return new xL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zw(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Kd("Data must be an object, but it was:",o,r);const a=eb(r,o);let l,u;if(i.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=df(e,d,n);if(!o.contains(p))throw new ae(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nb(h,p)||h.push(p)}l=new Yt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new OL(new zt(a),l,u)}class eu extends Hd{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}function NL(t,e,n,r){const s=t.$u(1,e,n);Kd("Data must be an object, but it was:",s,r);const i=[],o=zt.empty();is(r,(l,u)=>{const h=Gd(e,l,n);u=Ze(u);const d=s.Bu(h);if(u instanceof eu)i.push(h);else{const p=tu(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new Yt(i);return new Yw(o,a,s.fieldTransforms)}function DL(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[df(e,r,n)],l=[s];if(i.length%2!=0)throw new ae(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(df(e,i[p])),l.push(i[p+1]);const u=[],h=zt.empty();for(let p=a.length-1;p>=0;--p)if(!nb(u,a[p])){const g=a[p];let I=l[p];I=Ze(I);const O=o.Bu(g);if(I instanceof eu)u.push(g);else{const N=tu(I,O);N!=null&&(u.push(g),h.set(g,N))}}const d=new Yt(u);return new Yw(h,d,o.fieldTransforms)}function tu(t,e){if(tb(t=Ze(t)))return Kd("Unsupported field value:",e,t),eb(t,e);if(t instanceof Hd)return function(r,s){if(!Xw(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=tu(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return w2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:sl(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sl(s.serializer,i)}}if(r instanceof qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:ww(s.serializer,r._byteString)};if(r instanceof un){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return Ad(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${jd(r)}`)}(t,e)}function eb(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,s)=>{const i=tu(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof qd||t instanceof Oi||t instanceof un||t instanceof Hd||t instanceof zd)}function Kd(t,e,n){if(!tb(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=jd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function df(t,e,n){if((e=Ze(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return Gd(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const LL=new RegExp("[~\\*/\\[\\]]");function Gd(t,e,n){if(e.search(LL)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zl(...e.split("."))._internalPath}catch{throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ae(H.INVALID_ARGUMENT,a+t+l)}function nb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ML(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ML extends rb{data(){return super.data()}}function sb(t,e){return typeof e=="string"?Gd(t,e):e instanceof Zl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FL{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>nt(o.doubleValue));return new zd(i)}convertGeoPoint(e){return new qd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Oe(Sw(r));const s=new ea(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UL extends rb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ic extends UL{data(e={}){return super.data(e)}}class BL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oc(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ic(this._firestore,this._userDataWriter,r.key,r,new oc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ic(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ic(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oc(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:jL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class $L extends FL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function IU(t){t=ki(t,Xl);const e=ki(t.firestore,Jl),n=$d(e),r=new $L(e);return VL(t._query),AL(n,t._query).then(s=>new BL(e,r,t,s))}function AU(t,e,n){t=ki(t,un);const r=ki(t.firestore,Jl),s=ib(t.converter,e,n);return ob(r,[Zw(Jw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function ob(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>hL(await TL(r),s,i)),i.promise}($d(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Jw(e)}set(e,n,r){this._verifyNotCommitted();const s=Zu(e,this._firestore),i=ib(s.converter,n,r),o=Zw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ln.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Zu(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof Zl?DL(this._dataReader,"WriteBatch.update",i._key,n,r,s):NL(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ln.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Zu(e,this._firestore);return this._mutations=this._mutations.concat(new Rd(n._key,ln.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ae(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zu(t,e){if((t=Ze(t)).firestore!==e)throw new ae(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(t){return $d(t=ki(t,Jl)),new HL(t,e=>ob(t,e))}(function(e,n=!0){(function(s){Fi=s})(Vs),Ps(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Jl(new LN(r.getProvider("auth-internal")),new UN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),On(h_,"4.7.5",e),On(h_,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firebasestorage.googleapis.com",cb="storageBucket",qL=2*60*1e3,zL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends jn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function eh(t){return"storage/"+t}function Qd(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function WL(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function KL(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function QL(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YL(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function XL(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JL(){return new tt(et.CANCELED,"User canceled the upload/download.")}function ZL(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function eM(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tM(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cb+"' property when initializing the app?")}function nM(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rM(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sM(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pf(t){return new tt(et.INVALID_ARGUMENT,t)}function lb(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function iM(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oo(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function io(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw eM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},O=n===ab?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${O}/${s}/${N}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:g,indices:I,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<E.length;R++){const D=E[R],V=D.regex.exec(e);if(V){const b=V[D.indices.bucket];let y=V[D.indices.path];y||(y=""),r=new Xt(b,y),D.postModify(r);break}}if(r==null)throw ZL(e);return r}}class oM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){s=setTimeout(()=>{s=null,t(g,l())},N)}function p(){i&&clearTimeout(i)}function g(N,...x){if(u){p();return}if(N){p(),h.call(null,N,...x);return}if(l()||o){p(),h.call(null,N,...x);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,d(E)}let I=!1;function O(N){I||(I=!0,p(),!u&&(s!==null?(N||(a=2),clearTimeout(s),d(0)):N||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function cM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t){return t!==void 0}function uM(t){return typeof t=="object"&&!Array.isArray(t)}function Yd(t){return typeof t=="string"||t instanceof String}function Q_(t){return Xd()&&t instanceof Blob}function Xd(){return typeof Blob<"u"}function Y_(t,e,n,r){if(r<e)throw pf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ub(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function hM(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ac(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===As.NO_ERROR,l=i.getStatus();if(!a||hM(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===As.ABORT;r(!1,new ac(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ac(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Qd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lb():JL();o(l)}else{const l=XL();o(l)}};this.canceled_?n(!1,new ac(!1,null,!0)):this.backoffId_=aM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _M(t,e,n,r,s,i,o=!0){const a=ub(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return mM(u,e),dM(u,n),pM(u,i),gM(u,r),new fM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vM(...t){const e=yM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xd())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function wM(t){if(typeof atob>"u")throw sM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class th{constructor(e,n){this.data=e,this.contentType=n||null}}function bM(t,e){switch(t){case Sn.RAW:return new th(hb(e));case Sn.BASE64:case Sn.BASE64URL:return new th(fb(t,e));case Sn.DATA_URL:return new th(IM(e),AM(e))}throw Qd()}function hb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TM(t){let e;try{e=decodeURIComponent(t)}catch{throw Oo(Sn.DATA_URL,"Malformed data URL.")}return hb(e)}function fb(t,e){switch(t){case Sn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Oo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Sn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Oo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wM(e)}catch(s){throw s.message.includes("polyfill")?s:Oo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class db{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oo(Sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IM(t){const e=new db(t);return e.base64?fb(Sn.BASE64,e.rest):TM(e.rest)}function AM(t){return new db(t).contentType}function RM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,s="";Q_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q_(this.data_)){const r=this.data_,s=EM(r,e,n);return s===null?null:new Lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(Xd()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(vM.apply(null,n))}else{const n=e.map(o=>Yd(o)?bM(Sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){let e;try{e=JSON.parse(t)}catch{return null}return uM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t,e){return e}class Mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||PM}}let cc=null;function kM(t){return!Yd(t)||t.length<2?t:mb(t)}function gb(){if(cc)return cc;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(i,o){return kM(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Mt("size");return s.xform=r,t.push(s),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),cc=t,cc}function OM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function xM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return OM(r,t),r}function _b(t,e,n){const r=pb(e);return r===null?null:xM(t,r,n)}function NM(t,e,n,r){const s=pb(e);if(s===null||!Yd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),g=Jd(p,n,r),I=ub({alt:"media",token:u});return g+I})[0]}function DM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class yb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){if(!t)throw Qd()}function LM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),i}return n}function MM(t,e){function n(r,s){const i=_b(t,s,e);return vb(i!==null),NM(i,s,t.host,t._protocol)}return n}function Eb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=QL():s=GL():n.getStatus()===402?s=KL(t.bucket):n.getStatus()===403?s=YL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function VM(t){const e=Eb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=WL(t.path)),i.serverResponse=s.serverResponse,i}return n}function FM(t,e,n){const r=e.fullServerUrl(),s=Jd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new yb(s,i,MM(t,n),o);return a.errorHandler=VM(e),a}function UM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UM(null,e)),r}function jM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=BM(e,r,s),h=DM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Lr.getBlob(d,r,p);if(g===null)throw nM();const I={name:u.fullPath},O=Jd(i,t.host,t._protocol),N="POST",x=t.maxUploadRetryTime,C=new yb(O,N,LM(t,n),x);return C.urlParams=I,C.headers=o,C.body=g.uploadData(),C.errorHandler=Eb(e),C}class $M{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HM extends $M{initXhr(){this.xhr_.responseType="text"}}function wb(){return new HM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xs(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mb(this._location.path)}get storage(){return this._service}get parent(){const e=SM(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iM(e)}}function qM(t,e,n){t._throwIfRoot("uploadBytes");const r=jM(t.storage,t._location,gb(),new Lr(e,!0),n);return t.storage.makeRequestWithTokens(r,wb).then(s=>({metadata:s,ref:t}))}function zM(t){t._throwIfRoot("getDownloadURL");const e=FM(t.storage,t._location,gb());return t.storage.makeRequestWithTokens(e,wb).then(n=>{if(n===null)throw rM();return n})}function WM(t,e){const n=CM(t._location.path,e),r=new Xt(t._location.bucket,n);return new xs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t){return/^[A-Za-z]+:\/\//.test(t)}function GM(t,e){return new xs(t,e)}function bb(t,e){if(t instanceof Zd){const n=t;if(n._bucket==null)throw tM();const r=new xs(n,n._bucket);return e!=null?bb(r,e):r}else return e!==void 0?WM(t,e):t}function QM(t,e){if(e&&KM(e)){if(t instanceof Zd)return GM(t,e);throw pf("To use ref(service, url), the first argument must be a Storage instance.")}else return bb(t,e)}function X_(t,e){const n=e==null?void 0:e[cb];return n==null?null:Xt.makeFromBucketSpec(n,t)}function YM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:t0(s,t.app.options.projectId))}class Zd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ab,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qL,this._maxUploadRetryTime=zL,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new oM(lb());{const o=_M(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const J_="@firebase/storage",Z_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="storage";function SU(t,e,n){return t=Ze(t),qM(t,e,n)}function CU(t){return t=Ze(t),zM(t)}function PU(t,e){return t=Ze(t),QM(t,e)}function XM(t=ud(),e){t=Ze(t);const r=Nl(t,Tb).getImmediate({identifier:e}),s=JE("storage");return s&&JM(r,...s),r}function JM(t,e,n,r={}){YM(t,e,n,r)}function ZM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Zd(n,r,s,e,Vs)}function eV(){Ps(new Kr(Tb,ZM,"PUBLIC").setMultipleInstances(!0)),On(J_,Z_,""),On(J_,Z_,"esm2017")}eV();const tV=en(t=>{const e=Ms(),n={apiKey:e.public.FIREBASE_API_KEY,authDomain:e.public.FIREBASE_AUTH_DOMAIN,projectId:e.public.FIREBASE_PROJECT_ID,storageBucket:e.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:e.public.FIREBASE_MESSAGING_SENDER_ID,appId:e.public.FIREBASE_APP_ID,measurementId:e.public.FIREBASE_MEASUREMENT_ID},r=s0(n),s=EN(r),i=CL(r),o=XM(r);t.provide("auth",s),t.provide("firestore",i),t.provide("storage",o)}),ey=()=>{};let ep={},Ib={},Ab=null,Rb={mark:ey,measure:ey};try{typeof window<"u"&&(ep=window),typeof document<"u"&&(Ib=document),typeof MutationObserver<"u"&&(Ab=MutationObserver),typeof performance<"u"&&(Rb=performance)}catch{}const{userAgent:ty=""}=ep.navigator||{},Zr=ep,je=Ib,ny=Ab,lc=Rb;Zr.document;const mr=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",Sb=~ty.indexOf("MSIE")||~ty.indexOf("Trident/");var qe="classic",Cb="duotone",Jt="sharp",Zt="sharp-duotone",nV=[qe,Cb,Jt,Zt],rV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ry={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sV=["kit"],iV=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,oV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,aV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},cV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},lV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},uV={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},hV={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},fV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Pb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},dV=["solid","regular","light","thin","duotone","brands"],kb=[1,2,3,4,5,6,7,8,9,10],pV=kb.concat([11,12,13,14,15,16,17,18,19,20]),po={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mV=[...Object.keys(uV),...dV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",po.GROUP,po.SWAP_OPACITY,po.PRIMARY,po.SECONDARY].concat(kb.map(t=>"".concat(t,"x"))).concat(pV.map(t=>"w-".concat(t))),gV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_V={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},sy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const ur="___FONT_AWESOME___",mf=16,Ob="fa",xb="svg-inline--fa",Ns="data-fa-i2svg",gf="data-fa-pseudo-element",vV="data-fa-pseudo-element-pending",tp="data-prefix",np="data-icon",iy="fontawesome-i2svg",EV="async",wV=["HTML","HEAD","STYLE","SCRIPT"],Nb=(()=>{try{return!0}catch{return!1}})(),Db=[qe,Jt,Zt];function Ia(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[qe]}})}const Lb={...Pb};Lb[qe]={...Pb[qe],...ry.kit,...ry["kit-duotone"]};const Rs=Ia(Lb),_f={...fV};_f[qe]={..._f[qe],...sy.kit,...sy["kit-duotone"]};const sa=Ia(_f),yf={...hV};yf[qe]={...yf[qe],...yV.kit};const Ss=Ia(yf),vf={...lV};vf[qe]={...vf[qe],..._V.kit};const bV=Ia(vf),TV=iV,Mb="fa-layers-text",IV=oV,AV={...rV};Ia(AV);const RV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nh=po,xi=new Set;Object.keys(sa[qe]).map(xi.add.bind(xi));Object.keys(sa[Jt]).map(xi.add.bind(xi));Object.keys(sa[Zt]).map(xi.add.bind(xi));const SV=[...sV,...mV],xo=Zr.FontAwesomeConfig||{};function CV(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function PV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}je&&typeof je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=PV(CV(n));s!=null&&(xo[r]=s)});const Vb={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ob,replacementClass:xb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xo.familyPrefix&&(xo.cssPrefix=xo.familyPrefix);const Ni={...Vb,...xo};Ni.autoReplaceSvg||(Ni.observeMutations=!1);const ie={};Object.keys(Vb).forEach(t=>{Object.defineProperty(ie,t,{enumerable:!0,set:function(e){Ni[t]=e,No.forEach(n=>n(ie))},get:function(){return Ni[t]}})});Object.defineProperty(ie,"familyPrefix",{enumerable:!0,set:function(t){Ni.cssPrefix=t,No.forEach(e=>e(ie))},get:function(){return Ni.cssPrefix}});Zr.FontAwesomeConfig=ie;const No=[];function kV(t){return No.push(t),()=>{No.splice(No.indexOf(t),1)}}const Tr=mf,Cn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function OV(t){if(!t||!mr)return;const e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return je.head.insertBefore(e,r),t}const xV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){let t=12,e="";for(;t-- >0;)e+=xV[Math.random()*62|0];return e}function $i(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function rp(t){return t.classList?$i(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Fb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function NV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Fb(t[n]),'" '),"").trim()}function nu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function sp(t){return t.size!==Cn.size||t.x!==Cn.x||t.y!==Cn.y||t.rotate!==Cn.rotate||t.flipX||t.flipY}function DV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function LV(t){let{transform:e,width:n=mf,height:r=mf,startCentered:s=!1}=t,i="";return s&&Sb?i+="translate(".concat(e.x/Tr-n/2,"em, ").concat(e.y/Tr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Tr,"em), calc(-50% + ").concat(e.y/Tr,"em)) "):i+="translate(".concat(e.x/Tr,"em, ").concat(e.y/Tr,"em) "),i+="scale(".concat(e.size/Tr*(e.flipX?-1:1),", ").concat(e.size/Tr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var MV=`:root, :host {
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
}`;function Ub(){const t=Ob,e=xb,n=ie.cssPrefix,r=ie.replacementClass;let s=MV;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let oy=!1;function rh(){ie.autoAddCss&&!oy&&(OV(Ub()),oy=!0)}var VV={mixout(){return{dom:{css:Ub,insertCss:rh}}},hooks(){return{beforeDOMElementCreation(){rh()},beforeI2svg(){rh()}}}};const hr=Zr||{};hr[ur]||(hr[ur]={});hr[ur].styles||(hr[ur].styles={});hr[ur].hooks||(hr[ur].hooks={});hr[ur].shims||(hr[ur].shims=[]);var Pn=hr[ur];const Bb=[],jb=function(){je.removeEventListener("DOMContentLoaded",jb),ll=1,Bb.map(t=>t())};let ll=!1;mr&&(ll=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),ll||je.addEventListener("DOMContentLoaded",jb));function FV(t){mr&&(ll?setTimeout(t,0):Bb.push(t))}function Aa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Fb(t):"<".concat(e," ").concat(NV(n),">").concat(r.map(Aa).join(""),"</").concat(e,">")}function ay(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sh=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function UV(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Ef(t){const e=UV(t);return e.length===1?e[0].toString(16):null}function BV(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function cy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function wf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=cy(e);typeof Pn.hooks.addPack=="function"&&!r?Pn.hooks.addPack(t,cy(e)):Pn.styles[t]={...Pn.styles[t]||{},...s},t==="fas"&&wf("fa",e)}const{styles:ys,shims:jV}=Pn,$V={[qe]:Object.values(Ss[qe]),[Jt]:Object.values(Ss[Jt]),[Zt]:Object.values(Ss[Zt])};let ip=null,$b={},Hb={},qb={},zb={},Wb={};const HV={[qe]:Object.keys(Rs[qe]),[Jt]:Object.keys(Rs[Jt]),[Zt]:Object.keys(Rs[Zt])};function qV(t){return~SV.indexOf(t)}function zV(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!qV(s)?s:null}const Kb=()=>{const t=r=>sh(ys,(s,i,o)=>(s[o]=sh(i,r,{}),s),{});$b=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Hb=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Wb=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in ys||ie.autoFetchSvg,n=sh(jV,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});qb=n.names,zb=n.unicodes,ip=ru(ie.styleDefault,{family:ie.familyDefault})};kV(t=>{ip=ru(t.styleDefault,{family:ie.familyDefault})});Kb();function op(t,e){return($b[t]||{})[e]}function WV(t,e){return(Hb[t]||{})[e]}function Fr(t,e){return(Wb[t]||{})[e]}function Gb(t){return qb[t]||{prefix:null,iconName:null}}function KV(t){const e=zb[t],n=op("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function es(){return ip}const ap=()=>({prefix:null,iconName:null,rest:[]});function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=qe}=e,r=Rs[n][t],s=sa[n][t]||sa[n][r],i=t in Pn.styles?t:null;return s||i||null}const GV={[qe]:Object.keys(Ss[qe]),[Jt]:Object.keys(Ss[Jt]),[Zt]:Object.keys(Ss[Zt])};function su(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[qe]:"".concat(ie.cssPrefix,"-").concat(qe),[Jt]:"".concat(ie.cssPrefix,"-").concat(Jt),[Zt]:"".concat(ie.cssPrefix,"-").concat(Zt)};let s=null,i=qe;const o=nV.filter(l=>l!==Cb);o.forEach(l=>{(t.includes(r[l])||t.some(u=>GV[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const h=zV(ie.cssPrefix,u);if(ys[u]?(u=$V[i].includes(u)?bV[i][u]:u,s=u,l.prefix=u):HV[i].indexOf(u)>-1?(s=u,l.prefix=ru(u,{family:i})):h?l.iconName=h:u!==ie.replacementClass&&!o.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=s==="fa"?Gb(l.iconName):{},p=Fr(l.prefix,l.iconName);d.prefix&&(s=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!ys.far&&ys.fas&&!ie.autoFetchSvg&&(l.prefix="fas")}return l},ap());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Jt&&(ys.fass||ie.autoFetchSvg)&&(a.prefix="fass",a.iconName=Fr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===Zt&&(ys.fasds||ie.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Fr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=es()||"fas"),a}class QV{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},wf(i,s[i]);const o=Ss[qe][i];o&&wf(o,s[i]),Kb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let ly=[],si={};const gi={},YV=Object.keys(gi);function XV(t,e){let{mixoutsTo:n}=e;return ly=t,si={},Object.keys(gi).forEach(r=>{YV.indexOf(r)===-1&&delete gi[r]}),ly.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{si[o]||(si[o]=[]),si[o].push(i[o])})}r.provides&&r.provides(gi)}),n}function bf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(si[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Ds(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(si[t]||[]).forEach(i=>{i.apply(null,n)})}function ts(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gi[t]?gi[t].apply(null,e):void 0}function Tf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||es();if(e)return e=Fr(n,e)||e,ay(Qb.definitions,n,e)||ay(Pn.styles,n,e)}const Qb=new QV,JV=()=>{ie.autoReplaceSvg=!1,ie.observeMutations=!1,Ds("noAuto")},ZV={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(Ds("beforeI2svg",t),ts("pseudoElements2svg",t),ts("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ie.autoReplaceSvg===!1&&(ie.autoReplaceSvg=!0),ie.observeMutations=!0,FV(()=>{t4({autoReplaceSvgRoot:e}),Ds("watch",t)})}},e4={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ru(t[0]);return{prefix:n,iconName:Fr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ie.cssPrefix,"-"))>-1||t.match(TV))){const e=su(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||es(),iconName:Fr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=es();return{prefix:e,iconName:Fr(e,t)||t}}}},tn={noAuto:JV,config:ie,dom:ZV,parse:e4,library:Qb,findIconDefinition:Tf,toHtml:Aa},t4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=je}=t;(Object.keys(Pn.styles).length>0||ie.autoFetchSvg)&&mr&&ie.autoReplaceSvg&&tn.dom.i2svg({node:e})};function iu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Aa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!mr)return;const n=je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function n4(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(sp(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=nu({...i,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function r4(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ie.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function cp(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:g}=n.found?n:e,I=r==="fak",O=[ie.replacementClass,s?"".concat(ie.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:{...h.attributes,"data-prefix":r,"data-icon":s,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const x=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};d&&(N.attributes[Ns]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||ia())},children:[a]}),delete N.attributes.title);const C={...N,prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...h.styles}},{children:E,attributes:R}=n.found&&e.found?ts("generateAbstractMask",C)||{children:[],attributes:{}}:ts("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=E,C.attributes=R,o?r4(C):n4(C)}function uy(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[Ns]="");const u={...o.styles};sp(s)&&(u.transform=LV({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=nu(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function s4(t){const{content:e,title:n,extra:r}=t,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=nu(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ih}=Pn;function If(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ie.cssPrefix,"-").concat(nh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(nh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(nh.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const i4={found:!1,width:512,height:512};function o4(t,e){!Nb&&!ie.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Af(t,e){let n=e;return e==="fa"&&ie.styleDefault!==null&&(e=es()),new Promise((r,s)=>{if(n==="fa"){const i=Gb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ih[e]&&ih[e][t]){const i=ih[e][t];return r(If(i))}o4(t,e),r({...i4,icon:ie.showMissingIcons&&t?ts("missingIconAbstract")||{}:{}})})}const hy=()=>{},Rf=ie.measurePerformance&&lc&&lc.mark&&lc.measure?lc:{mark:hy,measure:hy},mo='FA "6.6.0"',a4=t=>(Rf.mark("".concat(mo," ").concat(t," begins")),()=>Yb(t)),Yb=t=>{Rf.mark("".concat(mo," ").concat(t," ends")),Rf.measure("".concat(mo," ").concat(t),"".concat(mo," ").concat(t," begins"),"".concat(mo," ").concat(t," ends"))};var lp={begin:a4,end:Yb};const Ac=()=>{};function fy(t){return typeof(t.getAttribute?t.getAttribute(Ns):null)=="string"}function c4(t){const e=t.getAttribute?t.getAttribute(tp):null,n=t.getAttribute?t.getAttribute(np):null;return e&&n}function l4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ie.replacementClass)}function u4(){return ie.autoReplaceSvg===!0?Rc.replace:Rc[ie.autoReplaceSvg]||Rc.replace}function h4(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function f4(t){return je.createElement(t)}function Xb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?h4:f4}=e;if(typeof t=="string")return je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Xb(i,{ceFn:n}))}),r}function d4(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Rc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Xb(n),e)}),e.getAttribute(Ns)===null&&ie.keepOriginalSource){let n=je.createComment(d4(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~rp(e).indexOf(ie.replacementClass))return Rc.replace(t);const r=new RegExp("".concat(ie.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ie.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Aa(i)).join(`
`);e.setAttribute(Ns,""),e.innerHTML=s}};function dy(t){t()}function Jb(t,e){const n=typeof e=="function"?e:Ac;if(t.length===0)n();else{let r=dy;ie.mutateApproach===EV&&(r=Zr.requestAnimationFrame||dy),r(()=>{const s=u4(),i=lp.begin("mutate");t.map(s),i(),n()})}}let up=!1;function Zb(){up=!0}function Sf(){up=!1}let ul=null;function py(t){if(!ny||!ie.observeMutations)return;const{treeCallback:e=Ac,nodeCallback:n=Ac,pseudoElementsCallback:r=Ac,observeMutationsRoot:s=je}=t;ul=new ny(i=>{if(up)return;const o=es();$i(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fy(a.addedNodes[0])&&(ie.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ie.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&fy(a.target)&&~RV.indexOf(a.attributeName))if(a.attributeName==="class"&&c4(a.target)){const{prefix:l,iconName:u}=su(rp(a.target));a.target.setAttribute(tp,l||o),u&&a.target.setAttribute(np,u)}else l4(a.target)&&n(a.target)})}),mr&&ul.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function p4(){ul&&ul.disconnect()}function m4(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function g4(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=su(rp(t));return s.prefix||(s.prefix=es()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=WV(s.prefix,t.innerText)||op(s.prefix,Ef(t.innerText))),!s.iconName&&ie.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function _4(t){const e=$i(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ie.autoA11y&&(n?e["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(r||ia()):(e["aria-hidden"]="true",e.focusable="false")),e}function y4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Cn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function my(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=g4(t),i=_4(t),o=bf("parseNodeAttributes",{},t);let a=e.styleParser?m4(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Cn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:v4}=Pn;function eT(t){const e=ie.autoReplaceSvg==="nest"?my(t,{styleParser:!1}):my(t);return~e.extra.classes.indexOf(Mb)?ts("generateLayersText",t,e):ts("generateSvgReplacementMutation",t,e)}let Fn=new Set;Db.map(t=>{Fn.add("fa-".concat(t))});Object.keys(Rs[qe]).map(Fn.add.bind(Fn));Object.keys(Rs[Jt]).map(Fn.add.bind(Fn));Object.keys(Rs[Zt]).map(Fn.add.bind(Fn));Fn=[...Fn];function gy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();const n=je.documentElement.classList,r=h=>n.add("".concat(iy,"-").concat(h)),s=h=>n.remove("".concat(iy,"-").concat(h)),i=ie.autoFetchSvg?Fn:Db.map(h=>"fa-".concat(h)).concat(Object.keys(v4));i.includes("fa")||i.push("fa");const o=[".".concat(Mb,":not([").concat(Ns,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ns,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=$i(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=lp.begin("onTree"),u=a.reduce((h,d)=>{try{const p=eT(d);p&&h.push(p)}catch(p){Nb||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{Jb(p,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(p=>{l(),d(p)})})}function E4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eT(t).then(n=>{n&&Jb([n],e)})}function w4(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Tf(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:Tf(s||{})),t(r,{...n,mask:s})}}const b4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Cn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:g}=t;return iu({type:"icon",...t},()=>(Ds("beforeDOMElementCreation",{iconDefinition:t,params:e}),ie.autoA11y&&(o?u["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(a||ia()):(u["aria-hidden"]="true",u.focusable="false")),cp({icons:{main:If(g),mask:s?If(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...Cn,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var T4={mixout(){return{icon:w4(b4)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=gy,t.nodeCallback=E4,t}}},provides(t){t.i2svg=function(e){const{node:n=je,callback:r=()=>{}}=e;return gy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((p,g)=>{Promise.all([Af(r,o),u.iconName?Af(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[O,N]=I;p([e,cp({icons:{main:O,mask:N},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=nu(o);a.length>0&&(r.style=a);let l;return sp(i)&&(l=ts("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},I4={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return iu({type:"layer"},()=>{Ds("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ie.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},A4={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return iu({type:"counter",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),s4({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ie.cssPrefix,"-layers-counter"),...r]}})))}}}},R4={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Cn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return iu({type:"text",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),uy({content:t,transform:{...Cn,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(ie.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(Sb){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ie.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,uy({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const S4=new RegExp('"',"ug"),_y=[1105920,1112319],yy={FontAwesome:{normal:"fas",400:"fas"},...cV,...aV,...gV},Cf=Object.keys(yy).reduce((t,e)=>(t[e.toLowerCase()]=yy[e],t),{}),C4=Object.keys(Cf).reduce((t,e)=>{const n=Cf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function P4(t){const e=t.replace(S4,""),n=BV(e,0),r=n>=_y[0]&&n<=_y[1],s=e.length===2?e[0]===e[1]:!1;return{value:Ef(s?e[0]:e),isSecondary:r||s}}function k4(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Cf[n]||{})[s]||C4[n]}function vy(t,e){const n="".concat(vV).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=$i(t.children).filter(p=>p.getAttribute(gf)===e)[0],a=Zr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(IV),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let g=k4(l,h);const{value:I,isSecondary:O}=P4(p),N=u[0].startsWith("FontAwesome");let x=op(g,I),C=x;if(N){const E=KV(I);E.iconName&&E.prefix&&(x=E.iconName,g=E.prefix)}if(x&&!O&&(!o||o.getAttribute(tp)!==g||o.getAttribute(np)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);const E=y4(),{extra:R}=E;R.attributes[gf]=e,Af(x,g).then(D=>{const V=cp({...E,icons:{main:D,mask:ap()},prefix:g,iconName:C,extra:R,watchable:!0}),b=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(y=>Aa(y)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function O4(t){return Promise.all([vy(t,"::before"),vy(t,"::after")])}function x4(t){return t.parentNode!==document.head&&!~wV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ey(t){if(mr)return new Promise((e,n)=>{const r=$i(t.querySelectorAll("*")).filter(x4).map(O4),s=lp.begin("searchPseudoElements");Zb(),Promise.all(r).then(()=>{s(),Sf(),e()}).catch(()=>{s(),Sf(),n()})})}var N4={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ey,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=je}=e;ie.searchPseudoElements&&Ey(n)}}};let wy=!1;var D4={mixout(){return{dom:{unwatch(){Zb(),wy=!0}}}},hooks(){return{bootstrap(){py(bf("mutationObserverCallbacks",{}))},noAuto(){p4()},watch(t){const{observeMutationsRoot:e}=t;wy?Sf():py(bf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const by=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var L4={mixout(){return{parse:{transform:t=>by(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=by(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const oh={x:0,y:0,width:"100%",height:"100%"};function Ty(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function M4(t){return t.tag==="g"?t.children:[t]}var V4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?su(n.split(" ").map(s=>s.trim())):ap();return r.prefix||(r.prefix=es()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,p=DV({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:{...oh,fill:"white"}},I=u.children?{children:u.children.map(Ty)}:{},O={tag:"g",attributes:{...p.inner},children:[Ty({tag:u.tag,attributes:{...u.attributes,...p.path},...I})]},N={tag:"g",attributes:{...p.outer},children:[O]},x="mask-".concat(o||ia()),C="clip-".concat(o||ia()),E={tag:"mask",attributes:{...oh,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:M4(d)},E]};return n.push(R,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")"),...oh}}),{children:n,attributes:r}}}},F4={provides(t){let e=!1;Zr.matchMedia&&(e=Zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},U4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},B4=[VV,T4,I4,A4,R4,N4,D4,L4,V4,F4,U4];XV(B4,{mixoutsTo:tn});tn.noAuto;const j4=tn.config,$4=tn.library;tn.dom;const Pf=tn.parse;tn.findIconDefinition;tn.toHtml;const H4=tn.icon;tn.layer;tn.text;tn.counter;function Iy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Iy(Object(n),!0).forEach(function(r){$t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Iy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function q4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function z4(t){var e=q4(t,"string");return typeof e=="symbol"?e:e+""}function hl(t){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hl(t)}function $t(t,e,n){return e=z4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function K4(t,e){if(t==null)return{};var n=W4(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var G4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tT={exports:{}};(function(t){(function(e){var n=function(x,C,E){if(!u(C)||d(C)||p(C)||g(C)||l(C))return C;var R,D=0,V=0;if(h(C))for(R=[],V=C.length;D<V;D++)R.push(n(x,C[D],E));else{R={};for(var b in C)Object.prototype.hasOwnProperty.call(C,b)&&(R[x(b,E)]=n(x,C[b],E))}return R},r=function(x,C){C=C||{};var E=C.separator||"_",R=C.split||/(?=[A-Z])/;return x.split(R).join(E)},s=function(x){return I(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var C=s(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return a.call(x)=="[object Array]"},d=function(x){return a.call(x)=="[object Date]"},p=function(x){return a.call(x)=="[object RegExp]"},g=function(x){return a.call(x)=="[object Boolean]"},I=function(x){return x=x-0,x===x},O=function(x,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?x:function(R,D){return E(R,x,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,C){return n(O(s,C),x)},decamelizeKeys:function(x,C){return n(O(o,C),x,C)},pascalizeKeys:function(x,C){return n(O(i,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(G4)})(tT);var Q4=tT.exports,Y4=["class","style"];function X4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=Q4.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function J4(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function nT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return nT(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=J4(h);break;case"style":l.style=X4(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=K4(n,Y4);return vt(t.tag,Xn(Xn(Xn({},e),{},{class:s.class,style:Xn(Xn({},s.style),o)},s.attrs),a),r)}var rT=!1;try{rT=!0}catch{}function Z4(){if(!rT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ah(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$t({},t,e):{}}function eF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},$t($t($t($t($t($t($t($t($t($t(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),$t($t(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ay(t){if(t&&hl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pf.icon)return Pf.icon(t);if(t===null)return null;if(hl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var tF=Bn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return Ay(e.icon)}),i=Fe(function(){return ah("classes",eF(e))}),o=Fe(function(){return ah("transform",typeof e.transform=="string"?Pf.transform(e.transform):e.transform)}),a=Fe(function(){return ah("mask",Ay(e.mask))}),l=Fe(function(){return H4(s.value,Xn(Xn(Xn(Xn({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});yn(l,function(h){if(!h)return Z4("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?nT(l.value.abstract[0],{},r):null});return function(){return u.value}}});const nF={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},rF={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},sF=rF,iF={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},oF={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},aF={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};j4.autoAddCss=!1;$4.add(nF,oF,sF,aF,iF);const cF=en(t=>{t.vueApp.component("font-awesome-icon",tF)}),lF=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let sT;const ou=t=>sT=t,iT=Symbol();function kf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Do;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Do||(Do={}));function uF(){const t=Ff(!0),e=t.run(()=>Kt({}));let n=[],r=[];const s=zf({install(i){ou(s),s._a=i,i.provide(iT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!lF?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const oT=()=>{};function Ry(t,e,n,r=oT){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&la()&&Cc(s),s}function Qs(t,...e){t.slice().forEach(n=>{n(...e)})}const hF=t=>t(),Sy=Symbol(),ch=Symbol();function Of(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];kf(s)&&kf(r)&&t.hasOwnProperty(n)&&!Je(r)&&!rr(r)?t[n]=Of(s,r):t[n]=r}return t}const fF=Symbol();function dF(t){return!kf(t)||!t.hasOwnProperty(fF)}const{assign:Ir}=Object;function pF(t){return!!(Je(t)&&t.effect)}function mF(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=mI(n.state.value[t]);return Ir(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=zf(Fe(()=>{ou(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return l=aT(t,u,e,n,r,!0),l}function aT(t,e,n={},r,s,i){let o;const a=Ir({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],g;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),Kt({});let O;function N(y){let _;u=h=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Do.patchFunction,storeId:t,events:g}):(Of(r.state.value[t],y),_={type:Do.patchObject,payload:y,storeId:t,events:g});const w=O=Symbol();Un().then(()=>{O===w&&(u=!0)}),h=!0,Qs(d,_,r.state.value[t])}const x=i?function(){const{state:_}=n,w=_?_():{};this.$patch(P=>{Ir(P,w)})}:oT;function C(){o.stop(),d=[],p=[],r._s.delete(t)}const E=(y,_="")=>{if(Sy in y)return y[ch]=_,y;const w=function(){ou(r);const P=Array.from(arguments),S=[],T=[];function me(re){S.push(re)}function ye(re){T.push(re)}Qs(p,{args:P,name:w[ch],store:D,after:me,onError:ye});let J;try{J=y.apply(this&&this.$id===t?this:D,P)}catch(re){throw Qs(T,re),re}return J instanceof Promise?J.then(re=>(Qs(S,re),re)).catch(re=>(Qs(T,re),Promise.reject(re))):(Qs(S,J),J)};return w[Sy]=!0,w[ch]=_,w},R={_p:r,$id:t,$onAction:Ry.bind(null,p),$patch:N,$reset:x,$subscribe(y,_={}){const w=Ry(d,y,_.detached,()=>P()),P=o.run(()=>yn(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&y({storeId:t,type:Do.direct,events:g},S)},Ir({},l,_)));return w},$dispose:C},D=fr(R);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||hF)(()=>r._e.run(()=>(o=Ff()).run(()=>e({action:E}))));for(const y in b){const _=b[y];if(Je(_)&&!pF(_)||rr(_))i||(I&&dF(_)&&(Je(_)?_.value=I[y]:Of(_,I[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const w=E(_,y);b[y]=w,a.actions[y]=_}}return Ir(D,b),Ir(Ie(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Ir(_,y)})}}),r._p.forEach(y=>{Ir(D,o.run(()=>y({store:D,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(D.$state,I),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function gF(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=Gf();return a=a||(u?xt(iT,null):null),a&&ou(a),a=sT,a._s.has(r)||(i?aT(r,e,s,a):mF(r,s,a)),a._s.get(r)}return o.$id=r,o}function _F(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function yF(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}const vF=en(t=>{const e=uF();t.vueApp.use(e)});var Cy=/^(GTM|G)-[0-9A-Z]+$/;function lh(t){if(typeof t!="string"||!Cy.test(t)){let e=String(t).toUpperCase().replace(/.*-|[^0-9A-Z]/g,""),n=e.length===0?"":` Did you mean 'GTM-${e}' or 'G-${e}'?`;throw new Error(`'${t}' is not a valid GTM-ID (${Cy}).${n}`)}}function go(t,e="dataLayer"){return t[e]||(t[e]=[]),t[e]}function _i(t,e){let n=document,r=n.createElement("script"),s=u=>{var h;(h=e.onReady)==null||h.call(e,{id:t,script:r}),r.removeEventListener("load",s)};r.addEventListener("load",s);let i=e.dataLayerName??"dataLayer";if(go(window,i).push({event:"gtm.js","gtm.start":new Date().getTime()}),!t)return r;r.async=!e.defer,r.defer=!!(e.defer||e.compatibility),e.nonce&&r.setAttribute("nonce",e.nonce),e.scriptType&&(r.type=e.scriptType);let o=new URLSearchParams({id:t,...e.dataLayerName?{l:e.dataLayerName}:{},...e.queryParams??{}}),a=e.source??"https://www.googletagmanager.com/gtm.js";r.src=`${a}?${o}`;let l=e.parentElement??n.body;if(typeof(l==null?void 0:l.appendChild)!="function")throw new Error("parentElement must be a DOM element");return l.appendChild(r),r}function EF(t="https://www.googletagmanager.com/gtm.js"){return Array.from(document.getElementsByTagName("script")).some(e=>e.src.includes(t))}var wF=class{constructor(t){to(this,"id");to(this,"options");to(this,"scriptElements",[]);to(this,"isInBrowserContext",()=>typeof window<"u");if(Array.isArray(t.id))for(let e of t.id)lh(typeof e=="string"?e:e.id);else lh(t.id);this.id=t.id,this.options={enabled:!0,debug:!1,loadScript:!0,defer:!1,compatibility:!1,dataLayerName:"dataLayer",...t},delete this.options.id}enabled(){return this.options.enabled??!0}enable(t=!0,e){if(this.options.enabled=t,this.isInBrowserContext()&&t&&!EF(e)&&this.options.loadScript)if(Array.isArray(this.id))this.id.forEach(n=>{let r;typeof n=="string"?r=_i(n,{...this.options}):r=_i(n.id,{...this.options,queryParams:n.queryParams}),this.scriptElements.push(r)});else{let n=_i(this.id,{...this.options});this.scriptElements.push(n)}}debugEnabled(){return this.options.debug??!1}debug(t){this.options.debug=t}dataLayer(){return this.isInBrowserContext()&&this.options.enabled?go(window,this.options.dataLayerName):!1}trackView(t,e,n={}){let r=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${r?"":"(disabled)"}]: Dispatching TrackView`,{screenName:t,path:e}),r&&go(window,this.options.dataLayerName).push({...n,event:this.options.trackViewEventProperty??"content-view","content-name":e,"content-view-name":t})}trackEvent({event:t,category:e=null,action:n=null,label:r=null,value:s=null,noninteraction:i=!1,...o}={}){let a=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${a?"":"(disabled)"}]: Dispatching event`,{event:t,category:e,action:n,label:r,value:s,...o}),a&&go(window,this.options.dataLayerName).push({event:t??"interaction",target:e,action:n,"target-properties":r,value:s,"interaction-type":i,...o})}push(t){let e=this.isInBrowserContext()&&(this.options.enabled??!1);this.options.debug&&console.log(`[GTM-Support${e?"":"(disabled)"}]: Dispatching event`,t),e&&go(window,this.options.dataLayerName).push(t)}},mt;function bF(t,e={id:""}){e={trackOnNextTick:!1,...e},mt=new wF(e),t.config.globalProperties.$gtm=mt,mt.isInBrowserContext()&&(e.vueRouter&&TF(t,e.vueRouter,e.ignoredViews,e.trackOnNextTick,e.vueRouterAdditionalEventData),mt.options.enabled&&mt.options.loadScript&&(Array.isArray(e.id)?e.id.forEach(n=>{if(typeof n=="string")_i(n,e);else{let r={...e};n.queryParams!=null&&(r.queryParams={...r.queryParams,...n.queryParams}),_i(n.id,r)}}):_i(e.id,e))),t.provide("gtm",e)}function TF(t,e,n=[],r,s=()=>({})){function i(o,a){return o instanceof Error?!!(o.type&a):!1}e.afterEach(async(o,a,l)=>{var p,g,I;if(typeof o.name!="string"||Array.isArray(n)&&n.includes(o.name)||typeof n=="function"&&n(o,a))return;let u=o.meta&&typeof o.meta.gtm=="string"&&o.meta.gtm?o.meta.gtm:o.name;i(l,4)?mt!=null&&mt.debugEnabled()&&console.log(`[VueGtm]: '${u}' not tracked due to navigation aborted`):i(l,8)&&(mt!=null&&mt.debugEnabled())&&console.log(`[VueGtm]: '${u}' not tracked due to navigation cancelled`);let h={...await s(o,a),...(p=o.meta)==null?void 0:p.gtmAdditionalEventData},d=((I=(g=e.options)==null?void 0:g.history)==null?void 0:I.base)??"";d.endsWith("/")||(d+="/"),d+=o.fullPath.startsWith("/")?o.fullPath.substring(1):o.fullPath,r?Un(()=>{mt==null||mt.trackView(u,d,h)}):mt==null||mt.trackView(u,d,h)})}function IF(t){return{install:e=>bF(e,t)}}const AF=en(t=>{const e=Ms().public,n=TN("trackingCookies");n.value&&console.log("trackingCookies",n.value),t.vueApp.use(IF({id:e.GOOGLE_TAG_MANAGER_KEY,defer:!1,compatibility:!1,enabled:e.GOOGLE_TAG_MANAGER_ENABLED||n.value||!1,debug:e.GOOGLE_TAG_MANAGER_DEBUG||!1,loadScript:!0,vueRouter:Et(),trackOnNextTick:!1}))}),RF=[qS,JS,wP,TP,IP,AP,SP,CP,PP,tV,cF,vF,AF],SF=Bn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return bs(pa,Jn(r)),()=>vt(t.vnode,{ref:t.vnodeRef})}}),CF=Bn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=De(),i=Kt(),o=xt(pa,null);let a;r({pageRef:i});const l=xt(wE,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Et().beforeEach(d)}return t.pageKey&&yn(()=>t.pageKey,(d,p)=>{d!==p&&s.callHook("page:loading:start")}),()=>vt(WE,{name:t.name,route:t.route,...e},{default:d=>{const p=kF(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const I=$h(d,t.pageKey);!s.isHydrating&&!OF(o,d.route,d.Component)&&a===I&&s.callHook("page:loading:end"),a=I;const O=!!(t.transition??d.route.meta.pageTransition??Ph),N=O&&PF([t.transition,d.route.meta.pageTransition,Ph,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??mR;return u=KE(eE,O&&N,iP(x,vt(Xf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Un(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const C=vt(SF,{key:I||void 0,vnode:n.default?vt(kt,void 0,n.default(d)):d.Component,route:d.route,renderKey:I||void 0,trackRootNodes:O,vnodeRef:i});return x&&(C.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),C}}))).default(),u}})}});function PF(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?ad(n.onAfterLeave):void 0}));return vE(...e)}function kF(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&$h({route:e,Component:n})!==$h({route:t,Component:n})}function OF(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const xF=Bn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Mr[t.name]().then(r=>r.default||r);return()=>vt(n,t.layoutProps,e.slots)}}),NF=Bn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=De(),r=xt(pa),s=r===nd()?eP():r,i=Fe(()=>{let l=Qe(t.name)??s.meta.layout??"default";return l&&!(l in Mr)&&t.fallback&&(l=Qe(t.fallback)),l}),o=Kt();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Et().beforeEach(l)}return()=>{const l=i.value&&i.value in Mr,u=s.meta.layoutTransition??pR;return KE(eE,l&&u,{default:()=>vt(Xf,{suspensible:!0,onResolve:()=>{Un(a)}},{default:()=>vt(DF,{layoutProps:Gv(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),DF=Bn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&bs(wE,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Mr)?(s=(r=e.slots).default)==null?void 0:s.call(r):vt(xF,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),au=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LF={};function MF(t,e){const n=CF,r=NF;return Bt(),Yn(r,null,{default:An(()=>[Se(n)]),_:1})}const VF=au(LF,[["render",MF]]),FF=td("/film/body_parts/vlcsnap-2010-10-12-10h36m24s49.png"),Py=gF("auth",{state:()=>({user:null,authError:null,loading:!0}),actions:{async signIn(t,e){const{$auth:n}=De(),r=Et();try{const s=await ix(n,t,e);this.user=s.user,this.authError=null,r.push({name:"Admin"})}catch(s){this.authError=s.message}},async signOut(){const{$auth:t}=De();try{await lx(t),this.user=null,this.authError=null}catch(e){this.authError=e.message}},setUser(t){this.user=t},setAuthError(t){this.authError=t},initializeAuth(){const{$auth:t}=De();cx(t,e=>{this.user=e||null})},setLoading(t){this.loading=t}},getters:{isAuthenticated:t=>!!t.user,getUser:t=>t.user,getAuthError:t=>t.authError,getLoading:t=>t.loading},persist:{enabled:!0}}),UF={class:"navbar navbar-expand-md navbar-light bg-light"},BF={class:"navbar-nav"},jF={key:0,class:"collapse navbar-collapse",id:"navbarNavDropdown"},$F={class:"navbar-nav ml-auto"};function HF(t,e,n,r,s,i){const o=PN;return Bt(),$o("nav",UF,[Se(o,{class:"navbar-brand",to:"/"},{default:An(()=>e[2]||(e[2]=[an("Who's Jimmy")])),_:1}),$e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=a=>s.visible=!s.visible)},e[3]||(e[3]=[$e("span",{class:"navbar-toggler-icon"},null,-1)])),$e("div",{class:aa(["navbar-collapse",s.visible?"":"collapse"]),id:"navbarNavDropdown"},[$e("ul",BF,[Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Bio"}},{default:An(()=>e[4]||(e[4]=[an("Bio")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"Portfolio"}},{default:An(()=>e[5]||(e[5]=[an("Portfolio ")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"button",activeClass:"active",to:{name:"ForSale"}},{default:An(()=>e[6]||(e[6]=[an("For Sale")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Stuff"}},{default:An(()=>e[7]||(e[7]=[an("Cool Stuff")])),_:1}),Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Contact"}},{default:An(()=>e[8]||(e[8]=[an("Contact Us")])),_:1})])],2),s.isAuth?(Bt(),$o("div",jF,[$e("ul",$F,[Se(o,{class:"btn btn-light nav-item",tag:"li",activeClass:"active",to:{name:"Admin"}},{default:An(()=>[an(Vf(t.user?t.user.email:""),1)]),_:1}),$e("button",{class:"btn btn-light nav-item",tag:"li",onClick:e[1]||(e[1]=(...a)=>t.signOut&&t.signOut(...a))},"Logout")])])):TA("",!0)])}const qF={data(){return{visible:!1,isAuth:!1}},computed:{..._F(Py,{user:"getUser",isAuthenticated:"isAuthenticated"})},watch:{isAuthenticated(t){this.isAuth=t}},mounted(){this.isAuth=this.isAuthenticated},methods:{...yF(Py,{signOut:"signOut"})}},zF=au(qF,[["render",HF]]),WF={class:"page-footer font-small bg-light navbar-fixed-bottom"},KF={class:"container"},GF={class:"py-3 pt-3"},QF={class:"text-danger",href:"https://www.youtube.com/user/jimmyclaws"},YF={href:"https://www.facebook.com/whosjimmy"},XF={href:"https://twitter.com/jimmyclaws"},JF={class:"text-secondary",href:"http://www.imdb.com/name/nm2755712/?ref_=fn_al_nm_1"};function ZF(t,e){const n=Bo("font-awesome-icon");return Bt(),$o("footer",WF,[$e("div",KF,[$e("div",GF,[$e("a",QF,[Se(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","youtube"]})]),$e("a",YF,[Se(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","facebook-square"]})]),$e("a",XF,[Se(n,{class:"white-text mr-2 ml-2 fa-2x",icon:["fab","twitter"]})]),$e("a",JF,[Se(n,{class:"mr-2 ml-2 fa-2x",icon:["fab","imdb"]})])])]),e[0]||(e[0]=$e("div",{class:"footer-copyright text-center font-small"},[$e("div",null,[an("© 2024 Copyright: "),$e("a",{href:"http://whosjimmy.com/"},"WhosJimmy.com")]),$e("div",null,"Disclaimer: All images are copyright to their respective owners."),$e("div",null,[an("A "),$e("a",{href:"http://JohnstonSoftwareDevelopment.ca",target:"_blank"},"JSD"),an(" creation.")])],-1))])}const eU={},tU=au(eU,[["render",ZF],["__scopeId","data-v-063d9b19"]]),nU={class:"text-center my-0 page"},rU={class:"body"},sU={components:{appHeader:zF,appFooter:tU},head(){return{title:"Error"}}},iU=Bn({...sU,__name:"error",props:{error:Object},setup(t){var s;const e=t,{$config:n}=De();ug({title:((s=e==null?void 0:e.error)==null?void 0:s.statusCode.toString())||"Error"});const r=()=>{ug({title:n.public.SITE_TITLE}),TE({redirect:"/"})};return(i,o)=>{var u;const a=Bo("app-header"),l=Bo("app-footer");return Bt(),$o("div",nU,[Se(a),$e("div",rU,[o[0]||(o[0]=$e("img",{src:FF,alt:"Error Image"},null,-1)),$e("h2",null,"Error: "+Vf((u=t.error)==null?void 0:u.statusCode),1),$e("button",{class:"btn btn-primary",onClick:r}," Take me home ")]),Se(l)])}}}),oU=au(iU,[["__scopeId","data-v-a467a495"]]),aU={key:0},ky={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Et().beforeEach(l)}const s=!1;bs(pa,nd()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Sl(),o=!1;wv((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),HR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>ni(l)),!1});const a=!1;return(l,u)=>(Bt(),Yn(Xf,{onResolve:Qe(r)},{default:An(()=>[Qe(o)?(Bt(),$o("div",aU)):Qe(i)?(Bt(),Yn(Qe(oU),{key:1,error:Qe(i)},null,8,["error"])):Qe(a)?(Bt(),Yn(Qe(e),{key:2,context:Qe(a)},null,8,["context"])):Qe(s)?(Bt(),Yn(jI(Qe(s)),{key:3})):(Bt(),Yn(Qe(VF),{key:4}))]),_:1},8,["onResolve"]))}};let Oy;{let t;Oy=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?c1(ky):a1(ky),s=wR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Cl(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await IR(s,RF)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(yR),await s.hooks.callHook("app:mounted",r),await Un()}catch(l){i(l)}return r},t=Oy().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{tU as $,Je as A,fr as B,fa as C,Fe as D,rr as E,kt as F,Wr as G,xt as H,bs as I,Un as J,td as K,Bo as L,dU as M,ml as N,Yn as O,fU as P,aa as Q,lU as R,bA as S,eE as T,pa as U,yU as V,$R as W,TN as X,mU as Y,zF as Z,au as _,yF as a,CF as a0,gF as a1,De as a2,bU as a3,IU as a4,AU as a5,TU as a6,RU as a7,$e as b,$o as c,Se as d,An as e,PN as f,an as g,Qe as h,_U as i,gU as j,TA as k,XM as l,_F as m,PU as n,Bt as o,SU as p,CU as q,hU as r,Tl as s,Vf as t,Py as u,pU as v,uU as w,Kt as x,MI as y,yn as z};
