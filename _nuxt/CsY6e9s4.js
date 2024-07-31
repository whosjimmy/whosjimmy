const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CmVxA9ij.js","./Bio.Drk-jTbT.css","./BygbRExO.js","./Contact.BEX4NZs-.css","./ZmaOsD9I.js","./DuNGjrsu.js","./Gallery.C5KrzdV4.css","./Clocks.CkpqjaRE.css","./Bptse7pL.js","./iQbA7ggR.js","./index.CRKUJhZW.css","./Cdku-DSW.js","./Cfmqs9Cq.js","./CSZYwAtV.js","./BkoaBdT8.js","./Celebrities.CcuunyNG.css","./BJ6CL8pQ.js","./Clocks.vUUo-Xqj.css","./B9kyeQ32.js","./Film.BL4jOpYo.css","./CFNBAPs5.js","./index.DvHgfU4N.css","./DyMn3Bji.js","./BJVeUPtg.js","./DJlSHHCO.js","./xgaP5riS.js","./default.DcK3W3sQ.css","./C-SHkBdE.js","./DOT_vhu2.js","./error-404.CjGVuf6H.css","./DXREcwd8.js","./error-500.DFBAsgKS.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ea(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const me={},Xn=[],Ye=()=>{},Jp=()=>!1,ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ia=e=>e.startsWith("onUpdate:"),Ae=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xp=Object.prototype.hasOwnProperty,se=(e,t)=>Xp.call(e,t),J=Array.isArray,Qn=e=>is(e)==="[object Map]",ff=e=>is(e)==="[object Set]",Qp=e=>is(e)==="[object RegExp]",Q=e=>typeof e=="function",_e=e=>typeof e=="string",hn=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",df=e=>(fe(e)||Q(e))&&Q(e.then)&&Q(e.catch),hf=Object.prototype.toString,is=e=>hf.call(e),Zp=e=>is(e).slice(8,-1),pf=e=>is(e)==="[object Object]",Ta=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},em=/-(\w)/g,it=mi(e=>e.replace(em,(t,n)=>n?n.toUpperCase():"")),tm=/\B([A-Z])/g,Fn=mi(e=>e.replace(tm,"-$1").toLowerCase()),gi=mi(e=>e.charAt(0).toUpperCase()+e.slice(1)),ji=mi(e=>e?`on${gi(e)}`:""),cn=(e,t)=>!Object.is(e,t),er=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},mf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_o=e=>{const t=parseFloat(e);return isNaN(t)?e:t},gf=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let xc;const yf=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=_e(r)?im(r):yi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(_e(e)||fe(e))return e}const nm=/;(?![^(]*\))/g,rm=/:([^]+)/,sm=/\/\*[^]*?\*\//g;function im(e){const t={};return e.replace(sm,"").split(nm).forEach(n=>{if(n){const r=n.split(rm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _i(e){let t="";if(_e(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const r=_i(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function om(e){if(!e)return null;let{class:t,style:n}=e;return t&&!_e(t)&&(e.class=_i(t)),n&&(e.style=yi(n)),e}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=Ea(am);function _f(e){return!!e||e===""}const vf=e=>!!(e&&e.__v_isRef===!0),lm=e=>_e(e)?e:e==null?"":J(e)||fe(e)&&(e.toString===hf||!Q(e.toString))?vf(e)?lm(e.value):JSON.stringify(e,bf,2):String(e),bf=(e,t)=>vf(t)?bf(e,t.value):Qn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[$i(r,i)+" =>"]=s,n),{})}:ff(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>$i(n))}:hn(t)?$i(t):fe(t)&&!J(t)&&!pf(t)?String(t):t,$i=(e,t="")=>{var n;return hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class wf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ca(e){return new wf(e)}function um(e,t=Be){t&&t.active&&t.effects.push(e)}function Aa(){return Be}function fm(e){Be&&Be.cleanups.push(e)}let Cn;class Pa{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,um(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(dm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),mn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=en,n=Cn;try{return en=!0,Cn=this,this._runnings++,Nc(this),this.fn()}finally{Lc(this),this._runnings--,Cn=n,en=t}}stop(){this.active&&(Nc(this),Lc(this),this.onStop&&this.onStop(),this.active=!1)}}function dm(e){return e.value}function Nc(e){e._trackId++,e._depsLength=0}function Lc(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ef(e.deps[t],e);e.deps.length=e._depsLength}}function Ef(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let en=!0,vo=0;const If=[];function pn(){If.push(en),en=!1}function mn(){const e=If.pop();en=e===void 0?!0:e}function Ra(){vo++}function ka(){for(vo--;!vo&&bo.length;)bo.shift()()}function Sf(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Ef(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const bo=[];function Tf(e,t,n){Ra();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&bo.push(r.scheduler)))}ka()}const Cf=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Gs=new WeakMap,An=Symbol(""),wo=Symbol("");function Ue(e,t,n){if(en&&Cn){let r=Gs.get(e);r||Gs.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Cf(()=>r.delete(n))),Sf(Cn,s)}}function Ct(e,t,n,r,s,i){const o=Gs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&J(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!hn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":J(e)?Ta(n)&&a.push(o.get("length")):(a.push(o.get(An)),Qn(e)&&a.push(o.get(wo)));break;case"delete":J(e)||(a.push(o.get(An)),Qn(e)&&a.push(o.get(wo)));break;case"set":Qn(e)&&a.push(o.get(An));break}Ra();for(const c of a)c&&Tf(c,4);ka()}function hm(e,t){const n=Gs.get(e);return n&&n.get(t)}const pm=Ea("__proto__,__v_isRef,__isVue"),Af=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hn)),Mc=mm();function mm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ie(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ie)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pn(),Ra();const r=ie(this)[t].apply(this,n);return ka(),mn(),r}}),e}function gm(e){hn(e)||(e=String(e));const t=ie(this);return Ue(t,"has",e),t.hasOwnProperty(e)}class Pf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Rm:xf:i?Of:kf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=J(t);if(!s){if(o&&se(Mc,n))return Reflect.get(Mc,n,r);if(n==="hasOwnProperty")return gm}const a=Reflect.get(t,n,r);return(hn(n)?Af.has(n):pm(n))||(s||Ue(t,"get",n),i)?a:we(a)?o&&Ta(n)?a:a.value:fe(a)?s?Nf(a):gn(a):a}}class Rf extends Pf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=ln(i);if(!lr(r)&&!ln(r)&&(i=ie(i),r=ie(r)),!J(t)&&we(i)&&!we(r))return c?!1:(i.value=r,!0)}const o=J(t)&&Ta(n)?Number(n)<t.length:se(t,n),a=Reflect.set(t,n,r,s);return t===ie(s)&&(o?cn(r,i)&&Ct(t,"set",n,r):Ct(t,"add",n,r)),a}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!hn(n)||!Af.has(n))&&Ue(t,"has",n),r}ownKeys(t){return Ue(t,"iterate",J(t)?"length":An),Reflect.ownKeys(t)}}class ym extends Pf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const _m=new Rf,vm=new ym,bm=new Rf(!0);const Oa=e=>e,vi=e=>Reflect.getPrototypeOf(e);function bs(e,t,n=!1,r=!1){e=e.__v_raw;const s=ie(e),i=ie(t);n||(cn(t,i)&&Ue(s,"get",t),Ue(s,"get",i));const{has:o}=vi(s),a=r?Oa:n?Ma:Br;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function ws(e,t=!1){const n=this.__v_raw,r=ie(n),s=ie(e);return t||(cn(e,s)&&Ue(r,"has",e),Ue(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Es(e,t=!1){return e=e.__v_raw,!t&&Ue(ie(e),"iterate",An),Reflect.get(e,"size",e)}function Dc(e,t=!1){!t&&!lr(e)&&!ln(e)&&(e=ie(e));const n=ie(this);return vi(n).has.call(n,e)||(n.add(e),Ct(n,"add",e,e)),this}function Fc(e,t,n=!1){!n&&!lr(t)&&!ln(t)&&(t=ie(t));const r=ie(this),{has:s,get:i}=vi(r);let o=s.call(r,e);o||(e=ie(e),o=s.call(r,e));const a=i.call(r,e);return r.set(e,t),o?cn(t,a)&&Ct(r,"set",e,t):Ct(r,"add",e,t),this}function Hc(e){const t=ie(this),{has:n,get:r}=vi(t);let s=n.call(t,e);s||(e=ie(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Ct(t,"delete",e,void 0),i}function Uc(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&Ct(e,"clear",void 0,void 0),n}function Is(e,t){return function(r,s){const i=this,o=i.__v_raw,a=ie(o),c=t?Oa:e?Ma:Br;return!e&&Ue(a,"iterate",An),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ss(e,t,n){return function(...r){const s=this.__v_raw,i=ie(s),o=Qn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Oa:t?Ma:Br;return!t&&Ue(i,"iterate",c?wo:An),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Dt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wm(){const e={get(i){return bs(this,i)},get size(){return Es(this)},has:ws,add:Dc,set:Fc,delete:Hc,clear:Uc,forEach:Is(!1,!1)},t={get(i){return bs(this,i,!1,!0)},get size(){return Es(this)},has:ws,add(i){return Dc.call(this,i,!0)},set(i,o){return Fc.call(this,i,o,!0)},delete:Hc,clear:Uc,forEach:Is(!1,!0)},n={get(i){return bs(this,i,!0)},get size(){return Es(this,!0)},has(i){return ws.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:Is(!0,!1)},r={get(i){return bs(this,i,!0,!0)},get size(){return Es(this,!0)},has(i){return ws.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ss(i,!1,!1),n[i]=Ss(i,!0,!1),t[i]=Ss(i,!1,!0),r[i]=Ss(i,!0,!0)}),[e,n,t,r]}const[Em,Im,Sm,Tm]=wm();function xa(e,t){const n=t?e?Tm:Sm:e?Im:Em;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const Cm={get:xa(!1,!1)},Am={get:xa(!1,!0)},Pm={get:xa(!0,!1)};const kf=new WeakMap,Of=new WeakMap,xf=new WeakMap,Rm=new WeakMap;function km(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Om(e){return e.__v_skip||!Object.isExtensible(e)?0:km(Zp(e))}function gn(e){return ln(e)?e:Na(e,!1,_m,Cm,kf)}function wt(e){return Na(e,!1,bm,Am,Of)}function Nf(e){return Na(e,!0,vm,Pm,xf)}function Na(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Om(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function tn(e){return ln(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function lr(e){return!!(e&&e.__v_isShallow)}function Lf(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function La(e){return Object.isExtensible(e)&&mf(e,"__v_skip",!0),e}const Br=e=>fe(e)?gn(e):e,Ma=e=>fe(e)?Nf(e):e;class Mf{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Pa(()=>t(this._value),()=>Ls(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ie(this);return(!t._cacheable||t.effect.dirty)&&cn(t._value,t._value=t.effect.run())&&Ls(t,4),Df(t),t.effect._dirtyLevel>=2&&Ls(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function xm(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=Ye):(r=e.get,s=e.set),new Mf(r,s,i||!s,n)}function Df(e){var t;en&&Cn&&(e=ie(e),Sf(Cn,(t=e.dep)!=null?t:e.dep=Cf(()=>e.dep=void 0,e instanceof Mf?e:void 0)))}function Ls(e,t=4,n,r){e=ie(e);const s=e.dep;s&&Tf(s,t)}function we(e){return!!(e&&e.__v_isRef===!0)}function st(e){return Ff(e,!1)}function Vr(e){return Ff(e,!0)}function Ff(e,t){return we(e)?e:new Nm(e,t)}class Nm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ie(t),this._value=n?t:Br(t)}get value(){return Df(this),this._value}set value(t){const n=this.__v_isShallow||lr(t)||ln(t);t=n?t:ie(t),cn(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Br(t),Ls(this,4))}}function ue(e){return we(e)?e.value:e}const Lm={get:(e,t,n)=>ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Hf(e){return tn(e)?e:new Proxy(e,Lm)}function Mm(e){const t=J(e)?new Array(e.length):{};for(const n in e)t[n]=Uf(e,n);return t}class Dm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return hm(ie(this._object),this._key)}}class Fm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Hm(e,t,n){return we(e)?e:Q(e)?new Fm(e):fe(e)&&arguments.length>1?Uf(e,t,n):st(e)}function Uf(e,t,n){const r=e[t];return we(r)?r:new Dm(e,t,n)}/**
* @vue/runtime-core v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nn(e,t,n,r){try{return r?e(...r):e()}catch(s){_r(s,t,n)}}function Je(e,t,n,r){if(Q(e)){const s=nn(e,t,n,r);return s&&df(s)&&s.catch(i=>{_r(i,t,n)}),s}if(J(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Je(e[i],t,n,r));return s}}function _r(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){pn(),nn(c,null,10,[e,o,a]),mn();return}}Um(e,n,s,r)}function Um(e,t,n,r=!0){console.error(e)}let Wr=!1,Eo=!1;const Re=[];let ft=0;const tr=[];let Vt=null,Sn=0;const jf=Promise.resolve();let Da=null;function Hn(e){const t=Da||jf;return e?t.then(this?e.bind(this):e):t}function jm(e){let t=ft+1,n=Re.length;for(;t<n;){const r=t+n>>>1,s=Re[r],i=zr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function bi(e){(!Re.length||!Re.includes(e,Wr&&e.allowRecurse?ft+1:ft))&&(e.id==null?Re.push(e):Re.splice(jm(e.id),0,e),$f())}function $f(){!Wr&&!Eo&&(Eo=!0,Da=jf.then(Bf))}function $m(e){const t=Re.indexOf(e);t>ft&&Re.splice(t,1)}function Io(e){J(e)?tr.push(...e):(!Vt||!Vt.includes(e,e.allowRecurse?Sn+1:Sn))&&tr.push(e),$f()}function jc(e,t,n=Wr?ft+1:0){for(;n<Re.length;n++){const r=Re[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Re.splice(n,1),n--,r()}}}function qs(e){if(tr.length){const t=[...new Set(tr)].sort((n,r)=>zr(n)-zr(r));if(tr.length=0,Vt){Vt.push(...t);return}for(Vt=t,Sn=0;Sn<Vt.length;Sn++){const n=Vt[Sn];n.active!==!1&&n()}Vt=null,Sn=0}}const zr=e=>e.id==null?1/0:e.id,Bm=(e,t)=>{const n=zr(e)-zr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bf(e){Eo=!1,Wr=!0,Re.sort(Bm);try{for(ft=0;ft<Re.length;ft++){const t=Re[ft];t&&t.active!==!1&&nn(t,t.i,t.i?15:14)}}finally{ft=0,Re.length=0,qs(),Wr=!1,Da=null,(Re.length||tr.length)&&Bf()}}let Se=null,wi=null;function Ys(e){const t=Se;return Se=e,wi=e&&e.type.__scopeId||null,t}function MT(e){wi=e}function DT(){wi=null}function Fa(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&tl(-1);const i=Ys(t);let o;try{o=e(...s)}finally{Ys(i),r._d&&tl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function FT(e,t){if(Se===null)return e;const n=Si(Se),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=me]=t[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Gt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function ut(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pn(),Je(c,n,8,[e.el,a,e,t]),mn())}}const Wt=Symbol("_leaveCb"),Ts=Symbol("_enterCb");function Vm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{e.isMounted=!0}),Ua(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],Vf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},Wf=e=>{const t=e.subTree;return t.component?Wf(t.component):t},Wm={name:"BaseTransition",props:Vf,setup(e,{slots:t}){const n=Ga(),r=Vm();return()=>{const s=t.default&&Kf(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const d of s)if(d.type!==Pe){i=d;break}}const o=ie(e),{mode:a}=o;if(r.isLeaving)return Bi(i);const c=$c(i);if(!c)return Bi(i);let l=So(c,o,r,n,d=>l=d);Kr(c,l);const u=n.subTree,f=u&&$c(u);if(f&&f.type!==Pe&&!rt(c,f)&&Wf(n).type!==Pe){const d=So(f,o,r,n);if(Kr(f,d),a==="out-in"&&c.type!==Pe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Bi(i);a==="in-out"&&c.type!==Pe&&(d.delayLeave=(p,v,E)=>{const P=zf(r,f);P[String(f.key)]=f,p[Wt]=()=>{v(),p[Wt]=void 0,delete l.delayedLeave},l.delayedLeave=E})}return i}}},zm=Wm;function zf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function So(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:v,onLeaveCancelled:E,onBeforeAppear:P,onAppear:S,onAfterAppear:y,onAppearCancelled:m}=t,_=String(e.key),b=zf(n,e),I=(T,O)=>{T&&Je(T,r,9,O)},R=(T,O)=>{const V=O[1];I(T,O),J(T)?T.every(L=>L.length<=1)&&V():T.length<=1&&V()},N={mode:o,persisted:a,beforeEnter(T){let O=c;if(!n.isMounted)if(i)O=P||c;else return;T[Wt]&&T[Wt](!0);const V=b[_];V&&rt(e,V)&&V.el[Wt]&&V.el[Wt](),I(O,[T])},enter(T){let O=l,V=u,L=f;if(!n.isMounted)if(i)O=S||l,V=y||u,L=m||f;else return;let K=!1;const re=T[Ts]=te=>{K||(K=!0,te?I(L,[T]):I(V,[T]),N.delayedLeave&&N.delayedLeave(),T[Ts]=void 0)};O?R(O,[T,re]):re()},leave(T,O){const V=String(e.key);if(T[Ts]&&T[Ts](!0),n.isUnmounting)return O();I(d,[T]);let L=!1;const K=T[Wt]=re=>{L||(L=!0,O(),re?I(E,[T]):I(v,[T]),T[Wt]=void 0,b[V]===e&&delete b[V])};b[V]=e,p?R(p,[T,K]):K()},clone(T){const O=So(T,t,n,r,s);return s&&s(O),O}};return N}function Bi(e){if(os(e))return e=At(e),e.children=null,e}function $c(e){if(!os(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Q(n.default))return n.default()}}function Kr(e,t){e.shapeFlag&6&&e.component?Kr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(Kf(o.children,t,a))):(t||o.type!==Pe)&&r.push(a!=null?At(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ot(e,t){return Q(e)?Ae({name:e.name},t,{setup:e}):e}const Pn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Bc(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=e;let c=null,l,u=0;const f=()=>(u++,c=null,d()),d=()=>{let p;return c||(p=c=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),a)return new Promise((E,P)=>{a(v,()=>E(f()),()=>P(v),u+1)});throw v}).then(v=>p!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),l=v,v)))};return Ot({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return l},setup(){const p=Ie;if(l)return()=>Vi(l,p);const v=y=>{c=null,_r(y,p,13,!r)};if(o&&p.suspense||cs)return d().then(y=>()=>Vi(y,p)).catch(y=>(v(y),()=>r?ye(r,{error:y}):null));const E=st(!1),P=st(),S=st(!!s);return s&&setTimeout(()=>{S.value=!1},s),i!=null&&setTimeout(()=>{if(!E.value&&!P.value){const y=new Error(`Async component timed out after ${i}ms.`);v(y),P.value=y}},i),d().then(()=>{E.value=!0,p.parent&&os(p.parent.vnode)&&(p.parent.effect.dirty=!0,bi(p.parent.update))}).catch(y=>{v(y),P.value=y}),()=>{if(E.value&&l)return Vi(l,p);if(P.value&&r)return ye(r,{error:P.value});if(n&&!S.value)return ye(n)}}})}function Vi(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=ye(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const os=e=>e.type.__isKeepAlive,Km={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Ga(),r=n.ctx;if(!r.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(y,m,_,b,I)=>{const R=y.component;l(y,m,_,0,a),c(R.vnode,y,m,_,R,a,b,y.slotScopeIds,I),Ce(()=>{R.isDeactivated=!1,R.a&&er(R.a);const N=y.props&&y.props.onVnodeMounted;N&&Fe(N,R.parent,y)},a)},r.deactivate=y=>{const m=y.component;Qs(m.m),Qs(m.a),l(y,d,null,1,a),Ce(()=>{m.da&&er(m.da);const _=y.props&&y.props.onVnodeUnmounted;_&&Fe(_,m.parent,y),m.isDeactivated=!0},a)};function p(y){Wi(y),u(y,n,a,!0)}function v(y){s.forEach((m,_)=>{const b=No(m.type);b&&(!y||!y(b))&&E(_)})}function E(y){const m=s.get(y);!o||!rt(m,o)?p(m):o&&Wi(o),s.delete(y),i.delete(y)}rn(()=>[e.include,e.exclude],([y,m])=>{y&&v(_=>Tr(y,_)),m&&v(_=>!Tr(m,_))},{flush:"post",deep:!0});let P=null;const S=()=>{P!=null&&(Ro(n.subTree.type)?Ce(()=>{s.set(P,Cs(n.subTree))},n.subTree.suspense):s.set(P,Cs(n.subTree)))};return Ha(S),qf(S),Ua(()=>{s.forEach(y=>{const{subTree:m,suspense:_}=n,b=Cs(m);if(y.type===b.type&&y.key===b.key){Wi(b);const I=b.component.da;I&&Ce(I,_);return}p(y)})}),()=>{if(P=null,!t.default)return null;const y=t.default(),m=y[0];if(y.length>1)return o=null,y;if(!fr(m)||!(m.shapeFlag&4)&&!(m.shapeFlag&128))return o=null,m;let _=Cs(m);const b=_.type,I=No(Pn(_)?_.type.__asyncResolved||{}:b),{include:R,exclude:N,max:T}=e;if(R&&(!I||!Tr(R,I))||N&&I&&Tr(N,I))return o=_,m;const O=_.key==null?b:_.key,V=s.get(O);return _.el&&(_=At(_),m.shapeFlag&128&&(m.ssContent=_)),P=O,V?(_.el=V.el,_.component=V.component,_.transition&&Kr(_,_.transition),_.shapeFlag|=512,i.delete(O),i.add(O)):(i.add(O),T&&i.size>parseInt(T,10)&&E(i.values().next().value)),_.shapeFlag|=256,o=_,Ro(m.type)?m:_}}},Gm=Km;function Tr(e,t){return J(e)?e.some(n=>Tr(n,t)):_e(e)?e.split(",").includes(t):Qp(e)?e.test(t):!1}function qm(e,t){Gf(e,"a",t)}function Ym(e,t){Gf(e,"da",t)}function Gf(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ei(t,r,n),n){let s=n.parent;for(;s&&s.parent;)os(s.parent.vnode)&&Jm(r,t,n,s),s=s.parent}}function Jm(e,t,n,r){const s=Ei(t,e,r,!0);Yf(()=>{Sa(r[t],s)},n)}function Wi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Cs(e){return e.shapeFlag&128?e.ssContent:e}function Ei(e,t,n=Ie,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{pn();const a=as(n),c=Je(t,n,e,o);return a(),mn(),c});return r?s.unshift(i):s.push(i),i}}const xt=e=>(t,n=Ie)=>{(!cs||e==="sp")&&Ei(e,(...r)=>t(...r),n)},Xm=xt("bm"),Ha=xt("m"),Qm=xt("bu"),qf=xt("u"),Ua=xt("bum"),Yf=xt("um"),Zm=xt("sp"),eg=xt("rtg"),tg=xt("rtc");function Jf(e,t=Ie){Ei("ec",e,t)}const Xf="components";function HT(e,t){return Zf(Xf,e,!0,t)||e}const Qf=Symbol.for("v-ndc");function ng(e){return _e(e)?Zf(Xf,e,!1)||e:e||Qf}function Zf(e,t,n=!0,r=!1){const s=Se||Ie;if(s){const i=s.type;{const a=No(i,!1);if(a&&(a===t||a===it(t)||a===gi(it(t))))return i}const o=Vc(s[e]||i[e],t)||Vc(s.appContext[e],t);return!o&&r?i:o}}function Vc(e,t){return e&&(e[t]||e[it(t)]||e[gi(it(t))])}function UT(e,t,n,r){let s;const i=n;if(J(e)||_e(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i)}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i)}}else s=[];return s}function jT(e,t,n={},r,s){if(Se.isCE||Se.parent&&Pn(Se.parent)&&Se.parent.isCE)return ye("slot",n,r);let i=e[t];i&&i._c&&(i._d=!1),nt();const o=i&&ed(i(n)),a=vt(Ne,{key:(n.key||o&&o.key||`_${t}`)+(!o&&r?"_fb":"")},o||[],o&&e._===1?64:-2);return i&&i._c&&(i._d=!0),a}function ed(e){return e.some(t=>fr(t)?!(t.type===Pe||t.type===Ne&&!ed(t.children)):!0)?e:null}const To=e=>e?Ad(e)?Si(e):To(e.parent):null,Or=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>To(e.parent),$root:e=>To(e.root),$emit:e=>e.emit,$options:e=>ja(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,bi(e.update)}),$nextTick:e=>e.n||(e.n=Hn.bind(e.proxy)),$watch:e=>Ag.bind(e)}),zi=(e,t)=>e!==me&&!e.__isScriptSetup&&se(e,t),rg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(zi(r,t))return o[t]=1,r[t];if(s!==me&&se(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,i[t];if(n!==me&&se(n,t))return o[t]=4,n[t];Co&&(o[t]=0)}}const u=Or[t];let f,d;if(u)return t==="$attrs"&&Ue(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==me&&se(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return zi(s,t)?(s[t]=n,!0):r!==me&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==me&&se(e,o)||zi(t,o)||(a=i[0])&&se(a,o)||se(r,o)||se(Or,o)||se(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Wc(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Co=!0;function sg(e){const t=ja(e),n=e.proxy,r=e.ctx;Co=!1,t.beforeCreate&&zc(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:E,deactivated:P,beforeDestroy:S,beforeUnmount:y,destroyed:m,unmounted:_,render:b,renderTracked:I,renderTriggered:R,errorCaptured:N,serverPrefetch:T,expose:O,inheritAttrs:V,components:L,directives:K,filters:re}=t;if(l&&ig(l,r,null),o)for(const Z in o){const z=o[Z];Q(z)&&(r[Z]=z.bind(n))}if(s){const Z=s.call(n,n);fe(Z)&&(e.data=gn(Z))}if(Co=!0,i)for(const Z in i){const z=i[Z],Ze=Q(z)?z.bind(n,n):Q(z.get)?z.get.bind(n,n):Ye,Mt=!Q(z)&&Q(z.set)?z.set.bind(n):Ye,ct=Ee({get:Ze,set:Mt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Me=>ct.value=Me})}if(a)for(const Z in a)td(a[Z],r,n,Z);if(c){const Z=Q(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(z=>{Rn(z,Z[z])})}u&&zc(u,e,"c");function H(Z,z){J(z)?z.forEach(Ze=>Z(Ze.bind(n))):z&&Z(z.bind(n))}if(H(Xm,f),H(Ha,d),H(Qm,p),H(qf,v),H(qm,E),H(Ym,P),H(Jf,N),H(tg,I),H(eg,R),H(Ua,y),H(Yf,_),H(Zm,T),J(O))if(O.length){const Z=e.exposed||(e.exposed={});O.forEach(z=>{Object.defineProperty(Z,z,{get:()=>n[z],set:Ze=>n[z]=Ze})})}else e.exposed||(e.exposed={});b&&e.render===Ye&&(e.render=b),V!=null&&(e.inheritAttrs=V),L&&(e.components=L),K&&(e.directives=K)}function ig(e,t,n=Ye){J(e)&&(e=Ao(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=ke(s.from||r,s.default,!0):i=ke(s.from||r):i=ke(s),we(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function zc(e,t,n){Je(J(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function td(e,t,n,r){const s=r.includes(".")?gd(n,r):()=>n[r];if(_e(e)){const i=t[e];Q(i)&&rn(s,i)}else if(Q(e))rn(s,e.bind(n));else if(fe(e))if(J(e))e.forEach(i=>td(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&rn(s,i,e)}}function ja(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Js(c,l,o,!0)),Js(c,t,o)),fe(t)&&i.set(t,c),c}function Js(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Js(e,i,n,!0),s&&s.forEach(o=>Js(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=og[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const og={data:Kc,props:Gc,emits:Gc,methods:Cr,computed:Cr,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Cr,directives:Cr,watch:cg,provide:Kc,inject:ag};function Kc(e,t){return t?e?function(){return Ae(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function ag(e,t){return Cr(Ao(e),Ao(t))}function Ao(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Cr(e,t){return e?Ae(Object.create(null),e,t):t}function Gc(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Wc(e),Wc(t??{})):t}function cg(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function nd(){return{app:null,config:{isNativeTag:Jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function ug(e,t){return function(r,s=null){Q(r)||(r=Ae({},r)),s!=null&&!fe(s)&&(s=null);const i=nd(),o=new WeakSet;let a=!1;const c=i.app={_uid:lg++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Rd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const d=ye(r,s);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(d,l):e(d,l,f),a=!0,c._container=l,l.__vue_app__=c,Si(d.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=nr;nr=c;try{return l()}finally{nr=u}}};return c}}let nr=null;function Rn(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function ke(e,t,n=!1){const r=Ie||Se;if(r||nr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function $a(){return!!(Ie||Se||nr)}const rd={},sd=()=>Object.create(rd),id=e=>Object.getPrototypeOf(e)===rd;function fg(e,t,n,r=!1){const s={},i=sd();e.propsDefaults=Object.create(null),od(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:wt(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function dg(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ie(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ii(e.emitsOptions,d))continue;const p=t[d];if(c)if(se(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const v=it(d);s[v]=Po(c,a,v,p,e,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{od(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=Fn(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Po(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!se(t,f))&&(delete i[f],l=!0)}l&&Ct(e.attrs,"set","")}function od(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Zn(c))continue;const l=t[c];let u;s&&se(s,u=it(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ii(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ie(n),l=a||me;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Po(s,c,f,l[f],e,!se(l,f))}}return o}function Po(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=as(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Fn(n))&&(r=!0))}return r}const hg=new WeakMap;function ad(e,t,n=!1){const r=n?hg:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=f=>{c=!0;const[d,p]=ad(f,t,!0);Ae(o,d),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return fe(e)&&r.set(e,Xn),Xn;if(J(i))for(let u=0;u<i.length;u++){const f=it(i[u]);qc(f)&&(o[f]=me)}else if(i)for(const u in i){const f=it(u);if(qc(f)){const d=i[u],p=o[f]=J(d)||Q(d)?{type:d}:Ae({},d);if(p){const v=Xc(Boolean,p.type),E=Xc(String,p.type);p[0]=v>-1,p[1]=E<0||v<E,(v>-1||se(p,"default"))&&a.push(f)}}}const l=[o,a];return fe(e)&&r.set(e,l),l}function qc(e){return e[0]!=="$"&&!Zn(e)}function Yc(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Jc(e,t){return Yc(e)===Yc(t)}function Xc(e,t){return J(t)?t.findIndex(n=>Jc(n,e)):Q(t)&&Jc(t,e)?0:-1}const cd=e=>e[0]==="_"||e==="$stable",Ba=e=>J(e)?e.map(Ve):[Ve(e)],pg=(e,t,n)=>{if(t._n)return t;const r=Fa((...s)=>Ba(t(...s)),n);return r._c=!1,r},ld=(e,t,n)=>{const r=e._ctx;for(const s in e){if(cd(s))continue;const i=e[s];if(Q(i))t[s]=pg(s,i,r);else if(i!=null){const o=Ba(i);t[s]=()=>o}}},ud=(e,t)=>{const n=Ba(t);e.slots.default=()=>n},fd=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},mg=(e,t,n)=>{const r=e.slots=sd();if(e.vnode.shapeFlag&32){const s=t._;s?(fd(r,t,n),n&&mf(r,"_",s,!0)):ld(t,r)}else t&&ud(e,t)},gg=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=me;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:fd(s,t,n):(i=!t.$stable,ld(t,s)),o=t}else t&&(ud(e,t),o={default:1});if(i)for(const a in s)!cd(a)&&o[a]==null&&delete s[a]};function Xs(e,t,n,r,s=!1){if(J(e)){e.forEach((d,p)=>Xs(d,t&&(J(t)?t[p]:t),n,r,s));return}if(Pn(r)&&!s)return;const i=r.shapeFlag&4?Si(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===me?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,se(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),Q(c))nn(c,a,12,[o,u]);else{const d=_e(c),p=we(c);if(d||p){const v=()=>{if(e.f){const E=d?se(f,c)?f[c]:u[c]:c.value;s?J(E)&&Sa(E,i):J(E)?E.includes(i)||E.push(i):d?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,se(f,c)&&(f[c]=o)):p&&(c.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,Ce(v,n)):v()}}}const yg=Symbol("_vte"),_g=e=>e.__isTeleport;let Qc=!1;const Wn=()=>{Qc||(console.error("Hydration completed but contains mismatches."),Qc=!0)},vg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",bg=e=>e.namespaceURI.includes("MathML"),As=e=>{if(vg(e))return"svg";if(bg(e))return"mathml"},Ps=e=>e.nodeType===8;function wg(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=e,u=(m,_)=>{if(!_.hasChildNodes()){n(null,m,_),qs(),_._vnode=m;return}f(_.firstChild,m,null,null,null),qs(),_._vnode=m},f=(m,_,b,I,R,N=!1)=>{N=N||!!_.dynamicChildren;const T=Ps(m)&&m.data==="[",O=()=>E(m,_,b,I,R,T),{type:V,ref:L,shapeFlag:K,patchFlag:re}=_;let te=m.nodeType;_.el=m,re===-2&&(N=!1,_.dynamicChildren=null);let H=null;switch(V){case kn:te!==3?_.children===""?(c(_.el=s(""),o(m),m),H=m):H=O():(m.data!==_.children&&(Wn(),m.data=_.children),H=i(m));break;case Pe:y(m)?(H=i(m),S(_.el=m.content.firstChild,m,b)):te!==8||T?H=O():H=i(m);break;case xr:if(T&&(m=i(m),te=m.nodeType),te===1||te===3){H=m;const Z=!_.children.length;for(let z=0;z<_.staticCount;z++)Z&&(_.children+=H.nodeType===1?H.outerHTML:H.data),z===_.staticCount-1&&(_.anchor=H),H=i(H);return T?i(H):H}else O();break;case Ne:T?H=v(m,_,b,I,R,N):H=O();break;default:if(K&1)(te!==1||_.type.toLowerCase()!==m.tagName.toLowerCase())&&!y(m)?H=O():H=d(m,_,b,I,R,N);else if(K&6){_.slotScopeIds=R;const Z=o(m);if(T?H=P(m):Ps(m)&&m.data==="teleport start"?H=P(m,m.data,"teleport end"):H=i(m),t(_,Z,null,b,I,As(Z),N),Pn(_)){let z;T?(z=ye(Ne),z.anchor=H?H.previousSibling:Z.lastChild):z=m.nodeType===3?Td(""):ye("div"),z.el=m,_.component.subTree=z}}else K&64?te!==8?H=O():H=_.type.hydrate(m,_,b,I,R,N,e,p):K&128&&(H=_.type.hydrate(m,_,b,I,As(o(m)),R,N,e,f))}return L!=null&&Xs(L,null,I,_),H},d=(m,_,b,I,R,N)=>{N=N||!!_.dynamicChildren;const{type:T,props:O,patchFlag:V,shapeFlag:L,dirs:K,transition:re}=_,te=T==="input"||T==="option";if(te||V!==-1){K&&ut(_,null,b,"created");let H=!1;if(y(m)){H=hd(I,re)&&b&&b.vnode.props&&b.vnode.props.appear;const z=m.content.firstChild;H&&re.beforeEnter(z),S(z,m,b),_.el=m=z}if(L&16&&!(O&&(O.innerHTML||O.textContent))){let z=p(m.firstChild,_,m,b,I,R,N);for(;z;){Wn();const Ze=z;z=z.nextSibling,a(Ze)}}else L&8&&m.textContent!==_.children&&(Wn(),m.textContent=_.children);if(O){if(te||!N||V&48)for(const z in O)(te&&(z.endsWith("value")||z==="indeterminate")||ss(z)&&!Zn(z)||z[0]===".")&&r(m,z,null,O[z],void 0,b);else if(O.onClick)r(m,"onClick",null,O.onClick,void 0,b);else if(V&4&&tn(O.style))for(const z in O.style)O.style[z]}let Z;(Z=O&&O.onVnodeBeforeMount)&&Fe(Z,b,_),K&&ut(_,null,b,"beforeMount"),((Z=O&&O.onVnodeMounted)||K||H)&&vd(()=>{Z&&Fe(Z,b,_),H&&re.enter(m),K&&ut(_,null,b,"mounted")},I)}return m.nextSibling},p=(m,_,b,I,R,N,T)=>{T=T||!!_.dynamicChildren;const O=_.children,V=O.length;for(let L=0;L<V;L++){const K=T?O[L]:O[L]=Ve(O[L]),re=K.type===kn;if(m){if(re&&!T){let te=O[L+1];te&&(te=Ve(te)).type===kn&&(c(s(m.data.slice(K.children.length)),b,i(m)),m.data=K.children)}m=f(m,K,I,R,N,T)}else re&&!K.children?c(K.el=s(""),b):(Wn(),n(null,K,b,null,I,R,As(b),N))}return m},v=(m,_,b,I,R,N)=>{const{slotScopeIds:T}=_;T&&(R=R?R.concat(T):T);const O=o(m),V=p(i(m),_,O,b,I,R,N);return V&&Ps(V)&&V.data==="]"?i(_.anchor=V):(Wn(),c(_.anchor=l("]"),O,V),V)},E=(m,_,b,I,R,N)=>{if(Wn(),_.el=null,N){const V=P(m);for(;;){const L=i(m);if(L&&L!==V)a(L);else break}}const T=i(m),O=o(m);return a(m),n(null,_,O,T,b,I,As(O),R),T},P=(m,_="[",b="]")=>{let I=0;for(;m;)if(m=i(m),m&&Ps(m)&&(m.data===_&&I++,m.data===b)){if(I===0)return i(m);I--}return m},S=(m,_,b)=>{const I=_.parentNode;I&&I.replaceChild(m,_);let R=b;for(;R;)R.vnode.el===_&&(R.vnode.el=R.subTree.el=m),R=R.parent},y=m=>m.nodeType===1&&m.tagName.toLowerCase()==="template";return[u,f]}const Ce=vd;function Eg(e){return dd(e)}function Ig(e){return dd(e,wg)}function dd(e,t){const n=yf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Ye,insertStaticContent:v}=e,E=(h,g,w,k=null,C=null,M=null,U=void 0,D=null,F=!!g.dynamicChildren)=>{if(h===g)return;h&&!rt(h,g)&&(k=A(h),Me(h,C,M,!0),h=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:x,ref:B,shapeFlag:Y}=g;switch(x){case kn:P(h,g,w,k);break;case Pe:S(h,g,w,k);break;case xr:h==null&&y(g,w,k,U);break;case Ne:L(h,g,w,k,C,M,U,D,F);break;default:Y&1?b(h,g,w,k,C,M,U,D,F):Y&6?K(h,g,w,k,C,M,U,D,F):(Y&64||Y&128)&&x.process(h,g,w,k,C,M,U,D,F,G)}B!=null&&C&&Xs(B,h&&h.ref,M,g||h,!g)},P=(h,g,w,k)=>{if(h==null)r(g.el=a(g.children),w,k);else{const C=g.el=h.el;g.children!==h.children&&l(C,g.children)}},S=(h,g,w,k)=>{h==null?r(g.el=c(g.children||""),w,k):g.el=h.el},y=(h,g,w,k)=>{[h.el,h.anchor]=v(h.children,g,w,k,h.el,h.anchor)},m=({el:h,anchor:g},w,k)=>{let C;for(;h&&h!==g;)C=d(h),r(h,w,k),h=C;r(g,w,k)},_=({el:h,anchor:g})=>{let w;for(;h&&h!==g;)w=d(h),s(h),h=w;s(g)},b=(h,g,w,k,C,M,U,D,F)=>{g.type==="svg"?U="svg":g.type==="math"&&(U="mathml"),h==null?I(g,w,k,C,M,U,D,F):T(h,g,C,M,U,D,F)},I=(h,g,w,k,C,M,U,D)=>{let F,x;const{props:B,shapeFlag:Y,transition:q,dirs:ee}=h;if(F=h.el=o(h.type,M,B&&B.is,B),Y&8?u(F,h.children):Y&16&&N(h.children,F,null,k,C,Ki(h,M),U,D),ee&&ut(h,null,k,"created"),R(F,h,h.scopeId,U,k),B){for(const de in B)de!=="value"&&!Zn(de)&&i(F,de,null,B[de],M,k);"value"in B&&i(F,"value",null,B.value,M),(x=B.onVnodeBeforeMount)&&Fe(x,k,h)}ee&&ut(h,null,k,"beforeMount");const ne=hd(C,q);ne&&q.beforeEnter(F),r(F,g,w),((x=B&&B.onVnodeMounted)||ne||ee)&&Ce(()=>{x&&Fe(x,k,h),ne&&q.enter(F),ee&&ut(h,null,k,"mounted")},C)},R=(h,g,w,k,C)=>{if(w&&p(h,w),k)for(let M=0;M<k.length;M++)p(h,k[M]);if(C){let M=C.subTree;if(g===M){const U=C.vnode;R(h,U,U.scopeId,U.slotScopeIds,C.parent)}}},N=(h,g,w,k,C,M,U,D,F=0)=>{for(let x=F;x<h.length;x++){const B=h[x]=D?zt(h[x]):Ve(h[x]);E(null,B,g,w,k,C,M,U,D)}},T=(h,g,w,k,C,M,U)=>{const D=g.el=h.el;let{patchFlag:F,dynamicChildren:x,dirs:B}=g;F|=h.patchFlag&16;const Y=h.props||me,q=g.props||me;let ee;if(w&&vn(w,!1),(ee=q.onVnodeBeforeUpdate)&&Fe(ee,w,g,h),B&&ut(g,h,w,"beforeUpdate"),w&&vn(w,!0),(Y.innerHTML&&q.innerHTML==null||Y.textContent&&q.textContent==null)&&u(D,""),x?O(h.dynamicChildren,x,D,w,k,Ki(g,C),M):U||z(h,g,D,null,w,k,Ki(g,C),M,!1),F>0){if(F&16)V(D,Y,q,w,C);else if(F&2&&Y.class!==q.class&&i(D,"class",null,q.class,C),F&4&&i(D,"style",Y.style,q.style,C),F&8){const ne=g.dynamicProps;for(let de=0;de<ne.length;de++){const ae=ne[de],Te=Y[ae],et=q[ae];(et!==Te||ae==="value")&&i(D,ae,Te,et,C,w)}}F&1&&h.children!==g.children&&u(D,g.children)}else!U&&x==null&&V(D,Y,q,w,C);((ee=q.onVnodeUpdated)||B)&&Ce(()=>{ee&&Fe(ee,w,g,h),B&&ut(g,h,w,"updated")},k)},O=(h,g,w,k,C,M,U)=>{for(let D=0;D<g.length;D++){const F=h[D],x=g[D],B=F.el&&(F.type===Ne||!rt(F,x)||F.shapeFlag&70)?f(F.el):w;E(F,x,B,null,k,C,M,U,!0)}},V=(h,g,w,k,C)=>{if(g!==w){if(g!==me)for(const M in g)!Zn(M)&&!(M in w)&&i(h,M,g[M],null,C,k);for(const M in w){if(Zn(M))continue;const U=w[M],D=g[M];U!==D&&M!=="value"&&i(h,M,D,U,C,k)}"value"in w&&i(h,"value",g.value,w.value,C)}},L=(h,g,w,k,C,M,U,D,F)=>{const x=g.el=h?h.el:a(""),B=g.anchor=h?h.anchor:a("");let{patchFlag:Y,dynamicChildren:q,slotScopeIds:ee}=g;ee&&(D=D?D.concat(ee):ee),h==null?(r(x,w,k),r(B,w,k),N(g.children||[],w,B,C,M,U,D,F)):Y>0&&Y&64&&q&&h.dynamicChildren?(O(h.dynamicChildren,q,w,C,M,U,D),(g.key!=null||C&&g===C.subTree)&&pd(h,g,!0)):z(h,g,w,B,C,M,U,D,F)},K=(h,g,w,k,C,M,U,D,F)=>{g.slotScopeIds=D,h==null?g.shapeFlag&512?C.ctx.activate(g,w,k,U,F):re(g,w,k,C,M,U,F):te(h,g,F)},re=(h,g,w,k,C,M,U)=>{const D=h.component=Wg(h,k,C);if(os(h)&&(D.ctx.renderer=G),zg(D,!1,U),D.asyncDep){if(C&&C.registerDep(D,H,U),!h.el){const F=D.subTree=ye(Pe);S(null,F,g,w)}}else H(D,h,g,w,C,M,U)},te=(h,g,w)=>{const k=g.component=h.component;if(Ng(h,g,w))if(k.asyncDep&&!k.asyncResolved){Z(k,g,w);return}else k.next=g,$m(k.update),k.effect.dirty=!0,k.update();else g.el=h.el,k.vnode=g},H=(h,g,w,k,C,M,U)=>{const D=()=>{if(h.isMounted){let{next:B,bu:Y,u:q,parent:ee,vnode:ne}=h;{const Vn=md(h);if(Vn){B&&(B.el=ne.el,Z(h,B,U)),Vn.asyncDep.then(()=>{h.isUnmounted||D()});return}}let de=B,ae;vn(h,!1),B?(B.el=ne.el,Z(h,B,U)):B=ne,Y&&er(Y),(ae=B.props&&B.props.onVnodeBeforeUpdate)&&Fe(ae,ee,B,ne),vn(h,!0);const Te=Gi(h),et=h.subTree;h.subTree=Te,E(et,Te,f(et.el),A(et),h,C,M),B.el=Te.el,de===null&&Wa(h,Te.el),q&&Ce(q,C),(ae=B.props&&B.props.onVnodeUpdated)&&Ce(()=>Fe(ae,ee,B,ne),C)}else{let B;const{el:Y,props:q}=g,{bm:ee,m:ne,parent:de}=h,ae=Pn(g);if(vn(h,!1),ee&&er(ee),!ae&&(B=q&&q.onVnodeBeforeMount)&&Fe(B,de,g),vn(h,!0),Y&&pe){const Te=()=>{h.subTree=Gi(h),pe(Y,h.subTree,h,C,null)};ae?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Te()):Te()}else{const Te=h.subTree=Gi(h);E(null,Te,w,k,h,C,M),g.el=Te.el}if(ne&&Ce(ne,C),!ae&&(B=q&&q.onVnodeMounted)){const Te=g;Ce(()=>Fe(B,de,Te),C)}(g.shapeFlag&256||de&&Pn(de.vnode)&&de.vnode.shapeFlag&256)&&h.a&&Ce(h.a,C),h.isMounted=!0,g=w=k=null}},F=h.effect=new Pa(D,Ye,()=>bi(x),h.scope),x=h.update=()=>{F.dirty&&F.run()};x.i=h,x.id=h.uid,vn(h,!0),x()},Z=(h,g,w)=>{g.component=h;const k=h.vnode.props;h.vnode=g,h.next=null,dg(h,g.props,k,w),gg(h,g.children,w),pn(),jc(h),mn()},z=(h,g,w,k,C,M,U,D,F=!1)=>{const x=h&&h.children,B=h?h.shapeFlag:0,Y=g.children,{patchFlag:q,shapeFlag:ee}=g;if(q>0){if(q&128){Mt(x,Y,w,k,C,M,U,D,F);return}else if(q&256){Ze(x,Y,w,k,C,M,U,D,F);return}}ee&8?(B&16&&Ge(x,C,M),Y!==x&&u(w,Y)):B&16?ee&16?Mt(x,Y,w,k,C,M,U,D,F):Ge(x,C,M,!0):(B&8&&u(w,""),ee&16&&N(Y,w,k,C,M,U,D,F))},Ze=(h,g,w,k,C,M,U,D,F)=>{h=h||Xn,g=g||Xn;const x=h.length,B=g.length,Y=Math.min(x,B);let q;for(q=0;q<Y;q++){const ee=g[q]=F?zt(g[q]):Ve(g[q]);E(h[q],ee,w,null,C,M,U,D,F)}x>B?Ge(h,C,M,!0,!1,Y):N(g,w,k,C,M,U,D,F,Y)},Mt=(h,g,w,k,C,M,U,D,F)=>{let x=0;const B=g.length;let Y=h.length-1,q=B-1;for(;x<=Y&&x<=q;){const ee=h[x],ne=g[x]=F?zt(g[x]):Ve(g[x]);if(rt(ee,ne))E(ee,ne,w,null,C,M,U,D,F);else break;x++}for(;x<=Y&&x<=q;){const ee=h[Y],ne=g[q]=F?zt(g[q]):Ve(g[q]);if(rt(ee,ne))E(ee,ne,w,null,C,M,U,D,F);else break;Y--,q--}if(x>Y){if(x<=q){const ee=q+1,ne=ee<B?g[ee].el:k;for(;x<=q;)E(null,g[x]=F?zt(g[x]):Ve(g[x]),w,ne,C,M,U,D,F),x++}}else if(x>q)for(;x<=Y;)Me(h[x],C,M,!0),x++;else{const ee=x,ne=x,de=new Map;for(x=ne;x<=q;x++){const je=g[x]=F?zt(g[x]):Ve(g[x]);je.key!=null&&de.set(je.key,x)}let ae,Te=0;const et=q-ne+1;let Vn=!1,Rc=0;const Er=new Array(et);for(x=0;x<et;x++)Er[x]=0;for(x=ee;x<=Y;x++){const je=h[x];if(Te>=et){Me(je,C,M,!0);continue}let lt;if(je.key!=null)lt=de.get(je.key);else for(ae=ne;ae<=q;ae++)if(Er[ae-ne]===0&&rt(je,g[ae])){lt=ae;break}lt===void 0?Me(je,C,M,!0):(Er[lt-ne]=x+1,lt>=Rc?Rc=lt:Vn=!0,E(je,g[lt],w,null,C,M,U,D,F),Te++)}const kc=Vn?Sg(Er):Xn;for(ae=kc.length-1,x=et-1;x>=0;x--){const je=ne+x,lt=g[je],Oc=je+1<B?g[je+1].el:k;Er[x]===0?E(null,lt,w,Oc,C,M,U,D,F):Vn&&(ae<0||x!==kc[ae]?ct(lt,w,Oc,2):ae--)}}},ct=(h,g,w,k,C=null)=>{const{el:M,type:U,transition:D,children:F,shapeFlag:x}=h;if(x&6){ct(h.component.subTree,g,w,k);return}if(x&128){h.suspense.move(g,w,k);return}if(x&64){U.move(h,g,w,G);return}if(U===Ne){r(M,g,w);for(let Y=0;Y<F.length;Y++)ct(F[Y],g,w,k);r(h.anchor,g,w);return}if(U===xr){m(h,g,w);return}if(k!==2&&x&1&&D)if(k===0)D.beforeEnter(M),r(M,g,w),Ce(()=>D.enter(M),C);else{const{leave:Y,delayLeave:q,afterLeave:ee}=D,ne=()=>r(M,g,w),de=()=>{Y(M,()=>{ne(),ee&&ee()})};q?q(M,ne,de):de()}else r(M,g,w)},Me=(h,g,w,k=!1,C=!1)=>{const{type:M,props:U,ref:D,children:F,dynamicChildren:x,shapeFlag:B,patchFlag:Y,dirs:q,cacheIndex:ee}=h;if(Y===-2&&(C=!1),D!=null&&Xs(D,null,w,h,!0),ee!=null&&(g.renderCache[ee]=void 0),B&256){g.ctx.deactivate(h);return}const ne=B&1&&q,de=!Pn(h);let ae;if(de&&(ae=U&&U.onVnodeBeforeUnmount)&&Fe(ae,g,h),B&6)vs(h.component,w,k);else{if(B&128){h.suspense.unmount(w,k);return}ne&&ut(h,null,g,"beforeUnmount"),B&64?h.type.remove(h,g,w,G,k):x&&!x.hasOnce&&(M!==Ne||Y>0&&Y&64)?Ge(x,g,w,!1,!0):(M===Ne&&Y&384||!C&&B&16)&&Ge(F,g,w),k&&$n(h)}(de&&(ae=U&&U.onVnodeUnmounted)||ne)&&Ce(()=>{ae&&Fe(ae,g,h),ne&&ut(h,null,g,"unmounted")},w)},$n=h=>{const{type:g,el:w,anchor:k,transition:C}=h;if(g===Ne){Bn(w,k);return}if(g===xr){_(h);return}const M=()=>{s(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:U,delayLeave:D}=C,F=()=>U(w,M);D?D(h.el,M,F):F()}else M()},Bn=(h,g)=>{let w;for(;h!==g;)w=d(h),s(h),h=w;s(g)},vs=(h,g,w)=>{const{bum:k,scope:C,update:M,subTree:U,um:D,m:F,a:x}=h;Qs(F),Qs(x),k&&er(k),C.stop(),M&&(M.active=!1,Me(U,h,g,w)),D&&Ce(D,g),Ce(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ge=(h,g,w,k=!1,C=!1,M=0)=>{for(let U=M;U<h.length;U++)Me(h[U],g,w,k,C)},A=h=>{if(h.shapeFlag&6)return A(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=d(h.anchor||h.el),w=g&&g[yg];return w?d(w):g};let $=!1;const j=(h,g,w)=>{h==null?g._vnode&&Me(g._vnode,null,null,!0):E(g._vnode||null,h,g,null,null,null,w),$||($=!0,jc(),qs(),$=!1),g._vnode=h},G={p:E,um:Me,m:ct,r:$n,mt:re,mc:N,pc:z,pbc:O,n:A,o:e};let oe,pe;return t&&([oe,pe]=t(G)),{render:j,hydrate:oe,createApp:ug(j,oe)}}function Ki({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function vn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pd(e,t,n=!1){const r=e.children,s=t.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&pd(o,a)),a.type===kn&&(a.el=o.el)}}function Sg(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function md(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:md(t)}function Qs(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Tg=Symbol.for("v-scx"),Cg=()=>ke(Tg);function $T(e,t){return Va(e,null,t)}const Rs={};function rn(e,t,n){return Va(e,t,n)}function Va(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=me){if(t&&i){const I=t;t=(...R)=>{I(...R),b()}}const c=Ie,l=I=>r===!0?I:Gt(I,r===!1?1:void 0);let u,f=!1,d=!1;if(we(e)?(u=()=>e.value,f=lr(e)):tn(e)?(u=()=>l(e),f=!0):J(e)?(d=!0,f=e.some(I=>tn(I)||lr(I)),u=()=>e.map(I=>{if(we(I))return I.value;if(tn(I))return l(I);if(Q(I))return nn(I,c,2)})):Q(e)?t?u=()=>nn(e,c,2):u=()=>(p&&p(),Je(e,c,3,[v])):u=Ye,t&&r){const I=u;u=()=>Gt(I())}let p,v=I=>{p=m.onStop=()=>{nn(I,c,4),p=m.onStop=void 0}},E;if(cs)if(v=Ye,t?n&&Je(t,c,3,[u(),d?[]:void 0,v]):u(),s==="sync"){const I=Cg();E=I.__watcherHandles||(I.__watcherHandles=[])}else return Ye;let P=d?new Array(e.length).fill(Rs):Rs;const S=()=>{if(!(!m.active||!m.dirty))if(t){const I=m.run();(r||f||(d?I.some((R,N)=>cn(R,P[N])):cn(I,P)))&&(p&&p(),Je(t,c,3,[I,P===Rs?void 0:d&&P[0]===Rs?[]:P,v]),P=I)}else m.run()};S.allowRecurse=!!t;let y;s==="sync"?y=S:s==="post"?y=()=>Ce(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),y=()=>bi(S));const m=new Pa(u,Ye,y),_=Aa(),b=()=>{m.stop(),_&&Sa(_.effects,m)};return t?n?S():P=m.run():s==="post"?Ce(m.run.bind(m),c&&c.suspense):m.run(),E&&E.push(b),b}function Ag(e,t,n){const r=this.proxy,s=_e(e)?e.includes(".")?gd(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=as(this),a=Va(s,i.bind(r),n);return o(),a}function gd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,we(e))Gt(e.value,t,n);else if(J(e))for(let r=0;r<e.length;r++)Gt(e[r],t,n);else if(ff(e)||Qn(e))e.forEach(r=>{Gt(r,t,n)});else if(pf(e)){for(const r in e)Gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gt(e[r],t,n)}return e}const Pg=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${it(t)}Modifiers`]||e[`${Fn(t)}Modifiers`];function Rg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||me;let s=n;const i=t.startsWith("update:"),o=i&&Pg(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>_e(u)?u.trim():u)),o.number&&(s=n.map(_o)));let a,c=r[a=ji(t)]||r[a=ji(it(t))];!c&&i&&(c=r[a=ji(Fn(t))]),c&&Je(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Je(l,e,6,s)}}function yd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=yd(l,t,!0);u&&(a=!0,Ae(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(fe(e)&&r.set(e,null),null):(J(i)?i.forEach(c=>o[c]=null):Ae(o,i),fe(e)&&r.set(e,o),o)}function Ii(e,t){return!e||!ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Fn(t))||se(e,t))}function Gi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:E}=e,P=Ys(e);let S,y;try{if(n.shapeFlag&4){const _=s||r,b=_;S=Ve(l.call(b,_,u,f,p,d,v)),y=a}else{const _=t;S=Ve(_.length>1?_(f,{attrs:a,slots:o,emit:c}):_(f,null)),y=t.props?a:Og(a)}}catch(_){Nr.length=0,_r(_,e,1),S=ye(Pe)}let m=S;if(y&&E!==!1){const _=Object.keys(y),{shapeFlag:b}=m;_.length&&b&7&&(i&&_.some(Ia)&&(y=xg(y,i)),m=At(m,y,!1,!0))}return n.dirs&&(m=At(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&(m.transition=n.transition),S=m,Ys(P),S}function kg(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(fr(s)){if(s.type!==Pe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Og=e=>{let t;for(const n in e)(n==="class"||n==="style"||ss(n))&&((t||(t={}))[n]=e[n]);return t},xg=(e,t)=>{const n={};for(const r in e)(!Ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ng(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zc(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Ii(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zc(r,o,l):!0:!!o;return!1}function Zc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ii(n,i))return!0}return!1}function Wa({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ro=e=>e.__isSuspense;let ko=0;const Lg={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,l){if(e==null)Mg(t,n,r,s,i,o,a,c,l);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Dg(e,t,n,r,s,o,a,c,l)}},hydrate:Fg,normalize:Hg},za=Lg;function Gr(e,t){const n=e.props&&e.props[t];Q(n)&&n()}function Mg(e,t,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),d=e.suspense=_d(e,s,r,t,f,n,i,o,a,c);l(null,d.pendingBranch=e.ssContent,f,null,r,d,i,o),d.deps>0?(Gr(e,"onPending"),Gr(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,i,o),rr(d,e.ssFallback)):d.resolve(!1,!0)}function Dg(e,t,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,p=t.ssFallback,{activeBranch:v,pendingBranch:E,isInFallback:P,isHydrating:S}=f;if(E)f.pendingBranch=d,rt(d,E)?(c(E,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():P&&(S||(c(v,p,n,r,s,null,i,o,a),rr(f,p)))):(f.pendingId=ko++,S?(f.isHydrating=!1,f.activeBranch=E):l(E,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),P?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(v,p,n,r,s,null,i,o,a),rr(f,p))):v&&rt(d,v)?(c(v,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(v&&rt(d,v))c(v,d,n,r,s,f,i,o,a),rr(f,d);else if(Gr(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=ko++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:m}=f;y>0?setTimeout(()=>{f.pendingId===m&&f.fallback(p)},y):y===0&&f.fallback(p)}}function _d(e,t,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:d,um:p,n:v,o:{parentNode:E,remove:P}}=l;let S;const y=Ug(e);y&&t&&t.pendingBranch&&(S=t.pendingId,t.deps++);const m=e.props?gf(e.props.timeout):void 0,_=i,b={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:ko++,timeout:typeof m=="number"?m:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(I=!1,R=!1){const{vnode:N,activeBranch:T,pendingBranch:O,pendingId:V,effects:L,parentComponent:K,container:re}=b;let te=!1;b.isHydrating?b.isHydrating=!1:I||(te=T&&O.transition&&O.transition.mode==="out-in",te&&(T.transition.afterLeave=()=>{V===b.pendingId&&(d(O,re,i===_?v(T):i,0),Io(L))}),T&&(E(T.el)!==b.hiddenContainer&&(i=v(T)),p(T,K,b,!0)),te||d(O,re,i,0)),rr(b,O),b.pendingBranch=null,b.isInFallback=!1;let H=b.parent,Z=!1;for(;H;){if(H.pendingBranch){H.effects.push(...L),Z=!0;break}H=H.parent}!Z&&!te&&Io(L),b.effects=[],y&&t&&t.pendingBranch&&S===t.pendingId&&(t.deps--,t.deps===0&&!R&&t.resolve()),Gr(N,"onResolve")},fallback(I){if(!b.pendingBranch)return;const{vnode:R,activeBranch:N,parentComponent:T,container:O,namespace:V}=b;Gr(R,"onFallback");const L=v(N),K=()=>{b.isInFallback&&(f(null,I,O,L,T,null,V,a,c),rr(b,I))},re=I.transition&&I.transition.mode==="out-in";re&&(N.transition.afterLeave=K),b.isInFallback=!0,p(N,T,null,!0),re||K()},move(I,R,N){b.activeBranch&&d(b.activeBranch,I,R,N),b.container=I},next(){return b.activeBranch&&v(b.activeBranch)},registerDep(I,R,N){const T=!!b.pendingBranch;T&&b.deps++;const O=I.vnode.el;I.asyncDep.catch(V=>{_r(V,I,0)}).then(V=>{if(I.isUnmounted||b.isUnmounted||b.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:L}=I;xo(I,V,!1),O&&(L.el=O);const K=!O&&I.subTree.el;R(I,L,E(O||I.subTree.el),O?null:v(I.subTree),b,o,N),K&&P(K),Wa(I,L.el),T&&--b.deps===0&&b.resolve()})},unmount(I,R){b.isUnmounted=!0,b.activeBranch&&p(b.activeBranch,n,I,R),b.pendingBranch&&p(b.pendingBranch,n,I,R)}};return b}function Fg(e,t,n,r,s,i,o,a,c){const l=t.suspense=_d(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Hg(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=el(r?n.default:n),e.ssFallback=r?el(n.fallback):ye(Pe)}function el(e){let t;if(Q(e)){const n=ur&&e._c;n&&(e._d=!1,nt()),e=e(),n&&(e._d=!0,t=He,bd())}return J(e)&&(e=kg(e)),e=Ve(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function vd(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):Io(e)}function rr(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Wa(r,s))}function Ug(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Ne=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),Nr=[];let He=null;function nt(e=!1){Nr.push(He=e?null:[])}function bd(){Nr.pop(),He=Nr[Nr.length-1]||null}let ur=1;function tl(e){ur+=e,e<0&&He&&(He.hasOnce=!0)}function wd(e){return e.dynamicChildren=ur>0?He||Xn:null,bd(),ur>0&&He&&He.push(e),e}function jg(e,t,n,r,s,i){return wd(Id(e,t,n,r,s,i,!0))}function vt(e,t,n,r,s){return wd(ye(e,t,n,r,s,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function rt(e,t){return e.type===t.type&&e.key===t.key}const Ed=({key:e})=>e??null,Ms=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||we(e)||Q(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function Id(e,t=null,n=null,r=0,s=null,i=e===Ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ed(t),ref:t&&Ms(t),scopeId:wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return a?(Ka(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),ur>0&&!o&&He&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&He.push(c),c}const ye=$g;function $g(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Qf)&&(e=Pe),fr(e)){const a=At(e,t,!0);return n&&Ka(a,n),ur>0&&!i&&He&&(a.shapeFlag&6?He[He.indexOf(e)]=a:He.push(a)),a.patchFlag=-2,a}if(Yg(e)&&(e=e.__vccOpts),t){t=Sd(t);let{class:a,style:c}=t;a&&!_e(a)&&(t.class=_i(a)),fe(c)&&(Lf(c)&&!J(c)&&(c=Ae({},c)),t.style=yi(c))}const o=_e(e)?1:Ro(e)?128:_g(e)?64:fe(e)?4:Q(e)?2:0;return Id(e,t,n,r,s,o,i,!0)}function Sd(e){return e?Lf(e)||id(e)?Ae({},e):e:null}function At(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Cd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ed(l),ref:t&&t.ref?n&&i?J(i)?i.concat(Ms(t)):[i,Ms(t)]:Ms(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Kr(u,c.clone(u)),u}function Td(e=" ",t=0){return ye(kn,null,e,t)}function BT(e,t){const n=ye(xr,null,e);return n.staticCount=t,n}function VT(e="",t=!1){return t?(nt(),vt(Pe,null,e)):ye(Pe,null,e)}function Ve(e){return e==null||typeof e=="boolean"?ye(Pe):J(e)?ye(Ne,null,e.slice()):typeof e=="object"?zt(e):ye(kn,null,String(e))}function zt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function Ka(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ka(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!id(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Td(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=_i([t.class,r.class]));else if(s==="style")t.style=yi([t.style,r.style]);else if(ss(s)){const i=t[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Fe(e,t,n,r=null){Je(e,t,7,[n,r])}const Bg=nd();let Vg=0;function Wg(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Bg,i={uid:Vg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(r,s),emitsOptions:yd(r,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Rg.bind(null,i),e.ce&&e.ce(i),i}let Ie=null;const Ga=()=>Ie||Se;let Zs,Oo;{const e=yf(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zs=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Oo=t("__VUE_SSR_SETTERS__",n=>cs=n)}const as=e=>{const t=Ie;return Zs(e),e.scope.on(),()=>{e.scope.off(),Zs(t)}},nl=()=>{Ie&&Ie.scope.off(),Zs(null)};function Ad(e){return e.vnode.shapeFlag&4}let cs=!1;function zg(e,t=!1,n=!1){t&&Oo(t);const{props:r,children:s}=e.vnode,i=Ad(e);fg(e,r,i,t),mg(e,s,n);const o=i?Kg(e,t):void 0;return t&&Oo(!1),o}function Kg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,rg);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?qg(e):null,i=as(e);pn();const o=nn(r,e,0,[e.props,s]);if(mn(),i(),df(o)){if(o.then(nl,nl),t)return o.then(a=>{xo(e,a,t)}).catch(a=>{_r(a,e,0)});e.asyncDep=o}else xo(e,o,t)}else Pd(e,t)}function xo(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Hf(t)),Pd(e,n)}let rl;function Pd(e,t,n){const r=e.type;if(!e.render){if(!t&&rl&&!r.render){const s=r.template||ja(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ae(Ae({isCustomElement:i,delimiters:a},o),c);r.render=rl(s,l)}}e.render=r.render||Ye}{const s=as(e);pn();try{sg(e)}finally{mn(),s()}}}const Gg={get(e,t){return Ue(e,"get",""),e[t]}};function qg(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Gg),slots:e.slots,emit:e.emit,expose:t}}function Si(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hf(La(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Or)return Or[n](e)},has(t,n){return n in t||n in Or}})):e.proxy}function No(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Yg(e){return Q(e)&&"__vccOpts"in e}const Ee=(e,t)=>xm(e,t,cs);function Le(e,t,n){const r=arguments.length;return r===2?fe(t)&&!J(t)?fr(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),ye(e,t,n))}const Rd="3.4.33";/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Jg="http://www.w3.org/2000/svg",Xg="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,sl=_t&&_t.createElement("template"),Qg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?_t.createElementNS(Jg,e):t==="mathml"?_t.createElementNS(Xg,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{sl.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=sl.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ft="transition",Ir="animation",qr=Symbol("_vtc"),Ti=(e,{slots:t})=>Le(zm,Zg(e),t);Ti.displayName="Transition";const kd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ti.props=Ae({},Vf,kd);const bn=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},il=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function Zg(e){const t={};for(const L in e)L in kd||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=ey(s),E=v&&v[0],P=v&&v[1],{onBeforeEnter:S,onEnter:y,onEnterCancelled:m,onLeave:_,onLeaveCancelled:b,onBeforeAppear:I=S,onAppear:R=y,onAppearCancelled:N=m}=t,T=(L,K,re)=>{wn(L,K?u:a),wn(L,K?l:o),re&&re()},O=(L,K)=>{L._isLeaving=!1,wn(L,f),wn(L,p),wn(L,d),K&&K()},V=L=>(K,re)=>{const te=L?R:y,H=()=>T(K,L,re);bn(te,[K,H]),ol(()=>{wn(K,L?c:i),Ht(K,L?u:a),il(te)||al(K,r,E,H)})};return Ae(t,{onBeforeEnter(L){bn(S,[L]),Ht(L,i),Ht(L,o)},onBeforeAppear(L){bn(I,[L]),Ht(L,c),Ht(L,l)},onEnter:V(!1),onAppear:V(!0),onLeave(L,K){L._isLeaving=!0;const re=()=>O(L,K);Ht(L,f),Ht(L,d),ry(),ol(()=>{L._isLeaving&&(wn(L,f),Ht(L,p),il(_)||al(L,r,P,re))}),bn(_,[L,re])},onEnterCancelled(L){T(L,!1),bn(m,[L])},onAppearCancelled(L){T(L,!0),bn(N,[L])},onLeaveCancelled(L){O(L),bn(b,[L])}})}function ey(e){if(e==null)return null;if(fe(e))return[qi(e.enter),qi(e.leave)];{const t=qi(e);return[t,t]}}function qi(e){return gf(e)}function Ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qr]||(e[qr]=new Set)).add(t)}function wn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[qr];n&&(n.delete(t),n.size||(e[qr]=void 0))}function ol(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ty=0;function al(e,t,n,r){const s=e._endId=++ty,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ny(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=p=>{p.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function ny(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${Ft}Delay`),i=r(`${Ft}Duration`),o=cl(s,i),a=r(`${Ir}Delay`),c=r(`${Ir}Duration`),l=cl(a,c);let u=null,f=0,d=0;t===Ft?o>0&&(u=Ft,f=o,d=i.length):t===Ir?l>0&&(u=Ir,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Ft:Ir:null,d=u?u===Ft?i.length:c.length:0);const p=u===Ft&&/\b(transform|all)(,|$)/.test(r(`${Ft}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function cl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ll(n)+ll(e[r])))}function ll(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ry(){return document.body.offsetHeight}function sy(e,t,n){const r=e[qr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ul=Symbol("_vod"),iy=Symbol("_vsh"),oy=Symbol(""),ay=/(^|;)\s*display\s*:/;function cy(e,t,n){const r=e.style,s=_e(n);let i=!1;if(n&&!s){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ds(r,a,"")}else for(const o in t)n[o]==null&&Ds(r,o,"");for(const o in n)o==="display"&&(i=!0),Ds(r,o,n[o])}else if(s){if(t!==n){const o=r[oy];o&&(n+=";"+o),r.cssText=n,i=ay.test(n)}}else t&&e.removeAttribute("style");ul in e&&(e[ul]=i?r.display:"",e[iy]&&(r.display="none"))}const fl=/\s*!important$/;function Ds(e,t,n){if(J(n))n.forEach(r=>Ds(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ly(e,t);fl.test(n)?e.setProperty(Fn(r),n.replace(fl,""),"important"):e[r]=n}}const dl=["Webkit","Moz","ms"],Yi={};function ly(e,t){const n=Yi[t];if(n)return n;let r=it(t);if(r!=="filter"&&r in e)return Yi[t]=r;r=gi(r);for(let s=0;s<dl.length;s++){const i=dl[s]+r;if(i in e)return Yi[t]=i}return t}const hl="http://www.w3.org/1999/xlink";function pl(e,t,n,r,s,i=cm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hl,t.slice(6,t.length)):e.setAttributeNS(hl,t,n):n==null||i&&!_f(n)?e.removeAttribute(t):e.setAttribute(t,i?"":hn(n)?String(n):n)}function uy(e,t,n,r){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=_f(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function Kn(e,t,n,r){e.addEventListener(t,n,r)}function fy(e,t,n,r){e.removeEventListener(t,n,r)}const ml=Symbol("_vei");function dy(e,t,n,r,s=null){const i=e[ml]||(e[ml]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=hy(t);if(r){const l=i[t]=gy(r,s);Kn(e,a,l,c)}else o&&(fy(e,a,o,c),i[t]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function hy(e){let t;if(gl.test(e)){t={};let r;for(;r=e.match(gl);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let Ji=0;const py=Promise.resolve(),my=()=>Ji||(py.then(()=>Ji=0),Ji=Date.now());function gy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(yy(r,n.value),t,5,[r])};return n.value=e,n.attached=my(),n}function yy(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const yl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_y=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?sy(e,r,o):t==="style"?cy(e,n,r):ss(t)?Ia(t)||dy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vy(e,t,r,o))?(uy(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&pl(e,t,r,o,i,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pl(e,t,r,o))};function vy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&yl(t)&&Q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yl(t)&&_e(n)?!1:t in e}const _l=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>er(t,n):t};function by(e){e.target.composing=!0}function vl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xi=Symbol("_assign"),WT={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Xi]=_l(s);const i=r||s.props&&s.props.type==="number";Kn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=_o(a)),e[Xi](a)}),n&&Kn(e,"change",()=>{e.value=e.value.trim()}),t||(Kn(e,"compositionstart",by),Kn(e,"compositionend",vl),Kn(e,"change",vl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Xi]=_l(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?_o(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},wy=["ctrl","shift","alt","meta"],Ey={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wy.some(n=>e[`${n}Key`]&&!t.includes(n))},zT=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Ey[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Od=Ae({patchProp:_y},Qg);let Lr,bl=!1;function Iy(){return Lr||(Lr=Eg(Od))}function Sy(){return Lr=bl?Lr:Ig(Od),bl=!0,Lr}const Ty=(...e)=>{const t=Iy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Nd(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,xd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},Cy=(...e)=>{const t=Sy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Nd(r);if(s)return n(s,!0,xd(s))},t};function xd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nd(e){return _e(e)?document.querySelector(e):e}const Ay=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Py=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ry=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function ky(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Oy(e);return}return t}function Oy(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ei(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Ry.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Ay.test(e)||Py.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,ky)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const xy=/#/g,Ny=/&/g,Ly=/\//g,My=/=/g,qa=/\+/g,Dy=/%5e/gi,Fy=/%60/gi,Hy=/%7c/gi,Uy=/%20/gi;function jy(e){return encodeURI(""+e).replace(Hy,"|")}function Lo(e){return jy(typeof e=="string"?e:JSON.stringify(e)).replace(qa,"%2B").replace(Uy,"+").replace(xy,"%23").replace(Ny,"%26").replace(Fy,"`").replace(Dy,"^").replace(Ly,"%2F")}function Qi(e){return Lo(e).replace(My,"%3D")}function ti(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function $y(e){return ti(e.replace(qa," "))}function By(e){return ti(e.replace(qa," "))}function Vy(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=$y(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=By(r[2]||"");t[s]===void 0?t[s]=i:Array.isArray(t[s])?t[s].push(i):t[s]=[t[s],i]}return t}function Wy(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${Qi(e)}=${Lo(n)}`).join("&"):`${Qi(e)}=${Lo(t)}`:Qi(e)}function zy(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>Wy(t,e[t])).filter(Boolean).join("&")}const Ky=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Gy=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,qy=/^([/\\]\s*){2,}[^/\\]/,Yy=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Jy=/\/$|\/\?|\/#/,Xy=/^\.?\//;function Un(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?Ky.test(e):Gy.test(e)||(t.acceptRelative?qy.test(e):!1)}function Qy(e){return!!e&&Yy.test(e)}function Mo(e="",t){return t?Jy.test(e):e.endsWith("/")}function Ya(e="",t){if(!t)return(Mo(e)?e.slice(0,-1):e)||"/";if(!Mo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");s>=0&&(n=e.slice(0,s),r=e.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Do(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(Mo(e,!0))return e||"/";let n=e,r="";const s=e.indexOf("#");if(s>=0&&(n=e.slice(0,s),r=e.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function Zy(e=""){return e.startsWith("/")}function wl(e=""){return Zy(e)?e:"/"+e}function e_(e,t){if(Md(t)||Un(e))return e;const n=Ya(t);return e.startsWith(n)?e:Ja(n,e)}function El(e,t){if(Md(t))return e;const n=Ya(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function Ld(e,t){const n=r_(e),r={...Vy(n.search),...t};return n.search=zy(r),s_(n)}function Md(e){return!e||e==="/"}function t_(e){return e&&e!=="/"}function Ja(e,...t){let n=e||"";for(const r of t.filter(s=>t_(s)))if(n){const s=r.replace(Xy,"");n=Do(n)+s}else n=r;return n}function Dd(...e){var o,a,c,l;const t=/\/(?!\/)/,n=e.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[f,d]of u.split(t).entries())if(!(!d||d===".")){if(d===".."){if(r.length===1&&Un(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+d;continue}r.push(d),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(l=n[n.length-1])!=null&&l.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function n_(e,t,n={}){return n.trailingSlash||(e=Do(e),t=Do(t)),n.leadingSlash||(e=wl(e),t=wl(t)),n.encoding||(e=ti(e),t=ti(t)),e===t}const Fd=Symbol.for("ufo:protocolRelative");function r_(e="",t){const n=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Un(e,{acceptRelative:!0}))return Il(e);const[,r="",s,i=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:l,hash:u}=Il(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:l,hash:u,[Fd]:!r}}function Il(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function s_(e){const t=e.pathname||"",n=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",r=e.hash||"",s=e.auth?e.auth+"@":"",i=e.host||"";return(e.protocol||e[Fd]?(e.protocol||"")+"//":"")+s+i+t+n+r}class i_ extends Error{constructor(t,n){super(t,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function o_(e){var c,l,u,f,d;const t=((c=e.error)==null?void 0:c.message)||((l=e.error)==null?void 0:l.toString())||"",n=((u=e.request)==null?void 0:u.method)||((f=e.options)==null?void 0:f.method)||"GET",r=((d=e.request)==null?void 0:d.url)||String(e.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",o=`${s}: ${i}${t?` ${t}`:""}`,a=new i_(o,e.error?{cause:e.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(a,p,{get(){return e[p]}});for(const[p,v]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,p,{get(){return e.response&&e.response[v]}});return a}const a_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Sl(e="GET"){return a_.has(e.toUpperCase())}function c_(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const l_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),u_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function f_(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return u_.test(t)?"json":l_.has(t)||t.startsWith("text/")?"text":"blob"}function d_(e,t,n=globalThis.Headers){const r={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[s,i]of new n((e==null?void 0:e.headers)||{}))r.headers.set(s,i)}return r}const h_=new Set([408,409,425,429,500,502,503,504]),p_=new Set([101,204,205,304]);function Hd(e={}){const{fetch:t=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=e;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Sl(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):h_.has(f))){const d=a.options.retryDelay||0;return d>0&&await new Promise(p=>setTimeout(p,d)),i(a.request,{...a.options,retry:u-1})}}const l=o_(a);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(c,l={}){var p;const u={request:c,options:d_(l,e.defaults,n),response:void 0,error:void 0};u.options.method=(p=u.options.method)==null?void 0:p.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=e_(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=Ld(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Sl(u.options.method)&&(c_(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const v=new r;f=setTimeout(()=>v.abort(),u.options.timeout),u.options.signal=v.signal}try{u.response=await t(u.request,u.options)}catch(v){return u.error=v,u.options.onRequestError&&await u.options.onRequestError(u),await s(u)}finally{f&&clearTimeout(f)}if(u.response.body&&!p_.has(u.response.status)&&u.options.method!=="HEAD"){const v=(u.options.parseResponse?"json":u.options.responseType)||f_(u.response.headers.get("content-type")||"");switch(v){case"json":{const E=await u.response.text(),P=u.options.parseResponse||ei;u.response._data=P(E);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[v]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await s(u)):u.response},o=async function(c,l){return(await i(c,l))._data};return o.raw=i,o.native=(...a)=>t(...a),o.create=(a={})=>Hd({...e,defaults:{...e.defaults,...a}}),o}const Xa=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),m_=Xa.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),g_=Xa.Headers,y_=Xa.AbortController,__=Hd({fetch:m_,Headers:g_,AbortController:y_}),v_=__,b_=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},ni=b_().app,w_=()=>ni.baseURL,E_=()=>ni.buildAssetsDir,Qa=(...e)=>Dd(Ud(),E_(),...e),Ud=(...e)=>{const t=ni.cdnURL||ni.baseURL;return e.length?Dd(t,...e):t};globalThis.__buildAssetsURL=Qa,globalThis.__publicAssetsURL=Ud;globalThis.$fetch||(globalThis.$fetch=v_.create({baseURL:w_()}));function Fo(e,t={},n){for(const r in e){const s=e[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Fo(s,t,i):typeof s=="function"&&(t[i]=s)}return t}const I_={run:e=>e()},S_=()=>I_,jd=typeof console.createTask<"u"?console.createTask:S_;function T_(e,t){const n=t.shift(),r=jd(n);return e.reduce((s,i)=>s.then(()=>r.run(()=>i(...t))),Promise.resolve())}function C_(e,t){const n=t.shift(),r=jd(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function Zi(e,t){for(const n of[...e])n(t)}class A_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Fo(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=Fo(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(T_,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(C_,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Zi(this._before,s);const i=t(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Zi(this._after,s)}):(this._after&&s&&Zi(this._after,s),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function $d(){return new A_}function P_(e={}){let t,n=!1;const r=o=>{if(t&&t!==o)throw new Error("Context conflict")};let s;if(e.asyncContext){const o=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&t===void 0){const o=s.getStore();if(o!==void 0)return o}return t};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),t=o,n=!0},unset:()=>{t=void 0,n=!1},call:(o,a)=>{r(o),t=o;try{return s?s.run(o,a):a()}finally{n||(t=void 0)}},async callAsync(o,a){t=o;const c=()=>{t=o},l=()=>t===o?c:void 0;Ho.add(l);try{const u=s?s.run(o,a):a();return n||(t=void 0),await u}finally{Ho.delete(l)}}}}function R_(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=P_({...e,...r})),t[n],t[n]}}}const ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Tl="__unctx__",k_=ri[Tl]||(ri[Tl]=R_()),O_=(e,t={})=>k_.get(e,t),Cl="__unctx_async_handlers__",Ho=ri[Cl]||(ri[Cl]=new Set);function Yr(e){const t=[];for(const s of Ho){const i=s();i&&t.push(i)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const x_=!1,Uo=!1,N_=!1,KT={componentName:"NuxtLink"},L_=null,M_="#__nuxt",Bd="nuxt-app",Al=36e5;function Vd(e=Bd){return O_(e,{asyncContext:!1})}const D_="__nuxt_plugin";function F_(e){let t=0;const n={_name:Bd,_scope:Ca(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:wt({data:wt({}),state:gn({}),once:new Set,_errors:wt({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Aa()?n._scope.run(()=>Pl(n,s)):Pl(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:wt({}),_payloadRevivers:{},...e};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=$d(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;ks(n,o,i),ks(n.vueApp.config.globalProperties,o,i)},ks(n.vueApp,"$nuxt",n),ks(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||be;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function H_(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function U_(e,t){if(typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function j_(e,t){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var u;const l=((u=c.dependsOn)==null?void 0:u.filter(f=>t.some(d=>d._name===f)&&!n.includes(f)))??[];if(l.length>0)r.push([new Set(l),c]);else{const f=U_(e,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([d,p])=>{d.has(c._name)&&(d.delete(c._name),d.size===0&&(o++,await a(p)))})))});c.parallel?s.push(f.catch(d=>i.push(d))):await f}}for(const c of t)H_(e,c);for(const c of t)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function Qe(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[D_]:!0,_name:t})}function Pl(e,t,n){const r=()=>t();return Vd(e._name).set(e),e.vueApp.runWithContext(r)}function $_(e){var n;let t;return $a()&&(t=(n=Ga())==null?void 0:n.appContext.app.$nuxt),t=t||Vd(e).tryUse(),t||null}function be(e){const t=$_(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function ls(e){return be().$config}function ks(e,t,n){Object.defineProperty(e,t,{get:()=>n})}function B_(e,t){return{ctx:{table:e},matchAll:n=>zd(n,e)}}function Wd(e){const t={};for(const n in e)t[n]=n==="dynamic"?new Map(Object.entries(e[n]).map(([r,s])=>[r,Wd(s)])):new Map(Object.entries(e[n]));return t}function V_(e){return B_(Wd(e))}function zd(e,t,n){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const r=[];for(const[i,o]of Rl(t.wildcard))(e===i||e.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Rl(t.dynamic))if(e.startsWith(i+"/")){const a="/"+e.slice(i.length).split("/").splice(2).join("/");r.push(...zd(a,o))}const s=t.static.get(e);return s&&r.push(s),r.filter(Boolean)}function Rl(e){return[...e.entries()].sort((t,n)=>t[0].length-n[0].length)}function eo(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function jo(e,t,n=".",r){if(!eo(t))return jo(e,{},n,r);const s=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:eo(o)&&eo(s[i])?s[i]=jo(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function W_(e){return(...t)=>t.reduce((n,r)=>jo(n,r,"",e),{})}const Kd=W_();function z_(e,t){try{return t in e}catch{return!1}}var K_=Object.defineProperty,G_=(e,t,n)=>t in e?K_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>(G_(e,typeof t!="symbol"?t+"":t,n),n);class $o extends Error{constructor(t,n={}){super(t,n),En(this,"statusCode",500),En(this,"fatal",!1),En(this,"unhandled",!1),En(this,"statusMessage"),En(this,"data"),En(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const t={message:this.message,statusCode:Vo(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Gd(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}En($o,"__h3_error__",!0);function Bo(e){if(typeof e=="string")return new $o(e);if(q_(e))return e;const t=new $o(e.message??e.statusMessage??"",{cause:e.cause||e});if(z_(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Vo(e.statusCode,t.statusCode):e.status&&(t.statusCode=Vo(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;Gd(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function q_(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const Y_=/[^\u0009\u0020-\u007E]/g;function Gd(e=""){return e.replace(Y_,"")}function Vo(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const qd=Symbol("layout-meta"),us=Symbol("route"),Xe=()=>{var e;return(e=be())==null?void 0:e.$router},Za=()=>$a()?ke(us,be()._route):be()._route;const J_=()=>{try{if(be()._processingMiddleware)return!0}catch{return!1}return!1},GT=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:"path"in e?X_(e):Xe().resolve(e).href;if(t!=null&&t.open){const{target:c="_blank",windowFeatures:l={}}=t.open,u=Object.entries(l).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,c,u),Promise.resolve()}const r=Un(n,{acceptRelative:!0}),s=(t==null?void 0:t.external)||r;if(s){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Qy(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=J_();if(!s&&i)return e;const o=Xe(),a=be();return s?(a._scope.stop(),t!=null&&t.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)};function X_(e){return Ld(e.path||"",e.query||{})+(e.hash||"")}const Yd="__nuxt_error",Ci=()=>Hm(be().payload,"error"),qn=e=>{const t=Ai(e);try{const n=be(),r=Ci();n.hooks.callHook("app:error",t),r.value=r.value||t}catch{throw t}return t},Q_=async(e={})=>{const t=be(),n=Ci();t.callHook("app:error:cleared",e),e.redirect&&await Xe().replace(e.redirect),n.value=L_},Z_=e=>!!e&&typeof e=="object"&&Yd in e,Ai=e=>{const t=Bo(e);return Object.defineProperty(t,Yd,{value:!0,configurable:!1,writable:!1}),t},ev=-1,tv=-2,nv=-3,rv=-4,sv=-5,iv=-6;function ov(e,t){return av(JSON.parse(e),t)}function av(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(i,o=!1){if(i===ev)return;if(i===nv)return NaN;if(i===rv)return 1/0;if(i===sv)return-1/0;if(i===iv)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=t==null?void 0:t[c];if(l)return r[i]=l(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let p=1;p<a.length;p+=1)u.add(s(a[p]));break;case"Map":const f=new Map;r[i]=f;for(let p=1;p<a.length;p+=2)f.set(s(a[p]),s(a[p+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let p=1;p<a.length;p+=2)d[a[p]]=s(a[p+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==tv&&(c[l]=s(u))}}else{const c={};r[i]=c;for(const l in a){const u=a[l];c[l]=s(u)}}return r[i]}return s(0)}function cv(e){return Array.isArray(e)?e:[e]}const lv=["title","titleTemplate","script","style","noscript"],Fs=["base","meta","link","style","script","noscript"],uv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],fv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Jd=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],dv=typeof window<"u";function ec(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function kl(e){return e._h||ec(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Xd(e,t){const{props:n,tag:r}=e;if(fv.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return`${r}:${i}:${o}`}return!1}function Ol(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function hv(e,t,n){const r={tag:e,props:await Qd(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(e)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(e))};return Jd.forEach(s=>{const i=typeof r.props[s]<"u"?r.props[s]:n[s];typeof i<"u"&&((!["innerHTML","textContent","children"].includes(s)||lv.includes(r.tag))&&(r[s==="children"?"innerHTML":s]=i),delete r.props[s])}),r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function pv(e,t){var r;const n=e==="class"?" ":";";return typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,s])=>s).map(([s,i])=>e==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(t)?t.join(n):t))==null?void 0:r.split(n).filter(s=>s.trim()).filter(Boolean).join(n)}async function Qd(e,t){for(const n of Object.keys(e)){if(["class","style"].includes(n)){e[n]=pv(n,e[n]);continue}if(e[n]instanceof Promise&&(e[n]=await e[n]),!t&&!Jd.includes(n)){const r=String(e[n]),s=n.startsWith("data-");r==="true"||r===""?e[n]=s?"true":!0:e[n]||(s&&r==="false"?e[n]="false":delete e[n])}}return e}const mv=10;async function gv(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&uv.includes(n)).forEach(([n,r])=>{const s=cv(r);t.push(...s.map(i=>hv(n,i,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,e.mode&&(n._m=e.mode),n._p=(e._i<<mv)+r,n))}const xl={base:-10,title:10},Nl={critical:-80,high:-10,low:20};function si(e){let t=100;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props["http-equiv"]==="content-security-policy"&&(t=-30),e.props.charset&&(t=-20),e.props.name==="viewport"&&(t=-15)):e.tag==="link"&&e.props.rel==="preconnect"?t=20:e.tag in xl&&(t=xl[e.tag]),typeof n=="string"&&n in Nl?t+Nl[n]:t)}const yv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Ll=["onload","onerror","onabort","onprogress","onloadstart"],Ut="%separator";function Hs(e,t,n){if(typeof e!="string"||!e.includes("%"))return e;function r(o){let a;return["s","pageTitle"].includes(o)?a=t.pageTitle:o.includes(".")?a=o.split(".").reduce((c,l)=>c&&c[l]||void 0,t):a=t[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=r(o.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())}),e.includes(Ut)&&(e.endsWith(Ut)&&(e=e.slice(0,-Ut.length).trim()),e.startsWith(Ut)&&(e=e.slice(Ut.length).trim()),e=e.replace(new RegExp(`\\${Ut}\\s*\\${Ut}`,"g"),Ut),e=Hs(e,{separator:n},n)),e}async function Zd(e,t={}){var u;const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const r={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await e.resolveTags()).map(f=>({tag:f,id:Fs.includes(f.tag)?kl(f):f.tag,shouldRender:!0}));let i=e._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const d=(u=n[f])==null?void 0:u.children,p=[];for(const v of[...d].filter(E=>Fs.includes(E.tagName.toLowerCase()))){const E={tag:v.tagName.toLowerCase(),props:await Qd(v.getAttributeNames().reduce((y,m)=>({...y,[m]:v.getAttribute(m)}),{})),innerHTML:v.innerHTML};let P=1,S=Xd(E);for(;S&&p.find(y=>y._d===S);)S=`${S}:${P++}`;E._d=S||void 0,p.push(E),i.elMap[v.getAttribute("data-hid")||kl(E)]=v}}}i.pendingSideEffects={...i.sideEffects||{}},i.sideEffects={};function o(f,d,p){const v=`${f}:${d}`;i.sideEffects[v]=p,delete i.pendingSideEffects[v]}function a({id:f,$el:d,tag:p}){const v=p.tag.endsWith("Attrs");i.elMap[f]=d,v||(["textContent","innerHTML"].forEach(E=>{p[E]&&p[E]!==d[E]&&(d[E]=p[E])}),o(f,"el",()=>{var E;(E=i.elMap[f])==null||E.remove(),delete i.elMap[f]}));for(const[E,P]of Object.entries(p._eventHandlers||{}))d.getAttribute(`data-${E}`)!==""&&((p.tag==="bodyAttrs"?n.defaultView:d).addEventListener(E.replace("on",""),P.bind(d)),d.setAttribute(`data-${E}`,""));Object.entries(p.props).forEach(([E,P])=>{const S=`attr:${E}`;if(E==="class")for(const y of(P||"").split(" ").filter(Boolean))v&&o(f,`${S}:${y}`,()=>d.classList.remove(y)),!d.classList.contains(y)&&d.classList.add(y);else if(E==="style")for(const y of(P||"").split(";").filter(Boolean)){const[m,..._]=y.split(":").map(b=>b.trim());o(f,`${S}:${m}`,()=>{d.style.removeProperty(m)}),d.style.setProperty(m,_.join(":"))}else d.getAttribute(E)!==P&&d.setAttribute(E,P===!0?"":String(P)),v&&o(f,S,()=>d.removeAttribute(E))})}const c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:d,shouldRender:p,id:v}=f;if(p){if(d.tag==="title"){n.title=d.textContent;continue}f.$el=f.$el||i.elMap[v],f.$el?a(f):Fs.includes(d.tag)&&c.push(f)}}for(const f of c){const d=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),l[d]=l[d]||n.createDocumentFragment(),l[d].appendChild(f.$el)}for(const f of s)await e.hooks.callHook("dom:renderTag",f,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),Object.values(i.pendingSideEffects).forEach(f=>f()),e._dom=i,e.dirty=!1,await e.hooks.callHook("dom:rendered",{renders:s})}async function _v(e,t={}){const n=t.delayFn||(r=>setTimeout(r,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(r=>n(async()=>{await Zd(e,t),delete e._domUpdatePromise,r()}))}function vv(e){return t=>{var r,s;const n=((s=(r=t.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(i){_v(i,e)}}}}}const bv=["templateParams","htmlAttrs","bodyAttrs"],wv={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=Xd(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=t[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&bv.includes(r.tag)&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{c[l]&&(r.props[l]?(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`):r.props[l]=c[l])}),t[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}else if(si(r)>si(i))return}const o=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Fs.includes(r.tag)&&o===0){delete t[s];return}t[s]=r});const n=[];Object.values(t).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),e.tags=n,e.tags=e.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},Ev={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{t[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Iv=["script","link","bodyAttrs"],Sv=e=>({hooks:{"tags:resolve":function(t){for(const n of t.tags.filter(r=>Iv.includes(r.tag)))Object.entries(n.props).forEach(([r,s])=>{r.startsWith("on")&&typeof s=="function"&&(e.ssr&&Ll.includes(r)?n.props[r]=`this.dataset.${r}fired = true`:delete n.props[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}),e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||ec(n.props.src||n.props.href))},"dom:renderTag":function({$el:t,tag:n}){var r,s;for(const i of Object.keys((t==null?void 0:t.dataset)||{}).filter(o=>Ll.some(a=>`${a}fired`===o))){const o=i.replace("fired","");(s=(r=n._eventHandlers)==null?void 0:r[o])==null||s.call(t,new Event(o.replace("on","")))}}}}),Tv=["link","style","script","noscript"],Cv={hooks:{"tag:normalise":({tag:e})=>{e.key&&Tv.includes(e.tag)&&(e.props["data-hid"]=e._h=ec(e.key))}}},Av={hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of yv)for(const s of e.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=t(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>si(n)-si(r))}}},Pv={meta:"content",link:"href",htmlAttrs:"lang"},Rv=e=>({hooks:{"tags:resolve":t=>{var a;const{tags:n}=t,r=(a=n.find(c=>c.tag==="title"))==null?void 0:a.textContent,s=n.findIndex(c=>c.tag==="templateParams"),i=s!==-1?n[s].props:{},o=i.separator||"|";delete i.separator,i.pageTitle=Hs(i.pageTitle||r||"",i,o);for(const c of n.filter(l=>l.processTemplateParams!==!1)){const l=Pv[c.tag];l&&typeof c.props[l]=="string"?c.props[l]=Hs(c.props[l],i,o):(c.processTemplateParams===!0||["titleTemplate","title"].includes(c.tag))&&["innerHTML","textContent"].forEach(u=>{typeof c[u]=="string"&&(c[u]=Hs(c[u],i,o))})}e._templateParams=i,e._separator=o,t.tags=n.filter(c=>c.tag!=="templateParams")}}}),kv={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const r=t.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Ol(t[n].textContent,t[r].textContent);s!==null?t[r].textContent=s||t[r].textContent:delete t[r]}else if(n!==-1){const s=Ol(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}},Ov={hooks:{"tags:afterResolve":function(e){for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let eh;function xv(e={}){const t=Nv(e);return t.use(vv()),eh=t}function Ml(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Nv(e={}){const t=$d();t.addHooks(e.hooks||{}),e.document=e.document||(dv?document:void 0);const n=!e.document,r=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return i},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),Ml(l.mode,n)&&t.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:s++,input:c,...l};return Ml(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(f=>f._i!==u._i),t.callHook("entries:updated",a),r()},patch(f){i=i.map(d=>(d._i===u._i&&(d.input=u.input=f),d)),r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await t.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const f of await gv(l)){const d={tag:f,entry:l,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",d),c.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[wv,Ev,Sv,Cv,Av,Rv,kv,Ov,...(e==null?void 0:e.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function Lv(){return eh}const Mv=Rd.startsWith("3");function Dv(e){return typeof e=="function"?e():ue(e)}function Wo(e,t=""){if(e instanceof Promise)return e;const n=Dv(e);return!e||!n?n:Array.isArray(n)?n.map(r=>Wo(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,ue(s)]:[r,Wo(s,r)])):n}const Fv={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Wo(t.input)}}},th="usehead";function Hv(e){return{install(n){Mv&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(th,e))}}.install}function Uv(e={}){e.domDelayFn=e.domDelayFn||(n=>Hn(()=>setTimeout(()=>n(),0)));const t=xv(e);return t.use(Fv),t.install=Hv(t),t}const zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ko="__unhead_injection_handler__";function jv(e){zo[Ko]=e}function qT(){if(Ko in zo)return zo[Ko]();const e=ke(th);return e||Lv()}let Us,js;function $v(){return Us=$fetch(Qa(`builds/meta/${ls().app.buildId}.json`),{responseType:"json"}),Us.then(e=>{js=V_(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),Us}function Pi(){return Us||$v()}async function tc(e){if(await Pi(),!js)return console.error("[nuxt] Error creating app manifest matcher.",js),{};try{return Kd({},...js.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function Dl(e,t={}){const n=await Vv(e,t),r=be(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=rh(e).then(i=>i?nh(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const Bv="_payload.json";async function Vv(e,t={}){const n=new URL(e,"http://localhost");if(n.host!=="localhost"||Un(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=ls(),s=t.hash||(t.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await rh(e)?i:r.app.baseURL;return Ja(o,n.pathname,Bv+(s?`?${s}`:""))}async function nh(e){const t=fetch(e).then(n=>n.text().then(sh));try{return await t}catch(n){console.warn("[nuxt] Cannot load payload ",e,n)}return null}async function rh(e=Za().path){if(e=Ya(e),(await Pi()).prerendered.includes(e))return!0;const n=await tc(e);return!!n.prerender&&!n.redirect}let Os=null;async function Wv(){if(Os)return Os;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await sh(e.textContent||""),n=e.dataset.src?await nh(e.dataset.src):void 0;return Os={...t,...n,...window.__NUXT__},Os}async function sh(e){return await ov(e,be()._payloadRevivers)}function zv(e,t){be()._payloadRevivers[e]=t}const Fl={NuxtError:e=>Ai(e),EmptyShallowRef:e=>Vr(e==="_"?void 0:e==="0n"?BigInt(0):ei(e)),EmptyRef:e=>st(e==="_"?void 0:e==="0n"?BigInt(0):ei(e)),ShallowRef:e=>Vr(e),ShallowReactive:e=>wt(e),Ref:e=>st(e),Reactive:e=>gn(e)},Kv=Qe({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const r in Fl)zv(r,Fl[r]);Object.assign(e.payload,([t,n]=Yr(()=>e.runWithContext(Wv)),t=await t,n(),t)),window.__NUXT__=e.payload}}),Gv=[],qv=Qe({name:"nuxt:head",enforce:"pre",setup(e){const t=Uv({plugins:Gv});jv(()=>be().vueApp._context.provides.usehead),e.vueApp.use(t);{let n=!0;const r=async()=>{n=!1,await Zd(t)};t.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||r()}),e.hooks.hook("app:error",r),e.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Gn=typeof document<"u";function Yv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ce=Object.assign;function to(e,t){const n={};for(const r in t){const s=t[r];n[r]=ot(s)?s.map(e):e(s)}return n}const Mr=()=>{},ot=Array.isArray,ih=/#/g,Jv=/&/g,Xv=/\//g,Qv=/=/g,Zv=/\?/g,oh=/\+/g,eb=/%5B/g,tb=/%5D/g,ah=/%5E/g,nb=/%60/g,ch=/%7B/g,rb=/%7C/g,lh=/%7D/g,sb=/%20/g;function nc(e){return encodeURI(""+e).replace(rb,"|").replace(eb,"[").replace(tb,"]")}function ib(e){return nc(e).replace(ch,"{").replace(lh,"}").replace(ah,"^")}function Go(e){return nc(e).replace(oh,"%2B").replace(sb,"+").replace(ih,"%23").replace(Jv,"%26").replace(nb,"`").replace(ch,"{").replace(lh,"}").replace(ah,"^")}function ob(e){return Go(e).replace(Qv,"%3D")}function ab(e){return nc(e).replace(ih,"%23").replace(Zv,"%3F")}function cb(e){return e==null?"":ab(e).replace(Xv,"%2F")}function Jr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const lb=/\/$/,ub=e=>e.replace(lb,"");function no(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=pb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jr(o)}}function fb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function db(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dr(t.matched[r],n.matched[s])&&uh(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function dr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function uh(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hb(e[n],t[n]))return!1;return!0}function hb(e,t){return ot(e)?Ul(e,t):ot(t)?Ul(t,e):e===t}function Ul(e,t){return ot(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function pb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xr;(function(e){e.pop="pop",e.push="push"})(Xr||(Xr={}));var Dr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Dr||(Dr={}));function mb(e){if(!e)if(Gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ub(e)}const gb=/^[^#]+#/;function yb(e,t){return e.replace(gb,"#")+t}function _b(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ri=()=>({left:window.scrollX,top:window.scrollY});function vb(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=_b(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function jl(e,t){return(history.state?history.state.position-t:-1)+e}const qo=new Map;function bb(e,t){qo.set(e,t)}function wb(e){const t=qo.get(e);return qo.delete(e),t}let Eb=()=>location.protocol+"//"+location.host;function fh(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Hl(c,"")}return Hl(n,e)+r+s}function Ib(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=fh(e,location),v=n.value,E=t.value;let P=0;if(d){if(n.value=p,t.value=d,o&&o===v){o=null;return}P=E?d.position-E.position:0}else r(p);s.forEach(S=>{S(n.value,v,{delta:P,type:Xr.pop,direction:P?P>0?Dr.forward:Dr.back:Dr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ce({},d.state,{scroll:Ri()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function $l(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ri():null}}function Sb(e){const{history:t,location:n}=window,r={value:fh(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Eb()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ce({},t.state,$l(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ce({},s.value,t.state,{forward:c,scroll:Ri()});i(u.current,u,!0);const f=ce({},$l(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dh(e){e=mb(e);const t=Sb(e),n=Ib(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:e,go:r,createHref:yb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Tb(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),dh(e)}function Cb(e){return typeof e=="string"||e&&typeof e=="object"}function hh(e){return typeof e=="string"||typeof e=="symbol"}const ph=Symbol("");var Bl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Bl||(Bl={}));function hr(e,t){return ce(new Error,{type:e,[ph]:!0},t)}function yt(e,t){return e instanceof Error&&ph in e&&(t==null||!!(e.type&t))}const Vl="[^/]+?",Ab={sensitive:!1,strict:!1,start:!0,end:!0},Pb=/[.+*?^${}()[\]/\\]/g;function Rb(e,t){const n=ce({},Ab,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Pb,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:E,optional:P,regexp:S}=d;i.push({name:v,repeatable:E,optional:P});const y=S||Vl;if(y!==Vl){p+=10;try{new RegExp(`(${y})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+_.message)}}let m=E?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(m=P&&l.length<2?`(?:/${m})`:"/"+m),P&&(m+="?"),s+=m,p+=20,P&&(p+=-8),E&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",v=i[d-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:E,optional:P}=p,S=v in l?l[v]:"";if(ot(S)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=ot(S)?S.join("/"):S;if(!y)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function kb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function mh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=kb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wl(r))return 1;if(Wl(s))return-1}return s.length-r.length}function Wl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ob={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Nb(e){if(!e)return[[]];if(e==="/")return[[Ob]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:xb.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Lb(e,t,n){const r=Rb(Nb(e.path),n),s=ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Mb(e,t){const n=[],r=new Map;t=Gl({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,p){const v=!p,E=Db(f);E.aliasOf=p&&p.record;const P=Gl(t,f),S=[E];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of _)S.push(ce({},E,{components:p?p.record.components:E.components,path:b,aliasOf:p?p.record:E}))}let y,m;for(const _ of S){const{path:b}=_;if(d&&b[0]!=="/"){const I=d.record.path,R=I[I.length-1]==="/"?"":"/";_.path=d.record.path+(b&&R+b)}if(y=Lb(_,d,P),p?p.alias.push(y):(m=m||y,m!==y&&m.alias.push(y),v&&f.name&&!Kl(y)&&o(f.name)),gh(y)&&c(y),E.children){const I=E.children;for(let R=0;R<I.length;R++)i(I[R],y,p&&p.children[R])}p=p||y}return m?()=>{o(m)}:Mr}function o(f){if(hh(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=Ub(f,n);n.splice(d,0,f),f.record.name&&!Kl(f)&&r.set(f.record.name,f)}function l(f,d){let p,v={},E,P;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw hr(1,{location:f});P=p.record.name,v=ce(zl(d.params,p.keys.filter(m=>!m.optional).concat(p.parent?p.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),f.params&&zl(f.params,p.keys.map(m=>m.name))),E=p.stringify(v)}else if(f.path!=null)E=f.path,p=n.find(m=>m.re.test(E)),p&&(v=p.parse(E),P=p.record.name);else{if(p=d.name?r.get(d.name):n.find(m=>m.re.test(d.path)),!p)throw hr(1,{location:f,currentLocation:d});P=p.record.name,v=ce({},d.params,f.params),E=p.stringify(v)}const S=[];let y=p;for(;y;)S.unshift(y.record),y=y.parent;return{name:P,path:E,params:v,matched:S,meta:Hb(S)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function zl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Db(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Kl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hb(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Gl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ub(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;mh(e,t[i])<0?r=i:n=i+1}const s=jb(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function jb(e){let t=e;for(;t=t.parent;)if(gh(t)&&mh(e,t)===0)return t}function gh({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $b(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(oh," "),o=i.indexOf("="),a=Jr(o<0?i:i.slice(0,o)),c=o<0?null:Jr(i.slice(o+1));if(a in t){let l=t[a];ot(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function ql(e){let t="";for(let n in e){const r=e[n];if(n=ob(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ot(r)?r.map(i=>i&&Go(i)):[r&&Go(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Bb(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Vb=Symbol(""),Yl=Symbol(""),rc=Symbol(""),sc=Symbol(""),Yo=Symbol("");function Sr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Kt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(hr(4,{from:n,to:t})):d instanceof Error?c(d):Cb(d)?c(hr(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function ro(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Wb(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Kt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Yv(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&Kt(p,n,r,o,a,s)()}))}}return i}function Wb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Jl(e){const t=ke(rc),n=ke(sc),r=Ee(()=>{const c=ue(e.to);return t.resolve(c)}),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(dr.bind(null,u));if(d>-1)return d;const p=Xl(c[l-2]);return l>1&&Xl(u)===p&&f[f.length-1].path!==p?f.findIndex(dr.bind(null,c[l-2])):d}),i=Ee(()=>s.value>-1&&qb(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&uh(n.params,r.value.params));function a(c={}){return Gb(c)?t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(Mr):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const zb=Ot({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jl,setup(e,{slots:t}){const n=gn(Jl(e)),{options:r}=ke(rc),s=Ee(()=>({[Ql(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ql(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Kb=zb;function Gb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qb(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ql=(e,t,n)=>e??t??n,Yb=Ot({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ke(Yo),s=Ee(()=>e.route||r.value),i=ke(Yl,0),o=Ee(()=>{let l=ue(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ee(()=>s.value.matched[o.value]);Rn(Yl,Ee(()=>o.value+1)),Rn(Vb,a),Rn(Yo,s);const c=st();return rn(()=>[c.value,a.value,e.name],([l,u,f],[d,p,v])=>{u&&(u.instances[f]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!dr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Zl(n.default,{Component:d,route:l});const p=f.props[u],v=p?p===!0?l.params:typeof p=="function"?p(l):p:null,P=Le(d,ce({},v,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Zl(n.default,{Component:P,route:l})||P}}});function Zl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const yh=Yb;function Jb(e){const t=Mb(e.routes,e),n=e.parseQuery||$b,r=e.stringifyQuery||ql,s=e.history,i=Sr(),o=Sr(),a=Sr(),c=Vr(tt);let l=tt;Gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=to.bind(null,A=>""+A),f=to.bind(null,cb),d=to.bind(null,Jr);function p(A,$){let j,G;return hh(A)?(j=t.getRecordMatcher(A),G=$):G=A,t.addRoute(G,j)}function v(A){const $=t.getRecordMatcher(A);$&&t.removeRoute($)}function E(){return t.getRoutes().map(A=>A.record)}function P(A){return!!t.getRecordMatcher(A)}function S(A,$){if($=ce({},$||c.value),typeof A=="string"){const g=no(n,A,$.path),w=t.resolve({path:g.path},$),k=s.createHref(g.fullPath);return ce(g,w,{params:d(w.params),hash:Jr(g.hash),redirectedFrom:void 0,href:k})}let j;if(A.path!=null)j=ce({},A,{path:no(n,A.path,$.path).path});else{const g=ce({},A.params);for(const w in g)g[w]==null&&delete g[w];j=ce({},A,{params:f(g)}),$.params=f($.params)}const G=t.resolve(j,$),oe=A.hash||"";G.params=u(d(G.params));const pe=fb(r,ce({},A,{hash:ib(oe),path:G.path})),h=s.createHref(pe);return ce({fullPath:pe,hash:oe,query:r===ql?Bb(A.query):A.query||{}},G,{redirectedFrom:void 0,href:h})}function y(A){return typeof A=="string"?no(n,A,c.value.path):ce({},A)}function m(A,$){if(l!==A)return hr(8,{from:$,to:A})}function _(A){return R(A)}function b(A){return _(ce(y(A),{replace:!0}))}function I(A){const $=A.matched[A.matched.length-1];if($&&$.redirect){const{redirect:j}=$;let G=typeof j=="function"?j(A):j;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=y(G):{path:G},G.params={}),ce({query:A.query,hash:A.hash,params:G.path!=null?{}:A.params},G)}}function R(A,$){const j=l=S(A),G=c.value,oe=A.state,pe=A.force,h=A.replace===!0,g=I(j);if(g)return R(ce(y(g),{state:typeof g=="object"?ce({},oe,g.state):oe,force:pe,replace:h}),$||j);const w=j;w.redirectedFrom=$;let k;return!pe&&db(r,G,j)&&(k=hr(16,{to:w,from:G}),ct(G,G,!0,!1)),(k?Promise.resolve(k):O(w,G)).catch(C=>yt(C)?yt(C,2)?C:Mt(C):z(C,w,G)).then(C=>{if(C){if(yt(C,2))return R(ce({replace:h},y(C.to),{state:typeof C.to=="object"?ce({},oe,C.to.state):oe,force:pe}),$||w)}else C=L(w,G,!0,h,oe);return V(w,G,C),C})}function N(A,$){const j=m(A,$);return j?Promise.reject(j):Promise.resolve()}function T(A){const $=Bn.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(A):A()}function O(A,$){let j;const[G,oe,pe]=Xb(A,$);j=ro(G.reverse(),"beforeRouteLeave",A,$);for(const g of G)g.leaveGuards.forEach(w=>{j.push(Kt(w,A,$))});const h=N.bind(null,A,$);return j.push(h),Ge(j).then(()=>{j=[];for(const g of i.list())j.push(Kt(g,A,$));return j.push(h),Ge(j)}).then(()=>{j=ro(oe,"beforeRouteUpdate",A,$);for(const g of oe)g.updateGuards.forEach(w=>{j.push(Kt(w,A,$))});return j.push(h),Ge(j)}).then(()=>{j=[];for(const g of pe)if(g.beforeEnter)if(ot(g.beforeEnter))for(const w of g.beforeEnter)j.push(Kt(w,A,$));else j.push(Kt(g.beforeEnter,A,$));return j.push(h),Ge(j)}).then(()=>(A.matched.forEach(g=>g.enterCallbacks={}),j=ro(pe,"beforeRouteEnter",A,$,T),j.push(h),Ge(j))).then(()=>{j=[];for(const g of o.list())j.push(Kt(g,A,$));return j.push(h),Ge(j)}).catch(g=>yt(g,8)?g:Promise.reject(g))}function V(A,$,j){a.list().forEach(G=>T(()=>G(A,$,j)))}function L(A,$,j,G,oe){const pe=m(A,$);if(pe)return pe;const h=$===tt,g=Gn?history.state:{};j&&(G||h?s.replace(A.fullPath,ce({scroll:h&&g&&g.scroll},oe)):s.push(A.fullPath,oe)),c.value=A,ct(A,$,j,h),Mt()}let K;function re(){K||(K=s.listen((A,$,j)=>{if(!vs.listening)return;const G=S(A),oe=I(G);if(oe){R(ce(oe,{replace:!0}),G).catch(Mr);return}l=G;const pe=c.value;Gn&&bb(jl(pe.fullPath,j.delta),Ri()),O(G,pe).catch(h=>yt(h,12)?h:yt(h,2)?(R(h.to,G).then(g=>{yt(g,20)&&!j.delta&&j.type===Xr.pop&&s.go(-1,!1)}).catch(Mr),Promise.reject()):(j.delta&&s.go(-j.delta,!1),z(h,G,pe))).then(h=>{h=h||L(G,pe,!1),h&&(j.delta&&!yt(h,8)?s.go(-j.delta,!1):j.type===Xr.pop&&yt(h,20)&&s.go(-1,!1)),V(G,pe,h)}).catch(Mr)}))}let te=Sr(),H=Sr(),Z;function z(A,$,j){Mt(A);const G=H.list();return G.length?G.forEach(oe=>oe(A,$,j)):console.error(A),Promise.reject(A)}function Ze(){return Z&&c.value!==tt?Promise.resolve():new Promise((A,$)=>{te.add([A,$])})}function Mt(A){return Z||(Z=!A,re(),te.list().forEach(([$,j])=>A?j(A):$()),te.reset()),A}function ct(A,$,j,G){const{scrollBehavior:oe}=e;if(!Gn||!oe)return Promise.resolve();const pe=!j&&wb(jl(A.fullPath,0))||(G||!j)&&history.state&&history.state.scroll||null;return Hn().then(()=>oe(A,$,pe)).then(h=>h&&vb(h)).catch(h=>z(h,A,$))}const Me=A=>s.go(A);let $n;const Bn=new Set,vs={currentRoute:c,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:E,resolve:S,options:e,push:_,replace:b,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:Ze,install(A){const $=this;A.component("RouterLink",Kb),A.component("RouterView",yh),A.config.globalProperties.$router=$,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Gn&&!$n&&c.value===tt&&($n=!0,_(s.location).catch(oe=>{}));const j={};for(const oe in tt)Object.defineProperty(j,oe,{get:()=>c.value[oe],enumerable:!0});A.provide(rc,$),A.provide(sc,wt(j)),A.provide(Yo,c);const G=A.unmount;Bn.add(A),A.unmount=function(){Bn.delete(A),Bn.size<1&&(l=tt,K&&K(),K=null,c.value=tt,$n=!1,Z=!1),G()}}};function Ge(A){return A.reduce(($,j)=>$.then(()=>T(j)),Promise.resolve())}return vs}function Xb(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>dr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>dr(l,c))||s.push(c))}return[n,r,s]}function Qb(e){return ke(sc)}const Zb=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),Jo=(e,t)=>{const n=e.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&Zb(e.route,n));return typeof r=="function"?r(e.route):r},e0=(e,t)=>({default:()=>e?Le(Gm,e===!0?{}:e,t):t});function ic(e){return Array.isArray(e)?e:[e]}const t0="modulepreload",n0=function(e,t){return e[0]==="."?new URL(e,t).href:e},eu={},r0=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=n0(c,r),c in eu)return;eu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const v=i[p];if(v.href===c&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":t0,l||(d.as="script",d.crossOrigin=""),d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,v)=>{d.addEventListener("load",p),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ve=(...e)=>r0(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),tu=[{name:"Admin-Film",path:"/Admin/Film",component:()=>ve(()=>import("./CFJBJhHh.js"),[],import.meta.url).then(e=>e.default||e)},{name:"Admin",path:"/Admin",component:()=>ve(()=>import("./A-ckLTRg.js"),[],import.meta.url).then(e=>e.default||e)},{name:"Admin-Portal",path:"/Admin/Portal",component:()=>ve(()=>import("./C-hWm5_s.js"),[],import.meta.url).then(e=>e.default||e)},{name:"Bio",path:"/Bio",component:()=>ve(()=>import("./CmVxA9ij.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default||e)},{name:"Contact",path:"/Contact",component:()=>ve(()=>import("./BygbRExO.js"),__vite__mapDeps([2,3]),import.meta.url).then(e=>e.default||e)},{name:"ForSale-Clocks",path:"/ForSale/Clocks",component:()=>ve(()=>import("./ZmaOsD9I.js"),__vite__mapDeps([4,5,6,7]),import.meta.url).then(e=>e.default||e)},{name:"ForSale",path:"/ForSale",component:()=>ve(()=>import("./Bptse7pL.js"),__vite__mapDeps([8,9,10]),import.meta.url).then(e=>e.default||e)},{name:"ForSale-Memorabilia",path:"/ForSale/Memorabilia",component:()=>ve(()=>import("./Cdku-DSW.js"),__vite__mapDeps([11,5,6]),import.meta.url).then(e=>e.default||e)},{name:"ForSale-Stuff",path:"/ForSale/Stuff",component:()=>ve(()=>import("./Bs9Wz1JE.js"),[],import.meta.url).then(e=>e.default||e)},{name:"index",path:"/",component:()=>ve(()=>import("./BngF3nBm.js"),[],import.meta.url).then(e=>e.default||e)},{name:"Login",path:"/Login",component:()=>ve(()=>import("./Cfmqs9Cq.js"),__vite__mapDeps([12,13]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio-Celebrities",path:"/Portfolio/Celebrities",component:()=>ve(()=>import("./BkoaBdT8.js"),__vite__mapDeps([14,5,6,15]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio-Clocks",path:"/Portfolio/Clocks",component:()=>ve(()=>import("./BJ6CL8pQ.js"),__vite__mapDeps([16,5,6,17]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio-Film",path:"/Portfolio/Film",component:()=>ve(()=>import("./B9kyeQ32.js"),__vite__mapDeps([18,5,6,19]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio",path:"/Portfolio",component:()=>ve(()=>import("./CFNBAPs5.js"),__vite__mapDeps([20,9,21]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio-Machinery",path:"/Portfolio/Machinery",component:()=>ve(()=>import("./DyMn3Bji.js"),__vite__mapDeps([22,5,6]),import.meta.url).then(e=>e.default||e)},{name:"Portfolio-Truck",path:"/Portfolio/Truck",component:()=>ve(()=>import("./BJVeUPtg.js"),__vite__mapDeps([23,5,6]),import.meta.url).then(e=>e.default||e)},{name:"Stuff",path:"/Stuff",component:()=>ve(()=>import("./DJlSHHCO.js"),__vite__mapDeps([24,5,6]),import.meta.url).then(e=>e.default||e)}],_h=(e,t,n)=>(t=t===!0?{}:t,{default:()=>{var r;return t?Le(e,t,n):(r=n.default)==null?void 0:r.call(n)}});function nu(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof t=="function"?t(e):t}function s0(e,t){return e===t||t===tt?!1:nu(e)!==nu(t)?!0:!e.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=t.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const i0={scrollBehavior(e,t,n){var l;const r=be(),s=((l=Xe().options)==null?void 0:l.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!i&&t&&e&&o!==!1&&s0(e,t)&&(i={left:0,top:0}),e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:ru(e.hash),behavior:s}:!1;const a=u=>!!(u.meta.pageTransition??Uo),c=a(t)&&a(e)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(c,async()=>{await new Promise(f=>setTimeout(f,0)),e.hash&&(i={el:e.hash,top:ru(e.hash),behavior:s}),u(i)})})}};function ru(e){try{const t=document.querySelector(e);if(t)return Number.parseFloat(getComputedStyle(t).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const o0={hashMode:!1,scrollBehaviorType:"auto"},$e={...o0,...i0},a0=async e=>{var c;let t,n;if(!((c=e.meta)!=null&&c.validate))return;const r=be(),s=Xe();if(([t,n]=Yr(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t)===!0)return;const o=Ai({statusCode:404,statusMessage:`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),a=s.beforeResolve(l=>{if(a(),l===e){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>qn(o)),window.history.pushState({},"",e.fullPath)});return!1}})},c0=async e=>{let t,n;const r=([t,n]=Yr(()=>tc(e.path)),t=await t,n(),t);if(r.redirect)return Un(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},l0=[a0,c0],Fr={};function u0(e,t,n){const{pathname:r,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){const l=i.includes(e.slice(o))?e.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),El(u,"")}const a=El(r,e),c=!n||n_(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const f0=Qe({name:"nuxt:router",enforce:"pre",async setup(e){var P,S;let t,n,r=ls().app.baseURL;$e.hashMode&&!r.includes("#")&&(r+="#");const s=((P=$e.history)==null?void 0:P.call($e,r))??($e.hashMode?Tb(r):dh(r)),i=((S=$e.routes)==null?void 0:S.call($e,tu))??tu;let o;const a=Jb({...$e,scrollBehavior:(y,m,_)=>{if(m===tt){o=_;return}if($e.scrollBehavior){if(a.options.scrollBehavior=$e.scrollBehavior,"scrollRestoration"in window.history){const b=a.beforeEach(()=>{b(),window.history.scrollRestoration="manual"})}return $e.scrollBehavior(y,tt,o||_)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(a);const c=Vr(a.currentRoute.value);a.afterEach((y,m)=>{c.value=m}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=u0(r,window.location,e.payload.path),u=Vr(a.currentRoute.value),f=()=>{u.value=a.currentRoute.value};e.hook("page:finish",f),a.afterEach((y,m)=>{var _,b,I,R;((b=(_=y.matched[0])==null?void 0:_.components)==null?void 0:b.default)===((R=(I=m.matched[0])==null?void 0:I.components)==null?void 0:R.default)&&f()});const d={};for(const y in u.value)Object.defineProperty(d,y,{get:()=>u.value[y]});e._route=wt(d),e._middleware=e._middleware||{global:[],named:{}};const p=Ci();a.afterEach(async(y,m,_)=>{delete e._processingMiddleware,!e.isHydrating&&p.value&&await e.runWithContext(Q_),_&&await e.callHook("page:loading:end"),y.matched.length===0&&await e.runWithContext(()=>qn(Bo({statusCode:404,fatal:!1,statusMessage:`Page not found: ${y.fullPath}`,data:{path:y.fullPath}})))});try{[t,n]=Yr(()=>a.isReady()),await t,n()}catch(y){[t,n]=Yr(()=>e.runWithContext(()=>qn(y))),await t,n()}const v=l!==a.currentRoute.value.fullPath?a.resolve(l):a.currentRoute.value;f();const E=e.payload.state._layout;return a.beforeEach(async(y,m)=>{var _;await e.callHook("page:loading:start"),y.meta=gn(y.meta),e.isHydrating&&E&&!ln(y.meta.layout)&&(y.meta.layout=E),e._processingMiddleware=!0;{const b=new Set([...l0,...e._middleware.global]);for(const I of y.matched){const R=I.meta.middleware;if(R)for(const N of ic(R))b.add(N)}{const I=await e.runWithContext(()=>tc(y.path));if(I.appMiddleware)for(const R in I.appMiddleware)I.appMiddleware[R]?b.add(R):b.delete(R)}for(const I of b){const R=typeof I=="string"?e._middleware.named[I]||await((_=Fr[I])==null?void 0:_.call(Fr).then(T=>T.default||T)):I;if(!R)throw new Error(`Unknown route middleware: '${I}'.`);const N=await e.runWithContext(()=>R(y,m));if(!e.payload.serverRendered&&e.isHydrating&&(N===!1||N instanceof Error)){const T=N||Bo({statusCode:404,statusMessage:`Page Not Found: ${l}`});return await e.runWithContext(()=>qn(T)),!1}if(N!==!0&&(N||N===!1))return N}}}),a.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),e.hooks.hookOnce("app:created",async()=>{try{"name"in v&&(v.name=void 0),await a.replace({...v,force:!0}),a.options.scrollBehavior=$e.scrollBehavior}catch(y){await e.runWithContext(()=>qn(y))}}),{provide:{router:a}}}}),su=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),YT=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),oc=e=>{const t=be();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{su(()=>e())}):su(()=>e())},d0=Qe({name:"nuxt:payload",setup(e){Xe().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const r=await Dl(t.path);r&&Object.assign(e.static.data,r.data)}),oc(()=>{var t;e.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Dl(n)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(Pi,1e3)})}}),h0=Qe(()=>{const e=Xe();oc(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),p0=Qe(e=>{let t;async function n(){const r=await Pi();t&&clearTimeout(t),t=setTimeout(n,Al);try{const s=await $fetch(Qa("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&e.hooks.callHook("app:manifest:update",s)}catch{}}oc(()=>{t=setTimeout(n,Al)})});function m0(e={}){const t=e.path||window.location.pathname;let n={};try{n=ei(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:be().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const g0=Qe({name:"nuxt:chunk-reload",setup(e){const t=Xe(),n=ls(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Ja(n.app.baseURL,i.fullPath);m0({path:a,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(s)}),t.onError((i,o)=>{r.has(i)&&s(o)})}}),y0=Qe({name:"nuxt:global-components"}),Qt={default:()=>ve(()=>import("./xgaP5riS.js"),__vite__mapDeps([25,13,26]),import.meta.url).then(e=>e.default||e)},_0=Qe({name:"nuxt:prefetch",setup(e){const t=Xe();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Qt[r]=="function"&&await Qt[r]()})}),e.hooks.hook("link:prefetch",n=>{if(Un(n))return;const r=t.resolve(n);if(!r)return;const s=r.meta.layout;let i=ic(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Fr[o]=="function"&&Fr[o]();s&&typeof Qt[s]=="function"&&Qt[s]()})}});var iu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},v0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):v0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new b0;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class b0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w0=function(e){const t=vh(e);return bh.encodeByteArray(t,!0)},wh=function(e){return w0(e).replace(/\./g,"")},Eh=function(e){try{return bh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function E0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const I0=()=>E0().__FIREBASE_DEFAULTS__,S0=()=>{if(typeof process>"u"||typeof iu>"u")return;const e=iu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},T0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Eh(e[1]);return t&&JSON.parse(t)},ac=()=>{try{return I0()||S0()||T0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},C0=e=>{var t,n;return(n=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ih=()=>{var e;return(e=ac())===null||e===void 0?void 0:e.config},Sh=e=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function R0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function k0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O0(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function N0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="FirebaseError";class yn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=L0,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?M0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function M0(e,t){return e.replace(D0,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const D0=/\{\$([^}]+)}/g;function F0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ii(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ou(i)&&ou(o)){if(!ii(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ou(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ar(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Pr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function H0(e,t){const n=new U0(e,t);return n.subscribe.bind(n)}class U0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j0(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=so),s.error===void 0&&(s.error=so),s.complete===void 0&&(s.complete=so);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function so(){}/**
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
 */function Nt(e){return e&&e._delegate?e._delegate:e}class pr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new A0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(V0(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:B0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B0(e){return e===In?void 0:e}function V0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(le||(le={}));const z0={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},K0=le.INFO,G0={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},q0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=G0[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Th{constructor(t){this.name=t,this._logLevel=K0,this._logHandler=q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in le))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?z0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...t),this._logHandler(this,le.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...t),this._logHandler(this,le.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,le.INFO,...t),this._logHandler(this,le.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,le.WARN,...t),this._logHandler(this,le.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...t),this._logHandler(this,le.ERROR,...t)}}const Y0=(e,t)=>t.some(n=>e instanceof n);let au,cu;function J0(){return au||(au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X0(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Xo=new WeakMap,Ah=new WeakMap,io=new WeakMap,cc=new WeakMap;function Q0(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(sn(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ch.set(n,e)}).catch(()=>{}),cc.set(t,e),t}function Z0(e){if(Xo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Xo.set(e,t)}let Qo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ah.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ew(e){Qo=e(Qo)}function tw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(oo(this),t,...n);return Ah.set(r,t.sort?t.sort():[t]),sn(r)}:X0().includes(e)?function(...t){return e.apply(oo(this),t),sn(Ch.get(this))}:function(...t){return sn(e.apply(oo(this),t))}}function nw(e){return typeof e=="function"?tw(e):(e instanceof IDBTransaction&&Z0(e),Y0(e,J0())?new Proxy(e,Qo):e)}function sn(e){if(e instanceof IDBRequest)return Q0(e);if(io.has(e))return io.get(e);const t=nw(e);return t!==e&&(io.set(e,t),cc.set(t,e)),t}const oo=e=>cc.get(e);function rw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sn(o.result),c.oldVersion,c.newVersion,sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const sw=["get","getKey","getAll","getAllKeys","count"],iw=["put","add","delete","clear"],ao=new Map;function lu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ao.get(t))return ao.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=iw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ao.set(t,i),i}ew(e=>({...e,get:(t,n,r)=>lu(t,n)||e.get(t,n,r),has:(t,n)=>!!lu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zo="@firebase/app",uu="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Th("@firebase/app"),cw="@firebase/app-compat",lw="@firebase/analytics-compat",uw="@firebase/analytics",fw="@firebase/app-check-compat",dw="@firebase/app-check",hw="@firebase/auth",pw="@firebase/auth-compat",mw="@firebase/database",gw="@firebase/database-compat",yw="@firebase/functions",_w="@firebase/functions-compat",vw="@firebase/installations",bw="@firebase/installations-compat",ww="@firebase/messaging",Ew="@firebase/messaging-compat",Iw="@firebase/performance",Sw="@firebase/performance-compat",Tw="@firebase/remote-config",Cw="@firebase/remote-config-compat",Aw="@firebase/storage",Pw="@firebase/storage-compat",Rw="@firebase/firestore",kw="@firebase/vertexai-preview",Ow="@firebase/firestore-compat",xw="firebase",Nw="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="[DEFAULT]",Lw={[Zo]:"fire-core",[cw]:"fire-core-compat",[uw]:"fire-analytics",[lw]:"fire-analytics-compat",[dw]:"fire-app-check",[fw]:"fire-app-check-compat",[hw]:"fire-auth",[pw]:"fire-auth-compat",[mw]:"fire-rtdb",[gw]:"fire-rtdb-compat",[yw]:"fire-fn",[_w]:"fire-fn-compat",[vw]:"fire-iid",[bw]:"fire-iid-compat",[ww]:"fire-fcm",[Ew]:"fire-fcm-compat",[Iw]:"fire-perf",[Sw]:"fire-perf-compat",[Tw]:"fire-rc",[Cw]:"fire-rc-compat",[Aw]:"fire-gcs",[Pw]:"fire-gcs-compat",[Rw]:"fire-fst",[Ow]:"fire-fst-compat",[kw]:"fire-vertex","fire-js":"fire-js",[xw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Map,Mw=new Map,ta=new Map;function fu(e,t){try{e.container.addComponent(t)}catch(n){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qr(e){const t=e.name;if(ta.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;ta.set(t,e);for(const n of oi.values())fu(n,e);for(const n of Mw.values())fu(n,e);return!0}function Ph(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Et(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new fs("app","Firebase",Dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=Nw;function Rh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ea,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=Ih()),!n)throw on.create("no-options");const i=oi.get(s);if(i){if(ii(n,i.options)&&ii(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new W0(s);for(const c of ta.values())o.addComponent(c);const a=new Fw(n,r,o);return oi.set(s,a),a}function Hw(e=ea){const t=oi.get(e);if(!t&&e===ea&&Ih())return Rh();if(!t)throw on.create("no-app",{appName:e});return t}function sr(e,t,n){var r;let s=(r=Lw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(a.join(" "));return}Qr(new pr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Uw="firebase-heartbeat-database",jw=1,Zr="firebase-heartbeat-store";let co=null;function kh(){return co||(co=rw(Uw,jw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Zr)}catch(n){console.warn(n)}}}}).catch(e=>{throw on.create("idb-open",{originalErrorMessage:e.message})})),co}async function $w(e){try{const n=(await kh()).transaction(Zr),r=await n.objectStore(Zr).get(Oh(e));return await n.done,r}catch(t){if(t instanceof yn)Nn.warn(t.message);else{const n=on.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(n.message)}}}async function du(e,t){try{const r=(await kh()).transaction(Zr,"readwrite");await r.objectStore(Zr).put(t,Oh(e)),await r.done}catch(n){if(n instanceof yn)Nn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Oh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Bw=1024,Vw=30*24*60*60*1e3;class Ww{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hu(),{heartbeatsToSend:r,unsentEntries:s}=zw(this._heartbeatsCache.heartbeats),i=wh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hu(){return new Date().toISOString().substring(0,10)}function zw(e,t=Bw){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?N0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $w(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pu(e){return wh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(e){Qr(new pr("platform-logger",t=>new ow(t),"PRIVATE")),Qr(new pr("heartbeat",t=>new Ww(t),"PRIVATE")),sr(Zo,uu,e),sr(Zo,uu,"esm2017"),sr("fire-js","")}Gw("");var qw="firebase",Yw="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(qw,Yw,"app");function lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function xh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=xh,Nh=new fs("auth","Firebase",xh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Th("@firebase/auth");function Xw(e,...t){ai.logLevel<=le.WARN&&ai.warn(`Auth (${hs}): ${e}`,...t)}function $s(e,...t){ai.logLevel<=le.ERROR&&ai.error(`Auth (${hs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,...t){throw uc(e,...t)}function pt(e,...t){return uc(e,...t)}function Lh(e,t,n){const r=Object.assign(Object.assign({},Jw()),{[t]:n});return new fs("auth","Firebase",r).create(t,{appName:e.name})}function an(e){return Lh(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nh.create(e,...t)}function X(e,t,...n){if(!e)throw uc(t,...n)}function It(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $s(t),new Error(t)}function Pt(e,t){e||It(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Qw(){return mu()==="http:"||mu()==="https:"}function mu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qw()||R0()||"connection"in navigator)?navigator.onLine:!0}function eE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pt(n>t,"Short delay should be less than long delay!"),this.isMobile=P0()||k0()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new ps(3e4,6e4);function jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _n(e,t,n,r,s={}){return Dh(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=ds(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Mh.fetch()(Fh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Dh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},tE),t);try{const s=new sE(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xs(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xs(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw xs(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Lh(e,u,l);at(e,u)}}catch(s){if(s instanceof yn)throw s;at(e,"network-request-failed",{message:String(s)})}}async function ki(e,t,n,r,s={}){const i=await _n(e,t,n,r,s);return"mfaPendingCredential"in i&&at(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Fh(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?fc(e.config,s):`${e.config.apiScheme}://${s}`}function rE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),nE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pt(e,t,r);return s.customData._tokenResponse=n,s}function gu(e){return e!==void 0&&e.enterprise!==void 0}class iE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return rE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function oE(e,t){return _n(e,"GET","/v2/recaptchaConfig",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(e,t){return _n(e,"POST","/v1/accounts:delete",t)}async function Hh(e,t){return _n(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cE(e,t=!1){const n=Nt(e),r=await n.getIdToken(t),s=dc(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hr(lo(s.auth_time)),issuedAtTime:Hr(lo(s.iat)),expirationTime:Hr(lo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lo(e){return Number(e)*1e3}function dc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return $s("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eh(n);return s?JSON.parse(s):($s("Failed to decode base64 JWT payload"),null)}catch(s){return $s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yu(e){const t=dc(e);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yn&&lE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function lE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(e){var t;const n=e.auth,r=await e.getIdToken(),s=await es(e,Hh(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Uh(i.providerUserInfo):[],a=dE(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ra(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function fE(e){const t=Nt(e);await ci(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dE(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Uh(e){return e.map(t=>{var{providerId:n}=t,r=lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(e,t){const n=await Dh(e,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Fh(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pE(e,t){return _n(e,"POST","/v2/accounts:revokeToken",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){X(t.length!==0,"internal-error");const n=yu(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hE(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ir;return r&&(X(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){X(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class St{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ra(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await es(this,this.stsTokenManager.getToken(this.auth,t));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return cE(this,t)}reload(){return fE(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new St(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(an(this.auth));const t=await this.getIdToken();return await es(this,aE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:m,emailVerified:_,isAnonymous:b,providerData:I,stsTokenManager:R}=n;X(m&&R,t,"internal-error");const N=ir.fromJSON(this.name,R);X(typeof m=="string",t,"internal-error"),jt(f,t.name),jt(d,t.name),X(typeof _=="boolean",t,"internal-error"),X(typeof b=="boolean",t,"internal-error"),jt(p,t.name),jt(v,t.name),jt(E,t.name),jt(P,t.name),jt(S,t.name),jt(y,t.name);const T=new St({uid:m,auth:t,email:d,emailVerified:_,displayName:f,isAnonymous:b,photoURL:v,phoneNumber:p,tenantId:E,stsTokenManager:N,createdAt:S,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map(O=>Object.assign({},O))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(t,n,r=!1){const s=new ir;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ci(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Uh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ir;a.updateFromIdToken(r);const c=new St({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function Tt(e){Pt(e instanceof Function,"Expected a class definition");let t=_u.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_u.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}jh.type="NONE";const vu=jh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t,n){return`firebase:${e}:${t}:${n}`}class or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?St._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new or(Tt(vu),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Tt(vu);const o=Bs(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=St._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new or(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new or(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($h(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zh(t))return"Blackberry";if(Kh(t))return"Webos";if(hc(t))return"Safari";if((t.includes("chrome/")||Bh(t))&&!t.includes("edge/"))return"Chrome";if(Wh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $h(e=Oe()){return/firefox\//i.test(e)}function hc(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bh(e=Oe()){return/crios\//i.test(e)}function Vh(e=Oe()){return/iemobile/i.test(e)}function Wh(e=Oe()){return/android/i.test(e)}function zh(e=Oe()){return/blackberry/i.test(e)}function Kh(e=Oe()){return/webos/i.test(e)}function Oi(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mE(e=Oe()){var t;return Oi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gE(){return O0()&&document.documentMode===10}function Gh(e=Oe()){return Oi(e)||Wh(e)||Kh(e)||zh(e)||/windows phone/i.test(e)||Vh(e)}function yE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e,t=[]){let n;switch(e){case"Browser":n=bu(Oe());break;case"Worker":n=`${bu(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class _E{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vE(e,t={}){return _n(e,"GET","/v2/passwordPolicy",jn(e,t))}/**
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
 */const bE=6;class wE{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wu(this),this.idTokenSubscription=new wu(this),this.beforeStateQueue=new _E(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Hh(this,{idToken:t}),r=await St._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ci(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Et(this.app))return Promise.reject(an(this));const n=t?Nt(t):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Et(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vE(this),n=new wE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Tt(t)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vr(e){return Nt(e)}class wu{constructor(t){this.auth=t,this.observer=null,this.addObserver=H0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IE(e){xi=e}function Yh(e){return xi.loadJS(e)}function SE(){return xi.recaptchaEnterpriseScript}function TE(){return xi.gapiScript}function CE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const AE="recaptcha-enterprise",PE="NO_RECAPTCHA";class RE{constructor(t){this.type=AE,this.auth=vr(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{oE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new iE(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;gu(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(PE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&gu(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=SE();c.length!==0&&(c+=a),Yh(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Eu(e,t,n,r=!1){const s=new RE(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Iu(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Eu(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Eu(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(e,t){const n=Ph(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ii(i,t??{}))return s;at(s,"already-initialized")}return n.initialize({options:t})}function OE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xE(e,t,n){const r=vr(e);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Jh(t),{host:o,port:a}=NE(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),LE()}function Jh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function NE(e){const t=Jh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Su(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Su(o)}}}function Su(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function LE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(t){return It("not implemented")}_linkToIdToken(t,n){return It("not implemented")}_getReauthenticationResolver(t){return It("not implemented")}}async function ME(e,t){return _n(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(e,t){return ki(e,"POST","/v1/accounts:signInWithPassword",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(e,t){return ki(e,"POST","/v1/accounts:signInWithEmailLink",jn(e,t))}async function HE(e,t){return ki(e,"POST","/v1/accounts:signInWithEmailLink",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends pc{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ts(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ts(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(t,n,"signInWithPassword",DE);case"emailLink":return FE(t,{email:this._email,oobCode:this._password});default:at(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(t,r,"signUpPassword",ME);case"emailLink":return HE(t,{idToken:n,email:this._email,oobCode:this._password});default:at(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e,t){return ki(e,"POST","/v1/accounts:signInWithIdp",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="http://localhost";class Ln extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=lc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ln(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ar(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ar(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ar(t,n)}buildRequest(){const t={requestUri:UE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ds(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $E(e){const t=Ar(Pr(e)).link,n=t?Ar(Pr(t)).deep_link_id:null,r=Ar(Pr(e)).deep_link_id;return(r?Ar(Pr(r)).link:null)||r||n||t||e}class mc{constructor(t){var n,r,s,i,o,a;const c=Ar(Pr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=jE((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=$E(t);try{return new mc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.providerId=br.PROVIDER_ID}static credential(t,n){return ts._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mc.parseLink(n);return X(r,"argument-error"),ts._fromEmailAndCode(t,r.code,r.tenantId)}}br.PROVIDER_ID="password";br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Xh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ms{constructor(){super("facebook.com")}static credential(t){return Ln._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ln._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ms{constructor(){super("github.com")}static credential(t){return Ln._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ms{constructor(){super("twitter.com")}static credential(t,n){return Ln._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await St._fromIdTokenResponse(t,r,s),o=Tu(r);return new mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Tu(r);return new mr({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Tu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends yn{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,li.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new li(t,n,r,s)}}function Qh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(e,i,t,r):i})}async function BE(e,t,n=!1){const r=await es(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(e,t,n=!1){const{auth:r}=e;if(Et(r.app))return Promise.reject(an(r));const s="reauthenticate";try{const i=await es(e,Qh(r,s,t,e),n);X(i.idToken,r,"internal-error");const o=dc(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(e.uid===a,r,"user-mismatch"),mr._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(e,t,n=!1){if(Et(e.app))return Promise.reject(an(e));const r="signIn",s=await Qh(e,r,t),i=await mr._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function WE(e,t){return Zh(vr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(e){const t=vr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function JT(e,t,n){return Et(e.app)?Promise.reject(an(e)):WE(Nt(e),br.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zE(e),r})}function KE(e,t,n,r){return Nt(e).onIdTokenChanged(t,n,r)}function GE(e,t,n){return Nt(e).beforeAuthStateChanged(t,n)}function XT(e,t,n,r){return Nt(e).onAuthStateChanged(t,n,r)}function QT(e){return Nt(e).signOut()}const ui="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ui,"1"),this.storage.removeItem(ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){const e=Oe();return hc(e)||Oi(e)}const YE=1e3,JE=10;class tp extends ep{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qE()&&yE(),this.fallbackToPolling=Gh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gE()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,JE):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},YE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}tp.type="LOCAL";const XE=tp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends ep{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}np.type="SESSION";const rp=np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ni(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await QE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function e1(e){mt().location.href=e}/**
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
 */function sp(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function t1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function r1(){return sp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="firebaseLocalStorageDb",s1=1,fi="firebaseLocalStorage",op="fbase_key";class gs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Li(e,t){return e.transaction([fi],t?"readwrite":"readonly").objectStore(fi)}function i1(){const e=indexedDB.deleteDatabase(ip);return new gs(e).toPromise()}function sa(){const e=indexedDB.open(ip,s1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(fi,{keyPath:op})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(fi)?t(r):(r.close(),await i1(),t(await sa()))})})}async function Cu(e,t,n){const r=Li(e,!0).put({[op]:t,value:n});return new gs(r).toPromise()}async function o1(e,t){const n=Li(e,!1).get(t),r=await new gs(n).toPromise();return r===void 0?null:r.value}function Au(e,t){const n=Li(e,!0).delete(t);return new gs(n).toPromise()}const a1=800,c1=3;class ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>c1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(r1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await t1(),!this.activeServiceWorker)return;this.sender=new ZE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||n1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sa();return await Cu(t,ui,"1"),await Au(t,ui),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>o1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Au(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Li(s,!1).getAll();return new gs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ap.type="LOCAL";const l1=ap;new ps(3e4,6e4);/**
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
 */function u1(e,t){return t?Tt(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends pc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ar(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ar(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ar(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function f1(e){return Zh(e.auth,new yc(e),e.bypassAuthState)}function d1(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),VE(n,new yc(e),e.bypassAuthState)}async function h1(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),BE(n,new yc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return f1;case"linkViaPopup":case"linkViaRedirect":return h1;case"reauthViaPopup":case"reauthViaRedirect":return d1;default:at(this.auth,"internal-error")}}resolve(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new ps(2e3,1e4);class Yn extends cp{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const t=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,p1.get())};t()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="pendingRedirect",Vs=new Map;class g1 extends cp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vs.get(this.auth._key());if(!t){try{const r=await y1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vs.set(this.auth._key(),t)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(e,t){const n=b1(t),r=v1(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _1(e,t){Vs.set(e._key(),t)}function v1(e){return Tt(e._redirectPersistence)}function b1(e){return Bs(m1,e.config.apiKey,e.name)}async function w1(e,t,n=!1){if(Et(e.app))return Promise.reject(an(e));const r=vr(e),s=u1(r,t),o=await new g1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=10*60*1e3;class I1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!S1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!lp(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=E1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pu(t))}saveEventToCache(t){this.cachedEventUids.add(Pu(t)),this.lastProcessedEventTime=Date.now()}}function Pu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function lp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function S1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(e,t={}){return _n(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A1=/^https?/;async function P1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await T1(e);for(const n of t)try{if(R1(n))return}catch{}at(e,"unauthorized-domain")}function R1(e){const t=na(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A1.test(n))return!1;if(C1.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const k1=new ps(3e4,6e4);function Ru(){const e=mt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function O1(e){return new Promise((t,n)=>{var r,s,i;function o(){Ru(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ru(),n(pt(e,"network-request-failed"))},timeout:k1.get()})}if(!((s=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=mt().gapi)===null||i===void 0)&&i.load)o();else{const a=CE("iframefcb");return mt()[a]=()=>{gapi.load?o():n(pt(e,"network-request-failed"))},Yh(`${TE()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ws=null,t})}let Ws=null;function x1(e){return Ws=Ws||O1(e),Ws}/**
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
 */const N1=new ps(5e3,15e3),L1="__/auth/iframe",M1="emulator/auth/iframe",D1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H1(e){const t=e.config;X(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fc(t,M1):`https://${e.config.authDomain}/${L1}`,r={apiKey:t.apiKey,appName:e.name,v:hs},s=F1.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ds(r).slice(1)}`}async function U1(e){const t=await x1(e),n=mt().gapi;return X(n,e,"internal-error"),t.open({where:document.body,url:H1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pt(e,"network-request-failed"),a=mt().setTimeout(()=>{i(o)},N1.get());function c(){mt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const j1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,B1=600,V1="_blank",W1="http://localhost";class ku{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z1(e,t,n,r=$1,s=B1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},j1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Bh(l)?V1:n),$h(l)&&(t=t||W1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(mE(l)&&a!=="_self")return K1(t||"",a),new ku(null);const f=window.open(t||"",a,u);X(f,e,"popup-blocked");try{f.focus()}catch{}return new ku(f)}function K1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const G1="__/auth/handler",q1="emulator/auth/handler",Y1=encodeURIComponent("fac");async function Ou(e,t,n,r,s,i){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(t instanceof Xh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",F0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof ms){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Y1}=${encodeURIComponent(c)}`:"";return`${J1(e)}?${ds(a).slice(1)}${l}`}function J1({config:e}){return e.emulator?fc(e,q1):`https://${e.authDomain}/${G1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rp,this._completeRedirectFn=w1,this._overrideRedirectResult=_1}async _openPopup(t,n,r,s){var i;Pt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ou(t,n,r,na(),s);return z1(t,o,gc())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ou(t,n,r,na(),s);return e1(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await U1(t),r=new I1(t);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(uo,{type:uo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uo];o!==void 0&&n(!!o),at(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gh()||hc()||Oi()}}const Q1=X1;var xu="@firebase/auth",Nu="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tI(e){Qr(new pr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qh(e)},l=new EE(r,s,i,c);return OE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qr(new pr("auth-internal",t=>{const n=vr(t.getProvider("auth").getImmediate());return(r=>new Z1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(xu,Nu,eI(e)),sr(xu,Nu,"esm2017")}/**
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
 */const nI=5*60,rI=Sh("authIdTokenMaxAge")||nI;let Lu=null;const sI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rI)return;const s=n==null?void 0:n.token;Lu!==s&&(Lu=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iI(e=Hw()){const t=Ph(e,"auth");if(t.isInitialized())return t.getImmediate();const n=kE(e,{popupRedirectResolver:Q1,persistence:[l1,XE,rp]}),r=Sh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sI(i.toString());GE(n,o,()=>o(n.currentUser)),KE(n,a=>o(a))}}const s=C0("auth");return s&&xE(n,`http://${s}`),n}function oI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}IE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=pt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tI("Browser");const aI=Qe(e=>{const t=ls(),n={apiKey:t.public.FIREBASE_API_KEY,authDomain:t.public.FIREBASE_AUTH_DOMAIN,projectId:t.public.FIREBASE_PROJECT_ID,storageBucket:t.public.FIREBASE_STORAGE_BUCKET,messagingSenderId:t.public.FIREBASE_MESSAGING_SENDER_ID,appId:t.public.FIREBASE_APP_ID,measurementId:t.public.FIREBASE_MEASUREMENT_ID},r=Rh(n),s=iI(r);e.provide("auth",s)}),Mu=()=>{};let _c={},up={},fp=null,dp={mark:Mu,measure:Mu};try{typeof window<"u"&&(_c=window),typeof document<"u"&&(up=document),typeof MutationObserver<"u"&&(fp=MutationObserver),typeof performance<"u"&&(dp=performance)}catch{}const{userAgent:Du=""}=_c.navigator||{},un=_c,he=up,Fu=fp,Ns=dp;un.document;const Lt=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",hp=~Du.indexOf("MSIE")||~Du.indexOf("Trident/");var ge="classic",pp="duotone",We="sharp",ze="sharp-duotone",cI=[ge,pp,We,ze],lI={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Hu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},uI=["kit"],fI=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,dI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,hI={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},pI={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},mI={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},gI={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},yI={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},_I={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},mp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},vI=["solid","regular","light","thin","duotone","brands"],gp=[1,2,3,4,5,6,7,8,9,10],bI=gp.concat([11,12,13,14,15,16,17,18,19,20]),Rr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wI=[...Object.keys(gI),...vI,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rr.GROUP,Rr.SWAP_OPACITY,Rr.PRIMARY,Rr.SECONDARY].concat(gp.map(e=>"".concat(e,"x"))).concat(bI.map(e=>"w-".concat(e))),EI={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},II={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},SI={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Uu={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Rt="___FONT_AWESOME___",ia=16,yp="fa",_p="svg-inline--fa",Mn="data-fa-i2svg",oa="data-fa-pseudo-element",TI="data-fa-pseudo-element-pending",vc="data-prefix",bc="data-icon",ju="fontawesome-i2svg",CI="async",AI=["HTML","HEAD","STYLE","SCRIPT"],vp=(()=>{try{return!0}catch{return!1}})(),bp=[ge,We,ze];function ys(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ge]}})}const wp={...mp};wp[ge]={...mp[ge],...Hu.kit,...Hu["kit-duotone"]};const On=ys(wp),aa={..._I};aa[ge]={...aa[ge],...Uu.kit,...Uu["kit-duotone"]};const ns=ys(aa),ca={...yI};ca[ge]={...ca[ge],...SI.kit};const xn=ys(ca),la={...mI};la[ge]={...la[ge],...II.kit};const PI=ys(la),RI=fI,Ep="fa-layers-text",kI=dI,OI={...lI};ys(OI);const xI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fo=Rr,gr=new Set;Object.keys(ns[ge]).map(gr.add.bind(gr));Object.keys(ns[We]).map(gr.add.bind(gr));Object.keys(ns[ze]).map(gr.add.bind(gr));const NI=[...uI,...wI],Ur=un.FontAwesomeConfig||{};function LI(e){var t=he.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function MI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}he&&typeof he.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const s=MI(LI(n));s!=null&&(Ur[r]=s)});const Ip={styleDefault:"solid",familyDefault:"classic",cssPrefix:yp,replacementClass:_p,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ur.familyPrefix&&(Ur.cssPrefix=Ur.familyPrefix);const yr={...Ip,...Ur};yr.autoReplaceSvg||(yr.observeMutations=!1);const W={};Object.keys(Ip).forEach(e=>{Object.defineProperty(W,e,{enumerable:!0,set:function(t){yr[e]=t,jr.forEach(n=>n(W))},get:function(){return yr[e]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){yr.cssPrefix=e,jr.forEach(t=>t(W))},get:function(){return yr.cssPrefix}});un.FontAwesomeConfig=W;const jr=[];function DI(e){return jr.push(e),()=>{jr.splice(jr.indexOf(e),1)}}const $t=ia,dt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function FI(e){if(!e||!Lt)return;const t=he.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=he.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return he.head.insertBefore(t,r),e}const HI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rs(){let e=12,t="";for(;e-- >0;)t+=HI[Math.random()*62|0];return t}function wr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wc(e){return e.classList?wr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Sp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function UI(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Sp(e[n]),'" '),"").trim()}function Mi(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ec(e){return e.size!==dt.size||e.x!==dt.x||e.y!==dt.y||e.rotate!==dt.rotate||e.flipX||e.flipY}function jI(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function $I(e){let{transform:t,width:n=ia,height:r=ia,startCentered:s=!1}=e,i="";return s&&hp?i+="translate(".concat(t.x/$t-n/2,"em, ").concat(t.y/$t-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(t.x/$t,"em), calc(-50% + ").concat(t.y/$t,"em)) "):i+="translate(".concat(t.x/$t,"em, ").concat(t.y/$t,"em) "),i+="scale(".concat(t.size/$t*(t.flipX?-1:1),", ").concat(t.size/$t*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var BI=`:root, :host {
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
}`;function Tp(){const e=yp,t=_p,n=W.cssPrefix,r=W.replacementClass;let s=BI;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let $u=!1;function ho(){W.autoAddCss&&!$u&&(FI(Tp()),$u=!0)}var VI={mixout(){return{dom:{css:Tp,insertCss:ho}}},hooks(){return{beforeDOMElementCreation(){ho()},beforeI2svg(){ho()}}}};const kt=un||{};kt[Rt]||(kt[Rt]={});kt[Rt].styles||(kt[Rt].styles={});kt[Rt].hooks||(kt[Rt].hooks={});kt[Rt].shims||(kt[Rt].shims=[]);var ht=kt[Rt];const Cp=[],Ap=function(){he.removeEventListener("DOMContentLoaded",Ap),di=1,Cp.map(e=>e())};let di=!1;Lt&&(di=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),di||he.addEventListener("DOMContentLoaded",Ap));function WI(e){Lt&&(di?setTimeout(e,0):Cp.push(e))}function _s(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Sp(e):"<".concat(t," ").concat(UI(n),">").concat(r.map(_s).join(""),"</").concat(t,">")}function Bu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var po=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,t[l],l,t);return u};function zI(e){const t=[];let n=0;const r=e.length;for(;n<r;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function ua(e){const t=zI(e);return t.length===1?t[0].toString(16):null}function KI(e,t){const n=e.length;let r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Vu(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function fa(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Vu(t);typeof ht.hooks.addPack=="function"&&!r?ht.hooks.addPack(e,Vu(t)):ht.styles[e]={...ht.styles[e]||{},...s},e==="fas"&&fa("fa",t)}const{styles:Tn,shims:GI}=ht,qI={[ge]:Object.values(xn[ge]),[We]:Object.values(xn[We]),[ze]:Object.values(xn[ze])};let Ic=null,Pp={},Rp={},kp={},Op={},xp={};const YI={[ge]:Object.keys(On[ge]),[We]:Object.keys(On[We]),[ze]:Object.keys(On[ze])};function JI(e){return~NI.indexOf(e)}function XI(e,t){const n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!JI(s)?s:null}const Np=()=>{const e=r=>po(Tn,(s,i,o)=>(s[o]=po(i,r,{}),s),{});Pp=e((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Rp=e((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),xp=e((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const t="far"in Tn||W.autoFetchSvg,n=po(GI,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});kp=n.names,Op=n.unicodes,Ic=Di(W.styleDefault,{family:W.familyDefault})};DI(e=>{Ic=Di(e.styleDefault,{family:W.familyDefault})});Np();function Sc(e,t){return(Pp[e]||{})[t]}function QI(e,t){return(Rp[e]||{})[t]}function Zt(e,t){return(xp[e]||{})[t]}function Lp(e){return kp[e]||{prefix:null,iconName:null}}function ZI(e){const t=Op[e],n=Sc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fn(){return Ic}const Tc=()=>({prefix:null,iconName:null,rest:[]});function Di(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ge}=t,r=On[n][e],s=ns[n][e]||ns[n][r],i=e in ht.styles?e:null;return s||i||null}const eS={[ge]:Object.keys(xn[ge]),[We]:Object.keys(xn[We]),[ze]:Object.keys(xn[ze])};function Fi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[ge]:"".concat(W.cssPrefix,"-").concat(ge),[We]:"".concat(W.cssPrefix,"-").concat(We),[ze]:"".concat(W.cssPrefix,"-").concat(ze)};let s=null,i=ge;const o=cI.filter(c=>c!==pp);o.forEach(c=>{(e.includes(r[c])||e.some(l=>eS[c].includes(l)))&&(i=c)});const a=e.reduce((c,l)=>{const u=XI(W.cssPrefix,l);if(Tn[l]?(l=qI[i].includes(l)?PI[i][l]:l,s=l,c.prefix=l):YI[i].indexOf(l)>-1?(s=l,c.prefix=Di(l,{family:i})):u?c.iconName=u:l!==W.replacementClass&&!o.some(f=>l===r[f])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const f=s==="fa"?Lp(c.iconName):{},d=Zt(c.prefix,c.iconName);f.prefix&&(s=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Tn.far&&Tn.fas&&!W.autoFetchSvg&&(c.prefix="fas")}return c},Tc());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===We&&(Tn.fass||W.autoFetchSvg)&&(a.prefix="fass",a.iconName=Zt(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===ze&&(Tn.fasds||W.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Zt(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=fn()||"fas"),a}class tS{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},fa(i,s[i]);const o=xn[ge][i];o&&fa(o,s[i]),Np()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];t[i]||(t[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[i][l]=a)}),t[i][o]=a}),t}}let Wu=[],Jn={};const cr={},nS=Object.keys(cr);function rS(e,t){let{mixoutsTo:n}=t;return Wu=e,Jn={},Object.keys(cr).forEach(r=>{nS.indexOf(r)===-1&&delete cr[r]}),Wu.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Jn[o]||(Jn[o]=[]),Jn[o].push(i[o])})}r.provides&&r.provides(cr)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Jn[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function Dn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Jn[e]||[]).forEach(i=>{i.apply(null,n)})}function dn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return cr[e]?cr[e].apply(null,t):void 0}function ha(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||fn();if(t)return t=Zt(n,t)||t,Bu(Mp.definitions,n,t)||Bu(ht.styles,n,t)}const Mp=new tS,sS=()=>{W.autoReplaceSvg=!1,W.observeMutations=!1,Dn("noAuto")},iS={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Lt?(Dn("beforeI2svg",e),dn("pseudoElements2svg",e),dn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,WI(()=>{aS({autoReplaceSvgRoot:t}),Dn("watch",e)})}},oS={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Zt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Di(e[0]);return{prefix:n,iconName:Zt(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(RI))){const t=Fi(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||fn(),iconName:Zt(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=fn();return{prefix:t,iconName:Zt(t,e)||e}}}},Ke={noAuto:sS,config:W,dom:iS,parse:oS,library:Mp,findIconDefinition:ha,toHtml:_s},aS=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=he}=e;(Object.keys(ht.styles).length>0||W.autoFetchSvg)&&Lt&&W.autoReplaceSvg&&Ke.dom.i2svg({node:t})};function Hi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>_s(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Lt)return;const n=he.createElement("div");return n.innerHTML=e.html,n.children}}),e}function cS(e){let{children:t,main:n,mask:r,attributes:s,styles:i,transform:o}=e;if(Ec(o)&&n.found&&!r.found){const{width:a,height:c}=n,l={x:a/c/2,y:.5};s.style=Mi({...i,"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:t}]}function lS(e){let{prefix:t,iconName:n,children:r,attributes:s,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(W.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:r}]}]}function Cc(e){const{icons:{main:t,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:l,extra:u,watchable:f=!1}=e,{width:d,height:p}=n.found?n:t,v=r==="fak",E=[W.replacementClass,s?"".concat(W.cssPrefix,"-").concat(s):""].filter(b=>u.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(u.classes).join(" ");let P={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":s,class:E,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)}};const S=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(P.attributes[Mn]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(l||rs())},children:[a]}),delete P.attributes.title);const y={...P,prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...S,...u.styles}},{children:m,attributes:_}=n.found&&t.found?dn("generateAbstractMask",y)||{children:[],attributes:{}}:dn("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=m,y.attributes=_,o?lS(y):cS(y)}function zu(e){const{content:t,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(c[Mn]="");const l={...o.styles};Ec(s)&&(l.transform=$I({transform:s,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=Mi(l);u.length>0&&(c.style=u);const f=[];return f.push({tag:"span",attributes:c,children:[t]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function uS(e){const{content:t,title:n,extra:r}=e,s={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Mi(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:mo}=ht;function pa(e){const t=e[0],n=e[1],[r]=e.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(fo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(fo.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(fo.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:s}}const fS={found:!1,width:512,height:512};function dS(e,t){!vp&&!W.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ma(e,t){let n=t;return t==="fa"&&W.styleDefault!==null&&(t=fn()),new Promise((r,s)=>{if(n==="fa"){const i=Lp(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&mo[t]&&mo[t][e]){const i=mo[t][e];return r(pa(i))}dS(e,t),r({...fS,icon:W.showMissingIcons&&e?dn("missingIconAbstract")||{}:{}})})}const Ku=()=>{},ga=W.measurePerformance&&Ns&&Ns.mark&&Ns.measure?Ns:{mark:Ku,measure:Ku},kr='FA "6.6.0"',hS=e=>(ga.mark("".concat(kr," ").concat(e," begins")),()=>Dp(e)),Dp=e=>{ga.mark("".concat(kr," ").concat(e," ends")),ga.measure("".concat(kr," ").concat(e),"".concat(kr," ").concat(e," begins"),"".concat(kr," ").concat(e," ends"))};var Ac={begin:hS,end:Dp};const zs=()=>{};function Gu(e){return typeof(e.getAttribute?e.getAttribute(Mn):null)=="string"}function pS(e){const t=e.getAttribute?e.getAttribute(vc):null,n=e.getAttribute?e.getAttribute(bc):null;return t&&n}function mS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function gS(){return W.autoReplaceSvg===!0?Ks.replace:Ks[W.autoReplaceSvg]||Ks.replace}function yS(e){return he.createElementNS("http://www.w3.org/2000/svg",e)}function _S(e){return he.createElement(e)}function Fp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?yS:_S}=t;if(typeof e=="string")return he.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Fp(i,{ceFn:n}))}),r}function vS(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ks={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Fp(n),t)}),t.getAttribute(Mn)===null&&W.keepOriginalSource){let n=he.createComment(vS(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~wc(t).indexOf(W.replacementClass))return Ks.replace(e);const r=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===W.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>_s(i)).join(`
`);t.setAttribute(Mn,""),t.innerHTML=s}};function qu(e){e()}function Hp(e,t){const n=typeof t=="function"?t:zs;if(e.length===0)n();else{let r=qu;W.mutateApproach===CI&&(r=un.requestAnimationFrame||qu),r(()=>{const s=gS(),i=Ac.begin("mutate");e.map(s),i(),n()})}}let Pc=!1;function Up(){Pc=!0}function ya(){Pc=!1}let hi=null;function Yu(e){if(!Fu||!W.observeMutations)return;const{treeCallback:t=zs,nodeCallback:n=zs,pseudoElementsCallback:r=zs,observeMutationsRoot:s=he}=e;hi=new Fu(i=>{if(Pc)return;const o=fn();wr(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Gu(a.addedNodes[0])&&(W.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&W.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Gu(a.target)&&~xI.indexOf(a.attributeName))if(a.attributeName==="class"&&pS(a.target)){const{prefix:c,iconName:l}=Fi(wc(a.target));a.target.setAttribute(vc,c||o),l&&a.target.setAttribute(bc,l)}else mS(a.target)&&n(a.target)})}),Lt&&hi.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function bS(){hi&&hi.disconnect()}function wS(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function ES(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let s=Fi(wc(e));return s.prefix||(s.prefix=fn()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=QI(s.prefix,e.innerText)||Sc(s.prefix,ua(e.innerText))),!s.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function IS(e){const t=wr(e.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return W.autoA11y&&(n?t["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||rs()):(t["aria-hidden"]="true",t.focusable="false")),t}function SS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:dt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ju(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=ES(e),i=IS(e),o=da("parseNodeAttributes",{},e);let a=t.styleParser?wS(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:dt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i},...o}}const{styles:TS}=ht;function jp(e){const t=W.autoReplaceSvg==="nest"?Ju(e,{styleParser:!1}):Ju(e);return~t.extra.classes.indexOf(Ep)?dn("generateLayersText",e,t):dn("generateSvgReplacementMutation",e,t)}let gt=new Set;bp.map(e=>{gt.add("fa-".concat(e))});Object.keys(On[ge]).map(gt.add.bind(gt));Object.keys(On[We]).map(gt.add.bind(gt));Object.keys(On[ze]).map(gt.add.bind(gt));gt=[...gt];function Xu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Lt)return Promise.resolve();const n=he.documentElement.classList,r=u=>n.add("".concat(ju,"-").concat(u)),s=u=>n.remove("".concat(ju,"-").concat(u)),i=W.autoFetchSvg?gt:bp.map(u=>"fa-".concat(u)).concat(Object.keys(TS));i.includes("fa")||i.push("fa");const o=[".".concat(Ep,":not([").concat(Mn,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Mn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=wr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=Ac.begin("onTree"),l=a.reduce((u,f)=>{try{const d=jp(f);d&&u.push(d)}catch(d){vp||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(l).then(d=>{Hp(d,()=>{r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),c(),u()})}).catch(d=>{c(),f(d)})})}function CS(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jp(e).then(n=>{n&&Hp([n],t)})}function AS(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:ha(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:ha(s||{})),e(r,{...n,mask:s})}}const PS=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=dt,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:p}=e;return Hi({type:"icon",...e},()=>(Dn("beforeDOMElementCreation",{iconDefinition:e,params:t}),W.autoA11y&&(o?l["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(a||rs()):(l["aria-hidden"]="true",l.focusable="false")),Cc({icons:{main:pa(p),mask:s?pa(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...dt,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:l,styles:u,classes:c}})))};var RS={mixout(){return{icon:AS(PS)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Xu,e.nodeCallback=CS,e}}},provides(e){e.i2svg=function(t){const{node:n=he,callback:r=()=>{}}=t;return Xu(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:l,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([ma(r,o),l.iconName?ma(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[E,P]=v;d([t,Cc({icons:{main:E,mask:P},prefix:o,iconName:r,transform:a,symbol:c,maskId:u,title:s,titleId:i,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:s,transform:i,styles:o}=t;const a=Mi(o);a.length>0&&(r.style=a);let c;return Ec(i)&&(c=dn("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},kS={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Hi({type:"layer"},()=>{Dn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},OS={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=t;return Hi({type:"counter",content:e},()=>(Dn("beforeDOMElementCreation",{content:e,params:t}),uS({content:e.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(W.cssPrefix,"-layers-counter"),...r]}})))}}}},xS={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=dt,title:r=null,classes:s=[],attributes:i={},styles:o={}}=t;return Hi({type:"text",content:e},()=>(Dn("beforeDOMElementCreation",{content:e,params:t}),zu({content:e,transform:{...dt,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(W.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(hp){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,a=l.height/c}return W.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,zu({content:t.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const NS=new RegExp('"',"ug"),Qu=[1105920,1112319],Zu={FontAwesome:{normal:"fas",400:"fas"},...pI,...hI,...EI},_a=Object.keys(Zu).reduce((e,t)=>(e[t.toLowerCase()]=Zu[t],e),{}),LS=Object.keys(_a).reduce((e,t)=>{const n=_a[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function MS(e){const t=e.replace(NS,""),n=KI(t,0),r=n>=Qu[0]&&n<=Qu[1],s=t.length===2?t[0]===t[1]:!1;return{value:ua(s?t[0]:t),isSecondary:r||s}}function DS(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),s=isNaN(r)?"normal":r;return(_a[n]||{})[s]||LS[n]}function ef(e,t){const n="".concat(TI).concat(t.replace(":","-"));return new Promise((r,s)=>{if(e.getAttribute(n)!==null)return r();const o=wr(e.children).filter(d=>d.getAttribute(oa)===t)[0],a=un.getComputedStyle(e,t),c=a.getPropertyValue("font-family"),l=c.match(kI),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=DS(c,u);const{value:v,isSecondary:E}=MS(d),P=l[0].startsWith("FontAwesome");let S=Sc(p,v),y=S;if(P){const m=ZI(v);m.iconName&&m.prefix&&(S=m.iconName,p=m.prefix)}if(S&&!E&&(!o||o.getAttribute(vc)!==p||o.getAttribute(bc)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);const m=SS(),{extra:_}=m;_.attributes[oa]=t,ma(S,p).then(b=>{const I=Cc({...m,icons:{main:b,mask:Tc()},prefix:p,iconName:y,extra:_,watchable:!0}),R=he.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=I.map(N=>_s(N)).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function FS(e){return Promise.all([ef(e,"::before"),ef(e,"::after")])}function HS(e){return e.parentNode!==document.head&&!~AI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(oa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function tf(e){if(Lt)return new Promise((t,n)=>{const r=wr(e.querySelectorAll("*")).filter(HS).map(FS),s=Ac.begin("searchPseudoElements");Up(),Promise.all(r).then(()=>{s(),ya(),t()}).catch(()=>{s(),ya(),n()})})}var US={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=tf,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=he}=t;W.searchPseudoElements&&tf(n)}}};let nf=!1;var jS={mixout(){return{dom:{unwatch(){Up(),nf=!0}}}},hooks(){return{bootstrap(){Yu(da("mutationObserverCallbacks",{}))},noAuto(){bS()},watch(e){const{observeMutationsRoot:t}=e;nf?ya():Yu(da("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const rf=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var $S={mixout(){return{parse:{transform:e=>rf(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=rf(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:s,iconWidth:i}=t;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(c," ").concat(l)},f={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const go={x:0,y:0,width:"100%",height:"100%"};function sf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function BS(e){return e.tag==="g"?e.children:[e]}var VS={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Fi(n.split(" ").map(s=>s.trim())):Tc();return r.prefix||(r.prefix=fn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=t;const{width:c,icon:l}=s,{width:u,icon:f}=i,d=jI({transform:a,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:{...go,fill:"white"}},v=l.children?{children:l.children.map(sf)}:{},E={tag:"g",attributes:{...d.inner},children:[sf({tag:l.tag,attributes:{...l.attributes,...d.path},...v})]},P={tag:"g",attributes:{...d.outer},children:[E]},S="mask-".concat(o||rs()),y="clip-".concat(o||rs()),m={tag:"mask",attributes:{...go,id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,P]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:BS(f)},m]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")"),...go}}),{children:n,attributes:r}}}},WS={provides(e){let t=!1;un.matchMedia&&(t=un.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},zS={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},KS=[VI,RS,kS,OS,xS,US,jS,$S,VS,WS,zS];rS(KS,{mixoutsTo:Ke});Ke.noAuto;const $p=Ke.config,Bp=Ke.library;Ke.dom;const va=Ke.parse;Ke.findIconDefinition;Ke.toHtml;const GS=Ke.icon;Ke.layer;Ke.text;Ke.counter;function of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?of(Object(n),!0).forEach(function(r){De(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YS(e){var t=qS(e,"string");return typeof t=="symbol"?t:t+""}function pi(e){"@babel/helpers - typeof";return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(e)}function De(e,t,n){return t=YS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JS(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function XS(e,t){if(e==null)return{};var n=JS(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var QS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vp={exports:{}};(function(e){(function(t){var n=function(S,y,m){if(!l(y)||f(y)||d(y)||p(y)||c(y))return y;var _,b=0,I=0;if(u(y))for(_=[],I=y.length;b<I;b++)_.push(n(S,y[b],m));else{_={};for(var R in y)Object.prototype.hasOwnProperty.call(y,R)&&(_[S(R,m)]=n(S,y[R],m))}return _},r=function(S,y){y=y||{};var m=y.separator||"_",_=y.split||/(?=[A-Z])/;return S.split(_).join(m)},s=function(S){return v(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(y,m){return m?m.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},i=function(S){var y=s(S);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(S,y){return r(S,y).toLowerCase()},a=Object.prototype.toString,c=function(S){return typeof S=="function"},l=function(S){return S===Object(S)},u=function(S){return a.call(S)=="[object Array]"},f=function(S){return a.call(S)=="[object Date]"},d=function(S){return a.call(S)=="[object RegExp]"},p=function(S){return a.call(S)=="[object Boolean]"},v=function(S){return S=S-0,S===S},E=function(S,y){var m=y&&"process"in y?y.process:y;return typeof m!="function"?S:function(_,b){return m(_,S,b)}},P={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(S,y){return n(E(s,y),S)},decamelizeKeys:function(S,y){return n(E(o,y),S,y)},pascalizeKeys:function(S,y){return n(E(i,y),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(QS)})(Vp);var ZS=Vp.exports,eT=["class","style"];function tT(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=ZS.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function nT(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Wp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Wp(c)}),s=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=nT(u);break;case"style":c.style=tT(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=XS(n,eT);return Le(e.tag,bt(bt(bt({},t),{},{class:s.class,style:bt(bt({},s.style),o)},s.attrs),a),r)}var zp=!1;try{zp=!0}catch{}function rT(){if(!zp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function sT(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(De(De(De(De(De(De(De(De(De(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),De(De(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function af(e){if(e&&pi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(va.icon)return va.icon(e);if(e===null)return null;if(pi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var iT=Ot({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=Ee(function(){return af(t.icon)}),i=Ee(function(){return yo("classes",sT(t))}),o=Ee(function(){return yo("transform",typeof t.transform=="string"?va.transform(t.transform):t.transform)}),a=Ee(function(){return yo("mask",af(t.mask))}),c=Ee(function(){return GS(s.value,bt(bt(bt(bt({},i.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});rn(c,function(u){if(!u)return rT("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Ee(function(){return c.value?Wp(c.value.abstract[0],{},r):null});return function(){return l.value}}});const oT={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},aT={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},cT={prefix:"fab",iconName:"imdb",icon:[448,512,[],"f2d8","M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"]},lT={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},uT={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};$p.autoAddCss=!1;Bp.add(oT);Bp.add(lT,aT,uT,cT);$p.autoAddCss=!1;const fT=Qe(e=>{e.vueApp.component("font-awesome-icon",iT,{})}),dT=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Kp;const Ui=e=>Kp=e,Gp=Symbol();function ba(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var $r;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})($r||($r={}));function hT(){const e=Ca(!0),t=e.run(()=>st({}));let n=[],r=[];const s=La({install(i){Ui(s),s._a=i,i.provide(Gp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!dT?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const qp=()=>{};function cf(e,t,n,r=qp){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Aa()&&fm(s),s}function zn(e,...t){e.slice().forEach(n=>{n(...t)})}const pT=e=>e();function wa(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ba(s)&&ba(r)&&e.hasOwnProperty(n)&&!we(r)&&!tn(r)?e[n]=wa(s,r):e[n]=r}return e}const mT=Symbol();function gT(e){return!ba(e)||!e.hasOwnProperty(mT)}const{assign:Bt}=Object;function yT(e){return!!(we(e)&&e.effect)}function _T(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Mm(n.state.value[e]);return Bt(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=La(Ee(()=>{Ui(n);const p=n._s.get(e);return o[d].call(p,p)})),f),{}))}return c=Yp(e,l,t,n,r,!0),c}function Yp(e,t,n={},r,s,i){let o;const a=Bt({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],p;const v=r.state.value[e];!i&&!v&&(r.state.value[e]={}),st({});let E;function P(N){let T;l=u=!1,typeof N=="function"?(N(r.state.value[e]),T={type:$r.patchFunction,storeId:e,events:p}):(wa(r.state.value[e],N),T={type:$r.patchObject,payload:N,storeId:e,events:p});const O=E=Symbol();Hn().then(()=>{E===O&&(l=!0)}),u=!0,zn(f,T,r.state.value[e])}const S=i?function(){const{state:T}=n,O=T?T():{};this.$patch(V=>{Bt(V,O)})}:qp;function y(){o.stop(),f=[],d=[],r._s.delete(e)}function m(N,T){return function(){Ui(r);const O=Array.from(arguments),V=[],L=[];function K(H){V.push(H)}function re(H){L.push(H)}zn(d,{args:O,name:N,store:b,after:K,onError:re});let te;try{te=T.apply(this&&this.$id===e?this:b,O)}catch(H){throw zn(L,H),H}return te instanceof Promise?te.then(H=>(zn(V,H),H)).catch(H=>(zn(L,H),Promise.reject(H))):(zn(V,te),te)}}const _={_p:r,$id:e,$onAction:cf.bind(null,d),$patch:P,$reset:S,$subscribe(N,T={}){const O=cf(f,N,T.detached,()=>V()),V=o.run(()=>rn(()=>r.state.value[e],L=>{(T.flush==="sync"?u:l)&&N({storeId:e,type:$r.direct,events:p},L)},Bt({},c,T)));return O},$dispose:y},b=gn(_);r._s.set(e,b);const R=(r._a&&r._a.runWithContext||pT)(()=>r._e.run(()=>(o=Ca()).run(t)));for(const N in R){const T=R[N];if(we(T)&&!yT(T)||tn(T))i||(v&&gT(T)&&(we(T)?T.value=v[N]:wa(T,v[N])),r.state.value[e][N]=T);else if(typeof T=="function"){const O=m(N,T);R[N]=O,a.actions[N]=T}}return Bt(b,R),Bt(ie(b),R),Object.defineProperty(b,"$state",{get:()=>r.state.value[e],set:N=>{P(T=>{Bt(T,N)})}}),r._p.forEach(N=>{Bt(b,o.run(()=>N({store:b,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(b.$state,v),l=!0,u=!0,b}function ZT(e,t,n){let r,s;const i=typeof t=="function";r=e,s=i?n:t;function o(a,c){const l=$a();return a=a||(l?ke(Gp,null):null),a&&Ui(a),a=Kp,a._s.has(r)||(i?Yp(r,t,s,a):_T(r,s,a)),a._s.get(r)}return o.$id=r,o}const vT=Qe(e=>{const t=hT();e.vueApp.use(t)}),bT=[Kv,qv,f0,d0,h0,p0,g0,y0,_0,aI,fT,vT],wT=Ot({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const t=e.renderKey,n=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>t===e.renderKey?e.route[s]:n[s]});return Rn(us,wt(r)),()=>Le(e.vnode,{ref:e.vnodeRef})}}),ET=Ot({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t,slots:n,expose:r}){const s=be(),i=st(),o=ke(us,null);let a;r({pageRef:i});const c=ke(qd,null);let l;const u=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",u);Xe().beforeEach(f)}return e.pageKey&&rn(()=>e.pageKey,(f,d)=>{f!==d&&s.callHook("page:loading:start")}),()=>Le(yh,{name:e.name,route:e.route,...t},{default:f=>{const d=ST(o,f.route,f.Component),p=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(l&&!p)return l;u();return}if(l&&c&&!c.isCurrent(f.route))return l;if(d&&o&&(!c||c!=null&&c.isCurrent(o)))return p?l:null;const v=Jo(f,e.pageKey);!s.isHydrating&&!TT(o,f.route,f.Component)&&a===v&&s.callHook("page:loading:end"),a=v;const E=!!(e.transition??f.route.meta.pageTransition??Uo),P=E&&IT([e.transition,f.route.meta.pageTransition,Uo,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),S=e.keepalive??f.route.meta.keepalive??N_;return l=_h(Ti,E&&P,e0(S,Le(za,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{Hn(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(u))}},{default:()=>{const y=Le(wT,{key:v||void 0,vnode:n.default?Le(Ne,void 0,n.default(f)):f.Component,route:f.route,renderKey:v||void 0,trackRootNodes:E,vnodeRef:i});return S&&(y.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),y}}))).default(),l}})}});function IT(e){const t=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?ic(n.onAfterLeave):void 0}));return Kd(...t)}function ST(e,t,n){if(!e)return!1;const r=t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:t.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=e.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Jo({route:t,Component:n})!==Jo({route:e,Component:n})}function TT(e,t,n){return e?t.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<t.matched.length-1:!1}const CT=Ot({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,t){const n=await Qt[e.name]().then(r=>r.default||r);return()=>Le(n,e.layoutProps,t.slots)}}),AT=Ot({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,t){const n=be(),r=ke(us),s=r===Za()?Qb():r,i=Ee(()=>{let c=ue(e.name)??s.meta.layout??"default";return c&&!(c in Qt)&&e.fallback&&(c=ue(e.fallback)),c}),o=st();t.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);Xe().beforeEach(c)}return()=>{const c=i.value&&i.value in Qt,l=s.meta.layoutTransition??x_;return _h(Ti,c&&l,{default:()=>Le(za,{suspensible:!0,onResolve:()=>{Hn(a)}},{default:()=>Le(PT,{layoutProps:Cd(t.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!e.name,hasTransition:!!l},t.slots)})}).default()}}}),PT=Ot({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,t){const n=e.name;return e.shouldProvide&&Rn(qd,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Qt)?(s=(r=t.slots).default)==null?void 0:s.call(r):Le(CT,{key:n,layoutProps:e.layoutProps,name:n},t.slots)}}}),RT=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},kT={};function OT(e,t){const n=ET,r=AT;return nt(),vt(r,null,{default:Fa(()=>[ye(n)]),_:1})}const xT=RT(kT,[["render",OT]]),NT={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?Bc(()=>ve(()=>import("./C-SHkBdE.js"),__vite__mapDeps([27,9,28,29]),import.meta.url).then(f=>f.default||f)):Bc(()=>ve(()=>import("./DXREcwd8.js"),__vite__mapDeps([30,28,31]),import.meta.url).then(f=>f.default||f));return(f,d)=>(nt(),vt(ue(u),om(Sd({statusCode:ue(r),statusMessage:ue(i),description:ue(o),stack:ue(a)})),null,16))}},LT={key:0},lf={__name:"nuxt-root",setup(e){const t=()=>null,n=be(),r=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",r);Xe().beforeEach(c)}const s=!1;Rn(us,Za()),n.hooks.callHookWith(c=>c.map(l=>l()),"vue:setup");const i=Ci(),o=!1;Jf((c,l,u)=>{if(n.hooks.callHook("vue:error",c,l,u).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),Z_(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>qn(c)),!1});const a=!1;return(c,l)=>(nt(),vt(za,{onResolve:ue(r)},{default:Fa(()=>[ue(o)?(nt(),jg("div",LT)):ue(i)?(nt(),vt(ue(NT),{key:1,error:ue(i)},null,8,["error"])):ue(a)?(nt(),vt(ue(t),{key:2,context:ue(a)},null,8,["context"])):ue(s)?(nt(),vt(ng(ue(s)),{key:3})):(nt(),vt(ue(xT),{key:4}))]),_:1},8,["onResolve"]))}};let uf;{let e;uf=async function(){var o,a;if(e)return e;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?Cy(lf):Ty(lf),s=F_({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||Ai(c)}r.config.errorHandler=i;try{await j_(s,bT)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(M_),await s.hooks.callHook("app:mounted",r),await Hn()}catch(c){i(c)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},e=uf().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{ls as $,ln as A,ke as B,Rn as C,ue as D,Hn as E,Ne as F,FT as G,WT as H,VT as I,HT as J,vt as K,Xe as L,Ot as M,be as N,Ha as O,us as P,oc as Q,su as R,X_ as S,YT as T,Le as U,Vy as V,KT as W,Un as X,Ja as Y,GT as Z,RT as _,Id as a,Do as a0,Ya as a1,jT as a2,_i as a3,yi as a4,Ti as a5,om as a6,Sd as a7,ET as a8,ZT as a9,JT as aa,QT as ab,XT as ac,ye as b,jg as c,Td as d,DT as e,$T as f,rn as g,Ua as h,qT as i,Ym as j,qm as k,Wo as l,Ga as m,zT as n,nt as o,MT as p,BT as q,st as r,UT as s,lm as t,Xm as u,we as v,Fa as w,gn as x,Ee as y,tn as z};
