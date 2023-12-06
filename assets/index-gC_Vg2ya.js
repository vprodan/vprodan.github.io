var hh=Object.defineProperty;var fh=(t,e,n)=>e in t?hh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kt=(t,e,n)=>(fh(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Te(){}function dh(t,e){for(const n in e)t[n]=e[n];return t}function xl(t){return t()}function jo(){return Object.create(null)}function cs(t){t.forEach(xl)}function Ul(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ds;function Ho(t,e){return t===e?!0:(Ds||(Ds=document.createElement("a")),Ds.href=e,t===Ds.href)}function ph(t){return Object.keys(t).length===0}function gh(t,...e){if(t==null){for(const s of e)s(void 0);return Te}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zo(t,e,n){t.$$.on_destroy.push(gh(e,n))}function mh(t,e,n,s){if(t){const r=Fl(t,e,n,s);return t[0](r)}}function Fl(t,e,n,s){return t[1]&&s?dh(n.ctx.slice(),t[1](s(e))):n.ctx}function yh(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function vh(t,e,n,s,r,i){if(r){const o=Fl(e,n,s,i);t.p(o,r)}}function _h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Gs(t){return t??""}function d(t,e){t.appendChild(e)}function ne(t,e,n){t.insertBefore(e,n||null)}function ee(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function wh(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function V(){return G(" ")}function Cn(){return G("")}function Eh(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Th(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function vn(t,e,n){t.classList.toggle(e,!!n)}class Ih{constructor(e=!1){kt(this,"is_svg",!1);kt(this,"e");kt(this,"n");kt(this,"t");kt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=wh(n.nodeName):this.e=I(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ne(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(ee)}}let Gn;function Vn(t){Gn=t}function Sh(){if(!Gn)throw new Error("Function called outside component initialization");return Gn}function bh(t){Sh().$$.on_mount.push(t)}const rn=[],qo=[];let un=[];const Ko=[],Ch=Promise.resolve();let oi=!1;function Ah(){oi||(oi=!0,Ch.then(Vl))}function ai(t){un.push(t)}const Ur=new Set;let en=0;function Vl(){if(en!==0)return;const t=Gn;do{try{for(;en<rn.length;){const e=rn[en];en++,Vn(e),kh(e.$$)}}catch(e){throw rn.length=0,en=0,e}for(Vn(null),rn.length=0,en=0;qo.length;)qo.pop()();for(let e=0;e<un.length;e+=1){const n=un[e];Ur.has(n)||(Ur.add(n),n())}un.length=0}while(rn.length);for(;Ko.length;)Ko.pop()();oi=!1,Ur.clear(),Vn(t)}function kh(t){if(t.fragment!==null){t.update(),cs(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ai)}}function Dh(t){const e=[],n=[];un.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),un=e}const Bs=new Set;let Bt;function hs(){Bt={r:0,c:[],p:Bt}}function fs(){Bt.r||cs(Bt.c),Bt=Bt.p}function ce(t,e){t&&t.i&&(Bs.delete(t),t.i(e))}function we(t,e,n,s){if(t&&t.o){if(Bs.has(t))return;Bs.add(t),Bt.c.push(()=>{Bs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function je(t){t&&t.c()}function Pe(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),ai(()=>{const i=t.$$.on_mount.map(xl).filter(Ul);t.$$.on_destroy?t.$$.on_destroy.push(...i):cs(i),t.$$.on_mount=[]}),r.forEach(ai)}function Le(t,e){const n=t.$$;n.fragment!==null&&(Dh(n.after_update),cs(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nh(t,e){t.$$.dirty[0]===-1&&(rn.push(t),Ah(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,e,n,s,r,i,o=null,a=[-1]){const l=Gn;Vn(t);const u=t.$$={fragment:null,ctx:[],props:i,update:Te,not_equal:r,bound:jo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:jo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(h,f,...p)=>{const v=p.length?p[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=v)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](v),c&&Nh(t,h)),f}):[],u.update(),c=!0,cs(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=Th(e.target);u.fragment&&u.fragment.l(h),h.forEach(ee)}else u.fragment&&u.fragment.c();e.intro&&ce(t.$$.fragment),Pe(t,e.target,e.anchor),Vl()}Vn(l)}class lt{constructor(){kt(this,"$$");kt(this,"$$set")}$destroy(){Le(this,1),this.$destroy=Te}$on(e,n){if(!Ul(n))return Te;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ph(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Rh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rh);const tn=[];function js(t,e=Te){let n;const s=new Set;function r(a){if(rt(t,a)&&(t=a,n)){const l=!tn.length;for(const u of s)u[1](),tn.push(u,t);if(l){for(let u=0;u<tn.length;u+=2)tn[u][0](tn[u+1]);tn.length=0}}}function i(a){r(a(t))}function o(a,l=Te){const u=[a,l];return s.add(u),s.size===1&&(n=e(r,i)||Te),a(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}var Yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Mh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),s.push(n[c],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new $h;const f=i<<2|a>>4;if(s.push(f),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oh=function(t){const e=Bl(t);return jl.encodeByteArray(e,!0)},Ws=function(t){return Oh(t).replace(/\./g,"")},Hl=function(t){try{return jl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ph(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lh=()=>Ph().__FIREBASE_DEFAULTS__,xh=()=>{if(typeof process>"u"||typeof Yo>"u")return;const t=Yo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hl(t[1]);return e&&JSON.parse(e)},Bi=()=>{try{return Lh()||xh()||Uh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fh=t=>{var e,n;return(n=(e=Bi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vh=t=>{const e=Fh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zl=()=>{var t;return(t=Bi())===null||t===void 0?void 0:t.config},Bh=t=>{var e;return(e=Bi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Hh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ws(JSON.stringify(n)),Ws(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function qh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="FirebaseError";class At extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wh,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Qh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new At(r,a,s)}}function Qh(t,e){return t.replace(Xh,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xh=/\{\$([^}]+)}/g;function li(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Go(i)&&Go(o)){if(!li(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jh(t,e){const n=new Zh(t,e);return n.subscribe.bind(n)}class Zh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ef(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Fr),r.error===void 0&&(r.error=Fr),r.complete===void 0&&(r.complete=Fr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ef(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fr(){}/**
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
 */function An(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nf(t){return t===Vt?void 0:t}function sf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const of={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},af=ue.INFO,lf={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},uf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ji{constructor(e){this.name=e,this._logLevel=af,this._logHandler=uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const cf=(t,e)=>e.some(n=>t instanceof n);let Wo,Qo;function hf(){return Wo||(Wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ff(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kl=new WeakMap,ui=new WeakMap,Yl=new WeakMap,Vr=new WeakMap,Hi=new WeakMap;function df(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kl.set(n,t)}).catch(()=>{}),Hi.set(e,t),e}function pf(t){if(ui.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ui.set(t,e)}let ci={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gf(t){ci=t(ci)}function mf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Br(this),e,...n);return Yl.set(s,e.sort?e.sort():[e]),Mt(s)}:ff().includes(t)?function(...e){return t.apply(Br(this),e),Mt(Kl.get(this))}:function(...e){return Mt(t.apply(Br(this),e))}}function yf(t){return typeof t=="function"?mf(t):(t instanceof IDBTransaction&&pf(t),cf(t,hf())?new Proxy(t,ci):t)}function Mt(t){if(t instanceof IDBRequest)return df(t);if(Vr.has(t))return Vr.get(t);const e=yf(t);return e!==t&&(Vr.set(t,e),Hi.set(e,t)),e}const Br=t=>Hi.get(t);function vf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _f=["get","getKey","getAll","getAllKeys","count"],wf=["put","add","delete","clear"],jr=new Map;function Xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=wf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_f.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return jr.set(e,i),i}gf(t=>({...t,get:(e,n,s)=>Xo(e,n)||t.get(e,n,s),has:(e,n)=>!!Xo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Tf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Jo="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new ji("@firebase/app"),If="@firebase/app-compat",Sf="@firebase/analytics-compat",bf="@firebase/analytics",Cf="@firebase/app-check-compat",Af="@firebase/app-check",kf="@firebase/auth",Df="@firebase/auth-compat",Nf="@firebase/database",Rf="@firebase/database-compat",Mf="@firebase/functions",$f="@firebase/functions-compat",Of="@firebase/installations",Pf="@firebase/installations-compat",Lf="@firebase/messaging",xf="@firebase/messaging-compat",Uf="@firebase/performance",Ff="@firebase/performance-compat",Vf="@firebase/remote-config",Bf="@firebase/remote-config-compat",jf="@firebase/storage",Hf="@firebase/storage-compat",zf="@firebase/firestore",qf="@firebase/firestore-compat",Kf="firebase",Yf="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]",Gf={[hi]:"fire-core",[If]:"fire-core-compat",[bf]:"fire-analytics",[Sf]:"fire-analytics-compat",[Af]:"fire-app-check",[Cf]:"fire-app-check-compat",[kf]:"fire-auth",[Df]:"fire-auth-compat",[Nf]:"fire-rtdb",[Rf]:"fire-rtdb-compat",[Mf]:"fire-fn",[$f]:"fire-fn-compat",[Of]:"fire-iid",[Pf]:"fire-iid-compat",[Lf]:"fire-fcm",[xf]:"fire-fcm-compat",[Uf]:"fire-perf",[Ff]:"fire-perf-compat",[Vf]:"fire-rc",[Bf]:"fire-rc-compat",[jf]:"fire-gcs",[Hf]:"fire-gcs-compat",[zf]:"fire-fst",[qf]:"fire-fst-compat","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,di=new Map;function Wf(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wt(t){const e=t.name;if(di.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;di.set(e,t);for(const n of Qs.values())Wf(n,t);return!0}function Qf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new ds("app","Firebase",Xf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=Yf;function Gl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw $t.create("bad-app-name",{appName:String(r)});if(n||(n=zl()),!n)throw $t.create("no-options");const i=Qs.get(r);if(i){if(li(n,i.options)&&li(s,i.config))return i;throw $t.create("duplicate-app",{appName:r})}const o=new rf(r);for(const l of di.values())o.addComponent(l);const a=new Jf(n,s,o);return Qs.set(r,a),a}function Zf(t=fi){const e=Qs.get(t);if(!e&&t===fi&&zl())return Gl();if(!e)throw $t.create("no-app",{appName:t});return e}function pt(t,e,n){var s;let r=(s=Gf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Wt(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ed="firebase-heartbeat-database",td=1,Wn="firebase-heartbeat-store";let Hr=null;function Wl(){return Hr||(Hr=vf(ed,td,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wn)}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),Hr}async function nd(t){try{return await(await Wl()).transaction(Wn).objectStore(Wn).get(Ql(t))}catch(e){if(e instanceof At)Gt.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Zo(t,e){try{const s=(await Wl()).transaction(Wn,"readwrite");await s.objectStore(Wn).put(e,Ql(t)),await s.done}catch(n){if(n instanceof At)Gt.warn(n.message);else{const s=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function Ql(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sd=1024,rd=30*24*60*60*1e3;class id{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ad(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ea();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=rd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ea(),{heartbeatsToSend:n,unsentEntries:s}=od(this._heartbeatsCache.heartbeats),r=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ea(){return new Date().toISOString().substring(0,10)}function od(t,e=sd){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ta(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ta(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ad{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yh()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ta(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){Wt(new Ot("platform-logger",e=>new Ef(e),"PRIVATE")),Wt(new Ot("heartbeat",e=>new id(e),"PRIVATE")),pt(hi,Jo,t),pt(hi,Jo,"esm2017"),pt("fire-js","")}ld("");function Xl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ud=Jl,Zl=new ds("auth","Firebase",Jl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new ji("@firebase/auth");function cd(t,...e){Xs.logLevel<=ue.WARN&&Xs.warn(`Auth (${ps}): ${t}`,...e)}function Hs(t,...e){Xs.logLevel<=ue.ERROR&&Xs.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,...e){throw qi(t,...e)}function zi(t,...e){return qi(t,...e)}function hd(t,e,n){const s=Object.assign(Object.assign({},ud()),{[e]:n});return new ds("auth","Firebase",s).create(e,{appName:t.name})}function qi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zl.create(t,...e)}function ve(t,e,...n){if(!t)throw qi(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hs(e),new Error(e)}function Js(t,e){t||Bn(e)}function fd(){return sa()==="http:"||sa()==="https:"}function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fd()||qh()||"connection"in navigator)?navigator.onLine:!0}function pd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Js(n>e,"Short delay should be less than long delay!"),this.isMobile=zh()||Kh()}get(){return dd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){Js(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new gs(3e4,6e4);function vd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,s,r={}){return tu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ql(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eu.fetch()(nu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function tu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},md),e);try{const r=new _d(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ns(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ns(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ns(t,"user-disabled",o);const c=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hd(t,c,u);na(t,c)}}catch(r){if(r instanceof At)throw r;na(t,"network-request-failed",{message:String(r)})}}function nu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?gd(t.config,r):`${t.config.apiScheme}://${r}`}class _d{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zi(this.auth,"network-request-failed")),yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ns(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=zi(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function Ed(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Td(t,e=!1){const n=An(t),s=await n.getIdToken(e),r=su(s);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jn(zr(r.auth_time)),issuedAtTime:jn(zr(r.iat)),expirationTime:jn(zr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zr(t){return Number(t)*1e3}function su(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hl(n);return r?JSON.parse(r):(Hs("Failed to decode base64 JWT payload"),null)}catch(r){return Hs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Id(t){const e=su(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof At&&Sd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Sd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await pi(t,Ed(n,{idToken:s}));ve(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kd(i.providerUserInfo):[],a=Ad(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Cd(t){const e=An(t);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ad(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function kd(t){return t.map(e=>{var{providerId:n}=e,s=Xl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){const n=await tu(t,{},async()=>{const s=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=nu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Dd(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Qn;return s&&(ve(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Td(this,e)}reload(){return Cd(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pi(this,wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,c;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:N,emailVerified:y,isAnonymous:T,providerData:k,stsTokenManager:w}=n;ve(N&&w,e,"internal-error");const _=Qn.fromJSON(this.name,w);ve(typeof N=="string",e,"internal-error"),Dt(h,e.name),Dt(f,e.name),ve(typeof y=="boolean",e,"internal-error"),ve(typeof T=="boolean",e,"internal-error"),Dt(p,e.name),Dt(v,e.name),Dt(g,e.name),Dt(m,e.name),Dt(R,e.name),Dt(D,e.name);const B=new cn({uid:N,auth:e,email:f,emailVerified:y,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:g,stsTokenManager:_,createdAt:R,lastLoginAt:D});return k&&Array.isArray(k)&&(B.providerData=k.map(F=>Object.assign({},F))),m&&(B._redirectEventId=m),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new Qn;r.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Zs(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map;function jt(t){Js(t instanceof Function,"Expected a class definition");let e=ra.get(t);return e?(Js(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ra.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iu.type="NONE";const ia=iu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qr(this.userKey,r.apiKey,i),this.fullPersistenceKey=qr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(jt(ia),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||jt(ia);const o=qr(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=cn._fromJSON(e,c);u!==i&&(a=h),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Ld(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Md(e))&&!e.includes("edge/"))return"Chrome";if(Od(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nd(t=mt()){return/firefox\//i.test(t)}function Rd(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Md(t=mt()){return/crios\//i.test(t)}function $d(t=mt()){return/iemobile/i.test(t)}function Od(t=mt()){return/android/i.test(t)}function Pd(t=mt()){return/blackberry/i.test(t)}function Ld(t=mt()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e=[]){let n;switch(t){case"Browser":n=oa(mt());break;case"Worker":n=`${oa(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${s}`}async function au(t,e){return Ki(t,"GET","/v2/recaptchaConfig",vd(t,e))}function aa(t){return t!==void 0&&t.enterprise!==void 0}class lu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ud(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=zi("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xd().appendChild(s)})}const Fd="https://www.google.com/recaptcha/enterprise.js?render=",Vd="recaptcha-enterprise",Bd="NO_RECAPTCHA";class jd{constructor(e){this.type=Vd,this.auth=uu(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{au(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lu(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;aa(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Bd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&aa(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ud(Fd+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Hd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new Hd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?An(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}async initializeRecaptchaConfig(){const e=await au(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new lu(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function uu(t){return An(t)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jh(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qd(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new gs(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new gs(2e3,1e4);/**
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
 */new gs(3e4,6e4);/**
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
 */new gs(5e3,15e3);var ua="@firebase/auth",ca="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gd(t){Wt(new Ot("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ou(t)},u=new zd(s,r,i,l);return qd(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Wt(new Ot("auth-internal",e=>{const n=uu(e.getProvider("auth").getImmediate());return(s=>new Kd(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(ua,ca,Yd(t)),pt(ua,ca,"esm2017")}/**
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
 */const Wd=5*60;Bh("authIdTokenMaxAge");Gd("Browser");var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Yi=Yi||{},K=Qd||self;function dr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xd(t){return Object.prototype.hasOwnProperty.call(t,Kr)&&t[Kr]||(t[Kr]=++Jd)}var Kr="closure_uid_"+(1e9*Math.random()>>>0),Jd=0;function Zd(t,e,n){return t.call.apply(t.bind,arguments)}function ep(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=Zd:qe=ep,qe.apply(null,arguments)}function Rs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ut(){this.s=this.s,this.o=this.o}var tp=0;Ut.prototype.s=!1;Ut.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tp!=0)&&Xd(this)};Ut.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gi(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ha(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(dr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var np=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function Xn(t){return/^[\s\xa0]*$/.test(t)}function pr(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function ct(t){return pr().indexOf(t)!=-1}function Wi(t){return Wi[" "](t),t}Wi[" "]=function(){};function sp(t,e){var n=Wp;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var rp=ct("Opera"),_n=ct("Trident")||ct("MSIE"),hu=ct("Edge"),gi=hu||_n,fu=ct("Gecko")&&!(pr().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),ip=pr().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function du(){var t=K.document;return t?t.documentMode:void 0}var mi;e:{var Yr="",Gr=function(){var t=pr();if(fu)return/rv:([^\);]+)(\)|;)/.exec(t);if(hu)return/Edge\/([\d\.]+)/.exec(t);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ip)return/WebKit\/(\S+)/.exec(t);if(rp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gr&&(Yr=Gr?Gr[1]:""),_n){var Wr=du();if(Wr!=null&&Wr>parseFloat(Yr)){mi=String(Wr);break e}}mi=Yr}var yi;if(K.document&&_n){var fa=du();yi=fa||parseInt(mi,10)||void 0}else yi=void 0;var op=yi;function Jn(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fu){e:{try{Wi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ap[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jn.$.h.call(this)}}$e(Jn,Ke);var ap={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ys="closure_listenable_"+(1e6*Math.random()|0),lp=0;function up(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++lp,this.fa=this.ia=!1}function gr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cp(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pu(t){const e={};for(const n in t)e[n]=t[n];return e}const da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<da.length;i++)n=da[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function mr(t){this.src=t,this.g={},this.h=0}mr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_i(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new up(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function vi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=cu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(gr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _i(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),Qr={};function mu(t,e,n,s,r){if(s&&s.once)return vu(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mu(t,e[i],n,s,r);return null}return n=eo(n),t&&t[ys]?t.O(e,n,ms(s)?!!s.capture:!!s,r):yu(t,e,n,!1,s,r)}function yu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ms(r)?!!r.capture:!!r,a=Zi(t);if(a||(t[Xi]=a=new mr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=hp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)np||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hp(){function t(n){return e.call(t.src,t.listener,n)}const e=fp;return t}function vu(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vu(t,e[i],n,s,r);return null}return n=eo(n),t&&t[ys]?t.P(e,n,ms(s)?!!s.capture:!!s,r):yu(t,e,n,!0,s,r)}function _u(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_u(t,e[i],n,s,r);else s=ms(s)?!!s.capture:!!s,n=eo(n),t&&t[ys]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_i(i,n,s,r),-1<n&&(gr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_i(e,n,s,r)),(n=-1<t?e[t]:null)&&Ji(n))}function Ji(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ys])vi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Zi(e))?(vi(n,t),n.h==0&&(n.src=null,e[Xi]=null)):gr(t)}}}function wu(t){return t in Qr?Qr[t]:Qr[t]="on"+t}function fp(t,e){if(t.fa)t=!0;else{e=new Jn(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Ji(t),t=n.call(s,e)}return t}function Zi(t){return t=t[Xi],t instanceof mr?t:null}var Xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function eo(t){return typeof t=="function"?t:(t[Xr]||(t[Xr]=function(e){return t.handleEvent(e)}),t[Xr])}function Me(){Ut.call(this),this.i=new mr(this),this.S=this,this.J=null}$e(Me,Ut);Me.prototype[ys]=!0;Me.prototype.removeEventListener=function(t,e,n,s){_u(this,t,e,n,s)};function Fe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),gu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ms(o,s,!0,e)&&r}if(o=e.g=t,r=Ms(o,s,!0,e)&&r,r=Ms(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ms(o,s,!1,e)&&r}Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)gr(n[s]);delete t.g[e],t.h--}}this.J=null};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ms(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vi(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var to=K.JSON.stringify;class dp{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pp(){var t=no;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gp{constructor(){this.h=this.g=null}add(e,n){const s=Eu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Eu=new dp(()=>new mp,t=>t.reset());class mp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yp(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vp(t){K.setTimeout(()=>{throw t},0)}let Zn,es=!1,no=new gp,Tu=()=>{const t=K.Promise.resolve(void 0);Zn=()=>{t.then(_p)}};var _p=()=>{for(var t;t=pp();){try{t.h.call(t.g)}catch(n){vp(n)}var e=Eu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}es=!1};function yr(t,e){Me.call(this),this.h=t||1,this.g=e||K,this.j=qe(this.qb,this),this.l=Date.now()}$e(yr,Me);P=yr.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fe(this,"tick"),this.ga&&(so(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function so(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){yr.$.N.call(this),so(this),delete this.g};function ro(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Iu(t){t.g=ro(()=>{t.g=null,t.i&&(t.i=!1,Iu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wp extends Ut{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iu(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(t){Ut.call(this),this.h=t,this.g={}}$e(ts,Ut);var pa=[];function Su(t,e,n,s){Array.isArray(n)||(n&&(pa[0]=n.toString()),n=pa);for(var r=0;r<n.length;r++){var i=mu(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function bu(t){Qi(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ji(e)},t),t.g={}}ts.prototype.N=function(){ts.$.N.call(this),bu(this)};ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vr(){this.g=!0}vr.prototype.Ea=function(){this.g=!1};function Ep(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Tp(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ln(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sp(t,n)+(s?" "+s:"")})}function Ip(t,e){t.info(function(){return"TIMEOUT: "+e})}vr.prototype.info=function(){};function Sp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return to(n)}catch{return e}}var Zt={},ga=null;function _r(){return ga=ga||new Me}Zt.Ta="serverreachability";function Cu(t){Ke.call(this,Zt.Ta,t)}$e(Cu,Ke);function ns(t){const e=_r();Fe(e,new Cu(e))}Zt.STAT_EVENT="statevent";function Au(t,e){Ke.call(this,Zt.STAT_EVENT,t),this.stat=e}$e(Au,Ke);function Qe(t){const e=_r();Fe(e,new Au(e,t))}Zt.Ua="timingevent";function ku(t,e){Ke.call(this,Zt.Ua,t),this.size=e}$e(ku,Ke);function vs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var wr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Du={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function io(){}io.prototype.h=null;function ma(t){return t.h||(t.h=t.i())}function Nu(){}var _s={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oo(){Ke.call(this,"d")}$e(oo,Ke);function ao(){Ke.call(this,"c")}$e(ao,Ke);var wi;function Er(){}$e(Er,io);Er.prototype.g=function(){return new XMLHttpRequest};Er.prototype.i=function(){return{}};wi=new Er;function ws(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ts(this),this.P=bp,t=gi?125:void 0,this.V=new yr(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var bp=45e3,Ei={},er={};P=ws.prototype;P.setTimeout=function(t){this.P=t};function Ti(t,e,n){t.L=1,t.v=Ir(It(e)),t.s=n,t.S=!0,Mu(t,null)}function Mu(t,e){t.G=Date.now(),Es(t),t.A=It(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Vu(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Ru,t.g=ac(t.l,n?e:null,!t.s),0<t.O&&(t.M=new wp(qe(t.Pa,t,t.g),t.O)),Su(t.U,t.g,"readystatechange",t.nb),e=t.I?pu(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ns(),Ep(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&ft(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=ft(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||gi||this.g&&(this.h.h||this.g.ja()||wa(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ns(3):ns(2)),Tr(this);var n=this.g.da();this.ca=n;t:if($u(this)){var s=wa(this.g);t="";var r=s.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Hn(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tp(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xn(a)){var u=a;break t}}u=null}if(n=u)ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ii(this,n);else{this.i=!1,this.o=3,Qe(12),Ht(this),Hn(this);break e}}this.S?(Ou(this,c,o),gi&&this.i&&c==3&&(Su(this.U,this.V,"tick",this.mb),this.V.start())):(ln(this.j,this.m,o,null),Ii(this,o)),c==4&&Ht(this),this.i&&!this.J&&(c==4?sc(this.l,this):(this.i=!1,Es(this)))}else Kp(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),Ht(this),Hn(this)}}}catch{}finally{}};function $u(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ou(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=Cp(t,n),r==er){e==4&&(t.o=4,Qe(14),s=!1),ln(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ei){t.o=4,Qe(15),ln(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ln(t.j,t.m,r,null),Ii(t,r);$u(t)&&r!=er&&r!=Ei&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),po(e),e.M=!0,Qe(11))):(ln(t.j,t.m,n,"[Invalid Chunked Response]"),Ht(t),Hn(t))}P.mb=function(){if(this.g){var t=ft(this.g),e=this.g.ja();this.C<e.length&&(Tr(this),Ou(this,t,e),this.i&&t!=4&&Es(this))}};function Cp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?er:(n=Number(e.substring(n,s)),isNaN(n)?Ei:(s+=1,s+n>e.length?er:(e=e.slice(s,s+n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,Ht(this)};function Es(t){t.Y=Date.now()+t.P,Pu(t,t.P)}function Pu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vs(qe(t.lb,t),e)}function Tr(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ip(this.j,this.A),this.L!=2&&(ns(),Qe(17)),Ht(this),this.o=2,Hn(this)):Pu(this,this.Y-t)};function Hn(t){t.l.H==0||t.J||sc(t.l,t)}function Ht(t){Tr(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,so(t.V),bu(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ii(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Si(n.i,t))){if(!t.K&&Si(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sr(n),Cr(n);else break e;fo(n),Qe(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=vs(qe(n.ib,n),6e3));if(1>=Hu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zt(n,11)}else if((t.K||n.g==t)&&sr(n),!Xn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(lo(i,i.h),i.h=null))}if(s.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,Ee(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=oc(s,s.J?s.pa:null,s.Y),o.K){zu(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Tr(a),Es(a)),s.g=o}else tc(s);0<n.j.length&&Ar(n)}else u[0]!="stop"&&u[0]!="close"||zt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zt(n,7):ho(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ns(4)}catch{}}function Ap(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function kp(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Lu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kp(t),s=Ap(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Kt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kt){this.h=t.h,tr(this,t.j),this.s=t.s,this.g=t.g,nr(this,t.m),this.l=t.l;var e=t.i,n=new ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ya(this,n),this.o=t.o}else t&&(e=String(t).match(xu))?(this.h=!1,tr(this,e[1]||"",!0),this.s=Pn(e[2]||""),this.g=Pn(e[3]||"",!0),nr(this,e[4]),this.l=Pn(e[5]||"",!0),ya(this,e[6]||"",!0),this.o=Pn(e[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}Kt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ln(e,va,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ln(e,va,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ln(n,n.charAt(0)=="/"?Mp:Rp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ln(n,Op)),t.join("")};function It(t){return new Kt(t)}function tr(t,e,n){t.j=n?Pn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ya(t,e,n){e instanceof ss?(t.i=e,Pp(t.i,t.h)):(n||(e=Ln(e,$p)),t.i=new ss(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ir(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Np),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Np(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var va=/[#\/\?@]/g,Rp=/[#\?:]/g,Mp=/[#\?]/g,$p=/[#\?@]/g,Op=/#/g;function ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ft(t){t.g||(t.g=new Map,t.h=0,t.i&&Dp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ss.prototype;P.add=function(t,e){Ft(this),this.i=null,t=kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uu(t,e){Ft(t),e=kn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fu(t,e){return Ft(t),e=kn(t,e),t.g.has(e)}P.forEach=function(t,e){Ft(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};P.ta=function(){Ft(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};P.Z=function(t){Ft(this);let e=[];if(typeof t=="string")Fu(this,t)&&(e=e.concat(this.g.get(kn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Ft(this),this.i=null,t=kn(this,t),Fu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vu(t,e,n){Uu(t,e),0<n.length&&(t.i=null,t.g.set(kn(t,e),Gi(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Pp(t,e){e&&!t.j&&(Ft(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Uu(this,s),Vu(this,r,n))},t)),t.j=e}var Lp=class{constructor(t,e){this.g=t,this.map=e}};function Bu(t){this.l=t||xp,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xp=10;function ju(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hu(t){return t.h?1:t.g?t.g.size:0}function Si(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lo(t,e){t.g?t.g.add(e):t.h=e}function zu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bu.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qu(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gi(t.i)}var Up=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function Fp(){this.g=new Up}function Vp(t,e,n){const s=n||"";try{Lu(t,function(r,i){let o=r;ms(r)&&(o=to(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Bp(t,e){const n=new vr;if(K.Image){const s=new Image;s.onload=Rs($s,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Rs($s,n,s,"TestLoadImage: error",!1,e),s.onabort=Rs($s,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Rs($s,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $s(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ts(t){this.l=t.fc||null,this.j=t.ob||!1}$e(Ts,io);Ts.prototype.g=function(){return new Sr(this.l,this.j)};Ts.prototype.i=function(t){return function(){return t}}({});function Sr(t,e){Me.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Sr,Me);var uo=0;P=Sr.prototype;P.open=function(t,e){if(this.readyState!=uo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rs(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=uo};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ku(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ku(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Is(this):rs(this),this.readyState==3&&Ku(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Is(this))};P.Ya=function(t){this.g&&(this.response=t,Is(this))};P.ka=function(){this.g&&Is(this)};function Is(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rs(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jp=K.JSON.parse;function Se(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Yu,this.L=this.M=!1}$e(Se,Me);var Yu="",Hp=/^https?$/i,zp=["POST","PUT"];P=Se.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wi.g(),this.C=this.u?ma(this.u):ma(wi),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){_a(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=cu(zp,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qu(this),0<this.B&&((this.L=qp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=ro(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_a(this,i)}};function qp(t){return _n&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Yi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function _a(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gu(t),br(t)}function Gu(t){t.F||(t.F=!0,Fe(t,"complete"),Fe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),br(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),br(this,!0)),Se.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Wu(this):this.kb())};P.kb=function(){Wu(this)};function Wu(t){if(t.h&&typeof Yi<"u"&&(!t.C[1]||ft(t)!=4||t.da()!=2)){if(t.v&&ft(t)==4)ro(t.La,0,t);else if(Fe(t,"readystatechange"),ft(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(xu)[1]||null;!r&&K.self&&K.self.location&&(r=K.self.location.protocol.slice(0,-1)),s=!Hp.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var i=2<ft(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Gu(t)}}finally{br(t)}}}}function br(t,e){if(t.g){Qu(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Qu(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function ft(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jp(e)}};function wa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Yu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Kp(t){const e={};t=(t.g&&2<=ft(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Xn(t[s]))continue;var n=yp(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}cp(e,function(s){return s.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xu(t){let e="";return Qi(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function co(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Xu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ju(t){this.Ga=0,this.j=[],this.l=new vr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Bu(t&&t.concurrentRequestLimit),this.Ja=new Fp,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Ju.prototype;P.ra=8;P.H=1;function ho(t){if(Zu(t),t.H==3){var e=t.W++,n=It(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Ss(t,n),e=new ws(t,t.l,e),e.L=2,e.v=Ir(It(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=ac(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Es(e)}ic(t)}function Cr(t){t.g&&(po(t),t.g.cancel(),t.g=null)}function Zu(t){Cr(t),t.u&&(K.clearTimeout(t.u),t.u=null),sr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ar(t){if(!ju(t.i)&&!t.m){t.m=!0;var e=t.Na;Zn||Tu(),es||(Zn(),es=!0),no.add(e,t),t.C=0}}function Yp(t,e){return Hu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vs(qe(t.Na,t,e),rc(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ws(this,this.l,t);let i=this.s;if(this.U&&(i?(i=pu(i),gu(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ec(this,r,e),n=It(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),Ss(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xu(i)))+"&"+e:this.o&&co(n,this.o,i)),lo(this.i,r),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),r.aa=!0,Ti(r,n,null)):Ti(r,n,e),this.H=2}}else this.H==3&&(t?Ea(this,t):this.j.length==0||ju(this.i)||Ea(this))};function Ea(t,e){var n;e?n=e.m:n=t.W++;const s=It(t.I);Ee(s,"SID",t.K),Ee(s,"RID",n),Ee(s,"AID",t.V),Ss(t,s),t.o&&t.s&&co(s,t.o,t.s),n=new ws(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ec(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),lo(t.i,n),Ti(n,s,e)}function Ss(t,e){t.na&&Qi(t.na,function(n,s){Ee(e,s,n)}),t.h&&Lu({},function(n,s){Ee(e,s,n)})}function ec(t,e,n){n=Math.min(t.j.length,n);var s=t.h?qe(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=r[l].g;const c=r[l].map;if(u-=i,0>u)i=Math.max(0,r[l].g-100),a=!1;else try{Vp(c,o,"req"+u+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function tc(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Zn||Tu(),es||(Zn(),es=!0),no.add(e,t),t.A=0}}function fo(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vs(qe(t.Ma,t),rc(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,nc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vs(qe(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),Cr(this),nc(this))};function po(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function nc(t){t.g=new ws(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=It(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),Ss(t,e),t.o&&t.s&&co(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ir(It(e)),n.s=null,n.S=!0,Mu(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Cr(this),fo(this),Qe(19))};function sr(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function sc(t,e){var n=null;if(t.g==e){sr(t),po(t),t.g=null;var s=2}else if(Si(t.i,e))n=e.F,zu(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=_r(),Fe(s,new ku(s,n)),Ar(t)}else tc(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&Yp(t,e)||s==2&&fo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function rc(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=qe(t.pb,t);n||(n=new Kt("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||tr(n,"https"),Ir(n)),Bp(n.toString(),s)}else Qe(2);t.H=0,t.h&&t.h.za(e),ic(t),Zu(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function ic(t){if(t.H=0,t.ma=[],t.h){const e=qu(t.i);(e.length!=0||t.j.length!=0)&&(ha(t.ma,e),ha(t.ma,t.j),t.i.i.length=0,Gi(t.j),t.j.length=0),t.h.ya()}}function oc(t,e,n){var s=n instanceof Kt?It(n):new Kt(n);if(s.g!="")e&&(s.g=e+"."+s.g),nr(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Kt(null);s&&tr(i,s),e&&(i.g=e),r&&nr(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ra),Ss(t,s),s}function ac(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Se(new Ts({ob:!0})):new Se(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function lc(){}P=lc.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function rr(){if(_n&&!(10<=Number(op)))throw Error("Environmental error: no available transport.")}rr.prototype.g=function(t,e){return new nt(t,e)};function nt(t,e){Me.call(this),this.g=new Ju(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Xn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dn(this)}$e(nt,Me);nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=oc(t,null,t.Y),Ar(t)};nt.prototype.close=function(){ho(this.g)};nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=to(t),t=n);e.j.push(new Lp(e.fb++,t)),e.H==3&&Ar(e)};nt.prototype.N=function(){this.g.h=null,delete this.j,ho(this.g),delete this.g,nt.$.N.call(this)};function uc(t){oo.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(uc,oo);function cc(){ao.call(this),this.status=1}$e(cc,ao);function Dn(t){this.g=t}$e(Dn,lc);Dn.prototype.Ba=function(){Fe(this.g,"a")};Dn.prototype.Aa=function(t){Fe(this.g,new uc(t))};Dn.prototype.za=function(t){Fe(this.g,new cc)};Dn.prototype.ya=function(){Fe(this.g,"b")};function Gp(){this.blockSize=-1}function ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(ot,Gp);ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Jr(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Jr(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Jr(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Jr(this,s),r=0;break}}this.h=r,this.i+=e};ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function _e(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Wp={};function go(t){return-128<=t&&128>t?sp(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function dt(t){if(isNaN(t)||!isFinite(t))return fn;if(0>t)return Ue(dt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=bi;return new _e(e,0)}function hc(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ue(hc(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dt(Math.pow(e,8)),s=fn,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=dt(Math.pow(e,i)),s=s.R(i).add(dt(o))):(s=s.R(n),s=s.add(dt(o)))}return s}var bi=4294967296,fn=go(0),Ci=go(1),Ta=go(16777216);P=_e.prototype;P.ea=function(){if(st(this))return-Ue(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:bi+s)*e,e*=bi}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Et(this))return"0";if(st(this))return"-"+Ue(this).toString(t);for(var e=dt(Math.pow(t,6)),n=this,s="";;){var r=or(n,e).g;n=ir(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Et(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Et(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function st(t){return t.h==-1}P.X=function(t){return t=ir(this,t),st(t)?-1:Et(t)?0:1};function Ue(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new _e(n,~t.h).add(Ci)}P.abs=function(){return st(this)?Ue(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function ir(t,e){return t.add(Ue(e))}P.R=function(t){if(Et(this)||Et(t))return fn;if(st(this))return st(t)?Ue(this).R(Ue(t)):Ue(Ue(this).R(t));if(st(t))return Ue(this.R(Ue(t)));if(0>this.X(Ta)&&0>t.X(Ta))return dt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Os(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Os(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Os(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Os(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new _e(n,0)};function Os(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function On(t,e){this.g=t,this.h=e}function or(t,e){if(Et(e))throw Error("division by zero");if(Et(t))return new On(fn,fn);if(st(t))return e=or(Ue(t),e),new On(Ue(e.g),Ue(e.h));if(st(e))return e=or(t,Ue(e)),new On(Ue(e.g),e.h);if(30<t.g.length){if(st(t)||st(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ci,s=e;0>=s.X(t);)n=Ia(n),s=Ia(s);var r=nn(n,1),i=nn(s,1);for(s=nn(s,2),n=nn(n,2);!Et(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=nn(s,1),n=nn(n,1)}return e=ir(t,r.R(e)),new On(r,e)}for(r=fn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=dt(n),o=i.R(e);st(o)||0<o.X(t);)n-=s,i=dt(n),o=i.R(e);Et(i)&&(i=Ci),r=r.add(i),t=ir(t,o)}return new On(r,t)}P.gb=function(t){return or(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new _e(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new _e(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new _e(n,this.h^t.h)};function Ia(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new _e(n,t.h)}function nn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new _e(r,t.h)}rr.prototype.createWebChannel=rr.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;wr.NO_ERROR=0;wr.TIMEOUT=8;wr.HTTP_ERROR=6;Du.COMPLETE="complete";Nu.EventType=_s;_s.OPEN="a";_s.CLOSE="b";_s.ERROR="c";_s.MESSAGE="d";Me.prototype.listen=Me.prototype.O;Se.prototype.listenOnce=Se.prototype.P;Se.prototype.getLastError=Se.prototype.Sa;Se.prototype.getLastErrorCode=Se.prototype.Ia;Se.prototype.getStatus=Se.prototype.da;Se.prototype.getResponseJson=Se.prototype.Wa;Se.prototype.getResponseText=Se.prototype.ja;Se.prototype.send=Se.prototype.ha;Se.prototype.setWithCredentials=Se.prototype.Oa;ot.prototype.digest=ot.prototype.l;ot.prototype.reset=ot.prototype.reset;ot.prototype.update=ot.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=dt;_e.fromString=hc;var Qp=function(){return new rr},Xp=function(){return _r()},Zr=wr,Jp=Du,Zp=Zt,Sa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},eg=Ts,Ps=Nu,tg=Se,ng=ot,dn=_e;const ba="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new ji("@firebase/firestore");function Ca(){return Qt.logLevel}function j(t,...e){if(Qt.logLevel<=ue.DEBUG){const n=e.map(mo);Qt.debug(`Firestore (${Nn}): ${t}`,...n)}}function St(t,...e){if(Qt.logLevel<=ue.ERROR){const n=e.map(mo);Qt.error(`Firestore (${Nn}): ${t}`,...n)}}function wn(t,...e){if(Qt.logLevel<=ue.WARN){const n=e.map(mo);Qt.warn(`Firestore (${Nn}): ${t}`,...n)}}function mo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: `+t;throw St(e),new Error(e)}function De(t,e){t||Z()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class rg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ig{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string"),new fc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new He(e)}}class og{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=He.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ag{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new og(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ug{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new lg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=cg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function En(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new et(0,0))}static max(){return new W(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return is.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof is?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends is{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends is{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}function fg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Pt(r,H.empty(),e)}function dg(t){return new Pt(t.readTime,t.key,-1)}class Pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(W.min(),H.empty(),-1)}static max(){return new Pt(W.max(),H.empty(),-1)}}function pg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==gg)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===i&&s(o)},c=>r(c))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}vo.ct=-1;function kr(t){return t==null}function Ai(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}}class Ls{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??xe.RED,this.left=r??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ka(this.data.getIterator())}getIteratorFrom(e){return new ka(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class ka{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ye(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new pc("Invalid base64 string: "+r):r}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const vg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(De(!!t),typeof t=="string"){let e=0;const n=vg.exec(t);if(De(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xt(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wo(t){const e=t.mapValue.fields.__previous_value__;return _o(e)?wo(e):e}function os(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,s,r,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class as{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_o(t)?4:wg(t)?9007199254740991:10:Z()}function yt(t,e){if(t===e)return!0;const n=Jt(t);if(n!==Jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return os(t).isEqual(os(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Lt(s.timestampValue),o=Lt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Xt(s.bytesValue).isEqual(Xt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?Ai(i)===Ai(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return En(t.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Aa(i)!==Aa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function ls(t,e){return(t.values||[]).find(n=>yt(n,e))!==void 0}function Tn(t,e){if(t===e)return 0;const n=Jt(t),s=Jt(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Da(t.timestampValue,e.timestampValue);case 4:return Da(os(t),os(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Xt(r),a=Xt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=pe(o[l],a[l]);if(u!==0)return u}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Ae(r.latitude),Ae(i.latitude));return o!==0?o:pe(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Tn(o[l],a[l]);if(u)return u}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===xs.mapValue&&i===xs.mapValue)return 0;if(r===xs.mapValue)return 1;if(i===xs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=pe(a[c],u[c]);if(h!==0)return h;const f=Tn(o[a[c]],l[u[c]]);if(f!==0)return f}return pe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Da(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Lt(t),s=Lt(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function In(t){return ki(t)}function ki(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Lt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ki(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ki(s.fields[a])}`;return i+"}"}(t.mapValue):Z();var e,n}function Di(t){return!!t&&"integerValue"in t}function Eo(t){return!!t&&"arrayValue"in t}function Na(t){return!!t&&"nullValue"in t}function Ra(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ei(t){return!!t&&"mapValue"in t}function zn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ei(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zn(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ei(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ei(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Dr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ht(zn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,W.min(),W.min(),W.min(),ht.empty(),0)}static newFoundDocument(e,n,s,r){return new ze(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new ze(e,2,n,W.min(),W.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,W.min(),W.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ar{constructor(e,n){this.position=e,this.inclusive=n}}function Ma(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Tn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $a(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Eg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gc{}class ke extends gc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Ig(e,n,s):n==="array-contains"?new Cg(e,s):n==="in"?new Ag(e,s):n==="not-in"?new kg(e,s):n==="array-contains-any"?new Dg(e,s):new ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Sg(e,s):new bg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Tn(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.matchesComparison(Tn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vt extends gc{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new vt(e,n)}matches(e){return mc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function mc(t){return t.op==="and"}function yc(t){return Tg(t)&&mc(t)}function Tg(t){for(const e of t.filters)if(e instanceof vt)return!1;return!0}function Ni(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+In(t.value);if(yc(t))return t.filters.map(e=>Ni(e)).join(",");{const e=t.filters.map(n=>Ni(n)).join(",");return`${t.op}(${e})`}}function vc(t,e){return t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&yt(n.value,s.value)}(t,e):t instanceof vt?function(n,s){return s instanceof vt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&vc(i,s.filters[o]),!0):!1}(t,e):void Z()}function _c(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${In(e.value)}`}(t):t instanceof vt?function(e){return e.op.toString()+" {"+e.getFilters().map(_c).join(" ,")+"}"}(t):"Filter"}class Ig extends ke{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sg extends ke{constructor(e,n){super(e,"in",n),this.keys=wc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bg extends ke{constructor(e,n){super(e,"not-in",n),this.keys=wc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class Cg extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eo(n)&&ls(n.arrayValue,this.value)}}class Ag extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ls(this.value.arrayValue,n)}}class kg extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ls(this.value.arrayValue,n)}}class Dg extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ls(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Oa(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ng(t,e,n,s,r,i,o)}function To(t){const e=fe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ni(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),kr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>In(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>In(s)).join(",")),e.dt=n}return e.dt}function Io(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Eg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$a(t.startAt,e.startAt)&&$a(t.endAt,e.endAt)}function Ri(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Rg(t,e,n,s,r,i,o,a){return new Nr(t,e,n,s,r,i,o,a)}function So(t){return new Nr(t)}function Pa(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $g(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Og(t){return t.collectionGroup!==null}function gn(t){const e=fe(t);if(e.wt===null){e.wt=[];const n=$g(e),s=Mg(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new qn(n)),e.wt.push(new qn(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new qn(Ze.keyField(),i))}}}return e.wt}function bt(t){const e=fe(t);if(!e._t)if(e.limitType==="F")e._t=Oa(e.path,e.collectionGroup,gn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of gn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new qn(i.field,o))}const s=e.endAt?new ar(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ar(e.startAt.position,e.startAt.inclusive):null;e._t=Oa(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Mi(t,e,n){return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rr(t,e){return Io(bt(t),bt(e))&&t.limitType===e.limitType}function Ec(t){return`${To(bt(t))}|lt:${t.limitType}`}function $i(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>_c(s)).join(", ")}]`),kr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>In(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>In(s)).join(",")),`Target(${n})`}(bt(t))}; limitType=${t.limitType})`}function Mr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of gn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ma(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,gn(n),s)||n.endAt&&!function(r,i,o){const a=Ma(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,gn(n),s))}(t,e)}function Pg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tc(t){return(e,n)=>{let s=!1;for(const r of gn(t)){const i=Lg(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Lg(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Tn(a,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new be(H.comparator);function xt(){return xg}const Ic=new be(H.comparator);function xn(...t){let e=Ic;for(const n of t)e=e.insert(n.key,n);return e}function Ug(t){let e=Ic;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qt(){return Kn()}function Sc(){return Kn()}function Kn(){return new Rn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fg=new Ye(H.comparator);function ae(...t){let e=Fg;for(const n of t)e=e.add(n);return e}const Vg=new Ye(pe);function Bg(){return Vg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ai(e)?"-0":e}}function Hg(t){return{integerValue:""+t}}/**
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
 */class $r{constructor(){this._=void 0}}function zg(t,e,n){return t instanceof Oi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&_o(r)&&(r=wo(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof lr?bc(t,e):t instanceof ur?Cc(t,e):function(s,r){const i=Kg(s,r),o=La(i)+La(s.gt);return Di(i)&&Di(s.gt)?Hg(o):jg(s.serializer,o)}(t,e)}function qg(t,e,n){return t instanceof lr?bc(t,e):t instanceof ur?Cc(t,e):n}function Kg(t,e){return t instanceof Pi?Di(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Oi extends $r{}class lr extends $r{constructor(e){super(),this.elements=e}}function bc(t,e){const n=Ac(e);for(const s of t.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ur extends $r{constructor(e){super(),this.elements=e}}function Cc(t,e){let n=Ac(e);for(const s of t.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class Pi extends $r{constructor(e,n){super(),this.serializer=e,this.gt=n}}function La(t){return Ae(t.integerValue||t.doubleValue)}function Ac(t){return Eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof lr&&s instanceof lr||n instanceof ur&&s instanceof ur?En(n.elements,s.elements,yt):n instanceof Pi&&s instanceof Pi?yt(n.gt,s.gt):n instanceof Oi&&s instanceof Oi}(t.transform,e.transform)}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bo{}function kc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wg(t.key,Yt.none()):new Co(t.key,t.data,Yt.none());{const n=t.data,s=ht.empty();let r=new Ye(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Or(t.key,s,new Nt(r.toArray()),Yt.none())}}function Gg(t,e,n){t instanceof Co?function(s,r,i){const o=s.value.clone(),a=Ua(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(s,r,i){if(!zs(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ua(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Yn(t,e,n,s){return t instanceof Co?function(r,i,o,a){if(!zs(r.precondition,i))return o;const l=r.value.clone(),u=Fa(r.fieldTransforms,a,i);return l.setAll(u),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Or?function(r,i,o,a){if(!zs(r.precondition,i))return o;const l=Fa(r.fieldTransforms,a,i),u=i.data;return u.setAll(Dc(r)),u.setAll(l),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(r,i,o){return zs(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&En(n,s,(r,i)=>Yg(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends bo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Or extends bo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ua(t,e,n){const s=new Map;De(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,qg(o,a,n[r]))}return s}function Fa(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,zg(i,o,e))}return s}class Wg extends bo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Gg(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Yn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Yn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Sc();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=kc(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(n,s)=>xa(n,s))&&En(this.baseMutations,e.baseMutations,(n,s)=>xa(n,s))}}/**
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
 */class Xg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jg{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,oe;function Nc(t){if(t===void 0)return St("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ce.OK:return O.OK;case Ce.CANCELLED:return O.CANCELLED;case Ce.UNKNOWN:return O.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return O.INTERNAL;case Ce.UNAVAILABLE:return O.UNAVAILABLE;case Ce.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ce.NOT_FOUND:return O.NOT_FOUND;case Ce.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ce.ABORTED:return O.ABORTED;case Ce.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ce.DATA_LOSS:return O.DATA_LOSS;default:return Z()}}(oe=Ce||(Ce={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ao{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Us}static getOrCreateInstance(){return Us===null&&(Us=new Ao),Us}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Us=null;/**
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
 */function Zg(){return new TextEncoder}/**
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
 */const em=new dn([4294967295,4294967295],0);function Va(t){const e=Zg().encode(t),n=new ng;return n.update(e),new Uint8Array(n.digest())}function Ba(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dn([n,s],0),new dn([r,i],0)]}class ko{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Un(`Invalid padding: ${n}`);if(s<0)throw new Un(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Un(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=dn.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(dn.fromNumber(s)));return r.compare(em)===1&&(r=new dn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Va(e),[s,r]=Ba(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ko(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Va(e),[s,r]=Ba(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pr(W.min(),r,new be(pe),xt(),ae())}}class Cs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Cs(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Rc{constructor(e,n){this.targetId=e,this.Vt=n}}class Mc{constructor(e,n,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ja{constructor(){this.St=0,this.Dt=za(),this.Ct=Ge.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ae(),n=ae(),s=ae();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new Cs(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=za()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class tm{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=xt(),this.zt=Ha(),this.Wt=new be(pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Ri(o))if(r===0){const a=new H(o.path);this.Yt(s,a,ze.newNoDocument(a,W.min()))}else De(r===1);else{const a=this.ie(s);if(a!==r){const l=this.re(e,a);if(l!==0){this.ee(s);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=Ao.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,p,v,g,m,R;const D={localCacheCount:c,existenceFilterCount:h.count},N=h.unchangedNames;return N&&(D.bloomFilter={applied:u===0,hashCount:(f=N==null?void 0:N.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(g=(v=(p=N==null?void 0:N.bits)===null||p===void 0?void 0:p.bitmap)===null||v===void 0?void 0:v.length)!==null&&g!==void 0?g:0,padding:(R=(m=N==null?void 0:N.bits)===null||m===void 0?void 0:m.padding)!==null&&R!==void 0?R:0}),D}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let l,u;try{l=Xt(i).toUint8Array()}catch(c){if(c instanceof pc)return wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new ko(l,o,a)}catch(c){return wn(c instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:r!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Ri(a.target)){const l=new H(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ze.newNoDocument(l,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=ae();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Pr(e,n,this.Wt,this.jt,s);return this.jt=xt(),this.zt=Ha(),this.Wt=new be(pe),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ja,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ye(pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ja),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new be(H.comparator)}function za(){return new be(H.comparator)}const nm={asc:"ASCENDING",desc:"DESCENDING"},sm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rm={and:"AND",or:"OR"};class im{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Li(t,e){return t.useProto3Json||kr(e)?e:{value:e}}function om(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function am(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mn(t){return De(!!t),W.fromTimestamp(function(e){const n=Lt(e);return new et(n.seconds,n.nanos)}(t))}function lm(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $c(t){const e=Ie.fromString(t);return De(xc(e)),e}function ti(t,e){const n=$c(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Oc(n))}function xi(t,e){return lm(t.databaseId,e)}function um(t){const e=$c(t);return e.length===4?Ie.emptyPath():Oc(e)}function qa(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oc(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(De(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?O.UNKNOWN:Nc(l.code);return new z(u,l.message||"")}(o);n=new Mc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ti(t,s.document.name),i=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):W.min(),a=new ht({mapValue:{fields:s.document.fields}}),l=ze.newFoundDocument(r,i,o,a),u=s.targetIds||[],c=s.removedTargetIds||[];n=new qs(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ti(t,s.document),i=s.readTime?mn(s.readTime):W.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ti(t,s.document),i=s.removedTargetIds||[];n=new qs([],i,r,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Jg(r,i),a=s.targetId;n=new Rc(a,o)}}return n}function hm(t,e){return{documents:[xi(t,e.path)]}}function fm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=xi(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xi(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return Lc(vt.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:on(c.field),direction:gm(c.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Li(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function dm(t){let e=um(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1);const c=n.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=function(c){const h=Pc(c);return h instanceof vt&&yc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new qn(an(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,kr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ar(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ar(f,h)}(n.endAt)),Rg(e,r,o,i,a,"F",l,u)}function pm(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=an(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=an(e.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=an(e.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=an(e.unaryFilter.field);return ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(an(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return vt.create(e.compositeFilter.filters.map(n=>Pc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function gm(t){return nm[t]}function mm(t){return sm[t]}function ym(t){return rm[t]}function on(t){return{fieldPath:t.canonicalString()}}function an(t){return Ze.fromServerFormat(t.fieldPath)}function Lc(t){return t instanceof ke?function(e){if(e.op==="=="){if(Ra(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NAN"}};if(Na(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ra(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NAN"}};if(Na(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(e.field),op:mm(e.op),value:e.value}}}(t):t instanceof vt?function(e){const n=e.getFilters().map(s=>Lc(s));return n.length===1?n[0]:{compositeFilter:{op:ym(e.op),filters:n}}}(t):Z()}function xc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.fe=e}}function _m(t){const e=dm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.rn=new Em}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Pt.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Em{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ye(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ye(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Sn(0)}static Mn(){return new Sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.changes=new Rn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Im{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Yn(s.mutation,r,Nt.empty(),et.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=qt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=xn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=xt();const o=Kn(),a=Kn();return n.forEach((l,u)=>{const c=s.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof Or)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Yn(c.mutation,u,c.mutation.getFieldMask(),et.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Im(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Kn();let r=new be((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=s.get(l)||Nt.empty();c=a.applyToLocalView(u,c),s.set(l,c);const h=(r.get(a.batchId)||ae()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Sc();c.forEach(f=>{if(!i.has(f)){const p=kc(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Og(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(qt());let a=-1,l=i;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ae())).next(c=>({batchId:a,changes:Ug(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=xn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=xn();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const l=function(u,c){return new Nr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ze.newInvalidDocument(u)))});let o=xn();return i.forEach((a,l)=>{const u=r.get(a);u!==void 0&&Yn(u.mutation,l,Nt.empty(),et.now()),Mr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:mn(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:_m(s.bundledQuery),readTime:mn(s.readTime)}}(n)),C.resolve()}}/**
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
 */class Cm{constructor(){this.overlays=new be(H.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qt();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=qt(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let c=i.get(u.largestBatchId);c===null&&(c=qt(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=qt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return C.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Xg(n,s));let i=this.ls.get(n);i===void 0&&(i=ae(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.fs=new Ye(Ne.ds),this.ws=new Ye(Ne._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ne(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new H(new Ie([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new H(new Ie([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=ae();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return H.comparator(e.key,n.key)||pe(e.As,n.As)}static _s(e,n){return pe(e.As,n.As)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ye(Ne.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qg(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ye(pe);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),C.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new H(i),0);let a=new Ye(pe);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){De(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return C.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ne(n,0),r=this.Rs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.Ds=e,this.docs=new be(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=xt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=xt();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pg(dg(c),s)<=0||(r.has(c.key)||Mr(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Z()}Cs(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Dm(this)}getSize(e){return C.resolve(this.size)}}class Dm extends Tm{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.persistence=e,this.xs=new Rn(n=>To(n),Io),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Do,this.targetCount=0,this.Ms=Sn.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Sn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.$s={},this.overlays={},this.Os=new vo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Nm(this),this.indexManager=new wm,this.remoteDocumentCache=function(s){return new km(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new vm(n),this.qs=new bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Cm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new Am(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new Mm(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return C.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class Mm extends mg{constructor(e){super(),this.currentSequenceNumber=e}}class No{constructor(e){this.persistence=e,this.Qs=new Do,this.js=null}static zs(e){return new No(e)}get Ws(){if(this.js)return this.js;throw Z()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,s=>{const r=H.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ro(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Pa(n))return C.resolve(null);let s=bt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Mi(n,null,"F"),s=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ae(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Mi(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,s,r){return Pa(n)||r.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Ca()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$i(n)),this.Wi(e,o,n,fg(r,-1)))})}ji(e,n){let s=new Ye(Tc(e));return n.forEach((r,i)=>{Mr(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Ca()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",$i(n)),this.Ui.getDocumentsMatchingQuery(e,n,Pt.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new be(pe),this.Yi=new Rn(i=>To(i),Io),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sm(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Pm(t,e,n,s){return new Om(t,e,n,s)}async function Uc(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=ae();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(s,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Fc(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Lm(t,e){const n=fe(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,c.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ge.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),r=r.insert(h,p),function(v,g,m){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,p,c)&&a.push(n.Bs.updateTargetData(i,p))});let l=xt(),u=ae();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(xm(i,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!s.isEqual(W.min())){const c=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ji=r,i))}function xm(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=xt();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:r}})}function Um(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Rt(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Ui(t,e,n){const s=fe(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!bs(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Ka(t,e,n){const s=fe(t);let r=W.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=fe(a),h=c.Yi.get(u);return h!==void 0?C.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(s,o,bt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:ae())).next(a=>(Fm(s,Pg(e),a),{documents:a,ir:i})))}function Fm(t,e,n){let s=t.Xi.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Ya{constructor(){this.activeTargetIds=Bg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vm{constructor(){this.Hr=new Ya,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ya,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fs=null;function ni(){return Fs===null?Fs=268435456+Math.round(2147483648*Math.random()):Fs++,"0x"+Fs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class zm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=ni(),a=this.To(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,r,i),this.Ao(e,a,l,s).then(u=>(j("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw wn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Nn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=jm[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=ni();return new Promise((o,a)=>{const l=new tg;l.setWithCredentials(!0),l.listenOnce(Jp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zr.NO_ERROR:const c=l.getResponseJson();j(Be,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(c)),o(c);break;case Zr.TIMEOUT:j(Be,`RPC '${e}' ${i} timed out`),a(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case Zr.HTTP_ERROR:const h=l.getStatus();if(j(Be,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(p.status);a(new z(v,p.message))}else a(new z(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(O.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(Be,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);j(Be,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",u,s,15)})}Ro(e,n,s){const r=ni(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qp(),a=Xp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new eg({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const c=i.join("");j(Be,`Creating RPC '${e}' stream ${r}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const v=new Hm({ro:m=>{p?j(Be,`Not sending because RPC '${e}' stream ${r} is closed:`,m):(f||(j(Be,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),j(Be,`RPC '${e}' stream ${r} sending:`,m),h.send(m))},oo:()=>h.close()}),g=(m,R,D)=>{m.listen(R,N=>{try{D(N)}catch(y){setTimeout(()=>{throw y},0)}})};return g(h,Ps.EventType.OPEN,()=>{p||j(Be,`RPC '${e}' stream ${r} transport opened.`)}),g(h,Ps.EventType.CLOSE,()=>{p||(p=!0,j(Be,`RPC '${e}' stream ${r} transport closed`),v.wo())}),g(h,Ps.EventType.ERROR,m=>{p||(p=!0,wn(Be,`RPC '${e}' stream ${r} transport errored:`,m),v.wo(new z(O.UNAVAILABLE,"The operation could not be completed")))}),g(h,Ps.EventType.MESSAGE,m=>{var R;if(!p){const D=m.data[0];De(!!D);const N=D,y=N.error||((R=N[0])===null||R===void 0?void 0:R.error);if(y){j(Be,`RPC '${e}' stream ${r} received error:`,y);const T=y.status;let k=function(_){const B=Ce[_];if(B!==void 0)return Nc(B)}(T),w=y.message;k===void 0&&(k=O.INTERNAL,w="Unknown error status: "+T+" with message "+y.message),p=!0,v.wo(new z(k,w)),h.close()}else j(Be,`RPC '${e}' stream ${r} received:`,D),v._o(D)}}),g(a,Zp.STAT_EVENT,m=>{m.stat===Sa.PROXY?j(Be,`RPC '${e}' stream ${r} detected buffering proxy`):m.stat===Sa.NOPROXY&&j(Be,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function si(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){return new im(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,s,r,i,o,a,l){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Bc(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new z(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Km extends qm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=cm(this.serializer,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?mn(i.readTime):W.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=qa(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Ri(a)?{documents:hm(r,a)}:{query:fm(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=am(r,i.resumeToken);const l=Li(r,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(W.min())>0){o.readTime=om(r,i.snapshotVersion.toTimestamp());const l=Li(r,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=pm(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=qa(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(O.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(O.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Gm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(St(n),this.mu=!1):j("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{ks(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=fe(a);l.vu.add(4),await As(l),l.bu.set("Unknown"),l.vu.delete(4),await Lr(l)}(this))})}),this.bu=new Gm(s,r)}}async function Lr(t){if(ks(t))for(const e of t.Ru)await e(!0)}async function As(t){for(const e of t.Ru)await e(!1)}function jc(t,e){const n=fe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Oo(n)?$o(n):Mn(n).Ko()&&Mo(n,e))}function Hc(t,e){const n=fe(t),s=Mn(n);n.Au.delete(e),s.Ko()&&zc(n,e),n.Au.size===0&&(s.Ko()?s.jo():ks(n)&&n.bu.set("Unknown"))}function Mo(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mn(t).su(e)}function zc(t,e){t.Vu.qt(e),Mn(t).iu(e)}function $o(t){t.Vu=new tm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Mn(t).start(),t.bu.gu()}function Oo(t){return ks(t)&&!Mn(t).Uo()&&t.Au.size>0}function ks(t){return fe(t).vu.size===0}function qc(t){t.Vu=void 0}async function Qm(t){t.Au.forEach((e,n)=>{Mo(t,e)})}async function Xm(t,e){qc(t),Oo(t)?(t.bu.Iu(e),$o(t)):t.bu.set("Unknown")}async function Jm(t,e,n){if(t.bu.set("Online"),e instanceof Mc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wa(t,s)}else if(e instanceof qs?t.Vu.Ht(e):e instanceof Rc?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const s=await Fc(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Au.get(l);u&&r.Au.set(l,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const u=r.Au.get(a);if(!u)return;r.Au.set(a,u.withResumeToken(Ge.EMPTY_BYTE_STRING,u.snapshotVersion)),zc(r,a);const c=new Rt(u.target,a,l,u.sequenceNumber);Mo(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Wa(t,s)}}async function Wa(t,e,n){if(!bs(e))throw e;t.vu.add(1),await As(t),t.bu.set("Offline"),n||(n=()=>Fc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Lr(t)})}async function Qa(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=ks(n);n.vu.add(3),await As(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Lr(n)}async function Zm(t,e){const n=fe(t);e?(n.vu.delete(2),await Lr(n)):e||(n.vu.add(2),await As(n),n.bu.set("Unknown"))}function Mn(t){return t.Su||(t.Su=function(e,n,s){const r=fe(e);return r.fu(),new Km(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Qm.bind(null,t),ao:Xm.bind(null,t),nu:Jm.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Oo(t)?$o(t):t.bu.set("Unknown")):(await t.Su.stop(),qc(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Po(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(t,e){if(St("AsyncQueue",`${e}: ${t}`),bs(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=xn(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.Cu=new be(H.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Z():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bn{constructor(e,n,s,r,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bn(e,n,yn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.Nu=void 0,this.listeners=[]}}class ty{constructor(){this.queries=new Rn(e=>Ec(e),Rr),this.onlineState="Unknown",this.ku=new Set}}async function ny(t,e){const n=fe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ey),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Kc(o,`Initialization of query '${$i(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Lo(n)}async function sy(t,e){const n=fe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ry(t,e){const n=fe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Lo(n)}function iy(t,e,n){const s=fe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Lo(t){t.ku.forEach(e=>{e.next()})}class oy{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.key=e}}class Gc{constructor(e){this.key=e}}class ay{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ae(),this.mutatedKeys=ae(),this.tc=Tc(e),this.ec=new yn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Xa,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const f=r.get(c),p=Mr(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;f&&p?f.data.isEqual(p.data)?v!==g&&(s.track({type:3,doc:p}),m=!0):this.rc(f,p)||(s.track({type:2,doc:p}),m=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),m=!0):f&&!p&&(s.track({type:1,doc:f}),m=!0,(l||u)&&(a=!0)),m&&(p?(o=o.add(p),i=g?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),s.track({type:1,doc:c})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((u,c)=>function(h,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return p(h)-p(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new bn(this.query,e.ec,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ae(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Gc(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Yc(s))}),n}hc(e){this.Yu=e.ir,this.Zu=ae();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return bn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ly{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uy{constructor(e){this.key=e,this.fc=!1}}class cy{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Rn(a=>Ec(a),Rr),this._c=new Map,this.mc=new Set,this.gc=new be(H.comparator),this.yc=new Map,this.Ic=new Do,this.Tc={},this.Ec=new Map,this.Ac=Sn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function hy(t,e){const n=vy(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Um(n.localStore,bt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await fy(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&jc(n.remoteStore,o)}return r}async function fy(t,e,n,s,r){t.Rc=(h,f,p)=>async function(v,g,m,R){let D=g.view.sc(m);D.zi&&(D=await Ka(v.localStore,g.query,!1).then(({documents:T})=>g.view.sc(T,D)));const N=R&&R.targetChanges.get(g.targetId),y=g.view.applyChanges(D,v.isPrimaryClient,N);return Za(v,g.targetId,y.cc),y.snapshot}(t,h,f,p);const i=await Ka(t.localStore,e,!0),o=new ay(e,i.ir),a=o.sc(i.documents),l=Cs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,l);Za(t,n,u.cc);const c=new ly(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function dy(t,e){const n=fe(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Rr(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ui(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Hc(n.remoteStore,s.targetId),Fi(n,s.targetId)}).catch(yo)):(Fi(n,s.targetId),await Ui(n.localStore,s.targetId,!0))}async function Wc(t,e){const n=fe(t);try{const s=await Lm(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?De(o.fc):r.removedDocuments.size>0&&(De(o.fc),o.fc=!1))}),await Xc(n,s,e)}catch(s){await yo(s)}}function Ja(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=fe(i);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Lo(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function py(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new be(H.comparator);o=o.insert(i,ze.newNoDocument(i,W.min()));const a=ae().add(i),l=new Pr(W.min(),new Map,new be(pe),o,a);await Wc(s,l),s.gc=s.gc.remove(i),s.yc.delete(e),xo(s)}else await Ui(s.localStore,e,!1).then(()=>Fi(s,e,n)).catch(yo)}function Fi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Qc(t,s)})}function Qc(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Hc(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),xo(t))}function Za(t,e,n){for(const s of n)s instanceof Yc?(t.Ic.addReference(s.key,e),gy(t,s)):s instanceof Gc?(j("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Qc(t,s.key)):Z()}function gy(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.mc.add(s),xo(t))}function xo(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new H(Ie.fromString(e)),s=t.Ac.next();t.yc.set(s,new uy(n)),t.gc=t.gc.insert(n,s),jc(t.remoteStore,new Rt(bt(So(n.path)),s,"TargetPurposeLimboResolution",vo.ct))}}async function Xc(t,e,n){const s=fe(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const c=Ro.Li(l.targetId,u);i.push(c)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,l){const u=fe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!bs(c))throw c;j("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,v)}}}(s.localStore,i))}async function my(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Uc(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new z(O.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xc(n,s.er)}}function yy(t,e){const n=fe(t),s=n.yc.get(e);if(s&&s.fc)return ae().add(s.key);{let r=ae();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function vy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=py.bind(null,e),e.dc.nu=ry.bind(null,e.eventManager),e.dc.Pc=iy.bind(null,e.eventManager),e}class el{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Pm(this.persistence,new $m,e.initialUser,this.serializer)}createPersistence(e){return new Rm(No.zs,this.serializer)}createSharedClientState(e){return new Vm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _y{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ja(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=my.bind(null,this.syncEngine),await Zm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ty}createDatastore(e){const n=Vc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new zm(r));var r;return function(i,o,a,l){return new Ym(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ja(this.syncEngine,a,0),o=Ga.D()?new Ga:new Bm,new Wm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,u){const c=new cy(s,r,i,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);j("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await As(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=He.UNAUTHENTICATED,this.clientId=dc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ri(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Uc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Iy(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Qa(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qa(e.remoteStore,i)),t._onlineComponents=e}function Ty(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Iy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await ri(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ty(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await ri(t,new el)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await ri(t,new el);return t._offlineComponents}async function Sy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await tl(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await tl(t,new _y))),t._onlineComponents}async function nl(t){const e=await Sy(t),n=e.eventManager;return n.onListen=hy.bind(null,e.syncEngine),n.onUnlisten=dy.bind(null,e.syncEngine),n}/**
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
 */function Jc(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cy(t,e,n,s){if(e===!0&&s===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rl(t){if(!H.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ay(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Ks(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ay(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jc((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Uo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sg;switch(n.type){case"firstParty":return new ag(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sl.get(e);n&&(j("ComponentProvider","Removing Datastore"),sl.delete(e),n.terminate())}(this),Promise.resolve()}}function ky(t,e,n,s={}){var r;const i=(t=Ks(t,Uo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=He.MOCK_USER;else{a=Hh(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(u)}t._authCredentials=new rg(new fc(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class xr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class us extends xr{constructor(e,n,s){super(e,n,So(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new H(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function Dy(t,e,...n){if(t=An(t),arguments.length===1&&(e=dc.A()),by("doc","path",e),t instanceof Uo){const s=Ie.fromString(e,...n);return rl(s),new Tt(t,null,new H(s))}{if(!(t instanceof Tt||t instanceof us))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return rl(s),new Tt(t.firestore,t instanceof us?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bc(this,"async_queue_retry"),this.Xc=()=>{const n=si();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=si();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=si();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new pn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!bs(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Po.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&Z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function ol(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Vi extends Uo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Ny,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zc(this),this._firestoreClient.terminate()}}function Ry(t,e){const n=typeof t=="object"?t:Zf(),s=typeof t=="string"?t:e||"(default)",r=Qf(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Vh("firestore");i&&ky(r,...i)}return r}function My(t){return t._firestoreClient||Zc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zc(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,l,u){return new _g(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Jc(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Ey(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(Ge.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cr(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}const Oy=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(Oy)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new z(O.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ly(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ly extends th{data(){return super.data()}}function nh(t,e){return typeof e=="string"?Py(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uy{convertValue(e,n="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Dr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new $y(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wo(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(os(e));default:return null}}convertTimestamp(e){const n=Lt(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);De(xc(s));const r=new as(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sh extends th{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(nh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ys extends sh{data(e={}){return super.data(e)}}class Fy{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Fn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ys(this._firestore,this._userDataWriter,s.key,s,new Fn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ys(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ys(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Fn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Vy(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class rh extends Uy{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function By(t,...e){var n,s,r;t=An(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ol(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ol(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,u,c;if(t instanceof Tt)u=Ks(t.firestore,Vi),c=So(t._key.path),l={next:h=>{e[o]&&e[o](jy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ks(t,xr);u=Ks(h.firestore,Vi),c=h._query;const f=new rh(u);l={next:p=>{e[o]&&e[o](new Fy(u,f,h,p))},error:e[o+1],complete:e[o+2]},xy(t._query)}return function(h,f,p,v){const g=new wy(v),m=new oy(f,g,p);return h.asyncQueue.enqueueAndForget(async()=>ny(await nl(h),m)),()=>{g.Dc(),h.asyncQueue.enqueueAndForget(async()=>sy(await nl(h),m))}}(My(u),c,a,l)}function jy(t,e,n){const s=n.docs.get(e._key),r=new rh(t);return new sh(t,r,e._key,s,new Fn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Nn=n})(ps),Wt(new Ot("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Vi(new ig(n.getProvider("auth-internal")),new ug(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),pt(ba,"3.13.0",t),pt(ba,"3.13.0","esm2017")})();function Hy(t,e,n){let s;if(!globalThis.window){const{subscribe:o}=js(n);return{subscribe:o,ref:null,id:""}}if(!t){console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");const{subscribe:o}=js(null);return{subscribe:o,ref:null,id:""}}const r=typeof e=="string"?Dy(t,e):e,{subscribe:i}=js(n,o=>(s=By(r,a=>{o(a.data()??null)}),()=>s()));return{subscribe:i,ref:r,id:r.id}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="firebasestorage.googleapis.com",zy="storageBucket",qy=2*60*1e3,Ky=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends At{constructor(e,n,s=0){super(ii(e),`Firebase Storage: ${n} (${ii(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ii(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function ii(t){return"storage/"+t}function Yy(){const t="An unknown error occurred, please check the error payload for server response.";return new wt(_t.UNKNOWN,t)}function Gy(){return new wt(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wy(){return new wt(_t.CANCELED,"User canceled the upload/download.")}function Qy(t){return new wt(_t.INVALID_URL,"Invalid URL '"+t+"'.")}function Xy(t){return new wt(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ll(t){return new wt(_t.INVALID_ARGUMENT,t)}function oh(){return new wt(_t.APP_DELETED,"The Firebase app was deleted.")}function Jy(t){return new wt(_t.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(s.path==="")return s;throw Xy(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${r}/o${f}`,"i"),v={bucket:1,path:3},g=n===ih?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",R=new RegExp(`^https?://${g}/${r}/${m}`,"i"),N=[{regex:a,indices:l,postModify:i},{regex:p,indices:v,postModify:u},{regex:R,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<N.length;y++){const T=N[y],k=T.regex.exec(e);if(k){const w=k[T.indices.bucket];let _=k[T.indices.path];_||(_=""),s=new it(w,_),T.postModify(s);break}}if(s==null)throw Qy(e);return s}}class Zy{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...m){u||(u=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(p,l())},m)}function f(){i&&clearTimeout(i)}function p(m,...R){if(u){f();return}if(m){f(),c.call(null,m,...R);return}if(l()||o){f(),c.call(null,m,...R);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let v=!1;function g(m){v||(v=!0,f(),!u&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,g(!0)},n),g}function tv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return t!==void 0}function ul(t,e,n,s){if(s<e)throw ll(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ll(`Invalid value for '${t}'. Expected ${n} or less.`)}function sv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hr||(hr={}));/**
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
 */function rv(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,s,r,i,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Vs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hr.NO_ERROR,l=i.getStatus();if(!a||rv(l,this.additionalRetryCodes_)&&this.retry){const c=i.getErrorCode()===hr.ABORT;s(!1,new Vs(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new Vs(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nv(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Yy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?oh():Wy();o(l)}else{const l=Gy();o(l)}};this.canceled_?n(!1,new Vs(!1,null,!0)):this.backoffId_=ev(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ov(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function av(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cv(t,e,n,s,r,i,o=!0){const a=sv(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return lv(u,e),ov(u,n),av(u,i),uv(u,s),new iv(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fr(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fv(this._location.path)}get storage(){return this._service}get parent(){const e=hv(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Jy(e)}}function cl(t,e){const n=e==null?void 0:e[zy];return n==null?null:it.makeFromBucketSpec(n,t)}class dv{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ih,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qy,this._maxUploadRetryTime=Ky,this._requests=new Set,r!=null?this._bucket=it.makeFromBucketSpec(r,this._host):this._bucket=cl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=cl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ul("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ul("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Zy(oh());{const o=cv(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const hl="@firebase/storage",fl="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="storage";function gv(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new dv(n,s,r,e,ps)}function mv(){Wt(new Ot(pv,gv,"PUBLIC").setMultipleInstances(!0)),pt(hl,fl,""),pt(hl,fl,"esm2017")}mv();var yv="firebase",vv="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(yv,vv,"app");function dl(t){let e,n;return{c(){e=I("span"),n=G(t[1]),E(e,"class","svelte-utgky1")},m(s,r){ne(s,e,r),d(e,n)},p(s,r){r&2&&he(n,s[1])},d(s){s&&ee(e)}}}function _v(t){let e,n,s,r,i,o,a,l,u=t[1]&&dl(t);const c=t[3].default,h=mh(c,t,t[2],null);return{c(){e=I("section"),n=I("header"),s=I("strong"),r=G(t[0]),i=V(),u&&u.c(),o=V(),a=I("article"),h&&h.c(),E(n,"class","svelte-utgky1"),E(a,"class","svelte-utgky1"),E(e,"class","svelte-utgky1")},m(f,p){ne(f,e,p),d(e,n),d(n,s),d(s,r),d(n,i),u&&u.m(n,null),d(e,o),d(e,a),h&&h.m(a,null),l=!0},p(f,[p]){(!l||p&1)&&he(r,f[0]),f[1]?u?u.p(f,p):(u=dl(f),u.c(),u.m(n,null)):u&&(u.d(1),u=null),h&&h.p&&(!l||p&4)&&vh(h,c,f,f[2],l?yh(c,f[2],p,null):_h(f[2]),null)},i(f){l||(ce(h,f),l=!0)},o(f){we(h,f),l=!1},d(f){f&&ee(e),u&&u.d(),h&&h.d(f)}}}function wv(t,e,n){let{$$slots:s={},$$scope:r}=e,{header:i}=e,{subHeader:o=""}=e;return t.$$set=a=>{"header"in a&&n(0,i=a.header),"subHeader"in a&&n(1,o=a.subHeader),"$$scope"in a&&n(2,r=a.$$scope)},[i,o,r,s]}class sn extends lt{constructor(e){super(),at(this,e,wv,_v,rt,{header:0,subHeader:1})}}function pl(t,e,n){const s=t.slice();return s[1]=e[n],s}function gl(t){let e,n=t[1]+"",s;return{c(){e=I("li"),s=G(n),E(e,"class","svelte-1axfeen")},m(r,i){ne(r,e,i),d(e,s)},p(r,i){i&1&&n!==(n=r[1]+"")&&he(s,n)},d(r){r&&ee(e)}}}function Ev(t){let e,n=Re(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=gl(pl(t,n,r));return{c(){e=I("ul");for(let r=0;r<s.length;r+=1)s[r].c();E(e,"class","tags svelte-1axfeen")},m(r,i){ne(r,e,i);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(r,[i]){if(i&1){n=Re(r[0]);let o;for(o=0;o<n.length;o+=1){const a=pl(r,n,o);s[o]?s[o].p(a,i):(s[o]=gl(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Te,o:Te,d(r){r&&ee(e),Ct(s,r)}}}function Tv(t,e,n){let{items:s}=e;return t.$$set=r=>{"items"in r&&n(0,s=r.items)},[s]}class Iv extends lt{constructor(e){super(),at(this,e,Tv,Ev,rt,{items:0})}}var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ah={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Fo,function(){var n=1e3,s=6e4,r=36e5,i="millisecond",o="second",a="minute",l="hour",u="day",c="week",h="month",f="quarter",p="year",v="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var A=["th","st","nd","rd"],S=$%100;return"["+$+(A[(S-20)%10]||A[S]||A[0])+"]"}},N=function($,A,S){var L=String($);return!L||L.length>=A?$:""+Array(A+1-L.length).join(S)+$},y={s:N,z:function($){var A=-$.utcOffset(),S=Math.abs(A),L=Math.floor(S/60),b=S%60;return(A<=0?"+":"-")+N(L,2,"0")+":"+N(b,2,"0")},m:function $(A,S){if(A.date()<S.date())return-$(S,A);var L=12*(S.year()-A.year())+(S.month()-A.month()),b=A.clone().add(L,h),U=S-b<0,x=A.clone().add(L+(U?-1:1),h);return+(-(L+(S-b)/(U?b-x:x-b))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:h,y:p,w:c,d:u,D:v,h:l,m:a,s:o,ms:i,Q:f}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},T="en",k={};k[T]=D;var w="$isDayjsObject",_=function($){return $ instanceof q||!(!$||!$[w])},B=function $(A,S,L){var b;if(!A)return T;if(typeof A=="string"){var U=A.toLowerCase();k[U]&&(b=U),S&&(k[U]=S,b=U);var x=A.split("-");if(!b&&x.length>1)return $(x[0])}else{var Y=A.name;k[Y]=A,b=Y}return!L&&b&&(T=b),b||!L&&T},F=function($,A){if(_($))return $.clone();var S=typeof A=="object"?A:{};return S.date=$,S.args=arguments,new q(S)},M=y;M.l=B,M.i=_,M.w=function($,A){return F($,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var q=function(){function $(S){this.$L=B(S.locale,null,!0),this.parse(S),this.$x=this.$x||S.x||{},this[w]=!0}var A=$.prototype;return A.parse=function(S){this.$d=function(L){var b=L.date,U=L.utc;if(b===null)return new Date(NaN);if(M.u(b))return new Date;if(b instanceof Date)return new Date(b);if(typeof b=="string"&&!/Z$/i.test(b)){var x=b.match(m);if(x){var Y=x[2]-1||0,le=(x[7]||"0").substring(0,3);return U?new Date(Date.UTC(x[1],Y,x[3]||1,x[4]||0,x[5]||0,x[6]||0,le)):new Date(x[1],Y,x[3]||1,x[4]||0,x[5]||0,x[6]||0,le)}}return new Date(b)}(S),this.init()},A.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},A.$utils=function(){return M},A.isValid=function(){return this.$d.toString()!==g},A.isSame=function(S,L){var b=F(S);return this.startOf(L)<=b&&b<=this.endOf(L)},A.isAfter=function(S,L){return F(S)<this.startOf(L)},A.isBefore=function(S,L){return this.endOf(L)<F(S)},A.$g=function(S,L,b){return M.u(S)?this[L]:this.set(b,S)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(S,L){var b=this,U=!!M.u(L)||L,x=M.p(S),Y=function(te,re){var ie=M.w(b.$u?Date.UTC(b.$y,re,te):new Date(b.$y,re,te),b);return U?ie:ie.endOf(u)},le=function(te,re){return M.w(b.toDate()[te].apply(b.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(re)),b)},ge=this.$W,X=this.$M,de=this.$D,me="set"+(this.$u?"UTC":"");switch(x){case p:return U?Y(1,0):Y(31,11);case h:return U?Y(1,X):Y(0,X+1);case c:var se=this.$locale().weekStart||0,J=(ge<se?ge+7:ge)-se;return Y(U?de-J:de+(6-J),X);case u:case v:return le(me+"Hours",0);case l:return le(me+"Minutes",1);case a:return le(me+"Seconds",2);case o:return le(me+"Milliseconds",3);default:return this.clone()}},A.endOf=function(S){return this.startOf(S,!1)},A.$set=function(S,L){var b,U=M.p(S),x="set"+(this.$u?"UTC":""),Y=(b={},b[u]=x+"Date",b[v]=x+"Date",b[h]=x+"Month",b[p]=x+"FullYear",b[l]=x+"Hours",b[a]=x+"Minutes",b[o]=x+"Seconds",b[i]=x+"Milliseconds",b)[U],le=U===u?this.$D+(L-this.$W):L;if(U===h||U===p){var ge=this.clone().set(v,1);ge.$d[Y](le),ge.init(),this.$d=ge.set(v,Math.min(this.$D,ge.daysInMonth())).$d}else Y&&this.$d[Y](le);return this.init(),this},A.set=function(S,L){return this.clone().$set(S,L)},A.get=function(S){return this[M.p(S)]()},A.add=function(S,L){var b,U=this;S=Number(S);var x=M.p(L),Y=function(X){var de=F(U);return M.w(de.date(de.date()+Math.round(X*S)),U)};if(x===h)return this.set(h,this.$M+S);if(x===p)return this.set(p,this.$y+S);if(x===u)return Y(1);if(x===c)return Y(7);var le=(b={},b[a]=s,b[l]=r,b[o]=n,b)[x]||1,ge=this.$d.getTime()+S*le;return M.w(ge,this)},A.subtract=function(S,L){return this.add(-1*S,L)},A.format=function(S){var L=this,b=this.$locale();if(!this.isValid())return b.invalidDate||g;var U=S||"YYYY-MM-DDTHH:mm:ssZ",x=M.z(this),Y=this.$H,le=this.$m,ge=this.$M,X=b.weekdays,de=b.months,me=b.meridiem,se=function(re,ie,We,tt){return re&&(re[ie]||re(L,U))||We[ie].slice(0,tt)},J=function(re){return M.s(Y%12||12,re,"0")},te=me||function(re,ie,We){var tt=re<12?"AM":"PM";return We?tt.toLowerCase():tt};return U.replace(R,function(re,ie){return ie||function(We){switch(We){case"YY":return String(L.$y).slice(-2);case"YYYY":return M.s(L.$y,4,"0");case"M":return ge+1;case"MM":return M.s(ge+1,2,"0");case"MMM":return se(b.monthsShort,ge,de,3);case"MMMM":return se(de,ge);case"D":return L.$D;case"DD":return M.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return se(b.weekdaysMin,L.$W,X,2);case"ddd":return se(b.weekdaysShort,L.$W,X,3);case"dddd":return X[L.$W];case"H":return String(Y);case"HH":return M.s(Y,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return te(Y,le,!0);case"A":return te(Y,le,!1);case"m":return String(le);case"mm":return M.s(le,2,"0");case"s":return String(L.$s);case"ss":return M.s(L.$s,2,"0");case"SSS":return M.s(L.$ms,3,"0");case"Z":return x}return null}(re)||x.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(S,L,b){var U,x=this,Y=M.p(L),le=F(S),ge=(le.utcOffset()-this.utcOffset())*s,X=this-le,de=function(){return M.m(x,le)};switch(Y){case p:U=de()/12;break;case h:U=de();break;case f:U=de()/3;break;case c:U=(X-ge)/6048e5;break;case u:U=(X-ge)/864e5;break;case l:U=X/r;break;case a:U=X/s;break;case o:U=X/n;break;default:U=X}return b?U:M.a(U)},A.daysInMonth=function(){return this.endOf(h).$D},A.$locale=function(){return k[this.$L]},A.locale=function(S,L){if(!S)return this.$L;var b=this.clone(),U=B(S,L,!0);return U&&(b.$L=U),b},A.clone=function(){return M.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},$}(),Q=q.prototype;return F.prototype=Q,[["$ms",i],["$s",o],["$m",a],["$H",l],["$W",u],["$M",h],["$y",p],["$D",v]].forEach(function($){Q[$[1]]=function(A){return this.$g(A,$[0],$[1])}}),F.extend=function($,A){return $.$i||($(A,q,F),$.$i=!0),F},F.locale=B,F.isDayjs=_,F.unix=function($){return F(1e3*$)},F.en=k[T],F.Ls=k,F.p={},F})})(ah);var Sv=ah.exports;const gt=Vo(Sv);function ml(t,e,n){const s=t.slice();return s[6]=e[n],s}function yl(t){let e,n,s,r,i,o=t[6].label+"",a,l,u,c,h,f,p=t[6].type+"",v,g,m,R,D=t[6].url+"",N,y;return{c(){e=I("li"),n=I("i"),r=V(),i=I("a"),a=G(o),l=V(),u=I("i"),h=V(),f=I("strong"),v=G(p),g=G(":"),m=V(),R=I("span"),N=G(D),y=V(),E(n,"class",s=Gs(t[6].icon)+" svelte-1oqteb6"),vn(n,"no-print",!0),E(u,"class","fas fa-up-right-from-square svelte-1oqteb6"),E(i,"href",c=t[6].url),E(i,"target","_blank"),E(i,"class","no-print"),E(f,"class","print"),E(R,"class","print")},m(T,k){ne(T,e,k),d(e,n),d(e,r),d(e,i),d(i,a),d(i,l),d(i,u),d(e,h),d(e,f),d(f,v),d(f,g),d(e,m),d(e,R),d(R,N),d(e,y)},p(T,k){k&1&&s!==(s=Gs(T[6].icon)+" svelte-1oqteb6")&&E(n,"class",s),k&1&&vn(n,"no-print",!0),k&1&&o!==(o=T[6].label+"")&&he(a,o),k&1&&c!==(c=T[6].url)&&E(i,"href",c),k&1&&p!==(p=T[6].type+"")&&he(v,p),k&1&&D!==(D=T[6].url+"")&&he(N,D)},d(T){T&&ee(e)}}}function bv(t){let e,n,s,r=t[0].name+"",i,o,a,l,u,c,h,f,p,v,g=t[0].birthday+"",m,R,D,N,y,T,k,w,_,B,F=t[0].currentLocation+"",M,q,Q,$,A,S,L,b,U=t[0].email+"",x,Y,le,ge,X,de,me,se=Re(t[0].contacts),J=[];for(let te=0;te<se.length;te+=1)J[te]=yl(ml(t,se,te));return{c(){e=I("section"),n=I("header"),s=I("strong"),i=G(r),o=V(),a=I("article"),l=I("ul"),u=I("li"),c=I("i"),h=V(),f=I("strong"),f.textContent="Birthday:",p=V(),v=I("time"),m=G(g),R=V(),D=I("span"),D.textContent=`(${t[2]} y.o.)`,N=V(),y=I("li"),T=I("i"),k=V(),w=I("strong"),w.textContent="Current Location:",_=V(),B=I("span"),M=G(F),q=V(),Q=I("li"),$=I("i"),A=V(),S=I("strong"),S.textContent="E-mail:",L=V(),b=I("a"),x=G(U),le=V();for(let te=0;te<J.length;te+=1)J[te].c();ge=V(),X=I("img"),E(n,"class","svelte-1oqteb6"),E(c,"class","fas fa-birthday-cake no-print svelte-1oqteb6"),E(f,"class","print"),E(v,"datetime",t[1]),E(T,"class","fas fa-map-marker-alt no-print svelte-1oqteb6"),E(w,"class","print"),E($,"class","far fa-envelope no-print svelte-1oqteb6"),E(S,"class","print"),E(b,"href",Y="mailto:"+t[0].email),E(l,"class","svelte-1oqteb6"),Ho(X.src,de=t[0].pictureUrl)||E(X,"src",de),E(X,"alt",me=t[0].name),E(X,"width","128px"),E(X,"height","128px"),E(X,"class","svelte-1oqteb6"),E(a,"class","svelte-1oqteb6"),E(e,"class","container")},m(te,re){ne(te,e,re),d(e,n),d(n,s),d(s,i),d(e,o),d(e,a),d(a,l),d(l,u),d(u,c),d(u,h),d(u,f),d(u,p),d(u,v),d(v,m),d(u,R),d(u,D),d(l,N),d(l,y),d(y,T),d(y,k),d(y,w),d(y,_),d(y,B),d(B,M),d(l,q),d(l,Q),d(Q,$),d(Q,A),d(Q,S),d(Q,L),d(Q,b),d(b,x),d(l,le);for(let ie=0;ie<J.length;ie+=1)J[ie]&&J[ie].m(l,null);d(a,ge),d(a,X)},p(te,[re]){if(re&1&&r!==(r=te[0].name+"")&&he(i,r),re&1&&g!==(g=te[0].birthday+"")&&he(m,g),re&1&&F!==(F=te[0].currentLocation+"")&&he(M,F),re&1&&U!==(U=te[0].email+"")&&he(x,U),re&1&&Y!==(Y="mailto:"+te[0].email)&&E(b,"href",Y),re&1){se=Re(te[0].contacts);let ie;for(ie=0;ie<se.length;ie+=1){const We=ml(te,se,ie);J[ie]?J[ie].p(We,re):(J[ie]=yl(We),J[ie].c(),J[ie].m(l,null))}for(;ie<J.length;ie+=1)J[ie].d(1);J.length=se.length}re&1&&!Ho(X.src,de=te[0].pictureUrl)&&E(X,"src",de),re&1&&me!==(me=te[0].name)&&E(X,"alt",me)},i:Te,o:Te,d(te){te&&ee(e),Ct(J,te)}}}function Cv(t,e,n){let{data:s}=e;const r=gt(s.birthday,"DD.MM.YYYY"),i=r.format("YYYY-MM-DD"),o=gt().diff(r),a=gt.duration(o),l=Math.floor(a.asYears());return t.$$set=u=>{"data"in u&&n(0,s=u.data)},[s,i,l]}class Av extends lt{constructor(e){super(),at(this,e,Cv,bv,rt,{data:0})}}function kv(t){let e,n,s,r;return{c(){e=I("div"),n=I("button"),n.innerHTML='<i class="fas fa-print"></i> <span class="svelte-mhvmh5">Printable Version</span>',E(n,"type","button"),E(n,"class","svelte-mhvmh5"),E(e,"class","no-print svelte-mhvmh5")},m(i,o){ne(i,e,o),d(e,n),s||(r=Eh(n,"click",t[0]),s=!0)},p:Te,i:Te,o:Te,d(i){i&&ee(e),s=!1,r()}}}function Dv(t){return[()=>print()]}class Nv extends lt{constructor(e){super(),at(this,e,Dv,kv,rt,{})}}function vl(t,e,n){const s=t.slice();s[2]=e[n];const r=s[1](s[2].start);s[3]=r;const i=s[1](s[2].end);s[4]=i;const o=wl(s[3]);s[5]=o;const a=wl(s[4]);return s[6]=a,s}function Rv(t){let e=t[2].place+"",n;return{c(){n=G(e)},m(s,r){ne(s,n,r)},p(s,r){r&1&&e!==(e=s[2].place+"")&&he(n,e)},d(s){s&&ee(n)}}}function Mv(t){let e,n=t[2].place+"",s,r,i,o,a,l,u=t[2].url+"",c,h;return{c(){e=I("a"),s=G(n),r=I("i"),o=V(),a=I("span"),l=G("("),c=G(u),h=G(")"),E(r,"class","fas fa-up-right-from-square no-print"),E(e,"href",i=t[2].url),E(e,"target","_blank"),E(a,"class","print")},m(f,p){ne(f,e,p),d(e,s),d(e,r),ne(f,o,p),ne(f,a,p),d(a,l),d(a,c),d(a,h)},p(f,p){p&1&&n!==(n=f[2].place+"")&&he(s,n),p&1&&i!==(i=f[2].url)&&E(e,"href",i),p&1&&u!==(u=f[2].url+"")&&he(c,u)},d(f){f&&(ee(e),ee(o),ee(a))}}}function _l(t){let e,n,s,r,i,o,a,l,u=t[2].start+"",c,h,f,p,v=(t[2].end??"Present")+"",g,m,R,D,N,y,T,k,w=t[2].location+"",_,B,F,M,q=t[2].specialization+"",Q,$,A=t[2].degree+"",S,L,b,U,x,Y,le,ge;function X(se,J){return se[2].url?Mv:Rv}let de=X(t),me=de(t);return{c(){e=I("section"),n=I("header"),s=I("span"),r=I("strong"),r.textContent="Time Period:",i=V(),o=I("i"),a=V(),l=I("time"),c=G(u),f=V(),p=I("time"),g=G(v),R=V(),D=I("span"),N=I("strong"),N.textContent="Location:",y=V(),T=I("i"),k=V(),_=G(w),B=V(),F=I("article"),M=I("strong"),Q=G(q),$=G(" | "),S=G(A),L=G("'s degree"),b=V(),U=I("footer"),x=I("strong"),Y=I("span"),Y.textContent="at",le=V(),me.c(),ge=V(),E(r,"class","print"),E(o,"class","far fa-calendar-alt no-print"),E(l,"datetime",h=t[5]),E(p,"datetime",m=t[6]),E(s,"class","svelte-1nbs3r9"),E(N,"class","print"),E(T,"class","fas fa-map-marker-alt no-print"),E(D,"class","svelte-1nbs3r9"),E(n,"class","svelte-1nbs3r9"),E(F,"class","svelte-1nbs3r9"),E(e,"class","svelte-1nbs3r9")},m(se,J){ne(se,e,J),d(e,n),d(n,s),d(s,r),d(s,i),d(s,o),d(s,a),d(s,l),d(l,c),d(s,f),d(s,p),d(p,g),d(n,R),d(n,D),d(D,N),d(D,y),d(D,T),d(D,k),d(D,_),d(e,B),d(e,F),d(F,M),d(M,Q),d(M,$),d(M,S),d(M,L),d(e,b),d(e,U),d(U,x),d(x,Y),d(x,le),me.m(x,null),d(e,ge)},p(se,J){J&1&&u!==(u=se[2].start+"")&&he(c,u),J&1&&h!==(h=se[5])&&E(l,"datetime",h),J&1&&v!==(v=(se[2].end??"Present")+"")&&he(g,v),J&1&&m!==(m=se[6])&&E(p,"datetime",m),J&1&&w!==(w=se[2].location+"")&&he(_,w),J&1&&q!==(q=se[2].specialization+"")&&he(Q,q),J&1&&A!==(A=se[2].degree+"")&&he(S,A),de===(de=X(se))&&me?me.p(se,J):(me.d(1),me=de(se),me&&(me.c(),me.m(x,null)))},d(se){se&&ee(e),me.d()}}}function $v(t){let e,n=Re(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=_l(vl(t,n,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Cn()},m(r,i){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(r,i);ne(r,e,i)},p(r,[i]){if(i&3){n=Re(r[0]);let o;for(o=0;o<n.length;o+=1){const a=vl(r,n,o);s[o]?s[o].p(a,i):(s[o]=_l(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Te,o:Te,d(r){r&&ee(e),Ct(s,r)}}}function wl(t){return t.format("YYYY")}function Ov(t,e,n){let{items:s}=e;function r(i){return i?gt(i,["YYYY"]):gt()}return t.$$set=i=>{"items"in i&&n(0,s=i.items)},[s,r]}class Pv extends lt{constructor(e){super(),at(this,e,Ov,$v,rt,{items:0})}}function El(t,e,n){const s=t.slice();s[4]=e[n];const r=s[1](s[4].start);s[5]=r;const i=s[1](s[4].end);s[6]=i;const o=bl(s[5]);s[7]=o;const a=bl(s[6]);s[8]=a;const l=s[2](s[5],s[6]);return s[9]=l,s}function Tl(t,e,n){const s=t.slice();return s[12]=e[n],s}function Lv(t){let e=t[4].company+"",n;return{c(){n=G(e)},m(s,r){ne(s,n,r)},p(s,r){r&1&&e!==(e=s[4].company+"")&&he(n,e)},d(s){s&&ee(n)}}}function xv(t){let e,n=t[4].company+"",s,r,i,o,a,l,u=t[4].url+"",c,h;return{c(){e=I("a"),s=G(n),r=I("i"),o=V(),a=I("span"),l=G("("),c=G(u),h=G(")"),E(r,"class","fas fa-up-right-from-square no-print"),E(e,"href",i=t[4].url),E(e,"target","_blank"),E(a,"class","print")},m(f,p){ne(f,e,p),d(e,s),d(e,r),ne(f,o,p),ne(f,a,p),d(a,l),d(a,c),d(a,h)},p(f,p){p&1&&n!==(n=f[4].company+"")&&he(s,n),p&1&&i!==(i=f[4].url)&&E(e,"href",i),p&1&&u!==(u=f[4].url+"")&&he(c,u)},d(f){f&&(ee(e),ee(o),ee(a))}}}function Il(t){let e,n=t[12]+"",s;return{c(){e=I("li"),s=G(n)},m(r,i){ne(r,e,i),d(e,s)},p(r,i){i&1&&n!==(n=r[12]+"")&&he(s,n)},d(r){r&&ee(e)}}}function Sl(t){let e,n,s,r,i,o,a,l,u=t[4].start+"",c,h,f,p,v=(t[4].end??"Present")+"",g,m,R,D,N,y=t[9]+"",T,k,w,_,B,F,M,q,Q=t[4].location+"",$,A,S,L=t[4].position+"",b,U,x,Y,le,ge,X,de,me=t[4].about+"",se,J,te,re,ie;function We(ye,Je){return ye[4].url?xv:Lv}let tt=We(t),Xe=tt(t),ut=Re(t[4].responsibilities),Ve=[];for(let ye=0;ye<ut.length;ye+=1)Ve[ye]=Il(Tl(t,ut,ye));return{c(){e=I("section"),n=I("header"),s=I("span"),r=I("strong"),r.textContent="Time Period:",i=V(),o=I("i"),a=V(),l=I("time"),c=G(u),f=V(),p=I("time"),g=G(v),R=V(),D=I("span"),N=G("("),T=G(y),k=G(")"),w=V(),_=I("span"),B=I("strong"),B.textContent="Location:",F=V(),M=I("i"),q=V(),$=G(Q),A=V(),S=I("h3"),b=G(L),U=V(),x=I("strong"),Y=I("span"),Y.textContent="at",le=V(),Xe.c(),ge=V(),X=I("article"),de=I("div"),se=V(),J=I("strong"),J.textContent="Responsibilities:",te=V(),re=I("ul");for(let ye=0;ye<Ve.length;ye+=1)Ve[ye].c();ie=V(),E(r,"class","print"),E(o,"class","far fa-calendar-alt no-print"),E(l,"datetime",h=t[7]),E(p,"datetime",m=t[8]),E(D,"class","svelte-rejovm"),E(s,"class","svelte-rejovm"),E(B,"class","print"),E(M,"class","fas fa-map-marker-alt no-print"),E(_,"class","svelte-rejovm"),E(n,"class","svelte-rejovm"),E(S,"class","svelte-rejovm"),E(de,"class","svelte-rejovm"),E(re,"class","svelte-rejovm"),E(X,"class","svelte-rejovm"),E(e,"class","svelte-rejovm")},m(ye,Je){ne(ye,e,Je),d(e,n),d(n,s),d(s,r),d(s,i),d(s,o),d(s,a),d(s,l),d(l,c),d(s,f),d(s,p),d(p,g),d(s,R),d(s,D),d(D,N),d(D,T),d(D,k),d(n,w),d(n,_),d(_,B),d(_,F),d(_,M),d(_,q),d(_,$),d(e,A),d(e,S),d(S,b),d(e,U),d(e,x),d(x,Y),d(x,le),Xe.m(x,null),d(e,ge),d(e,X),d(X,de),de.innerHTML=me,d(X,se),d(X,J),d(X,te),d(X,re);for(let Oe=0;Oe<Ve.length;Oe+=1)Ve[Oe]&&Ve[Oe].m(re,null);d(e,ie)},p(ye,Je){if(Je&1&&u!==(u=ye[4].start+"")&&he(c,u),Je&1&&h!==(h=ye[7])&&E(l,"datetime",h),Je&1&&v!==(v=(ye[4].end??"Present")+"")&&he(g,v),Je&1&&m!==(m=ye[8])&&E(p,"datetime",m),Je&1&&y!==(y=ye[9]+"")&&he(T,y),Je&1&&Q!==(Q=ye[4].location+"")&&he($,Q),Je&1&&L!==(L=ye[4].position+"")&&he(b,L),tt===(tt=We(ye))&&Xe?Xe.p(ye,Je):(Xe.d(1),Xe=tt(ye),Xe&&(Xe.c(),Xe.m(x,null))),Je&1&&me!==(me=ye[4].about+"")&&(de.innerHTML=me),Je&1){ut=Re(ye[4].responsibilities);let Oe;for(Oe=0;Oe<ut.length;Oe+=1){const Bo=Tl(ye,ut,Oe);Ve[Oe]?Ve[Oe].p(Bo,Je):(Ve[Oe]=Il(Bo),Ve[Oe].c(),Ve[Oe].m(re,null))}for(;Oe<Ve.length;Oe+=1)Ve[Oe].d(1);Ve.length=ut.length}},d(ye){ye&&ee(e),Xe.d(),Ct(Ve,ye)}}}function Uv(t){let e,n=Re(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=Sl(El(t,n,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Cn()},m(r,i){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(r,i);ne(r,e,i)},p(r,[i]){if(i&7){n=Re(r[0]);let o;for(o=0;o<n.length;o+=1){const a=El(r,n,o);s[o]?s[o].p(a,i):(s[o]=Sl(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Te,o:Te,d(r){r&&ee(e),Ct(s,r)}}}function bl(t){return t.format("YYYY-MM")}function Fv(t,e,n){let{items:s}=e,{yoe:r}=e;r.set(0);function i(a){return a?gt(a,["MM.YYYY","YYYY"]):gt()}function o(a,l){const u=l.diff(a),c=gt.duration(u),h=c.asYears();r.update(R=>R+h);const f=Math.floor(h),p=h-f;let v,g,m;return f?(v=f,g=v.toString(),m="year",p>1/12&&(g+="+")):(v=Math.floor(c.asMonths()),g=v.toString(),m="month"),v>1&&(m+="s"),`${g} ${m}`}return t.$$set=a=>{"items"in a&&n(0,s=a.items),"yoe"in a&&n(3,r=a.yoe)},[s,i,o,r]}class Vv extends lt{constructor(e){super(),at(this,e,Fv,Uv,rt,{items:0,yoe:3})}}function Cl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Al(t,e,n){const s=t.slice();return s[4]=e[n],s}function kl(t){let e,n;return{c(){e=I("i"),E(e,"class",n=Gs(t[4])+" svelte-1gvv79l")},m(s,r){ne(s,e,r)},p(s,r){r&1&&n!==(n=Gs(s[4])+" svelte-1gvv79l")&&E(e,"class",n)},d(s){s&&ee(e)}}}function Dl(t){let e,n;return e=new lh({props:{items:t[1].items}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.items=s[1].items),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function Nl(t){let e,n,s,r=t[1].label+"",i,o,a,l,u,c,h,f,p=t[1].level+"",v,g,m,R,D=Re(Rl(t[1])),N=[];for(let T=0;T<D.length;T+=1)N[T]=kl(Al(t,D,T));let y=t[1].items&&Dl(t);return{c(){e=I("li"),n=I("div"),s=I("span"),i=G(r),o=V(),a=I("span"),l=V(),u=I("span");for(let T=0;T<N.length;T+=1)N[T].c();h=V(),f=I("strong"),v=G(p),g=V(),y&&y.c(),m=Cn(),E(s,"class","label"),E(a,"class","dots svelte-1gvv79l"),E(u,"class","stars no-print svelte-1gvv79l"),E(u,"title",c=t[1].level),E(f,"class","print"),E(n,"class","wrapper svelte-1gvv79l"),E(e,"class","svelte-1gvv79l")},m(T,k){ne(T,e,k),d(e,n),d(n,s),d(s,i),d(n,o),d(n,a),d(n,l),d(n,u);for(let w=0;w<N.length;w+=1)N[w]&&N[w].m(u,null);d(n,h),d(n,f),d(f,v),ne(T,g,k),y&&y.m(T,k),ne(T,m,k),R=!0},p(T,k){if((!R||k&1)&&r!==(r=T[1].label+"")&&he(i,r),k&1){D=Re(Rl(T[1]));let w;for(w=0;w<D.length;w+=1){const _=Al(T,D,w);N[w]?N[w].p(_,k):(N[w]=kl(_),N[w].c(),N[w].m(u,null))}for(;w<N.length;w+=1)N[w].d(1);N.length=D.length}(!R||k&1&&c!==(c=T[1].level))&&E(u,"title",c),(!R||k&1)&&p!==(p=T[1].level+"")&&he(v,p),T[1].items?y?(y.p(T,k),k&1&&ce(y,1)):(y=Dl(T),y.c(),ce(y,1),y.m(m.parentNode,m)):y&&(hs(),we(y,1,1,()=>{y=null}),fs())},i(T){R||(ce(y),R=!0)},o(T){we(y),R=!1},d(T){T&&(ee(e),ee(g),ee(m)),Ct(N,T),y&&y.d(T)}}}function Bv(t){let e,n,s=Re(t[0]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Nl(Cl(t,s,o));const i=o=>we(r[o],1,1,()=>{r[o]=null});return{c(){e=I("ul");for(let o=0;o<r.length;o+=1)r[o].c();E(e,"class","svelte-1gvv79l")},m(o,a){ne(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);n=!0},p(o,[a]){if(a&1){s=Re(o[0]);let l;for(l=0;l<s.length;l+=1){const u=Cl(o,s,l);r[l]?(r[l].p(u,a),ce(r[l],1)):(r[l]=Nl(u),r[l].c(),ce(r[l],1),r[l].m(e,null))}for(hs(),l=s.length;l<r.length;l+=1)i(l);fs()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)ce(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)we(r[a]);n=!1},d(o){o&&ee(e),Ct(r,o)}}}function Rl(t){const e=new Array(5);let n=t.stars;for(let s=0;s<5;s++)n>=1?(e[s]="fas fa-star",n--):n>0&&n<1?(e[s]="fas fa-star-half-alt",n=0):e[s]="far fa-star";return e}function jv(t,e,n){let{items:s}=e;return t.$$set=r=>{"items"in r&&n(0,s=r.items)},[s]}class lh extends lt{constructor(e){super(),at(this,e,jv,Bv,rt,{items:0})}}function Ml(t,e,n){const s=t.slice();return s[1]=e[n],s}function $l(t){let e,n;return e=new lh({props:{items:t[1].items}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.items=s[1].items),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function Ol(t){let e,n,s,r,i,o,a=t[1].label+"",l,u,c,h,f,p=t[1].items&&$l(t);return{c(){e=I("section"),n=I("header"),s=I("i"),i=V(),o=I("span"),l=G(a),u=V(),c=I("article"),p&&p.c(),h=V(),E(s,"class",r=t[1].icon),vn(s,"no-print",!0),E(o,"class","svelte-m9ng5g"),E(n,"class","svelte-m9ng5g"),E(e,"class","svelte-m9ng5g")},m(v,g){ne(v,e,g),d(e,n),d(n,s),d(n,i),d(n,o),d(o,l),d(e,u),d(e,c),p&&p.m(c,null),d(e,h),f=!0},p(v,g){(!f||g&1&&r!==(r=v[1].icon))&&E(s,"class",r),(!f||g&1)&&vn(s,"no-print",!0),(!f||g&1)&&a!==(a=v[1].label+"")&&he(l,a),v[1].items?p?(p.p(v,g),g&1&&ce(p,1)):(p=$l(v),p.c(),ce(p,1),p.m(c,null)):p&&(hs(),we(p,1,1,()=>{p=null}),fs())},i(v){f||(ce(p),f=!0)},o(v){we(p),f=!1},d(v){v&&ee(e),p&&p.d()}}}function Hv(t){let e,n,s=Re(t[0]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Ol(Ml(t,s,o));const i=o=>we(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Cn()},m(o,a){for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,a);ne(o,e,a),n=!0},p(o,[a]){if(a&1){s=Re(o[0]);let l;for(l=0;l<s.length;l+=1){const u=Ml(o,s,l);r[l]?(r[l].p(u,a),ce(r[l],1)):(r[l]=Ol(u),r[l].c(),ce(r[l],1),r[l].m(e.parentNode,e))}for(hs(),l=s.length;l<r.length;l+=1)i(l);fs()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)ce(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)we(r[a]);n=!1},d(o){o&&ee(e),Ct(r,o)}}}function zv(t,e,n){let{items:s}=e;return t.$$set=r=>{"items"in r&&n(0,s=r.items)},[s]}class qv extends lt{constructor(e){super(),at(this,e,zv,Hv,rt,{items:0})}}function Pl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Ll(t){let e,n,s,r,i,o=t[1].label+"",a,l;return{c(){e=I("li"),n=I("i"),r=V(),i=I("span"),a=G(o),l=V(),E(n,"class",s=t[1].icon),vn(n,"no-print",!0),E(e,"class","svelte-1axfeen")},m(u,c){ne(u,e,c),d(e,n),d(e,r),d(e,i),d(i,a),d(e,l)},p(u,c){c&1&&s!==(s=u[1].icon)&&E(n,"class",s),c&1&&vn(n,"no-print",!0),c&1&&o!==(o=u[1].label+"")&&he(a,o)},d(u){u&&ee(e)}}}function Kv(t){let e,n=Re(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=Ll(Pl(t,n,r));return{c(){e=I("ul");for(let r=0;r<s.length;r+=1)s[r].c();E(e,"class","svelte-1axfeen")},m(r,i){ne(r,e,i);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(r,[i]){if(i&1){n=Re(r[0]);let o;for(o=0;o<n.length;o+=1){const a=Pl(r,n,o);s[o]?s[o].p(a,i):(s[o]=Ll(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},i:Te,o:Te,d(r){r&&ee(e),Ct(s,r)}}}function Yv(t,e,n){let{items:s}=e;return t.$$set=r=>{"items"in r&&n(0,s=r.items)},[s]}class Gv extends lt{constructor(e){super(),at(this,e,Yv,Kv,rt,{items:0})}}function Wv(t){let e,n,s,r,i;return{c(){e=I("p"),n=G("Fetching data"),s=G(t[0]),r=V(),i=I("p"),i.textContent="It may take some time",E(e,"class","svelte-sdyy4m"),E(i,"class","svelte-sdyy4m")},m(o,a){ne(o,e,a),d(e,n),d(e,s),ne(o,r,a),ne(o,i,a)},p(o,[a]){a&1&&he(s,o[0])},i:Te,o:Te,d(o){o&&(ee(e),ee(r),ee(i))}}}function Qv(t,e,n){let s="...";return bh(()=>{const r=setInterval(()=>{n(0,s=s.length<3?s+".":"")},500);return()=>clearInterval(r)}),[s]}class Xv extends lt{constructor(e){super(),at(this,e,Qv,Wv,rt,{})}}var uh={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Fo,function(){var n,s,r=1e3,i=6e4,o=36e5,a=864e5,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,c=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:u,months:c,days:a,hours:o,minutes:i,seconds:r,milliseconds:1,weeks:6048e5},p=function(k){return k instanceof y},v=function(k,w,_){return new y(k,_,w.$l)},g=function(k){return s.p(k)+"s"},m=function(k){return k<0},R=function(k){return m(k)?Math.ceil(k):Math.floor(k)},D=function(k){return Math.abs(k)},N=function(k,w){return k?m(k)?{negative:!0,format:""+D(k)+w}:{negative:!1,format:""+k+w}:{negative:!1,format:""}},y=function(){function k(_,B,F){var M=this;if(this.$d={},this.$l=F,_===void 0&&(this.$ms=0,this.parseFromMilliseconds()),B)return v(_*f[g(B)],this);if(typeof _=="number")return this.$ms=_,this.parseFromMilliseconds(),this;if(typeof _=="object")return Object.keys(_).forEach(function($){M.$d[g($)]=_[$]}),this.calMilliseconds(),this;if(typeof _=="string"){var q=_.match(h);if(q){var Q=q.slice(2).map(function($){return $!=null?Number($):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var w=k.prototype;return w.calMilliseconds=function(){var _=this;this.$ms=Object.keys(this.$d).reduce(function(B,F){return B+(_.$d[F]||0)*f[F]},0)},w.parseFromMilliseconds=function(){var _=this.$ms;this.$d.years=R(_/u),_%=u,this.$d.months=R(_/c),_%=c,this.$d.days=R(_/a),_%=a,this.$d.hours=R(_/o),_%=o,this.$d.minutes=R(_/i),_%=i,this.$d.seconds=R(_/r),_%=r,this.$d.milliseconds=_},w.toISOString=function(){var _=N(this.$d.years,"Y"),B=N(this.$d.months,"M"),F=+this.$d.days||0;this.$d.weeks&&(F+=7*this.$d.weeks);var M=N(F,"D"),q=N(this.$d.hours,"H"),Q=N(this.$d.minutes,"M"),$=this.$d.seconds||0;this.$d.milliseconds&&($+=this.$d.milliseconds/1e3,$=Math.round(1e3*$)/1e3);var A=N($,"S"),S=_.negative||B.negative||M.negative||q.negative||Q.negative||A.negative,L=q.format||Q.format||A.format?"T":"",b=(S?"-":"")+"P"+_.format+B.format+M.format+L+q.format+Q.format+A.format;return b==="P"||b==="-P"?"P0D":b},w.toJSON=function(){return this.toISOString()},w.format=function(_){var B=_||"YYYY-MM-DDTHH:mm:ss",F={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return B.replace(l,function(M,q){return q||String(F[M])})},w.as=function(_){return this.$ms/f[g(_)]},w.get=function(_){var B=this.$ms,F=g(_);return F==="milliseconds"?B%=1e3:B=F==="weeks"?R(B/f[F]):this.$d[F],B||0},w.add=function(_,B,F){var M;return M=B?_*f[g(B)]:p(_)?_.$ms:v(_,this).$ms,v(this.$ms+M*(F?-1:1),this)},w.subtract=function(_,B){return this.add(_,B,!0)},w.locale=function(_){var B=this.clone();return B.$l=_,B},w.clone=function(){return v(this.$ms,this)},w.humanize=function(_){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!_)},w.valueOf=function(){return this.asMilliseconds()},w.milliseconds=function(){return this.get("milliseconds")},w.asMilliseconds=function(){return this.as("milliseconds")},w.seconds=function(){return this.get("seconds")},w.asSeconds=function(){return this.as("seconds")},w.minutes=function(){return this.get("minutes")},w.asMinutes=function(){return this.as("minutes")},w.hours=function(){return this.get("hours")},w.asHours=function(){return this.as("hours")},w.days=function(){return this.get("days")},w.asDays=function(){return this.as("days")},w.weeks=function(){return this.get("weeks")},w.asWeeks=function(){return this.as("weeks")},w.months=function(){return this.get("months")},w.asMonths=function(){return this.as("months")},w.years=function(){return this.get("years")},w.asYears=function(){return this.as("years")},k}(),T=function(k,w,_){return k.add(w.years()*_,"y").add(w.months()*_,"M").add(w.days()*_,"d").add(w.hours()*_,"h").add(w.minutes()*_,"m").add(w.seconds()*_,"s").add(w.milliseconds()*_,"ms")};return function(k,w,_){n=_,s=_().$utils(),_.duration=function(M,q){var Q=_.locale();return v(M,{$l:Q},q)},_.isDuration=p;var B=w.prototype.add,F=w.prototype.subtract;w.prototype.add=function(M,q){return p(M)?T(this,M,1):B.bind(this)(M,q)},w.prototype.subtract=function(M,q){return p(M)?T(this,M,-1):F.bind(this)(M,q)}}})})(uh);var Jv=uh.exports;const Zv=Vo(Jv);var ch={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Fo,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,a={},l=function(g){return(g=+g)+(g>68?1900:2e3)},u=function(g){return function(m){this[g]=+m}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var R=m.match(/([+-]|\d\d)/g),D=60*R[1]+(+R[2]||0);return D===0?0:R[0]==="+"?-D:D}(g)}],h=function(g){var m=a[g];return m&&(m.indexOf?m:m.s.concat(m.f))},f=function(g,m){var R,D=a.meridiem;if(D){for(var N=1;N<=24;N+=1)if(g.indexOf(D(N,0,m))>-1){R=N>12;break}}else R=g===(m?"pm":"PM");return R},p={A:[o,function(g){this.afternoon=f(g,!1)}],a:[o,function(g){this.afternoon=f(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[r,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[r,u("day")],Do:[o,function(g){var m=a.ordinal,R=g.match(/\d+/);if(this.day=R[0],m)for(var D=1;D<=31;D+=1)m(D).replace(/\[|\]/g,"")===g&&(this.day=D)}],M:[i,u("month")],MM:[r,u("month")],MMM:[o,function(g){var m=h("months"),R=(h("monthsShort")||m.map(function(D){return D.slice(0,3)})).indexOf(g)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[o,function(g){var m=h("months").indexOf(g)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,u("year")],YY:[r,function(g){this.year=l(g)}],YYYY:[/\d{4}/,u("year")],Z:c,ZZ:c};function v(g){var m,R;m=g,R=a&&a.formats;for(var D=(g=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(B,F,M){var q=M&&M.toUpperCase();return F||R[M]||n[M]||R[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,$,A){return $||A.slice(1)})})).match(s),N=D.length,y=0;y<N;y+=1){var T=D[y],k=p[T],w=k&&k[0],_=k&&k[1];D[y]=_?{regex:w,parser:_}:T.replace(/^\[|\]$/g,"")}return function(B){for(var F={},M=0,q=0;M<N;M+=1){var Q=D[M];if(typeof Q=="string")q+=Q.length;else{var $=Q.regex,A=Q.parser,S=B.slice(q),L=$.exec(S)[0];A.call(F,L),B=B.replace(L,"")}}return function(b){var U=b.afternoon;if(U!==void 0){var x=b.hours;U?x<12&&(b.hours+=12):x===12&&(b.hours=0),delete b.afternoon}}(F),F}}return function(g,m,R){R.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(l=g.parseTwoDigitYear);var D=m.prototype,N=D.parse;D.parse=function(y){var T=y.date,k=y.utc,w=y.args;this.$u=k;var _=w[1];if(typeof _=="string"){var B=w[2]===!0,F=w[3]===!0,M=B||F,q=w[2];F&&(q=w[2]),a=this.$locale(),!B&&q&&(a=R.Ls[q]),this.$d=function(S,L,b){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*S);var U=v(L)(S),x=U.year,Y=U.month,le=U.day,ge=U.hours,X=U.minutes,de=U.seconds,me=U.milliseconds,se=U.zone,J=new Date,te=le||(x||Y?1:J.getDate()),re=x||J.getFullYear(),ie=0;x&&!Y||(ie=Y>0?Y-1:J.getMonth());var We=ge||0,tt=X||0,Xe=de||0,ut=me||0;return se?new Date(Date.UTC(re,ie,te,We,tt,Xe,ut+60*se.offset*1e3)):b?new Date(Date.UTC(re,ie,te,We,tt,Xe,ut)):new Date(re,ie,te,We,tt,Xe,ut)}catch{return new Date("")}}(T,_,k),this.init(),q&&q!==!0&&(this.$L=this.locale(q).$L),M&&T!=this.format(_)&&(this.$d=new Date("")),a={}}else if(_ instanceof Array)for(var Q=_.length,$=1;$<=Q;$+=1){w[1]=_[$-1];var A=R.apply(this,w);if(A.isValid()){this.$d=A.$d,this.$L=A.$L,this.init();break}$===Q&&(this.$d=new Date(""))}else N.call(this,y)}}})})(ch);var e_=ch.exports;const t_=Vo(e_);function n_(t){let e,n;return e=new Xv({}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p:Te,i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function s_(t){let e,n,s,r,i,o,a,l,u,c,h,f,p,v,g,m,R,D,N;return n=new Nv({}),r=new Av({props:{data:t[3].personalInfo}}),l=new sn({props:{header:"About",$$slots:{default:[r_]},$$scope:{ctx:t}}}),c=new sn({props:{header:"Education",$$slots:{default:[i_]},$$scope:{ctx:t}}}),f=new sn({props:{header:"Work Experience",subHeader:"("+t[0]+(t[2]?"+":"")+" years in total)",$$slots:{default:[o_]},$$scope:{ctx:t}}}),v=new sn({props:{header:"Skills",$$slots:{default:[a_]},$$scope:{ctx:t}}}),m=new sn({props:{header:"Strengths",$$slots:{default:[l_]},$$scope:{ctx:t}}}),D=new sn({props:{header:"Hobbies",$$slots:{default:[u_]},$$scope:{ctx:t}}}),{c(){e=I("header"),je(n.$$.fragment),s=V(),je(r.$$.fragment),i=V(),o=I("main"),a=I("div"),je(l.$$.fragment),u=V(),je(c.$$.fragment),h=V(),je(f.$$.fragment),p=V(),je(v.$$.fragment),g=V(),je(m.$$.fragment),R=V(),je(D.$$.fragment),E(a,"class","container svelte-14fp9r"),E(o,"class","svelte-14fp9r")},m(y,T){ne(y,e,T),Pe(n,e,null),d(e,s),Pe(r,e,null),ne(y,i,T),ne(y,o,T),d(o,a),Pe(l,a,null),d(a,u),Pe(c,a,null),d(a,h),Pe(f,a,null),d(a,p),Pe(v,a,null),d(a,g),Pe(m,a,null),d(a,R),Pe(D,a,null),N=!0},p(y,T){const k={};T&8&&(k.data=y[3].personalInfo),r.$set(k);const w={};T&520&&(w.$$scope={dirty:T,ctx:y}),l.$set(w);const _={};T&520&&(_.$$scope={dirty:T,ctx:y}),c.$set(_);const B={};T&5&&(B.subHeader="("+y[0]+(y[2]?"+":"")+" years in total)"),T&520&&(B.$$scope={dirty:T,ctx:y}),f.$set(B);const F={};T&520&&(F.$$scope={dirty:T,ctx:y}),v.$set(F);const M={};T&520&&(M.$$scope={dirty:T,ctx:y}),m.$set(M);const q={};T&520&&(q.$$scope={dirty:T,ctx:y}),D.$set(q)},i(y){N||(ce(n.$$.fragment,y),ce(r.$$.fragment,y),ce(l.$$.fragment,y),ce(c.$$.fragment,y),ce(f.$$.fragment,y),ce(v.$$.fragment,y),ce(m.$$.fragment,y),ce(D.$$.fragment,y),N=!0)},o(y){we(n.$$.fragment,y),we(r.$$.fragment,y),we(l.$$.fragment,y),we(c.$$.fragment,y),we(f.$$.fragment,y),we(v.$$.fragment,y),we(m.$$.fragment,y),we(D.$$.fragment,y),N=!1},d(y){y&&(ee(e),ee(i),ee(o)),Le(n),Le(r),Le(l),Le(c),Le(f),Le(v),Le(m),Le(D)}}}function r_(t){let e,n=t[3].personalInfo.aboutMe+"",s;return{c(){e=new Ih(!1),s=Cn(),e.a=s},m(r,i){e.m(n,r,i),ne(r,s,i)},p(r,i){i&8&&n!==(n=r[3].personalInfo.aboutMe+"")&&e.p(n)},d(r){r&&(ee(s),e.d())}}}function i_(t){let e,n;return e=new Pv({props:{items:t[3].education}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.items=s[3].education),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function o_(t){let e,n;return e=new Vv({props:{items:t[3].experience,yoe:t[5]}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.items=s[3].experience),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function a_(t){let e,n;return e=new qv({props:{items:t[3].skills}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.items=s[3].skills),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function l_(t){let e,n;return e=new Iv({props:{items:t[3].strengths}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.items=s[3].strengths),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function u_(t){let e,n;return e=new Gv({props:{items:t[3].hobbies}}),{c(){je(e.$$.fragment)},m(s,r){Pe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.items=s[3].hobbies),e.$set(i)},i(s){n||(ce(e.$$.fragment,s),n=!0)},o(s){we(e.$$.fragment,s),n=!1},d(s){Le(e,s)}}}function c_(t){let e,n,s,r;const i=[s_,n_],o=[];function a(l,u){return l[3]?0:l[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Cn()},m(l,u){~e&&o[e].m(l,u),ne(l,s,u),r=!0},p(l,[u]){let c=e;e=a(l),e===c?~e&&o[e].p(l,u):(n&&(hs(),we(o[c],1,1,()=>{o[c]=null}),fs()),~e?(n=o[e],n?n.p(l,u):(n=o[e]=i[e](l),n.c()),ce(n,1),n.m(s.parentNode,s)):n=null)},i(l){r||(ce(n),r=!0)},o(l){we(n),r=!1},d(l){l&&ee(s),~e&&o[e].d(l)}}}function h_(t,e,n){let s,r,i,o;gt.extend(Zv),gt.extend(t_);const a=Gl({apiKey:"AIzaSyAm1I2zK0_VmolD7VoAcMifcOQ-x1rxmTg",authDomain:"vprodan-cv.firebaseapp.com",projectId:"vprodan-cv",storageBucket:"vprodan-cv.appspot.com",messagingSenderId:"262118627579",appId:"1:262118627579:web:6842a857c12b582f8df85e",measurementId:"G-PMMXNGL2Q2"}),l=Ry(a),u=Hy(l,"data/main");zo(t,u,f=>n(3,o=f));const c=js(0);zo(t,c,f=>n(6,i=f));let h=!1;return setTimeout(()=>n(1,h=!0),500),t.$$.update=()=>{t.$$.dirty&64&&n(0,s=Math.floor(i)),t.$$.dirty&65&&n(2,r=i-s>1/12)},[s,h,r,o,u,c,i]}class f_ extends lt{constructor(e){super(),at(this,e,h_,c_,rt,{})}}new f_({target:document.getElementById("app")});
