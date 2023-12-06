var Af=Object.defineProperty;var Cf=(t,e,n)=>e in t?Af(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $t=(t,e,n)=>(Cf(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ie(){}function kf(t,e){for(const n in e)t[n]=e[n];return t}function Il(t){return t()}function ga(){return Object.create(null)}function vs(t){t.forEach(Il)}function Tl(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let xs;function ma(t,e){return t===e?!0:(xs||(xs=document.createElement("a")),xs.href=e,t===xs.href)}function Df(t){return Object.keys(t).length===0}function Nf(t,...e){if(t==null){for(const s of e)s(void 0);return Ie}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ya(t,e,n){t.$$.on_destroy.push(Nf(e,n))}function Rf(t,e,n,s){if(t){const i=bl(t,e,n,s);return t[0](i)}}function bl(t,e,n,s){return t[1]&&s?kf(n.ctx.slice(),t[1](s(e))):n.ctx}function $f(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Mf(t,e,n,s,i,r){if(i){const o=bl(e,n,s,r);t.p(o,i)}}function Of(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ni(t){return t??""}function p(t,e){t.appendChild(e)}function ne(t,e,n){t.insertBefore(e,n||null)}function ee(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function Pf(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function V(){return Y(" ")}function On(){return Y("")}function Lf(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xf(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function An(t,e,n){t.classList.toggle(e,!!n)}class Ff{constructor(e=!1){$t(this,"is_svg",!1);$t(this,"e");$t(this,"n");$t(this,"t");$t(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=Pf(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ne(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(ee)}}let ns;function Gn(t){ns=t}function Uf(){if(!ns)throw new Error("Function called outside component initialization");return ns}function Vf(t){Uf().$$.on_mount.push(t)}const dn=[],va=[];let yn=[];const wa=[],Bf=Promise.resolve();let Ar=!1;function jf(){Ar||(Ar=!0,Bf.then(Sl))}function Cr(t){yn.push(t)}const Ji=new Set;let ln=0;function Sl(){if(ln!==0)return;const t=ns;do{try{for(;ln<dn.length;){const e=dn[ln];ln++,Gn(e),qf(e.$$)}}catch(e){throw dn.length=0,ln=0,e}for(Gn(null),dn.length=0,ln=0;va.length;)va.pop()();for(let e=0;e<yn.length;e+=1){const n=yn[e];Ji.has(n)||(Ji.add(n),n())}yn.length=0}while(dn.length);for(;wa.length;)wa.pop()();Ar=!1,Ji.clear(),Gn(t)}function qf(t){if(t.fragment!==null){t.update(),vs(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Cr)}}function zf(t){const e=[],n=[];yn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),yn=e}const Ws=new Set;let Kt;function ws(){Kt={r:0,c:[],p:Kt}}function _s(){Kt.r||vs(Kt.c),Kt=Kt.p}function ue(t,e){t&&t.i&&(Ws.delete(t),t.i(e))}function _e(t,e,n,s){if(t&&t.o){if(Ws.has(t))return;Ws.add(t),Kt.c.push(()=>{Ws.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function je(t){t&&t.c()}function Pe(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),Cr(()=>{const r=t.$$.on_mount.map(Il).filter(Tl);t.$$.on_destroy?t.$$.on_destroy.push(...r):vs(r),t.$$.on_mount=[]}),i.forEach(Cr)}function Le(t,e){const n=t.$$;n.fragment!==null&&(zf(n.after_update),vs(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Hf(t,e){t.$$.dirty[0]===-1&&(dn.push(t),jf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(t,e,n,s,i,r,o=null,a=[-1]){const c=ns;Gn(t);const l=t.$$={fragment:null,ctx:[],props:r,update:Ie,not_equal:i,bound:ga(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ga(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,f,...d)=>{const v=d.length?d[0]:f;return l.ctx&&i(l.ctx[h],l.ctx[h]=v)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](v),u&&Hf(t,h)),f}):[],l.update(),u=!0,vs(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=xf(e.target);l.fragment&&l.fragment.l(h),h.forEach(ee)}else l.fragment&&l.fragment.c();e.intro&&ue(t.$$.fragment),Pe(t,e.target,e.anchor),Sl()}Gn(c)}class dt{constructor(){$t(this,"$$");$t(this,"$$set")}$destroy(){Le(this,1),this.$destroy=Ie}$on(e,n){if(!Tl(n))return Ie;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Df(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Kf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kf);const un=[];function Qs(t,e=Ie){let n;const s=new Set;function i(a){if(ct(t,a)&&(t=a,n)){const c=!un.length;for(const l of s)l[1](),un.push(l,t);if(c){for(let l=0;l<un.length;l+=2)un[l][0](un[l+1]);un.length=0}}}function r(a){i(a(t))}function o(a,c=Ie){const l=[a,c];return s.add(l),s.size===1&&(n=e(i,r)||Ie),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}var _a={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Al(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Yf;const f=r<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wf=function(t){const e=Al(t);return Cl.encodeByteArray(e,!0)},si=function(t){return Wf(t).replace(/\./g,"")},kl=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xf=()=>Qf().__FIREBASE_DEFAULTS__,Jf=()=>{if(typeof process>"u"||typeof _a>"u")return;const t=_a.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kl(t[1]);return e&&JSON.parse(e)},lo=()=>{try{return Xf()||Jf()||Zf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ed=t=>{var e,n;return(n=(e=lo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},td=t=>{const e=ed(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dl=()=>{var t;return(t=lo())===null||t===void 0?void 0:t.config},nd=t=>{var e;return(e=lo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function id(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[si(JSON.stringify(n)),si(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Nl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rl(){try{return typeof indexedDB=="object"}catch{return!1}}function $l(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function ad(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="FirebaseError";class pt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cd,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ld(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pt(i,a,s)}}function ld(t,e){return t.replace(ud,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ud=/\{\$([^}]+)}/g;function ii(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ea(r)&&Ea(o)){if(!ii(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ea(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hd(t,e){const n=new fd(t,e);return n.subscribe.bind(n)}class fd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dd(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Zi),i.error===void 0&&(i.error=Zi),i.complete===void 0&&(i.complete=Zi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=1e3,gd=2,md=4*60*60*1e3,yd=.5;function Ia(t,e=pd,n=gd){const s=e*Math.pow(n,t),i=Math.round(yd*s*(Math.random()-.5)*2);return Math.min(md,s+i)}/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_d(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wd(t){return t===Ht?void 0:t}function _d(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Id={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Td=le.INFO,bd={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Sd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bi{constructor(e){this.name=e,this._logLevel=Td,this._logHandler=Sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Ad=(t,e)=>e.some(n=>t instanceof n);let Ta,ba;function Cd(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kd(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ol=new WeakMap,kr=new WeakMap,Pl=new WeakMap,er=new WeakMap,uo=new WeakMap;function Dd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ol.set(n,t)}).catch(()=>{}),uo.set(e,t),e}function Nd(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});kr.set(t,e)}let Dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rd(t){Dr=t(Dr)}function $d(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(tr(this),e,...n);return Pl.set(s,e.sort?e.sort():[e]),Lt(s)}:kd().includes(t)?function(...e){return t.apply(tr(this),e),Lt(Ol.get(this))}:function(...e){return Lt(t.apply(tr(this),e))}}function Md(t){return typeof t=="function"?$d(t):(t instanceof IDBTransaction&&Nd(t),Ad(t,Cd())?new Proxy(t,Dr):t)}function Lt(t){if(t instanceof IDBRequest)return Dd(t);if(er.has(t))return er.get(t);const e=Md(t);return e!==t&&(er.set(t,e),uo.set(e,t)),e}const tr=t=>uo.get(t);function Od(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Pd=["get","getKey","getAll","getAllKeys","count"],Ld=["put","add","delete","clear"],nr=new Map;function Sa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nr.get(e))return nr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ld.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pd.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return nr.set(e,r),r}Rd(t=>({...t,get:(e,n,s)=>Sa(e,n)||t.get(e,n,s),has:(e,n)=>!!Sa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nr="@firebase/app",Aa="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new bi("@firebase/app"),Ud="@firebase/app-compat",Vd="@firebase/analytics-compat",Bd="@firebase/analytics",jd="@firebase/app-check-compat",qd="@firebase/app-check",zd="@firebase/auth",Hd="@firebase/auth-compat",Kd="@firebase/database",Gd="@firebase/database-compat",Yd="@firebase/functions",Wd="@firebase/functions-compat",Qd="@firebase/installations",Xd="@firebase/installations-compat",Jd="@firebase/messaging",Zd="@firebase/messaging-compat",ep="@firebase/performance",tp="@firebase/performance-compat",np="@firebase/remote-config",sp="@firebase/remote-config-compat",ip="@firebase/storage",rp="@firebase/storage-compat",op="@firebase/firestore",ap="@firebase/firestore-compat",cp="firebase",lp="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]",up={[Nr]:"fire-core",[Ud]:"fire-core-compat",[Bd]:"fire-analytics",[Vd]:"fire-analytics-compat",[qd]:"fire-app-check",[jd]:"fire-app-check-compat",[zd]:"fire-auth",[Hd]:"fire-auth-compat",[Kd]:"fire-rtdb",[Gd]:"fire-rtdb-compat",[Yd]:"fire-fn",[Wd]:"fire-fn-compat",[Qd]:"fire-iid",[Xd]:"fire-iid-compat",[Jd]:"fire-fcm",[Zd]:"fire-fcm-compat",[ep]:"fire-perf",[tp]:"fire-perf-compat",[np]:"fire-rc",[sp]:"fire-rc-compat",[ip]:"fire-gcs",[rp]:"fire-gcs-compat",[op]:"fire-fst",[ap]:"fire-fst-compat","fire-js":"fire-js",[cp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Map,$r=new Map;function hp(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if($r.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;$r.set(e,t);for(const n of ri.values())hp(n,t);return!0}function Es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new an("app","Firebase",fp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=lp;function Ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Dl()),!n)throw xt.create("no-options");const r=ri.get(i);if(r){if(ii(n,r.options)&&ii(s,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const o=new Ed(i);for(const c of $r.values())o.addComponent(c);const a=new dp(n,s,o);return ri.set(i,a),a}function xl(t=Rr){const e=ri.get(t);if(!e&&t===Rr&&Dl())return Ll();if(!e)throw xt.create("no-app",{appName:t});return e}function et(t,e,n){var s;let i=(s=up[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}ut(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pp="firebase-heartbeat-database",gp=1,ss="firebase-heartbeat-store";let sr=null;function Fl(){return sr||(sr=Od(pp,gp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),sr}async function mp(t){try{return await(await Fl()).transaction(ss).objectStore(ss).get(Ul(t))}catch(e){if(e instanceof pt)en.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Ca(t,e){try{const s=(await Fl()).transaction(ss,"readwrite");await s.objectStore(ss).put(e,Ul(t)),await s.done}catch(n){if(n instanceof pt)en.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(s.message)}}}function Ul(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yp=1024,vp=30*24*60*60*1e3;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ep(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ka();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ka(),{heartbeatsToSend:n,unsentEntries:s}=_p(this._heartbeatsCache.heartbeats),i=si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ka(){return new Date().toISOString().substring(0,10)}function _p(t,e=yp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Da(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Da(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ep{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rl()?$l().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Da(t){return si(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){ut(new at("platform-logger",e=>new xd(e),"PRIVATE")),ut(new at("heartbeat",e=>new wp(e),"PRIVATE")),et(Nr,Aa,t),et(Nr,Aa,"esm2017"),et("fire-js","")}Ip("");function Vl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Bl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tp=Bl,jl=new an("auth","Firebase",Bl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new bi("@firebase/auth");function bp(t,...e){oi.logLevel<=le.WARN&&oi.warn(`Auth (${Is}): ${t}`,...e)}function Xs(t,...e){oi.logLevel<=le.ERROR&&oi.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,...e){throw fo(t,...e)}function ho(t,...e){return fo(t,...e)}function Sp(t,e,n){const s=Object.assign(Object.assign({},Tp()),{[e]:n});return new an("auth","Firebase",s).create(e,{appName:t.name})}function fo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jl.create(t,...e)}function ve(t,e,...n){if(!t)throw fo(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xs(e),new Error(e)}function ai(t,e){t||Yn(e)}function Ap(){return Ra()==="http:"||Ra()==="https:"}function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ap()||Nl()||"connection"in navigator)?navigator.onLine:!0}function kp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,ai(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||od()}get(){return Cp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e){ai(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Ts(3e4,6e4);function $p(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function po(t,e,n,s,i={}){return zl(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ml(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ql.fetch()(Hl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function zl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Np),e);try{const i=new Mp(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sp(t,u,l);Na(t,u)}}catch(i){if(i instanceof pt)throw i;Na(t,"network-request-failed",{message:String(i)})}}function Hl(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Dp(t.config,i):`${t.config.apiScheme}://${i}`}class Mp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ho(this.auth,"network-request-failed")),Rp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ho(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t,e){return po(t,"POST","/v1/accounts:delete",e)}async function Pp(t,e){return po(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lp(t,e=!1){const n=jt(t),s=await n.getIdToken(e),i=Kl(s);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Wn(ir(i.auth_time)),issuedAtTime:Wn(ir(i.iat)),expirationTime:Wn(ir(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ir(t){return Number(t)*1e3}function Kl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=kl(n);return i?JSON.parse(i):(Xs("Failed to decode base64 JWT payload"),null)}catch(i){return Xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xp(t){const e=Kl(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pt&&Fp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Fp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Mr(t,Pp(n,{idToken:s}));ve(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?jp(r.providerUserInfo):[],a=Bp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Gl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Vp(t){const e=jt(t);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bp(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function jp(t){return t.map(e=>{var{providerId:n}=e,s=Vl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e){const n=await zl(t,{},async()=>{const s=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Hl(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ql.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await qp(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new is;return s&&(ve(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ve(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ve(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Up(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lp(this,e)}reload(){return Vp(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ci(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mr(this,Op(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:y,isAnonymous:I,providerData:k,stsTokenManager:_}=n;ve(N&&_,e,"internal-error");const w=is.fromJSON(this.name,_);ve(typeof N=="string",e,"internal-error"),Mt(h,e.name),Mt(f,e.name),ve(typeof y=="boolean",e,"internal-error"),ve(typeof I=="boolean",e,"internal-error"),Mt(d,e.name),Mt(v,e.name),Mt(g,e.name),Mt(m,e.name),Mt(R,e.name),Mt(D,e.name);const B=new vn({uid:N,auth:e,email:f,emailVerified:y,displayName:h,isAnonymous:I,photoURL:v,phoneNumber:d,tenantId:g,stsTokenManager:w,createdAt:R,lastLoginAt:D});return k&&Array.isArray(k)&&(B.providerData=k.map(U=>Object.assign({},U))),m&&(B._redirectEventId=m),B}static async _fromIdTokenResponse(e,n,s=!1){const i=new is;i.updateFromServerResponse(n);const r=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ci(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map;function Gt(t){ai(t instanceof Function,"Expected a class definition");let e=$a.get(t);return e?(ai(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$a.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yl.type="NONE";const Ma=Yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=rr(this.userKey,i.apiKey,r),this.fullPersistenceKey=rr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wn(Gt(Ma),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Gt(Ma);const o=rr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=vn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new wn(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new wn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Qp(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zp(t=Et()){return/firefox\//i.test(t)}function Hp(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(t=Et()){return/crios\//i.test(t)}function Gp(t=Et()){return/iemobile/i.test(t)}function Yp(t=Et()){return/android/i.test(t)}function Wp(t=Et()){return/blackberry/i.test(t)}function Qp(t=Et()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e=[]){let n;switch(t){case"Browser":n=Oa(Et());break;case"Worker":n=`${Oa(Et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}async function Ql(t,e){return po(t,"GET","/v2/recaptchaConfig",$p(t,e))}function Pa(t){return t!==void 0&&t.enterprise!==void 0}class Xl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=ho("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Xp().appendChild(s)})}const Zp="https://www.google.com/recaptcha/enterprise.js?render=",eg="recaptcha-enterprise",tg="NO_RECAPTCHA";class ng{constructor(e){this.type=eg,this.auth=Jl(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ql(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xl(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Pa(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(tg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Pa(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Jp(Zp+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new La(this),this.idTokenSubscription=new La(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}async initializeRecaptchaConfig(){const e=await Ql(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xl(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ng(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jl(t){return jt(t)}class La{constructor(e){this.auth=e,this.observer=null,this.addObserver=hd(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Ts(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ts(2e3,1e4);/**
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
 */new Ts(3e4,6e4);/**
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
 */new Ts(5e3,15e3);var xa="@firebase/auth",Fa="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cg(t){ut(new at("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wl(t)},l=new ig(s,i,r,c);return rg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ut(new at("auth-internal",e=>{const n=Jl(e.getProvider("auth").getImmediate());return(s=>new og(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(xa,Fa,ag(t)),et(xa,Fa,"esm2017")}/**
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
 */const lg=5*60;nd("authIdTokenMaxAge");cg("Browser");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,go=go||{},K=ug||self;function Si(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hg(t){return Object.prototype.hasOwnProperty.call(t,or)&&t[or]||(t[or]=++fg)}var or="closure_uid_"+(1e9*Math.random()>>>0),fg=0;function dg(t,e,n){return t.call.apply(t.bind,arguments)}function pg(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=dg:He=pg,He.apply(null,arguments)}function Us(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function qt(){this.s=this.s,this.o=this.o}var gg=0;qt.prototype.s=!1;qt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gg!=0)&&hg(this)};qt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ua(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Si(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var mg=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function rs(t){return/^[\s\xa0]*$/.test(t)}function Ai(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return Ai().indexOf(t)!=-1}function yo(t){return yo[" "](t),t}yo[" "]=function(){};function yg(t,e){var n=lm;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var vg=mt("Opera"),Cn=mt("Trident")||mt("MSIE"),eu=mt("Edge"),Or=eu||Cn,tu=mt("Gecko")&&!(Ai().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),wg=Ai().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function nu(){var t=K.document;return t?t.documentMode:void 0}var Pr;e:{var ar="",cr=function(){var t=Ai();if(tu)return/rv:([^\);]+)(\)|;)/.exec(t);if(eu)return/Edge\/([\d\.]+)/.exec(t);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wg)return/WebKit\/(\S+)/.exec(t);if(vg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cr&&(ar=cr?cr[1]:""),Cn){var lr=nu();if(lr!=null&&lr>parseFloat(ar)){Pr=String(lr);break e}}Pr=ar}var Lr;if(K.document&&Cn){var Va=nu();Lr=Va||parseInt(Pr,10)||void 0}else Lr=void 0;var _g=Lr;function os(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tu){e:{try{yo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Eg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&os.$.h.call(this)}}Me(os,Ke);var Eg={2:"touch",3:"pen",4:"mouse"};os.prototype.h=function(){os.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),Ig=0;function Tg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Ig,this.fa=this.ia=!1}function Ci(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function vo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function bg(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function su(t){const e={};for(const n in t)e[n]=t[n];return e}const Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Ba.length;r++)n=Ba[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ki(t){this.src=t,this.g={},this.h=0}ki.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Fr(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Tg(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function xr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Zl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ci(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var wo="closure_lm_"+(1e6*Math.random()|0),ur={};function ru(t,e,n,s,i){if(s&&s.once)return au(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ru(t,e[r],n,s,i);return null}return n=Io(n),t&&t[Ss]?t.O(e,n,bs(s)?!!s.capture:!!s,i):ou(t,e,n,!1,s,i)}function ou(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=bs(i)?!!i.capture:!!i,a=Eo(t);if(a||(t[wo]=a=new ki(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Sg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)mg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(lu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Sg(){function t(n){return e.call(t.src,t.listener,n)}const e=Ag;return t}function au(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)au(t,e[r],n,s,i);return null}return n=Io(n),t&&t[Ss]?t.P(e,n,bs(s)?!!s.capture:!!s,i):ou(t,e,n,!0,s,i)}function cu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)cu(t,e[r],n,s,i);else s=bs(s)?!!s.capture:!!s,n=Io(n),t&&t[Ss]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Fr(r,n,s,i),-1<n&&(Ci(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fr(e,n,s,i)),(n=-1<t?e[t]:null)&&_o(n))}function _o(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ss])xr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Eo(e))?(xr(n,t),n.h==0&&(n.src=null,e[wo]=null)):Ci(t)}}}function lu(t){return t in ur?ur[t]:ur[t]="on"+t}function Ag(t,e){if(t.fa)t=!0;else{e=new os(e,this);var n=t.listener,s=t.la||t.src;t.ia&&_o(t),t=n.call(s,e)}return t}function Eo(t){return t=t[wo],t instanceof ki?t:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(t){return typeof t=="function"?t:(t[hr]||(t[hr]=function(e){return t.handleEvent(e)}),t[hr])}function $e(){qt.call(this),this.i=new ki(this),this.S=this,this.J=null}Me($e,qt);$e.prototype[Ss]=!0;$e.prototype.removeEventListener=function(t,e,n,s){cu(this,t,e,n,s)};function Ue(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var i=e;e=new Ke(s,t),iu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Vs(o,s,!0,e)&&i}if(o=e.g=t,i=Vs(o,s,!0,e)&&i,i=Vs(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Vs(o,s,!1,e)&&i}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ci(n[s]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Vs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&xr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var To=K.JSON.stringify;class Cg{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kg(){var t=bo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Dg{constructor(){this.h=this.g=null}add(e,n){const s=uu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var uu=new Cg(()=>new Ng,t=>t.reset());class Ng{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Rg(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $g(t){K.setTimeout(()=>{throw t},0)}let as,cs=!1,bo=new Dg,hu=()=>{const t=K.Promise.resolve(void 0);as=()=>{t.then(Mg)}};var Mg=()=>{for(var t;t=kg();){try{t.h.call(t.g)}catch(n){$g(n)}var e=uu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cs=!1};function Di(t,e){$e.call(this),this.h=t||1,this.g=e||K,this.j=He(this.qb,this),this.l=Date.now()}Me(Di,$e);P=Di.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(So(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function So(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Di.$.N.call(this),So(this),delete this.g};function Ao(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function fu(t){t.g=Ao(()=>{t.g=null,t.i&&(t.i=!1,fu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Og extends qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fu(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){qt.call(this),this.h=t,this.g={}}Me(ls,qt);var ja=[];function du(t,e,n,s){Array.isArray(n)||(n&&(ja[0]=n.toString()),n=ja);for(var i=0;i<n.length;i++){var r=ru(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function pu(t){vo(t.g,function(e,n){this.g.hasOwnProperty(n)&&_o(e)},t),t.g={}}ls.prototype.N=function(){ls.$.N.call(this),pu(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ni(){this.g=!0}Ni.prototype.Ea=function(){this.g=!1};function Pg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Lg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function mn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Fg(t,n)+(s?" "+s:"")})}function xg(t,e){t.info(function(){return"TIMEOUT: "+e})}Ni.prototype.info=function(){};function Fg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return To(n)}catch{return e}}var cn={},qa=null;function Ri(){return qa=qa||new $e}cn.Ta="serverreachability";function gu(t){Ke.call(this,cn.Ta,t)}Me(gu,Ke);function us(t){const e=Ri();Ue(e,new gu(e))}cn.STAT_EVENT="statevent";function mu(t,e){Ke.call(this,cn.STAT_EVENT,t),this.stat=e}Me(mu,Ke);function Qe(t){const e=Ri();Ue(e,new mu(e,t))}cn.Ua="timingevent";function yu(t,e){Ke.call(this,cn.Ua,t),this.size=e}Me(yu,Ke);function As(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var $i={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},vu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Co(){}Co.prototype.h=null;function za(t){return t.h||(t.h=t.i())}function wu(){}var Cs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ko(){Ke.call(this,"d")}Me(ko,Ke);function Do(){Ke.call(this,"c")}Me(Do,Ke);var Ur;function Mi(){}Me(Mi,Co);Mi.prototype.g=function(){return new XMLHttpRequest};Mi.prototype.i=function(){return{}};Ur=new Mi;function ks(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ls(this),this.P=Ug,t=Or?125:void 0,this.V=new Di(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var Ug=45e3,Vr={},li={};P=ks.prototype;P.setTimeout=function(t){this.P=t};function Br(t,e,n){t.L=1,t.v=Pi(kt(e)),t.s=n,t.S=!0,Eu(t,null)}function Eu(t,e){t.G=Date.now(),Ds(t),t.A=kt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Du(n.i,"t",s),t.C=0,n=t.l.J,t.h=new _u,t.g=Qu(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Og(He(t.Pa,t,t.g),t.O)),du(t.U,t.g,"readystatechange",t.nb),e=t.I?su(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),us(),Pg(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&vt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=vt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Or||this.g&&(this.h.h||this.g.ja()||Ya(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?us(3):us(2)),Oi(this);var n=this.g.da();this.ca=n;t:if(Iu(this)){var s=Ya(this.g);t="";var i=s.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Qn(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Lg(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rs(a)){var l=a;break t}}l=null}if(n=l)mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,n);else{this.i=!1,this.o=3,Qe(12),Yt(this),Qn(this);break e}}this.S?(Tu(this,u,o),Or&&this.i&&u==3&&(du(this.U,this.V,"tick",this.mb),this.V.start())):(mn(this.j,this.m,o,null),jr(this,o)),u==4&&Yt(this),this.i&&!this.J&&(u==4?Ku(this.l,this):(this.i=!1,Ds(this)))}else om(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),Yt(this),Qn(this)}}}catch{}finally{}};function Iu(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Tu(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=Vg(t,n),i==li){e==4&&(t.o=4,Qe(14),s=!1),mn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vr){t.o=4,Qe(15),mn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mn(t.j,t.m,i,null),jr(t,i);Iu(t)&&i!=li&&i!=Vr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Po(e),e.M=!0,Qe(11))):(mn(t.j,t.m,n,"[Invalid Chunked Response]"),Yt(t),Qn(t))}P.mb=function(){if(this.g){var t=vt(this.g),e=this.g.ja();this.C<e.length&&(Oi(this),Tu(this,t,e),this.i&&t!=4&&Ds(this))}};function Vg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?li:(n=Number(e.substring(n,s)),isNaN(n)?Vr:(s+=1,s+n>e.length?li:(e=e.slice(s,s+n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,Yt(this)};function Ds(t){t.Y=Date.now()+t.P,bu(t,t.P)}function bu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=As(He(t.lb,t),e)}function Oi(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xg(this.j,this.A),this.L!=2&&(us(),Qe(17)),Yt(this),this.o=2,Qn(this)):bu(this,this.Y-t)};function Qn(t){t.l.H==0||t.J||Ku(t.l,t)}function Yt(t){Oi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,So(t.V),pu(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function jr(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qr(n.i,t))){if(!t.K&&qr(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fi(n),Fi(n);else break e;Oo(n),Qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=As(He(n.ib,n),6e3));if(1>=$u(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wt(n,11)}else if((t.K||n.g==t)&&fi(n),!rs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(No(r,r.h),r.h=null))}if(s.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,Ee(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Wu(s,s.J?s.pa:null,s.Y),o.K){Mu(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Oi(a),Ds(a)),s.g=o}else zu(s);0<n.j.length&&Ui(n)}else l[0]!="stop"&&l[0]!="close"||Wt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wt(n,7):Mo(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}us(4)}catch{}}function Bg(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Si(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function jg(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Si(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Su(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Si(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jg(t),s=Bg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jt){this.h=t.h,ui(this,t.j),this.s=t.s,this.g=t.g,hi(this,t.m),this.l=t.l;var e=t.i,n=new hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ha(this,n),this.o=t.o}else t&&(e=String(t).match(Au))?(this.h=!1,ui(this,e[1]||"",!0),this.s=jn(e[2]||""),this.g=jn(e[3]||"",!0),hi(this,e[4]),this.l=jn(e[5]||"",!0),Ha(this,e[6]||"",!0),this.o=jn(e[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Jt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qn(e,Ka,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qn(e,Ka,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qn(n,n.charAt(0)=="/"?Kg:Hg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qn(n,Yg)),t.join("")};function kt(t){return new Jt(t)}function ui(t,e,n){t.j=n?jn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ha(t,e,n){e instanceof hs?(t.i=e,Wg(t.i,t.h)):(n||(e=qn(e,Gg)),t.i=new hs(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Pi(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ka=/[#\/\?@]/g,Hg=/[#\?:]/g,Kg=/[#\?]/g,Gg=/[#\?@]/g,Yg=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zt(t){t.g||(t.g=new Map,t.h=0,t.i&&qg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=hs.prototype;P.add=function(t,e){zt(this),this.i=null,t=Pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cu(t,e){zt(t),e=Pn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ku(t,e){return zt(t),e=Pn(t,e),t.g.has(e)}P.forEach=function(t,e){zt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};P.ta=function(){zt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};P.Z=function(t){zt(this);let e=[];if(typeof t=="string")ku(this,t)&&(e=e.concat(this.g.get(Pn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return zt(this),this.i=null,t=Pn(this,t),ku(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Du(t,e,n){Cu(t,e),0<n.length&&(t.i=null,t.g.set(Pn(t,e),mo(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Wg(t,e){e&&!t.j&&(zt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Cu(this,s),Du(this,i,n))},t)),t.j=e}var Qg=class{constructor(t,e){this.g=t,this.map=e}};function Nu(t){this.l=t||Xg,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xg=10;function Ru(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $u(t){return t.h?1:t.g?t.g.size:0}function qr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function No(t,e){t.g?t.g.add(e):t.h=e}function Mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nu.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ou(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return mo(t.i)}var Jg=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function Zg(){this.g=new Jg}function em(t,e,n){const s=n||"";try{Su(t,function(i,r){let o=i;bs(i)&&(o=To(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function tm(t,e){const n=new Ni;if(K.Image){const s=new Image;s.onload=Us(Bs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Us(Bs,n,s,"TestLoadImage: error",!1,e),s.onabort=Us(Bs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Us(Bs,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Bs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ns(t){this.l=t.fc||null,this.j=t.ob||!1}Me(Ns,Co);Ns.prototype.g=function(){return new Li(this.l,this.j)};Ns.prototype.i=function(t){return function(){return t}}({});function Li(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ro,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Li,$e);var Ro=0;P=Li.prototype;P.open=function(t,e){if(this.readyState!=Ro)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=Ro};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pu(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Pu(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rs(this):fs(this),this.readyState==3&&Pu(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Rs(this))};P.Ya=function(t){this.g&&(this.response=t,Rs(this))};P.ka=function(){this.g&&Rs(this)};function Rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nm=K.JSON.parse;function be(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Lu,this.L=this.M=!1}Me(be,$e);var Lu="",sm=/^https?$/i,im=["POST","PUT"];P=be.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ur.g(),this.C=this.u?za(this.u):za(Ur),this.g.onreadystatechange=He(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Ga(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Zl(im,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Uu(this),0<this.B&&((this.L=rm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.ua,this)):this.A=Ao(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Ga(this,r)}};function rm(t){return Cn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof go<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function Ga(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xu(t),xi(t)}function xu(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),xi(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),be.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Fu(this):this.kb())};P.kb=function(){Fu(this)};function Fu(t){if(t.h&&typeof go<"u"&&(!t.C[1]||vt(t)!=4||t.da()!=2)){if(t.v&&vt(t)==4)Ao(t.La,0,t);else if(Ue(t,"readystatechange"),vt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(Au)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),s=!sm.test(i?i.toLowerCase():"")}n=s}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var r=2<vt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",xu(t)}}finally{xi(t)}}}}function xi(t,e){if(t.g){Uu(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=s}catch{}}}function Uu(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function vt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nm(e)}};function Ya(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Lu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function om(t){const e={};t=(t.g&&2<=vt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(rs(t[s]))continue;var n=Rg(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}bg(e,function(s){return s.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vu(t){let e="";return vo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function $o(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Vu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Vn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bu(t){this.Ga=0,this.j=[],this.l=new Ni,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vn("baseRetryDelayMs",5e3,t),this.hb=Vn("retryDelaySeedMs",1e4,t),this.eb=Vn("forwardChannelMaxRetries",2,t),this.xa=Vn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Nu(t&&t.concurrentRequestLimit),this.Ja=new Zg,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Bu.prototype;P.ra=8;P.H=1;function Mo(t){if(ju(t),t.H==3){var e=t.W++,n=kt(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),$s(t,n),e=new ks(t,t.l,e),e.L=2,e.v=Pi(kt(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ds(e)}Yu(t)}function Fi(t){t.g&&(Po(t),t.g.cancel(),t.g=null)}function ju(t){Fi(t),t.u&&(K.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ui(t){if(!Ru(t.i)&&!t.m){t.m=!0;var e=t.Na;as||hu(),cs||(as(),cs=!0),bo.add(e,t),t.C=0}}function am(t,e){return $u(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=As(He(t.Na,t,e),Gu(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ks(this,this.l,t);let r=this.s;if(this.U&&(r?(r=su(r),iu(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qu(this,i,e),n=kt(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),$s(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Vu(r)))+"&"+e:this.o&&$o(n,this.o,r)),No(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,Br(i,n,null)):Br(i,n,e),this.H=2}}else this.H==3&&(t?Wa(this,t):this.j.length==0||Ru(this.i)||Wa(this))};function Wa(t,e){var n;e?n=e.m:n=t.W++;const s=kt(t.I);Ee(s,"SID",t.K),Ee(s,"RID",n),Ee(s,"AID",t.V),$s(t,s),t.o&&t.s&&$o(s,t.o,t.s),n=new ks(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qu(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),No(t.i,n),Br(n,s,e)}function $s(t,e){t.na&&vo(t.na,function(n,s){Ee(e,s,n)}),t.h&&Su({},function(n,s){Ee(e,s,n)})}function qu(t,e,n){n=Math.min(t.j.length,n);var s=t.h?He(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=r,0>l)r=Math.max(0,i[c].g-100),a=!1;else try{em(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function zu(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;as||hu(),cs||(as(),cs=!0),bo.add(e,t),t.A=0}}function Oo(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=As(He(t.Ma,t),Gu(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Hu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=As(He(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),Fi(this),Hu(this))};function Po(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Hu(t){t.g=new ks(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kt(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),$s(t,e),t.o&&t.s&&$o(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Pi(kt(e)),n.s=null,n.S=!0,Eu(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Fi(this),Oo(this),Qe(19))};function fi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Ku(t,e){var n=null;if(t.g==e){fi(t),Po(t),t.g=null;var s=2}else if(qr(t.i,e))n=e.F,Mu(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Ri(),Ue(s,new yu(s,n)),Ui(t)}else zu(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&am(t,e)||s==2&&Oo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wt(t,5);break;case 4:Wt(t,10);break;case 3:Wt(t,6);break;default:Wt(t,2)}}}function Gu(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=He(t.pb,t);n||(n=new Jt("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||ui(n,"https"),Pi(n)),tm(n.toString(),s)}else Qe(2);t.H=0,t.h&&t.h.za(e),Yu(t),ju(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function Yu(t){if(t.H=0,t.ma=[],t.h){const e=Ou(t.i);(e.length!=0||t.j.length!=0)&&(Ua(t.ma,e),Ua(t.ma,t.j),t.i.i.length=0,mo(t.j),t.j.length=0),t.h.ya()}}function Wu(t,e,n){var s=n instanceof Jt?kt(n):new Jt(n);if(s.g!="")e&&(s.g=e+"."+s.g),hi(s,s.m);else{var i=K.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Jt(null);s&&ui(r,s),e&&(r.g=e),i&&hi(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ra),$s(t,s),s}function Qu(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new be(new Ns({ob:!0})):new be(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Xu(){}P=Xu.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function di(){if(Cn&&!(10<=Number(_g)))throw Error("Environmental error: no available transport.")}di.prototype.g=function(t,e){return new rt(t,e)};function rt(t,e){$e.call(this),this.g=new Bu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ln(this)}Me(rt,$e);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Wu(t,null,t.Y),Ui(t)};rt.prototype.close=function(){Mo(this.g)};rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=To(t),t=n);e.j.push(new Qg(e.fb++,t)),e.H==3&&Ui(e)};rt.prototype.N=function(){this.g.h=null,delete this.j,Mo(this.g),delete this.g,rt.$.N.call(this)};function Ju(t){ko.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Ju,ko);function Zu(){Do.call(this),this.status=1}Me(Zu,Do);function Ln(t){this.g=t}Me(Ln,Xu);Ln.prototype.Ba=function(){Ue(this.g,"a")};Ln.prototype.Aa=function(t){Ue(this.g,new Ju(t))};Ln.prototype.za=function(t){Ue(this.g,new Zu)};Ln.prototype.ya=function(){Ue(this.g,"b")};function cm(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Me(ht,cm);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fr(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)fr(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){fr(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){fr(this,s),i=0;break}}this.h=i,this.i+=e};ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function we(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var lm={};function Lo(t){return-128<=t&&128>t?yg(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function wt(t){if(isNaN(t)||!isFinite(t))return _n;if(0>t)return Fe(wt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=zr;return new we(e,0)}function eh(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(eh(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wt(Math.pow(e,8)),s=_n,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=wt(Math.pow(e,r)),s=s.R(r).add(wt(o))):(s=s.R(n),s=s.add(wt(o)))}return s}var zr=4294967296,_n=Lo(0),Hr=Lo(1),Qa=Lo(16777216);P=we.prototype;P.ea=function(){if(ot(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:zr+s)*e,e*=zr}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(At(this))return"0";if(ot(this))return"-"+Fe(this).toString(t);for(var e=wt(Math.pow(t,6)),n=this,s="";;){var i=gi(n,e).g;n=pi(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,At(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function At(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ot(t){return t.h==-1}P.X=function(t){return t=pi(this,t),ot(t)?-1:At(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new we(n,~t.h).add(Hr)}P.abs=function(){return ot(this)?Fe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new we(n,n[n.length-1]&-2147483648?-1:0)};function pi(t,e){return t.add(Fe(e))}P.R=function(t){if(At(this)||At(t))return _n;if(ot(this))return ot(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(ot(t))return Fe(this.R(Fe(t)));if(0>this.X(Qa)&&0>t.X(Qa))return wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*s+2*i]+=o*c,js(n,2*s+2*i),n[2*s+2*i+1]+=r*c,js(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,js(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,js(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new we(n,0)};function js(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bn(t,e){this.g=t,this.h=e}function gi(t,e){if(At(e))throw Error("division by zero");if(At(t))return new Bn(_n,_n);if(ot(t))return e=gi(Fe(t),e),new Bn(Fe(e.g),Fe(e.h));if(ot(e))return e=gi(t,Fe(e)),new Bn(Fe(e.g),e.h);if(30<t.g.length){if(ot(t)||ot(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Hr,s=e;0>=s.X(t);)n=Xa(n),s=Xa(s);var i=hn(n,1),r=hn(s,1);for(s=hn(s,2),n=hn(n,2);!At(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=hn(s,1),n=hn(n,1)}return e=pi(t,i.R(e)),new Bn(i,e)}for(i=_n;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=wt(n),o=r.R(e);ot(o)||0<o.X(t);)n-=s,r=wt(n),o=r.R(e);At(r)&&(r=Hr),i=i.add(r),t=pi(t,o)}return new Bn(i,t)}P.gb=function(t){return gi(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new we(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new we(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new we(n,this.h^t.h)};function Xa(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new we(n,t.h)}function hn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new we(i,t.h)}di.prototype.createWebChannel=di.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;$i.NO_ERROR=0;$i.TIMEOUT=8;$i.HTTP_ERROR=6;vu.COMPLETE="complete";wu.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";$e.prototype.listen=$e.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=wt;we.fromString=eh;var um=function(){return new di},hm=function(){return Ri()},dr=$i,fm=vu,dm=cn,Ja={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pm=Ns,qs=wu,gm=be,mm=ht,En=we;const Za="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new bi("@firebase/firestore");function ec(){return tn.logLevel}function j(t,...e){if(tn.logLevel<=le.DEBUG){const n=e.map(xo);tn.debug(`Firestore (${xn}): ${t}`,...n)}}function Dt(t,...e){if(tn.logLevel<=le.ERROR){const n=e.map(xo);tn.error(`Firestore (${xn}): ${t}`,...n)}}function kn(t,...e){if(tn.logLevel<=le.WARN){const n=e.map(xo);tn.warn(`Firestore (${xn}): ${t}`,...n)}}function xo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+t;throw Dt(e),new Error(e)}function De(t,e){t||Z()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class vm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wm{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new th(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new qe(e)}}class _m{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Em{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _m(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tm{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new Im(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=bm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function Dn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new tt(0,0))}static max(){return new W(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ds{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ds{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return Sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function Am(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new Ut(i,q.empty(),e)}function Cm(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(W.min(),q.empty(),-1)}static max(){return new Ut(W.max(),q.empty(),-1)}}function km(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Dm)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Uo.ct=-1;function Vi(t){return t==null}function Kr(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??xe.RED,this.left=i??xe.EMPTY,this.right=r??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nc(this.data.getIterator())}getIteratorFrom(e){return new nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ge(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sh("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const $m=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(t){if(De(!!t),typeof t=="string"){let e=0;const n=$m.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nn(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bo(t){const e=t.mapValue.fields.__previous_value__;return Vo(e)?Bo(e):e}function ps(t){const e=Vt(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s,i,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vo(t)?4:Om(t)?9007199254740991:10:Z()}function It(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ps(t).isEqual(ps(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Vt(s.timestampValue),o=Vt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return nn(s.bytesValue).isEqual(nn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ce(s.doubleValue),o=Ce(i.doubleValue);return r===o?Kr(r)===Kr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Dn(t.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(tc(r)!==tc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!It(r[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function ms(t,e){return(t.values||[]).find(n=>It(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=sn(t),s=sn(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ce(i.integerValue||i.doubleValue),a=Ce(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return sc(t.timestampValue,e.timestampValue);case 4:return sc(ps(t),ps(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=nn(i),a=nn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=pe(Ce(i.latitude),Ce(r.latitude));return o!==0?o:pe(Ce(i.longitude),Ce(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nn(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Hs.mapValue&&r===Hs.mapValue)return 0;if(i===Hs.mapValue)return 1;if(r===Hs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const f=Nn(o[a[u]],c[l[u]]);if(f!==0)return f}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Z()}}function sc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Vt(t),s=Vt(e),i=pe(n.seconds,s.seconds);return i!==0?i:pe(n.nanos,s.nanos)}function Rn(t){return Gr(t)}function Gr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Vt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?nn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gr(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gr(s.fields[a])}`;return r+"}"}(t.mapValue):Z();var e,n}function Yr(t){return!!t&&"integerValue"in t}function jo(t){return!!t&&"arrayValue"in t}function ic(t){return!!t&&"nullValue"in t}function rc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pr(t){return!!t&&"mapValue"in t}function Xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Xn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Om(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(n)}setAll(e){let n=Ze.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Xn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());pr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];pr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Bi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new yt(Xn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,W.min(),W.min(),W.min(),yt.empty(),0)}static newFoundDocument(e,n,s,i){return new ze(e,1,n,W.min(),s,i,0)}static newNoDocument(e,n){return new ze(e,2,n,W.min(),W.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,W.min(),W.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mi{constructor(e,n){this.position=e,this.inclusive=n}}function oc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=Nn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ac(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!It(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Pm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ih{}class ke extends ih{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xm(e,n,s):n==="array-contains"?new Vm(e,s):n==="in"?new Bm(e,s):n==="not-in"?new jm(e,s):n==="array-contains-any"?new qm(e,s):new ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Fm(e,s):new Um(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nn(n,this.value)):n!==null&&sn(this.value)===sn(n)&&this.matchesComparison(Nn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tt extends ih{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Tt(e,n)}matches(e){return rh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function rh(t){return t.op==="and"}function oh(t){return Lm(t)&&rh(t)}function Lm(t){for(const e of t.filters)if(e instanceof Tt)return!1;return!0}function Wr(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Rn(t.value);if(oh(t))return t.filters.map(e=>Wr(e)).join(",");{const e=t.filters.map(n=>Wr(n)).join(",");return`${t.op}(${e})`}}function ah(t,e){return t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&It(n.value,s.value)}(t,e):t instanceof Tt?function(n,s){return s instanceof Tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ah(r,s.filters[o]),!0):!1}(t,e):void Z()}function ch(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Rn(e.value)}`}(t):t instanceof Tt?function(e){return e.op.toString()+" {"+e.getFilters().map(ch).join(" ,")+"}"}(t):"Filter"}class xm extends ke{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fm extends ke{constructor(e,n){super(e,"in",n),this.keys=lh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Um extends ke{constructor(e,n){super(e,"not-in",n),this.keys=lh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class Vm extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jo(n)&&ms(n.arrayValue,this.value)}}class Bm extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class jm extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class qm extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ms(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function cc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new zm(t,e,n,s,i,r,o)}function qo(t){const e=fe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Wr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Vi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rn(s)).join(",")),e.dt=n}return e.dt}function zo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ah(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ac(t.startAt,e.startAt)&&ac(t.endAt,e.endAt)}function Qr(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Hm(t,e,n,s,i,r,o,a){return new ji(t,e,n,s,i,r,o,a)}function Ho(t){return new ji(t)}function lc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Km(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ym(t){return t.collectionGroup!==null}function Tn(t){const e=fe(t);if(e.wt===null){e.wt=[];const n=Gm(e),s=Km(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Jn(n)),e.wt.push(new Jn(Ze.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Jn(Ze.keyField(),r))}}}return e.wt}function Nt(t){const e=fe(t);if(!e._t)if(e.limitType==="F")e._t=cc(e.path,e.collectionGroup,Tn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Tn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Jn(r.field,o))}const s=e.endAt?new mi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mi(e.startAt.position,e.startAt.inclusive):null;e._t=cc(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Xr(t,e,n){return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qi(t,e){return zo(Nt(t),Nt(e))&&t.limitType===e.limitType}function uh(t){return`${qo(Nt(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ch(s)).join(", ")}]`),Vi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rn(s)).join(",")),`Target(${n})`}(Nt(t))}; limitType=${t.limitType})`}function zi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Tn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=oc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Tn(n),s)||n.endAt&&!function(i,r,o){const a=oc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Tn(n),s))}(t,e)}function Wm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hh(t){return(e,n)=>{let s=!1;for(const i of Tn(t)){const r=Qm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Qm(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Nn(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Rm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Se(q.comparator);function Bt(){return Xm}const fh=new Se(q.comparator);function zn(...t){let e=fh;for(const n of t)e=e.insert(n.key,n);return e}function Jm(t){let e=fh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qt(){return Zn()}function dh(){return Zn()}function Zn(){return new Fn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zm=new Ge(q.comparator);function ae(...t){let e=Zm;for(const n of t)e=e.add(n);return e}const ey=new Ge(pe);function ty(){return ey}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kr(e)?"-0":e}}function sy(t){return{integerValue:""+t}}/**
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
 */class Hi{constructor(){this._=void 0}}function iy(t,e,n){return t instanceof Zr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vo(i)&&(i=Bo(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof yi?ph(t,e):t instanceof vi?gh(t,e):function(s,i){const r=oy(s,i),o=uc(r)+uc(s.gt);return Yr(r)&&Yr(s.gt)?sy(o):ny(s.serializer,o)}(t,e)}function ry(t,e,n){return t instanceof yi?ph(t,e):t instanceof vi?gh(t,e):n}function oy(t,e){return t instanceof eo?Yr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Zr extends Hi{}class yi extends Hi{constructor(e){super(),this.elements=e}}function ph(t,e){const n=mh(e);for(const s of t.elements)n.some(i=>It(i,s))||n.push(s);return{arrayValue:{values:n}}}class vi extends Hi{constructor(e){super(),this.elements=e}}function gh(t,e){let n=mh(e);for(const s of t.elements)n=n.filter(i=>!It(i,s));return{arrayValue:{values:n}}}class eo extends Hi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function uc(t){return Ce(t.integerValue||t.doubleValue)}function mh(t){return jo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ay(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof yi&&s instanceof yi||n instanceof vi&&s instanceof vi?Dn(n.elements,s.elements,It):n instanceof eo&&s instanceof eo?It(n.gt,s.gt):n instanceof Zr&&s instanceof Zr}(t.transform,e.transform)}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Js(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ko{}function yh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ly(t.key,Zt.none()):new Go(t.key,t.data,Zt.none());{const n=t.data,s=yt.empty();let i=new Ge(Ze.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ki(t.key,s,new Ot(i.toArray()),Zt.none())}}function cy(t,e,n){t instanceof Go?function(s,i,r){const o=s.value.clone(),a=fc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ki?function(s,i,r){if(!Js(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function es(t,e,n,s){return t instanceof Go?function(i,r,o,a){if(!Js(i.precondition,r))return o;const c=i.value.clone(),l=dc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ki?function(i,r,o,a){if(!Js(i.precondition,r))return o;const c=dc(i.fieldTransforms,a,r),l=r.data;return l.setAll(vh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Js(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function hc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Dn(n,s,(i,r)=>ay(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends Ko{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ki extends Ko{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fc(t,e,n){const s=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ry(o,a,n[i]))}return s}function dc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,iy(r,o,e))}return s}class ly extends Ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&cy(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=es(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=es(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=dh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=yh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(n,s)=>hc(n,s))&&Dn(this.baseMutations,e.baseMutations,(n,s)=>hc(n,s))}}/**
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
 */class hy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fy{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,oe;function wh(t){if(t===void 0)return Dt("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ae.OK:return O.OK;case Ae.CANCELLED:return O.CANCELLED;case Ae.UNKNOWN:return O.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return O.INTERNAL;case Ae.UNAVAILABLE:return O.UNAVAILABLE;case Ae.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ae.NOT_FOUND:return O.NOT_FOUND;case Ae.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ae.ABORTED:return O.ABORTED;case Ae.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ae.DATA_LOSS:return O.DATA_LOSS;default:return Z()}}(oe=Ae||(Ae={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ks}static getOrCreateInstance(){return Ks===null&&(Ks=new Yo),Ks}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ks=null;/**
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
 */function dy(){return new TextEncoder}/**
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
 */const py=new En([4294967295,4294967295],0);function pc(t){const e=dy().encode(t),n=new mm;return n.update(e),new Uint8Array(n.digest())}function gc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new En([n,s],0),new En([i,r],0)]}class Wo{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Hn(`Invalid padding: ${n}`);if(s<0)throw new Hn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=En.fromNumber(this.It)}Et(e,n,s){let i=e.add(n.multiply(En.fromNumber(s)));return i.compare(py)===1&&(i=new En([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=pc(e),[s,i]=gc(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Wo(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=pc(e),[s,i]=gc(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Gi(W.min(),i,new Se(pe),Bt(),ae())}}class Os{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Os(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s,i){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=i}}class _h{constructor(e,n){this.targetId=e,this.Vt=n}}class Eh{constructor(e,n,s=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class mc{constructor(){this.St=0,this.Dt=vc(),this.Ct=Ye.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ae(),n=ae(),s=ae();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Z()}}),new Os(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=vc()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class gy{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Bt(),this.zt=yc(),this.Wt=new Se(pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(e){var n;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(Qr(o))if(i===0){const a=new q(o.path);this.Yt(s,a,ze.newNoDocument(a,W.min()))}else De(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=Yo.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,d,v,g,m,R;const D={localCacheCount:u,existenceFilterCount:h.count},N=h.unchangedNames;return N&&(D.bloomFilter={applied:l===0,hashCount:(f=N==null?void 0:N.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(g=(v=(d=N==null?void 0:N.bits)===null||d===void 0?void 0:d.bitmap)===null||v===void 0?void 0:v.length)!==null&&g!==void 0?g:0,padding:(R=(m=N==null?void 0:N.bits)===null||m===void 0?void 0:m.padding)!==null&&R!==void 0?R:0}),D}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=nn(r).toUint8Array()}catch(u){if(u instanceof sh)return kn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Wo(c,o,a)}catch(u){return kn(u instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Qr(a.target)){const c=new q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ze.newNoDocument(c,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=ae();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Gi(e,n,this.Wt,this.jt,s);return this.jt=Bt(),this.zt=yc(),this.Wt=new Se(pe),i}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new mc,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ge(pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new mc),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function yc(){return new Se(q.comparator)}function vc(){return new Se(q.comparator)}const my={asc:"ASCENDING",desc:"DESCENDING"},yy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vy={and:"AND",or:"OR"};class wy{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function to(t,e){return t.useProto3Json||Vi(e)?e:{value:e}}function _y(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ey(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bn(t){return De(!!t),W.fromTimestamp(function(e){const n=Vt(e);return new tt(n.seconds,n.nanos)}(t))}function Iy(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ih(t){const e=Te.fromString(t);return De(Ah(e)),e}function gr(t,e){const n=Ih(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Th(n))}function no(t,e){return Iy(t.databaseId,e)}function Ty(t){const e=Ih(t);return e.length===4?Te.emptyPath():Th(e)}function wc(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Th(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function by(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),Ye.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),Ye.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:wh(c.code);return new z(l,c.message||"")}(o);n=new Eh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=gr(t,s.document.name),r=bn(s.document.updateTime),o=s.document.createTime?bn(s.document.createTime):W.min(),a=new yt({mapValue:{fields:s.document.fields}}),c=ze.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Zs(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=gr(t,s.document),r=s.readTime?bn(s.readTime):W.min(),o=ze.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Zs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=gr(t,s.document),r=s.removedTargetIds||[];n=new Zs([],r,i,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new fy(i,r),a=s.targetId;n=new _h(a,o)}}return n}function Sy(t,e){return{documents:[no(t,e.path)]}}function Ay(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=no(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=no(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Sh(Tt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pn(u.field),direction:Dy(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=to(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Cy(t){let e=Ty(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){De(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=bh(u);return h instanceof Tt&&oh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Jn(gn(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Vi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new mi(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new mi(f,h)}(n.endAt)),Hm(e,i,o,r,a,"F",c,l)}function ky(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gn(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=gn(e.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gn(e.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gn(e.unaryFilter.field);return ke.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(gn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Tt.create(e.compositeFilter.filters.map(n=>bh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function Dy(t){return my[t]}function Ny(t){return yy[t]}function Ry(t){return vy[t]}function pn(t){return{fieldPath:t.canonicalString()}}function gn(t){return Ze.fromServerFormat(t.fieldPath)}function Sh(t){return t instanceof ke?function(e){if(e.op==="=="){if(rc(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NAN"}};if(ic(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(rc(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NAN"}};if(ic(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(e.field),op:Ny(e.op),value:e.value}}}(t):t instanceof Tt?function(e){const n=e.getFilters().map(s=>Sh(s));return n.length===1?n[0]:{compositeFilter:{op:Ry(e.op),filters:n}}}(t):Z()}function Ah(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n,s,i,r=W.min(),o=W.min(),a=Ye.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.fe=e}}function My(t){const e=Cy({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.rn=new Py}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Ut.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Py{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ge(Te.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ge(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new $n(0)}static Mn(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.changes=new Fn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&es(s.mutation,i,Ot.empty(),tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=Qt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=zn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Bt();const o=Zn(),a=Zn();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ki)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),es(u.mutation,l,u.mutation.getFieldMask(),tt.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new xy(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Zn();let i=new Se((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ot.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||ae()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=dh();u.forEach(f=>{if(!r.has(f)){const d=yh(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(Qt());let a=-1,c=r;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Jm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let i=zn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=zn();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new ji(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ze.newInvalidDocument(l)))});let o=zn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&es(l.mutation,c,Ot.empty(),tt.now()),zi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:bn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:My(s.bundledQuery),readTime:bn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class Vy{constructor(){this.overlays=new Se(q.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qt();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=Qt(),r=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Qt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return A.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hy(n,s));let r=this.ls.get(n);r===void 0&&(r=ae(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.fs=new Ge(Ne.ds),this.ws=new Ge(Ne._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ne(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new q(new Te([])),s=new Ne(n,e),i=new Ne(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new q(new Te([])),s=new Ne(n,e),i=new Ne(n,e+1);let r=ae();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ne(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return q.comparator(e.key,n.key)||pe(e.As,n.As)}static _s(e,n){return pe(e.As,n.As)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ge(Ne.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uy(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ne(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ge(pe);return n.forEach(i=>{const r=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Ne(new q(r),0);let a=new Ge(pe);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,i=>{const r=new Ne(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ne(n,0),i=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.Ds=e,this.docs=new Se(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=Bt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ze.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Bt();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||km(Cm(u),s)<=0||(i.has(u.key)||zi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Z()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new qy(this)}getSize(e){return A.resolve(this.size)}}class qy extends Ly{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.persistence=e,this.xs=new Fn(n=>qo(n),zo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Qo,this.targetCount=0,this.Ms=$n.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){this.$s={},this.overlays={},this.Os=new Uo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new zy(this),this.indexManager=new Oy,this.remoteDocumentCache=function(s){return new jy(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new $y(n),this.qs=new Uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new By(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const i=new Ky(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class Ky extends Nm{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.Qs=new Qo,this.js=null}static zs(e){return new Xo(e)}get Ws(){if(this.js)return this.js;throw Z()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const i=q.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Jo(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(lc(n))return A.resolve(null);let s=Nt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xr(n,null,"F"),s=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Xr(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,i){return lc(n)||i.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(ec()<=le.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(n)),this.Wi(e,o,n,Am(i,-1)))})}ji(e,n){let s=new Ge(hh(e));return n.forEach((i,r)=>{zi(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return ec()<=le.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ut.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Se(pe),this.Yi=new Fn(r=>qo(r),zo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fy(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Wy(t,e,n,s){return new Yy(t,e,n,s)}async function Ch(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ae();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function kh(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Qy(t,e){const n=fe(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Ye.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(v,g,m){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.Bs.updateTargetData(r,d))});let c=Bt(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Xy(r,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(W.min())){const u=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ji=i,r))}function Xy(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Bt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:i}})}function Jy(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,e).next(r=>r?(i=r,A.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Pt(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function so(t,e,n){const s=fe(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ms(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function _c(t,e,n){const s=fe(t);let i=W.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=fe(a),h=u.Yi.get(l);return h!==void 0?A.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Nt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?r:ae())).next(a=>(Zy(s,Wm(e),a),{documents:a,ir:r})))}function Zy(t,e,n){let s=t.Xi.get(e)||W.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Xi.set(e,s)}class Ec{constructor(){this.activeTargetIds=ty()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ev{constructor(){this.Hr=new Ec,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ec,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gs=null;function mr(){return Gs===null?Gs=268435456+Math.round(2147483648*Math.random()):Gs++,"0x"+Gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class iv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=mr(),a=this.To(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(e,a,c,s).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw kn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+xn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=nv[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=mr();return new Promise((o,a)=>{const c=new gm;c.setWithCredentials(!0),c.listenOnce(fm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dr.NO_ERROR:const u=c.getResponseJson();j(Be,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case dr.TIMEOUT:j(Be,`RPC '${e}' ${r} timed out`),a(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case dr.HTTP_ERROR:const h=c.getStatus();if(j(Be,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const v=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(d.status);a(new z(v,d.message))}else a(new z(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(O.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(Be,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);j(Be,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const i=mr(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=um(),a=hm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new pm({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=r.join("");j(Be,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const v=new sv({ro:m=>{d?j(Be,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(f||(j(Be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),j(Be,`RPC '${e}' stream ${i} sending:`,m),h.send(m))},oo:()=>h.close()}),g=(m,R,D)=>{m.listen(R,N=>{try{D(N)}catch(y){setTimeout(()=>{throw y},0)}})};return g(h,qs.EventType.OPEN,()=>{d||j(Be,`RPC '${e}' stream ${i} transport opened.`)}),g(h,qs.EventType.CLOSE,()=>{d||(d=!0,j(Be,`RPC '${e}' stream ${i} transport closed`),v.wo())}),g(h,qs.EventType.ERROR,m=>{d||(d=!0,kn(Be,`RPC '${e}' stream ${i} transport errored:`,m),v.wo(new z(O.UNAVAILABLE,"The operation could not be completed")))}),g(h,qs.EventType.MESSAGE,m=>{var R;if(!d){const D=m.data[0];De(!!D);const N=D,y=N.error||((R=N[0])===null||R===void 0?void 0:R.error);if(y){j(Be,`RPC '${e}' stream ${i} received error:`,y);const I=y.status;let k=function(w){const B=Ae[w];if(B!==void 0)return wh(B)}(I),_=y.message;k===void 0&&(k=O.INTERNAL,_="Unknown error status: "+I+" with message "+y.message),d=!0,v.wo(new z(k,_)),h.close()}else j(Be,`RPC '${e}' stream ${i} received:`,D),v._o(D)}}),g(a,dm.STAT_EVENT,m=>{m.stat===Ja.PROXY?j(Be,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===Ja.NOPROXY&&j(Be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function yr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){return new wy(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s,i,r,o,a,c){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Nh(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new z(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ov extends rv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=by(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?W.min():r.readTime?bn(r.readTime):W.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=wc(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Qr(a)?{documents:Sy(i,a)}:{query:Ay(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Ey(i,r.resumeToken);const c=to(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(W.min())>0){o.readTime=_y(i,r.snapshotVersion.toTimestamp());const c=to(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=ky(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=wc(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(O.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(O.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class cv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Dt(n),this.mu=!1):j("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ls(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=fe(a);c.vu.add(4),await Ps(c),c.bu.set("Unknown"),c.vu.delete(4),await Yi(c)}(this))})}),this.bu=new cv(s,i)}}async function Yi(t){if(Ls(t))for(const e of t.Ru)await e(!0)}async function Ps(t){for(const e of t.Ru)await e(!1)}function Rh(t,e){const n=fe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),ta(n)?ea(n):Un(n).Ko()&&Zo(n,e))}function $h(t,e){const n=fe(t),s=Un(n);n.Au.delete(e),s.Ko()&&Mh(n,e),n.Au.size===0&&(s.Ko()?s.jo():Ls(n)&&n.bu.set("Unknown"))}function Zo(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Un(t).su(e)}function Mh(t,e){t.Vu.qt(e),Un(t).iu(e)}function ea(t){t.Vu=new gy({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Un(t).start(),t.bu.gu()}function ta(t){return Ls(t)&&!Un(t).Uo()&&t.Au.size>0}function Ls(t){return fe(t).vu.size===0}function Oh(t){t.Vu=void 0}async function uv(t){t.Au.forEach((e,n)=>{Zo(t,e)})}async function hv(t,e){Oh(t),ta(t)?(t.bu.Iu(e),ea(t)):t.bu.set("Unknown")}async function fv(t,e,n){if(t.bu.set("Online"),e instanceof Eh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Tc(t,s)}else if(e instanceof Zs?t.Vu.Ht(e):e instanceof _h?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const s=await kh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(c);l&&i.Au.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(Ye.EMPTY_BYTE_STRING,l.snapshotVersion)),Mh(i,a);const u=new Pt(l.target,a,c,l.sequenceNumber);Zo(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Tc(t,s)}}async function Tc(t,e,n){if(!Ms(e))throw e;t.vu.add(1),await Ps(t),t.bu.set("Offline"),n||(n=()=>kh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yi(t)})}async function bc(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Ls(n);n.vu.add(3),await Ps(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yi(n)}async function dv(t,e){const n=fe(t);e?(n.vu.delete(2),await Yi(n)):e||(n.vu.add(2),await Ps(n),n.bu.set("Unknown"))}function Un(t){return t.Su||(t.Su=function(e,n,s){const i=fe(e);return i.fu(),new ov(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:uv.bind(null,t),ao:hv.bind(null,t),nu:fv.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),ta(t)?ea(t):t.bu.set("Unknown")):(await t.Su.stop(),Oh(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new na(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(Dt("AsyncQueue",`${e}: ${t}`),Ms(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=zn(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Sn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Sn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Cu=new Se(q.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Z():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Mn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mn(e,n,Sn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.Nu=void 0,this.listeners=[]}}class gv{constructor(){this.queries=new Fn(e=>uh(e),qi),this.onlineState="Unknown",this.ku=new Set}}async function mv(t,e){const n=fe(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new pv),i)try{r.Nu=await n.onListen(s)}catch(o){const a=Ph(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&sa(n)}async function yv(t,e){const n=fe(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function vv(t,e){const n=fe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&sa(n)}function wv(t,e,n){const s=fe(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function sa(t){t.ku.forEach(e=>{e.next()})}class _v{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Mn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class Ev{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ae(),this.mutatedKeys=ae(),this.tc=hh(e),this.ec=new Sn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Sc,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=zi(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?v!==g&&(s.track({type:3,doc:d}),m=!0):this.rc(f,d)||(s.track({type:2,doc:d}),m=!0,(c&&this.tc(d,c)>0||l&&this.tc(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),m=!0):f&&!d&&(s.track({type:1,doc:f}),m=!0,(c||l)&&(a=!0)),m&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,u)=>function(h,f){const d=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return d(h)-d(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new Mn(this.query,e.ec,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Sc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ae(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new xh(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Lh(s))}),n}hc(e){this.Yu=e.ir,this.Zu=ae();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Mn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Iv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Tv{constructor(e){this.key=e,this.fc=!1}}class bv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Fn(a=>uh(a),qi),this._c=new Map,this.mc=new Set,this.gc=new Se(q.comparator),this.yc=new Map,this.Ic=new Qo,this.Tc={},this.Ec=new Map,this.Ac=$n.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Sv(t,e){const n=$v(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await Jy(n.localStore,Nt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Av(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Rh(n.remoteStore,o)}return i}async function Av(t,e,n,s,i){t.Rc=(h,f,d)=>async function(v,g,m,R){let D=g.view.sc(m);D.zi&&(D=await _c(v.localStore,g.query,!1).then(({documents:I})=>g.view.sc(I,D)));const N=R&&R.targetChanges.get(g.targetId),y=g.view.applyChanges(D,v.isPrimaryClient,N);return Cc(v,g.targetId,y.cc),y.snapshot}(t,h,f,d);const r=await _c(t.localStore,e,!0),o=new Ev(e,r.ir),a=o.sc(r.documents),c=Os.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Cc(t,n,l.cc);const u=new Iv(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function Cv(t,e){const n=fe(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!qi(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await so(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$h(n.remoteStore,s.targetId),io(n,s.targetId)}).catch(Fo)):(io(n,s.targetId),await so(n.localStore,s.targetId,!0))}async function Fh(t,e){const n=fe(t);try{const s=await Qy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?De(o.fc):i.removedDocuments.size>0&&(De(o.fc),o.fc=!1))}),await Vh(n,s,e)}catch(s){await Fo(s)}}function Ac(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=fe(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&sa(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kv(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new Se(q.comparator);o=o.insert(r,ze.newNoDocument(r,W.min()));const a=ae().add(r),c=new Gi(W.min(),new Map,new Se(pe),o,a);await Fh(s,c),s.gc=s.gc.remove(r),s.yc.delete(e),ia(s)}else await so(s.localStore,e,!1).then(()=>io(s,e,n)).catch(Fo)}function io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Uh(t,s)})}function Uh(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&($h(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),ia(t))}function Cc(t,e,n){for(const s of n)s instanceof Lh?(t.Ic.addReference(s.key,e),Dv(t,s)):s instanceof xh?(j("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Uh(t,s.key)):Z()}function Dv(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.mc.add(s),ia(t))}function ia(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new q(Te.fromString(e)),s=t.Ac.next();t.yc.set(s,new Tv(n)),t.gc=t.gc.insert(n,s),Rh(t.remoteStore,new Pt(Nt(Ho(n.path)),s,"TargetPurposeLimboResolution",Uo.ct))}}async function Vh(t,e,n){const s=fe(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Jo.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const l=fe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ms(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d);l.Ji=l.Ji.insert(h,v)}}}(s.localStore,r))}async function Nv(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Ch(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new z(O.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vh(n,s.er)}}function Rv(t,e){const n=fe(t),s=n.yc.get(e);if(s&&s.fc)return ae().add(s.key);{let i=ae();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function $v(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kv.bind(null,e),e.dc.nu=vv.bind(null,e.eventManager),e.dc.Pc=wv.bind(null,e.eventManager),e}class kc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Wy(this.persistence,new Gy,e.initialUser,this.serializer)}createPersistence(e){return new Hy(Xo.zs,this.serializer)}createSharedClientState(e){return new ev}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ac(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nv.bind(null,this.syncEngine),await dv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gv}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new iv(i));var i;return function(r,o,a,c){return new av(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ac(this.syncEngine,a,0),o=Ic.D()?new Ic:new tv,new lv(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new bv(s,i,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);j("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ps(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ov{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=nh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ph(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vr(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ch(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xv(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>bc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>bc(e.remoteStore,r)),t._onlineComponents=e}function Lv(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await vr(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Lv(n))throw n;kn("Error using user provided cache. Falling back to memory cache: "+n),await vr(t,new kc)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await vr(t,new kc);return t._offlineComponents}async function Fv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Dc(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Dc(t,new Mv))),t._onlineComponents}async function Nc(t){const e=await Fv(t),n=e.eventManager;return n.onListen=Sv.bind(null,e.syncEngine),n.onUnlisten=Cv.bind(null,e.syncEngine),n}/**
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
 */function Bh(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vv(t,e,n,s){if(e===!0&&s===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $c(t){if(!q.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bv(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bh((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class ra{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ym;switch(n.type){case"firstParty":return new Em(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rc.get(e);n&&(j("ComponentProvider","Removing Datastore"),Rc.delete(e),n.terminate())}(this),Promise.resolve()}}function jv(t,e,n,s={}){var i;const r=(t=ei(t,ra))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=qe.MOCK_USER;else{a=id(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new qe(l)}t._authCredentials=new vm(new th(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Wi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wi(this.firestore,e,this._query)}}class ys extends Wi{constructor(e,n,s){super(e,n,Ho(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new q(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function qv(t,e,...n){if(t=jt(t),arguments.length===1&&(e=nh.A()),Uv("doc","path",e),t instanceof ra){const s=Te.fromString(e,...n);return $c(s),new Ct(t,null,new q(s))}{if(!(t instanceof Ct||t instanceof ys))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return $c(s),new Ct(t.firestore,t instanceof ys?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Nh(this,"async_queue_retry"),this.Xc=()=>{const n=yr();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=yr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new In;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ms(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=na.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&Z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Oc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ro extends ra{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new zv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jh(this),this._firestoreClient.terminate()}}function Hv(t,e){const n=typeof t=="object"?t:xl(),s=typeof t=="string"?t:e||"(default)",i=Es(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=td("firestore");r&&jv(i,...r)}return i}function Kv(t){return t._firestoreClient||jh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jh(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,c,l){return new Mm(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Bh(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Pv(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(Ye.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}const Yv=new RegExp("[~\\*/\\[\\]]");function Wv(t,e,n){if(e.search(Yv)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qh(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new z(O.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qv extends zh{data(){return super.data()}}function Hh(t,e){return typeof e=="string"?Wv(t,e):e instanceof qh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jv{convertValue(e,n="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Bi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Gv(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Bo(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const n=Vt(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);De(Ah(s));const i=new gs(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(n)||Dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kh extends zh{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Hh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ti extends Kh{data(e={}){return super.data(e)}}class Zv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Kn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ti(this._firestore,this._userDataWriter,s.key,s,new Kn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ti(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Kn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ti(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Kn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:ew(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ew(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class Gh extends Jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function tw(t,...e){var n,s,i;t=jt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Oc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Oc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof Ct)l=ei(t.firestore,ro),u=Ho(t._key.path),c={next:h=>{e[o]&&e[o](nw(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ei(t,Wi);l=ei(h.firestore,ro),u=h._query;const f=new Gh(l);c={next:d=>{e[o]&&e[o](new Zv(l,f,h,d))},error:e[o+1],complete:e[o+2]},Xv(t._query)}return function(h,f,d,v){const g=new Ov(v),m=new _v(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>mv(await Nc(h),m)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>yv(await Nc(h),m))}}(Kv(l),u,a,c)}function nw(t,e,n){const s=n.docs.get(e._key),i=new Gh(t);return new Kh(t,i,e._key,s,new Kn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){xn=n})(Is),ut(new at("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ro(new wm(n.getProvider("auth-internal")),new Tm(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),et(Za,"3.13.0",t),et(Za,"3.13.0","esm2017")})();function sw(t,e,n){let s;if(!globalThis.window){const{subscribe:o}=Qs(n);return{subscribe:o,ref:null,id:""}}if(!t){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:o}=Qs(null);return{subscribe:o,ref:null,id:""}}const i=typeof e=="string"?qv(t,e):e,{subscribe:r}=Qs(n,o=>(s=tw(i,a=>{o(a.data()??null)}),()=>s()));return{subscribe:r,ref:i,id:i.id}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="firebasestorage.googleapis.com",iw="storageBucket",rw=2*60*1e3,ow=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends pt{constructor(e,n,s=0){super(wr(e),`Firebase Storage: ${n} (${wr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,St.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bt||(bt={}));function wr(t){return"storage/"+t}function aw(){const t="An unknown error occurred, please check the error payload for server response.";return new St(bt.UNKNOWN,t)}function cw(){return new St(bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lw(){return new St(bt.CANCELED,"User canceled the upload/download.")}function uw(t){return new St(bt.INVALID_URL,"Invalid URL '"+t+"'.")}function hw(t){return new St(bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lc(t){return new St(bt.INVALID_ARGUMENT,t)}function Wh(){return new St(bt.APP_DELETED,"The Firebase app was deleted.")}function fw(t){return new St(bt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=lt.makeFromUrl(e,n)}catch{return new lt(e,"")}if(s.path==="")return s;throw hw(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(y){y.path_=decodeURIComponent(y.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},g=n===Yh?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",R=new RegExp(`^https?://${g}/${i}/${m}`,"i"),N=[{regex:a,indices:c,postModify:r},{regex:d,indices:v,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let y=0;y<N.length;y++){const I=N[y],k=I.regex.exec(e);if(k){const _=k[I.indices.bucket];let w=k[I.indices.path];w||(w=""),s=new lt(_,w),I.postModify(s);break}}if(s==null)throw uw(e);return s}}class dw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...m){l||(l=!0,e.apply(null,m))}function h(m){i=setTimeout(()=>{i=null,t(d,c())},m)}function f(){r&&clearTimeout(r)}function d(m,...R){if(l){f();return}if(m){f(),u.call(null,m,...R);return}if(c()||o){f(),u.call(null,m,...R);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let v=!1;function g(m){v||(v=!0,f(),!l&&(i!==null?(m||(a=2),clearTimeout(i),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function gw(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){return t!==void 0}function xc(t,e,n,s){if(s<e)throw Lc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Lc(`Invalid value for '${t}'. Expected ${n} or less.`)}function yw(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_i||(_i={}));/**
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
 */function vw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n,s,i,r,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,v)=>{this.resolve_=d,this.reject_=v,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Ys(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===_i.NO_ERROR,c=r.getStatus();if(!a||vw(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===_i.ABORT;s(!1,new Ys(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Ys(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());mw(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=aw();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Wh():lw();o(c)}else{const c=cw();o(c)}};this.canceled_?n(!1,new Ys(!1,null,!0)):this.backoffId_=pw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ys{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function _w(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ew(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Iw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Tw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bw(t,e,n,s,i,r,o=!0){const a=yw(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Iw(l,e),_w(l,n),Ew(l,r),Tw(l,s),new ww(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Aw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this._service=e,n instanceof lt?this._location=n:this._location=lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ei(e,n)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Aw(this._location.path)}get storage(){return this._service}get parent(){const e=Sw(this._location.path);if(e===null)return null;const n=new lt(this._location.bucket,e);return new Ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fw(e)}}function Fc(t,e){const n=e==null?void 0:e[iw];return n==null?null:lt.makeFromBucketSpec(n,t)}class Cw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Yh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rw,this._maxUploadRetryTime=ow,this._requests=new Set,i!=null?this._bucket=lt.makeFromBucketSpec(i,this._host):this._bucket=Fc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=Fc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ei(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new dw(Wh());{const o=bw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Uc="@firebase/storage",Vc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="storage";function Dw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cw(n,s,i,e,Is)}function Nw(){ut(new at(kw,Dw,"PUBLIC").setMultipleInstances(!0)),et(Uc,Vc,""),et(Uc,Vc,"esm2017")}Nw();var Rw="firebase",$w="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Rw,$w,"app");const Mw=(t,e)=>e.some(n=>t instanceof n);let Bc,jc;function Ow(){return Bc||(Bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pw(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qh=new WeakMap,oo=new WeakMap,Xh=new WeakMap,_r=new WeakMap,oa=new WeakMap;function Lw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ft(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qh.set(n,t)}).catch(()=>{}),oa.set(e,t),e}function xw(t){if(oo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});oo.set(t,e)}let ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fw(t){ao=t(ao)}function Uw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Er(this),e,...n);return Xh.set(s,e.sort?e.sort():[e]),Ft(s)}:Pw().includes(t)?function(...e){return t.apply(Er(this),e),Ft(Qh.get(this))}:function(...e){return Ft(t.apply(Er(this),e))}}function Vw(t){return typeof t=="function"?Uw(t):(t instanceof IDBTransaction&&xw(t),Mw(t,Ow())?new Proxy(t,ao):t)}function Ft(t){if(t instanceof IDBRequest)return Lw(t);if(_r.has(t))return _r.get(t);const e=Vw(t);return e!==t&&(_r.set(t,e),oa.set(e,t)),e}const Er=t=>oa.get(t);function Bw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const jw=["get","getKey","getAll","getAllKeys","count"],qw=["put","add","delete","clear"],Ir=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ir.get(e))return Ir.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jw.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ir.set(e,r),r}Fw(t=>({...t,get:(e,n,s)=>qc(e,n)||t.get(e,n,s),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));const Jh="@firebase/installations",aa="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=1e4,ef=`w:${aa}`,tf="FIS_v2",zw="https://firebaseinstallations.googleapis.com/v1",Hw=60*60*1e3,Kw="installations",Gw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rn=new an(Kw,Gw,Yw);function nf(t){return t instanceof pt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf({projectId:t}){return`${zw}/projects/${t}/installations`}function rf(t){return{token:t.token,requestStatus:2,expiresIn:Qw(t.expiresIn),creationTime:Date.now()}}async function of(t,e){const s=(await e.json()).error;return rn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function af({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ww(t,{refreshToken:e}){const n=af(t);return n.append("Authorization",Xw(e)),n}async function cf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qw(t){return Number(t.replace("s","000"))}function Xw(t){return`${tf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=sf(t),i=af(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:tf,appId:t.appId,sdkVersion:ef},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await cf(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:rf(l.authToken)}}else throw await of("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^[cdef][\w-]{21}$/,co="";function t0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n0(t);return e0.test(n)?n:co}catch{return co}}function n0(t){return Zw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function hf(t,e){const n=Qi(t);ff(n,e),s0(n,e)}function ff(t,e){const n=uf.get(t);if(n)for(const s of n)s(e)}function s0(t,e){const n=i0();n&&n.postMessage({key:t,fid:e}),r0()}let Xt=null;function i0(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=t=>{ff(t.data.key,t.data.fid)}),Xt}function r0(){uf.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-installations-database",a0=1,on="firebase-installations-store";let Tr=null;function ca(){return Tr||(Tr=Bw(o0,a0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(on)}}})),Tr}async function Ii(t,e){const n=Qi(t),i=(await ca()).transaction(on,"readwrite"),r=i.objectStore(on),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hf(t,e.fid),e}async function df(t){const e=Qi(t),s=(await ca()).transaction(on,"readwrite");await s.objectStore(on).delete(e),await s.done}async function Xi(t,e){const n=Qi(t),i=(await ca()).transaction(on,"readwrite"),r=i.objectStore(on),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hf(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t){let e;const n=await Xi(t.appConfig,s=>{const i=c0(s),r=l0(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===co?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function c0(t){const e=t||{fid:t0(),registrationStatus:0};return pf(e)}function l0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=u0(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h0(t)}:{installationEntry:e}}async function u0(t,e){try{const n=await Jw(t,e);return Ii(t.appConfig,n)}catch(n){throw nf(n)&&n.customData.serverCode===409?await df(t.appConfig):await Ii(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function h0(t){let e=await zc(t.appConfig);for(;e.registrationStatus===1;)await lf(100),e=await zc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await la(t);return s||n}return e}function zc(t){return Xi(t,e=>{if(!e)throw rn.create("installation-not-found");return pf(e)})}function pf(t){return f0(t)?{fid:t.fid,registrationStatus:0}:t}function f0(t){return t.registrationStatus===1&&t.registrationTime+Zh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0({appConfig:t,heartbeatServiceProvider:e},n){const s=p0(t,n),i=Ww(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ef,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await cf(()=>fetch(s,a));if(c.ok){const l=await c.json();return rf(l)}else throw await of("Generate Auth Token",c)}function p0(t,{fid:e}){return`${sf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e=!1){let n;const s=await Xi(t.appConfig,r=>{if(!gf(r))throw rn.create("not-registered");const o=r.authToken;if(!e&&y0(o))return r;if(o.requestStatus===1)return n=g0(t,e),r;{if(!navigator.onLine)throw rn.create("app-offline");const a=w0(r);return n=m0(t,a),a}});return n?await n:s.authToken}async function g0(t,e){let n=await Hc(t.appConfig);for(;n.authToken.requestStatus===1;)await lf(100),n=await Hc(t.appConfig);const s=n.authToken;return s.requestStatus===0?ua(t,e):s}function Hc(t){return Xi(t,e=>{if(!gf(e))throw rn.create("not-registered");const n=e.authToken;return _0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m0(t,e){try{const n=await d0(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ii(t.appConfig,s),n}catch(n){if(nf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await df(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ii(t.appConfig,s)}throw n}}function gf(t){return t!==void 0&&t.registrationStatus===2}function y0(t){return t.requestStatus===2&&!v0(t)}function v0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hw}function w0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _0(t){return t.requestStatus===1&&t.requestTime+Zh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t){const e=t,{installationEntry:n,registrationPromise:s}=await la(e);return s?s.catch(console.error):ua(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e=!1){const n=t;return await T0(n),(await ua(n,e)).token}async function T0(t){const{registrationPromise:e}=await la(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){if(!t||!t.options)throw br("App Configuration");if(!t.name)throw br("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw br(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function br(t){return rn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="installations",S0="installations-internal",A0=t=>{const e=t.getProvider("app").getImmediate(),n=b0(e),s=Es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},C0=t=>{const e=t.getProvider("app").getImmediate(),n=Es(e,mf).getImmediate();return{getId:()=>E0(n),getToken:i=>I0(n,i)}};function k0(){ut(new at(mf,A0,"PUBLIC")),ut(new at(S0,C0,"PRIVATE"))}k0();et(Jh,aa);et(Jh,aa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="analytics",D0="firebase_id",N0="origin",R0=60*1e3,$0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ha="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new bi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},it=new an("analytics","Analytics",M0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){if(!t.startsWith(ha)){const e=it.create("invalid-gtag-resource",{gtagURL:t});return nt.warn(e.message),""}return t}function yf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function P0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function L0(t,e){const n=P0("firebase-js-sdk-policy",{createScriptURL:O0}),s=document.createElement("script"),i=`${ha}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function x0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function F0(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const c=(await yf(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){nt.error(a)}t("config",i,r)}async function U0(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await yf(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){nt.error(r)}}function V0(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await U0(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await F0(t,e,n,s,a,c)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){nt.error(a)}}return i}function B0(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=V0(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function j0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ha)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=30,z0=1e3;class H0{constructor(e={},n=z0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vf=new H0;function K0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function G0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:K0(s)},r=$0.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Y0(t,e=vf,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw it.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw it.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new X0;return setTimeout(async()=>{a.abort()},n!==void 0?n:R0),wf({appId:s,apiKey:i,measurementId:r},o,a,e)}async function wf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=vf){var r;const{appId:o,measurementId:a}=t;try{await W0(s,e)}catch(c){if(a)return nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await G0(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Q0(l)){if(i.deleteThrottleMetadata(o),a)return nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ia(n,i.intervalMillis,q0):Ia(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),nt.debug(`Calling attemptFetch again in ${u} millis`),wf(t,h,s,i)}}function W0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(it.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q0(t){if(!(t instanceof pt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class X0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function J0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(){if(Rl())try{await $l()}catch(t){return nt.warn(it.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return nt.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function e_(t,e,n,s,i,r,o){var a;const c=Y0(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>nt.error(d)),e.push(c);const l=Z0().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([c,l]);j0(r)||L0(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[N0]="firebase",f.update=!0,h!=null&&(f[D0]=h),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},Kc=[];const Gc={};let Sr="dataLayer",n_="gtag",Yc,_f,Wc=!1;function s_(){const t=[];if(Nl()&&t.push("This is a browser extension environment."),ad()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=it.create("invalid-analytics-context",{errorInfo:e});nt.warn(n.message)}}function i_(t,e,n){s_();const s=t.options.appId;if(!s)throw it.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(ts[s]!=null)throw it.create("already-exists",{id:s});if(!Wc){x0(Sr);const{wrappedGtag:r,gtagCore:o}=B0(ts,Kc,Gc,Sr,n_);_f=r,Yc=o,Wc=!0}return ts[s]=e_(t,Kc,Gc,e,Yc,Sr,n),new t_(t)}function r_(t=xl()){t=jt(t);const e=Es(t,Ti);return e.isInitialized()?e.getImmediate():o_(t)}function o_(t,e={}){const n=Es(t,Ti);if(n.isInitialized()){const i=n.getImmediate();if(ii(e,n.getOptions()))return i;throw it.create("already-initialized")}return n.initialize({options:e})}function Ef(t,e,n,s){t=jt(t),J0(_f,ts[t.app.options.appId],e,n,s).catch(i=>nt.error(i))}const Qc="@firebase/analytics",Xc="0.10.0";function a_(){ut(new at(Ti,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return i_(s,i,n)},"PUBLIC")),ut(new at("analytics-internal",t,"PRIVATE")),et(Qc,Xc),et(Qc,Xc,"esm2017");function t(e){try{const n=e.getProvider(Ti).getImmediate();return{logEvent:(s,i,r)=>Ef(n,s,i,r)}}catch(n){throw it.create("interop-component-reg-failed",{reason:n})}}}a_();function Jc(t){let e,n;return{c(){e=T("span"),n=Y(t[1]),E(e,"class","svelte-utgky1")},m(s,i){ne(s,e,i),p(e,n)},p(s,i){i&2&&he(n,s[1])},d(s){s&&ee(e)}}}function c_(t){let e,n,s,i,r,o,a,c,l=t[1]&&Jc(t);const u=t[3].default,h=Rf(u,t,t[2],null);return{c(){e=T("section"),n=T("header"),s=T("strong"),i=Y(t[0]),r=V(),l&&l.c(),o=V(),a=T("article"),h&&h.c(),E(n,"class","svelte-utgky1"),E(a,"class","svelte-utgky1"),E(e,"class","svelte-utgky1")},m(f,d){ne(f,e,d),p(e,n),p(n,s),p(s,i),p(n,r),l&&l.m(n,null),p(e,o),p(e,a),h&&h.m(a,null),c=!0},p(f,[d]){(!c||d&1)&&he(i,f[0]),f[1]?l?l.p(f,d):(l=Jc(f),l.c(),l.m(n,null)):l&&(l.d(1),l=null),h&&h.p&&(!c||d&4)&&Mf(h,u,f,f[2],c?$f(u,f[2],d,null):Of(f[2]),null)},i(f){c||(ue(h,f),c=!0)},o(f){_e(h,f),c=!1},d(f){f&&ee(e),l&&l.d(),h&&h.d(f)}}}function l_(t,e,n){let{$$slots:s={},$$scope:i}=e,{header:r}=e,{subHeader:o=""}=e;return t.$$set=a=>{"header"in a&&n(0,r=a.header),"subHeader"in a&&n(1,o=a.subHeader),"$$scope"in a&&n(2,i=a.$$scope)},[r,o,i,s]}class fn extends dt{constructor(e){super(),ft(this,e,l_,c_,ct,{header:0,subHeader:1})}}function Zc(t,e,n){const s=t.slice();return s[1]=e[n],s}function el(t){let e,n=t[1]+"",s;return{c(){e=T("li"),s=Y(n),E(e,"class","svelte-1axfeen")},m(i,r){ne(i,e,r),p(e,s)},p(i,r){r&1&&n!==(n=i[1]+"")&&he(s,n)},d(i){i&&ee(e)}}}function u_(t){let e,n=Re(t[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=el(Zc(t,n,i));return{c(){e=T("ul");for(let i=0;i<s.length;i+=1)s[i].c();E(e,"class","tags svelte-1axfeen")},m(i,r){ne(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&1){n=Re(i[0]);let o;for(o=0;o<n.length;o+=1){const a=Zc(i,n,o);s[o]?s[o].p(a,r):(s[o]=el(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Ie,o:Ie,d(i){i&&ee(e),Rt(s,i)}}}function h_(t,e,n){let{items:s}=e;return t.$$set=i=>{"items"in i&&n(0,s=i.items)},[s]}class f_ extends dt{constructor(e){super(),ft(this,e,h_,u_,ct,{items:0})}}var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function da(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var If={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(fa,function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",f="quarter",d="year",v="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(M){var C=["th","st","nd","rd"],b=M%100;return"["+M+(C[(b-20)%10]||C[b]||C[0])+"]"}},N=function(M,C,b){var L=String(M);return!L||L.length>=C?M:""+Array(C+1-L.length).join(b)+M},y={s:N,z:function(M){var C=-M.utcOffset(),b=Math.abs(C),L=Math.floor(b/60),S=b%60;return(C<=0?"+":"-")+N(L,2,"0")+":"+N(S,2,"0")},m:function M(C,b){if(C.date()<b.date())return-M(b,C);var L=12*(b.year()-C.year())+(b.month()-C.month()),S=C.clone().add(L,h),F=b-S<0,x=C.clone().add(L+(F?-1:1),h);return+(-(L+(b-S)/(F?S-x:x-S))||0)},a:function(M){return M<0?Math.ceil(M)||0:Math.floor(M)},p:function(M){return{M:h,y:d,w:u,d:l,D:v,h:c,m:a,s:o,ms:r,Q:f}[M]||String(M||"").toLowerCase().replace(/s$/,"")},u:function(M){return M===void 0}},I="en",k={};k[I]=D;var _="$isDayjsObject",w=function(M){return M instanceof H||!(!M||!M[_])},B=function M(C,b,L){var S;if(!C)return I;if(typeof C=="string"){var F=C.toLowerCase();k[F]&&(S=F),b&&(k[F]=b,S=F);var x=C.split("-");if(!S&&x.length>1)return M(x[0])}else{var G=C.name;k[G]=C,S=G}return!L&&S&&(I=S),S||!L&&I},U=function(M,C){if(w(M))return M.clone();var b=typeof C=="object"?C:{};return b.date=M,b.args=arguments,new H(b)},$=y;$.l=B,$.i=w,$.w=function(M,C){return U(M,{locale:C.$L,utc:C.$u,x:C.$x,$offset:C.$offset})};var H=function(){function M(b){this.$L=B(b.locale,null,!0),this.parse(b),this.$x=this.$x||b.x||{},this[_]=!0}var C=M.prototype;return C.parse=function(b){this.$d=function(L){var S=L.date,F=L.utc;if(S===null)return new Date(NaN);if($.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var x=S.match(m);if(x){var G=x[2]-1||0,ce=(x[7]||"0").substring(0,3);return F?new Date(Date.UTC(x[1],G,x[3]||1,x[4]||0,x[5]||0,x[6]||0,ce)):new Date(x[1],G,x[3]||1,x[4]||0,x[5]||0,x[6]||0,ce)}}return new Date(S)}(b),this.init()},C.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},C.$utils=function(){return $},C.isValid=function(){return this.$d.toString()!==g},C.isSame=function(b,L){var S=U(b);return this.startOf(L)<=S&&S<=this.endOf(L)},C.isAfter=function(b,L){return U(b)<this.startOf(L)},C.isBefore=function(b,L){return this.endOf(L)<U(b)},C.$g=function(b,L,S){return $.u(b)?this[L]:this.set(S,b)},C.unix=function(){return Math.floor(this.valueOf()/1e3)},C.valueOf=function(){return this.$d.getTime()},C.startOf=function(b,L){var S=this,F=!!$.u(L)||L,x=$.p(b),G=function(te,ie){var re=$.w(S.$u?Date.UTC(S.$y,ie,te):new Date(S.$y,ie,te),S);return F?re:re.endOf(l)},ce=function(te,ie){return $.w(S.toDate()[te].apply(S.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(ie)),S)},ge=this.$W,X=this.$M,de=this.$D,me="set"+(this.$u?"UTC":"");switch(x){case d:return F?G(1,0):G(31,11);case h:return F?G(1,X):G(0,X+1);case u:var se=this.$locale().weekStart||0,J=(ge<se?ge+7:ge)-se;return G(F?de-J:de+(6-J),X);case l:case v:return ce(me+"Hours",0);case c:return ce(me+"Minutes",1);case a:return ce(me+"Seconds",2);case o:return ce(me+"Milliseconds",3);default:return this.clone()}},C.endOf=function(b){return this.startOf(b,!1)},C.$set=function(b,L){var S,F=$.p(b),x="set"+(this.$u?"UTC":""),G=(S={},S[l]=x+"Date",S[v]=x+"Date",S[h]=x+"Month",S[d]=x+"FullYear",S[c]=x+"Hours",S[a]=x+"Minutes",S[o]=x+"Seconds",S[r]=x+"Milliseconds",S)[F],ce=F===l?this.$D+(L-this.$W):L;if(F===h||F===d){var ge=this.clone().set(v,1);ge.$d[G](ce),ge.init(),this.$d=ge.set(v,Math.min(this.$D,ge.daysInMonth())).$d}else G&&this.$d[G](ce);return this.init(),this},C.set=function(b,L){return this.clone().$set(b,L)},C.get=function(b){return this[$.p(b)]()},C.add=function(b,L){var S,F=this;b=Number(b);var x=$.p(L),G=function(X){var de=U(F);return $.w(de.date(de.date()+Math.round(X*b)),F)};if(x===h)return this.set(h,this.$M+b);if(x===d)return this.set(d,this.$y+b);if(x===l)return G(1);if(x===u)return G(7);var ce=(S={},S[a]=s,S[c]=i,S[o]=n,S)[x]||1,ge=this.$d.getTime()+b*ce;return $.w(ge,this)},C.subtract=function(b,L){return this.add(-1*b,L)},C.format=function(b){var L=this,S=this.$locale();if(!this.isValid())return S.invalidDate||g;var F=b||"YYYY-MM-DDTHH:mm:ssZ",x=$.z(this),G=this.$H,ce=this.$m,ge=this.$M,X=S.weekdays,de=S.months,me=S.meridiem,se=function(ie,re,We,st){return ie&&(ie[re]||ie(L,F))||We[re].slice(0,st)},J=function(ie){return $.s(G%12||12,ie,"0")},te=me||function(ie,re,We){var st=ie<12?"AM":"PM";return We?st.toLowerCase():st};return F.replace(R,function(ie,re){return re||function(We){switch(We){case"YY":return String(L.$y).slice(-2);case"YYYY":return $.s(L.$y,4,"0");case"M":return ge+1;case"MM":return $.s(ge+1,2,"0");case"MMM":return se(S.monthsShort,ge,de,3);case"MMMM":return se(de,ge);case"D":return L.$D;case"DD":return $.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return se(S.weekdaysMin,L.$W,X,2);case"ddd":return se(S.weekdaysShort,L.$W,X,3);case"dddd":return X[L.$W];case"H":return String(G);case"HH":return $.s(G,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return te(G,ce,!0);case"A":return te(G,ce,!1);case"m":return String(ce);case"mm":return $.s(ce,2,"0");case"s":return String(L.$s);case"ss":return $.s(L.$s,2,"0");case"SSS":return $.s(L.$ms,3,"0");case"Z":return x}return null}(ie)||x.replace(":","")})},C.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},C.diff=function(b,L,S){var F,x=this,G=$.p(L),ce=U(b),ge=(ce.utcOffset()-this.utcOffset())*s,X=this-ce,de=function(){return $.m(x,ce)};switch(G){case d:F=de()/12;break;case h:F=de();break;case f:F=de()/3;break;case u:F=(X-ge)/6048e5;break;case l:F=(X-ge)/864e5;break;case c:F=X/i;break;case a:F=X/s;break;case o:F=X/n;break;default:F=X}return S?F:$.a(F)},C.daysInMonth=function(){return this.endOf(h).$D},C.$locale=function(){return k[this.$L]},C.locale=function(b,L){if(!b)return this.$L;var S=this.clone(),F=B(b,L,!0);return F&&(S.$L=F),S},C.clone=function(){return $.w(this.$d,this)},C.toDate=function(){return new Date(this.valueOf())},C.toJSON=function(){return this.isValid()?this.toISOString():null},C.toISOString=function(){return this.$d.toISOString()},C.toString=function(){return this.$d.toUTCString()},M}(),Q=H.prototype;return U.prototype=Q,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",d],["$D",v]].forEach(function(M){Q[M[1]]=function(C){return this.$g(C,M[0],M[1])}}),U.extend=function(M,C){return M.$i||(M(C,H,U),M.$i=!0),U},U.locale=B,U.isDayjs=w,U.unix=function(M){return U(1e3*M)},U.en=k[I],U.Ls=k,U.p={},U})})(If);var d_=If.exports;const _t=da(d_);function tl(t,e,n){const s=t.slice();return s[6]=e[n],s}function nl(t){let e,n,s,i,r,o=t[6].label+"",a,c,l,u,h,f,d=t[6].type+"",v,g,m,R,D=t[6].url+"",N,y;return{c(){e=T("li"),n=T("i"),i=V(),r=T("a"),a=Y(o),c=V(),l=T("i"),h=V(),f=T("strong"),v=Y(d),g=Y(":"),m=V(),R=T("span"),N=Y(D),y=V(),E(n,"class",s=ni(t[6].icon)+" svelte-1oqteb6"),An(n,"no-print",!0),E(l,"class","fas fa-up-right-from-square svelte-1oqteb6"),E(r,"href",u=t[6].url),E(r,"target","_blank"),E(r,"class","no-print"),E(f,"class","print"),E(R,"class","print")},m(I,k){ne(I,e,k),p(e,n),p(e,i),p(e,r),p(r,a),p(r,c),p(r,l),p(e,h),p(e,f),p(f,v),p(f,g),p(e,m),p(e,R),p(R,N),p(e,y)},p(I,k){k&1&&s!==(s=ni(I[6].icon)+" svelte-1oqteb6")&&E(n,"class",s),k&1&&An(n,"no-print",!0),k&1&&o!==(o=I[6].label+"")&&he(a,o),k&1&&u!==(u=I[6].url)&&E(r,"href",u),k&1&&d!==(d=I[6].type+"")&&he(v,d),k&1&&D!==(D=I[6].url+"")&&he(N,D)},d(I){I&&ee(e)}}}function p_(t){let e,n,s,i=t[0].name+"",r,o,a,c,l,u,h,f,d,v,g=t[0].birthday+"",m,R,D,N,y,I,k,_,w,B,U=t[0].currentLocation+"",$,H,Q,M,C,b,L,S,F=t[0].email+"",x,G,ce,ge,X,de,me,se=Re(t[0].contacts),J=[];for(let te=0;te<se.length;te+=1)J[te]=nl(tl(t,se,te));return{c(){e=T("section"),n=T("header"),s=T("strong"),r=Y(i),o=V(),a=T("article"),c=T("ul"),l=T("li"),u=T("i"),h=V(),f=T("strong"),f.textContent="Birthday:",d=V(),v=T("time"),m=Y(g),R=V(),D=T("span"),D.textContent=`(${t[2]} y.o.)`,N=V(),y=T("li"),I=T("i"),k=V(),_=T("strong"),_.textContent="Current Location:",w=V(),B=T("span"),$=Y(U),H=V(),Q=T("li"),M=T("i"),C=V(),b=T("strong"),b.textContent="E-mail:",L=V(),S=T("a"),x=Y(F),ce=V();for(let te=0;te<J.length;te+=1)J[te].c();ge=V(),X=T("img"),E(n,"class","svelte-1oqteb6"),E(u,"class","fas fa-birthday-cake no-print svelte-1oqteb6"),E(f,"class","print"),E(v,"datetime",t[1]),E(I,"class","fas fa-map-marker-alt no-print svelte-1oqteb6"),E(_,"class","print"),E(M,"class","far fa-envelope no-print svelte-1oqteb6"),E(b,"class","print"),E(S,"href",G="mailto:"+t[0].email),E(c,"class","svelte-1oqteb6"),ma(X.src,de=t[0].pictureUrl)||E(X,"src",de),E(X,"alt",me=t[0].name),E(X,"width","128px"),E(X,"height","128px"),E(X,"class","svelte-1oqteb6"),E(a,"class","svelte-1oqteb6"),E(e,"class","container")},m(te,ie){ne(te,e,ie),p(e,n),p(n,s),p(s,r),p(e,o),p(e,a),p(a,c),p(c,l),p(l,u),p(l,h),p(l,f),p(l,d),p(l,v),p(v,m),p(l,R),p(l,D),p(c,N),p(c,y),p(y,I),p(y,k),p(y,_),p(y,w),p(y,B),p(B,$),p(c,H),p(c,Q),p(Q,M),p(Q,C),p(Q,b),p(Q,L),p(Q,S),p(S,x),p(c,ce);for(let re=0;re<J.length;re+=1)J[re]&&J[re].m(c,null);p(a,ge),p(a,X)},p(te,[ie]){if(ie&1&&i!==(i=te[0].name+"")&&he(r,i),ie&1&&g!==(g=te[0].birthday+"")&&he(m,g),ie&1&&U!==(U=te[0].currentLocation+"")&&he($,U),ie&1&&F!==(F=te[0].email+"")&&he(x,F),ie&1&&G!==(G="mailto:"+te[0].email)&&E(S,"href",G),ie&1){se=Re(te[0].contacts);let re;for(re=0;re<se.length;re+=1){const We=tl(te,se,re);J[re]?J[re].p(We,ie):(J[re]=nl(We),J[re].c(),J[re].m(c,null))}for(;re<J.length;re+=1)J[re].d(1);J.length=se.length}ie&1&&!ma(X.src,de=te[0].pictureUrl)&&E(X,"src",de),ie&1&&me!==(me=te[0].name)&&E(X,"alt",me)},i:Ie,o:Ie,d(te){te&&ee(e),Rt(J,te)}}}function g_(t,e,n){let{data:s}=e;const i=_t(s.birthday,"DD.MM.YYYY"),r=i.format("YYYY-MM-DD"),o=_t().diff(i),a=_t.duration(o),c=Math.floor(a.asYears());return t.$$set=l=>{"data"in l&&n(0,s=l.data)},[s,r,c]}class m_ extends dt{constructor(e){super(),ft(this,e,g_,p_,ct,{data:0})}}function y_(t){let e,n,s,i;return{c(){e=T("div"),n=T("button"),n.innerHTML='<i class="fas fa-print"></i> <span class="svelte-mhvmh5">Printable Version</span>',E(n,"type","button"),E(n,"class","svelte-mhvmh5"),E(e,"class","no-print svelte-mhvmh5")},m(r,o){ne(r,e,o),p(e,n),s||(i=Lf(n,"click",t[0]),s=!0)},p:Ie,i:Ie,o:Ie,d(r){r&&ee(e),s=!1,i()}}}function v_(t){return[()=>print()]}class w_ extends dt{constructor(e){super(),ft(this,e,v_,y_,ct,{})}}function sl(t,e,n){const s=t.slice();s[2]=e[n];const i=s[1](s[2].start);s[3]=i;const r=s[1](s[2].end);s[4]=r;const o=rl(s[3]);s[5]=o;const a=rl(s[4]);return s[6]=a,s}function __(t){let e=t[2].place+"",n;return{c(){n=Y(e)},m(s,i){ne(s,n,i)},p(s,i){i&1&&e!==(e=s[2].place+"")&&he(n,e)},d(s){s&&ee(n)}}}function E_(t){let e,n=t[2].place+"",s,i,r,o,a,c,l=t[2].url+"",u,h;return{c(){e=T("a"),s=Y(n),i=T("i"),o=V(),a=T("span"),c=Y("("),u=Y(l),h=Y(")"),E(i,"class","fas fa-up-right-from-square no-print"),E(e,"href",r=t[2].url),E(e,"target","_blank"),E(a,"class","print")},m(f,d){ne(f,e,d),p(e,s),p(e,i),ne(f,o,d),ne(f,a,d),p(a,c),p(a,u),p(a,h)},p(f,d){d&1&&n!==(n=f[2].place+"")&&he(s,n),d&1&&r!==(r=f[2].url)&&E(e,"href",r),d&1&&l!==(l=f[2].url+"")&&he(u,l)},d(f){f&&(ee(e),ee(o),ee(a))}}}function il(t){let e,n,s,i,r,o,a,c,l=t[2].start+"",u,h,f,d,v=(t[2].end??"Present")+"",g,m,R,D,N,y,I,k,_=t[2].location+"",w,B,U,$,H=t[2].specialization+"",Q,M,C=t[2].degree+"",b,L,S,F,x,G,ce,ge;function X(se,J){return se[2].url?E_:__}let de=X(t),me=de(t);return{c(){e=T("section"),n=T("header"),s=T("span"),i=T("strong"),i.textContent="Time Period:",r=V(),o=T("i"),a=V(),c=T("time"),u=Y(l),f=V(),d=T("time"),g=Y(v),R=V(),D=T("span"),N=T("strong"),N.textContent="Location:",y=V(),I=T("i"),k=V(),w=Y(_),B=V(),U=T("article"),$=T("strong"),Q=Y(H),M=Y(" | "),b=Y(C),L=Y("'s degree"),S=V(),F=T("footer"),x=T("strong"),G=T("span"),G.textContent="at",ce=V(),me.c(),ge=V(),E(i,"class","print"),E(o,"class","far fa-calendar-alt no-print"),E(c,"datetime",h=t[5]),E(d,"datetime",m=t[6]),E(s,"class","svelte-1nbs3r9"),E(N,"class","print"),E(I,"class","fas fa-map-marker-alt no-print"),E(D,"class","svelte-1nbs3r9"),E(n,"class","svelte-1nbs3r9"),E(U,"class","svelte-1nbs3r9"),E(e,"class","svelte-1nbs3r9")},m(se,J){ne(se,e,J),p(e,n),p(n,s),p(s,i),p(s,r),p(s,o),p(s,a),p(s,c),p(c,u),p(s,f),p(s,d),p(d,g),p(n,R),p(n,D),p(D,N),p(D,y),p(D,I),p(D,k),p(D,w),p(e,B),p(e,U),p(U,$),p($,Q),p($,M),p($,b),p($,L),p(e,S),p(e,F),p(F,x),p(x,G),p(x,ce),me.m(x,null),p(e,ge)},p(se,J){J&1&&l!==(l=se[2].start+"")&&he(u,l),J&1&&h!==(h=se[5])&&E(c,"datetime",h),J&1&&v!==(v=(se[2].end??"Present")+"")&&he(g,v),J&1&&m!==(m=se[6])&&E(d,"datetime",m),J&1&&_!==(_=se[2].location+"")&&he(w,_),J&1&&H!==(H=se[2].specialization+"")&&he(Q,H),J&1&&C!==(C=se[2].degree+"")&&he(b,C),de===(de=X(se))&&me?me.p(se,J):(me.d(1),me=de(se),me&&(me.c(),me.m(x,null)))},d(se){se&&ee(e),me.d()}}}function I_(t){let e,n=Re(t[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=il(sl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=On()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);ne(i,e,r)},p(i,[r]){if(r&3){n=Re(i[0]);let o;for(o=0;o<n.length;o+=1){const a=sl(i,n,o);s[o]?s[o].p(a,r):(s[o]=il(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Ie,o:Ie,d(i){i&&ee(e),Rt(s,i)}}}function rl(t){return t.format("YYYY")}function T_(t,e,n){let{items:s}=e;function i(r){return r?_t(r,["YYYY"]):_t()}return t.$$set=r=>{"items"in r&&n(0,s=r.items)},[s,i]}class b_ extends dt{constructor(e){super(),ft(this,e,T_,I_,ct,{items:0})}}function ol(t,e,n){const s=t.slice();s[4]=e[n];const i=s[1](s[4].start);s[5]=i;const r=s[1](s[4].end);s[6]=r;const o=ul(s[5]);s[7]=o;const a=ul(s[6]);s[8]=a;const c=s[2](s[5],s[6]);return s[9]=c,s}function al(t,e,n){const s=t.slice();return s[12]=e[n],s}function S_(t){let e=t[4].company+"",n;return{c(){n=Y(e)},m(s,i){ne(s,n,i)},p(s,i){i&1&&e!==(e=s[4].company+"")&&he(n,e)},d(s){s&&ee(n)}}}function A_(t){let e,n=t[4].company+"",s,i,r,o,a,c,l=t[4].url+"",u,h;return{c(){e=T("a"),s=Y(n),i=T("i"),o=V(),a=T("span"),c=Y("("),u=Y(l),h=Y(")"),E(i,"class","fas fa-up-right-from-square no-print"),E(e,"href",r=t[4].url),E(e,"target","_blank"),E(a,"class","print")},m(f,d){ne(f,e,d),p(e,s),p(e,i),ne(f,o,d),ne(f,a,d),p(a,c),p(a,u),p(a,h)},p(f,d){d&1&&n!==(n=f[4].company+"")&&he(s,n),d&1&&r!==(r=f[4].url)&&E(e,"href",r),d&1&&l!==(l=f[4].url+"")&&he(u,l)},d(f){f&&(ee(e),ee(o),ee(a))}}}function cl(t){let e,n=t[12]+"",s;return{c(){e=T("li"),s=Y(n)},m(i,r){ne(i,e,r),p(e,s)},p(i,r){r&1&&n!==(n=i[12]+"")&&he(s,n)},d(i){i&&ee(e)}}}function ll(t){let e,n,s,i,r,o,a,c,l=t[4].start+"",u,h,f,d,v=(t[4].end??"Present")+"",g,m,R,D,N,y=t[9]+"",I,k,_,w,B,U,$,H,Q=t[4].location+"",M,C,b,L=t[4].position+"",S,F,x,G,ce,ge,X,de,me=t[4].about+"",se,J,te,ie,re;function We(ye,Je){return ye[4].url?A_:S_}let st=We(t),Xe=st(t),gt=Re(t[4].responsibilities),Ve=[];for(let ye=0;ye<gt.length;ye+=1)Ve[ye]=cl(al(t,gt,ye));return{c(){e=T("section"),n=T("header"),s=T("span"),i=T("strong"),i.textContent="Time Period:",r=V(),o=T("i"),a=V(),c=T("time"),u=Y(l),f=V(),d=T("time"),g=Y(v),R=V(),D=T("span"),N=Y("("),I=Y(y),k=Y(")"),_=V(),w=T("span"),B=T("strong"),B.textContent="Location:",U=V(),$=T("i"),H=V(),M=Y(Q),C=V(),b=T("h3"),S=Y(L),F=V(),x=T("strong"),G=T("span"),G.textContent="at",ce=V(),Xe.c(),ge=V(),X=T("article"),de=T("div"),se=V(),J=T("strong"),J.textContent="Responsibilities:",te=V(),ie=T("ul");for(let ye=0;ye<Ve.length;ye+=1)Ve[ye].c();re=V(),E(i,"class","print"),E(o,"class","far fa-calendar-alt no-print"),E(c,"datetime",h=t[7]),E(d,"datetime",m=t[8]),E(D,"class","svelte-rejovm"),E(s,"class","svelte-rejovm"),E(B,"class","print"),E($,"class","fas fa-map-marker-alt no-print"),E(w,"class","svelte-rejovm"),E(n,"class","svelte-rejovm"),E(b,"class","svelte-rejovm"),E(de,"class","svelte-rejovm"),E(ie,"class","svelte-rejovm"),E(X,"class","svelte-rejovm"),E(e,"class","svelte-rejovm")},m(ye,Je){ne(ye,e,Je),p(e,n),p(n,s),p(s,i),p(s,r),p(s,o),p(s,a),p(s,c),p(c,u),p(s,f),p(s,d),p(d,g),p(s,R),p(s,D),p(D,N),p(D,I),p(D,k),p(n,_),p(n,w),p(w,B),p(w,U),p(w,$),p(w,H),p(w,M),p(e,C),p(e,b),p(b,S),p(e,F),p(e,x),p(x,G),p(x,ce),Xe.m(x,null),p(e,ge),p(e,X),p(X,de),de.innerHTML=me,p(X,se),p(X,J),p(X,te),p(X,ie);for(let Oe=0;Oe<Ve.length;Oe+=1)Ve[Oe]&&Ve[Oe].m(ie,null);p(e,re)},p(ye,Je){if(Je&1&&l!==(l=ye[4].start+"")&&he(u,l),Je&1&&h!==(h=ye[7])&&E(c,"datetime",h),Je&1&&v!==(v=(ye[4].end??"Present")+"")&&he(g,v),Je&1&&m!==(m=ye[8])&&E(d,"datetime",m),Je&1&&y!==(y=ye[9]+"")&&he(I,y),Je&1&&Q!==(Q=ye[4].location+"")&&he(M,Q),Je&1&&L!==(L=ye[4].position+"")&&he(S,L),st===(st=We(ye))&&Xe?Xe.p(ye,Je):(Xe.d(1),Xe=st(ye),Xe&&(Xe.c(),Xe.m(x,null))),Je&1&&me!==(me=ye[4].about+"")&&(de.innerHTML=me),Je&1){gt=Re(ye[4].responsibilities);let Oe;for(Oe=0;Oe<gt.length;Oe+=1){const pa=al(ye,gt,Oe);Ve[Oe]?Ve[Oe].p(pa,Je):(Ve[Oe]=cl(pa),Ve[Oe].c(),Ve[Oe].m(ie,null))}for(;Oe<Ve.length;Oe+=1)Ve[Oe].d(1);Ve.length=gt.length}},d(ye){ye&&ee(e),Xe.d(),Rt(Ve,ye)}}}function C_(t){let e,n=Re(t[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=ll(ol(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=On()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);ne(i,e,r)},p(i,[r]){if(r&7){n=Re(i[0]);let o;for(o=0;o<n.length;o+=1){const a=ol(i,n,o);s[o]?s[o].p(a,r):(s[o]=ll(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Ie,o:Ie,d(i){i&&ee(e),Rt(s,i)}}}function ul(t){return t.format("YYYY-MM")}function k_(t,e,n){let{items:s}=e,{yoe:i}=e;i.set(0);function r(a){return a?_t(a,["MM.YYYY","YYYY"]):_t()}function o(a,c){const l=c.diff(a),u=_t.duration(l),h=u.asYears();i.update(R=>R+h);const f=Math.floor(h),d=h-f;let v,g,m;return f?(v=f,g=v.toString(),m="year",d>1/12&&(g+="+")):(v=Math.floor(u.asMonths()),g=v.toString(),m="month"),v>1&&(m+="s"),`${g} ${m}`}return t.$$set=a=>{"items"in a&&n(0,s=a.items),"yoe"in a&&n(3,i=a.yoe)},[s,r,o,i]}class D_ extends dt{constructor(e){super(),ft(this,e,k_,C_,ct,{items:0,yoe:3})}}function hl(t,e,n){const s=t.slice();return s[1]=e[n],s}function fl(t,e,n){const s=t.slice();return s[4]=e[n],s}function dl(t){let e,n;return{c(){e=T("i"),E(e,"class",n=ni(t[4])+" svelte-1gvv79l")},m(s,i){ne(s,e,i)},p(s,i){i&1&&n!==(n=ni(s[4])+" svelte-1gvv79l")&&E(e,"class",n)},d(s){s&&ee(e)}}}function pl(t){let e,n;return e=new Tf({props:{items:t[1].items}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&1&&(r.items=s[1].items),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function gl(t){let e,n,s,i=t[1].label+"",r,o,a,c,l,u,h,f,d=t[1].level+"",v,g,m,R,D=Re(ml(t[1])),N=[];for(let I=0;I<D.length;I+=1)N[I]=dl(fl(t,D,I));let y=t[1].items&&pl(t);return{c(){e=T("li"),n=T("div"),s=T("span"),r=Y(i),o=V(),a=T("span"),c=V(),l=T("span");for(let I=0;I<N.length;I+=1)N[I].c();h=V(),f=T("strong"),v=Y(d),g=V(),y&&y.c(),m=On(),E(s,"class","label"),E(a,"class","dots svelte-1gvv79l"),E(l,"class","stars no-print svelte-1gvv79l"),E(l,"title",u=t[1].level),E(f,"class","print"),E(n,"class","wrapper svelte-1gvv79l"),E(e,"class","svelte-1gvv79l")},m(I,k){ne(I,e,k),p(e,n),p(n,s),p(s,r),p(n,o),p(n,a),p(n,c),p(n,l);for(let _=0;_<N.length;_+=1)N[_]&&N[_].m(l,null);p(n,h),p(n,f),p(f,v),ne(I,g,k),y&&y.m(I,k),ne(I,m,k),R=!0},p(I,k){if((!R||k&1)&&i!==(i=I[1].label+"")&&he(r,i),k&1){D=Re(ml(I[1]));let _;for(_=0;_<D.length;_+=1){const w=fl(I,D,_);N[_]?N[_].p(w,k):(N[_]=dl(w),N[_].c(),N[_].m(l,null))}for(;_<N.length;_+=1)N[_].d(1);N.length=D.length}(!R||k&1&&u!==(u=I[1].level))&&E(l,"title",u),(!R||k&1)&&d!==(d=I[1].level+"")&&he(v,d),I[1].items?y?(y.p(I,k),k&1&&ue(y,1)):(y=pl(I),y.c(),ue(y,1),y.m(m.parentNode,m)):y&&(ws(),_e(y,1,1,()=>{y=null}),_s())},i(I){R||(ue(y),R=!0)},o(I){_e(y),R=!1},d(I){I&&(ee(e),ee(g),ee(m)),Rt(N,I),y&&y.d(I)}}}function N_(t){let e,n,s=Re(t[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=gl(hl(t,s,o));const r=o=>_e(i[o],1,1,()=>{i[o]=null});return{c(){e=T("ul");for(let o=0;o<i.length;o+=1)i[o].c();E(e,"class","svelte-1gvv79l")},m(o,a){ne(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=Re(o[0]);let c;for(c=0;c<s.length;c+=1){const l=hl(o,s,c);i[c]?(i[c].p(l,a),ue(i[c],1)):(i[c]=gl(l),i[c].c(),ue(i[c],1),i[c].m(e,null))}for(ws(),c=s.length;c<i.length;c+=1)r(c);_s()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)ue(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)_e(i[a]);n=!1},d(o){o&&ee(e),Rt(i,o)}}}function ml(t){const e=new Array(5);let n=t.stars;for(let s=0;s<5;s++)n>=1?(e[s]="fas fa-star",n--):n>0&&n<1?(e[s]="fas fa-star-half-alt",n=0):e[s]="far fa-star";return e}function R_(t,e,n){let{items:s}=e;return t.$$set=i=>{"items"in i&&n(0,s=i.items)},[s]}class Tf extends dt{constructor(e){super(),ft(this,e,R_,N_,ct,{items:0})}}function yl(t,e,n){const s=t.slice();return s[1]=e[n],s}function vl(t){let e,n;return e=new Tf({props:{items:t[1].items}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&1&&(r.items=s[1].items),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function wl(t){let e,n,s,i,r,o,a=t[1].label+"",c,l,u,h,f,d=t[1].items&&vl(t);return{c(){e=T("section"),n=T("header"),s=T("i"),r=V(),o=T("span"),c=Y(a),l=V(),u=T("article"),d&&d.c(),h=V(),E(s,"class",i=t[1].icon),An(s,"no-print",!0),E(o,"class","svelte-m9ng5g"),E(n,"class","svelte-m9ng5g"),E(e,"class","svelte-m9ng5g")},m(v,g){ne(v,e,g),p(e,n),p(n,s),p(n,r),p(n,o),p(o,c),p(e,l),p(e,u),d&&d.m(u,null),p(e,h),f=!0},p(v,g){(!f||g&1&&i!==(i=v[1].icon))&&E(s,"class",i),(!f||g&1)&&An(s,"no-print",!0),(!f||g&1)&&a!==(a=v[1].label+"")&&he(c,a),v[1].items?d?(d.p(v,g),g&1&&ue(d,1)):(d=vl(v),d.c(),ue(d,1),d.m(u,null)):d&&(ws(),_e(d,1,1,()=>{d=null}),_s())},i(v){f||(ue(d),f=!0)},o(v){_e(d),f=!1},d(v){v&&ee(e),d&&d.d()}}}function $_(t){let e,n,s=Re(t[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=wl(yl(t,s,o));const r=o=>_e(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=On()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);ne(o,e,a),n=!0},p(o,[a]){if(a&1){s=Re(o[0]);let c;for(c=0;c<s.length;c+=1){const l=yl(o,s,c);i[c]?(i[c].p(l,a),ue(i[c],1)):(i[c]=wl(l),i[c].c(),ue(i[c],1),i[c].m(e.parentNode,e))}for(ws(),c=s.length;c<i.length;c+=1)r(c);_s()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)ue(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)_e(i[a]);n=!1},d(o){o&&ee(e),Rt(i,o)}}}function M_(t,e,n){let{items:s}=e;return t.$$set=i=>{"items"in i&&n(0,s=i.items)},[s]}class O_ extends dt{constructor(e){super(),ft(this,e,M_,$_,ct,{items:0})}}function _l(t,e,n){const s=t.slice();return s[1]=e[n],s}function El(t){let e,n,s,i,r,o=t[1].label+"",a,c;return{c(){e=T("li"),n=T("i"),i=V(),r=T("span"),a=Y(o),c=V(),E(n,"class",s=t[1].icon),An(n,"no-print",!0),E(e,"class","svelte-1axfeen")},m(l,u){ne(l,e,u),p(e,n),p(e,i),p(e,r),p(r,a),p(e,c)},p(l,u){u&1&&s!==(s=l[1].icon)&&E(n,"class",s),u&1&&An(n,"no-print",!0),u&1&&o!==(o=l[1].label+"")&&he(a,o)},d(l){l&&ee(e)}}}function P_(t){let e,n=Re(t[0]),s=[];for(let i=0;i<n.length;i+=1)s[i]=El(_l(t,n,i));return{c(){e=T("ul");for(let i=0;i<s.length;i+=1)s[i].c();E(e,"class","svelte-1axfeen")},m(i,r){ne(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&1){n=Re(i[0]);let o;for(o=0;o<n.length;o+=1){const a=_l(i,n,o);s[o]?s[o].p(a,r):(s[o]=El(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Ie,o:Ie,d(i){i&&ee(e),Rt(s,i)}}}function L_(t,e,n){let{items:s}=e;return t.$$set=i=>{"items"in i&&n(0,s=i.items)},[s]}class x_ extends dt{constructor(e){super(),ft(this,e,L_,P_,ct,{items:0})}}function F_(t){let e,n,s,i,r;return{c(){e=T("p"),n=Y("Fetching data"),s=Y(t[0]),i=V(),r=T("p"),r.textContent="It may take some time",E(e,"class","svelte-sdyy4m"),E(r,"class","svelte-sdyy4m")},m(o,a){ne(o,e,a),p(e,n),p(e,s),ne(o,i,a),ne(o,r,a)},p(o,[a]){a&1&&he(s,o[0])},i:Ie,o:Ie,d(o){o&&(ee(e),ee(i),ee(r))}}}function U_(t,e,n){let s="...";return Vf(()=>{const i=setInterval(()=>{n(0,s=s.length<3?s+".":"")},500);return()=>clearInterval(i)}),[s]}class V_ extends dt{constructor(e){super(),ft(this,e,U_,F_,ct,{})}}var bf={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(fa,function(){var n,s,i=1e3,r=6e4,o=36e5,a=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,u=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:l,months:u,days:a,hours:o,minutes:r,seconds:i,milliseconds:1,weeks:6048e5},d=function(k){return k instanceof y},v=function(k,_,w){return new y(k,w,_.$l)},g=function(k){return s.p(k)+"s"},m=function(k){return k<0},R=function(k){return m(k)?Math.ceil(k):Math.floor(k)},D=function(k){return Math.abs(k)},N=function(k,_){return k?m(k)?{negative:!0,format:""+D(k)+_}:{negative:!1,format:""+k+_}:{negative:!1,format:""}},y=function(){function k(w,B,U){var $=this;if(this.$d={},this.$l=U,w===void 0&&(this.$ms=0,this.parseFromMilliseconds()),B)return v(w*f[g(B)],this);if(typeof w=="number")return this.$ms=w,this.parseFromMilliseconds(),this;if(typeof w=="object")return Object.keys(w).forEach(function(M){$.$d[g(M)]=w[M]}),this.calMilliseconds(),this;if(typeof w=="string"){var H=w.match(h);if(H){var Q=H.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var _=k.prototype;return _.calMilliseconds=function(){var w=this;this.$ms=Object.keys(this.$d).reduce(function(B,U){return B+(w.$d[U]||0)*f[U]},0)},_.parseFromMilliseconds=function(){var w=this.$ms;this.$d.years=R(w/l),w%=l,this.$d.months=R(w/u),w%=u,this.$d.days=R(w/a),w%=a,this.$d.hours=R(w/o),w%=o,this.$d.minutes=R(w/r),w%=r,this.$d.seconds=R(w/i),w%=i,this.$d.milliseconds=w},_.toISOString=function(){var w=N(this.$d.years,"Y"),B=N(this.$d.months,"M"),U=+this.$d.days||0;this.$d.weeks&&(U+=7*this.$d.weeks);var $=N(U,"D"),H=N(this.$d.hours,"H"),Q=N(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3,M=Math.round(1e3*M)/1e3);var C=N(M,"S"),b=w.negative||B.negative||$.negative||H.negative||Q.negative||C.negative,L=H.format||Q.format||C.format?"T":"",S=(b?"-":"")+"P"+w.format+B.format+$.format+L+H.format+Q.format+C.format;return S==="P"||S==="-P"?"P0D":S},_.toJSON=function(){return this.toISOString()},_.format=function(w){var B=w||"YYYY-MM-DDTHH:mm:ss",U={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return B.replace(c,function($,H){return H||String(U[$])})},_.as=function(w){return this.$ms/f[g(w)]},_.get=function(w){var B=this.$ms,U=g(w);return U==="milliseconds"?B%=1e3:B=U==="weeks"?R(B/f[U]):this.$d[U],B||0},_.add=function(w,B,U){var $;return $=B?w*f[g(B)]:d(w)?w.$ms:v(w,this).$ms,v(this.$ms+$*(U?-1:1),this)},_.subtract=function(w,B){return this.add(w,B,!0)},_.locale=function(w){var B=this.clone();return B.$l=w,B},_.clone=function(){return v(this.$ms,this)},_.humanize=function(w){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!w)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},k}(),I=function(k,_,w){return k.add(_.years()*w,"y").add(_.months()*w,"M").add(_.days()*w,"d").add(_.hours()*w,"h").add(_.minutes()*w,"m").add(_.seconds()*w,"s").add(_.milliseconds()*w,"ms")};return function(k,_,w){n=w,s=w().$utils(),w.duration=function($,H){var Q=w.locale();return v($,{$l:Q},H)},w.isDuration=d;var B=_.prototype.add,U=_.prototype.subtract;_.prototype.add=function($,H){return d($)?I(this,$,1):B.bind(this)($,H)},_.prototype.subtract=function($,H){return d($)?I(this,$,-1):U.bind(this)($,H)}}})})(bf);var B_=bf.exports;const j_=da(B_);var Sf={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(fa,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,a={},c=function(g){return(g=+g)+(g>68?1900:2e3)},l=function(g){return function(m){this[g]=+m}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var R=m.match(/([+-]|\d\d)/g),D=60*R[1]+(+R[2]||0);return D===0?0:R[0]==="+"?-D:D}(g)}],h=function(g){var m=a[g];return m&&(m.indexOf?m:m.s.concat(m.f))},f=function(g,m){var R,D=a.meridiem;if(D){for(var N=1;N<=24;N+=1)if(g.indexOf(D(N,0,m))>-1){R=N>12;break}}else R=g===(m?"pm":"PM");return R},d={A:[o,function(g){this.afternoon=f(g,!1)}],a:[o,function(g){this.afternoon=f(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[i,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[i,l("day")],Do:[o,function(g){var m=a.ordinal,R=g.match(/\d+/);if(this.day=R[0],m)for(var D=1;D<=31;D+=1)m(D).replace(/\[|\]/g,"")===g&&(this.day=D)}],M:[r,l("month")],MM:[i,l("month")],MMM:[o,function(g){var m=h("months"),R=(h("monthsShort")||m.map(function(D){return D.slice(0,3)})).indexOf(g)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[o,function(g){var m=h("months").indexOf(g)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,l("year")],YY:[i,function(g){this.year=c(g)}],YYYY:[/\d{4}/,l("year")],Z:u,ZZ:u};function v(g){var m,R;m=g,R=a&&a.formats;for(var D=(g=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(B,U,$){var H=$&&$.toUpperCase();return U||R[$]||n[$]||R[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,M,C){return M||C.slice(1)})})).match(s),N=D.length,y=0;y<N;y+=1){var I=D[y],k=d[I],_=k&&k[0],w=k&&k[1];D[y]=w?{regex:_,parser:w}:I.replace(/^\[|\]$/g,"")}return function(B){for(var U={},$=0,H=0;$<N;$+=1){var Q=D[$];if(typeof Q=="string")H+=Q.length;else{var M=Q.regex,C=Q.parser,b=B.slice(H),L=M.exec(b)[0];C.call(U,L),B=B.replace(L,"")}}return function(S){var F=S.afternoon;if(F!==void 0){var x=S.hours;F?x<12&&(S.hours+=12):x===12&&(S.hours=0),delete S.afternoon}}(U),U}}return function(g,m,R){R.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(c=g.parseTwoDigitYear);var D=m.prototype,N=D.parse;D.parse=function(y){var I=y.date,k=y.utc,_=y.args;this.$u=k;var w=_[1];if(typeof w=="string"){var B=_[2]===!0,U=_[3]===!0,$=B||U,H=_[2];U&&(H=_[2]),a=this.$locale(),!B&&H&&(a=R.Ls[H]),this.$d=function(b,L,S){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*b);var F=v(L)(b),x=F.year,G=F.month,ce=F.day,ge=F.hours,X=F.minutes,de=F.seconds,me=F.milliseconds,se=F.zone,J=new Date,te=ce||(x||G?1:J.getDate()),ie=x||J.getFullYear(),re=0;x&&!G||(re=G>0?G-1:J.getMonth());var We=ge||0,st=X||0,Xe=de||0,gt=me||0;return se?new Date(Date.UTC(ie,re,te,We,st,Xe,gt+60*se.offset*1e3)):S?new Date(Date.UTC(ie,re,te,We,st,Xe,gt)):new Date(ie,re,te,We,st,Xe,gt)}catch{return new Date("")}}(I,w,k),this.init(),H&&H!==!0&&(this.$L=this.locale(H).$L),$&&I!=this.format(w)&&(this.$d=new Date("")),a={}}else if(w instanceof Array)for(var Q=w.length,M=1;M<=Q;M+=1){_[1]=w[M-1];var C=R.apply(this,_);if(C.isValid()){this.$d=C.$d,this.$L=C.$L,this.init();break}M===Q&&(this.$d=new Date(""))}else N.call(this,y)}}})})(Sf);var q_=Sf.exports;const z_=da(q_);function H_(t){let e,n;return e=new V_({}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p:Ie,i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function K_(t){let e,n,s,i,r,o,a,c,l,u,h,f,d,v,g,m,R,D,N;return n=new w_({}),i=new m_({props:{data:t[3].personalInfo}}),c=new fn({props:{header:"About",$$slots:{default:[G_]},$$scope:{ctx:t}}}),u=new fn({props:{header:"Education",$$slots:{default:[Y_]},$$scope:{ctx:t}}}),f=new fn({props:{header:"Work Experience",subHeader:"("+t[0]+(t[2]?"+":"")+" years in total)",$$slots:{default:[W_]},$$scope:{ctx:t}}}),v=new fn({props:{header:"Skills",$$slots:{default:[Q_]},$$scope:{ctx:t}}}),m=new fn({props:{header:"Strengths",$$slots:{default:[X_]},$$scope:{ctx:t}}}),D=new fn({props:{header:"Hobbies",$$slots:{default:[J_]},$$scope:{ctx:t}}}),{c(){e=T("header"),je(n.$$.fragment),s=V(),je(i.$$.fragment),r=V(),o=T("main"),a=T("div"),je(c.$$.fragment),l=V(),je(u.$$.fragment),h=V(),je(f.$$.fragment),d=V(),je(v.$$.fragment),g=V(),je(m.$$.fragment),R=V(),je(D.$$.fragment),E(a,"class","container svelte-14fp9r"),E(o,"class","svelte-14fp9r")},m(y,I){ne(y,e,I),Pe(n,e,null),p(e,s),Pe(i,e,null),ne(y,r,I),ne(y,o,I),p(o,a),Pe(c,a,null),p(a,l),Pe(u,a,null),p(a,h),Pe(f,a,null),p(a,d),Pe(v,a,null),p(a,g),Pe(m,a,null),p(a,R),Pe(D,a,null),N=!0},p(y,I){const k={};I&8&&(k.data=y[3].personalInfo),i.$set(k);const _={};I&1032&&(_.$$scope={dirty:I,ctx:y}),c.$set(_);const w={};I&1032&&(w.$$scope={dirty:I,ctx:y}),u.$set(w);const B={};I&5&&(B.subHeader="("+y[0]+(y[2]?"+":"")+" years in total)"),I&1032&&(B.$$scope={dirty:I,ctx:y}),f.$set(B);const U={};I&1032&&(U.$$scope={dirty:I,ctx:y}),v.$set(U);const $={};I&1032&&($.$$scope={dirty:I,ctx:y}),m.$set($);const H={};I&1032&&(H.$$scope={dirty:I,ctx:y}),D.$set(H)},i(y){N||(ue(n.$$.fragment,y),ue(i.$$.fragment,y),ue(c.$$.fragment,y),ue(u.$$.fragment,y),ue(f.$$.fragment,y),ue(v.$$.fragment,y),ue(m.$$.fragment,y),ue(D.$$.fragment,y),N=!0)},o(y){_e(n.$$.fragment,y),_e(i.$$.fragment,y),_e(c.$$.fragment,y),_e(u.$$.fragment,y),_e(f.$$.fragment,y),_e(v.$$.fragment,y),_e(m.$$.fragment,y),_e(D.$$.fragment,y),N=!1},d(y){y&&(ee(e),ee(r),ee(o)),Le(n),Le(i),Le(c),Le(u),Le(f),Le(v),Le(m),Le(D)}}}function G_(t){let e,n=t[3].personalInfo.aboutMe+"",s;return{c(){e=new Ff(!1),s=On(),e.a=s},m(i,r){e.m(n,i,r),ne(i,s,r)},p(i,r){r&8&&n!==(n=i[3].personalInfo.aboutMe+"")&&e.p(n)},d(i){i&&(ee(s),e.d())}}}function Y_(t){let e,n;return e=new b_({props:{items:t[3].education}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.items=s[3].education),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function W_(t){let e,n;return e=new D_({props:{items:t[3].experience,yoe:t[5]}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.items=s[3].experience),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function Q_(t){let e,n;return e=new O_({props:{items:t[3].skills}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.items=s[3].skills),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function X_(t){let e,n;return e=new f_({props:{items:t[3].strengths}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.items=s[3].strengths),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function J_(t){let e,n;return e=new x_({props:{items:t[3].hobbies}}),{c(){je(e.$$.fragment)},m(s,i){Pe(e,s,i),n=!0},p(s,i){const r={};i&8&&(r.items=s[3].hobbies),e.$set(r)},i(s){n||(ue(e.$$.fragment,s),n=!0)},o(s){_e(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function Z_(t){let e,n,s,i;const r=[K_,H_],o=[];function a(c,l){return c[3]?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=r[e](t)),{c(){n&&n.c(),s=On()},m(c,l){~e&&o[e].m(c,l),ne(c,s,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ws(),_e(o[u],1,1,()=>{o[u]=null}),_s()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=r[e](c),n.c()),ue(n,1),n.m(s.parentNode,s)):n=null)},i(c){i||(ue(n),i=!0)},o(c){_e(n),i=!1},d(c){c&&ee(s),~e&&o[e].d(c)}}}function eE(t,e,n){let s,i,r,o;_t.extend(j_),_t.extend(z_);const a=Ll({apiKey:"AIzaSyAm1I2zK0_VmolD7VoAcMifcOQ-x1rxmTg",authDomain:"vprodan-cv.firebaseapp.com",projectId:"vprodan-cv",storageBucket:"vprodan-cv.appspot.com",messagingSenderId:"262118627579",appId:"1:262118627579:web:6842a857c12b582f8df85e",measurementId:"G-PMMXNGL2Q2"}),c=Hv(a),l=r_(a),u=sw(c,"data/main");ya(t,u,d=>n(3,o=d)),Ef(l,"page_view");const h=Qs(0);ya(t,h,d=>n(6,r=d));let f=!1;return setTimeout(()=>n(1,f=!0),500),t.$$.update=()=>{t.$$.dirty&64&&n(0,s=Math.floor(r)),t.$$.dirty&65&&n(2,i=r-s>1/12)},[s,f,i,o,u,h,r]}class tE extends dt{constructor(e){super(),ft(this,e,eE,Z_,ct,{})}}new tE({target:document.getElementById("app")});
