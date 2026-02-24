(function(){const ot=document.createElement("link").relList;if(ot&&ot.supports&&ot.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))y(_);new MutationObserver(_=>{for(const W of _)if(W.type==="childList")for(const vt of W.addedNodes)vt.tagName==="LINK"&&vt.rel==="modulepreload"&&y(vt)}).observe(document,{childList:!0,subtree:!0});function k(_){const W={};return _.integrity&&(W.integrity=_.integrity),_.referrerPolicy&&(W.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?W.credentials="include":_.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function y(_){if(_.ep)return;_.ep=!0;const W=k(_);fetch(_.href,W)}})();var af={exports:{}},pu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function wv(){if(md)return pu;md=1;var z=Symbol.for("react.transitional.element"),ot=Symbol.for("react.fragment");function k(y,_,W){var vt=null;if(W!==void 0&&(vt=""+W),_.key!==void 0&&(vt=""+_.key),"key"in _){W={};for(var _t in _)_t!=="key"&&(W[_t]=_[_t])}else W=_;return _=W.ref,{$$typeof:z,type:y,key:vt,ref:_!==void 0?_:null,props:W}}return pu.Fragment=ot,pu.jsx=k,pu.jsxs=k,pu}var vd;function Wv(){return vd||(vd=1,af.exports=wv()),af.exports}var Ht=Wv(),uf={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Fv(){if(yd)return N;yd=1;var z=Symbol.for("react.transitional.element"),ot=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),st=Symbol.iterator;function Wt(r){return r===null||typeof r!="object"?null:(r=st&&r[st]||r["@@iterator"],typeof r=="function"?r:null)}var Bt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xt=Object.assign,Oe={};function Ft(r,E,A){this.props=r,this.context=E,this.refs=Oe,this.updater=A||Bt}Ft.prototype.isReactComponent={},Ft.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Ft.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function We(){}We.prototype=Ft.prototype;function Ut(r,E,A){this.props=r,this.context=E,this.refs=Oe,this.updater=A||Bt}var ie=Ut.prototype=new We;ie.constructor=Ut,xt(ie,Ft.prototype),ie.isPureReactComponent=!0;var Ee=Array.isArray;function Qt(){}var Z={H:null,A:null,T:null,S:null},Lt=Object.prototype.hasOwnProperty;function De(r,E,A){var M=A.ref;return{$$typeof:z,type:r,key:E,ref:M!==void 0?M:null,props:A}}function Yl(r,E){return De(r.type,E,r.props)}function Te(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Yt(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(A){return E[A]})}var bl=/\/+/g;function Re(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Yt(""+r.key):E.toString(36)}function he(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Qt,Qt):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function p(r,E,A,M,H){var L=typeof r;(L==="undefined"||L==="boolean")&&(r=null);var I=!1;if(r===null)I=!0;else switch(L){case"bigint":case"string":case"number":I=!0;break;case"object":switch(r.$$typeof){case z:case ot:I=!0;break;case $:return I=r._init,p(I(r._payload),E,A,M,H)}}if(I)return H=H(r),I=M===""?"."+Re(r,0):M,Ee(H)?(A="",I!=null&&(A=I.replace(bl,"$&/")+"/"),p(H,E,A,"",function(Ca){return Ca})):H!=null&&(Te(H)&&(H=Yl(H,A+(H.key==null||r&&r.key===H.key?"":(""+H.key).replace(bl,"$&/")+"/")+I)),E.push(H)),1;I=0;var jt=M===""?".":M+":";if(Ee(r))for(var yt=0;yt<r.length;yt++)M=r[yt],L=jt+Re(M,yt),I+=p(M,E,A,L,H);else if(yt=Wt(r),typeof yt=="function")for(r=yt.call(r),yt=0;!(M=r.next()).done;)M=M.value,L=jt+Re(M,yt++),I+=p(M,E,A,L,H);else if(L==="object"){if(typeof r.then=="function")return p(he(r),E,A,M,H);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(r,E,A){if(r==null)return r;var M=[],H=0;return p(r,M,"","",function(L){return E.call(A,L,H++)}),M}function j(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(A){(r._status===0||r._status===-1)&&(r._status=1,r._result=A)},function(A){(r._status===0||r._status===-1)&&(r._status=2,r._result=A)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var et=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},nt={map:T,forEach:function(r,E,A){T(r,function(){E.apply(this,arguments)},A)},count:function(r){var E=0;return T(r,function(){E++}),E},toArray:function(r){return T(r,function(E){return E})||[]},only:function(r){if(!Te(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return N.Activity=x,N.Children=nt,N.Component=Ft,N.Fragment=k,N.Profiler=_,N.PureComponent=Ut,N.StrictMode=y,N.Suspense=U,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,N.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Z.H.useMemoCache(r)}},N.cache=function(r){return function(){return r.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(r,E,A){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=xt({},r.props),H=r.key;if(E!=null)for(L in E.key!==void 0&&(H=""+E.key),E)!Lt.call(E,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&E.ref===void 0||(M[L]=E[L]);var L=arguments.length-2;if(L===1)M.children=A;else if(1<L){for(var I=Array(L),jt=0;jt<L;jt++)I[jt]=arguments[jt+2];M.children=I}return De(r.type,H,M)},N.createContext=function(r){return r={$$typeof:vt,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:W,_context:r},r},N.createElement=function(r,E,A){var M,H={},L=null;if(E!=null)for(M in E.key!==void 0&&(L=""+E.key),E)Lt.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(H[M]=E[M]);var I=arguments.length-2;if(I===1)H.children=A;else if(1<I){for(var jt=Array(I),yt=0;yt<I;yt++)jt[yt]=arguments[yt+2];H.children=jt}if(r&&r.defaultProps)for(M in I=r.defaultProps,I)H[M]===void 0&&(H[M]=I[M]);return De(r,L,H)},N.createRef=function(){return{current:null}},N.forwardRef=function(r){return{$$typeof:_t,render:r}},N.isValidElement=Te,N.lazy=function(r){return{$$typeof:$,_payload:{_status:-1,_result:r},_init:j}},N.memo=function(r,E){return{$$typeof:D,type:r,compare:E===void 0?null:E}},N.startTransition=function(r){var E=Z.T,A={};Z.T=A;try{var M=r(),H=Z.S;H!==null&&H(A,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(Qt,et)}catch(L){et(L)}finally{E!==null&&A.types!==null&&(E.types=A.types),Z.T=E}},N.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},N.use=function(r){return Z.H.use(r)},N.useActionState=function(r,E,A){return Z.H.useActionState(r,E,A)},N.useCallback=function(r,E){return Z.H.useCallback(r,E)},N.useContext=function(r){return Z.H.useContext(r)},N.useDebugValue=function(){},N.useDeferredValue=function(r,E){return Z.H.useDeferredValue(r,E)},N.useEffect=function(r,E){return Z.H.useEffect(r,E)},N.useEffectEvent=function(r){return Z.H.useEffectEvent(r)},N.useId=function(){return Z.H.useId()},N.useImperativeHandle=function(r,E,A){return Z.H.useImperativeHandle(r,E,A)},N.useInsertionEffect=function(r,E){return Z.H.useInsertionEffect(r,E)},N.useLayoutEffect=function(r,E){return Z.H.useLayoutEffect(r,E)},N.useMemo=function(r,E){return Z.H.useMemo(r,E)},N.useOptimistic=function(r,E){return Z.H.useOptimistic(r,E)},N.useReducer=function(r,E,A){return Z.H.useReducer(r,E,A)},N.useRef=function(r){return Z.H.useRef(r)},N.useState=function(r){return Z.H.useState(r)},N.useSyncExternalStore=function(r,E,A){return Z.H.useSyncExternalStore(r,E,A)},N.useTransition=function(){return Z.H.useTransition()},N.version="19.2.4",N}var Sd;function rf(){return Sd||(Sd=1,uf.exports=Fv()),uf.exports}var Td=rf(),nf={exports:{}},gu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function kv(){return hd||(hd=1,(function(z){function ot(p,T){var j=p.length;p.push(T);t:for(;0<j;){var et=j-1>>>1,nt=p[et];if(0<_(nt,T))p[et]=T,p[j]=nt,j=et;else break t}}function k(p){return p.length===0?null:p[0]}function y(p){if(p.length===0)return null;var T=p[0],j=p.pop();if(j!==T){p[0]=j;t:for(var et=0,nt=p.length,r=nt>>>1;et<r;){var E=2*(et+1)-1,A=p[E],M=E+1,H=p[M];if(0>_(A,j))M<nt&&0>_(H,A)?(p[et]=H,p[M]=j,et=M):(p[et]=A,p[E]=j,et=E);else if(M<nt&&0>_(H,j))p[et]=H,p[M]=j,et=M;else break t}}return T}function _(p,T){var j=p.sortIndex-T.sortIndex;return j!==0?j:p.id-T.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;z.unstable_now=function(){return W.now()}}else{var vt=Date,_t=vt.now();z.unstable_now=function(){return vt.now()-_t}}var U=[],D=[],$=1,x=null,st=3,Wt=!1,Bt=!1,xt=!1,Oe=!1,Ft=typeof setTimeout=="function"?setTimeout:null,We=typeof clearTimeout=="function"?clearTimeout:null,Ut=typeof setImmediate<"u"?setImmediate:null;function ie(p){for(var T=k(D);T!==null;){if(T.callback===null)y(D);else if(T.startTime<=p)y(D),T.sortIndex=T.expirationTime,ot(U,T);else break;T=k(D)}}function Ee(p){if(xt=!1,ie(p),!Bt)if(k(U)!==null)Bt=!0,Qt||(Qt=!0,Yt());else{var T=k(D);T!==null&&he(Ee,T.startTime-p)}}var Qt=!1,Z=-1,Lt=5,De=-1;function Yl(){return Oe?!0:!(z.unstable_now()-De<Lt)}function Te(){if(Oe=!1,Qt){var p=z.unstable_now();De=p;var T=!0;try{t:{Bt=!1,xt&&(xt=!1,We(Z),Z=-1),Wt=!0;var j=st;try{e:{for(ie(p),x=k(U);x!==null&&!(x.expirationTime>p&&Yl());){var et=x.callback;if(typeof et=="function"){x.callback=null,st=x.priorityLevel;var nt=et(x.expirationTime<=p);if(p=z.unstable_now(),typeof nt=="function"){x.callback=nt,ie(p),T=!0;break e}x===k(U)&&y(U),ie(p)}else y(U);x=k(U)}if(x!==null)T=!0;else{var r=k(D);r!==null&&he(Ee,r.startTime-p),T=!1}}break t}finally{x=null,st=j,Wt=!1}T=void 0}}finally{T?Yt():Qt=!1}}}var Yt;if(typeof Ut=="function")Yt=function(){Ut(Te)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,Re=bl.port2;bl.port1.onmessage=Te,Yt=function(){Re.postMessage(null)}}else Yt=function(){Ft(Te,0)};function he(p,T){Z=Ft(function(){p(z.unstable_now())},T)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(p){p.callback=null},z.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lt=0<p?Math.floor(1e3/p):5},z.unstable_getCurrentPriorityLevel=function(){return st},z.unstable_next=function(p){switch(st){case 1:case 2:case 3:var T=3;break;default:T=st}var j=st;st=T;try{return p()}finally{st=j}},z.unstable_requestPaint=function(){Oe=!0},z.unstable_runWithPriority=function(p,T){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var j=st;st=p;try{return T()}finally{st=j}},z.unstable_scheduleCallback=function(p,T,j){var et=z.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?et+j:et):j=et,p){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=j+nt,p={id:$++,callback:T,priorityLevel:p,startTime:j,expirationTime:nt,sortIndex:-1},j>et?(p.sortIndex=j,ot(D,p),k(U)===null&&p===k(D)&&(xt?(We(Z),Z=-1):xt=!0,he(Ee,j-et))):(p.sortIndex=nt,ot(U,p),Bt||Wt||(Bt=!0,Qt||(Qt=!0,Yt()))),p},z.unstable_shouldYield=Yl,z.unstable_wrapCallback=function(p){var T=st;return function(){var j=st;st=T;try{return p.apply(this,arguments)}finally{st=j}}}})(ff)),ff}var pd;function $v(){return pd||(pd=1,cf.exports=kv()),cf.exports}var sf={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Iv(){if(gd)return qt;gd=1;var z=rf();function ot(U){var D="https://react.dev/errors/"+U;if(1<arguments.length){D+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)D+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+U+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var y={d:{f:k,r:function(){throw Error(ot(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},_=Symbol.for("react.portal");function W(U,D,$){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:x==null?null:""+x,children:U,containerInfo:D,implementation:$}}var vt=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _t(U,D){if(U==="font")return"";if(typeof D=="string")return D==="use-credentials"?D:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,qt.createPortal=function(U,D){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D||D.nodeType!==1&&D.nodeType!==9&&D.nodeType!==11)throw Error(ot(299));return W(U,D,null,$)},qt.flushSync=function(U){var D=vt.T,$=y.p;try{if(vt.T=null,y.p=2,U)return U()}finally{vt.T=D,y.p=$,y.d.f()}},qt.preconnect=function(U,D){typeof U=="string"&&(D?(D=D.crossOrigin,D=typeof D=="string"?D==="use-credentials"?D:"":void 0):D=null,y.d.C(U,D))},qt.prefetchDNS=function(U){typeof U=="string"&&y.d.D(U)},qt.preinit=function(U,D){if(typeof U=="string"&&D&&typeof D.as=="string"){var $=D.as,x=_t($,D.crossOrigin),st=typeof D.integrity=="string"?D.integrity:void 0,Wt=typeof D.fetchPriority=="string"?D.fetchPriority:void 0;$==="style"?y.d.S(U,typeof D.precedence=="string"?D.precedence:void 0,{crossOrigin:x,integrity:st,fetchPriority:Wt}):$==="script"&&y.d.X(U,{crossOrigin:x,integrity:st,fetchPriority:Wt,nonce:typeof D.nonce=="string"?D.nonce:void 0})}},qt.preinitModule=function(U,D){if(typeof U=="string")if(typeof D=="object"&&D!==null){if(D.as==null||D.as==="script"){var $=_t(D.as,D.crossOrigin);y.d.M(U,{crossOrigin:$,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0})}}else D==null&&y.d.M(U)},qt.preload=function(U,D){if(typeof U=="string"&&typeof D=="object"&&D!==null&&typeof D.as=="string"){var $=D.as,x=_t($,D.crossOrigin);y.d.L(U,$,{crossOrigin:x,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0,type:typeof D.type=="string"?D.type:void 0,fetchPriority:typeof D.fetchPriority=="string"?D.fetchPriority:void 0,referrerPolicy:typeof D.referrerPolicy=="string"?D.referrerPolicy:void 0,imageSrcSet:typeof D.imageSrcSet=="string"?D.imageSrcSet:void 0,imageSizes:typeof D.imageSizes=="string"?D.imageSizes:void 0,media:typeof D.media=="string"?D.media:void 0})}},qt.preloadModule=function(U,D){if(typeof U=="string")if(D){var $=_t(D.as,D.crossOrigin);y.d.m(U,{as:typeof D.as=="string"&&D.as!=="script"?D.as:void 0,crossOrigin:$,integrity:typeof D.integrity=="string"?D.integrity:void 0})}else y.d.m(U)},qt.requestFormReset=function(U){y.d.r(U)},qt.unstable_batchedUpdates=function(U,D){return U(D)},qt.useFormState=function(U,D,$){return vt.H.useFormState(U,D,$)},qt.useFormStatus=function(){return vt.H.useHostTransitionStatus()},qt.version="19.2.4",qt}var bd;function Pv(){if(bd)return sf.exports;bd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(ot){console.error(ot)}}return z(),sf.exports=Iv(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ty(){if(Ed)return gu;Ed=1;var z=$v(),ot=rf(),k=Pv();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function W(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function vt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _t(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U(t){if(W(t)!==t)throw Error(y(188))}function D(t){var e=t.alternate;if(!e){if(e=W(t),e===null)throw Error(y(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===l)return U(u),t;if(n===a)return U(u),e;n=n.sibling}throw Error(y(188))}if(l.return!==a.return)l=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?t:e}function $(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,st=Symbol.for("react.element"),Wt=Symbol.for("react.transitional.element"),Bt=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),We=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Qt=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),De=Symbol.for("react.activity"),Yl=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Yt(t){return t===null||typeof t!="object"?null:(t=Te&&t[Te]||t["@@iterator"],typeof t=="function"?t:null)}var bl=Symbol.for("react.client.reference");function Re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xt:return"Fragment";case Ft:return"Profiler";case Oe:return"StrictMode";case Ee:return"Suspense";case Qt:return"SuspenseList";case De:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Bt:return"Portal";case Ut:return t.displayName||"Context";case We:return(t._context.displayName||"Context")+".Consumer";case ie:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return e=t.displayName||null,e!==null?e:Re(t.type)||"Memo";case Lt:e=t._payload,t=t._init;try{return Re(t(e))}catch{}}return null}var he=Array.isArray,p=ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},et=[],nt=-1;function r(t){return{current:t}}function E(t){0>nt||(t.current=et[nt],et[nt]=null,nt--)}function A(t,e){nt++,et[nt]=t.current,t.current=e}var M=r(null),H=r(null),L=r(null),I=r(null);function jt(t,e){switch(A(L,e),A(H,t),A(M,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ho(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ho(e),t=Bo(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(M),A(M,t)}function yt(){E(M),E(H),E(L)}function Ca(t){t.memoizedState!==null&&A(I,t);var e=M.current,l=Bo(e,t.type);e!==l&&(A(H,t),A(M,l))}function bu(t){H.current===t&&(E(M),E(H)),I.current===t&&(E(I),vu._currentValue=j)}var Ln,of;function El(t){if(Ln===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ln=e&&e[1]||"",of=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ln+t+of}var Yn=!1;function Gn(t,e){if(!t||Yn)return"";Yn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var v=S}Reflect.construct(t,[],b)}else{try{b.call()}catch(S){v=S}t.call(b.prototype)}}else{try{throw Error()}catch(S){v=S}(b=t())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&v&&typeof S.stack=="string")return[S.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===m.length)for(a=f.length-1,u=m.length-1;1<=a&&0<=u&&f[a]!==m[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==m[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==m[u]){var h=`
`+f[a].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=a&&0<=u);break}}}finally{Yn=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?El(l):""}function Ad(t,e){switch(t.tag){case 26:case 27:case 5:return El(t.type);case 16:return El("Lazy");case 13:return t.child!==e&&e!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Gn(t.type,!1);case 11:return Gn(t.type.render,!1);case 1:return Gn(t.type,!0);case 31:return El("Activity");default:return""}}function df(t){try{var e="",l=null;do e+=Ad(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Jn=Object.prototype.hasOwnProperty,Xn=z.unstable_scheduleCallback,Zn=z.unstable_cancelCallback,Cd=z.unstable_shouldYield,zd=z.unstable_requestPaint,kt=z.unstable_now,Md=z.unstable_getCurrentPriorityLevel,mf=z.unstable_ImmediatePriority,vf=z.unstable_UserBlockingPriority,Eu=z.unstable_NormalPriority,Od=z.unstable_LowPriority,yf=z.unstable_IdlePriority,Rd=z.log,Ud=z.unstable_setDisableYieldValue,za=null,$t=null;function Fe(t){if(typeof Rd=="function"&&Ud(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(za,t)}catch{}}var It=Math.clz32?Math.clz32:xd,qd=Math.log,_d=Math.LN2;function xd(t){return t>>>=0,t===0?32:31-(qd(t)/_d|0)|0}var Du=256,Tu=262144,Au=4194304;function Dl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=Dl(a):(i&=c,i!==0?u=Dl(i):l||(l=c&~t,l!==0&&(u=Dl(l))))):(c=a&~n,c!==0?u=Dl(c):i!==0?u=Dl(i):l||(l=a&~t,l!==0&&(u=Dl(l)))),u===0?0:e!==0&&e!==u&&(e&n)===0&&(n=u&-u,l=e&-e,n>=l||n===32&&(l&4194048)!==0)?e:u}function Ma(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function jd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(){var t=Au;return Au<<=1,(Au&62914560)===0&&(Au=4194304),t}function Vn(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Oa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nd(t,e,l,a,u,n){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(l=i&~l;0<l;){var h=31-It(l),b=1<<h;c[h]=0,f[h]=-1;var v=m[h];if(v!==null)for(m[h]=null,h=0;h<v.length;h++){var S=v[h];S!==null&&(S.lane&=-536870913)}l&=~b}a!==0&&hf(t,a,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~e))}function hf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-It(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function pf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-It(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function gf(t,e){var l=e&-e;return l=(l&42)!==0?1:Kn(l),(l&(t.suspendedLanes|e))!==0?0:l}function Kn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:id(t.type))}function Ef(t,e){var l=T.p;try{return T.p=t,e()}finally{T.p=l}}var ke=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ke,Gt="__reactProps$"+ke,Gl="__reactContainer$"+ke,Wn="__reactEvents$"+ke,Hd="__reactListeners$"+ke,Bd="__reactHandles$"+ke,Df="__reactResources$"+ke,Ra="__reactMarker$"+ke;function Fn(t){delete t[Ct],delete t[Gt],delete t[Wn],delete t[Hd],delete t[Bd]}function Jl(t){var e=t[Ct];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Gl]||l[Ct]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Zo(t);t!==null;){if(l=t[Ct])return l;t=Zo(t)}return e}t=l,l=t.parentNode}return null}function Xl(t){if(t=t[Ct]||t[Gl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ua(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Zl(t){var e=t[Df];return e||(e=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Tt(t){t[Ra]=!0}var Tf=new Set,Af={};function Tl(t,e){Vl(t,e),Vl(t+"Capture",e)}function Vl(t,e){for(Af[t]=e,t=0;t<e.length;t++)Tf.add(e[t])}var Qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cf={},zf={};function Ld(t){return Jn.call(zf,t)?!0:Jn.call(Cf,t)?!1:Qd.test(t)?zf[t]=!0:(Cf[t]=!0,!1)}function zu(t,e,l){if(Ld(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Mu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ue(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yd(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kn(t){if(!t._valueTracker){var e=Mf(t)?"checked":"value";t._valueTracker=Yd(t,e,""+t[e])}}function Of(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Mf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gd=/[\n"\\]/g;function fe(t){return t.replace(Gd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function $n(t,e,l,a,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?In(t,i,ce(e)):l!=null?In(t,i,ce(l)):a!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ce(c):t.removeAttribute("name")}function Rf(t,e,l,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){kn(t);return}l=l!=null?""+ce(l):"",e=e!=null?""+ce(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),kn(t)}function In(t,e,l){e==="number"&&Ou(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Kl(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ce(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Uf(t,e,l){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ce(l):""}function qf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(y(92));if(he(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),kn(t)}function wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _f(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Jd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function xf(t,e,l){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&_f(t,u,a)}else for(var n in e)e.hasOwnProperty(n)&&_f(t,n,e[n])}function Pn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ru(t){return Zd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qe(){}var ti=null;function ei(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wl=null,Fl=null;function jf(t){var e=Xl(t);if(e&&(t=e.stateNode)){var l=t[Gt]||null;t:switch(t=e.stateNode,e.type){case"input":if($n(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+fe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[Gt]||null;if(!u)throw Error(y(90));$n(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Of(a)}break t;case"textarea":Uf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Kl(t,!!l.multiple,e,!1)}}}var li=!1;function Nf(t,e,l){if(li)return t(e,l);li=!0;try{var a=t(e);return a}finally{if(li=!1,(Wl!==null||Fl!==null)&&(hn(),Wl&&(e=Wl,t=Fl,Fl=Wl=null,jf(e),t)))for(e=0;e<t.length;e++)jf(t[e])}}function qa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Gt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(y(231,e,typeof l));return l}var _e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(_e)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){ai=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{ai=!1}var $e=null,ui=null,Uu=null;function Hf(){if(Uu)return Uu;var t,e=ui,l=e.length,a,u="value"in $e?$e.value:$e.textContent,n=u.length;for(t=0;t<l&&e[t]===u[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===u[n-a];a++);return Uu=u.slice(t,1<a?1-a:void 0)}function qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function Bf(){return!1}function Jt(t){function e(l,a,u,n,i){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?_u:Bf,this.isPropagationStopped=Bf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Jt(Al),xa=x({},Al,{view:0,detail:0}),Vd=Jt(xa),ni,ii,ja,ju=x({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ja&&(ja&&t.type==="mousemove"?(ni=t.screenX-ja.screenX,ii=t.screenY-ja.screenY):ii=ni=0,ja=t),ni)},movementY:function(t){return"movementY"in t?t.movementY:ii}}),Qf=Jt(ju),Kd=x({},ju,{dataTransfer:0}),wd=Jt(Kd),Wd=x({},xa,{relatedTarget:0}),ci=Jt(Wd),Fd=x({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Jt(Fd),$d=x({},Al,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Id=Jt($d),Pd=x({},Al,{data:0}),Lf=Jt(Pd),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lm[t])?!!e[t]:!1}function fi(){return am}var um=x({},xa,{key:function(t){if(t.key){var e=tm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?em[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(t){return t.type==="keypress"?qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nm=Jt(um),im=x({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=Jt(im),cm=x({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fm=Jt(cm),sm=x({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Jt(sm),om=x({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Jt(om),mm=x({},Al,{newState:0,oldState:0}),vm=Jt(mm),ym=[9,13,27,32],si=_e&&"CompositionEvent"in window,Na=null;_e&&"documentMode"in document&&(Na=document.documentMode);var Sm=_e&&"TextEvent"in window&&!Na,Gf=_e&&(!si||Na&&8<Na&&11>=Na),Jf=" ",Xf=!1;function Zf(t,e){switch(t){case"keyup":return ym.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kl=!1;function hm(t,e){switch(t){case"compositionend":return Vf(e);case"keypress":return e.which!==32?null:(Xf=!0,Jf);case"textInput":return t=e.data,t===Jf&&Xf?null:t;default:return null}}function pm(t,e){if(kl)return t==="compositionend"||!si&&Zf(t,e)?(t=Hf(),Uu=ui=$e=null,kl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gf&&e.locale!=="ko"?null:e.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gm[t.type]:e==="textarea"}function wf(t,e,l,a){Wl?Fl?Fl.push(a):Fl=[a]:Wl=a,e=An(e,"onChange"),0<e.length&&(l=new xu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ha=null,Ba=null;function bm(t){Uo(t,0)}function Nu(t){var e=Ua(t);if(Of(e))return t}function Wf(t,e){if(t==="change")return e}var Ff=!1;if(_e){var ri;if(_e){var oi="oninput"in document;if(!oi){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),oi=typeof kf.oninput=="function"}ri=oi}else ri=!1;Ff=ri&&(!document.documentMode||9<document.documentMode)}function $f(){Ha&&(Ha.detachEvent("onpropertychange",If),Ba=Ha=null)}function If(t){if(t.propertyName==="value"&&Nu(Ba)){var e=[];wf(e,Ba,t,ei(t)),Nf(bm,e)}}function Em(t,e,l){t==="focusin"?($f(),Ha=e,Ba=l,Ha.attachEvent("onpropertychange",If)):t==="focusout"&&$f()}function Dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Ba)}function Tm(t,e){if(t==="click")return Nu(e)}function Am(t,e){if(t==="input"||t==="change")return Nu(e)}function Cm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:Cm;function Qa(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Jn.call(e,u)||!Pt(t[u],e[u]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ts(t,e){var l=Pf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Pf(l)}}function es(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?es(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ls(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ou(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Ou(t.document)}return e}function di(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var zm=_e&&"documentMode"in document&&11>=document.documentMode,$l=null,mi=null,La=null,vi=!1;function as(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vi||$l==null||$l!==Ou(a)||(a=$l,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Qa(La,a)||(La=a,a=An(mi,"onSelect"),0<a.length&&(e=new xu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=$l)))}function Cl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Il={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},yi={},us={};_e&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Il.animationend.animation,delete Il.animationiteration.animation,delete Il.animationstart.animation),"TransitionEvent"in window||delete Il.transitionend.transition);function zl(t){if(yi[t])return yi[t];if(!Il[t])return t;var e=Il[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in us)return yi[t]=e[l];return t}var ns=zl("animationend"),is=zl("animationiteration"),cs=zl("animationstart"),Mm=zl("transitionrun"),Om=zl("transitionstart"),Rm=zl("transitioncancel"),fs=zl("transitionend"),ss=new Map,Si="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Si.push("scrollEnd");function pe(t,e){ss.set(t,e),Tl(e,[t])}var Hu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},se=[],Pl=0,hi=0;function Bu(){for(var t=Pl,e=hi=Pl=0;e<t;){var l=se[e];se[e++]=null;var a=se[e];se[e++]=null;var u=se[e];se[e++]=null;var n=se[e];if(se[e++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&rs(l,u,n)}}function Qu(t,e,l,a){se[Pl++]=t,se[Pl++]=e,se[Pl++]=l,se[Pl++]=a,hi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function pi(t,e,l,a){return Qu(t,e,l,a),Lu(t)}function Ml(t,e){return Qu(t,null,null,e),Lu(t)}function rs(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,n=t.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&e!==null&&(u=31-It(l),t=n.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),n):null}function Lu(t){if(50<cu)throw cu=0,Mc=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ta={};function Um(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(t,e,l,a){return new Um(t,e,l,a)}function gi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xe(t,e){var l=t.alternate;return l===null?(l=te(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function os(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Yu(t,e,l,a,u,n){var i=0;if(a=t,typeof t=="function")gi(t)&&(i=1);else if(typeof t=="string")i=Nv(t,l,M.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case De:return t=te(31,l,e,u),t.elementType=De,t.lanes=n,t;case xt:return Ol(l.children,u,n,e);case Oe:i=8,u|=24;break;case Ft:return t=te(12,l,e,u|2),t.elementType=Ft,t.lanes=n,t;case Ee:return t=te(13,l,e,u),t.elementType=Ee,t.lanes=n,t;case Qt:return t=te(19,l,e,u),t.elementType=Qt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ut:i=10;break t;case We:i=9;break t;case ie:i=11;break t;case Z:i=14;break t;case Lt:i=16,a=null;break t}i=29,l=Error(y(130,t===null?"null":typeof t,"")),a=null}return e=te(i,l,e,u),e.elementType=t,e.type=a,e.lanes=n,e}function Ol(t,e,l,a){return t=te(7,t,a,e),t.lanes=l,t}function bi(t,e,l){return t=te(6,t,null,e),t.lanes=l,t}function ds(t){var e=te(18,null,null,0);return e.stateNode=t,e}function Ei(t,e,l){return e=te(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ms=new WeakMap;function re(t,e){if(typeof t=="object"&&t!==null){var l=ms.get(t);return l!==void 0?l:(e={value:t,source:e,stack:df(e)},ms.set(t,e),e)}return{value:t,source:e,stack:df(e)}}var ea=[],la=0,Gu=null,Ya=0,oe=[],de=0,Ie=null,Ae=1,Ce="";function je(t,e){ea[la++]=Ya,ea[la++]=Gu,Gu=t,Ya=e}function vs(t,e,l){oe[de++]=Ae,oe[de++]=Ce,oe[de++]=Ie,Ie=t;var a=Ae;t=Ce;var u=32-It(a)-1;a&=~(1<<u),l+=1;var n=32-It(e)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,Ae=1<<32-It(e)+u|l<<u|a,Ce=n+t}else Ae=1<<n|l<<u|a,Ce=t}function Di(t){t.return!==null&&(je(t,1),vs(t,1,0))}function Ti(t){for(;t===Gu;)Gu=ea[--la],ea[la]=null,Ya=ea[--la],ea[la]=null;for(;t===Ie;)Ie=oe[--de],oe[de]=null,Ce=oe[--de],oe[de]=null,Ae=oe[--de],oe[de]=null}function ys(t,e){oe[de++]=Ae,oe[de++]=Ce,oe[de++]=Ie,Ae=e.id,Ce=e.overflow,Ie=t}var zt=null,ct=null,V=!1,Pe=null,me=!1,Ai=Error(y(519));function tl(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(re(e,t)),Ai}function Ss(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Ct]=t,e[Gt]=a,l){case"dialog":G("cancel",e),G("close",e);break;case"iframe":case"object":case"embed":G("load",e);break;case"video":case"audio":for(l=0;l<su.length;l++)G(su[l],e);break;case"source":G("error",e);break;case"img":case"image":case"link":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"input":G("invalid",e),Rf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":G("invalid",e);break;case"textarea":G("invalid",e),qf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||jo(e.textContent,l)?(a.popover!=null&&(G("beforetoggle",e),G("toggle",e)),a.onScroll!=null&&G("scroll",e),a.onScrollEnd!=null&&G("scrollend",e),a.onClick!=null&&(e.onclick=qe),e=!0):e=!1,e||tl(t,!0)}function hs(t){for(zt=t.return;zt;)switch(zt.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:zt=zt.return}}function aa(t){if(t!==zt)return!1;if(!V)return hs(t),V=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Jc(t.type,t.memoizedProps)),l=!l),l&&ct&&tl(t),hs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ct=Xo(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ct=Xo(t)}else e===27?(e=ct,vl(t.type)?(t=wc,wc=null,ct=t):ct=e):ct=zt?ye(t.stateNode.nextSibling):null;return!0}function Rl(){ct=zt=null,V=!1}function Ci(){var t=Pe;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),Pe=null),t}function Ga(t){Pe===null?Pe=[t]:Pe.push(t)}var zi=r(null),Ul=null,Ne=null;function el(t,e,l){A(zi,e._currentValue),e._currentValue=l}function He(t){t._currentValue=zi.current,E(zi)}function Mi(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Oi(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<e.length;f++)if(c.context===e[f]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Mi(n.return,l,t),a||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(y(341));i.lanes|=l,n=i.alternate,n!==null&&(n.lanes|=l),Mi(i,l,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ua(t,e,l,a){t=null;for(var u=e,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(vu):t=[vu])}u=u.return}t!==null&&Oi(e,t,l,a),e.flags|=262144}function Ju(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ql(t){Ul=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mt(t){return ps(Ul,t)}function Xu(t,e){return Ul===null&&ql(t),ps(t,e)}function ps(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ne===null){if(t===null)throw Error(y(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return l}var qm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},_m=z.unstable_scheduleCallback,xm=z.unstable_NormalPriority,pt={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new qm,data:new Map,refCount:0}}function Ja(t){t.refCount--,t.refCount===0&&_m(xm,function(){t.controller.abort()})}var Xa=null,Ui=0,na=0,ia=null;function jm(t,e){if(Xa===null){var l=Xa=[];Ui=0,na=xc(),ia={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ui++,e.then(gs,gs),e}function gs(){if(--Ui===0&&Xa!==null){ia!==null&&(ia.status="fulfilled");var t=Xa;Xa=null,na=0,ia=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Nm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var bs=p.S;p.S=function(t,e){ao=kt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&jm(t,e),bs!==null&&bs(t,e)};var _l=r(null);function qi(){var t=_l.current;return t!==null?t:it.pooledCache}function Zu(t,e){e===null?A(_l,_l.current):A(_l,e.pool)}function Es(){var t=qi();return t===null?null:{parent:pt._currentValue,pool:t}}var ca=Error(y(460)),_i=Error(y(474)),Vu=Error(y(542)),Ku={then:function(){}};function Ds(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ts(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(qe,qe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cs(t),t;default:if(typeof e.status=="string")e.then(qe,qe);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cs(t),t}throw jl=e,ca}}function xl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(jl=l,ca):l}}var jl=null;function As(){if(jl===null)throw Error(y(459));var t=jl;return jl=null,t}function Cs(t){if(t===ca||t===Vu)throw Error(y(483))}var fa=null,Za=0;function wu(t){var e=Za;return Za+=1,fa===null&&(fa=[]),Ts(fa,t,e)}function Va(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wu(t,e){throw e.$$typeof===st?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function zs(t){function e(o,s){if(t){var d=o.deletions;d===null?(o.deletions=[s],o.flags|=16):d.push(s)}}function l(o,s){if(!t)return null;for(;s!==null;)e(o,s),s=s.sibling;return null}function a(o){for(var s=new Map;o!==null;)o.key!==null?s.set(o.key,o):s.set(o.index,o),o=o.sibling;return s}function u(o,s){return o=xe(o,s),o.index=0,o.sibling=null,o}function n(o,s,d){return o.index=d,t?(d=o.alternate,d!==null?(d=d.index,d<s?(o.flags|=67108866,s):d):(o.flags|=67108866,s)):(o.flags|=1048576,s)}function i(o){return t&&o.alternate===null&&(o.flags|=67108866),o}function c(o,s,d,g){return s===null||s.tag!==6?(s=bi(d,o.mode,g),s.return=o,s):(s=u(s,d),s.return=o,s)}function f(o,s,d,g){var R=d.type;return R===xt?h(o,s,d.props.children,g,d.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Lt&&xl(R)===s.type)?(s=u(s,d.props),Va(s,d),s.return=o,s):(s=Yu(d.type,d.key,d.props,null,o.mode,g),Va(s,d),s.return=o,s)}function m(o,s,d,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ei(d,o.mode,g),s.return=o,s):(s=u(s,d.children||[]),s.return=o,s)}function h(o,s,d,g,R){return s===null||s.tag!==7?(s=Ol(d,o.mode,g,R),s.return=o,s):(s=u(s,d),s.return=o,s)}function b(o,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,o.mode,d),s.return=o,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Wt:return d=Yu(s.type,s.key,s.props,null,o.mode,d),Va(d,s),d.return=o,d;case Bt:return s=Ei(s,o.mode,d),s.return=o,s;case Lt:return s=xl(s),b(o,s,d)}if(he(s)||Yt(s))return s=Ol(s,o.mode,d,null),s.return=o,s;if(typeof s.then=="function")return b(o,wu(s),d);if(s.$$typeof===Ut)return b(o,Xu(o,s),d);Wu(o,s)}return null}function v(o,s,d,g){var R=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return R!==null?null:c(o,s,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wt:return d.key===R?f(o,s,d,g):null;case Bt:return d.key===R?m(o,s,d,g):null;case Lt:return d=xl(d),v(o,s,d,g)}if(he(d)||Yt(d))return R!==null?null:h(o,s,d,g,null);if(typeof d.then=="function")return v(o,s,wu(d),g);if(d.$$typeof===Ut)return v(o,s,Xu(o,d),g);Wu(o,d)}return null}function S(o,s,d,g,R){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return o=o.get(d)||null,c(s,o,""+g,R);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wt:return o=o.get(g.key===null?d:g.key)||null,f(s,o,g,R);case Bt:return o=o.get(g.key===null?d:g.key)||null,m(s,o,g,R);case Lt:return g=xl(g),S(o,s,d,g,R)}if(he(g)||Yt(g))return o=o.get(d)||null,h(s,o,g,R,null);if(typeof g.then=="function")return S(o,s,d,wu(g),R);if(g.$$typeof===Ut)return S(o,s,d,Xu(s,g),R);Wu(s,g)}return null}function C(o,s,d,g){for(var R=null,K=null,O=s,Q=s=0,X=null;O!==null&&Q<d.length;Q++){O.index>Q?(X=O,O=null):X=O.sibling;var w=v(o,O,d[Q],g);if(w===null){O===null&&(O=X);break}t&&O&&w.alternate===null&&e(o,O),s=n(w,s,Q),K===null?R=w:K.sibling=w,K=w,O=X}if(Q===d.length)return l(o,O),V&&je(o,Q),R;if(O===null){for(;Q<d.length;Q++)O=b(o,d[Q],g),O!==null&&(s=n(O,s,Q),K===null?R=O:K.sibling=O,K=O);return V&&je(o,Q),R}for(O=a(O);Q<d.length;Q++)X=S(O,o,Q,d[Q],g),X!==null&&(t&&X.alternate!==null&&O.delete(X.key===null?Q:X.key),s=n(X,s,Q),K===null?R=X:K.sibling=X,K=X);return t&&O.forEach(function(gl){return e(o,gl)}),V&&je(o,Q),R}function q(o,s,d,g){if(d==null)throw Error(y(151));for(var R=null,K=null,O=s,Q=s=0,X=null,w=d.next();O!==null&&!w.done;Q++,w=d.next()){O.index>Q?(X=O,O=null):X=O.sibling;var gl=v(o,O,w.value,g);if(gl===null){O===null&&(O=X);break}t&&O&&gl.alternate===null&&e(o,O),s=n(gl,s,Q),K===null?R=gl:K.sibling=gl,K=gl,O=X}if(w.done)return l(o,O),V&&je(o,Q),R;if(O===null){for(;!w.done;Q++,w=d.next())w=b(o,w.value,g),w!==null&&(s=n(w,s,Q),K===null?R=w:K.sibling=w,K=w);return V&&je(o,Q),R}for(O=a(O);!w.done;Q++,w=d.next())w=S(O,o,Q,w.value,g),w!==null&&(t&&w.alternate!==null&&O.delete(w.key===null?Q:w.key),s=n(w,s,Q),K===null?R=w:K.sibling=w,K=w);return t&&O.forEach(function(Kv){return e(o,Kv)}),V&&je(o,Q),R}function ut(o,s,d,g){if(typeof d=="object"&&d!==null&&d.type===xt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Wt:t:{for(var R=d.key;s!==null;){if(s.key===R){if(R=d.type,R===xt){if(s.tag===7){l(o,s.sibling),g=u(s,d.props.children),g.return=o,o=g;break t}}else if(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Lt&&xl(R)===s.type){l(o,s.sibling),g=u(s,d.props),Va(g,d),g.return=o,o=g;break t}l(o,s);break}else e(o,s);s=s.sibling}d.type===xt?(g=Ol(d.props.children,o.mode,g,d.key),g.return=o,o=g):(g=Yu(d.type,d.key,d.props,null,o.mode,g),Va(g,d),g.return=o,o=g)}return i(o);case Bt:t:{for(R=d.key;s!==null;){if(s.key===R)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){l(o,s.sibling),g=u(s,d.children||[]),g.return=o,o=g;break t}else{l(o,s);break}else e(o,s);s=s.sibling}g=Ei(d,o.mode,g),g.return=o,o=g}return i(o);case Lt:return d=xl(d),ut(o,s,d,g)}if(he(d))return C(o,s,d,g);if(Yt(d)){if(R=Yt(d),typeof R!="function")throw Error(y(150));return d=R.call(d),q(o,s,d,g)}if(typeof d.then=="function")return ut(o,s,wu(d),g);if(d.$$typeof===Ut)return ut(o,s,Xu(o,d),g);Wu(o,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(l(o,s.sibling),g=u(s,d),g.return=o,o=g):(l(o,s),g=bi(d,o.mode,g),g.return=o,o=g),i(o)):l(o,s)}return function(o,s,d,g){try{Za=0;var R=ut(o,s,d,g);return fa=null,R}catch(O){if(O===ca||O===Vu)throw O;var K=te(29,O,null,o.mode);return K.lanes=g,K.return=o,K}finally{}}}var Nl=zs(!0),Ms=zs(!1),ll=!1;function xi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ji(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ul(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(F&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Lu(t),rs(t,null,l),e}return Qu(t,a,e,l),Lu(t)}function Ka(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,pf(t,l)}}function Ni(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,l=l.next}while(l!==null);n===null?u=n=e:n=n.next=e}else u=n=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Hi=!1;function wa(){if(Hi){var t=ia;if(t!==null)throw t}}function Wa(t,e,l,a){Hi=!1;var u=t.updateQueue;ll=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var h=t.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==i&&(c===null?h.firstBaseUpdate=m:c.next=m,h.lastBaseUpdate=f))}if(n!==null){var b=u.baseState;i=0,h=m=f=null,c=n;do{var v=c.lane&-536870913,S=v!==c.lane;if(S?(J&v)===v:(a&v)===v){v!==0&&v===na&&(Hi=!0),h!==null&&(h=h.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var C=t,q=c;v=e;var ut=l;switch(q.tag){case 1:if(C=q.payload,typeof C=="function"){b=C.call(ut,b,v);break t}b=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=q.payload,v=typeof C=="function"?C.call(ut,b,v):C,v==null)break t;b=x({},b,v);break t;case 2:ll=!0}}v=c.callback,v!==null&&(t.flags|=64,S&&(t.flags|=8192),S=u.callbacks,S===null?u.callbacks=[v]:S.push(v))}else S={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(m=h=S,f=b):h=h.next=S,i|=v;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;S=c,c=S.next,S.next=null,u.lastBaseUpdate=S,u.shared.pending=null}}while(!0);h===null&&(f=b),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=h,n===null&&(u.shared.lanes=0),sl|=i,t.lanes=i,t.memoizedState=b}}function Os(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function Rs(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Os(l[t],e)}var sa=r(null),Fu=r(0);function Us(t,e){t=Ve,A(Fu,t),A(sa,e),Ve=t|e.baseLanes}function Bi(){A(Fu,Ve),A(sa,sa.current)}function Qi(){Ve=Fu.current,E(sa),E(Fu)}var ee=r(null),ve=null;function nl(t){var e=t.alternate;A(St,St.current&1),A(ee,t),ve===null&&(e===null||sa.current!==null||e.memoizedState!==null)&&(ve=t)}function Li(t){A(St,St.current),A(ee,t),ve===null&&(ve=t)}function qs(t){t.tag===22?(A(St,St.current),A(ee,t),ve===null&&(ve=t)):il()}function il(){A(St,St.current),A(ee,ee.current)}function le(t){E(ee),ve===t&&(ve=null),E(St)}var St=r(0);function ku(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Vc(l)||Kc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Be=0,B=null,lt=null,gt=null,$u=!1,ra=!1,Hl=!1,Iu=0,Fa=0,oa=null,Hm=0;function dt(){throw Error(y(321))}function Yi(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Pt(t[l],e[l]))return!1;return!0}function Gi(t,e,l,a,u,n){return Be=n,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,p.H=t===null||t.memoizedState===null?vr:lc,Hl=!1,n=l(a,u),Hl=!1,ra&&(n=xs(e,l,a,u)),_s(t),n}function _s(t){p.H=Ia;var e=lt!==null&&lt.next!==null;if(Be=0,gt=lt=B=null,$u=!1,Fa=0,oa=null,e)throw Error(y(300));t===null||bt||(t=t.dependencies,t!==null&&Ju(t)&&(bt=!0))}function xs(t,e,l,a){B=t;var u=0;do{if(ra&&(oa=null),Fa=0,ra=!1,25<=u)throw Error(y(301));if(u+=1,gt=lt=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}p.H=yr,n=e(l,a)}while(ra);return n}function Bm(){var t=p.H,e=t.useState()[0];return e=typeof e.then=="function"?ka(e):e,t=t.useState()[0],(lt!==null?lt.memoizedState:null)!==t&&(B.flags|=1024),e}function Ji(){var t=Iu!==0;return Iu=0,t}function Xi(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Zi(t){if($u){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}$u=!1}Be=0,gt=lt=B=null,ra=!1,Fa=Iu=0,oa=null}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?B.memoizedState=gt=t:gt=gt.next=t,gt}function ht(){if(lt===null){var t=B.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=gt===null?B.memoizedState:gt.next;if(e!==null)gt=e,lt=t;else{if(t===null)throw B.alternate===null?Error(y(467)):Error(y(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},gt===null?B.memoizedState=gt=t:gt=gt.next=t}return gt}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(t){var e=Fa;return Fa+=1,oa===null&&(oa=[]),t=Ts(oa,t,e),e=B,(gt===null?e.memoizedState:gt.next)===null&&(e=e.alternate,p.H=e===null||e.memoizedState===null?vr:lc),t}function tn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ka(t);if(t.$$typeof===Ut)return Mt(t)}throw Error(y(438,String(t)))}function Vi(t){var e=null,l=B.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=B.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Pu(),B.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Yl;return e.index++,l}function Qe(t,e){return typeof e=="function"?e(t):e}function en(t){var e=ht();return Ki(e,lt,t)}function Ki(t,e,l){var a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var u=t.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}e.baseQueue=u=n,a.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{e=u.next;var c=i=null,f=null,m=e,h=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(J&b)===b:(Be&b)===b){var v=m.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===na&&(h=!0);else if((Be&v)===v){m=m.next,v===na&&(h=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=b,i=n):f=f.next=b,B.lanes|=v,sl|=v;b=m.action,Hl&&l(n,b),n=m.hasEagerState?m.eagerState:l(n,b)}else v={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=v,i=n):f=f.next=v,B.lanes|=b,sl|=b;m=m.next}while(m!==null&&m!==e);if(f===null?i=n:f.next=c,!Pt(n,t.memoizedState)&&(bt=!0,h&&(l=ia,l!==null)))throw l;t.memoizedState=n,t.baseState=i,t.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function wi(t){var e=ht(),l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,n=e.memoizedState;if(u!==null){l.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);Pt(n,e.memoizedState)||(bt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),l.lastRenderedState=n}return[n,a]}function js(t,e,l){var a=B,u=ht(),n=V;if(n){if(l===void 0)throw Error(y(407));l=l()}else l=e();var i=!Pt((lt||u).memoizedState,l);if(i&&(u.memoizedState=l,bt=!0),u=u.queue,ki(Bs.bind(null,a,u,t),[t]),u.getSnapshot!==e||i||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Hs.bind(null,a,u,l,e),null),it===null)throw Error(y(349));n||(Be&127)!==0||Ns(a,e,l)}return l}function Ns(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=B.updateQueue,e===null?(e=Pu(),B.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Hs(t,e,l,a){e.value=l,e.getSnapshot=a,Qs(e)&&Ls(t)}function Bs(t,e,l){return l(function(){Qs(e)&&Ls(t)})}function Qs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Pt(t,l)}catch{return!0}}function Ls(t){var e=Ml(t,2);e!==null&&wt(e,t,2)}function Wi(t){var e=Nt();if(typeof t=="function"){var l=t;if(t=l(),Hl){Fe(!0);try{l()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:t},e}function Ys(t,e,l,a){return t.baseState=l,Ki(t,lt,typeof a=="function"?a:Qe)}function Qm(t,e,l,a,u){if(un(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};p.T!==null?l(!0):n.isTransition=!1,a(n),l=e.pending,l===null?(n.next=e.pending=n,Gs(e,n)):(n.next=l.next,e.pending=l.next=n)}}function Gs(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var n=p.T,i={};p.T=i;try{var c=l(u,a),f=p.S;f!==null&&f(i,c),Js(t,e,c)}catch(m){Fi(t,e,m)}finally{n!==null&&i.types!==null&&(n.types=i.types),p.T=n}}else try{n=l(u,a),Js(t,e,n)}catch(m){Fi(t,e,m)}}function Js(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Xs(t,e,a)},function(a){return Fi(t,e,a)}):Xs(t,e,l)}function Xs(t,e,l){e.status="fulfilled",e.value=l,Zs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Gs(t,l)))}function Fi(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Zs(e),e=e.next;while(e!==a)}t.action=null}function Zs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Vs(t,e){return e}function Ks(t,e){if(V){var l=it.formState;if(l!==null){t:{var a=B;if(V){if(ct){e:{for(var u=ct,n=me;u.nodeType!==8;){if(!n){u=null;break e}if(u=ye(u.nextSibling),u===null){u=null;break e}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ct=ye(u.nextSibling),a=u.data==="F!";break t}}tl(a)}a=!1}a&&(e=l[0])}}return l=Nt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},l.queue=a,l=or.bind(null,B,a),a.dispatch=l,a=Wi(!1),n=ec.bind(null,B,!1,a.queue),a=Nt(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Qm.bind(null,B,u,n,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function ws(t){var e=ht();return Ws(e,lt,t)}function Ws(t,e,l){if(e=Ki(t,e,Vs)[0],t=en(Qe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ka(e)}catch(i){throw i===ca?Vu:i}else a=e;e=ht();var u=e.queue,n=u.dispatch;return l!==e.memoizedState&&(B.flags|=2048,da(9,{destroy:void 0},Lm.bind(null,u,l),null)),[a,n,t]}function Lm(t,e){t.action=e}function Fs(t){var e=ht(),l=lt;if(l!==null)return Ws(e,l,t);ht(),e=e.memoizedState,l=ht();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function da(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=B.updateQueue,e===null&&(e=Pu(),B.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ks(){return ht().memoizedState}function ln(t,e,l,a){var u=Nt();B.flags|=t,u.memoizedState=da(1|e,{destroy:void 0},l,a===void 0?null:a)}function an(t,e,l,a){var u=ht();a=a===void 0?null:a;var n=u.memoizedState.inst;lt!==null&&a!==null&&Yi(a,lt.memoizedState.deps)?u.memoizedState=da(e,n,l,a):(B.flags|=t,u.memoizedState=da(1|e,n,l,a))}function $s(t,e){ln(8390656,8,t,e)}function ki(t,e){an(2048,8,t,e)}function Ym(t){B.flags|=4;var e=B.updateQueue;if(e===null)e=Pu(),B.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Is(t){var e=ht().memoizedState;return Ym({ref:e,nextImpl:t}),function(){if((F&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function Ps(t,e){return an(4,2,t,e)}function tr(t,e){return an(4,4,t,e)}function er(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lr(t,e,l){l=l!=null?l.concat([t]):null,an(4,4,er.bind(null,e,t),l)}function $i(){}function ar(t,e){var l=ht();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Yi(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ur(t,e){var l=ht();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Yi(e,a[1]))return a[0];if(a=t(),Hl){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a}function Ii(t,e,l){return l===void 0||(Be&1073741824)!==0&&(J&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=no(),B.lanes|=t,sl|=t,l)}function nr(t,e,l,a){return Pt(l,e)?l:sa.current!==null?(t=Ii(t,l,a),Pt(t,e)||(bt=!0),t):(Be&42)===0||(Be&1073741824)!==0&&(J&261930)===0?(bt=!0,t.memoizedState=l):(t=no(),B.lanes|=t,sl|=t,e)}function ir(t,e,l,a,u){var n=T.p;T.p=n!==0&&8>n?n:8;var i=p.T,c={};p.T=c,ec(t,!1,e,l);try{var f=u(),m=p.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=Nm(f,a);$a(t,e,h,ne(t))}else $a(t,e,a,ne(t))}catch(b){$a(t,e,{then:function(){},status:"rejected",reason:b},ne())}finally{T.p=n,i!==null&&c.types!==null&&(i.types=c.types),p.T=i}}function Gm(){}function Pi(t,e,l,a){if(t.tag!==5)throw Error(y(476));var u=cr(t).queue;ir(t,u,e,j,l===null?Gm:function(){return fr(t),l(a)})}function cr(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:j},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function fr(t){var e=cr(t);e.next===null&&(e=t.alternate.memoizedState),$a(t,e.next.queue,{},ne())}function tc(){return Mt(vu)}function sr(){return ht().memoizedState}function rr(){return ht().memoizedState}function Jm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ne();t=al(l);var a=ul(e,t,l);a!==null&&(wt(a,e,l),Ka(a,e,l)),e={cache:Ri()},t.payload=e;return}e=e.return}}function Xm(t,e,l){var a=ne();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},un(t)?dr(e,l):(l=pi(t,e,l,a),l!==null&&(wt(l,t,a),mr(l,e,a)))}function or(t,e,l){var a=ne();$a(t,e,l,a)}function $a(t,e,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(un(t))dr(e,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var i=e.lastRenderedState,c=n(i,l);if(u.hasEagerState=!0,u.eagerState=c,Pt(c,i))return Qu(t,e,u,0),it===null&&Bu(),!1}catch{}finally{}if(l=pi(t,e,u,a),l!==null)return wt(l,t,a),mr(l,e,a),!0}return!1}function ec(t,e,l,a){if(a={lane:2,revertLane:xc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(t)){if(e)throw Error(y(479))}else e=pi(t,l,a,2),e!==null&&wt(e,t,2)}function un(t){var e=t.alternate;return t===B||e!==null&&e===B}function dr(t,e){ra=$u=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function mr(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,pf(t,l)}}var Ia={readContext:Mt,use:tn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt};Ia.useEffectEvent=dt;var vr={readContext:Mt,use:tn,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:$s,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ln(4194308,4,er.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ln(4194308,4,t,e)},useInsertionEffect:function(t,e){ln(4,2,t,e)},useMemo:function(t,e){var l=Nt();e=e===void 0?null:e;var a=t();if(Hl){Fe(!0);try{t()}finally{Fe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Nt();if(l!==void 0){var u=l(e);if(Hl){Fe(!0);try{l(e)}finally{Fe(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Xm.bind(null,B,t),[a.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:function(t){t=Wi(t);var e=t.queue,l=or.bind(null,B,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:$i,useDeferredValue:function(t,e){var l=Nt();return Ii(l,t,e)},useTransition:function(){var t=Wi(!1);return t=ir.bind(null,B,t.queue,!0,!1),Nt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=B,u=Nt();if(V){if(l===void 0)throw Error(y(407));l=l()}else{if(l=e(),it===null)throw Error(y(349));(J&127)!==0||Ns(a,e,l)}u.memoizedState=l;var n={value:l,getSnapshot:e};return u.queue=n,$s(Bs.bind(null,a,n,t),[t]),a.flags|=2048,da(9,{destroy:void 0},Hs.bind(null,a,n,l,e),null),l},useId:function(){var t=Nt(),e=it.identifierPrefix;if(V){var l=Ce,a=Ae;l=(a&~(1<<32-It(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Iu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Hm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:tc,useFormState:Ks,useActionState:Ks,useOptimistic:function(t){var e=Nt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ec.bind(null,B,!0,l),l.dispatch=e,[t,e]},useMemoCache:Vi,useCacheRefresh:function(){return Nt().memoizedState=Jm.bind(null,B)},useEffectEvent:function(t){var e=Nt(),l={impl:t};return e.memoizedState=l,function(){if((F&2)!==0)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},lc={readContext:Mt,use:tn,useCallback:ar,useContext:Mt,useEffect:ki,useImperativeHandle:lr,useInsertionEffect:Ps,useLayoutEffect:tr,useMemo:ur,useReducer:en,useRef:ks,useState:function(){return en(Qe)},useDebugValue:$i,useDeferredValue:function(t,e){var l=ht();return nr(l,lt.memoizedState,t,e)},useTransition:function(){var t=en(Qe)[0],e=ht().memoizedState;return[typeof t=="boolean"?t:ka(t),e]},useSyncExternalStore:js,useId:sr,useHostTransitionStatus:tc,useFormState:ws,useActionState:ws,useOptimistic:function(t,e){var l=ht();return Ys(l,lt,t,e)},useMemoCache:Vi,useCacheRefresh:rr};lc.useEffectEvent=Is;var yr={readContext:Mt,use:tn,useCallback:ar,useContext:Mt,useEffect:ki,useImperativeHandle:lr,useInsertionEffect:Ps,useLayoutEffect:tr,useMemo:ur,useReducer:wi,useRef:ks,useState:function(){return wi(Qe)},useDebugValue:$i,useDeferredValue:function(t,e){var l=ht();return lt===null?Ii(l,t,e):nr(l,lt.memoizedState,t,e)},useTransition:function(){var t=wi(Qe)[0],e=ht().memoizedState;return[typeof t=="boolean"?t:ka(t),e]},useSyncExternalStore:js,useId:sr,useHostTransitionStatus:tc,useFormState:Fs,useActionState:Fs,useOptimistic:function(t,e){var l=ht();return lt!==null?Ys(l,lt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:rr};yr.useEffectEvent=Is;function ac(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:x({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var uc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ne(),u=al(a);u.payload=e,l!=null&&(u.callback=l),e=ul(t,u,a),e!==null&&(wt(e,t,a),Ka(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ne(),u=al(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=ul(t,u,a),e!==null&&(wt(e,t,a),Ka(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ne(),a=al(l);a.tag=2,e!=null&&(a.callback=e),e=ul(t,a,l),e!==null&&(wt(e,t,l),Ka(e,t,l))}};function Sr(t,e,l,a,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,i):e.prototype&&e.prototype.isPureReactComponent?!Qa(l,a)||!Qa(u,n):!0}function hr(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function Bl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=x({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function pr(t){Hu(t)}function gr(t){console.error(t)}function br(t){Hu(t)}function nn(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Er(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(t,e,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){nn(t,e)},l}function Dr(t){return t=al(t),t.tag=3,t}function Tr(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;t.payload=function(){return u(n)},t.callback=function(){Er(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Er(e,l,a),typeof u!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Zm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ua(e,l,u,!0),l=ee.current,l!==null){switch(l.tag){case 31:case 13:return ve===null?pn():l.alternate===null&&mt===0&&(mt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Ku?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Uc(t,a,u)),!1;case 22:return l.flags|=65536,a===Ku?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Uc(t,a,u)),!1}throw Error(y(435,l.tag))}return Uc(t,a,u),pn(),!1}if(V)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Ai&&(t=Error(y(422),{cause:a}),Ga(re(t,l)))):(a!==Ai&&(e=Error(y(423),{cause:a}),Ga(re(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=re(a,l),u=nc(t.stateNode,a,u),Ni(t,u),mt!==4&&(mt=2)),!1;var n=Error(y(520),{cause:a});if(n=re(n,l),iu===null?iu=[n]:iu.push(n),mt!==4&&(mt=2),e===null)return!0;a=re(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=nc(l.stateNode,a,t),Ni(l,t),!1;case 1:if(e=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(rl===null||!rl.has(n))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Dr(u),Tr(u,t,l,a),Ni(l,u),!1}l=l.return}while(l!==null);return!1}var ic=Error(y(461)),bt=!1;function Ot(t,e,l,a){e.child=t===null?Ms(e,null,l,a):Nl(e,t.child,l,a)}function Ar(t,e,l,a,u){l=l.render;var n=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return ql(e),a=Gi(t,e,l,i,n,u),c=Ji(),t!==null&&!bt?(Xi(t,e,u),Le(t,e,u)):(V&&c&&Di(e),e.flags|=1,Ot(t,e,a,u),e.child)}function Cr(t,e,l,a,u){if(t===null){var n=l.type;return typeof n=="function"&&!gi(n)&&n.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=n,zr(t,e,n,a,u)):(t=Yu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!vc(t,u)){var i=n.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(i,a)&&t.ref===e.ref)return Le(t,e,u)}return e.flags|=1,t=xe(n,a),t.ref=e.ref,t.return=e,e.child=t}function zr(t,e,l,a,u){if(t!==null){var n=t.memoizedProps;if(Qa(n,a)&&t.ref===e.ref)if(bt=!1,e.pendingProps=a=n,vc(t,u))(t.flags&131072)!==0&&(bt=!0);else return e.lanes=t.lanes,Le(t,e,u)}return cc(t,e,l,a,u)}function Mr(t,e,l,a){var u=a.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,t!==null){for(a=e.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,e.child=null;return Or(t,e,n,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zu(e,n!==null?n.cachePool:null),n!==null?Us(e,n):Bi(),qs(e);else return a=e.lanes=536870912,Or(t,e,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Zu(e,n.cachePool),Us(e,n),il(),e.memoizedState=null):(t!==null&&Zu(e,null),Bi(),il());return Ot(t,e,u,l),e.child}function Pa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Or(t,e,l,a,u){var n=qi();return n=n===null?null:{parent:pt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&Zu(e,null),Bi(),qs(e),t!==null&&ua(t,e,a,!0),e.childLanes=u,null}function cn(t,e){return e=sn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(t,e,l){return Nl(e,t.child,null,l),t=cn(e,e.pendingProps),t.flags|=2,le(e),e.memoizedState=null,t}function Vm(t,e,l){var a=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(V){if(a.mode==="hidden")return t=cn(e,a),e.lanes=536870912,Pa(null,t);if(Li(e),(t=ct)?(t=Jo(t,me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Ae,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},l=ds(t),l.return=e,e.child=l,zt=e,ct=null)):t=null,t===null)throw tl(e);return e.lanes=536870912,null}return cn(e,a)}var n=t.memoizedState;if(n!==null){var i=n.dehydrated;if(Li(e),u)if(e.flags&256)e.flags&=-257,e=Rr(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(bt||ua(t,e,l,!1),u=(l&t.childLanes)!==0,bt||u){if(a=it,a!==null&&(i=gf(a,l),i!==0&&i!==n.retryLane))throw n.retryLane=i,Ml(t,i),wt(a,t,i),ic;pn(),e=Rr(t,e,l)}else t=n.treeContext,ct=ye(i.nextSibling),zt=e,V=!0,Pe=null,me=!1,t!==null&&ys(e,t),e=cn(e,a),e.flags|=4096;return e}return t=xe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function fn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function cc(t,e,l,a,u){return ql(e),l=Gi(t,e,l,a,void 0,u),a=Ji(),t!==null&&!bt?(Xi(t,e,u),Le(t,e,u)):(V&&a&&Di(e),e.flags|=1,Ot(t,e,l,u),e.child)}function Ur(t,e,l,a,u,n){return ql(e),e.updateQueue=null,l=xs(e,a,l,u),_s(t),a=Ji(),t!==null&&!bt?(Xi(t,e,n),Le(t,e,n)):(V&&a&&Di(e),e.flags|=1,Ot(t,e,l,n),e.child)}function qr(t,e,l,a,u){if(ql(e),e.stateNode===null){var n=ta,i=l.contextType;typeof i=="object"&&i!==null&&(n=Mt(i)),n=new l(a,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=a,n.state=e.memoizedState,n.refs={},xi(e),i=l.contextType,n.context=typeof i=="object"&&i!==null?Mt(i):ta,n.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ac(e,l,i,a),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),Wa(e,a,n,u),wa(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){n=e.stateNode;var c=e.memoizedProps,f=Bl(l,c);n.props=f;var m=n.context,h=l.contextType;i=ta,typeof h=="object"&&h!==null&&(i=Mt(h));var b=l.getDerivedStateFromProps;h=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&hr(e,n,a,i),ll=!1;var v=e.memoizedState;n.state=v,Wa(e,a,n,u),wa(),m=e.memoizedState,c||v!==m||ll?(typeof b=="function"&&(ac(e,l,b,a),m=e.memoizedState),(f=ll||Sr(e,l,f,a,v,m,i))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=m),n.props=a,n.state=m,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{n=e.stateNode,ji(t,e),i=e.memoizedProps,h=Bl(l,i),n.props=h,b=e.pendingProps,v=n.context,m=l.contextType,f=ta,typeof m=="object"&&m!==null&&(f=Mt(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==b||v!==f)&&hr(e,n,a,f),ll=!1,v=e.memoizedState,n.state=v,Wa(e,a,n,u),wa();var S=e.memoizedState;i!==b||v!==S||ll||t!==null&&t.dependencies!==null&&Ju(t.dependencies)?(typeof c=="function"&&(ac(e,l,c,a),S=e.memoizedState),(h=ll||Sr(e,l,h,a,v,S,f)||t!==null&&t.dependencies!==null&&Ju(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,S,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,S,f)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=S),n.props=a,n.state=S,n.context=f,a=h):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),a=!1)}return n=a,fn(t,e),a=(e.flags&128)!==0,n||a?(n=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&a?(e.child=Nl(e,t.child,null,u),e.child=Nl(e,null,l,u)):Ot(t,e,l,u),e.memoizedState=n.state,t=e.child):t=Le(t,e,u),t}function _r(t,e,l,a){return Rl(),e.flags|=256,Ot(t,e,l,a),e.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Es()}}function rc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=ue),t}function xr(t,e,l){var a=e.pendingProps,u=!1,n=(e.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),i&&(u=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(V){if(u?nl(e):il(),(t=ct)?(t=Jo(t,me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Ae,overflow:Ce}:null,retryLane:536870912,hydrationErrors:null},l=ds(t),l.return=e,e.child=l,zt=e,ct=null)):t=null,t===null)throw tl(e);return Kc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(il(),u=e.mode,c=sn({mode:"hidden",children:c},u),a=Ol(a,u,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=sc(l),a.childLanes=rc(t,i,l),e.memoizedState=fc,Pa(null,a)):(nl(e),oc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)e.flags&256?(nl(e),e.flags&=-257,e=dc(t,e,l)):e.memoizedState!==null?(il(),e.child=t.child,e.flags|=128,e=null):(il(),c=a.fallback,u=e.mode,a=sn({mode:"visible",children:a.children},u),c=Ol(c,u,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Nl(e,t.child,null,l),a=e.child,a.memoizedState=sc(l),a.childLanes=rc(t,i,l),e.memoizedState=fc,e=Pa(null,a));else if(nl(e),Kc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(y(419)),a.stack="",a.digest=i,Ga({value:a,source:null,stack:null}),e=dc(t,e,l)}else if(bt||ua(t,e,l,!1),i=(l&t.childLanes)!==0,bt||i){if(i=it,i!==null&&(a=gf(i,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Ml(t,a),wt(i,t,a),ic;Vc(c)||pn(),e=dc(t,e,l)}else Vc(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,ct=ye(c.nextSibling),zt=e,V=!0,Pe=null,me=!1,t!==null&&ys(e,t),e=oc(e,a.children),e.flags|=4096);return e}return u?(il(),c=a.fallback,u=e.mode,f=t.child,m=f.sibling,a=xe(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=xe(m,c):(c=Ol(c,u,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,Pa(null,a),a=e.child,c=t.child.memoizedState,c===null?c=sc(l):(u=c.cachePool,u!==null?(f=pt._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Es(),c={baseLanes:c.baseLanes|l,cachePool:u}),a.memoizedState=c,a.childLanes=rc(t,i,l),e.memoizedState=fc,Pa(t.child,a)):(nl(e),l=t.child,t=l.sibling,l=xe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function oc(t,e){return e=sn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function sn(t,e){return t=te(22,t,null,e),t.lanes=0,t}function dc(t,e,l){return Nl(e,t.child,null,l),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jr(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Mi(t.return,e,l)}function mc(t,e,l,a,u,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u,i.treeForkCount=n)}function Nr(t,e,l){var a=e.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=St.current,c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,A(St,i),Ot(t,e,a,l),a=V?Ya:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jr(t,l,e);else if(t.tag===19)jr(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&ku(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),mc(e,!1,u,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&ku(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}mc(e,!0,l,null,n,a);break;case"together":mc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Le(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),sl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ua(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,l=xe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=xe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function vc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ju(t)))}function Km(t,e,l){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),el(e,pt,t.memoizedState.cache),Rl();break;case 27:case 5:Ca(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:el(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Li(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(nl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?xr(t,e,l):(nl(e),t=Le(t,e,l),t!==null?t.sibling:null);nl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ua(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Nr(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),A(St,St.current),a)break;return null;case 22:return e.lanes=0,Mr(t,e,l,e.pendingProps);case 24:el(e,pt,t.memoizedState.cache)}return Le(t,e,l)}function Hr(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)bt=!0;else{if(!vc(t,l)&&(e.flags&128)===0)return bt=!1,Km(t,e,l);bt=(t.flags&131072)!==0}else bt=!1,V&&(e.flags&1048576)!==0&&vs(e,Ya,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=xl(e.elementType),e.type=t,typeof t=="function")gi(t)?(a=Bl(t,a),e.tag=1,e=qr(null,e,t,a,l)):(e.tag=0,e=cc(null,e,t,a,l));else{if(t!=null){var u=t.$$typeof;if(u===ie){e.tag=11,e=Ar(null,e,t,a,l);break t}else if(u===Z){e.tag=14,e=Cr(null,e,t,a,l);break t}}throw e=Re(t)||t,Error(y(306,e,""))}}return e;case 0:return cc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=Bl(a,e.pendingProps),qr(t,e,a,u,l);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(y(387));a=e.pendingProps;var n=e.memoizedState;u=n.element,ji(t,e),Wa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,el(e,pt,a),a!==n.cache&&Oi(e,[pt],l,!0),wa(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=_r(t,e,a,l);break t}else if(a!==u){u=re(Error(y(424)),e),Ga(u),e=_r(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ct=ye(t.firstChild),zt=e,V=!0,Pe=null,me=!0,l=Ms(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Rl(),a===u){e=Le(t,e,l);break t}Ot(t,e,a,l)}e=e.child}return e;case 26:return fn(t,e),t===null?(l=Wo(e.type,null,e.pendingProps,null))?e.memoizedState=l:V||(l=e.type,t=e.pendingProps,a=Cn(L.current).createElement(l),a[Ct]=e,a[Gt]=t,Rt(a,l,t),Tt(a),e.stateNode=a):e.memoizedState=Wo(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ca(e),t===null&&V&&(a=e.stateNode=Vo(e.type,e.pendingProps,L.current),zt=e,me=!0,u=ct,vl(e.type)?(wc=u,ct=ye(a.firstChild)):ct=u),Ot(t,e,e.pendingProps.children,l),fn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&V&&((u=a=ct)&&(a=Dv(a,e.type,e.pendingProps,me),a!==null?(e.stateNode=a,zt=e,ct=ye(a.firstChild),me=!1,u=!0):u=!1),u||tl(e)),Ca(e),u=e.type,n=e.pendingProps,i=t!==null?t.memoizedProps:null,a=n.children,Jc(u,n)?a=null:i!==null&&Jc(u,i)&&(e.flags|=32),e.memoizedState!==null&&(u=Gi(t,e,Bm,null,null,l),vu._currentValue=u),fn(t,e),Ot(t,e,a,l),e.child;case 6:return t===null&&V&&((t=l=ct)&&(l=Tv(l,e.pendingProps,me),l!==null?(e.stateNode=l,zt=e,ct=null,t=!0):t=!1),t||tl(e)),null;case 13:return xr(t,e,l);case 4:return jt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Nl(e,null,a,l):Ot(t,e,a,l),e.child;case 11:return Ar(t,e,e.type,e.pendingProps,l);case 7:return Ot(t,e,e.pendingProps,l),e.child;case 8:return Ot(t,e,e.pendingProps.children,l),e.child;case 12:return Ot(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,el(e,e.type,a.value),Ot(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,ql(e),u=Mt(u),a=a(u),e.flags|=1,Ot(t,e,a,l),e.child;case 14:return Cr(t,e,e.type,e.pendingProps,l);case 15:return zr(t,e,e.type,e.pendingProps,l);case 19:return Nr(t,e,l);case 31:return Vm(t,e,l);case 22:return Mr(t,e,l,e.pendingProps);case 24:return ql(e),a=Mt(pt),t===null?(u=qi(),u===null&&(u=it,n=Ri(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=l),u=n),e.memoizedState={parent:a,cache:u},xi(e),el(e,pt,u)):((t.lanes&l)!==0&&(ji(t,e),Wa(e,null,null,l),wa()),u=t.memoizedState,n=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),el(e,pt,a)):(a=n.cache,el(e,pt,a),a!==u.cache&&Oi(e,[pt],l,!0))),Ot(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function Ye(t){t.flags|=4}function yc(t,e,l,a,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(so())t.flags|=8192;else throw jl=Ku,_i}else t.flags&=-16777217}function Br(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Po(e))if(so())t.flags|=8192;else throw jl=Ku,_i}function rn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Sf():536870912,t.lanes|=e,Sa|=e)}function tu(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function wm(t,e,l){var a=e.pendingProps;switch(Ti(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return ft(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),He(pt),yt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(aa(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),ft(e),null;case 26:var u=e.type,n=e.memoizedState;return t===null?(Ye(e),n!==null?(ft(e),Br(e,n)):(ft(e),yc(e,u,null,a,l))):n?n!==t.memoizedState?(Ye(e),ft(e),Br(e,n)):(ft(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ye(e),ft(e),yc(e,u,t,a,l)),null;case 27:if(bu(e),l=L.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return ft(e),null}t=M.current,aa(e)?Ss(e):(t=Vo(u,a,l),e.stateNode=t,Ye(e))}return ft(e),null;case 5:if(bu(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return ft(e),null}if(n=M.current,aa(e))Ss(e);else{var i=Cn(L.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[Ct]=e,n[Gt]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=n;t:switch(Rt(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ye(e)}}return ft(e),yc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(y(166));if(t=L.current,aa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=zt,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[Ct]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||jo(t.nodeValue,l)),t||tl(e,!0)}else t=Cn(t).createTextNode(a),t[Ct]=e,e.stateNode=t}return ft(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=aa(e),l!==null){if(t===null){if(!a)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[Ct]=e}else Rl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),t=!1}else l=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(le(e),e):(le(e),null);if((e.flags&128)!==0)throw Error(y(558))}return ft(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=aa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(y(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(y(317));u[Ct]=e}else Rl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ft(e),u=!1}else u=Ci(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(le(e),e):(le(e),null)}return le(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),rn(e,e.updateQueue),ft(e),null);case 4:return yt(),t===null&&Bc(e.stateNode.containerInfo),ft(e),null;case 10:return He(e.type),ft(e),null;case 19:if(E(St),a=e.memoizedState,a===null)return ft(e),null;if(u=(e.flags&128)!==0,n=a.rendering,n===null)if(u)tu(a,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=ku(t),n!==null){for(e.flags|=128,tu(a,!1),t=n.updateQueue,e.updateQueue=t,rn(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)os(l,t),l=l.sibling;return A(St,St.current&1|2),V&&je(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&kt()>yn&&(e.flags|=128,u=!0,tu(a,!1),e.lanes=4194304)}else{if(!u)if(t=ku(n),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,rn(e,t),tu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!V)return ft(e),null}else 2*kt()-a.renderingStartTime>yn&&l!==536870912&&(e.flags|=128,u=!0,tu(a,!1),e.lanes=4194304);a.isBackwards?(n.sibling=e.child,e.child=n):(t=a.last,t!==null?t.sibling=n:e.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=kt(),t.sibling=null,l=St.current,A(St,u?l&1|2:l&1),V&&je(e,a.treeForkCount),t):(ft(e),null);case 22:case 23:return le(e),Qi(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),l=e.updateQueue,l!==null&&rn(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&E(_l),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),He(pt),ft(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function Wm(t,e){switch(Ti(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return He(pt),yt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return bu(e),null;case 31:if(e.memoizedState!==null){if(le(e),e.alternate===null)throw Error(y(340));Rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(le(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));Rl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return E(St),null;case 4:return yt(),null;case 10:return He(e.type),null;case 22:case 23:return le(e),Qi(),t!==null&&E(_l),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return He(pt),null;case 25:return null;default:return null}}function Qr(t,e){switch(Ti(e),e.tag){case 3:He(pt),yt();break;case 26:case 27:case 5:bu(e);break;case 4:yt();break;case 31:e.memoizedState!==null&&le(e);break;case 13:le(e);break;case 19:E(St);break;case 10:He(e.type);break;case 22:case 23:le(e),Qi(),t!==null&&E(_l);break;case 24:He(pt)}}function eu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var n=l.create,i=l.inst;a=n(),i.destroy=a}l=l.next}while(l!==u)}}catch(c){tt(e,e.return,c)}}function cl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=e;var f=l,m=c;try{m()}catch(h){tt(u,f,h)}}}a=a.next}while(a!==n)}}catch(h){tt(e,e.return,h)}}function Lr(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Rs(e,l)}catch(a){tt(t,t.return,a)}}}function Yr(t,e,l){l.props=Bl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){tt(t,e,a)}}function lu(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){tt(t,e,u)}}function ze(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){tt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){tt(t,e,u)}else l.current=null}function Gr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){tt(t,t.return,u)}}function Sc(t,e,l){try{var a=t.stateNode;Sv(a,t.type,l,e),a[Gt]=e}catch(u){tt(t,t.return,u)}}function Jr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&vl(t.type)||t.tag===4}function hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&vl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=qe));else if(a!==4&&(a===27&&vl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(pc(t,e,l),t=t.sibling;t!==null;)pc(t,e,l),t=t.sibling}function on(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&vl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(on(t,e,l),t=t.sibling;t!==null;)on(t,e,l),t=t.sibling}function Xr(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);Rt(e,a,l),e[Ct]=t,e[Gt]=l}catch(n){tt(t,t.return,n)}}var Ge=!1,Et=!1,gc=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,At=null;function Fm(t,e){if(t=t.containerInfo,Yc=_n,t=ls(t),di(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var i=0,c=-1,f=-1,m=0,h=0,b=t,v=null;e:for(;;){for(var S;b!==l||u!==0&&b.nodeType!==3||(c=i+u),b!==n||a!==0&&b.nodeType!==3||(f=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(S=b.firstChild)!==null;)v=b,b=S;for(;;){if(b===t)break e;if(v===l&&++m===u&&(c=i),v===n&&++h===a&&(f=i),(S=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=S}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gc={focusedElem:t,selectionRange:l},_n=!1,At=e;At!==null;)if(e=At,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,At=t;else for(;At!==null;){switch(e=At,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,l=e,u=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var C=Bl(l.type,u);t=a.getSnapshotBeforeUpdate(C,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){tt(l,l.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Zc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,At=t;break}At=e.return}}function Vr(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Xe(t,l),a&4&&eu(5,l);break;case 1:if(Xe(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){tt(l,l.return,i)}else{var u=Bl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){tt(l,l.return,i)}}a&64&&Lr(l),a&512&&lu(l,l.return);break;case 3:if(Xe(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Rs(t,e)}catch(i){tt(l,l.return,i)}}break;case 27:e===null&&a&4&&Xr(l);case 26:case 5:Xe(t,l),e===null&&a&4&&Gr(l),a&512&&lu(l,l.return);break;case 12:Xe(t,l);break;case 31:Xe(t,l),a&4&&Wr(t,l);break;case 13:Xe(t,l),a&4&&Fr(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=uv.bind(null,l),Av(t,l))));break;case 22:if(a=l.memoizedState!==null||Ge,!a){e=e!==null&&e.memoizedState!==null||Et,u=Ge;var n=Et;Ge=a,(Et=e)&&!n?Ze(t,l,(l.subtreeFlags&8772)!==0):Xe(t,l),Ge=u,Et=n}break;case 30:break;default:Xe(t,l)}}function Kr(t){var e=t.alternate;e!==null&&(t.alternate=null,Kr(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Fn(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rt=null,Xt=!1;function Je(t,e,l){for(l=l.child;l!==null;)wr(t,e,l),l=l.sibling}function wr(t,e,l){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(za,l)}catch{}switch(l.tag){case 26:Et||ze(l,e),Je(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Et||ze(l,e);var a=rt,u=Xt;vl(l.type)&&(rt=l.stateNode,Xt=!1),Je(t,e,l),ou(l.stateNode),rt=a,Xt=u;break;case 5:Et||ze(l,e);case 6:if(a=rt,u=Xt,rt=null,Je(t,e,l),rt=a,Xt=u,rt!==null)if(Xt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(l.stateNode)}catch(n){tt(l,e,n)}else try{rt.removeChild(l.stateNode)}catch(n){tt(l,e,n)}break;case 18:rt!==null&&(Xt?(t=rt,Yo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Aa(t)):Yo(rt,l.stateNode));break;case 4:a=rt,u=Xt,rt=l.stateNode.containerInfo,Xt=!0,Je(t,e,l),rt=a,Xt=u;break;case 0:case 11:case 14:case 15:cl(2,l,e),Et||cl(4,l,e),Je(t,e,l);break;case 1:Et||(ze(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Yr(l,e,a)),Je(t,e,l);break;case 21:Je(t,e,l);break;case 22:Et=(a=Et)||l.memoizedState!==null,Je(t,e,l),Et=a;break;default:Je(t,e,l)}}function Wr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Aa(t)}catch(l){tt(e,e.return,l)}}}function Fr(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Aa(t)}catch(l){tt(e,e.return,l)}}function km(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Zr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Zr),e;default:throw Error(y(435,t.tag))}}function dn(t,e){var l=km(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var u=nv.bind(null,t,a);a.then(u,u)}})}function Zt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],n=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){rt=c.stateNode,Xt=!1;break t}break;case 5:rt=c.stateNode,Xt=!1;break t;case 3:case 4:rt=c.stateNode.containerInfo,Xt=!0;break t}c=c.return}if(rt===null)throw Error(y(160));wr(n,i,u),rt=null,Xt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)kr(e,t),e=e.sibling}var ge=null;function kr(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(e,t),Vt(t),a&4&&(cl(3,t,t.return),eu(3,t),cl(5,t,t.return));break;case 1:Zt(e,t),Vt(t),a&512&&(Et||l===null||ze(l,l.return)),a&64&&Ge&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=ge;if(Zt(e,t),Vt(t),a&512&&(Et||l===null||ze(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ra]||n[Ct]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),Rt(n,a,l),n[Ct]=t,Tt(n),a=n;break t;case"link":var i=$o("link","href",u).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break e}}n=u.createElement(a),Rt(n,a,l),u.head.appendChild(n);break;case"meta":if(i=$o("meta","content",u).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break e}}n=u.createElement(a),Rt(n,a,l),u.head.appendChild(n);break;default:throw Error(y(468,a))}n[Ct]=t,Tt(n),a=n}t.stateNode=a}else Io(u,t.type,t.stateNode);else t.stateNode=ko(u,a,t.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?Io(u,t.type,t.stateNode):ko(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Zt(e,t),Vt(t),a&512&&(Et||l===null||ze(l,l.return)),l!==null&&a&4&&Sc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Zt(e,t),Vt(t),a&512&&(Et||l===null||ze(l,l.return)),t.flags&32){u=t.stateNode;try{wl(u,"")}catch(C){tt(t,t.return,C)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Sc(t,u,l!==null?l.memoizedProps:u)),a&1024&&(gc=!0);break;case 6:if(Zt(e,t),Vt(t),a&4){if(t.stateNode===null)throw Error(y(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(C){tt(t,t.return,C)}}break;case 3:if(On=null,u=ge,ge=zn(e.containerInfo),Zt(e,t),ge=u,Vt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(C){tt(t,t.return,C)}gc&&(gc=!1,$r(t));break;case 4:a=ge,ge=zn(t.stateNode.containerInfo),Zt(e,t),Vt(t),ge=a;break;case 12:Zt(e,t),Vt(t);break;case 31:Zt(e,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 13:Zt(e,t),Vt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vn=kt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 22:u=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,m=Ge,h=Et;if(Ge=m||u,Et=h||f,Zt(e,t),Et=h,Ge=m,Vt(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||f||Ge||Et||Ql(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(C){tt(f,f.return,C)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){tt(f,f.return,C)}}}else if(e.tag===18){if(l===null){f=e;try{var S=f.stateNode;u?Go(S,!0):Go(f.stateNode,!1)}catch(C){tt(f,f.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,dn(t,l))));break;case 19:Zt(e,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 30:break;case 21:break;default:Zt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Jr(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var u=l.stateNode,n=hc(t);on(t,n,u);break;case 5:var i=l.stateNode;l.flags&32&&(wl(i,""),l.flags&=-33);var c=hc(t);on(t,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,m=hc(t);pc(t,m,f);break;default:throw Error(y(161))}}catch(h){tt(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $r(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$r(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Xe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Vr(t,e.alternate,e),e=e.sibling}function Ql(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:cl(4,e,e.return),Ql(e);break;case 1:ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Yr(e,e.return,l),Ql(e);break;case 27:ou(e.stateNode);case 26:case 5:ze(e,e.return),Ql(e);break;case 22:e.memoizedState===null&&Ql(e);break;case 30:Ql(e);break;default:Ql(e)}t=t.sibling}}function Ze(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,n=e,i=n.flags;switch(n.tag){case 0:case 11:case 15:Ze(u,n,l),eu(4,n);break;case 1:if(Ze(u,n,l),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){tt(a,a.return,m)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Os(f[u],c)}catch(m){tt(a,a.return,m)}}l&&i&64&&Lr(n),lu(n,n.return);break;case 27:Xr(n);case 26:case 5:Ze(u,n,l),l&&a===null&&i&4&&Gr(n),lu(n,n.return);break;case 12:Ze(u,n,l);break;case 31:Ze(u,n,l),l&&i&4&&Wr(u,n);break;case 13:Ze(u,n,l),l&&i&4&&Fr(u,n);break;case 22:n.memoizedState===null&&Ze(u,n,l),lu(n,n.return);break;case 30:break;default:Ze(u,n,l)}e=e.sibling}}function bc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ja(l))}function Ec(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ja(t))}function be(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ir(t,e,l,a),e=e.sibling}function Ir(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:be(t,e,l,a),u&2048&&eu(9,e);break;case 1:be(t,e,l,a);break;case 3:be(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ja(t)));break;case 12:if(u&2048){be(t,e,l,a),t=e.stateNode;try{var n=e.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){tt(e,e.return,f)}}else be(t,e,l,a);break;case 31:be(t,e,l,a);break;case 13:be(t,e,l,a);break;case 23:break;case 22:n=e.stateNode,i=e.alternate,e.memoizedState!==null?n._visibility&2?be(t,e,l,a):au(t,e):n._visibility&2?be(t,e,l,a):(n._visibility|=2,ma(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),u&2048&&bc(i,e);break;case 24:be(t,e,l,a),u&2048&&Ec(e.alternate,e);break;default:be(t,e,l,a)}}function ma(t,e,l,a,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,i=e,c=l,f=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ma(n,i,c,f,u),eu(8,i);break;case 23:break;case 22:var h=i.stateNode;i.memoizedState!==null?h._visibility&2?ma(n,i,c,f,u):au(n,i):(h._visibility|=2,ma(n,i,c,f,u)),u&&m&2048&&bc(i.alternate,i);break;case 24:ma(n,i,c,f,u),u&&m&2048&&Ec(i.alternate,i);break;default:ma(n,i,c,f,u)}e=e.sibling}}function au(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:au(l,a),u&2048&&bc(a.alternate,a);break;case 24:au(l,a),u&2048&&Ec(a.alternate,a);break;default:au(l,a)}e=e.sibling}}var uu=8192;function va(t,e,l){if(t.subtreeFlags&uu)for(t=t.child;t!==null;)Pr(t,e,l),t=t.sibling}function Pr(t,e,l){switch(t.tag){case 26:va(t,e,l),t.flags&uu&&t.memoizedState!==null&&Hv(l,ge,t.memoizedState,t.memoizedProps);break;case 5:va(t,e,l);break;case 3:case 4:var a=ge;ge=zn(t.stateNode.containerInfo),va(t,e,l),ge=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=uu,uu=16777216,va(t,e,l),uu=a):va(t,e,l));break;default:va(t,e,l)}}function to(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];At=a,lo(a,t)}to(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eo(t),t=t.sibling}function eo(t){switch(t.tag){case 0:case 11:case 15:nu(t),t.flags&2048&&cl(9,t,t.return);break;case 3:nu(t);break;case 12:nu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,mn(t)):nu(t);break;default:nu(t)}}function mn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];At=a,lo(a,t)}to(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cl(8,e,e.return),mn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,mn(e));break;default:mn(e)}t=t.sibling}}function lo(t,e){for(;At!==null;){var l=At;switch(l.tag){case 0:case 11:case 15:cl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,At=a;else t:for(l=t;At!==null;){a=At;var u=a.sibling,n=a.return;if(Kr(a),a===l){At=null;break t}if(u!==null){u.return=n,At=u;break t}At=n}}}var $m={getCacheForType:function(t){var e=Mt(pt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Mt(pt).controller.signal}},Im=typeof WeakMap=="function"?WeakMap:Map,F=0,it=null,Y=null,J=0,P=0,ae=null,fl=!1,ya=!1,Dc=!1,Ve=0,mt=0,sl=0,Ll=0,Tc=0,ue=0,Sa=0,iu=null,Kt=null,Ac=!1,vn=0,ao=0,yn=1/0,Sn=null,rl=null,Dt=0,ol=null,ha=null,Ke=0,Cc=0,zc=null,uo=null,cu=0,Mc=null;function ne(){return(F&2)!==0&&J!==0?J&-J:p.T!==null?xc():bf()}function no(){if(ue===0)if((J&536870912)===0||V){var t=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),ue=t}else ue=536870912;return t=ee.current,t!==null&&(t.flags|=32),ue}function wt(t,e,l){(t===it&&(P===2||P===9)||t.cancelPendingCommit!==null)&&(pa(t,0),dl(t,J,ue,!1)),Oa(t,l),((F&2)===0||t!==it)&&(t===it&&((F&2)===0&&(Ll|=l),mt===4&&dl(t,J,ue,!1)),Me(t))}function io(t,e,l){if((F&6)!==0)throw Error(y(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Ma(t,e),u=a?ev(t,e):Rc(t,e,!0),n=a;do{if(u===0){ya&&!a&&dl(t,e,0,!1);break}else{if(l=t.current.alternate,n&&!Pm(l)){u=Rc(t,e,!1),n=!1;continue}if(u===2){if(n=e,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(pa(c,i).flags|=256),i=Rc(c,i,!1),i!==2){if(Dc&&!f){c.errorRecoveryDisabledLanes|=n,Ll|=n,u=4;break t}n=Kt,Kt=u,n!==null&&(Kt===null?Kt=n:Kt.push.apply(Kt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){pa(t,0),dl(t,e,0,!0);break}t:{switch(a=t,n=u,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:dl(a,e,ue,!fl);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(u=vn+300-kt(),10<u)){if(dl(a,e,ue,!fl),Cu(a,0,!0)!==0)break t;Ke=e,a.timeoutHandle=Qo(co.bind(null,a,l,Kt,Sn,Ac,e,ue,Ll,Sa,fl,n,"Throttled",-0,0),u);break t}co(a,l,Kt,Sn,Ac,e,ue,Ll,Sa,fl,n,null,-0,0)}}break}while(!0);Me(t)}function co(t,e,l,a,u,n,i,c,f,m,h,b,v,S){if(t.timeoutHandle=-1,b=e.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qe},Pr(e,n,b);var C=(n&62914560)===n?vn-kt():(n&4194048)===n?ao-kt():0;if(C=Bv(b,C),C!==null){Ke=n,t.cancelPendingCommit=C(So.bind(null,t,e,n,l,a,u,i,c,f,h,b,null,v,S)),dl(t,n,i,!m);return}}So(t,e,n,l,a,u,i,c,f)}function Pm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],n=u.getSnapshot;u=u.value;try{if(!Pt(n(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dl(t,e,l,a){e&=~Tc,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var n=31-It(u),i=1<<n;a[n]=-1,u&=~i}l!==0&&hf(t,l,e)}function hn(){return(F&6)===0?(fu(0),!1):!0}function Oc(){if(Y!==null){if(P===0)var t=Y.return;else t=Y,Ne=Ul=null,Zi(t),fa=null,Za=0,t=Y;for(;t!==null;)Qr(t.alternate,t),t=t.return;Y=null}}function pa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,gv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ke=0,Oc(),it=t,Y=l=xe(t.current,null),J=e,P=0,ae=null,fl=!1,ya=Ma(t,e),Dc=!1,Sa=ue=Tc=Ll=sl=mt=0,Kt=iu=null,Ac=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-It(a),n=1<<u;e|=t[u],a&=~n}return Ve=e,Bu(),l}function fo(t,e){B=null,p.H=Ia,e===ca||e===Vu?(e=As(),P=3):e===_i?(e=As(),P=4):P=e===ic?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ae=e,Y===null&&(mt=1,nn(t,re(e,t.current)))}function so(){var t=ee.current;return t===null?!0:(J&4194048)===J?ve===null:(J&62914560)===J||(J&536870912)!==0?t===ve:!1}function ro(){var t=p.H;return p.H=Ia,t===null?Ia:t}function oo(){var t=p.A;return p.A=$m,t}function pn(){mt=4,fl||(J&4194048)!==J&&ee.current!==null||(ya=!0),(sl&134217727)===0&&(Ll&134217727)===0||it===null||dl(it,J,ue,!1)}function Rc(t,e,l){var a=F;F|=2;var u=ro(),n=oo();(it!==t||J!==e)&&(Sn=null,pa(t,e)),e=!1;var i=mt;t:do try{if(P!==0&&Y!==null){var c=Y,f=ae;switch(P){case 8:Oc(),i=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var m=P;if(P=0,ae=null,ga(t,c,f,m),l&&ya){i=0;break t}break;default:m=P,P=0,ae=null,ga(t,c,f,m)}}tv(),i=mt;break}catch(h){fo(t,h)}while(!0);return e&&t.shellSuspendCounter++,Ne=Ul=null,F=a,p.H=u,p.A=n,Y===null&&(it=null,J=0,Bu()),i}function tv(){for(;Y!==null;)mo(Y)}function ev(t,e){var l=F;F|=2;var a=ro(),u=oo();it!==t||J!==e?(Sn=null,yn=kt()+500,pa(t,e)):ya=Ma(t,e);t:do try{if(P!==0&&Y!==null){e=Y;var n=ae;e:switch(P){case 1:P=0,ae=null,ga(t,e,n,1);break;case 2:case 9:if(Ds(n)){P=0,ae=null,vo(e);break}e=function(){P!==2&&P!==9||it!==t||(P=7),Me(t)},n.then(e,e);break t;case 3:P=7;break t;case 4:P=5;break t;case 7:Ds(n)?(P=0,ae=null,vo(e)):(P=0,ae=null,ga(t,e,n,7));break;case 5:var i=null;switch(Y.tag){case 26:i=Y.memoizedState;case 5:case 27:var c=Y;if(i?Po(i):c.stateNode.complete){P=0,ae=null;var f=c.sibling;if(f!==null)Y=f;else{var m=c.return;m!==null?(Y=m,gn(m)):Y=null}break e}}P=0,ae=null,ga(t,e,n,5);break;case 6:P=0,ae=null,ga(t,e,n,6);break;case 8:Oc(),mt=6;break t;default:throw Error(y(462))}}lv();break}catch(h){fo(t,h)}while(!0);return Ne=Ul=null,p.H=a,p.A=u,F=l,Y!==null?0:(it=null,J=0,Bu(),mt)}function lv(){for(;Y!==null&&!Cd();)mo(Y)}function mo(t){var e=Hr(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?gn(t):Y=e}function vo(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ur(l,e,e.pendingProps,e.type,void 0,J);break;case 11:e=Ur(l,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Zi(e);default:Qr(l,e),e=Y=os(e,Ve),e=Hr(l,e,Ve)}t.memoizedProps=t.pendingProps,e===null?gn(t):Y=e}function ga(t,e,l,a){Ne=Ul=null,Zi(e),fa=null,Za=0;var u=e.return;try{if(Zm(t,u,e,l,J)){mt=1,nn(t,re(l,t.current)),Y=null;return}}catch(n){if(u!==null)throw Y=u,n;mt=1,nn(t,re(l,t.current)),Y=null;return}e.flags&32768?(V||a===1?t=!0:ya||(J&536870912)!==0?t=!1:(fl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ee.current,a!==null&&a.tag===13&&(a.flags|=16384))),yo(e,t)):gn(e)}function gn(t){var e=t;do{if((e.flags&32768)!==0){yo(e,fl);return}t=e.return;var l=wm(e.alternate,e,Ve);if(l!==null){Y=l;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);mt===0&&(mt=5)}function yo(t,e){do{var l=Wm(t.alternate,t);if(l!==null){l.flags&=32767,Y=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){Y=t;return}Y=t=l}while(t!==null);mt=6,Y=null}function So(t,e,l,a,u,n,i,c,f){t.cancelPendingCommit=null;do bn();while(Dt!==0);if((F&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=hi,Nd(t,l,n,i,c,f),t===it&&(Y=it=null,J=0),ha=e,ol=t,Ke=l,Cc=n,zc=u,uo=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iv(Eu,function(){return Eo(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=p.T,p.T=null,u=T.p,T.p=2,i=F,F|=4;try{Fm(t,e,l)}finally{F=i,T.p=u,p.T=a}}Dt=1,ho(),po(),go()}}function ho(){if(Dt===1){Dt=0;var t=ol,e=ha,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=p.T,p.T=null;var a=T.p;T.p=2;var u=F;F|=4;try{kr(e,t);var n=Gc,i=ls(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&es(c.ownerDocument.documentElement,c)){if(f!==null&&di(c)){var m=f.start,h=f.end;if(h===void 0&&(h=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(h,c.value.length);else{var b=c.ownerDocument||document,v=b&&b.defaultView||window;if(v.getSelection){var S=v.getSelection(),C=c.textContent.length,q=Math.min(f.start,C),ut=f.end===void 0?q:Math.min(f.end,C);!S.extend&&q>ut&&(i=ut,ut=q,q=i);var o=ts(c,q),s=ts(c,ut);if(o&&s&&(S.rangeCount!==1||S.anchorNode!==o.node||S.anchorOffset!==o.offset||S.focusNode!==s.node||S.focusOffset!==s.offset)){var d=b.createRange();d.setStart(o.node,o.offset),S.removeAllRanges(),q>ut?(S.addRange(d),S.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),S.addRange(d))}}}}for(b=[],S=c;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}_n=!!Yc,Gc=Yc=null}finally{F=u,T.p=a,p.T=l}}t.current=e,Dt=2}}function po(){if(Dt===2){Dt=0;var t=ol,e=ha,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=p.T,p.T=null;var a=T.p;T.p=2;var u=F;F|=4;try{Vr(t,e.alternate,e)}finally{F=u,T.p=a,p.T=l}}Dt=3}}function go(){if(Dt===4||Dt===3){Dt=0,zd();var t=ol,e=ha,l=Ke,a=uo;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Dt=5:(Dt=0,ha=ol=null,bo(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(rl=null),wn(l),e=e.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=p.T,u=T.p,T.p=2,p.T=null;try{for(var n=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{p.T=e,T.p=u}}(Ke&3)!==0&&bn(),Me(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===Mc?cu++:(cu=0,Mc=t):cu=0,fu(0)}}function bo(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ja(e)))}function bn(){return ho(),po(),go(),Eo()}function Eo(){if(Dt!==5)return!1;var t=ol,e=Cc;Cc=0;var l=wn(Ke),a=p.T,u=T.p;try{T.p=32>l?32:l,p.T=null,l=zc,zc=null;var n=ol,i=Ke;if(Dt=0,ha=ol=null,Ke=0,(F&6)!==0)throw Error(y(331));var c=F;if(F|=4,eo(n.current),Ir(n,n.current,i,l),F=c,fu(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(za,n)}catch{}return!0}finally{T.p=u,p.T=a,bo(t,e)}}function Do(t,e,l){e=re(l,e),e=nc(t.stateNode,e,2),t=ul(t,e,2),t!==null&&(Oa(t,2),Me(t))}function tt(t,e,l){if(t.tag===3)Do(t,t,l);else for(;e!==null;){if(e.tag===3){Do(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rl===null||!rl.has(a))){t=re(l,t),l=Dr(2),a=ul(e,l,2),a!==null&&(Tr(l,a,e,t),Oa(a,2),Me(a));break}}e=e.return}}function Uc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Im;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Dc=!0,u.add(l),t=av.bind(null,t,e,l),e.then(t,t))}function av(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,it===t&&(J&l)===l&&(mt===4||mt===3&&(J&62914560)===J&&300>kt()-vn?(F&2)===0&&pa(t,0):Tc|=l,Sa===J&&(Sa=0)),Me(t)}function To(t,e){e===0&&(e=Sf()),t=Ml(t,e),t!==null&&(Oa(t,e),Me(t))}function uv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),To(t,l)}function nv(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(e),To(t,l)}function iv(t,e){return Xn(t,e)}var En=null,ba=null,qc=!1,Dn=!1,_c=!1,ml=0;function Me(t){t!==ba&&t.next===null&&(ba===null?En=ba=t:ba=ba.next=t),Dn=!0,qc||(qc=!0,fv())}function fu(t,e){if(!_c&&Dn){_c=!0;do for(var l=!1,a=En;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-It(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Mo(a,n))}else n=J,n=Cu(a,a===it?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ma(a,n)||(l=!0,Mo(a,n));a=a.next}while(l);_c=!1}}function cv(){Ao()}function Ao(){Dn=qc=!1;var t=0;ml!==0&&pv()&&(t=ml);for(var e=kt(),l=null,a=En;a!==null;){var u=a.next,n=Co(a,e);n===0?(a.next=null,l===null?En=u:l.next=u,u===null&&(ba=l)):(l=a,(t!==0||(n&3)!==0)&&(Dn=!0)),a=u}Dt!==0&&Dt!==5||fu(t),ml!==0&&(ml=0)}function Co(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-It(n),c=1<<i,f=u[i];f===-1?((c&l)===0||(c&a)!==0)&&(u[i]=jd(c,e)):f<=e&&(t.expiredLanes|=c),n&=~c}if(e=it,l=J,l=Cu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(P===2||P===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zn(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ma(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Zn(a),wn(l)){case 2:case 8:l=vf;break;case 32:l=Eu;break;case 268435456:l=yf;break;default:l=Eu}return a=zo.bind(null,t),l=Xn(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Zn(a),t.callbackPriority=2,t.callbackNode=null,2}function zo(t,e){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(bn()&&t.callbackNode!==l)return null;var a=J;return a=Cu(t,t===it?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(io(t,a,e),Co(t,kt()),t.callbackNode!=null&&t.callbackNode===l?zo.bind(null,t):null)}function Mo(t,e){if(bn())return null;io(t,e,!0)}function fv(){bv(function(){(F&6)!==0?Xn(mf,cv):Ao()})}function xc(){if(ml===0){var t=na;t===0&&(t=Du,Du<<=1,(Du&261888)===0&&(Du=256)),ml=t}return ml}function Oo(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ru(""+t)}function Ro(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function sv(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var n=Oo((u[Gt]||null).action),i=a.submitter;i&&(e=(e=i[Gt]||null)?Oo(e.formAction):i.getAttribute("formAction"),e!==null&&(n=e,i=null));var c=new xu("action","action",null,a,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var f=i?Ro(u,i):new FormData(u);Pi(l,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?Ro(u,i):new FormData(u),Pi(l,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var jc=0;jc<Si.length;jc++){var Nc=Si[jc],rv=Nc.toLowerCase(),ov=Nc[0].toUpperCase()+Nc.slice(1);pe(rv,"on"+ov)}pe(ns,"onAnimationEnd"),pe(is,"onAnimationIteration"),pe(cs,"onAnimationStart"),pe("dblclick","onDoubleClick"),pe("focusin","onFocus"),pe("focusout","onBlur"),pe(Mm,"onTransitionRun"),pe(Om,"onTransitionStart"),pe(Rm,"onTransitionCancel"),pe(fs,"onTransitionEnd"),Vl("onMouseEnter",["mouseout","mouseover"]),Vl("onMouseLeave",["mouseout","mouseover"]),Vl("onPointerEnter",["pointerout","pointerover"]),Vl("onPointerLeave",["pointerout","pointerover"]),Tl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Uo(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var n=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(h){Hu(h)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(h){Hu(h)}u.currentTarget=null,n=f}}}}function G(t,e){var l=e[Wn];l===void 0&&(l=e[Wn]=new Set);var a=t+"__bubble";l.has(a)||(qo(e,t,2,!1),l.add(a))}function Hc(t,e,l){var a=0;e&&(a|=4),qo(l,t,a,e)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function Bc(t){if(!t[Tn]){t[Tn]=!0,Tf.forEach(function(l){l!=="selectionchange"&&(dv.has(l)||Hc(l,!1,t),Hc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tn]||(e[Tn]=!0,Hc("selectionchange",!1,e))}}function qo(t,e,l,a){switch(id(e)){case 2:var u=Yv;break;case 8:u=Gv;break;default:u=Ic}l=u.bind(null,e,l,t),u=void 0,!ai||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function Qc(t,e,l,a,u){var n=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Jl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue t}c=c.parentNode}}a=a.return}Nf(function(){var m=n,h=ei(l),b=[];t:{var v=ss.get(t);if(v!==void 0){var S=xu,C=t;switch(t){case"keypress":if(qu(l)===0)break t;case"keydown":case"keyup":S=nm;break;case"focusin":C="focus",S=ci;break;case"focusout":C="blur",S=ci;break;case"beforeblur":case"afterblur":S=ci;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=fm;break;case ns:case is:case cs:S=kd;break;case fs:S=rm;break;case"scroll":case"scrollend":S=Vd;break;case"wheel":S=dm;break;case"copy":case"cut":case"paste":S=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Yf;break;case"toggle":case"beforetoggle":S=vm}var q=(e&4)!==0,ut=!q&&(t==="scroll"||t==="scrollend"),o=q?v!==null?v+"Capture":null:v;q=[];for(var s=m,d;s!==null;){var g=s;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||o===null||(g=qa(s,o),g!=null&&q.push(ru(s,g,d))),ut)break;s=s.return}0<q.length&&(v=new S(v,C,null,l,h),b.push({event:v,listeners:q}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",v&&l!==ti&&(C=l.relatedTarget||l.fromElement)&&(Jl(C)||C[Gl]))break t;if((S||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,S?(C=l.relatedTarget||l.toElement,S=m,C=C?Jl(C):null,C!==null&&(ut=W(C),q=C.tag,C!==ut||q!==5&&q!==27&&q!==6)&&(C=null)):(S=null,C=m),S!==C)){if(q=Qf,g="onMouseLeave",o="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(q=Yf,g="onPointerLeave",o="onPointerEnter",s="pointer"),ut=S==null?v:Ua(S),d=C==null?v:Ua(C),v=new q(g,s+"leave",S,l,h),v.target=ut,v.relatedTarget=d,g=null,Jl(h)===m&&(q=new q(o,s+"enter",C,l,h),q.target=d,q.relatedTarget=ut,g=q),ut=g,S&&C)e:{for(q=mv,o=S,s=C,d=0,g=o;g;g=q(g))d++;g=0;for(var R=s;R;R=q(R))g++;for(;0<d-g;)o=q(o),d--;for(;0<g-d;)s=q(s),g--;for(;d--;){if(o===s||s!==null&&o===s.alternate){q=o;break e}o=q(o),s=q(s)}q=null}else q=null;S!==null&&_o(b,v,S,q,!1),C!==null&&ut!==null&&_o(b,ut,C,q,!0)}}t:{if(v=m?Ua(m):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var K=Wf;else if(Kf(v))if(Ff)K=Am;else{K=Dm;var O=Em}else S=v.nodeName,!S||S.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Pn(m.elementType)&&(K=Wf):K=Tm;if(K&&(K=K(t,m))){wf(b,K,l,h);break t}O&&O(t,v,m),t==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&In(v,"number",v.value)}switch(O=m?Ua(m):window,t){case"focusin":(Kf(O)||O.contentEditable==="true")&&($l=O,mi=m,La=null);break;case"focusout":La=mi=$l=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,as(b,l,h);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":as(b,l,h)}var Q;if(si)t:{switch(t){case"compositionstart":var X="onCompositionStart";break t;case"compositionend":X="onCompositionEnd";break t;case"compositionupdate":X="onCompositionUpdate";break t}X=void 0}else kl?Zf(t,l)&&(X="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(Gf&&l.locale!=="ko"&&(kl||X!=="onCompositionStart"?X==="onCompositionEnd"&&kl&&(Q=Hf()):($e=h,ui="value"in $e?$e.value:$e.textContent,kl=!0)),O=An(m,X),0<O.length&&(X=new Lf(X,t,null,l,h),b.push({event:X,listeners:O}),Q?X.data=Q:(Q=Vf(l),Q!==null&&(X.data=Q)))),(Q=Sm?hm(t,l):pm(t,l))&&(X=An(m,"onBeforeInput"),0<X.length&&(O=new Lf("onBeforeInput","beforeinput",null,l,h),b.push({event:O,listeners:X}),O.data=Q)),sv(b,t,m,l,h)}Uo(b,e)})}function ru(t,e,l){return{instance:t,listener:e,currentTarget:l}}function An(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=qa(t,l),u!=null&&a.unshift(ru(t,u,n)),u=qa(t,e),u!=null&&a.push(ru(t,u,n))),t.tag===3)return a;t=t.return}return[]}function mv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _o(t,e,l,a,u){for(var n=e._reactName,i=[];l!==null&&l!==a;){var c=l,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=qa(l,n),m!=null&&i.unshift(ru(l,m,f))):u||(m=qa(l,n),m!=null&&i.push(ru(l,m,f)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var vv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function xo(t){return(typeof t=="string"?t:""+t).replace(vv,`
`).replace(yv,"")}function jo(t,e){return e=xo(e),xo(t)===e}function at(t,e,l,a,u,n){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&wl(t,""+a);break;case"className":Mu(t,"class",a);break;case"tabIndex":Mu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mu(t,l,a);break;case"style":xf(t,a,n);break;case"data":if(e!=="object"){Mu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ru(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(e!=="input"&&at(t,e,"name",u.name,u,null),at(t,e,"formEncType",u.formEncType,u,null),at(t,e,"formMethod",u.formMethod,u,null),at(t,e,"formTarget",u.formTarget,u,null)):(at(t,e,"encType",u.encType,u,null),at(t,e,"method",u.method,u,null),at(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ru(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=qe);break;case"onScroll":a!=null&&G("scroll",t);break;case"onScrollEnd":a!=null&&G("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Ru(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":G("beforetoggle",t),G("toggle",t),zu(t,"popover",a);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Xd.get(l)||l,zu(t,l,a))}}function Lc(t,e,l,a,u,n){switch(l){case"style":xf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"children":typeof a=="string"?wl(t,a):(typeof a=="number"||typeof a=="bigint")&&wl(t,""+a);break;case"onScroll":a!=null&&G("scroll",t);break;case"onScrollEnd":a!=null&&G("scrollend",t);break;case"onClick":a!=null&&(t.onclick=qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),n=t[Gt]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(e,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):zu(t,l,a)}}}function Rt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",t),G("load",t);var a=!1,u=!1,n;for(n in l)if(l.hasOwnProperty(n)){var i=l[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:at(t,e,n,i,l,null)}}u&&at(t,e,"srcSet",l.srcSet,l,null),a&&at(t,e,"src",l.src,l,null);return;case"input":G("invalid",t);var c=n=i=u=null,f=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":u=h;break;case"type":i=h;break;case"checked":f=h;break;case"defaultChecked":m=h;break;case"value":n=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,e));break;default:at(t,e,a,h,l,null)}}Rf(t,n,c,f,m,i,u,!1);return;case"select":G("invalid",t),a=i=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:at(t,e,u,c,l,null)}e=n,l=i,t.multiple=!!a,e!=null?Kl(t,!!a,e,!1):l!=null&&Kl(t,!!a,l,!0);return;case"textarea":G("invalid",t),n=u=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:at(t,e,i,c,l,null)}qf(t,a,u,n);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:at(t,e,f,a,l,null)}return;case"dialog":G("beforetoggle",t),G("toggle",t),G("cancel",t),G("close",t);break;case"iframe":case"object":G("load",t);break;case"video":case"audio":for(a=0;a<su.length;a++)G(su[a],t);break;case"image":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"embed":case"source":case"link":G("error",t),G("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:at(t,e,m,a,l,null)}return;default:if(Pn(e)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&Lc(t,e,h,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&at(t,e,c,a,l,null))}function Sv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,h=null;for(S in l){var b=l[S];if(l.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=b;default:a.hasOwnProperty(S)||at(t,e,S,null,a,b)}}for(var v in a){var S=a[v];if(b=l[v],a.hasOwnProperty(v)&&(S!=null||b!=null))switch(v){case"type":n=S;break;case"name":u=S;break;case"checked":m=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(y(137,e));break;default:S!==b&&at(t,e,v,S,a,b)}}$n(t,i,c,f,m,h,n,u);return;case"select":S=i=c=v=null;for(n in l)if(f=l[n],l.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":S=f;default:a.hasOwnProperty(n)||at(t,e,n,null,a,f)}for(u in a)if(n=a[u],f=l[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":v=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&at(t,e,u,n,a,f)}e=c,l=i,a=S,v!=null?Kl(t,!!l,v,!1):!!a!=!!l&&(e!=null?Kl(t,!!l,e,!0):Kl(t,!!l,l?[]:"",!1));return;case"textarea":S=v=null;for(c in l)if(u=l[c],l.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:at(t,e,c,null,a,u)}for(i in a)if(u=a[i],n=l[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":v=u;break;case"defaultValue":S=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(y(91));break;default:u!==n&&at(t,e,i,u,a,n)}Uf(t,v,S);return;case"option":for(var C in l)if(v=l[C],l.hasOwnProperty(C)&&v!=null&&!a.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:at(t,e,C,null,a,v)}for(f in a)if(v=a[f],S=l[f],a.hasOwnProperty(f)&&v!==S&&(v!=null||S!=null))switch(f){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:at(t,e,f,v,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)v=l[q],l.hasOwnProperty(q)&&v!=null&&!a.hasOwnProperty(q)&&at(t,e,q,null,a,v);for(m in a)if(v=a[m],S=l[m],a.hasOwnProperty(m)&&v!==S&&(v!=null||S!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,e));break;default:at(t,e,m,v,a,S)}return;default:if(Pn(e)){for(var ut in l)v=l[ut],l.hasOwnProperty(ut)&&v!==void 0&&!a.hasOwnProperty(ut)&&Lc(t,e,ut,void 0,a,v);for(h in a)v=a[h],S=l[h],!a.hasOwnProperty(h)||v===S||v===void 0&&S===void 0||Lc(t,e,h,v,a,S);return}}for(var o in l)v=l[o],l.hasOwnProperty(o)&&v!=null&&!a.hasOwnProperty(o)&&at(t,e,o,null,a,v);for(b in a)v=a[b],S=l[b],!a.hasOwnProperty(b)||v===S||v==null&&S==null||at(t,e,b,v,a,S)}function No(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&No(i)){for(i=0,c=u.responseEnd,a+=1;a<l.length;a++){var f=l[a],m=f.startTime;if(m>c)break;var h=f.transferSize,b=f.initiatorType;h&&No(b)&&(f=f.responseEnd,i+=h*(f<c?1:(c-m)/(f-m)))}if(--a,e+=8*(n+i)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yc=null,Gc=null;function Cn(t){return t.nodeType===9?t:t.ownerDocument}function Ho(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bo(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xc=null;function pv(){var t=window.event;return t&&t.type==="popstate"?t===Xc?!1:(Xc=t,!0):(Xc=null,!1)}var Qo=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Lo=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lo<"u"?function(t){return Lo.resolve(null).then(t).catch(Ev)}:Qo;function Ev(t){setTimeout(function(){throw t})}function vl(t){return t==="head"}function Yo(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(u),Aa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ou(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ou(l);for(var n=l.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[Ra]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=i}}else l==="body"&&ou(t.ownerDocument.body);l=u}while(l);Aa(e)}function Go(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function Zc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Zc(l),Fn(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Dv(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ra])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ye(t.nextSibling),t===null)break}return null}function Tv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ye(t.nextSibling),t===null))return null;return t}function Jo(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ye(t.nextSibling),t===null))return null;return t}function Vc(t){return t.data==="$?"||t.data==="$~"}function Kc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Av(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ye(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var wc=null;function Xo(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return ye(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Zo(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Vo(t,e,l){switch(e=Cn(l),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function ou(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Fn(t)}var Se=new Map,Ko=new Set;function zn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var we=T.d;T.d={f:Cv,r:zv,D:Mv,C:Ov,L:Rv,m:Uv,X:_v,S:qv,M:xv};function Cv(){var t=we.f(),e=hn();return t||e}function zv(t){var e=Xl(t);e!==null&&e.tag===5&&e.type==="form"?fr(e):we.r(t)}var Ea=typeof document>"u"?null:document;function wo(t,e,l){var a=Ea;if(a&&typeof e=="string"&&e){var u=fe(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),Ko.has(u)||(Ko.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),Rt(e,"link",t),Tt(e),a.head.appendChild(e)))}}function Mv(t){we.D(t),wo("dns-prefetch",t,null)}function Ov(t,e){we.C(t,e),wo("preconnect",t,e)}function Rv(t,e,l){we.L(t,e,l);var a=Ea;if(a&&t&&e){var u='link[rel="preload"][as="'+fe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+fe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+fe(l.imageSizes)+'"]')):u+='[href="'+fe(t)+'"]';var n=u;switch(e){case"style":n=Da(t);break;case"script":n=Ta(t)}Se.has(n)||(t=x({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Se.set(n,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(du(n))||e==="script"&&a.querySelector(mu(n))||(e=a.createElement("link"),Rt(e,"link",t),Tt(e),a.head.appendChild(e)))}}function Uv(t,e){we.m(t,e);var l=Ea;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+fe(a)+'"][href="'+fe(t)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ta(t)}if(!Se.has(n)&&(t=x({rel:"modulepreload",href:t},e),Se.set(n,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(mu(n)))return}a=l.createElement("link"),Rt(a,"link",t),Tt(a),l.head.appendChild(a)}}}function qv(t,e,l){we.S(t,e,l);var a=Ea;if(a&&t){var u=Zl(a).hoistableStyles,n=Da(t);e=e||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(du(n)))c.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Se.get(n))&&Wc(t,l);var f=i=a.createElement("link");Tt(f),Rt(f,"link",t),f._p=new Promise(function(m,h){f.onload=m,f.onerror=h}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mn(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function _v(t,e){we.X(t,e);var l=Ea;if(l&&t){var a=Zl(l).hoistableScripts,u=Ta(t),n=a.get(u);n||(n=l.querySelector(mu(u)),n||(t=x({src:t,async:!0},e),(e=Se.get(u))&&Fc(t,e),n=l.createElement("script"),Tt(n),Rt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function xv(t,e){we.M(t,e);var l=Ea;if(l&&t){var a=Zl(l).hoistableScripts,u=Ta(t),n=a.get(u);n||(n=l.querySelector(mu(u)),n||(t=x({src:t,async:!0,type:"module"},e),(e=Se.get(u))&&Fc(t,e),n=l.createElement("script"),Tt(n),Rt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Wo(t,e,l,a){var u=(u=L.current)?zn(u):null;if(!u)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Da(l.href),l=Zl(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Da(l.href);var n=Zl(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(du(t)))&&!n._p&&(i.instance=n,i.state.loading=5),Se.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Se.set(t,l),n||jv(u,t,l,i.state))),e&&a===null)throw Error(y(528,""));return i}if(e&&a!==null)throw Error(y(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ta(l),l=Zl(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function Da(t){return'href="'+fe(t)+'"'}function du(t){return'link[rel="stylesheet"]['+t+"]"}function Fo(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Rt(e,"link",l),Tt(e),t.head.appendChild(e))}function Ta(t){return'[src="'+fe(t)+'"]'}function mu(t){return"script[async]"+t}function ko(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+fe(l.href)+'"]');if(a)return e.instance=a,Tt(a),a;var u=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Tt(a),Rt(a,"style",u),Mn(a,l.precedence,t),e.instance=a;case"stylesheet":u=Da(l.href);var n=t.querySelector(du(u));if(n)return e.state.loading|=4,e.instance=n,Tt(n),n;a=Fo(l),(u=Se.get(u))&&Wc(a,u),n=(t.ownerDocument||t).createElement("link"),Tt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Rt(n,"link",a),e.state.loading|=4,Mn(n,l.precedence,t),e.instance=n;case"script":return n=Ta(l.src),(u=t.querySelector(mu(n)))?(e.instance=u,Tt(u),u):(a=l,(u=Se.get(n))&&(a=x({},l),Fc(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),Tt(u),Rt(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Mn(a,l.precedence,t));return e.instance}function Mn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Fc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var On=null;function $o(t,e,l){if(On===null){var a=new Map,u=On=new Map;u.set(l,a)}else u=On,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var n=l[u];if(!(n[Ra]||n[Ct]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function Io(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Nv(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Po(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Hv(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=Da(a.href),n=e.querySelector(du(u));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Rn.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=n,Tt(n);return}n=e.ownerDocument||e,a=Fo(a),(u=Se.get(u))&&Wc(a,u),n=n.createElement("link"),Tt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Rt(n,"link",a),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Rn.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var kc=0;function Bv(t,e){return t.stylesheets&&t.count===0&&qn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&qn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&kc===0&&(kc=62500*hv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>kc?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function Rn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Un=null;function qn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Un=new Map,e.forEach(Qv,t),Un=null,Rn.call(t))}function Qv(t,e){if(!(e.state.loading&4)){var l=Un.get(t);if(l)var a=l.get(null);else{l=new Map,Un.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}u=e.instance,i=u.getAttribute("data-precedence"),n=l.get(i)||a,n===a&&l.set(null,u),l.set(i,u),this.count++,a=Rn.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var vu={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Lv(t,e,l,a,u,n,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.hiddenUpdates=Vn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function td(t,e,l,a,u,n,i,c,f,m,h,b){return t=new Lv(t,e,l,i,f,m,h,b,c),e=1,n===!0&&(e|=24),n=te(3,null,null,e),t.current=n,n.stateNode=t,e=Ri(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:e},xi(n),t}function ed(t){return t?(t=ta,t):ta}function ld(t,e,l,a,u,n){u=ed(u),a.context===null?a.context=u:a.pendingContext=u,a=al(e),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=ul(t,a,e),l!==null&&(wt(l,t,e),Ka(l,t,e))}function ad(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function $c(t,e){ad(t,e),(t=t.alternate)&&ad(t,e)}function ud(t){if(t.tag===13||t.tag===31){var e=Ml(t,67108864);e!==null&&wt(e,t,67108864),$c(t,67108864)}}function nd(t){if(t.tag===13||t.tag===31){var e=ne();e=Kn(e);var l=Ml(t,e);l!==null&&wt(l,t,e),$c(t,e)}}var _n=!0;function Yv(t,e,l,a){var u=p.T;p.T=null;var n=T.p;try{T.p=2,Ic(t,e,l,a)}finally{T.p=n,p.T=u}}function Gv(t,e,l,a){var u=p.T;p.T=null;var n=T.p;try{T.p=8,Ic(t,e,l,a)}finally{T.p=n,p.T=u}}function Ic(t,e,l,a){if(_n){var u=Pc(a);if(u===null)Qc(t,e,a,xn,l),cd(t,a);else if(Xv(u,t,e,l,a))a.stopPropagation();else if(cd(t,a),e&4&&-1<Jv.indexOf(t)){for(;u!==null;){var n=Xl(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Dl(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-It(i);c.entanglements[1]|=f,i&=~f}Me(n),(F&6)===0&&(yn=kt()+500,fu(0))}}break;case 31:case 13:c=Ml(n,2),c!==null&&wt(c,n,2),hn(),$c(n,2)}if(n=Pc(a),n===null&&Qc(t,e,a,xn,l),n===u)break;u=n}u!==null&&a.stopPropagation()}else Qc(t,e,a,null,l)}}function Pc(t){return t=ei(t),tf(t)}var xn=null;function tf(t){if(xn=null,t=Jl(t),t!==null){var e=W(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=vt(e),t!==null)return t;t=null}else if(l===31){if(t=_t(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return xn=t,null}function id(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case mf:return 2;case vf:return 8;case Eu:case Od:return 32;case yf:return 268435456;default:return 32}default:return 32}}var ef=!1,yl=null,Sl=null,hl=null,yu=new Map,Su=new Map,pl=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(t,e){switch(t){case"focusin":case"focusout":yl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":hl=null;break;case"pointerover":case"pointerout":yu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Su.delete(e.pointerId)}}function hu(t,e,l,a,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},e!==null&&(e=Xl(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Xv(t,e,l,a,u){switch(e){case"focusin":return yl=hu(yl,t,e,l,a,u),!0;case"dragenter":return Sl=hu(Sl,t,e,l,a,u),!0;case"mouseover":return hl=hu(hl,t,e,l,a,u),!0;case"pointerover":var n=u.pointerId;return yu.set(n,hu(yu.get(n)||null,t,e,l,a,u)),!0;case"gotpointercapture":return n=u.pointerId,Su.set(n,hu(Su.get(n)||null,t,e,l,a,u)),!0}return!1}function fd(t){var e=Jl(t.target);if(e!==null){var l=W(e);if(l!==null){if(e=l.tag,e===13){if(e=vt(l),e!==null){t.blockedOn=e,Ef(t.priority,function(){nd(l)});return}}else if(e===31){if(e=_t(l),e!==null){t.blockedOn=e,Ef(t.priority,function(){nd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Pc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ti=a,l.target.dispatchEvent(a),ti=null}else return e=Xl(l),e!==null&&ud(e),t.blockedOn=l,!1;e.shift()}return!0}function sd(t,e,l){jn(t)&&l.delete(e)}function Zv(){ef=!1,yl!==null&&jn(yl)&&(yl=null),Sl!==null&&jn(Sl)&&(Sl=null),hl!==null&&jn(hl)&&(hl=null),yu.forEach(sd),Su.forEach(sd)}function Nn(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Zv)))}var Hn=null;function rd(t){Hn!==t&&(Hn=t,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Hn===t&&(Hn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(tf(a||l)===null)continue;break}var n=Xl(l);n!==null&&(t.splice(e,3),e-=3,Pi(n,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function Aa(t){function e(f){return Nn(f,t)}yl!==null&&Nn(yl,t),Sl!==null&&Nn(Sl,t),hl!==null&&Nn(hl,t),yu.forEach(e),Su.forEach(e);for(var l=0;l<pl.length;l++){var a=pl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<pl.length&&(l=pl[0],l.blockedOn===null);)fd(l),l.blockedOn===null&&pl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],n=l[a+1],i=u[Gt]||null;if(typeof n=="function")i||rd(l);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Gt]||null)c=i.formAction;else if(tf(u)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),rd(l)}}}function od(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function lf(t){this._internalRoot=t}Bn.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var l=e.current,a=ne();ld(l,a,t,e,null,null)},Bn.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ld(t.current,2,null,t,null,null),hn(),e[Gl]=null}};function Bn(t){this._internalRoot=t}Bn.prototype.unstable_scheduleHydration=function(t){if(t){var e=bf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<pl.length&&e!==0&&e<pl[l].priority;l++);pl.splice(l,0,t),l===0&&fd(t)}};var dd=ot.version;if(dd!=="19.2.4")throw Error(y(527,dd,"19.2.4"));T.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=D(e),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var Vv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qn.isDisabled&&Qn.supportsFiber)try{za=Qn.inject(Vv),$t=Qn}catch{}}return gu.createRoot=function(t,e){if(!_(t))throw Error(y(299));var l=!1,a="",u=pr,n=gr,i=br;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=td(t,1,!1,null,null,l,a,null,u,n,i,od),t[Gl]=e.current,Bc(t),new lf(e)},gu.hydrateRoot=function(t,e,l){if(!_(t))throw Error(y(299));var a=!1,u="",n=pr,i=gr,c=br,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=td(t,1,!0,e,l??null,a,u,f,n,i,c,od),e.context=ed(null),l=e.current,a=ne(),a=Kn(a),u=al(a),u.callback=null,ul(l,u,a),l=a,e.current.lanes=l,Oa(e,l),Me(e),t[Gl]=e.current,Bc(t),new Bn(e)},gu.version="19.2.4",gu}var Dd;function ey(){if(Dd)return nf.exports;Dd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(ot){console.error(ot)}}return z(),nf.exports=ty(),nf.exports}var ly=ey();function ay(){const[z,ot]=Td.useState(null),k=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
🔹 What is JDBC?

JDBC (Java Database Connectivity) is an API that allows Java programs to connect and interact with 
databases.


👉 Using JDBC, a Java application can:

Connect to a database
Insert data
Update data
Delete data
Retrieve data

📌 In short:
JDBC = Bridge between Java program and Database


🔹 Definition (Exam Ready)

JDBC is a Java API that enables Java applications to communicate with databases using SQL 
statements.

🔹 Why JDBC is needed? (Application of JDBC)

JDBC is used when we want to:
Store data permanently
Fetch records from database
Perform CRUD operations (Create, Read, Update, Delete)


📌 Applications of JDBC:

Banking systems
Student management system
Online shopping websites
Railway / Flight reservation system
Employee management system


🔹 JDBC Architecture (Simple Explanation)

JDBC Architecture explains how Java application connects to database using JDBC components.

Components of JDBC Architecture:

1. Java Application
2. JDBC API
3. DriverManager
4. JDBC Driver
5. Database


🔹 JDBC Architecture Diagram (ASCII)

+--------------------+
|  Java Application  |
|  (Your Java Code)  |
+--------------------+
          |
          | JDBC API
          v
+--------------------+
|   DriverManager    |
| (Manages Drivers)  |
+--------------------+
          |
          | JDBC Driver
          v
+--------------------+
|   JDBC Driver      |
| (DB Specific Code) |
+--------------------+
          |
          | SQL Queries
          v
+--------------------+
|     Database       |
| (MySQL / Oracle)   |
+--------------------+



🔹 Explanation of Each Component

1️⃣ Java Application

This is the Java program written by the programmer
It sends SQL queries using JDBC

📌 Example:

SELECT * FROM student;


2️⃣ JDBC API

Provides classes and interfaces
Used to connect and execute SQL queries

📌 Example packages:

java.sql
javax.sql


3️⃣ DriverManager

Acts as a manager
Loads the JDBC driver
Establishes connection between Java program and database

📌 Important method:

DriverManager.getConnection()


4️⃣ JDBC Driver

Converts Java requests into database-specific language
Different databases have different drivers

📌 Examples:

MySQL → mysql-connector
Oracle → oracle.jdbc.driver


5️⃣ Database (DB)

Stores data permanently
Executes SQL queries
Returns result to Java application

📌 Examples:

MySQL
Oracle
PostgreSQL


🔹 Flow of JDBC Working (Easy Steps)

1️⃣ Java program sends SQL query
2️⃣ JDBC API receives the query
3️⃣ DriverManager selects the correct driver
4️⃣ JDBC Driver communicates with database
5️⃣ Database sends result back
6️⃣ Java application receives output


🔹 One-Line Summary (For Revision)

JDBC allows Java applications to connect, send SQL commands, and retrieve data from databases 
using JDBC drivers.
      
      `},{id:2,question:"2. Explain JDBC Components. DriverManager, Driver, Connection, Statement, ResultSet, SQLException",answer:"👉 Direct theory question",codeExample:`
  ⭐ JDBC Components

JDBC components are the main building blocks used to connect Java programs with databases.


1️⃣ DriverManager

DriverManager is a class that manages JDBC drivers.

👉 It:

Loads JDBC driver
Creates connection between Java program and database

Key Points:

Part of java.sql package
Uses getConnection() method

Example:

Connection con = DriverManager.getConnection(url, user, password);


📌 In simple words:
DriverManager is a middleman between Java application and database driver.



2️⃣ Driver

Driver is an interface that handles communication with the database.

👉 It:

Converts Java commands into database-specific commands
Different databases use different drivers

Examples:

MySQL Driver
Oracle Driver

📌 In simple words:
Driver understands database language.



3️⃣ Connection

Connection is an interface that represents a connection between Java program and database.

👉 It:

Allows Java program to send SQL queries
Is created using DriverManager

Example:
Connection con = DriverManager.getConnection(...);


📌 In simple words:
Connection is a link between Java and database.



4️⃣ Statement

Statement is an interface used to execute SQL queries.

👉 It:

Sends SQL commands to database
Used for SELECT, INSERT, UPDATE, DELETE

Types:

Statement
PreparedStatement
CallableStatement

Example:
Statement st = con.createStatement();
st.executeQuery("SELECT * FROM student");


📌 In simple words:
Statement sends SQL instructions to database.



5️⃣ ResultSet

ResultSet is an interface that stores data returned from database.

👉 It:

Holds records from SELECT query
Moves row by row

Example:
ResultSet rs = st.executeQuery("SELECT * FROM student");


📌 In simple words:
ResultSet stores the output data.



6️⃣ SQLException

SQLException is a class used to handle database errors.

👉 It occurs when:

Wrong SQL syntax
Connection failure
Database not found

Example:

catch(SQLException e) {
    System.out.println(e);
}


📌 In simple words:
SQLException handles database-related errors.


⭐ JDBC Components Summary Table

| Component     | Purpose                              |
| ------------- | ------------------------------------ |
| DriverManager | Manages drivers & creates connection |
| Driver        | Communicates with database           |
| Connection    | Connects Java to DB                  |
| Statement     | Executes SQL queries                 |
| ResultSet     | Stores query result                  |
| SQLException  | Handles DB errors                    |


⭐ Easy Memory Trick 🧠

D D C S R E

➡️ DriverManager → Driver → Connection → Statement → ResultSet → Exception
      
      `},{id:3,question:"3. Explain Types of JDBC Drivers with advantages & disadvantages. JDBC-ODBC Bridge, Native API Driver, Network Protocol Driver, Thin Driver ⭐⭐",answer:"👉 Exam favorite",codeExample:`
⭐ Types of JDBC Drivers

JDBC drivers are used to connect Java applications with databases.
There are four types of JDBC drivers:

1️⃣ JDBC-ODBC Bridge Driver (Type 1)

This driver uses ODBC (Open Database Connectivity) to connect Java application with database.

Working:

Java Program → JDBC → ODBC → Database

Advantages:

✔ Easy to use
✔ Useful for learning JDBC

Disadvantages:

❌ Slow performance
❌ Needs ODBC installed
❌ Not suitable for web applications
❌ Not used in real projects

📌 Note:
This driver is deprecated and not used now.



2️⃣ Native API Driver (Type 2)

This driver uses database’s native libraries.

Working:

Java Program → JDBC → Native API → Database

Advantages:

✔ Better performance than Type 1
✔ Direct communication with database

Disadvantages:

❌ Platform dependent
❌ Requires native libraries on client machine

📌 Example:
Oracle OCI driver



3️⃣ Network Protocol Driver (Type 3)

This driver uses a middleware server to connect Java application and database.

Working:

Java Program → JDBC → Middleware → Database

Advantages:

✔ No database driver needed on client
✔ Can connect to multiple databases

Disadvantages:

❌ Slower due to network
❌ Middleware setup is costly



4️⃣ Thin Driver (Type 4) ⭐⭐

This driver is written completely in Java and communicates directly with the database.

Working:

Java Program → JDBC → Database

Advantages:

✔ Platform independent
✔ High performance
✔ No extra software required
✔ Most widely used driver

Disadvantages:

❌ Database-specific driver required

📌 Example:
MySQL Connector/J


⭐ Comparison Table (Very Important for Exam)

| Type   | Driver Name      | Performance | Platform Dependent | Usage         |
| ------ | ---------------- | ----------- | ------------------ | ------------- |
| Type 1 | JDBC-ODBC        | Low         | Yes                | ❌ Not used  |
| Type 2 | Native API       | Medium      | Yes                | Limited       |
| Type 3 | Network Protocol | Medium      | No                 | Rare          |
| Type 4 | Thin Driver      | High        | No                 | ⭐ Most Used |


⭐ Easy Memory Trick 🧠

1 → ODBC
2 → Native
3 → Network
4 → Thin (Best)


⭐ One-Line Exam Summary

Thin Driver (Type 4) is the most efficient and commonly used JDBC driver because it is platform 
independent and provides high performance.
      
      `},{id:4,question:"4. Explain Steps to establish JDBC connection. 👉 With method names (Class.forName, getConnection, createStatement)",answer:"",codeExample:`
⭐ Steps to Establish JDBC Connection

To connect a Java application with a database using JDBC, we follow 5 main steps.



1️⃣ Load and Register the Driver

👉 Method: Class.forName()

This step loads the JDBC driver class into memory.

Why needed?

  So Java knows which database driver to use

Method used:
Class.forName("com.mysql.cj.jdbc.Driver");


📌 In simple words:
This step tells Java: “Use MySQL driver”.



2️⃣ Establish Connection

👉 Method: DriverManager.getConnection()

This step creates a connection between Java program and database.

Method used:
Connection con = DriverManager.getConnection(url, username, password);


📌 In simple words:
This step connects Java to database using URL, username, and password.



3️⃣ Create Statement

👉 Method: createStatement()

This step creates a Statement object to send SQL queries to the database.

Method used:
Statement st = con.createStatement();


📌 In simple words:
Statement is used to execute SQL commands.



4️⃣ Execute SQL Query

👉 Methods:

executeQuery() → for SELECT
executeUpdate() → for INSERT, UPDATE, DELETE

Example:
ResultSet rs = st.executeQuery("SELECT * FROM student");


📌 In simple words:
This step runs SQL query on database.



5️⃣ Close the Connection

👉 Method: close()

This step closes all opened resources.

Example:
con.close();


📌 In simple words:
This step releases database resources.


⭐ JDBC Connection Steps Flow (Easy Recall)

Load Driver
     ↓
Create Connection
     ↓
Create Statement
     ↓
Execute Query
     ↓
Close Connection



⭐ Methods Summary Table (Exam-Friendly)

| Step             | Method Name         | Purpose               |
| ---------------- | ------------------- | --------------------- |
| Load Driver      | Class.forName()     | Loads JDBC driver     |
| Connect DB       | getConnection()     | Creates DB connection |
| Create Statement | createStatement()   | Sends SQL             |
| Execute Query    | executeQuery()      | Runs SELECT           |
| Close            | close()             | Free resources        |


⭐ One-line Exam Answer (Very Useful)

JDBC connection is established by loading the driver, creating a connection using getConnection(), 
creating a statement using createStatement(), executing SQL queries, and finally closing the 
connection.




✅ Full JDBC Program (Using Thin Driver – MySQL)

// Step 1: Import required packages
import java.sql.*;

class JDBCExample {
    public static void main(String[] args) {

        try {
            // Step 2: Load and Register JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Driver class loaded into memory

            // Step 3: Establish Connection
            String url = "jdbc:mysql://localhost:3306/college";
            String user = "root";
            String password = "root";

            Connection con = DriverManager.getConnection(url, user, password);
            // Connection created between Java and Database

            // Step 4: Create Statement
            Statement st = con.createStatement();
            // Statement object created to execute SQL query

            // Step 5: Execute SQL Query
            ResultSet rs = st.executeQuery("SELECT * FROM student");

            // Step 6: Process ResultSet
            while (rs.next()) {
                System.out.println(
                    rs.getInt(1) + " " +
                    rs.getString(2) + " " +
                    rs.getInt(3)
                );
            }

            // Step 7: Close Connections
            rs.close();
            st.close();
            con.close();

        } catch (ClassNotFoundException e) {
            System.out.println("Driver not found");
        } catch (SQLException e) {
            System.out.println("Database error");
        }
    }
}



🔁 JDBC Steps Mapping (Very Important for Exam)

Class.forName()        → Load Driver
getConnection()        → Create Connection
createStatement()     → Create Statement
executeQuery()        → Execute SQL
ResultSet              → Get Output
close()               → Close Resources


📝 Viva / Exam Tip

If examiner asks “Which driver is used?”
👉 Answer: Type 4 – Thin Driver
      `},{id:5,question:"5. Differentiate between: Statement vs PreparedStatement vs CallableStatement",answer:"👉 High-scoring + short writing",codeExample:`
  ⭐ Statement vs PreparedStatement vs CallableStatement

These are JDBC interfaces used to execute SQL queries.


1️⃣ Statement

Statement is used to execute simple SQL queries without parameters.

Features:

SQL query written at runtime
No parameters
Slower execution
Not secure (SQL Injection possible)

Example:

Statement st = con.createStatement();
st.executeQuery("SELECT * FROM student");



2️⃣ PreparedStatement

PreparedStatement is used to execute pre-compiled SQL queries with parameters.

Features:

SQL query written once
Supports parameters (?)
Faster than Statement
More secure

Example:

PreparedStatement ps = con.prepareStatement(
    "SELECT * FROM student WHERE id=?"
);
ps.setInt(1, 101);
ResultSet rs = ps.executeQuery();



3️⃣ CallableStatement

CallableStatement is used to execute stored procedures in the database.

Features:

Calls stored procedures
Supports IN, OUT parameters
Used for complex operations
Faster for repeated tasks

Example:

CallableStatement cs = con.prepareCall("{call getStudent(?)}");
cs.setInt(1, 101);
ResultSet rs = cs.executeQuery();


⭐ Difference Table (Very Important ⭐⭐⭐)

| Feature       | Statement      | PreparedStatement | CallableStatement |
| ------------- | -------------- | ----------------- | ----------------- |
| SQL Type      | Simple SQL     | Pre-compiled SQL  | Stored Procedure  |
| Parameters    | ❌ No          | ✅ Yes (?)       | ✅ Yes (IN/OUT)   |
| Performance   | Slow           | Faster            | Fastest           |
| Security      | Low            | High              | High              |
| SQL Injection | Possible       | Not possible      | Not possible      |
| Use Case      | Simple queries | Repeated queries  | Complex DB logic  |
| Compilation   | Every time     | Once              | Once              |


⭐ Difference: Statement vs PreparedStatement vs CallableStatement

| Statement                   | PreparedStatement                  | CallableStatement              |
| --------------------------- | ---------------------------------- | ------------------------------ |
| Used for simple SQL queries | Used for parameterized SQL queries | Used to call stored procedures |
| Parameters not allowed      | Parameters allowed using ?       | IN / OUT parameters allowed    |
| Query compiled every time   | Query compiled once                | Procedure compiled once        |
| Slower performance          | Faster than Statement              | Fastest                        |
| Less secure                 | More secure                        | More secure                    |
| SQL Injection possible      | SQL Injection not possible         | SQL Injection not possible     |



⭐ Easy Memory Trick 🧠

Statement → Simple
PreparedStatement → Secure + Fast
CallableStatement → Stored Procedure

⭐ One-line Exam Answer

Statement is used for simple queries, PreparedStatement is used for parameterized queries with better 
performance and security, and CallableStatement is used to execute stored procedures.
      


----------------------------------------------------------------------------------------------------


⭐ Statement vs PreparedStatement vs CallableStatement

✅ Full Examples


1️⃣ Statement – Full Example

👉 Used for simple SQL queries (no parameters)

import java.sql.*;

class StatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create Statement
            Statement st = con.createStatement();

            // Execute SQL Query
            ResultSet rs = st.executeQuery("SELECT * FROM student");

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            st.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Simple SELECT queries
📌 Problem: Not secure, slow for repeated queries



2️⃣ PreparedStatement – Full Example ⭐⭐

👉 Used for parameterized queries (recommended)

import java.sql.*;

class PreparedStatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create PreparedStatement
            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM student WHERE id = ?"
            );

            // Set parameter value
            ps.setInt(1, 101);

            // Execute Query
            ResultSet rs = ps.executeQuery();

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            ps.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Secure, fast, reusable queries
📌 Best choice for real projects




3️⃣ CallableStatement – Full Example ⭐⭐⭐

👉 Used to call stored procedures

🔹 Stored Procedure (MySQL)

CREATE PROCEDURE getStudent(IN sid INT)
BEGIN
    SELECT * FROM student WHERE id = sid;
END;


🔹 Java Code

import java.sql.*;

class CallableStatementExample {
    public static void main(String[] args) {

        try {
            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/college",
                "root",
                "root"
            );

            // Create CallableStatement
            CallableStatement cs = con.prepareCall(
                "{call getStudent(?)}"
            );

            // Set input parameter
            cs.setInt(1, 101);

            // Execute
            ResultSet rs = cs.executeQuery();

            // Process Result
            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            // Close resources
            rs.close();
            cs.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


📌 Use: Complex database logic, business rules
      `},{id:6,question:"6. Short question.",answer:"",codeExample:`
JDBC stands for → Java Database Connectivity
Thin driver → Best performance
PreparedStatement → Precompiled & secure
CallableStatement → Stored procedures
ResultSetMetaData → Data about data
ACID → Atomicity, Consistency, Isolation, Durability
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1111,question:"how to download jar folder",answer:"",codeExample:`
🔹 Step 1: Open browser

Go to Google and search:

    MySQL Connector J download

Open the official MySQL site.



🔹 Step 2: Download

1. Click MySQL Connector/J
2. Choose Platform Independent
3. Download ZIP file
4. Login not required → click No thanks, just start my download



🔹 Step 3: Extract ZIP file

After download:
    Right click → Extract All
    You will see a folder like:

mysql-connector-j-8.0.33

Open it.




✅ SIMPLE ANSWER (BEST PATH FOR YOU)

👉 Extract the ZIP file to this folder:

C:-xampp-htdocs-java-


This is the same folder where your LoginApp.java file is.


🔹 Step-by-Step (Very clear)

1️⃣ You downloaded the ZIP file

Example file name:

mysql-connector-j-8.0.33.zip


It is probably in:

    Downloads



2️⃣ Right-click the ZIP file
Click Extract All



3️⃣ When it asks “Extract to where?”

➡️ Click Browse
➡️ Choose this path:

    C:-xampp-htdocs-java-

➡️ Click Extract



4️⃣ After extracting, open the folder

You will see a folder like:

    mysql-connector-j-8.0.33


Open it and COPY this file 👇

    mysql-connector-j-8.0.33.jar



5️⃣ Paste the JAR here (IMPORTANT)

Paste it directly inside:

    C:-xampp-htdocs-java-


Final folder should look like:

C:xampp-htdocs-java-
│── LoginApp.java
│── LoginApp.class
│── mysql-connector-j-8.0.33.jar


✅ Now run commands (it WILL work)

javac LoginApp.java
java -cp .;mysql-connector-j-8.0.33.jar LoginApp
`},{id:1.1,question:"1. JDBC Connectivity Develop a java application using concept of JDBC for user login. User will enter username and password. Application will match for the same in database table. If match is found then display message 'Successful Login' and if not found then display message 'Invalid Username and password'.",answer:"",codeExample:`
command write for 

compile : javac filename.java  
run: java -cp ".;mysql-connector-j-9.6.0.jar" filename



🔹 Step 1: Database Table (MySQL Example)

Assume database name: java
Table name: users

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);



Insert sample data:

INSERT INTO users VALUES ('admin', '1234');
INSERT INTO users VALUES ('raj', 'raj123');




Java program LoginApp.java :

import java.sql.*;
import java.util.Scanner;

public class LoginApp {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Taking input from user
        System.out.print("Enter Username: ");
        String uname = sc.nextLine();

        System.out.print("Enter Password: ");
        String pass = sc.nextLine();

        try {
            // 1. Load JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            // 3. SQL Query
            String sql = "SELECT * FROM users WHERE username=? AND password=?";

            // 4. Prepare Statement
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, uname);   // set username
            ps.setString(2, pass);    // set password

            // 5. Execute Query
            ResultSet rs = ps.executeQuery();

            // 6. Check Result
            if (rs.next()) {
                System.out.println("Successful Login");
            } else {
                System.out.println("Invalid Username and password");
            }

            // 7. Close Connection
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}


Expected Output

Enter Username: raj
Enter Password: raj123
Successful Login


      `},{id:2.2,question:"2. JDBC Connectivity & CRUD Operations Develop a Menu driven java application for student information which will create the table with appropriate columns. Menu will contain the options like insert, update and delete. Based on the option, data will be inserted or updated or deleted from table based on student id (student_id will be primary key). Display appropriate message for each operation.",answer:"",codeExample:`
🔹 Database Details (MySQL)

Database name: java


Student Table

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    course VARCHAR(50),
    marks INT
);



🔹 Complete Menu-Driven JDBC Program (CRUD)

import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            // 1. Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Create Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""   // empty password (XAMPP)
            );

            while (true) {

                System.out.println("
----- STUDENT MENU -----");
                System.out.println("1. Insert Student");
                System.out.println("2. Update Student");
                System.out.println("3. Delete Student");
                System.out.println("4. Exit");
                System.out.print("Enter choice: ");

                int choice = sc.nextInt();

                switch (choice) {

                    // INSERT
                    case 1:
                        System.out.print("Enter Student ID: ");
                        int id = sc.nextInt();
                        sc.nextLine();

                        System.out.print("Enter Name: ");
                        String name = sc.nextLine();

                        System.out.print("Enter Course: ");
                        String course = sc.nextLine();

                        System.out.print("Enter Marks: ");
                        int marks = sc.nextInt();

                        String insertSql =
                                "INSERT INTO student VALUES (?, ?, ?, ?)";

                        PreparedStatement ps1 =
                                con.prepareStatement(insertSql);

                        ps1.setInt(1, id);
                        ps1.setString(2, name);
                        ps1.setString(3, course);
                        ps1.setInt(4, marks);

                        int i = ps1.executeUpdate();

                        if (i > 0)
                            System.out.println("Student Inserted Successfully");
                        else
                            System.out.println("Insert Failed");
                        break;

                    // UPDATE
                    case 2:
                        System.out.print("Enter Student ID to Update: ");
                        int uid = sc.nextInt();
                        sc.nextLine();

                        System.out.print("Enter New Course: ");
                        String newCourse = sc.nextLine();

                        String updateSql =
                                "UPDATE student SET course=? WHERE student_id=?";

                        PreparedStatement ps2 =
                                con.prepareStatement(updateSql);

                        ps2.setString(1, newCourse);
                        ps2.setInt(2, uid);

                        int u = ps2.executeUpdate();

                        if (u > 0)
                            System.out.println("Student Updated Successfully");
                        else
                            System.out.println("Student ID Not Found");
                        break;

                    // DELETE
                    case 3:
                        System.out.print("Enter Student ID to Delete: ");
                        int did = sc.nextInt();

                        String deleteSql =
                                "DELETE FROM student WHERE student_id=?";

                        PreparedStatement ps3 =
                                con.prepareStatement(deleteSql);

                        ps3.setInt(1, did);

                        int d = ps3.executeUpdate();

                        if (d > 0)
                            System.out.println("Student Deleted Successfully");
                        else
                            System.out.println("Student ID Not Found");
                        break;

                    case 4:
                        System.out.println("Thank You!");
                        con.close();
                        System.exit(0);

                    default:
                        System.out.println("Invalid Choice");
                }
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}




🔹 Sample Output
----- STUDENT MENU -----
1. Insert Student
2. Update Student
3. Delete Student
4. Exit
Enter choice: 1

Enter Student ID: 101
Enter Name: Raj
Enter Course: Java
Enter Marks: 85
Student Inserted Successfully




🧠 Viva Questions (Quick)

Q1. What is CRUD?
Create, Read, Update, Delete

Q2. Why PreparedStatement?
For security and performance

Q3. What is Primary Key?
Unique identifier for each record
      `},{id:3.3,question:"3. Data Driven GUI Application: Develop an application using GUI for user registration. In first form user will enter the data for registration (e.g. Name, Birthdate, Email_id, Phone_No). When user clicks on submit button, data will be inserted into database and user will be redirected to another form. In this form data will be selected from database and displayed in proper format.",answer:"",codeExample:`
step 1:

First you create one folder like DataDrivenGUIApplication.


step 2:
    
Next create file structure like this:

src
 ├ DisplayServlet.java
 ├ RegisterServlet.java
 │
WEB-INF
 ├ classes
 │   ├ RegisterServlet.class
 │   └ DisplayServlet.class
 │
 └ lib
 │   └ mysql-connector-j-9.6.0.jar
 │
 register.html


step 3:

Add your project in tomcate server like choos "Add Deployement" button
-> select your project folder file and click No button to Edit


step 4:

compile your .java file and create .class file and past in classes folder:

    javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" filename.java


step 5:

start tomcat server


step 6: 

see to output:

    http://localhost:8080/DataDrivenGUIApplication/register.html


---------------------------------------------------------------------------------------



Create Table inside the java database:

CREATE TABLE registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    birthdate DATE,
    email VARCHAR(50),
    phone VARCHAR(20)
);


----------------------------------

register.html

<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>

<h2>User Registration Form</h2>

<form action="RegisterServlet" method="post">
    Name: <input type="text" name="name"><br><br>
    Birthdate: <input type="date" name="birthdate"><br><br>
    Email: <input type="email" name="email"><br><br>
    Phone: <input type="text" name="phone"><br><br>

    <input type="submit" value="Register">
</form>

</body>
</html>

----------------------------------

RegisterServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.sql.*;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String birthdate = request.getParameter("birthdate");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            String sql = "INSERT INTO registration(name,birthdate,email,phone) VALUES(?,?,?,?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, name);
            ps.setString(2, birthdate);
            ps.setString(3, email);
            ps.setString(4, phone);

            int i = ps.executeUpdate();

            if(i > 0){
                response.sendRedirect("DisplayServlet");
            } else {
                out.println("Registration Failed");
            }

            con.close();

        } catch (Exception e) {
            out.println(e);
        }
    }
}

----------------------------------

DisplayServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DisplayServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<h2>Registered Users</h2>");
        out.println("<table border=1>");
        out.println("<tr>");
        out.println("<th>ID</th>");
        out.println("<th>Name</th>");
        out.println("<th>Birthdate</th>");
        out.println("<th>Email</th>");
        out.println("<th>Phone</th>");
        out.println("</tr>");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            Statement st = con.createStatement();

            ResultSet rs = st.executeQuery("SELECT * FROM registration");

            while (rs.next()) {
                out.println("<tr>");
                out.println("<td>" + rs.getInt(1) + "</td>");
                out.println("<td>" + rs.getString(2) + "</td>");
                out.println("<td>" + rs.getString(3) + "</td>");
                out.println("<td>" + rs.getString(4) + "</td>");
                out.println("<td>" + rs.getString(5) + "</td>");
                out.println("</tr>");
            }

            out.println("</table>");
            con.close();

        } catch (Exception e) {
            out.println(e);
        }
    }
}




      `},{id:4.4,question:"4. A Data Driven Servlet Application Develop a data driven servlet application for user authentication. Also display header values of request object and response object.",answer:"",codeExample:`
✅ ⭐ Full Project Folder Structure

Inside the C:\\tomcat9\\apache-tomcat-9.0.115\\webapps

DataDrivenAuthApp
│
├ login.html
│
├ WEB-INF
│   │
│   ├ classes
│   │   └ AuthServlet.class
│   │
│   └ lib
│       └ mysql-connector-j-9.6.0.jar
│
└ src   (optional - only for storing java files)
    └ AuthServlet.java



Compile your java code file:

    javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" AuthServlet.java

    



✅ STEP 1 — Database Table
⭐ Create Table

Run in MySQL:

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);

⭐ Insert Sample Data

INSERT INTO users VALUES('raj','raj123');


✅ STEP 2 — Login HTML (login.html)
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>User Login</h2>

<form action="AuthServlet" method="post">
    Username: <input type="text" name="uname"><br><br>
    Password: <input type="password" name="pass"><br><br>

    <input type="submit" value="Login">
</form>

</body>
</html>




✅ STEP 3 — ⭐ Main Servlet (AuthServlet.java)

👉 Authentication
👉 Header Display

⭐ AuthServlet.java (FULL WORKING)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.sql.*;
import java.util.*;

@WebServlet("/AuthServlet")
public class AuthServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String uname = request.getParameter("uname");
        String pass = request.getParameter("pass");

        try {

            // Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // DB Connection
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/java",
                "root",
                ""
            );

            // SQL Query
            String sql = "SELECT * FROM users WHERE username=? AND password=?";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, uname);   // username
            ps.setString(2, pass);    // password

            ResultSet rs = ps.executeQuery();

            if(rs.next()) {

                out.println("<h2>Login Successful</h2>");

                //  Request Headers
                out.println("<h3>Request Headers</h3>");

                Enumeration reqHeader = request.getHeaderNames();

                while(reqHeader.hasMoreElements()) {
                    String name = (String) reqHeader.nextElement();
                    out.println(name + " : " + request.getHeader(name) + "<br>");
                }

                //  Response Headers
                out.println("<h3>Response Headers</h3>");

                Collection<String> resHeader = response.getHeaderNames();

                for(String header : resHeader) {
                    out.println(header + " : " + response.getHeader(header) + "<br>");
                }

            } else {
                out.println("<h2>Invalid Username or Password</h2>");
            }

            con.close();

        } catch(Exception e) {
            out.println(e);
        }
    }
}





✅ Final Run

http://localhost:8080/ProjectName/login.html
      `},{id:5.5,question:"5. Servlet - Session Management Develop a servlet application for implementing student grading system. In this system on first page student will enter his data (name, id and department). By clicking on next button he will be redirected to another page. On the second page he will enter marks of all 6 subjects. By clicking on 'Generate result' he will be redirected to next page. On this page all information of student will be displayed along with the result (pass or fail) in appropriate color. Also display the name of student on each page he visits. (Use session management)",answer:"",codeExample:`
create this folder inside "tomcat/webapps/"


✅ Folder Structure

StudentGradingApp 
├ marks.html
├ student.html
│
├ WEB-INF
│   ├ classes
│   │   ├ StudentServlet.class
│   │   ├ MarksServlet.class
│   │   └ ResultServlet.class
│   │
│   └ lib
│
└ src
    ├ StudentServlet.java
    ├ MarksServlet.java
    └ ResultServlet.java


✅ Compile Command

javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" filename.java


Run project to used this url:

http://localhost:8080/foldername/filename.html


student.html

<!DOCTYPE html>
<html>
<head>
    <title>Student Details</title>
</head>
<body>

<h2>Enter Student Details</h2>

<form action="StudentServlet" method="post">
    Name: <input type="text" name="name"><br><br>
    ID: <input type="text" name="id"><br><br>
    Department: <input type="text" name="dept"><br><br>

    <input type="submit" value="Next">
</form>

</body>
</html>
      


marks.html

<!DOCTYPE html>
<html>
<head>
    <title>Enter Marks</title>
</head>
<body>

<h2>Enter Marks (6 Subjects)</h2>

<form action="MarksServlet" method="post">
    Subject1: <input type="number" name="m1"><br><br>
    Subject2: <input type="number" name="m2"><br><br>
    Subject3: <input type="number" name="m3"><br><br>
    Subject4: <input type="number" name="m4"><br><br>
    Subject5: <input type="number" name="m5"><br><br>
    Subject6: <input type="number" name="m6"><br><br>

    <input type="submit" value="Generate Result">
</form>

</body>
</html>



StudentServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/StudentServlet")
public class StudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        HttpSession session = request.getSession();

        session.setAttribute("name", request.getParameter("name"));
        session.setAttribute("id", request.getParameter("id"));
        session.setAttribute("dept", request.getParameter("dept"));

        response.sendRedirect("marks.html");
    }
}



MarksServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/MarksServlet")
public class MarksServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        HttpSession session = request.getSession();

        session.setAttribute("m1", request.getParameter("m1"));
        session.setAttribute("m2", request.getParameter("m2"));
        session.setAttribute("m3", request.getParameter("m3"));
        session.setAttribute("m4", request.getParameter("m4"));
        session.setAttribute("m5", request.getParameter("m5"));
        session.setAttribute("m6", request.getParameter("m6"));

        response.sendRedirect("ResultServlet");
    }
}



ResultServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/ResultServlet")
public class ResultServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession();

        String name = (String) session.getAttribute("name");
        String id = (String) session.getAttribute("id");
        String dept = (String) session.getAttribute("dept");

        int m1 = Integer.parseInt((String)session.getAttribute("m1"));
        int m2 = Integer.parseInt((String)session.getAttribute("m2"));
        int m3 = Integer.parseInt((String)session.getAttribute("m3"));
        int m4 = Integer.parseInt((String)session.getAttribute("m4"));
        int m5 = Integer.parseInt((String)session.getAttribute("m5"));
        int m6 = Integer.parseInt((String)session.getAttribute("m6"));

        int total = m1 + m2 + m3 + m4 + m5 + m6;
        double avg = total / 6.0;

        boolean pass = (m1>=35 && m2>=35 && m3>=35 && 
                        m4>=35 && m5>=35 && m6>=35);

        out.println("<html><body>");

        out.println("<h2>Welcome " + name + "</h2>");

        out.println("<h3>Student Information</h3>");
        out.println("ID: " + id + "<br>");
        out.println("Department: " + dept + "<br>");
        out.println("Total: " + total + "<br>");
        out.println("Average: " + avg + "<br>");

        if(pass) {
            out.println("<h2 style='color:green'>Result: PASS</h2>");
        } else {
            out.println("<h2 style='color:red'>Result: FAIL</h2>");
        }

        out.println("</body></html>");
    }
}
`},{id:6.6,question:"6. Servlet - Request Redirection  Develop an application for the following: User should be redirected to the URL entered in location text box.",answer:"",codeExample:`
📁 Folder Structure

RedirectApp
│
├ redirect.html
│
├ WEB-INF
│   ├ classes
│   │   └ RedirectServlet.class
│   │
│   └ lib
│
└ src
    └ RedirectServlet.java


compile the code

javac -cp "C:\\xampp\\tomcat\\lib\\servlet-api.jar" RedirectServlet.java



redirect.html

<!DOCTYPE html>
<html>
<head>
    <title>URL Redirect</title>
</head>
<body>

<h2>Enter URL to Redirect</h2>

<form action="RedirectServlet" method="post">
    Enter URL: <input type="text" name="url" size="40">
    <br><br>
    <input type="submit" value="Go">
</form>

</body>
</html>



RedirectServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/RedirectServlet")
public class RedirectServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {

        String url = request.getParameter("url");

        if(url != null && !url.isEmpty()) {

            // If user does not write http, add it
            if(!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }

            response.sendRedirect(url);
        }
    }
}
      `},{id:7.7,question:"7. JSP - User Authentication Develop a data driven JSP application for user authentication",answer:"",codeExample:`
✅ Folder Structure
JSPAuthApp
│
├ login.jsp
├ check.jsp
│
└ WEB-INF
    └ lib
        └ mysql-connector-j-9.6.0.jar



✅ STEP 1 — Database Table

Run in MySQL:

CREATE TABLE users (
    username VARCHAR(50),
    password VARCHAR(50)
);

Insert sample data:

INSERT INTO users VALUES('raj','raj123');



login.jsp

<%@ page language="java" %>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>User Login</h2>

<form action="check.jsp" method="post">
    Username: <input type="text" name="uname"><br><br>
    Password: <input type="password" name="pass"><br><br>

    <input type="submit" value="Login">
</form>

</body>
</html>



check.jsp

<%@ page import="java.sql.*" %>

<html>
<body>

<%
    String uname = request.getParameter("uname");
    String pass = request.getParameter("pass");

    try {

        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/java",
            "root",
            ""
        );

        String sql = "SELECT * FROM users WHERE username=? AND password=?";

        PreparedStatement ps = con.prepareStatement(sql);

        ps.setString(1, uname);
        ps.setString(2, pass);

        ResultSet rs = ps.executeQuery();

        if(rs.next()) {
%>
            <h2 style="color:green">Login Successful</h2>
<%
        } else {
%>
            <h2 style="color:red">Invalid Username or Password</h2>
<%
        }

        con.close();

    } catch(Exception e) {
        out.println(e);
    }
%>

</body>
</html>



✅ How to Run

Place folder inside:

C:\\xampp\\tomcat\\webapps
Then open:

http://localhost:8080/JSPAuthApp/login.jsp
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],y=_=>{ot(z===_?null:_)};return Ht.jsxs("div",{className:"app-container",children:[Ht.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),Ht.jsx("div",{className:"questions-container",children:k.map(_=>Ht.jsxs("div",{className:"question-item",children:[Ht.jsx("button",{className:`question-button ${z===_.id?"active":""}`,onClick:()=>y(_.id),children:_.question}),z===_.id&&Ht.jsxs("div",{className:"answer-container",children:[Ht.jsxs("div",{className:"answer",children:[Ht.jsx("h3",{children:"Answer:"}),Ht.jsx("p",{children:_.answer})]}),_.codeExample&&Ht.jsxs("div",{className:"code-example",children:[Ht.jsx("h3",{children:"Code Example:"}),Ht.jsx("pre",{children:Ht.jsx("code",{children:_.codeExample})})]})]})]},_.id))})]})}ly.createRoot(document.getElementById("root")).render(Ht.jsx(Td.StrictMode,{children:Ht.jsx(ay,{})}));
