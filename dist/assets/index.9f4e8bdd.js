(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ua(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",im=ua(sm);function zu(t){return!!t||t===""}function rr(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=$e(s)?am(s):rr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if($e(t))return t;if(Te(t))return t}}const rm=/;(?![^(]*\))/g,om=/:(.+)/;function am(t){const e={};return t.split(rm).forEach(n=>{if(n){const s=n.split(om);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ti(t){let e="";if($e(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=ti(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const es=t=>$e(t)?t:t==null?"":q(t)||Te(t)&&(t.toString===Yu||!Q(t.toString))?JSON.stringify(t,qu,2):String(t),qu=(t,e)=>e&&e.__v_isRef?qu(t,e.value):Gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!q(e)&&!Qu(e)?String(e):e,pe={},Kn=[],gt=()=>{},lm=()=>!1,cm=/^on[^a-z]/,or=t=>cm.test(t),fa=t=>t.startsWith("onUpdate:"),je=Object.assign,ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},um=Object.prototype.hasOwnProperty,se=(t,e)=>um.call(t,e),q=Array.isArray,Gn=t=>ar(t)==="[object Map]",Ku=t=>ar(t)==="[object Set]",Q=t=>typeof t=="function",$e=t=>typeof t=="string",da=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Gu=t=>Te(t)&&Q(t.then)&&Q(t.catch),Yu=Object.prototype.toString,ar=t=>Yu.call(t),fm=t=>ar(t).slice(8,-1),Qu=t=>ar(t)==="[object Object]",pa=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hm=/-(\w)/g,Rt=lr(t=>t.replace(hm,(e,n)=>n?n.toUpperCase():"")),dm=/\B([A-Z])/g,fs=lr(t=>t.replace(dm,"-$1").toLowerCase()),cr=lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dr=lr(t=>t?`on${cr(t)}`:""),$s=(t,e)=>!Object.is(t,e),Fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ol;const pm=()=>Ol||(Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class Ju{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&tt&&(this.parent=tt,this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Zu(t){return new Ju(t)}function mm(t,e=tt){e&&e.active&&e.effects.push(t)}function _m(){return tt}function gm(t){tt&&tt.cleanups.push(t)}const ma=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ef=t=>(t.w&tn)>0,tf=t=>(t.n&tn)>0,ym=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tn},vm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ef(i)&&!tf(i)?i.delete(t):e[n++]=i,i.w&=~tn,i.n&=~tn}e.length=n}},ho=new WeakMap;let Ts=0,tn=1;const po=30;let ft;const wn=Symbol(""),mo=Symbol("");class _a{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mm(this,s)}run(){if(!this.active)return this.fn();let e=ft,n=Qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ft,ft=this,Qt=!0,tn=1<<++Ts,Ts<=po?ym(this):Pl(this),this.fn()}finally{Ts<=po&&vm(this),tn=1<<--Ts,ft=this.parent,Qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Pl(this),this.onStop&&this.onStop(),this.active=!1)}}function Pl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Qt=!0;const nf=[];function hs(){nf.push(Qt),Qt=!1}function ds(){const t=nf.pop();Qt=t===void 0?!0:t}function it(t,e,n){if(Qt&&ft){let s=ho.get(t);s||ho.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ma()),sf(i)}}function sf(t,e){let n=!1;Ts<=po?tf(t)||(t.n|=tn,n=!ef(t)):n=!t.has(ft),n&&(t.add(ft),ft.deps.push(t))}function Lt(t,e,n,s,i,r){const o=ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?pa(n)&&a.push(o.get("length")):(a.push(o.get(wn)),Gn(t)&&a.push(o.get(mo)));break;case"delete":q(t)||(a.push(o.get(wn)),Gn(t)&&a.push(o.get(mo)));break;case"set":Gn(t)&&a.push(o.get(wn));break}if(a.length===1)a[0]&&_o(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_o(ma(l))}}function _o(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&kl(s);for(const s of n)s.computed||kl(s)}function kl(t,e){(t!==ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bm=ua("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(da)),Em=ga(),Cm=ga(!1,!0),wm=ga(!0),Ml=Im();function Im(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let r=0,o=this.length;r<o;r++)it(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs();const s=re(this)[e].apply(this,n);return ds(),s}}),t}function ga(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?jm:uf:e?cf:lf).get(s))return s;const o=q(s);if(!t&&o&&se(Ml,i))return Reflect.get(Ml,i,r);const a=Reflect.get(s,i,r);return(da(i)?rf.has(i):bm(i))||(t||it(s,"get",i),e)?a:Oe(a)?o&&pa(i)?a:a.value:Te(a)?t?ff(a):Bt(a):a}}const Tm=of(),Sm=of(!0);function of(t=!1){return function(n,s,i,r){let o=n[s];if(ts(o)&&Oe(o)&&!Oe(i))return!1;if(!t&&(!ki(i)&&!ts(i)&&(o=re(o),i=re(i)),!q(n)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const a=q(n)&&pa(s)?Number(s)<n.length:se(n,s),l=Reflect.set(n,s,i,r);return n===re(r)&&(a?$s(i,o)&&Lt(n,"set",s,i):Lt(n,"add",s,i)),l}}function xm(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Lt(t,"delete",e,void 0),s}function Rm(t,e){const n=Reflect.has(t,e);return(!da(e)||!rf.has(e))&&it(t,"has",e),n}function Am(t){return it(t,"iterate",q(t)?"length":wn),Reflect.ownKeys(t)}const af={get:Em,set:Tm,deleteProperty:xm,has:Rm,ownKeys:Am},Nm={get:wm,set(t,e){return!0},deleteProperty(t,e){return!0}},Om=je({},af,{get:Cm,set:Sm}),ya=t=>t,ur=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const i=re(t),r=re(e);n||(e!==r&&it(i,"get",e),it(i,"get",r));const{has:o}=ur(i),a=s?ya:n?Ea:Bs;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,s=re(n),i=re(t);return e||(t!==i&&it(s,"has",t),it(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function yi(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",wn),Reflect.get(t,"size",t)}function Dl(t){t=re(t);const e=re(this);return ur(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function Fl(t,e){e=re(e);const n=re(this),{has:s,get:i}=ur(n);let r=s.call(n,t);r||(t=re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?$s(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function Ll(t){const e=re(this),{has:n,get:s}=ur(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Lt(e,"delete",t,void 0),r}function $l(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function vi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=re(o),l=e?ya:t?Ea:Bs;return!t&&it(a,"iterate",wn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function bi(t,e,n){return function(...s){const i=this.__v_raw,r=re(i),o=Gn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ya:e?Ea:Bs;return!e&&it(r,"iterate",l?mo:wn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function Pm(){const t={get(r){return _i(this,r)},get size(){return yi(this)},has:gi,add:Dl,set:Fl,delete:Ll,clear:$l,forEach:vi(!1,!1)},e={get(r){return _i(this,r,!1,!0)},get size(){return yi(this)},has:gi,add:Dl,set:Fl,delete:Ll,clear:$l,forEach:vi(!1,!0)},n={get(r){return _i(this,r,!0)},get size(){return yi(this,!0)},has(r){return gi.call(this,r,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:vi(!0,!1)},s={get(r){return _i(this,r,!0,!0)},get size(){return yi(this,!0)},has(r){return gi.call(this,r,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bi(r,!1,!1),n[r]=bi(r,!0,!1),e[r]=bi(r,!1,!0),s[r]=bi(r,!0,!0)}),[t,n,e,s]}const[km,Mm,Dm,Fm]=Pm();function va(t,e){const n=e?t?Fm:Dm:t?Mm:km;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(se(n,i)&&i in s?n:s,i,r)}const Lm={get:va(!1,!1)},$m={get:va(!1,!0)},Bm={get:va(!0,!1)},lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,jm=new WeakMap;function Vm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hm(t){return t.__v_skip||!Object.isExtensible(t)?0:Vm(fm(t))}function Bt(t){return ts(t)?t:ba(t,!1,af,Lm,lf)}function Wm(t){return ba(t,!1,Om,$m,cf)}function ff(t){return ba(t,!0,Nm,Bm,uf)}function ba(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Hm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Xt(t){return ts(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function ki(t){return!!(t&&t.__v_isShallow)}function hf(t){return Xt(t)||ts(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function ns(t){return Pi(t,"__v_skip",!0),t}const Bs=t=>Te(t)?Bt(t):t,Ea=t=>Te(t)?ff(t):t;function df(t){Qt&&ft&&(t=re(t),sf(t.dep||(t.dep=ma())))}function pf(t,e){t=re(t),t.dep&&_o(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Be(t){return mf(t,!1)}function Um(t){return mf(t,!0)}function mf(t,e){return Oe(t)?t:new zm(t,e)}class zm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Bs(e)}get value(){return df(this),this._value}set value(e){const n=this.__v_isShallow||ki(e)||ts(e);e=n?e:re(e),$s(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bs(e),pf(this))}}function xe(t){return Oe(t)?t.value:t}const qm={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function _f(t){return Xt(t)?t:new Proxy(t,qm)}function Km(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=Ym(t,n);return e}class Gm{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ym(t,e,n){const s=t[e];return Oe(s)?s:new Gm(t,e,n)}var gf;class Qm{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[gf]=!1,this._dirty=!0,this.effect=new _a(e,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=re(this);return df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}gf="__v_isReadonly";function Xm(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=gt):(s=t.get,i=t.set),new Qm(s,i,r||!i,n)}function Jt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){fr(r,e,n)}return i}function lt(t,e,n,s){if(Q(t)){const r=Jt(t,e,n,s);return r&&Gu(r)&&r.catch(o=>{fr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(lt(t[r],e,n,s));return i}function fr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,a]);return}}Jm(t,n,i,s)}function Jm(t,e,n,s=!0){console.error(t)}let Mi=!1,go=!1;const We=[];let St=0;const Yn=[];let Pt=null,_n=0;const yf=Promise.resolve();let Ca=null;function wa(t){const e=Ca||yf;return t?e.then(this?t.bind(this):t):e}function Zm(t){let e=St+1,n=We.length;for(;e<n;){const s=e+n>>>1;js(We[s])<t?e=s+1:n=s}return e}function Ia(t){(!We.length||!We.includes(t,Mi&&t.allowRecurse?St+1:St))&&(t.id==null?We.push(t):We.splice(Zm(t.id),0,t),vf())}function vf(){!Mi&&!go&&(go=!0,Ca=yf.then(Ef))}function e_(t){const e=We.indexOf(t);e>St&&We.splice(e,1)}function t_(t){q(t)?Yn.push(...t):(!Pt||!Pt.includes(t,t.allowRecurse?_n+1:_n))&&Yn.push(t),vf()}function Bl(t,e=St){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function bf(t){if(Yn.length){const e=[...new Set(Yn)];if(Yn.length=0,Pt){Pt.push(...e);return}for(Pt=e,Pt.sort((n,s)=>js(n)-js(s)),_n=0;_n<Pt.length;_n++)Pt[_n]();Pt=null,_n=0}}const js=t=>t.id==null?1/0:t.id,n_=(t,e)=>{const n=js(t)-js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ef(t){go=!1,Mi=!0,We.sort(n_);const e=gt;try{for(St=0;St<We.length;St++){const n=We[St];n&&n.active!==!1&&Jt(n,null,14)}}finally{St=0,We.length=0,bf(),Mi=!1,Ca=null,(We.length||Yn.length)&&Ef()}}function s_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=s[u]||pe;h&&(i=n.map(p=>p.trim())),f&&(i=n.map(Xu))}let a,l=s[a=Dr(e)]||s[a=Dr(Rt(e))];!l&&r&&(l=s[a=Dr(fs(e))]),l&&lt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(c,t,6,i)}}function Cf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=Cf(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Te(t)&&s.set(t,null),null):(q(r)?r.forEach(l=>o[l]=null):je(o,r),Te(t)&&s.set(t,o),o)}function hr(t,e){return!t||!or(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,fs(e))||se(t,e))}let at=null,wf=null;function Di(t){const e=at;return at=t,wf=t&&t.type.__scopeId||null,e}function If(t,e=at,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ql(-1);const r=Di(e),o=t(...i);return Di(r),s._d&&Ql(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Lr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:_,inheritAttrs:y}=t;let b,w;const A=Di(t);try{if(n.shapeFlag&4){const P=i||s;b=Tt(u.call(P,P,f,r,p,h,_)),w=l}else{const P=e;b=Tt(P.length>1?P(r,{attrs:l,slots:a,emit:c}):P(r,null)),w=e.props?l:i_(l)}}catch(P){Ss.length=0,fr(P,t,1),b=Ne(yt)}let x=b;if(w&&y!==!1){const P=Object.keys(w),{shapeFlag:F}=x;P.length&&F&7&&(o&&P.some(fa)&&(w=r_(w,o)),x=nn(x,w))}return n.dirs&&(x=nn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),b=x,Di(A),b}const i_=t=>{let e;for(const n in t)(n==="class"||n==="style"||or(n))&&((e||(e={}))[n]=t[n]);return e},r_=(t,e)=>{const n={};for(const s in t)(!fa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function o_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?jl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==s[h]&&!hr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?jl(s,o,c):!0:!!o;return!1}function jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!hr(n,r))return!0}return!1}function a_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const l_=t=>t.__isSuspense;function c_(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):t_(t)}function Si(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=Fe||at;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e}}const Vl={};function Pe(t,e,n){return Tf(t,e,n)}function Tf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=pe){const a=Fe;let l,c=!1,u=!1;if(Oe(t)?(l=()=>t.value,c=ki(t)):Xt(t)?(l=()=>t,s=!0):q(t)?(u=!0,c=t.some(w=>Xt(w)||ki(w)),l=()=>t.map(w=>{if(Oe(w))return w.value;if(Xt(w))return vn(w);if(Q(w))return Jt(w,a,2)})):Q(t)?e?l=()=>Jt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),lt(t,a,3,[h])}:l=gt,e&&s){const w=l;l=()=>vn(w())}let f,h=w=>{f=b.onStop=()=>{Jt(w,a,4)}};if(Hs)return h=gt,e?n&&lt(e,a,3,[l(),u?[]:void 0,h]):l(),gt;let p=u?[]:Vl;const _=()=>{if(!!b.active)if(e){const w=b.run();(s||c||(u?w.some((A,x)=>$s(A,p[x])):$s(w,p)))&&(f&&f(),lt(e,a,3,[w,p===Vl?void 0:p,h]),p=w)}else b.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>qe(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Ia(_));const b=new _a(l,y);return e?n?_():p=b.run():i==="post"?qe(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&ha(a.scope.effects,b)}}function u_(t,e,n){const s=this.proxy,i=$e(t)?t.includes(".")?Sf(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Fe;ss(this);const a=Tf(i,r.bind(s),n);return o?ss(o):In(),a}function Sf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function vn(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))vn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)vn(t[n],e);else if(Ku(t)||Gn(t))t.forEach(n=>{vn(n,e)});else if(Qu(t))for(const n in t)vn(t[n],e);return t}function f_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Of(()=>{t.isMounted=!0}),Pf(()=>{t.isUnmounting=!0}),t}const ot=[Function,Array],h_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=yr(),s=f_();let i;return()=>{const r=e.default&&Af(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==yt){o=y;break}}const a=re(t),{mode:l}=a;if(s.isLeaving)return $r(o);const c=Hl(o);if(!c)return $r(o);const u=yo(c,a,s,n);vo(c,u);const f=n.subTree,h=f&&Hl(f);let p=!1;const{getTransitionKey:_}=c.type;if(_){const y=_();i===void 0?i=y:y!==i&&(i=y,p=!0)}if(h&&h.type!==yt&&(!gn(c,h)||p)){const y=yo(h,a,s,n);if(vo(h,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update()},$r(o);l==="in-out"&&c.type!==yt&&(y.delayLeave=(b,w,A)=>{const x=Rf(s,h);x[String(h.key)]=h,b._leaveCb=()=>{w(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},xf=h_;function Rf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:A}=e,x=String(t.key),P=Rf(n,t),F=(M,U)=>{M&&lt(M,s,9,U)},X=(M,U)=>{const ne=U[1];F(M,U),q(M)?M.every(ue=>ue.length<=1)&&ne():M.length<=1&&ne()},W={mode:r,persisted:o,beforeEnter(M){let U=a;if(!n.isMounted)if(i)U=y||a;else return;M._leaveCb&&M._leaveCb(!0);const ne=P[x];ne&&gn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),F(U,[M])},enter(M){let U=l,ne=c,ue=u;if(!n.isMounted)if(i)U=b||l,ne=w||c,ue=A||u;else return;let D=!1;const ae=M._enterCb=_e=>{D||(D=!0,_e?F(ue,[M]):F(ne,[M]),W.delayedLeave&&W.delayedLeave(),M._enterCb=void 0)};U?X(U,[M,ae]):ae()},leave(M,U){const ne=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return U();F(f,[M]);let ue=!1;const D=M._leaveCb=ae=>{ue||(ue=!0,U(),ae?F(_,[M]):F(p,[M]),M._leaveCb=void 0,P[ne]===t&&delete P[ne])};P[ne]=t,h?X(h,[M,D]):D()},clone(M){return yo(M,e,n,s)}};return W}function $r(t){if(dr(t))return t=nn(t),t.children=null,t}function Hl(t){return dr(t)?t.children?t.children[0]:void 0:t}function vo(t,e){t.shapeFlag&6&&t.component?vo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Af(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&i++,s=s.concat(Af(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?nn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function At(t){return Q(t)?{setup:t,name:t.name}:t}const xi=t=>!!t.type.__asyncLoader,dr=t=>t.type.__isKeepAlive;function d_(t,e){Nf(t,"a",e)}function p_(t,e){Nf(t,"da",e)}function Nf(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)dr(i.parent.vnode)&&m_(s,e,n,i),i=i.parent}}function m_(t,e,n,s){const i=pr(e,t,s,!0);mr(()=>{ha(s[e],i)},n)}function pr(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hs(),ss(n);const a=lt(e,n,t,o);return In(),ds(),a});return s?i.unshift(r):i.push(r),r}}const jt=t=>(e,n=Fe)=>(!Hs||t==="sp")&&pr(t,e,n),__=jt("bm"),Of=jt("m"),g_=jt("bu"),y_=jt("u"),Pf=jt("bum"),mr=jt("um"),v_=jt("sp"),b_=jt("rtg"),E_=jt("rtc");function C_(t,e=Fe){pr("ec",t,e)}function ht(t,e){const n=at;if(n===null)return t;const s=vr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=pe]=e[r];Q(o)&&(o={mounted:o,updated:o}),o.deep&&vn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function an(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hs(),lt(l,n,8,[t.el,a,t,e]),ds())}}const w_="components",I_="directives",T_=Symbol();function ni(t){return S_(I_,t)}function S_(t,e,n=!0,s=!1){const i=at||Fe;if(i){const r=i.type;if(t===w_){const a=tg(r,!1);if(a&&(a===e||a===Rt(e)||a===cr(Rt(e))))return r}const o=Wl(i[t]||r[t],e)||Wl(i.appContext[t],e);return!o&&s?r:o}}function Wl(t,e){return t&&(t[e]||t[Rt(e)]||t[cr(Rt(e))])}function _r(t,e,n,s){let i;const r=n&&n[s];if(q(t)||$e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const bo=t=>t?zf(t)?vr(t)||t.proxy:bo(t.parent):null,Fi=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bo(t.parent),$root:t=>bo(t.root),$emit:t=>t.emit,$options:t=>Mf(t),$forceUpdate:t=>t.f||(t.f=()=>Ia(t.update)),$nextTick:t=>t.n||(t.n=wa.bind(t.proxy)),$watch:t=>u_.bind(t)}),x_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==pe&&se(s,e))return o[e]=1,s[e];if(i!==pe&&se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,r[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];Eo&&(o[e]=0)}}const u=Fi[e];let f,h;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,se(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==pe&&se(i,e)?(i[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==pe&&se(t,o)||e!==pe&&se(e,o)||(a=r[0])&&se(a,o)||se(s,o)||se(Fi,o)||se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Eo=!0;function R_(t){const e=Mf(t),n=t.proxy,s=t.ctx;Eo=!1,e.beforeCreate&&Ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:y,deactivated:b,beforeDestroy:w,beforeUnmount:A,destroyed:x,unmounted:P,render:F,renderTracked:X,renderTriggered:W,errorCaptured:M,serverPrefetch:U,expose:ne,inheritAttrs:ue,components:D,directives:ae,filters:_e}=e;if(c&&A_(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const fe=o[ge];Q(fe)&&(s[ge]=fe.bind(n))}if(i){const ge=i.call(n,n);Te(ge)&&(t.data=Bt(ge))}if(Eo=!0,r)for(const ge in r){const fe=r[ge],Ze=Q(fe)?fe.bind(n,n):Q(fe.get)?fe.get.bind(n,n):gt,Bn=!Q(fe)&&Q(fe.set)?fe.set.bind(n):gt,Nt=Ue({get:Ze,set:Bn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ct=>Nt.value=Ct})}if(a)for(const ge in a)kf(a[ge],s,n,ge);if(l){const ge=Q(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(fe=>{Si(fe,ge[fe])})}u&&Ul(u,t,"c");function Se(ge,fe){q(fe)?fe.forEach(Ze=>ge(Ze.bind(n))):fe&&ge(fe.bind(n))}if(Se(__,f),Se(Of,h),Se(g_,p),Se(y_,_),Se(d_,y),Se(p_,b),Se(C_,M),Se(E_,X),Se(b_,W),Se(Pf,A),Se(mr,P),Se(v_,U),q(ne))if(ne.length){const ge=t.exposed||(t.exposed={});ne.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>n[fe],set:Ze=>n[fe]=Ze})})}else t.exposed||(t.exposed={});F&&t.render===gt&&(t.render=F),ue!=null&&(t.inheritAttrs=ue),D&&(t.components=D),ae&&(t.directives=ae)}function A_(t,e,n=gt,s=!1){q(t)&&(t=Co(t));for(const i in t){const r=t[i];let o;Te(r)?"default"in r?o=Dt(r.from||i,r.default,!0):o=Dt(r.from||i):o=Dt(r),Oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Ul(t,e,n){lt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kf(t,e,n,s){const i=s.includes(".")?Sf(n,s):()=>n[s];if($e(t)){const r=e[t];Q(r)&&Pe(i,r)}else if(Q(t))Pe(i,t.bind(n));else if(Te(t))if(q(t))t.forEach(r=>kf(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&Pe(i,r,t)}}function Mf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Li(l,c,o,!0)),Li(l,e,o)),Te(e)&&r.set(e,l),l}function Li(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Li(t,r,n,!0),i&&i.forEach(o=>Li(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:zl,props:dn,emits:dn,methods:dn,computed:dn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:dn,directives:dn,watch:P_,provide:zl,inject:O_};function zl(t,e){return e?t?function(){return je(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function O_(t,e){return dn(Co(t),Co(e))}function Co(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function dn(t,e){return t?je(je(Object.create(null),t),e):e}function P_(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function k_(t,e,n,s=!1){const i={},r={};Pi(r,gr,1),t.propsDefaults=Object.create(null),Df(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function M_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(hr(t.emitsOptions,h))continue;const p=e[h];if(l)if(se(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=Rt(h);i[_]=wo(l,a,_,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Df(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!se(e,f)&&((u=fs(f))===f||!se(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=wo(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!se(e,f)&&!0)&&(delete r[f],c=!0)}c&&Lt(t,"set","$attrs")}function Df(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ti(l))continue;const c=e[l];let u;i&&se(i,u=Rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:hr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=re(n),c=a||pe;for(let u=0;u<r.length;u++){const f=r[u];n[f]=wo(i,l,f,c[f],t,!se(c,f))}}return o}function wo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ss(i),s=c[n]=l.call(null,e),In())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===fs(n))&&(s=!0))}return s}function Ff(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=f=>{l=!0;const[h,p]=Ff(f,e,!0);je(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Te(t)&&s.set(t,Kn),Kn;if(q(r))for(let u=0;u<r.length;u++){const f=Rt(r[u]);ql(f)&&(o[f]=pe)}else if(r)for(const u in r){const f=Rt(u);if(ql(f)){const h=r[u],p=o[f]=q(h)||Q(h)?{type:h}:h;if(p){const _=Yl(Boolean,p.type),y=Yl(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||se(p,"default"))&&a.push(f)}}}const c=[o,a];return Te(t)&&s.set(t,c),c}function ql(t){return t[0]!=="$"}function Kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Gl(t,e){return Kl(t)===Kl(e)}function Yl(t,e){return q(e)?e.findIndex(n=>Gl(n,t)):Q(e)&&Gl(e,t)?0:-1}const Lf=t=>t[0]==="_"||t==="$stable",Ta=t=>q(t)?t.map(Tt):[Tt(t)],D_=(t,e,n)=>{if(e._n)return e;const s=If((...i)=>Ta(e(...i)),n);return s._c=!1,s},$f=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Lf(i))continue;const r=t[i];if(Q(r))e[i]=D_(i,r,s);else if(r!=null){const o=Ta(r);e[i]=()=>o}}},Bf=(t,e)=>{const n=Ta(e);t.slots.default=()=>n},F_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Pi(e,"_",n)):$f(e,t.slots={})}else t.slots={},e&&Bf(t,e);Pi(t.slots,gr,1)},L_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(je(i,e),!n&&a===1&&delete i._):(r=!e.$stable,$f(e,i)),o=e}else e&&(Bf(t,e),o={default:1});if(r)for(const a in i)!Lf(a)&&!(a in o)&&delete i[a]};function jf(){return{app:null,config:{isNativeTag:lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $_=0;function B_(t,e){return function(s,i=null){Q(s)||(s=Object.assign({},s)),i!=null&&!Te(i)&&(i=null);const r=jf(),o=new Set;let a=!1;const l=r.app={_uid:$_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Ne(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,vr(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Io(t,e,n,s,i=!1){if(q(t)){t.forEach((h,p)=>Io(h,e&&(q(e)?e[p]:e),n,s,i));return}if(xi(s)&&!i)return;const r=s.shapeFlag&4?vr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,se(f,c)&&(f[c]=null)):Oe(c)&&(c.value=null)),Q(l))Jt(l,a,12,[o,u]);else{const h=$e(l),p=Oe(l);if(h||p){const _=()=>{if(t.f){const y=h?u[l]:l.value;i?q(y)&&ha(y,r):q(y)?y.includes(r)||y.push(r):h?(u[l]=[r],se(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,se(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,qe(_,n)):_()}}}const qe=c_;function j_(t){return V_(t)}function V_(t,e){const n=pm();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gt,cloneNode:_,insertStaticContent:y}=t,b=(d,m,g,C=null,E=null,R=null,k=!1,S=null,N=!!m.dynamicChildren)=>{if(d===m)return;d&&!gn(d,m)&&(C=B(d),rt(d,E,R,!0),d=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:I,ref:j,shapeFlag:L}=m;switch(I){case Sa:w(d,m,g,C);break;case yt:A(d,m,g,C);break;case Ri:d==null&&x(m,g,C,k);break;case Ge:ae(d,m,g,C,E,R,k,S,N);break;default:L&1?X(d,m,g,C,E,R,k,S,N):L&6?_e(d,m,g,C,E,R,k,S,N):(L&64||L&128)&&I.process(d,m,g,C,E,R,k,S,N,ye)}j!=null&&E&&Io(j,d&&d.ref,R,m||d,!m)},w=(d,m,g,C)=>{if(d==null)s(m.el=a(m.children),g,C);else{const E=m.el=d.el;m.children!==d.children&&c(E,m.children)}},A=(d,m,g,C)=>{d==null?s(m.el=l(m.children||""),g,C):m.el=d.el},x=(d,m,g,C)=>{[d.el,d.anchor]=y(d.children,m,g,C,d.el,d.anchor)},P=({el:d,anchor:m},g,C)=>{let E;for(;d&&d!==m;)E=h(d),s(d,g,C),d=E;s(m,g,C)},F=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=h(d),i(d),d=g;i(m)},X=(d,m,g,C,E,R,k,S,N)=>{k=k||m.type==="svg",d==null?W(m,g,C,E,R,k,S,N):ne(d,m,E,R,k,S,N)},W=(d,m,g,C,E,R,k,S)=>{let N,I;const{type:j,props:L,shapeFlag:V,transition:K,patchFlag:ie,dirs:he}=d;if(d.el&&_!==void 0&&ie===-1)N=d.el=_(d.el);else{if(N=d.el=o(d.type,R,L&&L.is,L),V&8?u(N,d.children):V&16&&U(d.children,N,null,C,E,R&&j!=="foreignObject",k,S),he&&an(d,null,C,"created"),L){for(const Ce in L)Ce!=="value"&&!Ti(Ce)&&r(N,Ce,null,L[Ce],R,d.children,C,E,O);"value"in L&&r(N,"value",null,L.value),(I=L.onVnodeBeforeMount)&&It(I,C,d)}M(N,d,d.scopeId,k,C)}he&&an(d,null,C,"beforeMount");const de=(!E||E&&!E.pendingBranch)&&K&&!K.persisted;de&&K.beforeEnter(N),s(N,m,g),((I=L&&L.onVnodeMounted)||de||he)&&qe(()=>{I&&It(I,C,d),de&&K.enter(N),he&&an(d,null,C,"mounted")},E)},M=(d,m,g,C,E)=>{if(g&&p(d,g),C)for(let R=0;R<C.length;R++)p(d,C[R]);if(E){let R=E.subTree;if(m===R){const k=E.vnode;M(d,k,k.scopeId,k.slotScopeIds,E.parent)}}},U=(d,m,g,C,E,R,k,S,N=0)=>{for(let I=N;I<d.length;I++){const j=d[I]=S?Kt(d[I]):Tt(d[I]);b(null,j,m,g,C,E,R,k,S)}},ne=(d,m,g,C,E,R,k)=>{const S=m.el=d.el;let{patchFlag:N,dynamicChildren:I,dirs:j}=m;N|=d.patchFlag&16;const L=d.props||pe,V=m.props||pe;let K;g&&ln(g,!1),(K=V.onVnodeBeforeUpdate)&&It(K,g,m,d),j&&an(m,d,g,"beforeUpdate"),g&&ln(g,!0);const ie=E&&m.type!=="foreignObject";if(I?ue(d.dynamicChildren,I,S,g,C,ie,R):k||Ze(d,m,S,null,g,C,ie,R,!1),N>0){if(N&16)D(S,m,L,V,g,C,E);else if(N&2&&L.class!==V.class&&r(S,"class",null,V.class,E),N&4&&r(S,"style",L.style,V.style,E),N&8){const he=m.dynamicProps;for(let de=0;de<he.length;de++){const Ce=he[de],ut=L[Ce],jn=V[Ce];(jn!==ut||Ce==="value")&&r(S,Ce,ut,jn,E,d.children,g,C,O)}}N&1&&d.children!==m.children&&u(S,m.children)}else!k&&I==null&&D(S,m,L,V,g,C,E);((K=V.onVnodeUpdated)||j)&&qe(()=>{K&&It(K,g,m,d),j&&an(m,d,g,"updated")},C)},ue=(d,m,g,C,E,R,k)=>{for(let S=0;S<m.length;S++){const N=d[S],I=m[S],j=N.el&&(N.type===Ge||!gn(N,I)||N.shapeFlag&70)?f(N.el):g;b(N,I,j,null,C,E,R,k,!0)}},D=(d,m,g,C,E,R,k)=>{if(g!==C){for(const S in C){if(Ti(S))continue;const N=C[S],I=g[S];N!==I&&S!=="value"&&r(d,S,I,N,k,m.children,E,R,O)}if(g!==pe)for(const S in g)!Ti(S)&&!(S in C)&&r(d,S,g[S],null,k,m.children,E,R,O);"value"in C&&r(d,"value",g.value,C.value)}},ae=(d,m,g,C,E,R,k,S,N)=>{const I=m.el=d?d.el:a(""),j=m.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:V,slotScopeIds:K}=m;K&&(S=S?S.concat(K):K),d==null?(s(I,g,C),s(j,g,C),U(m.children,g,j,E,R,k,S,N)):L>0&&L&64&&V&&d.dynamicChildren?(ue(d.dynamicChildren,V,g,E,R,k,S),(m.key!=null||E&&m===E.subTree)&&Vf(d,m,!0)):Ze(d,m,g,j,E,R,k,S,N)},_e=(d,m,g,C,E,R,k,S,N)=>{m.slotScopeIds=S,d==null?m.shapeFlag&512?E.ctx.activate(m,g,C,k,N):Ee(m,g,C,E,R,k,N):Se(d,m,N)},Ee=(d,m,g,C,E,R,k)=>{const S=d.component=Q_(d,C,E);if(dr(d)&&(S.ctx.renderer=ye),X_(S),S.asyncDep){if(E&&E.registerDep(S,ge),!d.el){const N=S.subTree=Ne(yt);A(null,N,m,g)}return}ge(S,d,m,g,E,R,k)},Se=(d,m,g)=>{const C=m.component=d.component;if(o_(d,m,g))if(C.asyncDep&&!C.asyncResolved){fe(C,m,g);return}else C.next=m,e_(C.update),C.update();else m.el=d.el,C.vnode=m},ge=(d,m,g,C,E,R,k)=>{const S=()=>{if(d.isMounted){let{next:j,bu:L,u:V,parent:K,vnode:ie}=d,he=j,de;ln(d,!1),j?(j.el=ie.el,fe(d,j,k)):j=ie,L&&Fr(L),(de=j.props&&j.props.onVnodeBeforeUpdate)&&It(de,K,j,ie),ln(d,!0);const Ce=Lr(d),ut=d.subTree;d.subTree=Ce,b(ut,Ce,f(ut.el),B(ut),d,E,R),j.el=Ce.el,he===null&&a_(d,Ce.el),V&&qe(V,E),(de=j.props&&j.props.onVnodeUpdated)&&qe(()=>It(de,K,j,ie),E)}else{let j;const{el:L,props:V}=m,{bm:K,m:ie,parent:he}=d,de=xi(m);if(ln(d,!1),K&&Fr(K),!de&&(j=V&&V.onVnodeBeforeMount)&&It(j,he,m),ln(d,!0),L&&G){const Ce=()=>{d.subTree=Lr(d),G(L,d.subTree,d,E,null)};de?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Ce()):Ce()}else{const Ce=d.subTree=Lr(d);b(null,Ce,g,C,d,E,R),m.el=Ce.el}if(ie&&qe(ie,E),!de&&(j=V&&V.onVnodeMounted)){const Ce=m;qe(()=>It(j,he,Ce),E)}(m.shapeFlag&256||he&&xi(he.vnode)&&he.vnode.shapeFlag&256)&&d.a&&qe(d.a,E),d.isMounted=!0,m=g=C=null}},N=d.effect=new _a(S,()=>Ia(I),d.scope),I=d.update=()=>N.run();I.id=d.uid,ln(d,!0),I()},fe=(d,m,g)=>{m.component=d;const C=d.vnode.props;d.vnode=m,d.next=null,M_(d,m.props,C,g),L_(d,m.children,g),hs(),Bl(),ds()},Ze=(d,m,g,C,E,R,k,S,N=!1)=>{const I=d&&d.children,j=d?d.shapeFlag:0,L=m.children,{patchFlag:V,shapeFlag:K}=m;if(V>0){if(V&128){Nt(I,L,g,C,E,R,k,S,N);return}else if(V&256){Bn(I,L,g,C,E,R,k,S,N);return}}K&8?(j&16&&O(I,E,R),L!==I&&u(g,L)):j&16?K&16?Nt(I,L,g,C,E,R,k,S,N):O(I,E,R,!0):(j&8&&u(g,""),K&16&&U(L,g,C,E,R,k,S,N))},Bn=(d,m,g,C,E,R,k,S,N)=>{d=d||Kn,m=m||Kn;const I=d.length,j=m.length,L=Math.min(I,j);let V;for(V=0;V<L;V++){const K=m[V]=N?Kt(m[V]):Tt(m[V]);b(d[V],K,g,null,E,R,k,S,N)}I>j?O(d,E,R,!0,!1,L):U(m,g,C,E,R,k,S,N,L)},Nt=(d,m,g,C,E,R,k,S,N)=>{let I=0;const j=m.length;let L=d.length-1,V=j-1;for(;I<=L&&I<=V;){const K=d[I],ie=m[I]=N?Kt(m[I]):Tt(m[I]);if(gn(K,ie))b(K,ie,g,null,E,R,k,S,N);else break;I++}for(;I<=L&&I<=V;){const K=d[L],ie=m[V]=N?Kt(m[V]):Tt(m[V]);if(gn(K,ie))b(K,ie,g,null,E,R,k,S,N);else break;L--,V--}if(I>L){if(I<=V){const K=V+1,ie=K<j?m[K].el:C;for(;I<=V;)b(null,m[I]=N?Kt(m[I]):Tt(m[I]),g,ie,E,R,k,S,N),I++}}else if(I>V)for(;I<=L;)rt(d[I],E,R,!0),I++;else{const K=I,ie=I,he=new Map;for(I=ie;I<=V;I++){const et=m[I]=N?Kt(m[I]):Tt(m[I]);et.key!=null&&he.set(et.key,I)}let de,Ce=0;const ut=V-ie+1;let jn=!1,Rl=0;const ys=new Array(ut);for(I=0;I<ut;I++)ys[I]=0;for(I=K;I<=L;I++){const et=d[I];if(Ce>=ut){rt(et,E,R,!0);continue}let wt;if(et.key!=null)wt=he.get(et.key);else for(de=ie;de<=V;de++)if(ys[de-ie]===0&&gn(et,m[de])){wt=de;break}wt===void 0?rt(et,E,R,!0):(ys[wt-ie]=I+1,wt>=Rl?Rl=wt:jn=!0,b(et,m[wt],g,null,E,R,k,S,N),Ce++)}const Al=jn?H_(ys):Kn;for(de=Al.length-1,I=ut-1;I>=0;I--){const et=ie+I,wt=m[et],Nl=et+1<j?m[et+1].el:C;ys[I]===0?b(null,wt,g,Nl,E,R,k,S,N):jn&&(de<0||I!==Al[de]?Ct(wt,g,Nl,2):de--)}}},Ct=(d,m,g,C,E=null)=>{const{el:R,type:k,transition:S,children:N,shapeFlag:I}=d;if(I&6){Ct(d.component.subTree,m,g,C);return}if(I&128){d.suspense.move(m,g,C);return}if(I&64){k.move(d,m,g,ye);return}if(k===Ge){s(R,m,g);for(let L=0;L<N.length;L++)Ct(N[L],m,g,C);s(d.anchor,m,g);return}if(k===Ri){P(d,m,g);return}if(C!==2&&I&1&&S)if(C===0)S.beforeEnter(R),s(R,m,g),qe(()=>S.enter(R),E);else{const{leave:L,delayLeave:V,afterLeave:K}=S,ie=()=>s(R,m,g),he=()=>{L(R,()=>{ie(),K&&K()})};V?V(R,ie,he):he()}else s(R,m,g)},rt=(d,m,g,C=!1,E=!1)=>{const{type:R,props:k,ref:S,children:N,dynamicChildren:I,shapeFlag:j,patchFlag:L,dirs:V}=d;if(S!=null&&Io(S,null,g,d,!0),j&256){m.ctx.deactivate(d);return}const K=j&1&&V,ie=!xi(d);let he;if(ie&&(he=k&&k.onVnodeBeforeUnmount)&&It(he,m,d),j&6)$(d.component,g,C);else{if(j&128){d.suspense.unmount(g,C);return}K&&an(d,null,m,"beforeUnmount"),j&64?d.type.remove(d,m,g,E,ye,C):I&&(R!==Ge||L>0&&L&64)?O(I,m,g,!1,!0):(R===Ge&&L&384||!E&&j&16)&&O(N,m,g),C&&gs(d)}(ie&&(he=k&&k.onVnodeUnmounted)||K)&&qe(()=>{he&&It(he,m,d),K&&an(d,null,m,"unmounted")},g)},gs=d=>{const{type:m,el:g,anchor:C,transition:E}=d;if(m===Ge){v(g,C);return}if(m===Ri){F(d);return}const R=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:k,delayLeave:S}=E,N=()=>k(g,R);S?S(d.el,R,N):N()}else R()},v=(d,m)=>{let g;for(;d!==m;)g=h(d),i(d),d=g;i(m)},$=(d,m,g)=>{const{bum:C,scope:E,update:R,subTree:k,um:S}=d;C&&Fr(C),E.stop(),R&&(R.active=!1,rt(k,d,m,g)),S&&qe(S,m),qe(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(d,m,g,C=!1,E=!1,R=0)=>{for(let k=R;k<d.length;k++)rt(d[k],m,g,C,E)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),le=(d,m,g)=>{d==null?m._vnode&&rt(m._vnode,null,null,!0):b(m._vnode||null,d,m,null,null,null,g),Bl(),bf(),m._vnode=d},ye={p:b,um:rt,m:Ct,r:gs,mt:Ee,mc:U,pc:Ze,pbc:ue,n:B,o:t};let J,G;return e&&([J,G]=e(ye)),{render:le,hydrate:J,createApp:B_(le,J)}}function ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vf(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kt(i[r]),a.el=o.el),n||Vf(o,a))}}function H_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const W_=t=>t.__isTeleport,Ge=Symbol(void 0),Sa=Symbol(void 0),yt=Symbol(void 0),Ri=Symbol(void 0),Ss=[];let pt=null;function Ie(t=!1){Ss.push(pt=t?null:[])}function U_(){Ss.pop(),pt=Ss[Ss.length-1]||null}let Vs=1;function Ql(t){Vs+=t}function Hf(t){return t.dynamicChildren=Vs>0?pt||Kn:null,U_(),Vs>0&&pt&&pt.push(t),t}function Re(t,e,n,s,i,r){return Hf(z(t,e,n,s,i,r,!0))}function xa(t,e,n,s,i){return Hf(Ne(t,e,n,s,i,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const gr="__vInternal",Wf=({key:t})=>t!=null?t:null,Ai=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Oe(t)||Q(t)?{i:at,r:t,k:e,f:!!n}:t:null;function z(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wf(e),ref:e&&Ai(e),scopeId:wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ra(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Vs>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const Ne=z_;function z_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===T_)&&(t=yt),To(t)){const a=nn(t,e,!0);return n&&Ra(a,n),Vs>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag|=-2,a}if(ng(t)&&(t=t.__vccOpts),e){e=q_(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=ti(a)),Te(l)&&(hf(l)&&!q(l)&&(l=je({},l)),e.style=rr(l))}const o=$e(t)?1:l_(t)?128:W_(t)?64:Te(t)?4:Q(t)?2:0;return z(t,e,n,s,i,o,r,!0)}function q_(t){return t?hf(t)||gr in t?je({},t):t:null}function nn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?K_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wf(a),ref:e&&e.ref?n&&i?q(i)?i.concat(Ai(e)):[i,Ai(e)]:Ai(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor}}function Et(t=" ",e=0){return Ne(Sa,null,t,e)}function Uf(t,e){const n=Ne(Ri,null,t);return n.staticCount=e,n}function Br(t="",e=!1){return e?(Ie(),xa(yt,null,t)):Ne(yt,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Ne(yt):q(t)?Ne(Ge,null,t.slice()):typeof t=="object"?Kt(t):Ne(Sa,null,String(t))}function Kt(t){return t.el===null||t.memo?t:nn(t)}function Ra(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ra(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(gr in e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Et(e)]):n=8);t.children=e,t.shapeFlag|=n}function K_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ti([e.class,s.class]));else if(i==="style")e.style=rr([e.style,s.style]);else if(or(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function It(t,e,n,s=null){lt(t,e,7,[n,s])}const G_=jf();let Y_=0;function Q_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||G_,r={uid:Y_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(s,i),emitsOptions:Cf(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=s_.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const yr=()=>Fe||at,ss=t=>{Fe=t,t.scope.on()},In=()=>{Fe&&Fe.scope.off(),Fe=null};function zf(t){return t.vnode.shapeFlag&4}let Hs=!1;function X_(t,e=!1){Hs=e;const{props:n,children:s}=t.vnode,i=zf(t);k_(t,n,i,e),F_(t,s);const r=i?J_(t,e):void 0;return Hs=!1,r}function J_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,x_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?eg(t):null;ss(t),hs();const r=Jt(s,t,0,[t.props,i]);if(ds(),In(),Gu(r)){if(r.then(In,In),e)return r.then(o=>{Xl(t,o,e)}).catch(o=>{fr(o,t,0)});t.asyncDep=r}else Xl(t,r,e)}else qf(t,e)}function Xl(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=_f(e)),qf(t,n)}let Jl;function qf(t,e,n){const s=t.type;if(!t.render){if(!e&&Jl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=je(je({isCustomElement:r,delimiters:a},o),l);s.render=Jl(i,c)}}t.render=s.render||gt}ss(t),hs(),R_(t),ds(),In()}function Z_(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function eg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Z_(t))},slots:t.slots,emit:t.emit,expose:e}}function vr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_f(ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)}}))}function tg(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function ng(t){return Q(t)&&"__vccOpts"in t}const Ue=(t,e)=>Xm(t,e,Hs);function Aa(t,e,n){const s=arguments.length;return s===2?Te(e)&&!q(e)?To(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&To(n)&&(n=[n]),Ne(t,e,n))}const sg="3.2.38",ig="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,Zl=yn&&yn.createElement("template"),rg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?yn.createElementNS(ig,t):yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Zl.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function og(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ag(t,e,n){const s=t.style,i=$e(n);if(n&&!i){for(const r in n)So(s,r,n[r]);if(e&&!$e(e))for(const r in e)n[r]==null&&So(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ec=/\s*!important$/;function So(t,e,n){if(q(n))n.forEach(s=>So(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=lg(t,e);ec.test(n)?t.setProperty(fs(s),n.replace(ec,""),"important"):t[s]=n}}const tc=["Webkit","Moz","ms"],jr={};function lg(t,e){const n=jr[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return jr[e]=s;s=cr(s);for(let i=0;i<tc.length;i++){const r=tc[i]+s;if(r in t)return jr[e]=r}return e}const nc="http://www.w3.org/1999/xlink";function cg(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nc,e.slice(6,e.length)):t.setAttributeNS(nc,e,n);else{const r=im(e);n==null||r&&!zu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ug(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Kf,fg]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let xo=0;const hg=Promise.resolve(),dg=()=>{xo=0},pg=()=>xo||(hg.then(dg),xo=Kf());function mg(t,e,n,s){t.addEventListener(e,n,s)}function _g(t,e,n,s){t.removeEventListener(e,n,s)}function gg(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=yg(e);if(s){const c=r[e]=vg(s,i);mg(t,a,c,l)}else o&&(_g(t,a,o,l),r[e]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function yg(t){let e;if(sc.test(t)){e={};let s;for(;s=t.match(sc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}function vg(t,e){const n=s=>{const i=s.timeStamp||Kf();(fg||i>=n.attached-1)&&lt(bg(s,n.value),e,5,[s])};return n.value=t,n.attached=pg(),n}function bg(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ic=/^on[a-z]/,Eg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?og(t,s,i):e==="style"?ag(t,n,s):or(e)?fa(e)||gg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cg(t,e,s,i))?ug(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),cg(t,e,s,i))};function Cg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ic.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ic.test(e)&&$e(n)?!1:e in t}const Ut="transition",vs="animation",Na=(t,{slots:e})=>Aa(xf,wg(t),e);Na.displayName="Transition";const Gf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Na.props=je({},xf.props,Gf);const cn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},rc=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function wg(t){const e={};for(const D in t)D in Gf||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=Ig(i),y=_&&_[0],b=_&&_[1],{onBeforeEnter:w,onEnter:A,onEnterCancelled:x,onLeave:P,onLeaveCancelled:F,onBeforeAppear:X=w,onAppear:W=A,onAppearCancelled:M=x}=e,U=(D,ae,_e)=>{un(D,ae?u:a),un(D,ae?c:o),_e&&_e()},ne=(D,ae)=>{D._isLeaving=!1,un(D,f),un(D,p),un(D,h),ae&&ae()},ue=D=>(ae,_e)=>{const Ee=D?W:A,Se=()=>U(ae,D,_e);cn(Ee,[ae,Se]),oc(()=>{un(ae,D?l:r),zt(ae,D?u:a),rc(Ee)||ac(ae,s,y,Se)})};return je(e,{onBeforeEnter(D){cn(w,[D]),zt(D,r),zt(D,o)},onBeforeAppear(D){cn(X,[D]),zt(D,l),zt(D,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(D,ae){D._isLeaving=!0;const _e=()=>ne(D,ae);zt(D,f),xg(),zt(D,h),oc(()=>{!D._isLeaving||(un(D,f),zt(D,p),rc(P)||ac(D,s,b,_e))}),cn(P,[D,_e])},onEnterCancelled(D){U(D,!1),cn(x,[D])},onAppearCancelled(D){U(D,!0),cn(M,[D])},onLeaveCancelled(D){ne(D),cn(F,[D])}})}function Ig(t){if(t==null)return null;if(Te(t))return[Vr(t.enter),Vr(t.leave)];{const e=Vr(t);return[e,e]}}function Vr(t){return Xu(t)}function zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function oc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Tg=0;function ac(t,e,n,s){const i=t._endId=++Tg,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Sg(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function Sg(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(Ut+"Delay"),r=s(Ut+"Duration"),o=lc(i,r),a=s(vs+"Delay"),l=s(vs+"Duration"),c=lc(a,l);let u=null,f=0,h=0;e===Ut?o>0&&(u=Ut,f=o,h=r.length):e===vs?c>0&&(u=vs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ut:vs:null,h=u?u===Ut?r.length:l.length:0);const p=u===Ut&&/\b(transform|all)(,|$)/.test(n[Ut+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:p}}function lc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>cc(n)+cc(t[s])))}function cc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xg(){return document.body.offsetHeight}const Rg=je({patchProp:Eg},rg);let uc;function Ag(){return uc||(uc=j_(Rg))}const Ng=(...t)=>{const e=Ag().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Og(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Og(t){return $e(t)?document.querySelector(t):t}var Pg=!1;/*!
  * pinia v2.0.21
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Yf;const br=t=>Yf=t,Qf=Symbol();function Ro(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function kg(){const t=Zu(!0),e=t.run(()=>Be({}));let n=[],s=[];const i=ns({install(r){br(i),i._a=r,r.provide(Qf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Pg?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Xf=()=>{};function fc(t,e,n,s=Xf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&yr()&&mr(i),i}function Vn(t,...e){t.slice().forEach(n=>{n(...e)})}function Ao(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ro(i)&&Ro(s)&&t.hasOwnProperty(n)&&!Oe(s)&&!Xt(s)?t[n]=Ao(i,s):t[n]=s}return t}const Mg=Symbol();function Dg(t){return!Ro(t)||!t.hasOwnProperty(Mg)}const{assign:kt}=Object;function Fg(t){return!!(Oe(t)&&t.effect)}function Lg(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Km(n.state.value[t]);return kt(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=ns(Ue(()=>{br(n);const p=n._s.get(t);return o[h].call(p,p)})),f),{}))}return l=Jf(t,c,e,n,s,!0),l.$reset=function(){const f=i?i():{};this.$patch(h=>{kt(h,f)})},l}function Jf(t,e,n={},s,i,r){let o;const a=kt({actions:{}},n),l={deep:!0};let c,u,f=ns([]),h=ns([]),p;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),Be({});let y;function b(W){let M;c=u=!1,typeof W=="function"?(W(s.state.value[t]),M={type:xs.patchFunction,storeId:t,events:p}):(Ao(s.state.value[t],W),M={type:xs.patchObject,payload:W,storeId:t,events:p});const U=y=Symbol();wa().then(()=>{y===U&&(c=!0)}),u=!0,Vn(f,M,s.state.value[t])}const w=Xf;function A(){o.stop(),f=[],h=[],s._s.delete(t)}function x(W,M){return function(){br(s);const U=Array.from(arguments),ne=[],ue=[];function D(Ee){ne.push(Ee)}function ae(Ee){ue.push(Ee)}Vn(h,{args:U,name:W,store:F,after:D,onError:ae});let _e;try{_e=M.apply(this&&this.$id===t?this:F,U)}catch(Ee){throw Vn(ue,Ee),Ee}return _e instanceof Promise?_e.then(Ee=>(Vn(ne,Ee),Ee)).catch(Ee=>(Vn(ue,Ee),Promise.reject(Ee))):(Vn(ne,_e),_e)}}const P={_p:s,$id:t,$onAction:fc.bind(null,h),$patch:b,$reset:w,$subscribe(W,M={}){const U=fc(f,W,M.detached,()=>ne()),ne=o.run(()=>Pe(()=>s.state.value[t],ue=>{(M.flush==="sync"?u:c)&&W({storeId:t,type:xs.direct,events:p},ue)},kt({},l,M)));return U},$dispose:A},F=Bt(kt({},P));s._s.set(t,F);const X=s._e.run(()=>(o=Zu(),o.run(()=>e())));for(const W in X){const M=X[W];if(Oe(M)&&!Fg(M)||Xt(M))r||(_&&Dg(M)&&(Oe(M)?M.value=_[W]:Ao(M,_[W])),s.state.value[t][W]=M);else if(typeof M=="function"){const U=x(W,M);X[W]=U,a.actions[W]=M}}return kt(F,X),kt(re(F),X),Object.defineProperty(F,"$state",{get:()=>s.state.value[t],set:W=>{b(M=>{kt(M,W)})}}),s._p.forEach(W=>{kt(F,o.run(()=>W({store:F,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(F.$state,_),c=!0,u=!0,F}function $g(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=yr();return a=a||c&&Dt(Qf),a&&br(a),a=Yf,a._s.has(s)||(r?Jf(s,e,i,a):Lg(s,i,a)),a._s.get(s)}return o.$id=s,o}function Ye(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function Bg(t,e){if(Array.isArray(t)){t.splice(e,1);return}delete t[e]}var hc;const Zf=typeof window<"u",jg=Object.prototype.toString,Vg=t=>typeof t=="number",Hg=t=>typeof t=="string",No=t=>jg.call(t)==="[object Object]",Tn=()=>{};Zf&&((hc=window==null?void 0:window.navigator)==null?void 0:hc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function eh(t){return _m()?(gm(t),!0):!1}function Oa(t){yr()&&mr(t)}function is(t){var e;const n=xe(t);return(e=n==null?void 0:n.$el)!=null?e:n}const th=Zf?window:void 0;function Wg(...t){let e,n,s,i;if(Hg(t[0])?([n,s,i]=t,e=th):[e,n,s,i]=t,!e)return Tn;let r=Tn;const o=Pe(()=>is(e),l=>{r(),l&&(l.addEventListener(n,s,i),r=()=>{l.removeEventListener(n,s,i),r=Tn})},{immediate:!0,flush:"post"}),a=()=>{o(),r()};return eh(a),a}const Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Po="__vueuse_ssr_handlers__";Oo[Po]=Oo[Po]||{};Oo[Po];function Ug(t,e,n={}){const{root:s,rootMargin:i="0px",threshold:r=.1,window:o=th}=n,a=o&&"IntersectionObserver"in o;let l=Tn;const c=a?Pe(()=>({el:is(t),root:is(s)}),({el:f,root:h})=>{if(l(),!f)return;const p=new IntersectionObserver(e,{root:h,rootMargin:i,threshold:r});p.observe(f),l=()=>{p.disconnect(),l=Tn}},{immediate:!0,flush:"post"}):Tn,u=()=>{l(),c()};return eh(u),{isSupported:a,stop:u}}var dc;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(dc||(dc={}));const nh=1/60*1e3,zg=typeof performance<"u"?()=>performance.now():()=>Date.now(),sh=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(zg()),nh);function qg(t){let e=[],n=[],s=0,i=!1,r=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&i,h=f?e:n;return c&&o.add(l),h.indexOf(l)===-1&&(h.push(l),f&&i&&(s=e.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),o.delete(l)},process:l=>{if(i){r=!0;return}if(i=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let c=0;c<s;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),t())}i=!1,r&&(r=!1,a.process(l))}};return a}const Kg=40;let ko=!0,Ws=!1,Mo=!1;const Qn={delta:0,timestamp:0},si=["read","update","preRender","render","postRender"],Er=si.reduce((t,e)=>(t[e]=qg(()=>Ws=!0),t),{}),Do=si.reduce((t,e)=>{const n=Er[e];return t[e]=(s,i=!1,r=!1)=>(Ws||Qg(),n.schedule(s,i,r)),t},{}),Gg=si.reduce((t,e)=>(t[e]=Er[e].cancel,t),{});si.reduce((t,e)=>(t[e]=()=>Er[e].process(Qn),t),{});const Yg=t=>Er[t].process(Qn),ih=t=>{Ws=!1,Qn.delta=ko?nh:Math.max(Math.min(t-Qn.timestamp,Kg),1),Qn.timestamp=t,Mo=!0,si.forEach(Yg),Mo=!1,Ws&&(ko=!1,sh(ih))},Qg=()=>{Ws=!0,ko=!0,Mo||sh(ih)},rh=()=>Qn;function oh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}var Xg=function(){},pc=function(){};const Fo=(t,e,n)=>Math.min(Math.max(n,t),e),Hr=.001,Jg=.01,mc=10,Zg=.05,ey=1;function ty({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let i,r;Xg(t<=mc*1e3);let o=1-e;o=Fo(Zg,ey,o),t=Fo(Jg,mc,t/1e3),o<1?(i=c=>{const u=c*o,f=u*t,h=u-n,p=Lo(c,o),_=Math.exp(-f);return Hr-h/p*_},r=c=>{const f=c*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,_=Math.exp(-f),y=Lo(Math.pow(c,2),o);return(-i(c)+Hr>0?-1:1)*((h-p)*_)/y}):(i=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Hr+u*f},r=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=sy(i,r,a);if(t=t*1e3,isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const ny=12;function sy(t,e,n){let s=n;for(let i=1;i<ny;i++)s=s-t(s)/e(s);return s}function Lo(t,e){return t*Math.sqrt(1-e*e)}const iy=["duration","bounce"],ry=["stiffness","damping","mass"];function _c(t,e){return e.some(n=>t[n]!==void 0)}function oy(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!_c(t,ry)&&_c(t,iy)){const n=ty(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Pa(t){var{from:e=0,to:n=1,restSpeed:s=2,restDelta:i}=t,r=oh(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:h}=oy(r),p=gc,_=gc;function y(){const b=u?-(u/1e3):0,w=n-e,A=l/(2*Math.sqrt(a*c)),x=Math.sqrt(a/c)/1e3;if(i===void 0&&(i=Math.min(Math.abs(n-e)/100,.4)),A<1){const P=Lo(x,A);p=F=>{const X=Math.exp(-A*x*F);return n-X*((b+A*x*w)/P*Math.sin(P*F)+w*Math.cos(P*F))},_=F=>{const X=Math.exp(-A*x*F);return A*x*X*(Math.sin(P*F)*(b+A*x*w)/P+w*Math.cos(P*F))-X*(Math.cos(P*F)*(b+A*x*w)-P*w*Math.sin(P*F))}}else if(A===1)p=P=>n-Math.exp(-x*P)*(w+(b+x*w)*P);else{const P=x*Math.sqrt(A*A-1);p=F=>{const X=Math.exp(-A*x*F),W=Math.min(P*F,300);return n-X*((b+A*x*w)*Math.sinh(W)+P*w*Math.cosh(W))/P}}}return y(),{next:b=>{const w=p(b);if(h)o.done=b>=f;else{const A=_(b)*1e3,x=Math.abs(A)<=s,P=Math.abs(n-w)<=i;o.done=x&&P}return o.value=o.done?n:w,o},flipTarget:()=>{u=-u,[e,n]=[n,e],y()}}}Pa.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const gc=t=>0,ah=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},ka=(t,e,n)=>-n*t+n*e+t,lh=(t,e)=>n=>Math.max(Math.min(n,e),t),Rs=t=>t%1?Number(t.toFixed(5)):t,Us=/(-)?([\d]*\.?[\d])+/g,$o=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ay=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ii(t){return typeof t=="string"}const ri={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},As=Object.assign(Object.assign({},ri),{transform:lh(0,1)}),Ei=Object.assign(Object.assign({},ri),{default:1}),Ma=t=>({test:e=>ii(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),fn=Ma("deg"),Ns=Ma("%"),Y=Ma("px"),yc=Object.assign(Object.assign({},Ns),{parse:t=>Ns.parse(t)/100,transform:t=>Ns.transform(t*100)}),Da=(t,e)=>n=>Boolean(ii(n)&&ay.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ch=(t,e,n)=>s=>{if(!ii(s))return s;const[i,r,o,a]=s.match(Us);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},bn={test:Da("hsl","hue"),parse:ch("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+Ns.transform(Rs(e))+", "+Ns.transform(Rs(n))+", "+Rs(As.transform(s))+")"},ly=lh(0,255),Wr=Object.assign(Object.assign({},ri),{transform:t=>Math.round(ly(t))}),Yt={test:Da("rgb","red"),parse:ch("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Wr.transform(t)+", "+Wr.transform(e)+", "+Wr.transform(n)+", "+Rs(As.transform(s))+")"};function cy(t){let e="",n="",s="",i="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),s=t.substr(5,2),i=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),s=t.substr(3,1),i=t.substr(4,1),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const Bo={test:Da("#"),parse:cy,transform:Yt.transform},Ke={test:t=>Yt.test(t)||Bo.test(t)||bn.test(t),parse:t=>Yt.test(t)?Yt.parse(t):bn.test(t)?bn.parse(t):Bo.parse(t),transform:t=>ii(t)?t:t.hasOwnProperty("red")?Yt.transform(t):bn.transform(t)},uh="${c}",fh="${n}";function uy(t){var e,n,s,i;return isNaN(t)&&ii(t)&&((n=(e=t.match(Us))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((i=(s=t.match($o))===null||s===void 0?void 0:s.length)!==null&&i!==void 0?i:0)>0}function hh(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const s=t.match($o);s&&(n=s.length,t=t.replace($o,uh),e.push(...s.map(Ke.parse)));const i=t.match(Us);return i&&(t=t.replace(Us,fh),e.push(...i.map(ri.parse))),{values:e,numColors:n,tokenised:t}}function dh(t){return hh(t).values}function ph(t){const{values:e,numColors:n,tokenised:s}=hh(t),i=e.length;return r=>{let o=s;for(let a=0;a<i;a++)o=o.replace(a<n?uh:fh,a<n?Ke.transform(r[a]):Rs(r[a]));return o}}const fy=t=>typeof t=="number"?0:t;function hy(t){const e=dh(t);return ph(t)(e.map(fy))}const oi={test:uy,parse:dh,createTransformer:ph,getAnimatableNone:hy},dy=new Set(["brightness","contrast","saturate","opacity"]);function py(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(Us)||[];if(!s)return t;const i=n.replace(s,"");let r=dy.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const my=/([a-z-]*)\(.*?\)/g,jo=Object.assign(Object.assign({},oi),{getAnimatableNone:t=>{const e=t.match(my);return e?e.map(py).join(" "):t}});function Ur(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vc({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Ur(l,a,t+1/3),r=Ur(l,a,t),o=Ur(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}const _y=(t,e,n)=>{const s=t*t,i=e*e;return Math.sqrt(Math.max(0,n*(i-s)+s))},gy=[Bo,Yt,bn],bc=t=>gy.find(e=>e.test(t)),mh=(t,e)=>{let n=bc(t),s=bc(e),i=n.parse(t),r=s.parse(e);n===bn&&(i=vc(i),n=Yt),s===bn&&(r=vc(r),s=Yt);const o=Object.assign({},i);return a=>{for(const l in o)l!=="alpha"&&(o[l]=_y(i[l],r[l],a));return o.alpha=ka(i.alpha,r.alpha,a),n.transform(o)}},yy=t=>typeof t=="number",vy=(t,e)=>n=>e(t(n)),_h=(...t)=>t.reduce(vy);function gh(t,e){return yy(t)?n=>ka(t,e,n):Ke.test(t)?mh(t,e):vh(t,e)}const yh=(t,e)=>{const n=[...t],s=n.length,i=t.map((r,o)=>gh(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}},by=(t,e)=>{const n=Object.assign(Object.assign({},t),e),s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=gh(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}};function Ec(t){const e=oi.parse(t),n=e.length;let s=0,i=0,r=0;for(let o=0;o<n;o++)s||typeof e[o]=="number"?s++:e[o].hue!==void 0?r++:i++;return{parsed:e,numNumbers:s,numRGB:i,numHSL:r}}const vh=(t,e)=>{const n=oi.createTransformer(e),s=Ec(t),i=Ec(e);return s.numHSL===i.numHSL&&s.numRGB===i.numRGB&&s.numNumbers>=i.numNumbers?_h(yh(s.parsed,i.parsed),n):o=>`${o>0?e:t}`},Ey=(t,e)=>n=>ka(t,e,n);function Cy(t){if(typeof t=="number")return Ey;if(typeof t=="string")return Ke.test(t)?mh:vh;if(Array.isArray(t))return yh;if(typeof t=="object")return by}function wy(t,e,n){const s=[],i=n||Cy(t[0]),r=t.length-1;for(let o=0;o<r;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=_h(l,a)}s.push(a)}return s}function Iy([t,e],[n]){return s=>n(ah(t,e,s))}function Ty(t,e){const n=t.length,s=n-1;return i=>{let r=0,o=!1;if(i<=t[0]?o=!0:i>=t[s]&&(r=s-1,o=!0),!o){let l=1;for(;l<n&&!(t[l]>i||l===s);l++);r=l-1}const a=ah(t[r],t[r+1],i);return e[r](a)}}function bh(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;pc(r===e.length),pc(!s||!Array.isArray(s)||s.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=wy(e,s,i),a=r===2?Iy(t,o):Ty(t,o);return n?l=>a(Fo(t[0],t[r-1],l)):a}const Cr=t=>e=>1-t(1-e),Fa=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Sy=t=>e=>Math.pow(e,t),Eh=t=>e=>e*e*((t+1)*e-t),xy=t=>{const e=Eh(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ch=1.525,Ry=4/11,Ay=8/11,Ny=9/10,wh=t=>t,La=Sy(2),Oy=Cr(La),Ih=Fa(La),Th=t=>1-Math.sin(Math.acos(t)),Sh=Cr(Th),Py=Fa(Sh),$a=Eh(Ch),ky=Cr($a),My=Fa($a),Dy=xy(Ch),Fy=4356/361,Ly=35442/1805,$y=16061/1805,$i=t=>{if(t===1||t===0)return t;const e=t*t;return t<Ry?7.5625*e:t<Ay?9.075*e-9.9*t+3.4:t<Ny?Fy*e-Ly*t+$y:10.8*t*t-20.52*t+10.72},By=Cr($i),jy=t=>t<.5?.5*(1-$i(1-t*2)):.5*$i(t*2-1)+.5;function Vy(t,e){return t.map(()=>e||Ih).splice(0,t.length-1)}function Hy(t){const e=t.length;return t.map((n,s)=>s!==0?s/(e-1):0)}function Wy(t,e){return t.map(n=>n*e)}function Ni({from:t=0,to:e=1,ease:n,offset:s,duration:i=300}){const r={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=Wy(s&&s.length===o.length?s:Hy(o),i);function l(){return bh(a,o,{ease:Array.isArray(n)?n:Vy(o,n)})}let c=l();return{next:u=>(r.value=c(u),r.done=u>=i,r),flipTarget:()=>{o.reverse(),c=l()}}}function Uy({velocity:t=0,from:e=0,power:n=.8,timeConstant:s=350,restDelta:i=.5,modifyTarget:r}){const o={done:!1,value:e};let a=n*t;const l=e+a,c=r===void 0?l:r(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/s);return o.done=!(f>i||f<-i),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const Cc={keyframes:Ni,spring:Pa,decay:Uy};function zy(t){if(Array.isArray(t.to))return Ni;if(Cc[t.type])return Cc[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Ni:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Pa:Ni}function xh(t,e,n=0){return t-e-n}function qy(t,e,n=0,s=!0){return s?xh(e+-t,e,n):e-(t-e)+n}function Ky(t,e,n,s){return s?t>=e+n:t<=-n}const Gy=t=>{const e=({delta:n})=>t(n);return{start:()=>Do.update(e,!0),stop:()=>Gg.update(e)}};function Rh(t){var e,n,{from:s,autoplay:i=!0,driver:r=Gy,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:h,onRepeat:p,onUpdate:_}=t,y=oh(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=y,w,A=0,x=y.duration,P,F=!1,X=!0,W;const M=zy(y);!((n=(e=M).needsInterpolation)===null||n===void 0)&&n.call(e,s,b)&&(W=bh([0,100],[s,b],{clamp:!1}),s=0,b=100);const U=M(Object.assign(Object.assign({},y),{from:s,to:b}));function ne(){A++,l==="reverse"?(X=A%2===0,o=qy(o,x,c,X)):(o=xh(o,x,c),l==="mirror"&&U.flipTarget()),F=!1,p&&p()}function ue(){w.stop(),h&&h()}function D(_e){if(X||(_e=-_e),o+=_e,!F){const Ee=U.next(Math.max(0,o));P=Ee.value,W&&(P=W(P)),F=X?Ee.done:o<=0}_==null||_(P),F&&(A===0&&(x!=null||(x=o)),A<a?Ky(o,x,c,X)&&ne():ue())}function ae(){u==null||u(),w=r(D),w.start()}return i&&ae(),{stop:()=>{f==null||f(),w.stop()}}}function Ah(t,e){return e?t*(1e3/e):0}function Yy({from:t=0,velocity:e=0,min:n,max:s,power:i=.8,timeConstant:r=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:h,onStop:p}){let _;function y(x){return n!==void 0&&x<n||s!==void 0&&x>s}function b(x){return n===void 0?s:s===void 0||Math.abs(n-x)<Math.abs(s-x)?n:s}function w(x){_==null||_.stop(),_=Rh(Object.assign(Object.assign({},x),{driver:u,onUpdate:P=>{var F;f==null||f(P),(F=x.onUpdate)===null||F===void 0||F.call(x,P)},onComplete:h,onStop:p}))}function A(x){w(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},x))}if(y(t))A({from:t,velocity:e,to:b(t)});else{let x=i*e+t;typeof c<"u"&&(x=c(x));const P=b(x),F=P===n?-1:1;let X,W;const M=U=>{X=W,W=U,e=Ah(U-X,rh().delta),(F===1&&U>P||F===-1&&U<P)&&A({from:U,to:P,velocity:e})};w({type:"decay",from:t,velocity:e,timeConstant:r,power:i,restDelta:l,modifyTarget:c,onUpdate:y(x)?M:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Nh=(t,e)=>1-3*e+3*t,Oh=(t,e)=>3*e-6*t,Ph=t=>3*t,Bi=(t,e,n)=>((Nh(e,n)*t+Oh(e,n))*t+Ph(e))*t,kh=(t,e,n)=>3*Nh(e,n)*t*t+2*Oh(e,n)*t+Ph(e),Qy=1e-7,Xy=10;function Jy(t,e,n,s,i){let r,o,a=0;do o=e+(n-e)/2,r=Bi(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>Qy&&++a<Xy);return o}const Zy=8,ev=.001;function tv(t,e,n,s){for(let i=0;i<Zy;++i){const r=kh(e,n,s);if(r===0)return e;e-=(Bi(e,n,s)-t)/r}return e}const Oi=11,Ci=1/(Oi-1);function nv(t,e,n,s){if(t===e&&n===s)return wh;const i=new Float32Array(Oi);for(let o=0;o<Oi;++o)i[o]=Bi(o*Ci,t,n);function r(o){let a=0,l=1;const c=Oi-1;for(;l!==c&&i[l]<=o;++l)a+=Ci;--l;const u=(o-i[l])/(i[l+1]-i[l]),f=a+u*Ci,h=kh(f,t,n);return h>=ev?tv(o,f,t,n):h===0?f:Jy(o,a,a+Ci,t,n)}return o=>o===0||o===1?o:Bi(r(o),e,s)}const zr={};class sv{constructor(){this.subscriptions=new Set}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,s){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(e,n,s)}clear(){this.subscriptions.clear()}}const wc=t=>!isNaN(parseFloat(t));class iv{constructor(e){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new sv,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:i}=rh();this.lastUpdated!==i&&(this.timeDelta=s,this.lastUpdated=i),Do.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Do.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=wc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=e,this.canTrackVelocity=wc(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ah(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:s}=e(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function rv(t){return new iv(t)}const{isArray:ov}=Array;function av(){const t=Be({}),e=s=>{const i=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),Bg(t.value,r))};s?ov(s)?s.forEach(i):i(s):Object.keys(t.value).forEach(i)},n=(s,i,r)=>{if(t.value[s])return t.value[s];const o=rv(i);return o.onChange(a=>{Ye(r,s,a)}),Ye(t.value,s,o),o};return Oa(e),{motionValues:t,get:n,stop:e}}const lv=t=>Array.isArray(t),hn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),qr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),cv=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Kr=()=>({type:"keyframes",ease:"linear",duration:300}),uv=t=>({type:"keyframes",duration:800,values:t}),Ic={default:cv,x:hn,y:hn,z:hn,rotate:hn,rotateX:hn,rotateY:hn,rotateZ:hn,scaleX:qr,scaleY:qr,scale:qr,backgroundColor:Kr,color:Kr,opacity:Kr},Mh=(t,e)=>{let n;return lv(e)?n=uv:n=Ic[t]||Ic.default,{to:e,...n(e)}},Tc={...ri,transform:Math.round},Dh={color:Ke,backgroundColor:Ke,outlineColor:Ke,fill:Ke,stroke:Ke,borderColor:Ke,borderTopColor:Ke,borderRightColor:Ke,borderBottomColor:Ke,borderLeftColor:Ke,borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,radius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,size:Y,top:Y,right:Y,bottom:Y,left:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:Ei,scaleX:Ei,scaleY:Ei,scaleZ:Ei,skew:fn,skewX:fn,skewY:fn,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:As,originX:yc,originY:yc,originZ:Y,zIndex:Tc,filter:jo,WebkitFilter:jo,fillOpacity:As,strokeOpacity:As,numOctaves:Tc},Ba=t=>Dh[t],Fh=(t,e)=>e&&typeof t=="number"&&e.transform?e.transform(t):t;function fv(t,e){let n=Ba(t);return n!==jo&&(n=oi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const hv={linear:wh,easeIn:La,easeInOut:Ih,easeOut:Oy,circIn:Th,circInOut:Py,circOut:Sh,backIn:$a,backInOut:My,backOut:ky,anticipate:Dy,bounceIn:By,bounceInOut:jy,bounceOut:$i},Sc=t=>{if(Array.isArray(t)){const[e,n,s,i]=t;return nv(e,n,s,i)}else if(typeof t=="string")return hv[t];return t},dv=t=>Array.isArray(t)&&typeof t[0]!="number",xc=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&oi.test(e)&&!e.startsWith("url("));function pv(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function mv({ease:t,times:e,delay:n,...s}){const i={...s};return e&&(i.offset=e),t&&(i.ease=dv(t)?t.map(Sc):Sc(t)),n&&(i.elapsed=-n),i}function _v(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),pv(e),gv(t)||(t={...t,...Mh(n,e.to)}),{...e,...mv(t)}}function gv({delay:t,repeat:e,repeatType:n,repeatDelay:s,from:i,...r}){return!!Object.keys(r).length}function yv(t,e){return t[e]||t.default||t}function vv(t,e,n,s,i){const r=yv(s,t);let o=r.from===null||r.from===void 0?e.get():r.from;const a=xc(t,n);o==="none"&&a&&typeof n=="string"&&(o=fv(t,n));const l=xc(t,o);function c(f){const h={from:o,to:n,velocity:s.velocity?s.velocity:e.getVelocity(),onUpdate:p=>e.set(p)};return r.type==="inertia"||r.type==="decay"?Yy({...h,...r}):Rh({..._v(r,h,t),onUpdate:p=>{h.onUpdate(p),r.onUpdate&&r.onUpdate(p)},onComplete:()=>{s.onComplete&&s.onComplete(),i&&i(),f&&f()}})}function u(f){return e.set(n),s.onComplete&&s.onComplete(),i&&i(),f&&f(),{stop:()=>{}}}return!l||!a||r.type===!1?u:c}function bv(){const{motionValues:t,stop:e,get:n}=av();return{motionValues:t,stop:e,push:(i,r,o,a={},l)=>{const c=o[i],u=n(i,c,o);if(a&&a.immediate){u.set(r);return}const f=vv(i,u,r,a,l);u.start(f)}}}function Ev(t,e={},{motionValues:n,push:s,stop:i}=bv()){const r=xe(e),o=Be(!1),a=Pe(n,h=>{o.value=Object.values(h).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0}),l=h=>{if(!r||!r[h])throw new Error(`The variant ${h} does not exist.`);return r[h]},c=h=>(typeof h=="string"&&(h=l(h)),Promise.all(Object.entries(h).map(([p,_])=>{if(p!=="transition")return new Promise(y=>{s(p,_,t,h.transition||Mh(p,h[p]),y)})}).filter(Boolean)));return{isAnimating:o,apply:c,set:h=>{const p=No(h)?h:l(h);Object.entries(p).forEach(([_,y])=>{_!=="transition"&&s(_,y,t,{immediate:!0})})},stopTransitions:()=>{a(),i()},leave:async h=>{let p;if(r&&(r.leave&&(p=r.leave),!r.leave&&r.initial&&(p=r.initial)),!p){h();return}await c(p),h()}}}const ja=typeof window<"u",Cv=()=>ja&&window.onpointerdown===null,wv=()=>ja&&window.ontouchstart===null,Iv=()=>ja&&window.onmousedown===null;function Tv({target:t,state:e,variants:n,apply:s}){const i=xe(n),r=[],o=(..._)=>{const y=Wg.apply(null,_);return r.push(y),y},a=Be(!1),l=Be(!1),c=Be(!1),u=Ue(()=>{let _=[];return i&&(i.hovered&&(_=[..._,...Object.keys(i.hovered)]),i.tapped&&(_=[..._,...Object.keys(i.tapped)]),i.focused&&(_=[..._,...Object.keys(i.focused)])),_}),f=Ue(()=>{const _={};Object.assign(_,e.value),a.value&&i.hovered&&Object.assign(_,i.hovered),l.value&&i.tapped&&Object.assign(_,i.tapped),c.value&&i.focused&&Object.assign(_,i.focused);for(const y in _)u.value.includes(y)||delete _[y];return _});i.hovered&&(o(t,"mouseenter",()=>{a.value=!0}),o(t,"mouseleave",()=>{a.value=!1,l.value=!1}),o(t,"mouseout",()=>{a.value=!1,l.value=!1})),i.tapped&&(Iv()&&(o(t,"mousedown",()=>{l.value=!0}),o(t,"mouseup",()=>{l.value=!1})),Cv()&&(o(t,"pointerdown",()=>{l.value=!0}),o(t,"pointerup",()=>{l.value=!1})),wv()&&(o(t,"touchstart",()=>{l.value=!0}),o(t,"touchend",()=>{l.value=!1}))),i.focused&&(o(t,"focus",()=>{c.value=!0}),o(t,"blur",()=>{c.value=!1}));const h=Pe(f,s);return{stop:()=>{r.forEach(_=>_()),h()}}}function Sv({set:t,target:e,variants:n,variant:s}){const i=xe(n);return{stop:Pe(()=>e,()=>{!i||(i.initial&&t("initial"),i.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function xv({state:t,apply:e}){return{stop:Pe(t,s=>{s&&e(s)},{immediate:!0})}}function Rv({target:t,variants:e,variant:n}){const s=xe(e);let i=Tn;if(s&&(s.visible||s.visibleOnce)){const{stop:r}=Ug(t,([{isIntersecting:o}])=>{s.visible?o?n.value="visible":n.value="initial":s.visibleOnce&&(o?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});i=r}return{stop:i}}function Av(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=Be([]);if(e.lifeCycleHooks){const{stop:i}=Sv(t);n.value.push(i)}if(e.syncVariants){const{stop:i}=xv(t);n.value.push(i)}if(e.visibilityHooks){const{stop:i}=Rv(t);n.value.push(i)}if(e.eventListeners){const{stop:i}=Tv(t);n.value.push(i)}const s=()=>n.value.forEach(i=>i());return Oa(s),{stop:s}}function Lh(t={}){const e=Bt({...t}),n=Be({});return Pe(e,()=>{const s={};for(const[i,r]of Object.entries(e)){const o=Ba(i),a=Fh(r,o);s[i]=a}n.value=s},{immediate:!0,deep:!0}),{state:e,style:n}}const Nv=["","X","Y","Z"],Ov=["perspective","translate","scale","rotate","skew"],$h=["transformPerspective","x","y","z"];Ov.forEach(t=>{Nv.forEach(e=>{const n=t+e;$h.push(n)})});const Pv=new Set($h);function Va(t){return Pv.has(t)}const kv=new Set(["originX","originY","originZ"]);function Bh(t){return kv.has(t)}function Mv(t){const e={},n={};return Object.entries(t).forEach(([s,i])=>{Va(s)||Bh(s)?e[s]=i:n[s]=i}),{transform:e,style:n}}function Dv(t,e){let n,s;const{state:i,style:r}=Lh(),o=Pe(()=>is(t),c=>{if(!!c){s=c;for(const u of Object.keys(Dh))c.style[u]===null||c.style[u]===""||Va(u)||Bh(u)||Ye(i,u,c.style[u]);n&&Object.entries(n).forEach(([u,f])=>Ye(c.style,u,f)),e&&e(i)}},{immediate:!0}),a=Pe(r,c=>{if(!s){n=c;return}for(const u in c)Ye(s.style,u,c[u])},{immediate:!0});return{style:i,stop:()=>{s=void 0,n=void 0,o(),a()}}}const Fv={x:"translateX",y:"translateY",z:"translateZ"};function jh(t={},e=!0){const n=Bt({...t}),s=Be("");return Pe(n,i=>{let r="",o=!1;e&&(i.x||i.y||i.z)&&(r+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(Y.transform).join(",")}) `,o=!0);for(const[a,l]of Object.entries(i)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const c=Ba(a),u=Fh(l,c);r+=`${Fv[a]||a}(${u}) `}e&&!o&&(r+="translateZ(0px) "),s.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function Lv(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return e.reduce((s,i)=>{if(!i)return s;const[r,o]=i.split("("),l=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...s,[r]:c}},{})}function $v(t,e){Object.entries(Lv(e)).forEach(([n,s])=>{s=parseFloat(s);const i=["x","y","z"];if(n==="translate3d"){if(s===0){i.forEach(r=>{Ye(t,r,0)});return}s.forEach((r,o)=>{Ye(t,i[o],r)});return}if(n==="translateX"){Ye(t,"x",s);return}if(n==="translateY"){Ye(t,"y",s);return}if(n==="translateZ"){Ye(t,"z",s);return}Ye(t,n,s)})}function Bv(t,e){let n,s;const{state:i,transform:r}=jh(),o=Pe(()=>is(t),c=>{!c||(s=c,c.style.transform&&$v(i,c.style.transform),n&&(c.style.transform=n),e&&e(i))},{immediate:!0}),a=Pe(r,c=>{if(!s){n=c;return}s.style.transform=c},{immediate:!0});return{transform:i,stop:()=>{n=void 0,s=void 0,o(),a()}}}function jv(t,e){const n=Bt({}),s=f=>{Object.entries(f).forEach(([h,p])=>{Ye(n,h,p)})},{style:i,stop:r}=Dv(t,s),{transform:o,stop:a}=Bv(t,s),l=Pe(n,f=>{Object.entries(f).forEach(([h,p])=>{const _=Va(h)?o:i;_[h]&&_[h]===p||Ye(_,h,p)})},{immediate:!0,deep:!0}),c=Pe(()=>is(t),f=>{!f||e&&s(e)},{immediate:!0});return{motionProperties:n,style:i,transform:o,stop:()=>{r(),a(),l(),c()}}}function Vv(t={}){const e=xe(t),n=Be();return{state:Ue(()=>{if(!!n.value)return e[n.value]}),variant:n}}function Hv(t,e={},n){const{motionProperties:s,stop:i}=jv(t),{variant:r,state:o}=Vv(e),a=Ev(s,e),l={target:t,variant:r,variants:e,state:o,motionProperties:s,...a,stop:(u=!1)=>{}},{stop:c}=Av(l,n);return l.stop=(u=!1)=>{const f=()=>{l.stopTransitions(),i(),c()};if(!u&&e.value&&e.value.leave){const h=Pe(l.isAnimating,p=>{p||(h(),f())})}else f()},Oa(()=>l.stop()),l}const Wv=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Uv=(t,e)=>{const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&No(n.variants)&&(e.value={...e.value,...n.variants}),Wv.forEach(s=>{if(s==="delay"){if(n&&n[s]&&Vg(n[s])){const i=n[s];e&&e.value&&(e.value.enter&&(e.value.enter.transition||(e.value.enter.transition={}),e.value.enter.transition={...e.value.enter.transition,delay:i}),e.value.visible&&(e.value.visible.transition||(e.value.visible.transition={}),e.value.visible.transition={...e.value.visible.transition,delay:i}),e.value.visibleOnce&&(e.value.visibleOnce.transition||(e.value.visibleOnce.transition={}),e.value.visibleOnce.transition={...e.value.visibleOnce.transition,delay:i}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&No(n[s])&&(e.value[s]=n[s])}))},Gr=t=>{const e=(s,i,r)=>{const o=i.value&&typeof i.value=="string"?i.value:r.key;o&&zr[o]&&zr[o].stop();const a=Be(t||{});typeof i.value=="object"&&(a.value=i.value),Uv(r,a);const l=Hv(s,a);s.motionInstance=l,o&&Ye(zr,o,l)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:e,unmounted:n,bind:e,unbind:n,getSSRProps(s,i){const{initial:r}=s.value||i.props||{};if(!r||Object.keys(r).length===0)return;const{transform:o,style:a}=Mv(r),{transform:l}=jh(o),{style:c}=Lh(a);return l.value&&(c.value.transform=l.value),{style:c.value}}}},zv={initial:{opacity:0},enter:{opacity:1}},qv={initial:{opacity:0},visible:{opacity:1}},Kv={initial:{opacity:0},visibleOnce:{opacity:1}},Gv={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Yv={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Qv={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Xv={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Jv={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Zv={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},e0={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},t0={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},n0={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},s0={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},i0={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},r0={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},o0={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},a0={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},l0={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},c0={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},u0={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},f0={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},h0={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},d0={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},p0={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},m0={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},_0={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},g0={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},y0={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},v0={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},b0={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Rc={__proto__:null,fade:zv,fadeVisible:qv,fadeVisibleOnce:Kv,pop:Gv,popVisible:Yv,popVisibleOnce:Qv,rollBottom:o0,rollLeft:Xv,rollRight:e0,rollTop:s0,rollVisibleBottom:a0,rollVisibleLeft:Jv,rollVisibleRight:t0,rollVisibleTop:i0,rollVisibleOnceBottom:l0,rollVisibleOnceLeft:Zv,rollVisibleOnceRight:n0,rollVisibleOnceTop:r0,slideBottom:y0,slideLeft:c0,slideRight:h0,slideTop:m0,slideVisibleBottom:v0,slideVisibleLeft:u0,slideVisibleRight:d0,slideVisibleTop:_0,slideVisibleOnceBottom:b0,slideVisibleOnceLeft:f0,slideVisibleOnceRight:p0,slideVisibleOnceTop:g0};function E0(t){const e="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(s,i=>n.charAt(e.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const C0={install(t,e){if(t.directive("motion",Gr()),!e||e&&!e.excludePresets)for(const n in Rc){const s=Rc[n];t.directive(`motion-${E0(n)}`,Gr(s))}if(e&&e.directives)for(const n in e.directives){const s=e.directives[n];!s.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,Gr(s))}}};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Un=typeof window<"u";function w0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Yr(t,e){const n={};for(const s in e){const i=e[s];n[s]=bt(i)?i.map(t):t(i)}return n}const Os=()=>{},bt=Array.isArray,I0=/\/$/,T0=t=>t.replace(I0,"");function Qr(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=A0(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function S0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ac(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function x0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&rs(e.matched[s],n.matched[i])&&Vh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!R0(t[n],e[n]))return!1;return!0}function R0(t,e){return bt(t)?Nc(t,e):bt(e)?Nc(e,t):t===e}function Nc(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function A0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var zs;(function(t){t.pop="pop",t.push="push"})(zs||(zs={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function N0(t){if(!t)if(Un){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),T0(t)}const O0=/^[^#]+#/;function P0(t,e){return t.replace(O0,"#")+e}function k0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function M0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Oc(t,e){return(history.state?history.state.position-e:-1)+t}const Vo=new Map;function D0(t,e){Vo.set(t,e)}function F0(t){const e=Vo.get(t);return Vo.delete(t),e}let L0=()=>location.protocol+"//"+location.host;function Hh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Ac(l,"")}return Ac(n,t)+s+i}function $0(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const p=Hh(t,location),_=n.value,y=e.value;let b=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}b=y?h.position-y.position:0}else s(p);i.forEach(w=>{w(n.value,_,{delta:b,type:zs.pop,direction:b?b>0?Ps.forward:Ps.back:Ps.unknown})})};function l(){o=n.value}function c(h){i.push(h);const p=()=>{const _=i.indexOf(h);_>-1&&i.splice(_,1)};return r.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(ce({},h.state,{scroll:wr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Pc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?wr():null}}function B0(t){const{history:e,location:n}=window,s={value:Hh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:L0()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ce({},e.state,Pc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ce({},i.value,e.state,{forward:l,scroll:wr()});r(u.current,u,!0);const f=ce({},Pc(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function j0(t){t=N0(t);const e=B0(t),n=$0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ce({location:"",base:t,go:s,createHref:P0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V0(t){return typeof t=="string"||t&&typeof t=="object"}function Wh(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uh=Symbol("");var kc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kc||(kc={}));function os(t,e){return ce(new Error,{type:t,[Uh]:!0},e)}function Ot(t,e){return t instanceof Error&&Uh in t&&(e==null||!!(t.type&e))}const Mc="[^/]+?",H0={sensitive:!1,strict:!1,start:!0,end:!0},W0=/[.+*?^${}()[\]/\\]/g;function U0(t,e){const n=ce({},H0,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(W0,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:y,optional:b,regexp:w}=h;r.push({name:_,repeatable:y,optional:b});const A=w||Mc;if(A!==Mc){p+=10;try{new RegExp(`(${A})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+P.message)}}let x=y?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(x=b&&c.length<2?`(?:/${x})`:"/"+x),b&&(x+="?"),i+=x,p+=20,b&&(p+=-8),y&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=r[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:b}=p,w=_ in c?c[_]:"";if(bt(w)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=bt(w)?w.join("/"):w;if(!A)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function z0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function q0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=z0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Dc(s))return 1;if(Dc(i))return-1}return i.length-s.length}function Dc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const K0={type:0,value:""},G0=/[a-zA-Z0-9_]/;function Y0(t){if(!t)return[[]];if(t==="/")return[[K0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:G0.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function Q0(t,e,n){const s=U0(Y0(t.path),n),i=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function X0(t,e){const n=[],s=new Map;e=$c({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,f,h){const p=!h,_=J0(u);_.aliasOf=h&&h.record;const y=$c(e,u),b=[_];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of x)b.push(ce({},_,{components:h?h.record.components:_.components,path:P,aliasOf:h?h.record:_}))}let w,A;for(const x of b){const{path:P}=x;if(f&&P[0]!=="/"){const F=f.record.path,X=F[F.length-1]==="/"?"":"/";x.path=f.record.path+(P&&X+P)}if(w=Q0(x,f,y),h?h.alias.push(w):(A=A||w,A!==w&&A.alias.push(w),p&&u.name&&!Lc(w)&&o(u.name)),_.children){const F=_.children;for(let X=0;X<F.length;X++)r(F[X],w,h&&h.children[X])}h=h||w,l(w)}return A?()=>{o(A)}:Os}function o(u){if(Wh(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&q0(u,n[f])>=0&&(u.record.path!==n[f].record.path||!zh(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Lc(u)&&s.set(u.record.name,u)}function c(u,f){let h,p={},_,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw os(1,{location:u});y=h.record.name,p=ce(Fc(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Fc(u.params,h.keys.map(A=>A.name))),_=h.stringify(p)}else if("path"in u)_=u.path,h=n.find(A=>A.re.test(_)),h&&(p=h.parse(_),y=h.record.name);else{if(h=f.name?s.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw os(1,{location:u,currentLocation:f});y=h.record.name,p=ce({},f.params,u.params),_=h.stringify(p)}const b=[];let w=h;for(;w;)b.unshift(w.record),w=w.parent;return{name:y,path:_,params:p,matched:b,meta:eb(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Fc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function J0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Z0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Z0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Lc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eb(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function $c(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zh(t,e){return e.children.some(n=>n===t||zh(t,n))}const qh=/#/g,tb=/&/g,nb=/\//g,sb=/=/g,ib=/\?/g,Kh=/\+/g,rb=/%5B/g,ob=/%5D/g,Gh=/%5E/g,ab=/%60/g,Yh=/%7B/g,lb=/%7C/g,Qh=/%7D/g,cb=/%20/g;function Ha(t){return encodeURI(""+t).replace(lb,"|").replace(rb,"[").replace(ob,"]")}function ub(t){return Ha(t).replace(Yh,"{").replace(Qh,"}").replace(Gh,"^")}function Ho(t){return Ha(t).replace(Kh,"%2B").replace(cb,"+").replace(qh,"%23").replace(tb,"%26").replace(ab,"`").replace(Yh,"{").replace(Qh,"}").replace(Gh,"^")}function fb(t){return Ho(t).replace(sb,"%3D")}function hb(t){return Ha(t).replace(qh,"%23").replace(ib,"%3F")}function db(t){return t==null?"":hb(t).replace(nb,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Kh," "),o=r.indexOf("="),a=ji(o<0?r:r.slice(0,o)),l=o<0?null:ji(r.slice(o+1));if(a in e){let c=e[a];bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bc(t){let e="";for(let n in t){const s=t[n];if(n=fb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(r=>r&&Ho(r)):[s&&Ho(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const _b=Symbol(""),jc=Symbol(""),Wa=Symbol(""),Xh=Symbol(""),Wo=Symbol("");function bs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Gt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(os(4,{from:n,to:e})):f instanceof Error?a(f):V0(f)?a(os(2,{from:e,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Xr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(gb(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Gt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=w0(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Gt(h,n,s,r,o)()}))}}return i}function gb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vc(t){const e=Dt(Wa),n=Dt(Xh),s=Ue(()=>e.resolve(xe(t.to))),i=Ue(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(rs.bind(null,u));if(h>-1)return h;const p=Hc(l[c-2]);return c>1&&Hc(u)===p&&f[f.length-1].path!==p?f.findIndex(rs.bind(null,l[c-2])):h}),r=Ue(()=>i.value>-1&&Eb(n.params,s.value.params)),o=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&Vh(n.params,s.value.params));function a(l={}){return bb(l)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(Os):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const yb=At({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vc,setup(t,{slots:e}){const n=Bt(Vc(t)),{options:s}=Dt(Wa),i=Ue(()=>({[Wc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Aa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),vb=yb;function bb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Eb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wc=(t,e,n)=>t!=null?t:e!=null?e:n,Cb=At({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(Wo),i=Ue(()=>t.route||s.value),r=Dt(jc,0),o=Ue(()=>{let c=xe(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ue(()=>i.value.matched[o.value]);Si(jc,Ue(()=>o.value+1)),Si(_b,a),Si(Wo,i);const l=Be();return Pe(()=>[l.value,a.value,t.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!rs(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Uc(n.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Aa(h,ce({},_,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Uc(n.default,{Component:b,route:c})||b}}});function Uc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jh=Cb;function wb(t){const e=X0(t.routes,t),n=t.parseQuery||pb,s=t.stringifyQuery||Bc,i=t.history,r=bs(),o=bs(),a=bs(),l=Um(qt);let c=qt;Un&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yr.bind(null,v=>""+v),f=Yr.bind(null,db),h=Yr.bind(null,ji);function p(v,$){let O,B;return Wh(v)?(O=e.getRecordMatcher(v),B=$):B=v,e.addRoute(B,O)}function _(v){const $=e.getRecordMatcher(v);$&&e.removeRoute($)}function y(){return e.getRoutes().map(v=>v.record)}function b(v){return!!e.getRecordMatcher(v)}function w(v,$){if($=ce({},$||l.value),typeof v=="string"){const G=Qr(n,v,$.path),d=e.resolve({path:G.path},$),m=i.createHref(G.fullPath);return ce(G,d,{params:h(d.params),hash:ji(G.hash),redirectedFrom:void 0,href:m})}let O;if("path"in v)O=ce({},v,{path:Qr(n,v.path,$.path).path});else{const G=ce({},v.params);for(const d in G)G[d]==null&&delete G[d];O=ce({},v,{params:f(v.params)}),$.params=f($.params)}const B=e.resolve(O,$),le=v.hash||"";B.params=u(h(B.params));const ye=S0(s,ce({},v,{hash:ub(le),path:B.path})),J=i.createHref(ye);return ce({fullPath:ye,hash:le,query:s===Bc?mb(v.query):v.query||{}},B,{redirectedFrom:void 0,href:J})}function A(v){return typeof v=="string"?Qr(n,v,l.value.path):ce({},v)}function x(v,$){if(c!==v)return os(8,{from:$,to:v})}function P(v){return W(v)}function F(v){return P(ce(A(v),{replace:!0}))}function X(v){const $=v.matched[v.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let B=typeof O=="function"?O(v):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=A(B):{path:B},B.params={}),ce({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function W(v,$){const O=c=w(v),B=l.value,le=v.state,ye=v.force,J=v.replace===!0,G=X(O);if(G)return W(ce(A(G),{state:typeof G=="object"?ce({},le,G.state):le,force:ye,replace:J}),$||O);const d=O;d.redirectedFrom=$;let m;return!ye&&x0(s,B,O)&&(m=os(16,{to:d,from:B}),Bn(B,B,!0,!1)),(m?Promise.resolve(m):U(d,B)).catch(g=>Ot(g)?Ot(g,2)?g:Ze(g):ge(g,d,B)).then(g=>{if(g){if(Ot(g,2))return W(ce({replace:J},A(g.to),{state:typeof g.to=="object"?ce({},le,g.to.state):le,force:ye}),$||d)}else g=ue(d,B,!0,J,le);return ne(d,B,g),g})}function M(v,$){const O=x(v,$);return O?Promise.reject(O):Promise.resolve()}function U(v,$){let O;const[B,le,ye]=Ib(v,$);O=Xr(B.reverse(),"beforeRouteLeave",v,$);for(const G of B)G.leaveGuards.forEach(d=>{O.push(Gt(d,v,$))});const J=M.bind(null,v,$);return O.push(J),Hn(O).then(()=>{O=[];for(const G of r.list())O.push(Gt(G,v,$));return O.push(J),Hn(O)}).then(()=>{O=Xr(le,"beforeRouteUpdate",v,$);for(const G of le)G.updateGuards.forEach(d=>{O.push(Gt(d,v,$))});return O.push(J),Hn(O)}).then(()=>{O=[];for(const G of v.matched)if(G.beforeEnter&&!$.matched.includes(G))if(bt(G.beforeEnter))for(const d of G.beforeEnter)O.push(Gt(d,v,$));else O.push(Gt(G.beforeEnter,v,$));return O.push(J),Hn(O)}).then(()=>(v.matched.forEach(G=>G.enterCallbacks={}),O=Xr(ye,"beforeRouteEnter",v,$),O.push(J),Hn(O))).then(()=>{O=[];for(const G of o.list())O.push(Gt(G,v,$));return O.push(J),Hn(O)}).catch(G=>Ot(G,8)?G:Promise.reject(G))}function ne(v,$,O){for(const B of a.list())B(v,$,O)}function ue(v,$,O,B,le){const ye=x(v,$);if(ye)return ye;const J=$===qt,G=Un?history.state:{};O&&(B||J?i.replace(v.fullPath,ce({scroll:J&&G&&G.scroll},le)):i.push(v.fullPath,le)),l.value=v,Bn(v,$,O,J),Ze()}let D;function ae(){D||(D=i.listen((v,$,O)=>{if(!gs.listening)return;const B=w(v),le=X(B);if(le){W(ce(le,{replace:!0}),B).catch(Os);return}c=B;const ye=l.value;Un&&D0(Oc(ye.fullPath,O.delta),wr()),U(B,ye).catch(J=>Ot(J,12)?J:Ot(J,2)?(W(J.to,B).then(G=>{Ot(G,20)&&!O.delta&&O.type===zs.pop&&i.go(-1,!1)}).catch(Os),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ge(J,B,ye))).then(J=>{J=J||ue(B,ye,!1),J&&(O.delta&&!Ot(J,8)?i.go(-O.delta,!1):O.type===zs.pop&&Ot(J,20)&&i.go(-1,!1)),ne(B,ye,J)}).catch(Os)}))}let _e=bs(),Ee=bs(),Se;function ge(v,$,O){Ze(v);const B=Ee.list();return B.length?B.forEach(le=>le(v,$,O)):console.error(v),Promise.reject(v)}function fe(){return Se&&l.value!==qt?Promise.resolve():new Promise((v,$)=>{_e.add([v,$])})}function Ze(v){return Se||(Se=!v,ae(),_e.list().forEach(([$,O])=>v?O(v):$()),_e.reset()),v}function Bn(v,$,O,B){const{scrollBehavior:le}=t;if(!Un||!le)return Promise.resolve();const ye=!O&&F0(Oc(v.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return wa().then(()=>le(v,$,ye)).then(J=>J&&M0(J)).catch(J=>ge(J,v,$))}const Nt=v=>i.go(v);let Ct;const rt=new Set,gs={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:b,getRoutes:y,resolve:w,options:t,push:P,replace:F,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:fe,install(v){const $=this;v.component("RouterLink",vb),v.component("RouterView",Jh),v.config.globalProperties.$router=$,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(l)}),Un&&!Ct&&l.value===qt&&(Ct=!0,P(i.location).catch(le=>{}));const O={};for(const le in qt)O[le]=Ue(()=>l.value[le]);v.provide(Wa,$),v.provide(Xh,Bt(O)),v.provide(Wo,l);const B=v.unmount;rt.add(v),v.unmount=function(){rt.delete(v),rt.size<1&&(c=qt,D&&D(),D=null,l.value=qt,Ct=!1,Se=!1),B()}}};return gs}function Hn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ib(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>rs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>rs(c,l))||i.push(l))}return[n,s,i]}const Tb=At({__name:"App",setup(t){return(e,n)=>(Ie(),xa(xe(Jh)))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ps(e)},ps=function(t){return new Error("Firebase Database ("+Zh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[u],n[f],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ed(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},td=function(t){const e=ed(t);return Ua.encodeByteArray(e,!0)},nd=function(t){return td(t).replace(/\./g,"")},zc=function(t){try{return Ua.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){return sd(void 0,t)}function sd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rb(n)||(t[n]=sd(t[n],e[n]));return t}function Rb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ab())}function Nb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ob(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rd(){return Zh.NODE_ADMIN===!0}function od(){return typeof indexedDB=="object"}function ad(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Pb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kb,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Mb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,s)}}function Mb(t,e){return t.replace(Db,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Db=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=qs(zc(r[0])||""),n=qs(zc(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Fb=function(t){const e=ld(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lb=function(t){const e=ld(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function as(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kc(r)&&Kc(o)){if(!Hi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function cd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=1e3,Hb=2,Wb=4*60*60*1e3,Ub=.5;function Gc(t,e=Vb,n=Hb){const s=e*Math.pow(n,t),i=Math.round(Ub*s*(Math.random()-.5)*2);return Math.min(Wb,s+i)}/**
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
 */function ai(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new za;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kb(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qb(t){return t===pn?void 0:t}function Kb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Yb={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Qb=ve.INFO,Xb={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Jb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Xb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=Qb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Zb=(t,e)=>e.some(n=>t instanceof n);let Yc,Qc;function eE(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return Qc||(Qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ud=new WeakMap,Uo=new WeakMap,fd=new WeakMap,Jr=new WeakMap,Ka=new WeakMap;function nE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ud.set(n,t)}).catch(()=>{}),Ka.set(e,t),e}function sE(t){if(Uo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Uo.set(t,e)}let zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iE(t){zo=t(zo)}function rE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Zr(this),e,...n);return fd.set(s,e.sort?e.sort():[e]),Zt(s)}:tE().includes(t)?function(...e){return t.apply(Zr(this),e),Zt(ud.get(this))}:function(...e){return Zt(t.apply(Zr(this),e))}}function oE(t){return typeof t=="function"?rE(t):(t instanceof IDBTransaction&&sE(t),Zb(t,eE())?new Proxy(t,zo):t)}function Zt(t){if(t instanceof IDBRequest)return nE(t);if(Jr.has(t))return Jr.get(t);const e=oE(t);return e!==t&&(Jr.set(t,e),Ka.set(e,t)),e}const Zr=t=>Ka.get(t);function hd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const aE=["get","getKey","getAll","getAllKeys","count"],lE=["put","add","delete","clear"],eo=new Map;function Xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=lE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||aE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return eo.set(e,r),r}iE(t=>({...t,get:(e,n,s)=>Xc(e,n)||t.get(e,n,s),has:(e,n)=>!!Xc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qo="@firebase/app",Jc="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new qa("@firebase/app"),fE="@firebase/app-compat",hE="@firebase/analytics-compat",dE="@firebase/analytics",pE="@firebase/app-check-compat",mE="@firebase/app-check",_E="@firebase/auth",gE="@firebase/auth-compat",yE="@firebase/database",vE="@firebase/database-compat",bE="@firebase/functions",EE="@firebase/functions-compat",CE="@firebase/installations",wE="@firebase/installations-compat",IE="@firebase/messaging",TE="@firebase/messaging-compat",SE="@firebase/performance",xE="@firebase/performance-compat",RE="@firebase/remote-config",AE="@firebase/remote-config-compat",NE="@firebase/storage",OE="@firebase/storage-compat",PE="@firebase/firestore",kE="@firebase/firestore-compat",ME="firebase",DE="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",FE={[qo]:"fire-core",[fE]:"fire-core-compat",[dE]:"fire-analytics",[hE]:"fire-analytics-compat",[mE]:"fire-app-check",[pE]:"fire-app-check-compat",[_E]:"fire-auth",[gE]:"fire-auth-compat",[yE]:"fire-rtdb",[vE]:"fire-rtdb-compat",[bE]:"fire-fn",[EE]:"fire-fn-compat",[CE]:"fire-iid",[wE]:"fire-iid-compat",[IE]:"fire-fcm",[TE]:"fire-fcm-compat",[SE]:"fire-perf",[xE]:"fire-perf-compat",[RE]:"fire-rc",[AE]:"fire-rc-compat",[NE]:"fire-gcs",[OE]:"fire-gcs-compat",[PE]:"fire-fst",[kE]:"fire-fst-compat","fire-js":"fire-js",[ME]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Map,Ko=new Map;function LE(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Ko.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ko.set(e,t);for(const n of Wi.values())LE(n,t);return!0}function li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new Ir("app","Firebase",$E);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=DE;function VE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Rn.create("bad-app-name",{appName:String(s)});const i=Wi.get(s);if(i){if(Hi(t,i.options)&&Hi(n,i.config))return i;throw Rn.create("duplicate-app",{appName:s})}const r=new Gb(s);for(const a of Ko.values())r.addComponent(a);const o=new BE(t,n,r);return Wi.set(s,o),o}function pd(t=dd){const e=Wi.get(t);if(!e)throw Rn.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=FE[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}sn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const HE="firebase-heartbeat-database",WE=1,Ks="firebase-heartbeat-store";let to=null;function md(){return to||(to=hd(HE,WE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ks)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),to}async function UE(t){var e;try{return(await md()).transaction(Ks).objectStore(Ks).get(_d(t))}catch(n){if(n instanceof Fn)xn.warn(n.message);else{const s=Rn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});xn.warn(s.message)}}}async function Zc(t,e){var n;try{const i=(await md()).transaction(Ks,"readwrite");return await i.objectStore(Ks).put(e,_d(t)),i.done}catch(s){if(s instanceof Fn)xn.warn(s.message);else{const i=Rn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});xn.warn(i.message)}}}function _d(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zE=1024,qE=30*24*60*60*1e3;class KE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=qE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eu(),{heartbeatsToSend:n,unsentEntries:s}=GE(this._heartbeatsCache.heartbeats),i=nd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eu(){return new Date().toISOString().substring(0,10)}function GE(t,e=zE){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),tu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return od()?ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await UE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tu(t){return nd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){sn(new $t("platform-logger",e=>new cE(e),"PRIVATE")),sn(new $t("heartbeat",e=>new KE(e),"PRIVATE")),xt(qo,Jc,t),xt(qo,Jc,"esm2017"),xt("fire-js","")}QE("");const nu="@firebase/database",su="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd="";function XE(t){gd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JE(e)}}catch{}return new ZE},En=yd("localStorage"),Go=yd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new qa("@firebase/database"),eC=function(){let t=1;return function(){return t++}}(),vd=function(t){const e=jb(t),n=new Bb;n.update(e);const s=n.digest();return Ua.encodeByteArray(s)},ci=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ci.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let Sn=null,iu=!0;const tC=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xn.logLevel=ve.VERBOSE,Sn=Xn.log.bind(Xn),e&&Go.set("logging_enabled",!0)):typeof t=="function"?Sn=t:(Sn=null,Go.remove("logging_enabled"))},Ve=function(...t){if(iu===!0&&(iu=!1,Sn===null&&Go.get("logging_enabled")===!0&&tC(!0)),Sn){const e=ci.apply(null,t);Sn(e)}},ui=function(t){return function(...e){Ve(t,...e)}},Yo=function(...t){const e="FIREBASE INTERNAL ERROR: "+ci(...t);Xn.error(e)},An=function(...t){const e=`FIREBASE FATAL ERROR: ${ci(...t)}`;throw Xn.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+ci(...t);Xn.warn(e)},nC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ls="[MIN_NAME]",Nn="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===ls||e===Nn)return-1;if(e===ls||t===Nn)return 1;{const n=ru(t),s=ru(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iC=function(t,e){return t===e?0:t<e?-1:1},Es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Ga=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=Ga(t[e[s]]);return n+="}",n},Ed=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cd=function(t){T(!bd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},rC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lC=new RegExp("^-?(0*)\\d{1,10}$"),cC=-2147483648,uC=2147483647,ru=function(t){if(lC.test(t)){const e=Number(t);if(e>=cC&&e<=uC)return e}return null},fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},fC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class Qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="5",wd="v",Id="s",Td="r",Sd="f",xd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rd="ls",Ad="p",Xo="ac",Nd="websocket",Od="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pd(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Nd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Od)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mC(t)&&(n.ns=t.namespace);const i=[];return Je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={},so={};function Qa(t){const e=t.toString();return no[e]||(no[e]=new _C),no[e]}function gC(t,e){const n=t.toString();return so[n]||(so[n]=e()),so[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&fi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="start",vC="close",bC="pLPCommand",EC="pRTLPCB",kd="id",Md="pw",Dd="ser",CC="cb",wC="seg",IC="ts",TC="d",SC="dframe",Fd=1870,Ld=30,xC=Fd-Ld,RC=25e3,AC=3e4;class zn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ui(e),this.stats_=Qa(n),this.urlFn=l=>(this.appCheckToken&&(l[Xo]=this.appCheckToken),Pd(n,Od,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AC)),sC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ou)this.id=a,this.password=l;else if(o===vC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ou]="t",s[Dd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[CC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wd]=Ya,this.transportSessionId&&(s[Id]=this.transportSessionId),this.lastSessionId&&(s[Rd]=this.lastSessionId),this.applicationId&&(s[Ad]=this.applicationId),this.appCheckToken&&(s[Xo]=this.appCheckToken),typeof location<"u"&&location.hostname&&xd.test(location.hostname)&&(s[Td]=Sd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zn.forceAllow_=!0}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){return zn.forceAllow_?!0:!zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rC()&&!oC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=td(n),i=Ed(s,xC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[SC]="t",s[kd]=e,s[Md]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eC(),window[bC+this.uniqueCallbackIdentifier]=e,window[EC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xa.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kd]=this.myID,e[Md]=this.myPW,e[Dd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ld+s.length<=Fd;){const o=this.pendingSegs.shift();s=s+"&"+wC+i+"="+o.seg+"&"+IC+i+"="+o.ts+"&"+TC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(RC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=16384,OC=45e3;let Ui=null;typeof MozWebSocket<"u"?Ui=MozWebSocket:typeof WebSocket<"u"&&(Ui=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ui(this.connId),this.stats_=Qa(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wd]=Ya,typeof location<"u"&&location.hostname&&xd.test(location.hostname)&&(o[Td]=Sd),n&&(o[Id]=n),s&&(o[Rd]=s),i&&(o[Xo]=i),r&&(o[Ad]=r),Pd(e,Nd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let s;rd(),this.mySock=new Ui(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ui!==null&&!dt.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=qs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ed(n,NC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(OC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zn,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of Gs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=6e4,kC=5e3,MC=10*1024,DC=100*1024,io="t",au="d",FC="s",lu="r",LC="e",cu="o",uu="a",fu="n",hu="p",$C="h";class BC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ui("c:"+this.id+":"),this.transportManager_=new Gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(io in e){const n=e[io];n===uu?this.upgradeIfSecondaryHealthy_():n===lu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Es(io,e);if(au in e){const s=e[au];if(n===$C)this.onHandshake_(s);else if(n===fu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FC?this.onConnectionShutdown_(s):n===lu?this.onReset_(s):n===LC?Yo("Server Error: "+s):n===cu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ya!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Bd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zi}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=32,pu=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new me("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function jd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vd(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function ke(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=ee(t),s=ee(e);if(n===null)return e;if(n===s)return Qe(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ja(t,e){if(rn(t)!==rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rn(t)>rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class VC{constructor(e,n){this.errorPrefix_=n,this.parts_=Vd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Tr(this.parts_[s]);Wd(this)}}function HC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Tr(e),Wd(t)}function WC(t){const e=t.parts_.pop();t.byteLength_-=Tr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wd(t){if(t.byteLength_>pu)throw new Error(t.errorPrefix_+"has a key path longer than "+pu+" bytes ("+t.byteLength_+").");if(t.parts_.length>du)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+du+") or object contains a cycle "+mn(t))}function mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Bd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Za}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,UC=60*5*1e3,mu=30*1e3,zC=1.3,qC=3e4,KC="server_kill",_u=3;class Ft extends $d{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ft.nextPersistentConnectionId_++,this.log_=ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=UC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Za.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Le(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new za,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ft.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=as(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yo("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qC&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new BC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{nt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(KC)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&nt(f),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qc(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ga(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_u&&(this.reconnectDelay_=mu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_u&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gd.replace(/\./g,"-")]=1,id()?e["framework.cordova"]=1:Ob()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zi.getInstance().currentlyOnline();return qc(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(ls,e),i=new Z(ls,n);return this.compare(s,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class Ud extends Sr{static get __EMPTY_NODE(){return wi}static set __EMPTY_NODE(e){wi=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Nn,wi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,wi)}toString(){return".key"}}const Jn=new Ud;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:De.RED,this.left=i!=null?i:Xe.EMPTY_NODE,this.right=r!=null?r:Xe.EMPTY_NODE}copy(e,n,s,i,r){return new De(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class GC{copy(e,n,s,i,r){return this}insert(e,n,s){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ii(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ii(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ii(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ii(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new GC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e){return ms(t.name,e.name)}function el(t,e){return ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;function QC(t){Jo=t}const zd=function(t){return typeof t=="number"?"number:"+Cd(t):"string:"+t},qd=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else T(t===Jo||t.isEmpty(),"priority of unexpected type.");T(t===Jo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qd(this.priorityNode_)}static set __childrenNodeConstructor(e){gu=e}static get __childrenNodeConstructor(){return gu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cd(this.value_):e+=this.value_,this.lazyHash_=vd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),r=Me.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd,Gd;function XC(t){Kd=t}function JC(t){Gd=t}class ZC extends Sr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ms(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Nn,new Me("[PRIORITY-POST]",Gd))}makePost(e,n){const s=Kd(e);return new Z(n,new Me("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new ZC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=Math.log(2);class tw{constructor(e){const n=r=>parseInt(Math.log(r)/ew,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new De(h,f.node,De.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=i(l,p),y=i(p+1,c);return f=t[p],h=n?n(f):f,new De(h,f.node,De.BLACK,_,y)}},r=function(l){let c=null,u=null,f=t.length;const h=function(_,y){const b=f-_,w=f;f-=_;const A=i(b+1,w),x=t[b],P=n?n(x):x;p(new De(P,x.node,y,null,A))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));y?h(b,De.BLACK):(h(b,De.BLACK),h(b,De.RED))}return u},o=new tw(t.length),a=r(o);return new Xe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;const Wn={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Wn&&Ae,"ChildrenNode.ts has not been loaded"),ro=ro||new Mt({".priority":Wn},{".priority":Ae}),ro}get(e){const n=as(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Jn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=qi(s,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mt(u,c)}addToIndexes(e,n){const s=Vi(this.indexes_,(i,r)=>{const o=as(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),qi(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vi(this.indexes_,i=>{if(i===Wn)return i;{const r=n.get(e.name);return r?i.remove(new Z(e.name,r)):i}});return new Mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qd(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ws||(ws=new H(new Xe(el),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ws:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ws:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{T(ee(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(be(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zd(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hi?-1:0}withIndex(e){if(e===Jn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),i=n.getIterator(Ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nw extends H{constructor(){super(new Xe(el),H.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const hi=new nw;Object.defineProperties(Z,{MIN:{value:new Z(ls,H.EMPTY_NODE)},MAX:{value:new Z(Nn,hi)}});Ud.__EMPTY_NODE=H.EMPTY_NODE;Me.__childrenNodeConstructor=H;QC(hi);JC(hi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=!0;function He(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,He(e))}if(!(t instanceof Array)&&sw){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=qi(n,YC,o=>o.name,el);if(s){const o=qi(n,Ae.getCompare());return new H(r,He(e),new Mt({".priority":o},{".priority":Ae}))}else return new H(r,He(e),Mt.Default)}else{let n=H.EMPTY_NODE;return Je(t,(s,i)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}XC(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends Sr{constructor(e){super(),this.indexPath_=e,T(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ms(e.name,n.name):r}makePost(e,n){const s=He(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,hi);return new Z(Nn,e)}toString(){return Vd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw extends Sr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=He(e);return new Z(n,s)}toString(){return".value"}}const ow=new rw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ys(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ys(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cs(n,s)):o.trackChildChange(Qs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ys(i,r))}),n.isLeafNode()||n.forEachChild(Ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Qs(i,r,o))}else s.trackChildChange(cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xs.getStartPost_(e),this.endPost_=Xs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new Z(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(Ae,(o,a)=>{r.matches(new Z(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.rangedFilter_=new Xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Z(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(h,p)=>f(p,h)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(r,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:i=i.updateImmediateChild(f.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,p)=>f(p,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Z(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Qs(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ys(n,f));const y=a.updateImmediateChild(n,H.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(cs(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ys(c.name,c.node)),r.trackChildChange(cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new nl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cw(t){return t.loadsAllData()?new tl(t.getIndex()):t.hasLimit()?new lw(t):new Xs(t)}function yu(t){const e={};if(t.isDefault())return e;let n;return t.index_===Ae?n="$priority":t.index_===ow?n="$value":t.index_===Jn?n="$key":(T(t.index_ instanceof iw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_&&(e.startAt=Le(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Le(t.indexStartName_))),t.endSet_&&(e.endAt=Le(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Le(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends $d{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ui("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ki.getListenId_(e,s),a={};this.listens_[o]=a;const l=yu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),as(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Ki.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yu(e._queryParams),s=e._path.toString(),i=new za;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$b(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qs(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return{value:null,children:new Map}}function Qd(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ee(e);t.children.has(s)||t.children.set(s,Gi());const i=t.children.get(s);e=be(e),Qd(i,e,n)}}function Zo(t,e,n){t.value!==null?n(e,t.value):fw(t,(s,i)=>{const r=new me(e.toString()+"/"+s);Zo(i,r,n)})}function fw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=10*1e3,dw=30*1e3,pw=5*60*1e3;class mw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hw(e);const s=bu+(dw-bu)*Math.random();ks(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(i,r)=>{r>0&&Vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*pw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function il(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=Xd()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Yi(oe(),n,this.revert)}}else return T(ee(this.path)===e,"operationForChild called for unrelated child."),new Yi(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Js(this.source,oe()):new Js(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return te(this.path)?new On(this.source,oe(),this.snap.getImmediateChild(e)):new On(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new On(this.source,oe(),n.value):new Zs(this.source,oe(),n)}else return T(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(aw(o.childName,o.snapshotNode))}),Is(t,i,"child_removed",e,s,n),Is(t,i,"child_added",e,s,n),Is(t,i,"child_moved",r,s,n),Is(t,i,"child_changed",e,s,n),Is(t,i,"value",e,s,n),i}function Is(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>vw(t,a,l)),o.forEach(a=>{const l=yw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function yw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vw(t,e,n){if(e.childName==null||n.childName==null)throw ps("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){return{eventCache:t,serverCache:e}}function Ms(t,e,n,s){return xr(new Pn(e,n,s),t.serverCache)}function Jd(t,e,n,s){return xr(t.eventCache,new Pn(e,n,s))}function ea(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;const bw=()=>(oo||(oo=new Xe(iC)),oo);class we{constructor(e,n=bw()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Je(e,(s,i)=>{n=n.set(new me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(te(e))return null;{const s=ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(be(e),n);return r!=null?{path:ke(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(be(e)):new we(null)}}set(e,n){if(te(e))return new we(n,this.children);{const s=ee(e),r=(this.children.get(s)||new we(null)).set(be(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const i=s.remove(be(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(be(e)):null}}setTree(e,n){if(te(e))return n;{const s=ee(e),r=(this.children.get(s)||new we(null)).setTree(be(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ke(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=ee(e),o=this.children.get(r);return o?o.findOnPath_(be(e),ke(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=ee(e),r=this.children.get(i);return r?r.foreachOnPath_(be(e),ke(n,i),s):new we(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new we(null))}}function Ds(t,e,n){if(te(e))return new vt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Qe(i,e);return r=r.updateChild(o,n),new vt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new vt(r)}}}function Eu(t,e,n){let s=t;return Je(n,(i,r)=>{s=Ds(s,ke(e,i),r)}),s}function Cu(t,e){if(te(e))return vt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new vt(n)}}function ta(t,e){return Ln(t,e)!=null}function Ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function wu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,i)=>{e.push(new Z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Z(s,i.value))}),e}function en(t,e){if(te(e))return t;{const n=Ln(t,e);return n!=null?new vt(new we(n)):new vt(t.writeTree_.subtree(e))}}function na(t){return t.writeTree_.isEmpty()}function us(t,e){return Zd(oe(),t.writeTree_,e)}function Zd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zd(ke(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ke(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e){return sp(e,t)}function Ew(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ds(t.visibleWrites,e,n)),t.lastWriteId=s}function Cw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ww(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Iw(a,s.path)?i=!1:mt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Tw(t),!0;if(s.snap)t.visibleWrites=Cu(t.visibleWrites,s.path);else{const a=s.children;Je(a,l=>{t.visibleWrites=Cu(t.visibleWrites,ke(s.path,l))})}return!0}else return!1}function Iw(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(ke(t.path,n),e))return!0;return!1}function Tw(t){t.visibleWrites=ep(t.allWrites,Sw,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sw(t){return t.visible}function ep(t,e,n){let s=vt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)mt(n,o)?(a=Qe(n,o),s=Ds(s,a,r.snap)):mt(o,n)&&(a=Qe(o,n),s=Ds(s,oe(),r.snap.getChild(a)));else if(r.children){if(mt(n,o))a=Qe(n,o),s=Eu(s,a,r.children);else if(mt(o,n))if(a=Qe(o,n),te(a))s=Eu(s,oe(),r.children);else{const l=as(r.children,ee(a));if(l){const c=l.getChild(be(a));s=Ds(s,oe(),c)}}}else throw ps("WriteRecord should have .snap or .children")}}return s}function tp(t,e,n,s,i){if(!s&&!i){const r=Ln(t.visibleWrites,e);if(r!=null)return r;{const o=en(t.visibleWrites,e);if(na(o))return n;if(n==null&&!ta(o,oe()))return null;{const a=n||H.EMPTY_NODE;return us(o,a)}}}else{const r=en(t.visibleWrites,e);if(!i&&na(r))return n;if(!i&&n==null&&!ta(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=ep(t.allWrites,o,e),l=n||H.EMPTY_NODE;return us(a,l)}}}function xw(t,e,n){let s=H.EMPTY_NODE;const i=Ln(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=en(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=us(en(r,new me(o)),a);s=s.updateImmediateChild(o,l)}),wu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=en(t.visibleWrites,e);return wu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rw(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ke(e,n);if(ta(t.visibleWrites,r))return null;{const o=en(t.visibleWrites,r);return na(o)?i.getChild(n):us(o,i.getChild(n))}}function Aw(t,e,n,s){const i=ke(e,n),r=Ln(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=en(t.visibleWrites,i);return us(o,s.getNode().getImmediateChild(n))}else return null}function Nw(t,e){return Ln(t.visibleWrites,e)}function Ow(t,e,n,s,i,r,o){let a;const l=en(t.visibleWrites,e),c=Ln(l,oe());if(c!=null)a=c;else if(n!=null)a=us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function Pw(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Qi(t,e,n,s){return tp(t.writeTree,t.treePath,e,n,s)}function ol(t,e){return xw(t.writeTree,t.treePath,e)}function Iu(t,e,n,s){return Rw(t.writeTree,t.treePath,e,n,s)}function Xi(t,e){return Nw(t.writeTree,ke(t.treePath,e))}function kw(t,e,n,s,i,r){return Ow(t.writeTree,t.treePath,e,n,s,i,r)}function al(t,e,n){return Aw(t.writeTree,t.treePath,e,n)}function np(t,e){return sp(ke(t.treePath,e),t.writeTree)}function sp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Qs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ys(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Qs(s,e.snapshotNode,i.oldSnap));else throw ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ip=new Dw;class ll{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return al(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),r=kw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){return{filter:t}}function Lw(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $w(t,e,n,s,i){const r=new Mw;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=sa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=Ji(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=jw(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ia(t,e,c.path,c.children,s,i,a,r))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=Ww(t,e,c.path,s,i,r):o=Vw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===_t.LISTEN_COMPLETE)o=Hw(t,e,n.path,s,r);else throw ps("Unknown operation type: "+n.type);const l=r.getChanges();return Bw(e,o,l),{viewCache:o,changes:l}}function Bw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ea(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Yd(ea(e)))}}function rp(t,e,n,s,i,r){const o=e.eventCache;if(Xi(s,n)!=null)return e;{let a,l;if(te(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kn(e),u=c instanceof H?c:H.EMPTY_NODE,f=ol(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Qi(s,kn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ee(n);if(c===".priority"){T(rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Iu(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=be(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Iu(s,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=al(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return Ms(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Ji(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ee(n);if(!l.isCompleteForPath(n)&&rn(n)>1)return e;const _=be(n),b=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,_,ip,null)}const f=Jd(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new ll(i,f,r);return rp(t,f,n,i,h,a)}function sa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ll(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ms(e,c,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ms(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=be(n),p=a.getNode().getImmediateChild(f);let _;if(te(h))_=s;else{const y=u.getCompleteChild(f);y!=null?jd(h)===".priority"&&y.getChild(Hd(h)).isEmpty()?_=y:_=y.updateChild(h,s):_=H.EMPTY_NODE}if(p.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),f,_,h,u,o);l=Ms(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tu(t,e){return t.eventCache.isCompleteForChild(e)}function jw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ke(n,l);Tu(e,ee(u))&&(a=sa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ke(n,l);Tu(e,ee(u))||(a=sa(t,a,u,c,i,r,o))}),a}function Su(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ia(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),_=Su(t,p,h);l=Ji(t,l,new me(f),_,i,r,o,a)}}),c.children.inorderTraversal((f,h)=>{const p=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!p){const _=e.serverCache.getNode().getImmediateChild(f),y=Su(t,_,h);l=Ji(t,l,new me(f),y,i,r,o,a)}}),l}function Vw(t,e,n,s,i,r,o){if(Xi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ji(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new we(null);return l.getNode().forEachChild(Jn,(u,f)=>{c=c.set(new me(u),f)}),ia(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,f)=>{const h=ke(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ia(t,e,n,c,i,r,a,o)}}function Hw(t,e,n,s,i){const r=e.serverCache,o=Jd(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return rp(t,o,n,s,ip,i)}function Ww(t,e,n,s,i,r){let o;if(Xi(s,n)!=null)return e;{const a=new ll(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qi(s,kn(e));else{const f=e.serverCache.getNode();T(f instanceof H,"serverChildren would be complete if leaf node"),u=ol(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ee(n);let f=al(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,be(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,be(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qi(s,kn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Xi(s,oe())!=null,Ms(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tl(s.getIndex()),r=cw(s);this.processor_=Fw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new Pn(l,o.isFullyInitialized(),i.filtersNodes()),f=new Pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xr(f,u),this.eventGenerator_=new _w(this.query_)}get query(){return this.query_}}function zw(t){return t.viewCache_.serverCache.getNode()}function qw(t,e){const n=kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function xu(t){return t.eventRegistrations_.length===0}function Kw(t,e){t.eventRegistrations_.push(e)}function Ru(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Au(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(T(kn(t.viewCache_),"We should always have a full cache before handling merges"),T(ea(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$w(t.processor_,i,e,n,s);return Lw(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,op(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Gw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(r,o)=>{s.push(cs(r,o))}),n.isFullyInitialized()&&s.push(Yd(n.getNode())),op(t,s,n.getNode(),e)}function op(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return gw(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class Yw{constructor(){this.views=new Map}}function Qw(t){T(!Zi,"__referenceConstructor has already been defined"),Zi=t}function Xw(){return T(Zi,"Reference.ts has not been loaded"),Zi}function Jw(t){return t.views.size===0}function cl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Au(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Au(o,e,n,s));return r}}function Zw(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Qi(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=ol(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=xr(new Pn(a,l,!1),new Pn(s,i,!1));return new Uw(e,c)}return o}function eI(t,e,n,s,i,r){const o=Zw(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Kw(o,n),Gw(o,n)}function tI(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=on(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ru(c,n,s)),xu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ru(l,n,s)),xu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!on(t)&&r.push(new(Xw())(e._repo,e._path)),{removed:r,events:o}}function ap(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zn(t,e){let n=null;for(const s of t.views.values())n=n||qw(s,e);return n}function lp(t,e){if(e._queryParams.loadsAllData())return Rr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function cp(t,e){return lp(t,e)!=null}function on(t){return Rr(t)!=null}function Rr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;function nI(t){T(!er,"__referenceConstructor has already been defined"),er=t}function sI(){return T(er,"Reference.ts has not been loaded"),er}let iI=1;class Nu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=Pw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rI(t,e,n,s,i){return Ew(t.pendingWriteTree_,e,n,s,i),i?di(t,new On(Xd(),e,n)):[]}function qn(t,e,n=!1){const s=Cw(t.pendingWriteTree_,e);if(ww(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(oe(),!0):Je(s.children,o=>{r=r.set(new me(o),!0)}),di(t,new Yi(s.path,r,n))}else return[]}function Ar(t,e,n){return di(t,new On(sl(),e,n))}function oI(t,e,n){const s=we.fromObject(n);return di(t,new Zs(sl(),e,s))}function aI(t,e){return di(t,new Js(sl(),e))}function lI(t,e,n){const s=ul(t,n);if(s){const i=fl(s),r=i.path,o=i.queryId,a=Qe(r,e),l=new Js(il(o),a);return hl(t,r,l)}else return[]}function ra(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||cp(o,e))){const l=tI(o,e,n,s);Jw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(h,p)=>on(p));if(u&&!f){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=fI(h);for(let _=0;_<p.length;++_){const y=p[_],b=y.query,w=dp(t,y);t.listenProvider_.startListening(Fs(b),tr(t,b),w.hashFn,w.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Fs(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Nr(h));t.listenProvider_.stopListening(Fs(h),p)}))}hI(t,c)}return a}function cI(t,e,n,s){const i=ul(t,s);if(i!=null){const r=fl(i),o=r.path,a=r.queryId,l=Qe(o,e),c=new On(il(a),l,n);return hl(t,o,c)}else return[]}function uI(t,e,n,s){const i=ul(t,s);if(i){const r=fl(i),o=r.path,a=r.queryId,l=Qe(o,e),c=we.fromObject(n),u=new Zs(il(a),l,c);return hl(t,o,u)}else return[]}function Ou(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Qe(h,i);r=r||Zn(p,_),o=o||on(p)});let a=t.syncPointTree_.get(i);a?(o=o||on(a),r=r||Zn(a,oe())):(a=new Yw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const y=Zn(_,oe());y&&(r=r.updateImmediateChild(p,y))}));const c=cp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Nr(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=dI();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=rl(t.pendingWriteTree_,i);let f=eI(a,e,n,u,r,l);if(!c&&!o&&!s){const h=lp(a,e);f=f.concat(pI(t,e,h))}return f}function up(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=Zn(a,l);if(c)return c});return tp(i,e,r,n,!0)}function di(t,e){return fp(e,t.syncPointTree_,null,rl(t.pendingWriteTree_,oe()))}function fp(t,e,n,s){if(te(t.path))return hp(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=Zn(i,oe()));let r=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=np(s,o);r=r.concat(fp(a,l,c,u))}return i&&(r=r.concat(cl(i,t,s,n))),r}}function hp(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=Zn(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=np(s,o),u=t.operationForChild(o);u&&(r=r.concat(hp(u,a,l,c)))}),i&&(r=r.concat(cl(i,t,s,n))),r}function dp(t,e){const n=e.query,s=tr(t,n);return{hashFn:()=>(zw(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lI(t,n._path,s):aI(t,n._path);{const r=aC(i,n);return ra(t,n,null,r)}}}}function tr(t,e){const n=Nr(e);return t.queryToTagMap.get(n)}function Nr(t){return t._path.toString()+"$"+t._queryIdentifier}function ul(t,e){return t.tagToQueryMap.get(e)}function fl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function hl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=rl(t.pendingWriteTree_,e);return cl(s,n,i,null)}function fI(t){return t.fold((e,n,s)=>{if(n&&on(n))return[Rr(n)];{let i=[];return n&&(i=ap(n)),Je(s,(r,o)=>{i=i.concat(o)}),i}})}function Fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sI())(t._repo,t._path):t}function hI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Nr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function dI(){return iI++}function pI(t,e,n){const s=e._path,i=tr(t,e),r=dp(t,n),o=t.listenProvider_.startListening(Fs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!on(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!te(c)&&u&&on(u))return[Rr(u).query];{let h=[];return u&&(h=h.concat(ap(u).map(p=>p.query))),Je(f,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Fs(u),tr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dl(n)}node(){return this.node_}}class pl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new pl(this.syncTree_,n)}node(){return up(this.syncTree_,this.path_)}}const mI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _I(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gI(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_I=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},gI=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yI=function(t,e,n,s){return ml(e,new pl(n,t),s)},vI=function(t,e,n){return ml(t,new dl(e),n)};function ml(t,e,n){const s=t.getPriority().val(),i=Pu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Pu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Me(i))),o.forEachChild(Ae,(a,l)=>{const c=ml(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gl(t,e){let n=e instanceof me?e:new me(e),s=t,i=ee(n);for(;i!==null;){const r=as(s.node.children,i)||{children:{},childCount:0};s=new _l(i,s,r),n=be(n),i=ee(n)}return s}function _s(t){return t.node.value}function pp(t,e){t.node.value=e,oa(t)}function mp(t){return t.node.childCount>0}function bI(t){return _s(t)===void 0&&!mp(t)}function Or(t,e){Je(t.node.children,(n,s)=>{e(new _l(n,t,s))})}function _p(t,e,n,s){n&&!s&&e(t),Or(t,i=>{_p(i,e,!0,s)}),n&&s&&e(t)}function EI(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pi(t){return new me(t.parent===null?t.name:pi(t.parent)+"/"+t.name)}function oa(t){t.parent!==null&&CI(t.parent,t.name,t)}function CI(t,e,n){const s=bI(n),i=Vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=/[\[\].#$\/\u0000-\u001F\u007F]/,II=/[\[\].#$\u0000-\u001F\u007F]/,ao=10*1024*1024,gp=function(t){return typeof t=="string"&&t.length!==0&&!wI.test(t)},yp=function(t){return typeof t=="string"&&t.length!==0&&!II.test(t)},TI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yp(t)},vp=function(t,e,n){const s=n instanceof me?new VC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+mn(s)+" with contents = "+e.toString());if(bd(e))throw new Error(t+"contains "+e.toString()+" "+mn(s));if(typeof e=="string"&&e.length>ao/3&&Tr(e)>ao)throw new Error(t+"contains a string greater than "+ao+" utf8 bytes "+mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gp(o)))throw new Error(t+" contains an invalid key ("+o+") "+mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HC(s,o),vp(t,a,s),WC(s)}),i&&r)throw new Error(t+' contains ".value" child '+mn(s)+" in addition to actual children.")}},bp=function(t,e,n,s){if(!(s&&n===void 0)&&!yp(n))throw new Error(cd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bp(t,e,n,s)},xI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TI(n))throw new Error(cd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ep(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ja(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Cp(t,e,n){Ep(t,n),wp(t,s=>Ja(s,e))}function $n(t,e,n){Ep(t,n),wp(t,s=>mt(s,e)||mt(e,s))}function wp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(AI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Sn&&Ve("event: "+n.toString()),fi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="repo_interrupt",OI=25;class PI{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gi(),this.transactionQueueTree_=new _l,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kI(t,e,n){if(t.stats_=Qa(t.repoInfo_),t.forceRestClient_||fC())t.server_=new Ki(t.repoInfo_,(s,i,r,o)=>{ku(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(s,i,r,o)=>{ku(t,s,i,r,o)},s=>{Mu(t,s)},s=>{DI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gC(t.repoInfo_,()=>new mw(t.stats_,t.server_)),t.infoData_=new uw,t.infoSyncTree_=new Nu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ar(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yl(t,"connected",!1),t.serverSyncTree_=new Nu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);$n(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function MI(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ip(t){return mI({timestamp:MI(t)})}function ku(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Vi(n,c=>He(c));o=uI(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=cI(t.serverSyncTree_,r,l,i)}else if(s){const l=Vi(n,c=>He(c));o=oI(t.serverSyncTree_,r,l)}else{const l=He(n);o=Ar(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=bl(t,r)),$n(t.eventQueue_,a,o)}function Mu(t,e){yl(t,"connected",e),e===!1&&LI(t)}function DI(t,e){Je(e,(n,s)=>{yl(t,n,s)})}function yl(t,e,n){const s=new me("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=Ar(t.infoSyncTree_,s,i);$n(t.eventQueue_,s,r)}function FI(t){return t.nextWriteId_++}function LI(t){Tp(t,"onDisconnectEvents");const e=Ip(t),n=Gi();Zo(t.onDisconnect_,oe(),(i,r)=>{const o=yI(i,r,t.serverSyncTree_,e);Qd(n,i,o)});let s=[];Zo(n,oe(),(i,r)=>{s=s.concat(Ar(t.serverSyncTree_,i,r));const o=HI(t,i);bl(t,o)}),t.onDisconnect_=Gi(),$n(t.eventQueue_,oe(),s)}function $I(t,e,n){let s;ee(e._path)===".info"?s=Ou(t.infoSyncTree_,e,n):s=Ou(t.serverSyncTree_,e,n),Cp(t.eventQueue_,e._path,s)}function Du(t,e,n){let s;ee(e._path)===".info"?s=ra(t.infoSyncTree_,e,n):s=ra(t.serverSyncTree_,e,n),Cp(t.eventQueue_,e._path,s)}function BI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NI)}function Tp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function Sp(t,e,n){return up(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function vl(t,e=t.transactionQueueTree_){if(e||Pr(t,e),_s(e)){const n=Rp(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&jI(t,pi(e),n)}else mp(e)&&Or(e,n=>{vl(t,n)})}function jI(t,e,n){const s=n.map(c=>c.currentWriteId),i=Sp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Qe(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Tp(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(qn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Pr(t,gl(t.transactionQueueTree_,e)),vl(t,t.transactionQueueTree_),$n(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)fi(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}bl(t,e)}},o)}function bl(t,e){const n=xp(t,e),s=pi(n),i=Rp(t,n);return VI(t,i,s),s}function VI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(n,l.path);let u=!1,f;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OI)u=!0,f="maxretry",i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Sp(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){vp("transaction failed: Data returned ",p,l.path);let _=He(p);typeof p=="object"&&p!=null&&Vt(p,".priority")||(_=_.updatePriority(h.getPriority()));const b=l.currentWriteId,w=Ip(t),A=vI(_,h,w);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=A,l.currentWriteId=FI(t),o.splice(o.indexOf(b),1),i=i.concat(rI(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),i=i.concat(qn(t.serverSyncTree_,b,!0))}else u=!0,f="nodata",i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0))}$n(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Pr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)fi(s[a]);vl(t,t.transactionQueueTree_)}function xp(t,e){let n,s=t.transactionQueueTree_;for(n=ee(e);n!==null&&_s(s)===void 0;)s=gl(s,n),e=be(e),n=ee(e);return s}function Rp(t,e){const n=[];return Ap(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ap(t,e,n){const s=_s(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Or(e,i=>{Ap(t,i,n)})}function Pr(t,e){const n=_s(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,pp(e,n.length>0?n:void 0)}Or(e,s=>{Pr(t,s)})}function HI(t,e){const n=pi(xp(t,e)),s=gl(t.transactionQueueTree_,e);return EI(s,i=>{lo(t,i)}),lo(t,s),_p(s,i=>{lo(t,i)}),n}function lo(t,e){const n=_s(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pp(e,void 0):n.length=r+1,$n(t.eventQueue_,pi(e),i);for(let o=0;o<s.length;o++)fi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fu=function(t,e){const n=zI(t),s=n.namespace;n.domain==="firebase.com"&&An(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&An("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pC(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},zI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=WI(t.substring(u,f)));const h=UI(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class Op{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:jd(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=vu(this._queryParams),n=Ga(e);return n==="{}"?"default":n}get _queryObject(){return vu(this._queryParams)}isEqual(e){if(e=ai(e),!(e instanceof El))return!1;const n=this._repo===e._repo,s=Ja(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jC(this._path)}}class Ht extends El{constructor(e,n){super(e,n,new nl,!1)}get parent(){const e=Hd(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ei{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=nr(this.ref,e);return new ei(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ei(i,nr(this.ref,s),Ae)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function KI(t,e){return t=ai(t),t._checkNotDeleted("ref"),e!==void 0?nr(t._root,e):t._root}function nr(t,e){return t=ai(t),ee(t._path)===null?SI("child","path",e,!1):bp("child","path",e,!1),new Ht(t._repo,ke(t._path,e))}class Cl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Np("value",this,new ei(e.snapshotNode,new Ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Op(this,e,n):null}matches(e){return e instanceof Cl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Op(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=nr(new Ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Np(e.type,this,new ei(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function GI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,f)=>{Du(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new qI(n,r||void 0),a=e==="value"?new Cl(o):new wl(e,o);return $I(t._repo,t,a),()=>Du(t._repo,t,a)}function YI(t,e,n,s){return GI(t,"value",e,n,s)}Qw(Ht);nI(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="FIREBASE_DATABASE_EMULATOR_HOST",aa={};let XI=!1;function JI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||An("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fu(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[QI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Fu(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Qo(Qo.OWNER):new dC(t.name,t.options,e);xI("Invalid Firebase Database URL",o),te(o.path)||An("Database URL must point to the root of a Firebase Database (not including a child path).");const f=eT(a,t,u,new hC(t.name,n));return new tT(f,t)}function ZI(t,e){const n=aa[e];(!n||n[t.key]!==t)&&An(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BI(t),delete n[t.key]}function eT(t,e,n,s){let i=aa[e.name];i||(i={},aa[e.name]=i);let r=i[t.toURLString()];return r&&An("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PI(t,XI,n,s),i[t.toURLString()]=r,r}class tT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&An("Cannot call "+e+" on a deleted database.")}}function nT(t=pd(),e){return li(t,"database").getImmediate({identifier:e})}/**
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
 */function sT(t){XE(jE),sn(new $t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return JI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(nu,su,t),xt(nu,su,"esm2017")}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sT();const Pp="@firebase/installations",Il="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=1e4,Mp=`w:${Il}`,Dp="FIS_v2",iT="https://firebaseinstallations.googleapis.com/v1",rT=60*60*1e3,oT="installations",aT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Mn=new Ir(oT,aT,lT);function Fp(t){return t instanceof Fn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp({projectId:t}){return`${iT}/projects/${t}/installations`}function $p(t){return{token:t.token,requestStatus:2,expiresIn:uT(t.expiresIn),creationTime:Date.now()}}async function Bp(t,e){const s=(await e.json()).error;return Mn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function jp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cT(t,{refreshToken:e}){const n=jp(t);return n.append("Authorization",fT(e)),n}async function Vp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uT(t){return Number(t.replace("s","000"))}function fT(t){return`${Dp} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Lp(t),i=jp(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Dp,appId:t.appId,sdkVersion:Mp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Vp(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:$p(c.authToken)}}else throw await Bp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=/^[cdef][\w-]{21}$/,la="";function mT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_T(t);return pT.test(n)?n:la}catch{return la}}function _T(t){return dT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Map;function Up(t,e){const n=kr(t);zp(n,e),gT(n,e)}function zp(t,e){const n=Wp.get(t);if(!!n)for(const s of n)s(e)}function gT(t,e){const n=yT();n&&n.postMessage({key:t,fid:e}),vT()}let Cn=null;function yT(){return!Cn&&"BroadcastChannel"in self&&(Cn=new BroadcastChannel("[Firebase] FID Change"),Cn.onmessage=t=>{zp(t.data.key,t.data.fid)}),Cn}function vT(){Wp.size===0&&Cn&&(Cn.close(),Cn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebase-installations-database",ET=1,Dn="firebase-installations-store";let co=null;function Tl(){return co||(co=hd(bT,ET,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}})),co}async function sr(t,e){const n=kr(t),i=(await Tl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Up(t,e.fid),e}async function qp(t){const e=kr(t),s=(await Tl()).transaction(Dn,"readwrite");await s.objectStore(Dn).delete(e),await s.done}async function Mr(t,e){const n=kr(t),i=(await Tl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Up(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){let e;const n=await Mr(t.appConfig,s=>{const i=CT(s),r=wT(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===la?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function CT(t){const e=t||{fid:mT(),registrationStatus:0};return Kp(e)}function wT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=IT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TT(t)}:{installationEntry:e}}async function IT(t,e){try{const n=await hT(t,e);return sr(t.appConfig,n)}catch(n){throw Fp(n)&&n.customData.serverCode===409?await qp(t.appConfig):await sr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function TT(t){let e=await Lu(t.appConfig);for(;e.registrationStatus===1;)await Hp(100),e=await Lu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Sl(t);return s||n}return e}function Lu(t){return Mr(t,e=>{if(!e)throw Mn.create("installation-not-found");return Kp(e)})}function Kp(t){return ST(t)?{fid:t.fid,registrationStatus:0}:t}function ST(t){return t.registrationStatus===1&&t.registrationTime+kp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT({appConfig:t,heartbeatServiceProvider:e},n){const s=RT(t,n),i=cT(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Mp,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Vp(()=>fetch(s,a));if(l.ok){const c=await l.json();return $p(c)}else throw await Bp("Generate Auth Token",l)}function RT(t,{fid:e}){return`${Lp(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t,e=!1){let n;const s=await Mr(t.appConfig,r=>{if(!Gp(r))throw Mn.create("not-registered");const o=r.authToken;if(!e&&OT(o))return r;if(o.requestStatus===1)return n=AT(t,e),r;{if(!navigator.onLine)throw Mn.create("app-offline");const a=kT(r);return n=NT(t,a),a}});return n?await n:s.authToken}async function AT(t,e){let n=await $u(t.appConfig);for(;n.authToken.requestStatus===1;)await Hp(100),n=await $u(t.appConfig);const s=n.authToken;return s.requestStatus===0?xl(t,e):s}function $u(t){return Mr(t,e=>{if(!Gp(e))throw Mn.create("not-registered");const n=e.authToken;return MT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NT(t,e){try{const n=await xT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await sr(t.appConfig,s),n}catch(n){if(Fp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sr(t.appConfig,s)}throw n}}function Gp(t){return t!==void 0&&t.registrationStatus===2}function OT(t){return t.requestStatus===2&&!PT(t)}function PT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rT}function kT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MT(t){return t.requestStatus===1&&t.requestTime+kp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t){const e=t,{installationEntry:n,registrationPromise:s}=await Sl(e);return s?s.catch(console.error):xl(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e=!1){const n=t;return await LT(n),(await xl(n,e)).token}async function LT(t){const{registrationPromise:e}=await Sl(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){if(!t||!t.options)throw uo("App Configuration");if(!t.name)throw uo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uo(t){return Mn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="installations",BT="installations-internal",jT=t=>{const e=t.getProvider("app").getImmediate(),n=$T(e),s=li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},VT=t=>{const e=t.getProvider("app").getImmediate(),n=li(e,Yp).getImmediate();return{getId:()=>DT(n),getToken:i=>FT(n,i)}};function HT(){sn(new $t(Yp,jT,"PUBLIC")),sn(new $t(BT,VT,"PRIVATE"))}HT();xt(Pp,Il);xt(Pp,Il,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="analytics",WT="firebase_id",UT="origin",zT=60*1e3,qT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new qa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function KT(t,e){const n=document.createElement("script");n.src=`${Qp}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function GT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YT(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Xp(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){st.error(a)}t("config",i,r)}async function QT(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Xp(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){st.error(r)}}function XT(t,e,n,s){async function i(r,o,a){try{r==="event"?await QT(t,e,n,o,a):r==="config"?await YT(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){st.error(l)}}return i}function JT(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=XT(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function ZT(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Qp))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ct=new Ir("analytics","Analytics",e1);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=30,n1=1e3;class s1{constructor(e={},n=n1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jp=new s1;function i1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function r1(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:i1(s)},r=qT.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function o1(t,e=Jp,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw ct.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw ct.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new c1;return setTimeout(async()=>{a.abort()},n!==void 0?n:zT),Zp({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Zp(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Jp){var r,o;const{appId:a,measurementId:l}=t;try{await a1(s,e)}catch(c){if(l)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(r=c)===null||r===void 0?void 0:r.message}]`),{appId:a,measurementId:l};throw c}try{const c=await r1(t);return i.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!l1(u)){if(i.deleteThrottleMetadata(a),l)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Gc(n,i.intervalMillis,t1):Gc(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,h),st.debug(`Calling attemptFetch again in ${f} millis`),Zp(t,h,s,i)}}function a1(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function l1(t){if(!(t instanceof Fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class c1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function u1(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(){var t;if(od())try{await ad()}catch(e){return st.warn(ct.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return st.warn(ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function h1(t,e,n,s,i,r,o){var a;const l=o1(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>st.error(p)),e.push(l);const c=f1().then(p=>{if(p)return s.getId()}),[u,f]=await Promise.all([l,c]);ZT()||KT(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[UT]="firebase",h.update=!0,f!=null&&(h[WT]=f),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.app=e}_delete(){return delete Ls[this.app.options.appId],Promise.resolve()}}let Ls={},Bu=[];const ju={};let fo="dataLayer",p1="gtag",Vu,em,Hu=!1;function m1(){const t=[];if(Nb()&&t.push("This is a browser extension environment."),Pb()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ct.create("invalid-analytics-context",{errorInfo:e});st.warn(n.message)}}function _1(t,e,n){m1();const s=t.options.appId;if(!s)throw ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ct.create("no-api-key");if(Ls[s]!=null)throw ct.create("already-exists",{id:s});if(!Hu){GT(fo);const{wrappedGtag:r,gtagCore:o}=JT(Ls,Bu,ju,fo,p1);em=r,Vu=o,Hu=!0}return Ls[s]=h1(t,Bu,ju,e,Vu,fo,n),new d1(t)}function tm(t=pd()){t=ai(t);const e=li(t,ir);return e.isInitialized()?e.getImmediate():g1(t)}function g1(t,e={}){const n=li(t,ir);if(n.isInitialized()){const i=n.getImmediate();if(Hi(e,n.getOptions()))return i;throw ct.create("already-initialized")}return n.initialize({options:e})}function ca(t,e,n,s){t=ai(t),u1(em,Ls[t.app.options.appId],e,n,s).catch(i=>st.error(i))}const Wu="@firebase/analytics",Uu="0.8.0";function y1(){sn(new $t(ir,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return _1(s,i,n)},"PUBLIC")),sn(new $t("analytics-internal",t,"PRIVATE")),xt(Wu,Uu),xt(Wu,Uu,"esm2017");function t(e){try{const n=e.getProvider(ir).getImmediate();return{logEvent:(s,i,r)=>ca(n,s,i,r)}}catch(n){throw ct.create("interop-component-reg-failed",{reason:n})}}}y1();const nm=$g("projects",()=>{const t=Be([]),e=Be({}),n=Be({}),s=nT(),i=tm(),r=KI(s,"projects/");YI(r,c=>{e.value=c.val(),t.value=Object.values(e.value).sort((u,f)=>u.order-f.order)});function o(c){n.value=c}function a(c){ca(i,`navbar_click: ${c}`)}function l(){ca(i,"page_view")}return{data:t,analyticsNavbarClicked:a,analyticsPageView:l,setSelected:o,selectedProject:n}}),v1={class:"w-full flex flex-row bg-zinc-50"},b1={class:"mx-auto lg:ml-auto flex flex-row gap-10 text-zinc-600 p-5"},E1=["enter","onClick"],C1=At({__name:"Nav",setup(t){const e=nm();function n(i){e.analyticsNavbarClicked(i),window.location.href=i}const s=[{label:"Home",link:"#blurb"},{label:"About",link:"#aboutMe"},{label:"My Projects",link:"#projects"}];return(i,r)=>{const o=ni("motion");return Ie(),Re("div",v1,[z("div",b1,[(Ie(),Re(Ge,null,_r(s,(a,l)=>ht(z("a",{key:l,initial:{opacity:0},enter:{opacity:1,transition:{duration:300,delay:200*l,type:"keyframes",ease:"easeInOut"}},onClick:c=>n(a.link),class:"hover:text-zinc-900 cursor-pointer transition-all duration-200"},[Et(es(a.label),1)],8,E1),[[o]])),64))])])}}}),w1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},I1={},T1={class:"bg-zinc-900 flex justify-center gap-10 h-32"},S1=z("a",{href:"https://www.digitalocean.com/?refcode=d198439c69e7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"},[z("img",{src:"https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg",alt:"DigitalOcean Referral Badge",class:"w-32 h-32"})],-1),x1=z("div",{class:"text-zinc-50 my-auto"},"Made by Rewel Cabiles",-1),R1=[S1,x1];function A1(t,e){return Ie(),Re("div",T1,R1)}const N1=w1(I1,[["render",A1]]),O1=["enter"],P1=["href","title"],k1=At({__name:"iconList",setup(t){const e=[{type:"img",link:"https://github.com/rewelcabiles",icon:"fa-brands fa-github ",title:"Github"},{type:"img",link:"https://www.linkedin.com/in/rewel-cabiles/",icon:"fa-brands fa-linkedin",title:"Linkedin"},{type:"img",link:"https://assets.rewelcabiles.me/portfolio/resume.pdf",icon:"fa-solid fa-file",title:"Resume"},{type:"img",link:"mailto:rewel.cabiles@gmail.com",icon:"fa-solid fa-envelope text-zinc-50 text-xl hover:scale-125 text-zinc-800 transition-all duration-50",title:"Email"}];return(n,s)=>{const i=ni("motion");return ht((Ie(),Re("div",{initial:{x:-2400},enter:{x:0,transition:{duration:2e3,delay:1200,type:"spring",mass:.3}},class:"flex flex-row gap-4 rounded-md py-2 px-3 align-middle my-auto"},[(Ie(),Re(Ge,null,_r(e,(r,o)=>z("a",{href:r.link,key:o,target:"_blank",title:r.title,class:"align-center"},[z("i",{class:ti(`${r.icon} text-xl hover:scale-125 text-zinc-800 transition-all duration-50`)},null,2)],8,P1)),64))],8,O1)),[[i]])}}}),M1={class:"w-screen h-screen"},D1={class:"px-auto py-44",initial:{opacity:0},enter:{opacity:1,transition:{duration:1e3,delay:400,type:"keyframes",ease:"easeInOut"}}},F1={class:"w-full mx-auto mb-12"},L1=["enter"],$1=z("div",{class:"md:text-5xl text-2xl text-zinc-900 text-center"}," Hi! I'm Rewel Cabiles ",-1),B1=z("div",{class:"md:ml-5 mt-6 text-lg text-zinc-900 lg:px-0 px-10 pb-10 text-center"}," I\u2019m a software & web developer based in Hong Kong / Philippines ",-1),j1=At({__name:"SlideProfile",setup(t){return(e,n)=>{const s=ni("motion");return Ie(),Re("div",M1,[ht((Ie(),Re("div",D1,[z("div",F1,[ht(z("img",{initial:{y:-2400},enter:{y:0,transition:{duration:3e3,delay:1300,type:"spring",mass:.2}},src:"https://assets.rewelcabiles.me/portfolio/me.jpeg",class:"rounded-full border-4 border-zinc-900 shadow-xl mx-auto h-40 h-40"},null,8,L1),[[s]]),Ne(k1,{id:"linkSmalls",class:"mt-4 mx-auto w-fit"})]),$1,B1])),[[s]])])}}}),V1={class:"font-bold text-lg from-zinc-900 to-zinc-800 bg-gradient-to-tr text-white p-4 border-b-2"},H1=At({__name:"SlideProjectCards",props:{data:{type:Object,default:{}},selected:{type:Boolean,default:!1}},setup(t){const e=Be(["md:h-40","lg:w-64","w-full","md:32","hover:border-4","border-zinc-900","aspect-video","transition-all","duration-50","rounded-md","bg-cover","bg-center","cursor-pointer","shadow-md"]);return(n,s)=>(Ie(),Re("div",{class:ti(e.value.concat(t.selected?["lg:scale-125 scale-105 z-50 border-4"]:["scale-100","z-20"])),style:rr(`background-image: url(${t.data.preview})`),onClick:s[0]||(s[0]=i=>n.$emit("projectCardClicked",t.data))},[z("div",V1,es(t.data.name),1)],6))}}),W1={class:"w-screen min-h-screen py-40 gap-y-20 flex flex-col"},U1={class:"flex flex-col gap-2 lg:px-40"},z1=["enter"],q1=Et(" My personal Projects "),K1=[q1],G1=z("div",{class:"mx-auto font-light"}," Click on a card for more information. ",-1),Y1={class:"flex xl:flex-row flex-col z-50 lg:px-40"},Q1={initial:{opacity:0},visible:{opacity:1,transition:{duration:250,delay:100}},class:"flex flex-wrap flex-row content-start gap-10 px-10 lg:px-0 py-10 lg:py-0 z-50 xl:w-2/3 w-full"},X1={id:"projectDetails",class:"py-16 px-10 xl:w-1/3 pb-20"},J1={key:0,class:"text-zinc-800 flex flex-col gap-4"},Z1={class:"text-3xl font-bold"},eS={id:"icons",class:"flex flex-row gap-5"},tS={key:0,class:"align-center"},nS=["href"],sS=z("i",{class:"fa-brands fa-github mr-1"},null,-1),iS=Et("Github "),rS=[sS,iS],oS={key:1,class:"align-center"},aS=["href"],lS=z("i",{class:"fa-sharp fa-solid fa-house mr-1"},null,-1),cS=Et("Homepage "),uS=[lS,cS],fS={id:"info_desc",class:"text-justify"},hS=At({__name:"SlideProjects",setup(t){const e=nm();function n(s){e.setSelected(s),setTimeout(()=>{var i=document.getElementById("projectDetails");i.scrollIntoView({behavior:"smooth"})},100)}return(s,i)=>{const r=ni("motion");return Ie(),Re("div",W1,[z("div",U1,[ht((Ie(),Re("div",{initial:{y:-100,opacity:0},enter:{y:0,opacity:1,transition:{duration:250,delay:100,type:"spring",mass:.2}},class:"md:text-4xl text-3xl font-bold text-zinc-900 mx-auto"},K1,8,z1)),[[r]]),G1]),z("div",Y1,[ht((Ie(),Re("div",Q1,[(Ie(!0),Re(Ge,null,_r(xe(e).data,(o,a)=>(Ie(),xa(H1,{key:a,data:o,selected:o.name===xe(e).selectedProject,onProjectCardClicked:l=>n(o)},null,8,["data","selected","onProjectCardClicked"]))),128))])),[[r]]),z("div",X1,[Ne(Na,{"enter-active-class":"duration-500 ease-out","enter-from-class":"transform opacity-0","enter-to-class":"opacity-100"},{default:If(()=>[xe(e).selectedProject?(Ie(),Re("div",J1,[z("div",Z1,es(xe(e).selectedProject.name),1),z("div",eS,[xe(e).selectedProject.github?(Ie(),Re("div",tS,[z("a",{href:xe(e).selectedProject.github,target:"_blank"},rS,8,nS)])):Br("",!0),xe(e).selectedProject.homepage?(Ie(),Re("div",oS,[z("a",{href:"https://"+xe(e).selectedProject.homepage,target:"_blank"},uS,8,aS)])):Br("",!0)]),z("div",fS,es(xe(e).selectedProject.description),1)])):Br("",!0)]),_:1})])])])}}}),dS={id:"SlideAboutMe",class:"bg-zinc-800 py-40 z-50"},pS={class:"py-10 flex flex-col lg:px-20 px-5"},mS={class:"flex xl:flex-row flex-col mx-auto gap-10 xl:gap-44 xl:px-20"},_S={class:"text-zinc-50 md:px-10 w-full"},gS={initial:{opacity:0},visible:{opacity:1,transition:{duration:500,delay:50}},class:"mx-auto text-4xl z-50 mb-10"},yS=Et(" About me "),vS=[yS],bS={initial:{opacity:0},visible:{opacity:1,transition:{duration:500,delay:200}},class:"z-50 text-justify"},ES=Et(" I'm Rewel, I was born in the Philippines, raised in Hong Kong, then moved back to the Philippines around High school. I've always been interested in programming, picking up Python as my first programming language at around the age of 14 and then just exploring what the this hobby had to offer; "),CS=z("br",null,null,-1),wS=z("br",null,null,-1),IS=Et(" Making games, building websites, tinkering with servers, eventually even working on microcontrollers like the Raspberry PI, Arduino, and so far my favourite, the various ESP boards "),TS=z("br",null,null,-1),SS=z("br",null,null,-1),xS=Et(" I studied Computer Science at Adamson University, Philippines, not hesitating on my course, and I spent most of my free time continuing to work on programming not just as a hobby but academically now too. "),RS=z("br",null,null,-1),AS=z("br",null,null,-1),NS=[ES,CS,wS,IS,TS,SS,xS,RS,AS],OS={class:"text-zinc-50 w-full md:px-10"},PS={initial:{opacity:0},visible:{opacity:1,transition:{duration:500,delay:500}},class:"mx-auto text-4xl z-50 mb-10"},kS=Et(" My Experience "),MS=[kS],DS={initial:{opacity:0},visible:{opacity:1,transition:{duration:500,delay:600}},class:"z-50 pb-4"},FS=Et(" I've had the pleasure of working and learning at these great places "),LS=[FS],$S={class:"flex flex-col gap-5"},BS=["visible"],jS=["href","target"],VS={class:"flex flex-row text-zinc-50 mb-1 text-lg font-bold"},HS={class:"text-justify text-zinc-50 text-md leading-tight"},WS=At({__name:"SlideAbout",setup(t){const e=[{name:"Payruler",link:"https://payruler.com/",description:"I was here as an Intern, working as a backend web developer in the R&D department. I built APIs for the projects we worked on there, occasionally helping with infrustructure related tasks like fixing or setting up servers hosted either on-site or in Azure. I learned how to collaborate in a team environment and shared my ideas on how we could improve some of the projects there."},{name:"Raykan",position:"Front end developer",link:"https://raykan.co/",description:"This is a startup company im working with to help build websites and systems for clients. I'm currently working here as a front end developer, using my favourite web framework Vue."}];return(n,s)=>{const i=ni("motion");return Ie(),Re("div",dS,[z("div",pS,[z("div",mS,[z("div",_S,[ht((Ie(),Re("div",gS,vS)),[[i]]),ht((Ie(),Re("div",bS,NS)),[[i]])]),z("div",OS,[ht((Ie(),Re("div",PS,MS)),[[i]]),ht((Ie(),Re("div",DS,LS)),[[i]]),z("div",$S,[(Ie(),Re(Ge,null,_r(e,(r,o)=>ht(z("div",{initial:{opacity:0},visible:{opacity:1,transition:{duration:200,delay:100*(o+1)}},key:o,class:"bg-zinc-900 rounded-sm p-5"},[z("a",{href:r.link,target:r.link=="#"?"":"_blank"},[z("div",VS,es(r.name),1),z("div",HS,es(r.description),1)],8,jS)],8,BS),[[i]])),64))])])])])])}}});const US={id:"frontpage",class:"h-screen w-screen scroll-smooth bg-slate-50 overflow-x-hidden"},zS={class:"sticky relative top-0 z-10"},qS={class:"relative"},KS=Uf('<div class="ProfileTransitionWaveTop"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div>',1),GS={class:"relative"},YS=Uf('<div class="waveTransitionBottom"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div>',1),QS={class:"relative"},XS=z("div",{class:"waveTransitionFooter"},[z("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},[z("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",class:"shape-fill"})])],-1),JS=At({__name:"FrontPage",setup(t){return(e,n)=>(Ie(),Re("div",US,[z("div",zS,[Ne(C1,{class:"z-10"})]),z("div",qS,[Ne(j1,{id:"blurb",class:"z-0 snap-center"}),KS]),z("div",GS,[Ne(WS,{id:"aboutMe",class:"snap-center z-50 pb-96"}),YS]),Ne(hS,{id:"projects"}),z("div",QS,[XS,Ne(N1)])]))}});const ZS=wb({history:j0("/"),routes:[{path:"/",name:"home",component:JS}]});var ex="firebase",tx="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(ex,tx,"app");const nx={apiKey:"AIzaSyD9dp6Ipw-1Fzx39FIJ4HWClkT6ocWJ8Nk",authDomain:{VITE_FIREBASE_apiKey:"AIzaSyD9dp6Ipw-1Fzx39FIJ4HWClkT6ocWJ8Nk",VITE_FIREBASE_databaseURL:"https://portfolio-eb1b3-default-rtdb.asia-southeast1.firebasedatabase.app",VITE_FIREBASE_projectId:"portfolio-eb1b3",VITE_FIREBASE_storageBucket:"portfolio-eb1b3.appspot.com",VITE_FIREBASE_messagingSenderId:"574118088162",VITE_FIREBASE_appId:"1:574118088162:web:14f6244e257f025dfd7dbb",VITE_FIREBASE_measurementId:"G-38TJ203JVN",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FIREBASE_authDomain,databaseURL:"https://portfolio-eb1b3-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"portfolio-eb1b3",storageBucket:"portfolio-eb1b3.appspot.com",messagingSenderId:"574118088162",appId:"1:574118088162:web:14f6244e257f025dfd7dbb",measurementId:"G-38TJ203JVN"},sx=VE(nx);tm(sx);const mi=Ng(Tb);mi.config.globalProperties.$cdn="https://assets.rewelcabiles.me";mi.use(kg());mi.use(C0);mi.use(ZS);mi.mount("#app");
