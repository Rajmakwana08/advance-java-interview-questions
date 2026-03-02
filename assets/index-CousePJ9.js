(function(){const oe=document.createElement("link").relList;if(oe&&oe.supports&&oe.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))p(U);new MutationObserver(U=>{for(const W of U)if(W.type==="childList")for(const ve of W.addedNodes)ve.tagName==="LINK"&&ve.rel==="modulepreload"&&p(ve)}).observe(document,{childList:!0,subtree:!0});function k(U){const W={};return U.integrity&&(W.integrity=U.integrity),U.referrerPolicy&&(W.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?W.credentials="include":U.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function p(U){if(U.ep)return;U.ep=!0;const W=k(U);fetch(U.href,W)}})();var af={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Kv(){if(md)return gn;md=1;var z=Symbol.for("react.transitional.element"),oe=Symbol.for("react.fragment");function k(p,U,W){var ve=null;if(W!==void 0&&(ve=""+W),U.key!==void 0&&(ve=""+U.key),"key"in U){W={};for(var Ue in U)Ue!=="key"&&(W[Ue]=U[Ue])}else W=U;return U=W.ref,{$$typeof:z,type:p,key:ve,ref:U!==void 0?U:null,props:W}}return gn.Fragment=oe,gn.jsx=k,gn.jsxs=k,gn}var vd;function Wv(){return vd||(vd=1,af.exports=Kv()),af.exports}var Ne=Wv(),nf={exports:{}},j={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Fv(){if(pd)return j;pd=1;var z=Symbol.for("react.transitional.element"),oe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ve=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),se=Symbol.iterator;function We(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_e=Object.assign,Rt={};function Fe(r,E,A){this.props=r,this.context=E,this.refs=Rt,this.updater=A||Be}Fe.prototype.isReactComponent={},Fe.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Fe.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Wt(){}Wt.prototype=Fe.prototype;function qe(r,E,A){this.props=r,this.context=E,this.refs=Rt,this.updater=A||Be}var it=qe.prototype=new Wt;it.constructor=qe,_e(it,Fe.prototype),it.isPureReactComponent=!0;var Et=Array.isArray;function Le(){}var Z={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function Tt(r,E,A){var M=A.ref;return{$$typeof:z,type:r,key:E,ref:M!==void 0?M:null,props:A}}function Gl(r,E){return Tt(r.type,E,r.props)}function Dt(r){return typeof r=="object"&&r!==null&&r.$$typeof===z}function Ge(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(A){return E[A]})}var bl=/\/+/g;function Ot(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Ge(""+r.key):E.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Le,Le):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function h(r,E,A,M,N){var Q=typeof r;(Q==="undefined"||Q==="boolean")&&(r=null);var I=!1;if(r===null)I=!0;else switch(Q){case"bigint":case"string":case"number":I=!0;break;case"object":switch(r.$$typeof){case z:case oe:I=!0;break;case $:return I=r._init,h(I(r._payload),E,A,M,N)}}if(I)return N=N(r),I=M===""?"."+Ot(r,0):M,Et(N)?(A="",I!=null&&(A=I.replace(bl,"$&/")+"/"),h(N,E,A,"",function(Ca){return Ca})):N!=null&&(Dt(N)&&(N=Gl(N,A+(N.key==null||r&&r.key===N.key?"":(""+N.key).replace(bl,"$&/")+"/")+I)),E.push(N)),1;I=0;var He=M===""?".":M+":";if(Et(r))for(var pe=0;pe<r.length;pe++)M=r[pe],Q=He+Ot(M,pe),I+=h(M,E,A,Q,N);else if(pe=We(r),typeof pe=="function")for(r=pe.call(r),pe=0;!(M=r.next()).done;)M=M.value,Q=He+Ot(M,pe++),I+=h(M,E,A,Q,N);else if(Q==="object"){if(typeof r.then=="function")return h(yt(r),E,A,M,N);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function D(r,E,A){if(r==null)return r;var M=[],N=0;return h(r,M,"","",function(Q){return E.call(A,Q,N++)}),M}function H(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(A){(r._status===0||r._status===-1)&&(r._status=1,r._result=A)},function(A){(r._status===0||r._status===-1)&&(r._status=2,r._result=A)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ue={map:D,forEach:function(r,E,A){D(r,function(){E.apply(this,arguments)},A)},count:function(r){var E=0;return D(r,function(){E++}),E},toArray:function(r){return D(r,function(E){return E})||[]},only:function(r){if(!Dt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return j.Activity=_,j.Children=ue,j.Component=Fe,j.Fragment=k,j.Profiler=U,j.PureComponent=qe,j.StrictMode=p,j.Suspense=q,j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,j.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Z.H.useMemoCache(r)}},j.cache=function(r){return function(){return r.apply(null,arguments)}},j.cacheSignal=function(){return null},j.cloneElement=function(r,E,A){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=_e({},r.props),N=r.key;if(E!=null)for(Q in E.key!==void 0&&(N=""+E.key),E)!Qe.call(E,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&E.ref===void 0||(M[Q]=E[Q]);var Q=arguments.length-2;if(Q===1)M.children=A;else if(1<Q){for(var I=Array(Q),He=0;He<Q;He++)I[He]=arguments[He+2];M.children=I}return Tt(r.type,N,M)},j.createContext=function(r){return r={$$typeof:ve,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:W,_context:r},r},j.createElement=function(r,E,A){var M,N={},Q=null;if(E!=null)for(M in E.key!==void 0&&(Q=""+E.key),E)Qe.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(N[M]=E[M]);var I=arguments.length-2;if(I===1)N.children=A;else if(1<I){for(var He=Array(I),pe=0;pe<I;pe++)He[pe]=arguments[pe+2];N.children=He}if(r&&r.defaultProps)for(M in I=r.defaultProps,I)N[M]===void 0&&(N[M]=I[M]);return Tt(r,Q,N)},j.createRef=function(){return{current:null}},j.forwardRef=function(r){return{$$typeof:Ue,render:r}},j.isValidElement=Dt,j.lazy=function(r){return{$$typeof:$,_payload:{_status:-1,_result:r},_init:H}},j.memo=function(r,E){return{$$typeof:T,type:r,compare:E===void 0?null:E}},j.startTransition=function(r){var E=Z.T,A={};Z.T=A;try{var M=r(),N=Z.S;N!==null&&N(A,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(Le,te)}catch(Q){te(Q)}finally{E!==null&&A.types!==null&&(E.types=A.types),Z.T=E}},j.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},j.use=function(r){return Z.H.use(r)},j.useActionState=function(r,E,A){return Z.H.useActionState(r,E,A)},j.useCallback=function(r,E){return Z.H.useCallback(r,E)},j.useContext=function(r){return Z.H.useContext(r)},j.useDebugValue=function(){},j.useDeferredValue=function(r,E){return Z.H.useDeferredValue(r,E)},j.useEffect=function(r,E){return Z.H.useEffect(r,E)},j.useEffectEvent=function(r){return Z.H.useEffectEvent(r)},j.useId=function(){return Z.H.useId()},j.useImperativeHandle=function(r,E,A){return Z.H.useImperativeHandle(r,E,A)},j.useInsertionEffect=function(r,E){return Z.H.useInsertionEffect(r,E)},j.useLayoutEffect=function(r,E){return Z.H.useLayoutEffect(r,E)},j.useMemo=function(r,E){return Z.H.useMemo(r,E)},j.useOptimistic=function(r,E){return Z.H.useOptimistic(r,E)},j.useReducer=function(r,E,A){return Z.H.useReducer(r,E,A)},j.useRef=function(r){return Z.H.useRef(r)},j.useState=function(r){return Z.H.useState(r)},j.useSyncExternalStore=function(r,E,A){return Z.H.useSyncExternalStore(r,E,A)},j.useTransition=function(){return Z.H.useTransition()},j.version="19.2.4",j}var Sd;function rf(){return Sd||(Sd=1,nf.exports=Fv()),nf.exports}var Dd=rf(),uf={exports:{}},bn={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function kv(){return yd||(yd=1,(function(z){function oe(h,D){var H=h.length;h.push(D);e:for(;0<H;){var te=H-1>>>1,ue=h[te];if(0<U(ue,D))h[te]=D,h[H]=ue,H=te;else break e}}function k(h){return h.length===0?null:h[0]}function p(h){if(h.length===0)return null;var D=h[0],H=h.pop();if(H!==D){h[0]=H;e:for(var te=0,ue=h.length,r=ue>>>1;te<r;){var E=2*(te+1)-1,A=h[E],M=E+1,N=h[M];if(0>U(A,H))M<ue&&0>U(N,A)?(h[te]=N,h[M]=H,te=M):(h[te]=A,h[E]=H,te=E);else if(M<ue&&0>U(N,H))h[te]=N,h[M]=H,te=M;else break e}}return D}function U(h,D){var H=h.sortIndex-D.sortIndex;return H!==0?H:h.id-D.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;z.unstable_now=function(){return W.now()}}else{var ve=Date,Ue=ve.now();z.unstable_now=function(){return ve.now()-Ue}}var q=[],T=[],$=1,_=null,se=3,We=!1,Be=!1,_e=!1,Rt=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,qe=typeof setImmediate<"u"?setImmediate:null;function it(h){for(var D=k(T);D!==null;){if(D.callback===null)p(T);else if(D.startTime<=h)p(T),D.sortIndex=D.expirationTime,oe(q,D);else break;D=k(T)}}function Et(h){if(_e=!1,it(h),!Be)if(k(q)!==null)Be=!0,Le||(Le=!0,Ge());else{var D=k(T);D!==null&&yt(Et,D.startTime-h)}}var Le=!1,Z=-1,Qe=5,Tt=-1;function Gl(){return Rt?!0:!(z.unstable_now()-Tt<Qe)}function Dt(){if(Rt=!1,Le){var h=z.unstable_now();Tt=h;var D=!0;try{e:{Be=!1,_e&&(_e=!1,Wt(Z),Z=-1),We=!0;var H=se;try{t:{for(it(h),_=k(q);_!==null&&!(_.expirationTime>h&&Gl());){var te=_.callback;if(typeof te=="function"){_.callback=null,se=_.priorityLevel;var ue=te(_.expirationTime<=h);if(h=z.unstable_now(),typeof ue=="function"){_.callback=ue,it(h),D=!0;break t}_===k(q)&&p(q),it(h)}else p(q);_=k(q)}if(_!==null)D=!0;else{var r=k(T);r!==null&&yt(Et,r.startTime-h),D=!1}}break e}finally{_=null,se=H,We=!1}D=void 0}}finally{D?Ge():Le=!1}}}var Ge;if(typeof qe=="function")Ge=function(){qe(Dt)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,Ot=bl.port2;bl.port1.onmessage=Dt,Ge=function(){Ot.postMessage(null)}}else Ge=function(){Fe(Dt,0)};function yt(h,D){Z=Fe(function(){h(z.unstable_now())},D)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(h){h.callback=null},z.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<h?Math.floor(1e3/h):5},z.unstable_getCurrentPriorityLevel=function(){return se},z.unstable_next=function(h){switch(se){case 1:case 2:case 3:var D=3;break;default:D=se}var H=se;se=D;try{return h()}finally{se=H}},z.unstable_requestPaint=function(){Rt=!0},z.unstable_runWithPriority=function(h,D){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var H=se;se=h;try{return D()}finally{se=H}},z.unstable_scheduleCallback=function(h,D,H){var te=z.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,h){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=H+ue,h={id:$++,callback:D,priorityLevel:h,startTime:H,expirationTime:ue,sortIndex:-1},H>te?(h.sortIndex=H,oe(T,h),k(q)===null&&h===k(T)&&(_e?(Wt(Z),Z=-1):_e=!0,yt(Et,H-te))):(h.sortIndex=ue,oe(q,h),Be||We||(Be=!0,Le||(Le=!0,Ge()))),h},z.unstable_shouldYield=Gl,z.unstable_wrapCallback=function(h){var D=se;return function(){var H=se;se=D;try{return h.apply(this,arguments)}finally{se=H}}}})(ff)),ff}var hd;function $v(){return hd||(hd=1,cf.exports=kv()),cf.exports}var sf={exports:{}},xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Iv(){if(gd)return xe;gd=1;var z=rf();function oe(q){var T="https://react.dev/errors/"+q;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)T+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+q+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var p={d:{f:k,r:function(){throw Error(oe(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},U=Symbol.for("react.portal");function W(q,T,$){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:_==null?null:""+_,children:q,containerInfo:T,implementation:$}}var ve=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ue(q,T){if(q==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,xe.createPortal=function(q,T){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(oe(299));return W(q,T,null,$)},xe.flushSync=function(q){var T=ve.T,$=p.p;try{if(ve.T=null,p.p=2,q)return q()}finally{ve.T=T,p.p=$,p.d.f()}},xe.preconnect=function(q,T){typeof q=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,p.d.C(q,T))},xe.prefetchDNS=function(q){typeof q=="string"&&p.d.D(q)},xe.preinit=function(q,T){if(typeof q=="string"&&T&&typeof T.as=="string"){var $=T.as,_=Ue($,T.crossOrigin),se=typeof T.integrity=="string"?T.integrity:void 0,We=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;$==="style"?p.d.S(q,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:_,integrity:se,fetchPriority:We}):$==="script"&&p.d.X(q,{crossOrigin:_,integrity:se,fetchPriority:We,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},xe.preinitModule=function(q,T){if(typeof q=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var $=Ue(T.as,T.crossOrigin);p.d.M(q,{crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&p.d.M(q)},xe.preload=function(q,T){if(typeof q=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var $=T.as,_=Ue($,T.crossOrigin);p.d.L(q,$,{crossOrigin:_,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},xe.preloadModule=function(q,T){if(typeof q=="string")if(T){var $=Ue(T.as,T.crossOrigin);p.d.m(q,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:$,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else p.d.m(q)},xe.requestFormReset=function(q){p.d.r(q)},xe.unstable_batchedUpdates=function(q,T){return q(T)},xe.useFormState=function(q,T,$){return ve.H.useFormState(q,T,$)},xe.useFormStatus=function(){return ve.H.useHostTransitionStatus()},xe.version="19.2.4",xe}var bd;function Pv(){if(bd)return sf.exports;bd=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(oe){console.error(oe)}}return z(),sf.exports=Iv(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ep(){if(Ed)return bn;Ed=1;var z=$v(),oe=rf(),k=Pv();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function W(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ve(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(W(e)!==e)throw Error(p(188))}function T(e){var t=e.alternate;if(!t){if(t=W(e),t===null)throw Error(p(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return q(n),e;if(u===a)return q(n),t;u=u.sibling}throw Error(p(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==a)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?e:t}function $(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=$(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,se=Symbol.for("react.element"),We=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),qe=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Gl=Symbol.for("react.memo_cache_sentinel"),Dt=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Dt&&e[Dt]||e["@@iterator"],typeof e=="function"?e:null)}var bl=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Fe:return"Profiler";case Rt:return"StrictMode";case Et:return"Suspense";case Le:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case qe:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case it:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Ot(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return Ot(e(t))}catch{}}return null}var yt=Array.isArray,h=oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],ue=-1;function r(e){return{current:e}}function E(e){0>ue||(e.current=te[ue],te[ue]=null,ue--)}function A(e,t){ue++,te[ue]=e.current,e.current=t}var M=r(null),N=r(null),Q=r(null),I=r(null);function He(e,t){switch(A(Q,t),A(N,e),A(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?No(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=No(t),e=Bo(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(M),A(M,e)}function pe(){E(M),E(N),E(Q)}function Ca(e){e.memoizedState!==null&&A(I,e);var t=M.current,l=Bo(t,e.type);t!==l&&(A(N,e),A(M,l))}function En(e){N.current===e&&(E(M),E(N)),I.current===e&&(E(I),pn._currentValue=H)}var Qu,of;function El(e){if(Qu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",of=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+of}var Gu=!1;function Yu(e,t){if(!e||Gu)return"";Gu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var v=S}Reflect.construct(e,[],b)}else{try{b.call()}catch(S){v=S}e.call(b.prototype)}}else{try{throw Error()}catch(S){v=S}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&v&&typeof S.stack=="string")return[S.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===m.length)for(a=f.length-1,n=m.length-1;1<=a&&0<=n&&f[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==m[n]){var y=`
`+f[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=n);break}}}finally{Gu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Yu(e.type,!1);case 11:return Yu(e.type.render,!1);case 1:return Yu(e.type,!0);case 31:return El("Activity");default:return""}}function df(e){try{var t="",l=null;do t+=Ad(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ju=Object.prototype.hasOwnProperty,Xu=z.unstable_scheduleCallback,Zu=z.unstable_cancelCallback,Cd=z.unstable_shouldYield,zd=z.unstable_requestPaint,ke=z.unstable_now,Md=z.unstable_getCurrentPriorityLevel,mf=z.unstable_ImmediatePriority,vf=z.unstable_UserBlockingPriority,Tn=z.unstable_NormalPriority,Rd=z.unstable_LowPriority,pf=z.unstable_IdlePriority,Od=z.log,qd=z.unstable_setDisableYieldValue,za=null,$e=null;function Ft(e){if(typeof Od=="function"&&qd(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(za,e)}catch{}}var Ie=Math.clz32?Math.clz32:_d,xd=Math.log,Ud=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(xd(e)/Ud|0)|0}var Dn=256,An=262144,Cn=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Tl(a):(i&=c,i!==0?n=Tl(i):l||(l=c&~e,l!==0&&(n=Tl(l))))):(c=a&~u,c!==0?n=Tl(c):i!==0?n=Tl(i):l||(l=a&~e,l!==0&&(n=Tl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(){var e=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),e}function wu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ra(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jd(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,m=e.hiddenUpdates;for(l=i&~l;0<l;){var y=31-Ie(l),b=1<<y;c[y]=0,f[y]=-1;var v=m[y];if(v!==null)for(m[y]=null,y=0;y<v.length;y++){var S=v[y];S!==null&&(S.lane&=-536870913)}l&=~b}a!==0&&yf(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function yf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ie(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function hf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Ie(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function gf(e,t){var l=t&-t;return l=(l&42)!==0?1:Vu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Vu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ku(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bf(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:id(e.type))}function Ef(e,t){var l=D.p;try{return D.p=e,t()}finally{D.p=l}}var kt=Math.random().toString(36).slice(2),Ce="__reactFiber$"+kt,Ye="__reactProps$"+kt,Yl="__reactContainer$"+kt,Wu="__reactEvents$"+kt,Nd="__reactListeners$"+kt,Bd="__reactHandles$"+kt,Tf="__reactResources$"+kt,Oa="__reactMarker$"+kt;function Fu(e){delete e[Ce],delete e[Ye],delete e[Wu],delete e[Nd],delete e[Bd]}function Jl(e){var t=e[Ce];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Yl]||l[Ce]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Zo(e);e!==null;){if(l=e[Ce])return l;e=Zo(e)}return t}e=l,l=e.parentNode}return null}function Xl(e){if(e=e[Ce]||e[Yl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Zl(e){var t=e[Tf];return t||(t=e[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function De(e){e[Oa]=!0}var Df=new Set,Af={};function Dl(e,t){wl(e,t),wl(e+"Capture",t)}function wl(e,t){for(Af[e]=t,e=0;e<t.length;e++)Df.add(t[e])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cf={},zf={};function Qd(e){return Ju.call(zf,e)?!0:Ju.call(Cf,e)?!1:Ld.test(e)?zf[e]=!0:(Cf[e]=!0,!1)}function Mn(e,t,l){if(Qd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Rn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function qt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=Mf(e)?"checked":"value";e._valueTracker=Gd(e,t,""+e[t])}}function Rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Mf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function ft(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $u(e,t,l,a,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Iu(e,i,ct(t)):l!=null?Iu(e,i,ct(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Of(e,t,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ku(e);return}l=l!=null?""+ct(l):"",t=t!=null?""+ct(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ku(e)}function Iu(e,t,l){t==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Vl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ct(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function qf(e,t,l){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ct(l):""}function xf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(p(92));if(yt(a)){if(1<a.length)throw Error(p(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ct(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ku(e)}function Kl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Jd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function _f(e,t,l){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Uf(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&Uf(e,u,t[u])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(e){return Zd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xt(){}var ei=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Fl=null;function Hf(e){var t=Xl(e);if(t&&(e=t.stateNode)){var l=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if($u(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ye]||null;if(!n)throw Error(p(90));$u(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Rf(a)}break e;case"textarea":qf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Vl(e,!!l.multiple,t,!1)}}}var li=!1;function jf(e,t,l){if(li)return e(t,l);li=!0;try{var a=e(t);return a}finally{if(li=!1,(Wl!==null||Fl!==null)&&(yu(),Wl&&(t=Wl,e=Fl,Fl=Wl=null,Hf(t),e)))for(t=0;t<e.length;t++)Hf(e[t])}}function xa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ye]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(p(231,t,typeof l));return l}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Ut)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{ai=!1}var $t=null,ni=null,xn=null;function Nf(){if(xn)return xn;var e,t=ni,l=t.length,a,n="value"in $t?$t.value:$t.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return xn=n.slice(e,1<a?1-a:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function Bf(){return!1}function Je(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?_n:Bf,this.isPropagationStopped=Bf,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Je(Al),_a=_({},Al,{view:0,detail:0}),wd=Je(_a),ui,ii,Ha,jn=_({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(ui=e.screenX-Ha.screenX,ii=e.screenY-Ha.screenY):ii=ui=0,Ha=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Lf=Je(jn),Vd=_({},jn,{dataTransfer:0}),Kd=Je(Vd),Wd=_({},_a,{relatedTarget:0}),ci=Je(Wd),Fd=_({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Je(Fd),$d=_({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Id=Je($d),Pd=_({},Al,{data:0}),Qf=Je(Pd),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function fi(){return am}var nm=_({},_a,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Je(nm),im=_({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Je(im),cm=_({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fm=Je(cm),sm=_({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Je(sm),om=_({},jn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Je(om),mm=_({},Al,{newState:0,oldState:0}),vm=Je(mm),pm=[9,13,27,32],si=Ut&&"CompositionEvent"in window,ja=null;Ut&&"documentMode"in document&&(ja=document.documentMode);var Sm=Ut&&"TextEvent"in window&&!ja,Yf=Ut&&(!si||ja&&8<ja&&11>=ja),Jf=" ",Xf=!1;function Zf(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function ym(e,t){switch(e){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Xf=!0,Jf);case"textInput":return e=t.data,e===Jf&&Xf?null:e;default:return null}}function hm(e,t){if(kl)return e==="compositionend"||!si&&Zf(e,t)?(e=Nf(),xn=ni=$t=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Kf(e,t,l,a){Wl?Fl?Fl.push(a):Fl=[a]:Wl=a,t=Au(t,"onChange"),0<t.length&&(l=new Hn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Na=null,Ba=null;function bm(e){qo(e,0)}function Nn(e){var t=qa(e);if(Rf(t))return e}function Wf(e,t){if(e==="change")return t}var Ff=!1;if(Ut){var ri;if(Ut){var oi="oninput"in document;if(!oi){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),oi=typeof kf.oninput=="function"}ri=oi}else ri=!1;Ff=ri&&(!document.documentMode||9<document.documentMode)}function $f(){Na&&(Na.detachEvent("onpropertychange",If),Ba=Na=null)}function If(e){if(e.propertyName==="value"&&Nn(Ba)){var t=[];Kf(t,Ba,e,ti(e)),jf(bm,t)}}function Em(e,t,l){e==="focusin"?($f(),Na=t,Ba=l,Na.attachEvent("onpropertychange",If)):e==="focusout"&&$f()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nn(Ba)}function Dm(e,t){if(e==="click")return Nn(t)}function Am(e,t){if(e==="input"||e==="change")return Nn(t)}function Cm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Cm;function La(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ju.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function Pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function es(e,t){var l=Pf(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Pf(l)}}function ts(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ts(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ls(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=On(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=On(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zm=Ut&&"documentMode"in document&&11>=document.documentMode,$l=null,mi=null,Qa=null,vi=!1;function as(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vi||$l==null||$l!==On(a)||(a=$l,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&La(Qa,a)||(Qa=a,a=Au(mi,"onSelect"),0<a.length&&(t=new Hn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=$l)))}function Cl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Il={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},pi={},ns={};Ut&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete Il.animationend.animation,delete Il.animationiteration.animation,delete Il.animationstart.animation),"TransitionEvent"in window||delete Il.transitionend.transition);function zl(e){if(pi[e])return pi[e];if(!Il[e])return e;var t=Il[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ns)return pi[e]=t[l];return e}var us=zl("animationend"),is=zl("animationiteration"),cs=zl("animationstart"),Mm=zl("transitionrun"),Rm=zl("transitionstart"),Om=zl("transitioncancel"),fs=zl("transitionend"),ss=new Map,Si="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Si.push("scrollEnd");function ht(e,t){ss.set(e,t),Dl(t,[e])}var Bn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},st=[],Pl=0,yi=0;function Ln(){for(var e=Pl,t=yi=Pl=0;t<e;){var l=st[t];st[t++]=null;var a=st[t];st[t++]=null;var n=st[t];st[t++]=null;var u=st[t];if(st[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&rs(l,n,u)}}function Qn(e,t,l,a){st[Pl++]=e,st[Pl++]=t,st[Pl++]=l,st[Pl++]=a,yi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hi(e,t,l,a){return Qn(e,t,l,a),Gn(e)}function Ml(e,t){return Qn(e,null,null,t),Gn(e)}function rs(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-Ie(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Gn(e){if(50<fn)throw fn=0,Mc=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function qm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,l,a){return new qm(e,t,l,a)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,t){var l=e.alternate;return l===null?(l=et(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function os(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yn(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=jv(e,l,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,l,t,n),e.elementType=Tt,e.lanes=u,e;case _e:return Rl(l.children,n,u,t);case Rt:i=8,n|=24;break;case Fe:return e=et(12,l,t,n|2),e.elementType=Fe,e.lanes=u,e;case Et:return e=et(13,l,t,n),e.elementType=Et,e.lanes=u,e;case Le:return e=et(19,l,t,n),e.elementType=Le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:i=10;break e;case Wt:i=9;break e;case it:i=11;break e;case Z:i=14;break e;case Qe:i=16,a=null;break e}i=29,l=Error(p(130,e===null?"null":typeof e,"")),a=null}return t=et(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function Rl(e,t,l,a){return e=et(7,e,a,t),e.lanes=l,e}function bi(e,t,l){return e=et(6,e,null,t),e.lanes=l,e}function ds(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,l){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var l=ms.get(e);return l!==void 0?l:(t={value:e,source:t,stack:df(t)},ms.set(e,t),t)}return{value:e,source:t,stack:df(t)}}var ta=[],la=0,Jn=null,Ga=0,ot=[],dt=0,It=null,At=1,Ct="";function Ht(e,t){ta[la++]=Ga,ta[la++]=Jn,Jn=e,Ga=t}function vs(e,t,l){ot[dt++]=At,ot[dt++]=Ct,ot[dt++]=It,It=e;var a=At;e=Ct;var n=32-Ie(a)-1;a&=~(1<<n),l+=1;var u=32-Ie(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,At=1<<32-Ie(t)+n|l<<n|a,Ct=u+e}else At=1<<u|l<<n|a,Ct=e}function Ti(e){e.return!==null&&(Ht(e,1),vs(e,1,0))}function Di(e){for(;e===Jn;)Jn=ta[--la],ta[la]=null,Ga=ta[--la],ta[la]=null;for(;e===It;)It=ot[--dt],ot[dt]=null,Ct=ot[--dt],ot[dt]=null,At=ot[--dt],ot[dt]=null}function ps(e,t){ot[dt++]=At,ot[dt++]=Ct,ot[dt++]=It,At=t.id,Ct=t.overflow,It=e}var ze=null,ce=null,w=!1,Pt=null,mt=!1,Ai=Error(p(519));function el(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ya(rt(t,e)),Ai}function Ss(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ce]=e,t[Ye]=a,l){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(l=0;l<rn.length;l++)Y(rn[l],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),Of(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),xf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ho(t.textContent,l)?(a.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),a.onScroll!=null&&Y("scroll",t),a.onScrollEnd!=null&&Y("scrollend",t),a.onClick!=null&&(t.onclick=xt),t=!0):t=!1,t||el(e,!0)}function ys(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:ze=ze.return}}function aa(e){if(e!==ze)return!1;if(!w)return ys(e),w=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Jc(e.type,e.memoizedProps)),l=!l),l&&ce&&el(e),ys(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));ce=Xo(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));ce=Xo(e)}else t===27?(t=ce,vl(e.type)?(e=Kc,Kc=null,ce=e):ce=t):ce=ze?pt(e.stateNode.nextSibling):null;return!0}function Ol(){ce=ze=null,w=!1}function Ci(){var e=Pt;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),Pt=null),e}function Ya(e){Pt===null?Pt=[e]:Pt.push(e)}var zi=r(null),ql=null,jt=null;function tl(e,t,l){A(zi,t._currentValue),t._currentValue=l}function Nt(e){e._currentValue=zi.current,E(zi)}function Mi(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ri(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Mi(u.return,l,e),a||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Mi(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function na(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var c=n.type;Pe(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===I.current){if(i=n.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&Ri(t,e,l,a),t.flags|=262144}function Xn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xl(e){ql=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return hs(ql,e)}function Zn(e,t){return ql===null&&xl(e),hs(e,t)}function hs(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},jt===null){if(e===null)throw Error(p(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return l}var xm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Um=z.unstable_scheduleCallback,_m=z.unstable_NormalPriority,he={$$typeof:qe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new xm,data:new Map,refCount:0}}function Ja(e){e.refCount--,e.refCount===0&&Um(_m,function(){e.controller.abort()})}var Xa=null,qi=0,ua=0,ia=null;function Hm(e,t){if(Xa===null){var l=Xa=[];qi=0,ua=_c(),ia={status:"pending",value:void 0,then:function(a){l.push(a)}}}return qi++,t.then(gs,gs),t}function gs(){if(--qi===0&&Xa!==null){ia!==null&&(ia.status="fulfilled");var e=Xa;Xa=null,ua=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var bs=h.S;h.S=function(e,t){ao=ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hm(e,t),bs!==null&&bs(e,t)};var Ul=r(null);function xi(){var e=Ul.current;return e!==null?e:ie.pooledCache}function wn(e,t){t===null?A(Ul,Ul.current):A(Ul,t.pool)}function Es(){var e=xi();return e===null?null:{parent:he._currentValue,pool:e}}var ca=Error(p(460)),Ui=Error(p(474)),Vn=Error(p(542)),Kn={then:function(){}};function Ts(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ds(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(xt,xt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e;default:if(typeof t.status=="string")t.then(xt,xt);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e}throw Hl=t,ca}}function _l(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,ca):l}}var Hl=null;function As(){if(Hl===null)throw Error(p(459));var e=Hl;return Hl=null,e}function Cs(e){if(e===ca||e===Vn)throw Error(p(483))}var fa=null,Za=0;function Wn(e){var t=Za;return Za+=1,fa===null&&(fa=[]),Ds(fa,e,t)}function wa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fn(e,t){throw t.$$typeof===se?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zs(e){function t(o,s){if(e){var d=o.deletions;d===null?(o.deletions=[s],o.flags|=16):d.push(s)}}function l(o,s){if(!e)return null;for(;s!==null;)t(o,s),s=s.sibling;return null}function a(o){for(var s=new Map;o!==null;)o.key!==null?s.set(o.key,o):s.set(o.index,o),o=o.sibling;return s}function n(o,s){return o=_t(o,s),o.index=0,o.sibling=null,o}function u(o,s,d){return o.index=d,e?(d=o.alternate,d!==null?(d=d.index,d<s?(o.flags|=67108866,s):d):(o.flags|=67108866,s)):(o.flags|=1048576,s)}function i(o){return e&&o.alternate===null&&(o.flags|=67108866),o}function c(o,s,d,g){return s===null||s.tag!==6?(s=bi(d,o.mode,g),s.return=o,s):(s=n(s,d),s.return=o,s)}function f(o,s,d,g){var O=d.type;return O===_e?y(o,s,d.props.children,g,d.key):s!==null&&(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Qe&&_l(O)===s.type)?(s=n(s,d.props),wa(s,d),s.return=o,s):(s=Yn(d.type,d.key,d.props,null,o.mode,g),wa(s,d),s.return=o,s)}function m(o,s,d,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ei(d,o.mode,g),s.return=o,s):(s=n(s,d.children||[]),s.return=o,s)}function y(o,s,d,g,O){return s===null||s.tag!==7?(s=Rl(d,o.mode,g,O),s.return=o,s):(s=n(s,d),s.return=o,s)}function b(o,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,o.mode,d),s.return=o,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case We:return d=Yn(s.type,s.key,s.props,null,o.mode,d),wa(d,s),d.return=o,d;case Be:return s=Ei(s,o.mode,d),s.return=o,s;case Qe:return s=_l(s),b(o,s,d)}if(yt(s)||Ge(s))return s=Rl(s,o.mode,d,null),s.return=o,s;if(typeof s.then=="function")return b(o,Wn(s),d);if(s.$$typeof===qe)return b(o,Zn(o,s),d);Fn(o,s)}return null}function v(o,s,d,g){var O=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return O!==null?null:c(o,s,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case We:return d.key===O?f(o,s,d,g):null;case Be:return d.key===O?m(o,s,d,g):null;case Qe:return d=_l(d),v(o,s,d,g)}if(yt(d)||Ge(d))return O!==null?null:y(o,s,d,g,null);if(typeof d.then=="function")return v(o,s,Wn(d),g);if(d.$$typeof===qe)return v(o,s,Zn(o,d),g);Fn(o,d)}return null}function S(o,s,d,g,O){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return o=o.get(d)||null,c(s,o,""+g,O);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case We:return o=o.get(g.key===null?d:g.key)||null,f(s,o,g,O);case Be:return o=o.get(g.key===null?d:g.key)||null,m(s,o,g,O);case Qe:return g=_l(g),S(o,s,d,g,O)}if(yt(g)||Ge(g))return o=o.get(d)||null,y(s,o,g,O,null);if(typeof g.then=="function")return S(o,s,d,Wn(g),O);if(g.$$typeof===qe)return S(o,s,d,Zn(s,g),O);Fn(s,g)}return null}function C(o,s,d,g){for(var O=null,V=null,R=s,L=s=0,X=null;R!==null&&L<d.length;L++){R.index>L?(X=R,R=null):X=R.sibling;var K=v(o,R,d[L],g);if(K===null){R===null&&(R=X);break}e&&R&&K.alternate===null&&t(o,R),s=u(K,s,L),V===null?O=K:V.sibling=K,V=K,R=X}if(L===d.length)return l(o,R),w&&Ht(o,L),O;if(R===null){for(;L<d.length;L++)R=b(o,d[L],g),R!==null&&(s=u(R,s,L),V===null?O=R:V.sibling=R,V=R);return w&&Ht(o,L),O}for(R=a(R);L<d.length;L++)X=S(R,o,L,d[L],g),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?L:X.key),s=u(X,s,L),V===null?O=X:V.sibling=X,V=X);return e&&R.forEach(function(gl){return t(o,gl)}),w&&Ht(o,L),O}function x(o,s,d,g){if(d==null)throw Error(p(151));for(var O=null,V=null,R=s,L=s=0,X=null,K=d.next();R!==null&&!K.done;L++,K=d.next()){R.index>L?(X=R,R=null):X=R.sibling;var gl=v(o,R,K.value,g);if(gl===null){R===null&&(R=X);break}e&&R&&gl.alternate===null&&t(o,R),s=u(gl,s,L),V===null?O=gl:V.sibling=gl,V=gl,R=X}if(K.done)return l(o,R),w&&Ht(o,L),O;if(R===null){for(;!K.done;L++,K=d.next())K=b(o,K.value,g),K!==null&&(s=u(K,s,L),V===null?O=K:V.sibling=K,V=K);return w&&Ht(o,L),O}for(R=a(R);!K.done;L++,K=d.next())K=S(R,o,L,K.value,g),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?L:K.key),s=u(K,s,L),V===null?O=K:V.sibling=K,V=K);return e&&R.forEach(function(Vv){return t(o,Vv)}),w&&Ht(o,L),O}function ne(o,s,d,g){if(typeof d=="object"&&d!==null&&d.type===_e&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case We:e:{for(var O=d.key;s!==null;){if(s.key===O){if(O=d.type,O===_e){if(s.tag===7){l(o,s.sibling),g=n(s,d.props.children),g.return=o,o=g;break e}}else if(s.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Qe&&_l(O)===s.type){l(o,s.sibling),g=n(s,d.props),wa(g,d),g.return=o,o=g;break e}l(o,s);break}else t(o,s);s=s.sibling}d.type===_e?(g=Rl(d.props.children,o.mode,g,d.key),g.return=o,o=g):(g=Yn(d.type,d.key,d.props,null,o.mode,g),wa(g,d),g.return=o,o=g)}return i(o);case Be:e:{for(O=d.key;s!==null;){if(s.key===O)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){l(o,s.sibling),g=n(s,d.children||[]),g.return=o,o=g;break e}else{l(o,s);break}else t(o,s);s=s.sibling}g=Ei(d,o.mode,g),g.return=o,o=g}return i(o);case Qe:return d=_l(d),ne(o,s,d,g)}if(yt(d))return C(o,s,d,g);if(Ge(d)){if(O=Ge(d),typeof O!="function")throw Error(p(150));return d=O.call(d),x(o,s,d,g)}if(typeof d.then=="function")return ne(o,s,Wn(d),g);if(d.$$typeof===qe)return ne(o,s,Zn(o,d),g);Fn(o,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(l(o,s.sibling),g=n(s,d),g.return=o,o=g):(l(o,s),g=bi(d,o.mode,g),g.return=o,o=g),i(o)):l(o,s)}return function(o,s,d,g){try{Za=0;var O=ne(o,s,d,g);return fa=null,O}catch(R){if(R===ca||R===Vn)throw R;var V=et(29,R,null,o.mode);return V.lanes=g,V.return=o,V}finally{}}}var jl=zs(!0),Ms=zs(!1),ll=!1;function _i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(F&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Gn(e),rs(e,null,l),t}return Qn(e,a,t,l),Gn(e)}function Va(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hf(e,l)}}function ji(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Ni=!1;function Ka(){if(Ni){var e=ia;if(e!==null)throw e}}function Wa(e,t,l,a){Ni=!1;var n=e.updateQueue;ll=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?u=m:i.next=m,i=f;var y=e.alternate;y!==null&&(y=y.updateQueue,c=y.lastBaseUpdate,c!==i&&(c===null?y.firstBaseUpdate=m:c.next=m,y.lastBaseUpdate=f))}if(u!==null){var b=n.baseState;i=0,y=m=f=null,c=u;do{var v=c.lane&-536870913,S=v!==c.lane;if(S?(J&v)===v:(a&v)===v){v!==0&&v===ua&&(Ni=!0),y!==null&&(y=y.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var C=e,x=c;v=t;var ne=l;switch(x.tag){case 1:if(C=x.payload,typeof C=="function"){b=C.call(ne,b,v);break e}b=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,v=typeof C=="function"?C.call(ne,b,v):C,v==null)break e;b=_({},b,v);break e;case 2:ll=!0}}v=c.callback,v!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[v]:S.push(v))}else S={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},y===null?(m=y=S,f=b):y=y.next=S,i|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;S=c,c=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);y===null&&(f=b),n.baseState=f,n.firstBaseUpdate=m,n.lastBaseUpdate=y,u===null&&(n.shared.lanes=0),sl|=i,e.lanes=i,e.memoizedState=b}}function Rs(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function Os(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Rs(l[e],t)}var sa=r(null),kn=r(0);function qs(e,t){e=wt,A(kn,e),A(sa,t),wt=e|t.baseLanes}function Bi(){A(kn,wt),A(sa,sa.current)}function Li(){wt=kn.current,E(sa),E(kn)}var tt=r(null),vt=null;function ul(e){var t=e.alternate;A(Se,Se.current&1),A(tt,e),vt===null&&(t===null||sa.current!==null||t.memoizedState!==null)&&(vt=e)}function Qi(e){A(Se,Se.current),A(tt,e),vt===null&&(vt=e)}function xs(e){e.tag===22?(A(Se,Se.current),A(tt,e),vt===null&&(vt=e)):il()}function il(){A(Se,Se.current),A(tt,tt.current)}function lt(e){E(tt),vt===e&&(vt=null),E(Se)}var Se=r(0);function $n(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||wc(l)||Vc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,le=null,ge=null,In=!1,ra=!1,Nl=!1,Pn=0,Fa=0,oa=null,Nm=0;function de(){throw Error(p(321))}function Gi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Pe(e[l],t[l]))return!1;return!0}function Yi(e,t,l,a,n,u){return Bt=u,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?vr:lc,Nl=!1,u=l(a,n),Nl=!1,ra&&(u=_s(t,l,a,n)),Us(e),u}function Us(e){h.H=Ia;var t=le!==null&&le.next!==null;if(Bt=0,ge=le=B=null,In=!1,Fa=0,oa=null,t)throw Error(p(300));e===null||be||(e=e.dependencies,e!==null&&Xn(e)&&(be=!0))}function _s(e,t,l,a){B=e;var n=0;do{if(ra&&(oa=null),Fa=0,ra=!1,25<=n)throw Error(p(301));if(n+=1,ge=le=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}h.H=pr,u=t(l,a)}while(ra);return u}function Bm(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?ka(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(B.flags|=1024),t}function Ji(){var e=Pn!==0;return Pn=0,e}function Xi(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Zi(e){if(In){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}In=!1}Bt=0,ge=le=B=null,ra=!1,Fa=Pn=0,oa=null}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?B.memoizedState=ge=e:ge=ge.next=e,ge}function ye(){if(le===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ge===null?B.memoizedState:ge.next;if(t!==null)ge=t,le=e;else{if(e===null)throw B.alternate===null?Error(p(467)):Error(p(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ge===null?B.memoizedState=ge=e:ge=ge.next=e}return ge}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(e){var t=Fa;return Fa+=1,oa===null&&(oa=[]),e=Ds(oa,e,t),t=B,(ge===null?t.memoizedState:ge.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?vr:lc),e}function tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ka(e);if(e.$$typeof===qe)return Me(e)}throw Error(p(438,String(e)))}function wi(e){var t=null,l=B.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=B.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=eu(),B.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Gl;return t.index++,l}function Lt(e,t){return typeof t=="function"?t(e):t}function lu(e){var t=ye();return Vi(t,le,e)}function Vi(e,t,l){var a=e.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,f=null,m=t,y=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(J&b)===b:(Bt&b)===b){var v=m.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===ua&&(y=!0);else if((Bt&v)===v){m=m.next,v===ua&&(y=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=b,i=u):f=f.next=b,B.lanes|=v,sl|=v;b=m.action,Nl&&l(u,b),u=m.hasEagerState?m.eagerState:l(u,b)}else v={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=v,i=u):f=f.next=v,B.lanes|=b,sl|=b;m=m.next}while(m!==null&&m!==t);if(f===null?i=u:f.next=c,!Pe(u,e.memoizedState)&&(be=!0,y&&(l=ia,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ki(e){var t=ye(),l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);Pe(u,t.memoizedState)||(be=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function Hs(e,t,l){var a=B,n=ye(),u=w;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=t();var i=!Pe((le||n).memoizedState,l);if(i&&(n.memoizedState=l,be=!0),n=n.queue,ki(Bs.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Ns.bind(null,a,n,l,t),null),ie===null)throw Error(p(349));u||(Bt&127)!==0||js(a,t,l)}return l}function js(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=B.updateQueue,t===null?(t=eu(),B.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ns(e,t,l,a){t.value=l,t.getSnapshot=a,Ls(t)&&Qs(e)}function Bs(e,t,l){return l(function(){Ls(t)&&Qs(e)})}function Ls(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Pe(e,l)}catch{return!0}}function Qs(e){var t=Ml(e,2);t!==null&&Ke(t,e,2)}function Wi(e){var t=je();if(typeof e=="function"){var l=e;if(e=l(),Nl){Ft(!0);try{l()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Gs(e,t,l,a){return e.baseState=l,Vi(e,le,typeof a=="function"?a:Lt)}function Lm(e,t,l,a,n){if(uu(e))throw Error(p(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};h.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Ys(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Ys(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=h.T,i={};h.T=i;try{var c=l(n,a),f=h.S;f!==null&&f(i,c),Js(e,t,c)}catch(m){Fi(e,t,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),h.T=u}}else try{u=l(n,a),Js(e,t,u)}catch(m){Fi(e,t,m)}}function Js(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Xs(e,t,a)},function(a){return Fi(e,t,a)}):Xs(e,t,l)}function Xs(e,t,l){t.status="fulfilled",t.value=l,Zs(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Ys(e,l)))}function Fi(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Zs(t),t=t.next;while(t!==a)}e.action=null}function Zs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ws(e,t){return t}function Vs(e,t){if(w){var l=ie.formState;if(l!==null){e:{var a=B;if(w){if(ce){t:{for(var n=ce,u=mt;n.nodeType!==8;){if(!u){n=null;break t}if(n=pt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ce=pt(n.nextSibling),a=n.data==="F!";break e}}el(a)}a=!1}a&&(t=l[0])}}return l=je(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},l.queue=a,l=or.bind(null,B,a),a.dispatch=l,a=Wi(!1),u=tc.bind(null,B,!1,a.queue),a=je(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Lm.bind(null,B,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Ks(e){var t=ye();return Ws(t,le,e)}function Ws(e,t,l){if(t=Vi(e,t,ws)[0],e=lu(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ka(t)}catch(i){throw i===ca?Vn:i}else a=t;t=ye();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(B.flags|=2048,da(9,{destroy:void 0},Qm.bind(null,n,l),null)),[a,u,e]}function Qm(e,t){e.action=t}function Fs(e){var t=ye(),l=le;if(l!==null)return Ws(t,l,e);ye(),t=t.memoizedState,l=ye();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function da(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=B.updateQueue,t===null&&(t=eu(),B.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ks(){return ye().memoizedState}function au(e,t,l,a){var n=je();B.flags|=e,n.memoizedState=da(1|t,{destroy:void 0},l,a===void 0?null:a)}function nu(e,t,l,a){var n=ye();a=a===void 0?null:a;var u=n.memoizedState.inst;le!==null&&a!==null&&Gi(a,le.memoizedState.deps)?n.memoizedState=da(t,u,l,a):(B.flags|=e,n.memoizedState=da(1|t,u,l,a))}function $s(e,t){au(8390656,8,e,t)}function ki(e,t){nu(2048,8,e,t)}function Gm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=eu(),B.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Is(e){var t=ye().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((F&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function Ps(e,t){return nu(4,2,e,t)}function er(e,t){return nu(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lr(e,t,l){l=l!=null?l.concat([e]):null,nu(4,4,tr.bind(null,t,e),l)}function $i(){}function ar(e,t){var l=ye();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Gi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function nr(e,t){var l=ye();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Gi(t,a[1]))return a[0];if(a=e(),Nl){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a}function Ii(e,t,l){return l===void 0||(Bt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=uo(),B.lanes|=e,sl|=e,l)}function ur(e,t,l,a){return Pe(l,t)?l:sa.current!==null?(e=Ii(e,l,a),Pe(e,t)||(be=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(J&261930)===0?(be=!0,e.memoizedState=l):(e=uo(),B.lanes|=e,sl|=e,t)}function ir(e,t,l,a,n){var u=D.p;D.p=u!==0&&8>u?u:8;var i=h.T,c={};h.T=c,tc(e,!1,t,l);try{var f=n(),m=h.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=jm(f,a);$a(e,t,y,ut(e))}else $a(e,t,a,ut(e))}catch(b){$a(e,t,{then:function(){},status:"rejected",reason:b},ut())}finally{D.p=u,i!==null&&c.types!==null&&(i.types=c.types),h.T=i}}function Ym(){}function Pi(e,t,l,a){if(e.tag!==5)throw Error(p(476));var n=cr(e).queue;ir(e,n,t,H,l===null?Ym:function(){return fr(e),l(a)})}function cr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:H},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fr(e){var t=cr(e);t.next===null&&(t=e.alternate.memoizedState),$a(e,t.next.queue,{},ut())}function ec(){return Me(pn)}function sr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ut();e=al(l);var a=nl(t,e,l);a!==null&&(Ke(a,t,l),Va(a,t,l)),t={cache:Oi()},e.payload=t;return}t=t.return}}function Xm(e,t,l){var a=ut();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(e)?dr(t,l):(l=hi(e,t,l,a),l!==null&&(Ke(l,e,a),mr(l,t,a)))}function or(e,t,l){var a=ut();$a(e,t,l,a)}function $a(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(uu(e))dr(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,Pe(c,i))return Qn(e,t,n,0),ie===null&&Ln(),!1}catch{}finally{}if(l=hi(e,t,n,a),l!==null)return Ke(l,e,a),mr(l,t,a),!0}return!1}function tc(e,t,l,a){if(a={lane:2,revertLane:_c(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(t)throw Error(p(479))}else t=hi(e,l,a,2),t!==null&&Ke(t,e,2)}function uu(e){var t=e.alternate;return e===B||t!==null&&t===B}function dr(e,t){ra=In=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function mr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hf(e,l)}}var Ia={readContext:Me,use:tu,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Ia.useEffectEvent=de;var vr={readContext:Me,use:tu,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:$s,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,au(4194308,4,tr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return au(4194308,4,e,t)},useInsertionEffect:function(e,t){au(4,2,e,t)},useMemo:function(e,t){var l=je();t=t===void 0?null:t;var a=e();if(Nl){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=je();if(l!==void 0){var n=l(t);if(Nl){Ft(!0);try{l(t)}finally{Ft(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Xm.bind(null,B,e),[a.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:function(e){e=Wi(e);var t=e.queue,l=or.bind(null,B,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:$i,useDeferredValue:function(e,t){var l=je();return Ii(l,e,t)},useTransition:function(){var e=Wi(!1);return e=ir.bind(null,B,e.queue,!0,!1),je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=B,n=je();if(w){if(l===void 0)throw Error(p(407));l=l()}else{if(l=t(),ie===null)throw Error(p(349));(J&127)!==0||js(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,$s(Bs.bind(null,a,u,e),[e]),a.flags|=2048,da(9,{destroy:void 0},Ns.bind(null,a,u,l,t),null),l},useId:function(){var e=je(),t=ie.identifierPrefix;if(w){var l=Ct,a=At;l=(a&~(1<<32-Ie(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Pn++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Nm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Vs,useActionState:Vs,useOptimistic:function(e){var t=je();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=tc.bind(null,B,!0,l),l.dispatch=t,[e,t]},useMemoCache:wi,useCacheRefresh:function(){return je().memoizedState=Jm.bind(null,B)},useEffectEvent:function(e){var t=je(),l={impl:e};return t.memoizedState=l,function(){if((F&2)!==0)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},lc={readContext:Me,use:tu,useCallback:ar,useContext:Me,useEffect:ki,useImperativeHandle:lr,useInsertionEffect:Ps,useLayoutEffect:er,useMemo:nr,useReducer:lu,useRef:ks,useState:function(){return lu(Lt)},useDebugValue:$i,useDeferredValue:function(e,t){var l=ye();return ur(l,le.memoizedState,e,t)},useTransition:function(){var e=lu(Lt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:Hs,useId:sr,useHostTransitionStatus:ec,useFormState:Ks,useActionState:Ks,useOptimistic:function(e,t){var l=ye();return Gs(l,le,e,t)},useMemoCache:wi,useCacheRefresh:rr};lc.useEffectEvent=Is;var pr={readContext:Me,use:tu,useCallback:ar,useContext:Me,useEffect:ki,useImperativeHandle:lr,useInsertionEffect:Ps,useLayoutEffect:er,useMemo:nr,useReducer:Ki,useRef:ks,useState:function(){return Ki(Lt)},useDebugValue:$i,useDeferredValue:function(e,t){var l=ye();return le===null?Ii(l,e,t):ur(l,le.memoizedState,e,t)},useTransition:function(){var e=Ki(Lt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:Hs,useId:sr,useHostTransitionStatus:ec,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var l=ye();return le!==null?Gs(l,le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:wi,useCacheRefresh:rr};pr.useEffectEvent=Is;function ac(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:_({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var nc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ut(),n=al(a);n.payload=t,l!=null&&(n.callback=l),t=nl(e,n,a),t!==null&&(Ke(t,e,a),Va(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ut(),n=al(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=nl(e,n,a),t!==null&&(Ke(t,e,a),Va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ut(),a=al(l);a.tag=2,t!=null&&(a.callback=t),t=nl(e,a,l),t!==null&&(Ke(t,e,l),Va(t,e,l))}};function Sr(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!La(l,a)||!La(n,u):!0}function yr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function Bl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=_({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function hr(e){Bn(e)}function gr(e){console.error(e)}function br(e){Bn(e)}function iu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Er(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){iu(e,t)},l}function Tr(e){return e=al(e),e.tag=3,e}function Dr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){Er(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Er(t,l,a),typeof n!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Zm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&na(t,l,n,!0),l=tt.current,l!==null){switch(l.tag){case 31:case 13:return vt===null?hu():l.alternate===null&&me===0&&(me=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Kn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),qc(e,a,n)),!1;case 22:return l.flags|=65536,a===Kn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),qc(e,a,n)),!1}throw Error(p(435,l.tag))}return qc(e,a,n),hu(),!1}if(w)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ai&&(e=Error(p(422),{cause:a}),Ya(rt(e,l)))):(a!==Ai&&(t=Error(p(423),{cause:a}),Ya(rt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=rt(a,l),n=uc(e.stateNode,a,n),ji(e,n),me!==4&&(me=2)),!1;var u=Error(p(520),{cause:a});if(u=rt(u,l),cn===null?cn=[u]:cn.push(u),me!==4&&(me=2),t===null)return!0;a=rt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=uc(l.stateNode,a,e),ji(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(rl===null||!rl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Tr(n),Dr(n,e,l,a),ji(l,n),!1}l=l.return}while(l!==null);return!1}var ic=Error(p(461)),be=!1;function Re(e,t,l,a){t.child=e===null?Ms(t,null,l,a):jl(t,e.child,l,a)}function Ar(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return xl(t),a=Yi(e,t,l,i,u,n),c=Ji(),e!==null&&!be?(Xi(e,t,n),Qt(e,t,n)):(w&&c&&Ti(t),t.flags|=1,Re(e,t,a,n),t.child)}function Cr(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!gi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,zr(e,t,u,a,n)):(e=Yn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!vc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(i,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=_t(u,a),e.ref=t.ref,e.return=t,t.child=e}function zr(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(La(u,a)&&e.ref===t.ref)if(be=!1,t.pendingProps=a=u,vc(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return cc(e,t,l,a,n)}function Mr(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Rr(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wn(t,u!==null?u.cachePool:null),u!==null?qs(t,u):Bi(),xs(t);else return a=t.lanes=536870912,Rr(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(wn(t,u.cachePool),qs(t,u),il(),t.memoizedState=null):(e!==null&&wn(t,null),Bi(),il());return Re(e,t,n,l),t.child}function Pa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rr(e,t,l,a,n){var u=xi();return u=u===null?null:{parent:he._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&wn(t,null),Bi(),xs(t),e!==null&&na(e,t,a,!0),t.childLanes=n,null}function cu(e,t){return t=su({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Or(e,t,l){return jl(t,e.child,null,l),e=cu(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function wm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(w){if(a.mode==="hidden")return e=cu(t,a),t.lanes=536870912,Pa(null,e);if(Qi(t),(e=ce)?(e=Jo(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=ds(e),l.return=t,t.child=l,ze=t,ce=null)):e=null,e===null)throw el(t);return t.lanes=536870912,null}return cu(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(t),n)if(t.flags&256)t.flags&=-257,t=Or(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(be||na(e,t,l,!1),n=(l&e.childLanes)!==0,be||n){if(a=ie,a!==null&&(i=gf(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ml(e,i),Ke(a,e,i),ic;hu(),t=Or(e,t,l)}else e=u.treeContext,ce=pt(i.nextSibling),ze=t,w=!0,Pt=null,mt=!1,e!==null&&ps(t,e),t=cu(t,a),t.flags|=4096;return t}return e=_t(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fu(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function cc(e,t,l,a,n){return xl(t),l=Yi(e,t,l,a,void 0,n),a=Ji(),e!==null&&!be?(Xi(e,t,n),Qt(e,t,n)):(w&&a&&Ti(t),t.flags|=1,Re(e,t,l,n),t.child)}function qr(e,t,l,a,n,u){return xl(t),t.updateQueue=null,l=_s(t,a,l,n),Us(e),a=Ji(),e!==null&&!be?(Xi(e,t,u),Qt(e,t,u)):(w&&a&&Ti(t),t.flags|=1,Re(e,t,l,u),t.child)}function xr(e,t,l,a,n){if(xl(t),t.stateNode===null){var u=ea,i=l.contextType;typeof i=="object"&&i!==null&&(u=Me(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},_i(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Me(i):ea,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ac(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&nc.enqueueReplaceState(u,u.state,null),Wa(t,a,u,n),Ka(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,f=Bl(l,c);u.props=f;var m=u.context,y=l.contextType;i=ea,typeof y=="object"&&y!==null&&(i=Me(y));var b=l.getDerivedStateFromProps;y=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&yr(t,u,a,i),ll=!1;var v=t.memoizedState;u.state=v,Wa(t,a,u,n),Ka(),m=t.memoizedState,c||v!==m||ll?(typeof b=="function"&&(ac(t,l,b,a),m=t.memoizedState),(f=ll||Sr(t,l,f,a,v,m,i))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),u.props=a,u.state=m,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Hi(e,t),i=t.memoizedProps,y=Bl(l,i),u.props=y,b=t.pendingProps,v=u.context,m=l.contextType,f=ea,typeof m=="object"&&m!==null&&(f=Me(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==b||v!==f)&&yr(t,u,a,f),ll=!1,v=t.memoizedState,u.state=v,Wa(t,a,u,n),Ka();var S=t.memoizedState;i!==b||v!==S||ll||e!==null&&e.dependencies!==null&&Xn(e.dependencies)?(typeof c=="function"&&(ac(t,l,c,a),S=t.memoizedState),(y=ll||Sr(t,l,y,a,v,S,f)||e!==null&&e.dependencies!==null&&Xn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,S,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,S,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=S),u.props=a,u.state=S,u.context=f,a=y):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,fu(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=jl(t,e.child,null,n),t.child=jl(t,null,l,n)):Re(e,t,l,n),t.memoizedState=u.state,e=t.child):e=Qt(e,t,n),e}function Ur(e,t,l,a){return Ol(),t.flags|=256,Re(e,t,l,a),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Es()}}function rc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=nt),e}function _r(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(w){if(n?ul(t):il(),(e=ce)?(e=Jo(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:At,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},l=ds(e),l.return=t,t.child=l,ze=t,ce=null)):e=null,e===null)throw el(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(il(),n=t.mode,c=su({mode:"hidden",children:c},n),a=Rl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=sc(l),a.childLanes=rc(e,i,l),t.memoizedState=fc,Pa(null,a)):(ul(t),oc(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(ul(t),t.flags&=-257,t=dc(e,t,l)):t.memoizedState!==null?(il(),t.child=e.child,t.flags|=128,t=null):(il(),c=a.fallback,n=t.mode,a=su({mode:"visible",children:a.children},n),c=Rl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,jl(t,e.child,null,l),a=t.child,a.memoizedState=sc(l),a.childLanes=rc(e,i,l),t.memoizedState=fc,t=Pa(null,a));else if(ul(t),Vc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(p(419)),a.stack="",a.digest=i,Ya({value:a,source:null,stack:null}),t=dc(e,t,l)}else if(be||na(e,t,l,!1),i=(l&e.childLanes)!==0,be||i){if(i=ie,i!==null&&(a=gf(i,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Ml(e,a),Ke(i,e,a),ic;wc(c)||hu(),t=dc(e,t,l)}else wc(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,ce=pt(c.nextSibling),ze=t,w=!0,Pt=null,mt=!1,e!==null&&ps(t,e),t=oc(t,a.children),t.flags|=4096);return t}return n?(il(),c=a.fallback,n=t.mode,f=e.child,m=f.sibling,a=_t(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=_t(m,c):(c=Rl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=e.child.memoizedState,c===null?c=sc(l):(n=c.cachePool,n!==null?(f=he._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Es(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=rc(e,i,l),t.memoizedState=fc,Pa(e.child,a)):(ul(t),l=e.child,e=l.sibling,l=_t(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function oc(e,t){return t=su({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function su(e,t){return e=et(22,e,null,t),e.lanes=0,e}function dc(e,t,l){return jl(t,e.child,null,l),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Mi(e.return,t,l)}function mc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function jr(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Se.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,A(Se,i),Re(e,t,a,l),a=w?Ga:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hr(e,l,t);else if(e.tag===19)Hr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&$n(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),mc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&$n(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}mc(t,!0,l,null,u,a);break;case"together":mc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),sl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(na(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,l=_t(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=_t(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function vc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xn(e)))}function Vm(e,t,l){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),tl(t,he,e.memoizedState.cache),Ol();break;case 27:case 5:Ca(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:tl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(t),t.flags|=128,null):(l&t.child.childLanes)!==0?_r(e,t,l):(ul(t),e=Qt(e,t,l),e!==null?e.sibling:null);ul(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(na(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return jr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),A(Se,Se.current),a)break;return null;case 22:return t.lanes=0,Mr(e,t,l,t.pendingProps);case 24:tl(t,he,e.memoizedState.cache)}return Qt(e,t,l)}function Nr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!vc(e,l)&&(t.flags&128)===0)return be=!1,Vm(e,t,l);be=(e.flags&131072)!==0}else be=!1,w&&(t.flags&1048576)!==0&&vs(t,Ga,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=_l(t.elementType),t.type=e,typeof e=="function")gi(e)?(a=Bl(e,a),t.tag=1,t=xr(null,t,e,a,l)):(t.tag=0,t=cc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===it){t.tag=11,t=Ar(null,t,e,a,l);break e}else if(n===Z){t.tag=14,t=Cr(null,t,e,a,l);break e}}throw t=Ot(e)||e,Error(p(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Bl(a,t.pendingProps),xr(e,t,a,n,l);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(p(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Hi(e,t),Wa(t,a,null,l);var i=t.memoizedState;if(a=i.cache,tl(t,he,a),a!==u.cache&&Ri(t,[he],l,!0),Ka(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Ur(e,t,a,l);break e}else if(a!==n){n=rt(Error(p(424)),t),Ya(n),t=Ur(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=pt(e.firstChild),ze=t,w=!0,Pt=null,mt=!0,l=Ms(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ol(),a===n){t=Qt(e,t,l);break e}Re(e,t,a,l)}t=t.child}return t;case 26:return fu(e,t),e===null?(l=Wo(t.type,null,t.pendingProps,null))?t.memoizedState=l:w||(l=t.type,e=t.pendingProps,a=Cu(Q.current).createElement(l),a[Ce]=t,a[Ye]=e,Oe(a,l,e),De(a),t.stateNode=a):t.memoizedState=Wo(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ca(t),e===null&&w&&(a=t.stateNode=wo(t.type,t.pendingProps,Q.current),ze=t,mt=!0,n=ce,vl(t.type)?(Kc=n,ce=pt(a.firstChild)):ce=n),Re(e,t,t.pendingProps.children,l),fu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&w&&((n=a=ce)&&(a=Tv(a,t.type,t.pendingProps,mt),a!==null?(t.stateNode=a,ze=t,ce=pt(a.firstChild),mt=!1,n=!0):n=!1),n||el(t)),Ca(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,Jc(n,u)?a=null:i!==null&&Jc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Yi(e,t,Bm,null,null,l),pn._currentValue=n),fu(e,t),Re(e,t,a,l),t.child;case 6:return e===null&&w&&((e=l=ce)&&(l=Dv(l,t.pendingProps,mt),l!==null?(t.stateNode=l,ze=t,ce=null,e=!0):e=!1),e||el(t)),null;case 13:return _r(e,t,l);case 4:return He(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=jl(t,null,a,l):Re(e,t,a,l),t.child;case 11:return Ar(e,t,t.type,t.pendingProps,l);case 7:return Re(e,t,t.pendingProps,l),t.child;case 8:return Re(e,t,t.pendingProps.children,l),t.child;case 12:return Re(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,tl(t,t.type,a.value),Re(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,xl(t),n=Me(n),a=a(n),t.flags|=1,Re(e,t,a,l),t.child;case 14:return Cr(e,t,t.type,t.pendingProps,l);case 15:return zr(e,t,t.type,t.pendingProps,l);case 19:return jr(e,t,l);case 31:return wm(e,t,l);case 22:return Mr(e,t,l,t.pendingProps);case 24:return xl(t),a=Me(he),e===null?(n=xi(),n===null&&(n=ie,u=Oi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},_i(t),tl(t,he,n)):((e.lanes&l)!==0&&(Hi(e,t),Wa(t,null,null,l),Ka()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),tl(t,he,a)):(a=u.cache,tl(t,he,a),a!==n.cache&&Ri(t,[he],l,!0))),Re(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Gt(e){e.flags|=4}function pc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(so())e.flags|=8192;else throw Hl=Kn,Ui}else e.flags&=-16777217}function Br(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Po(t))if(so())e.flags|=8192;else throw Hl=Kn,Ui}function ru(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sf():536870912,e.lanes|=t,Sa|=t)}function en(e,t){if(!w)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Km(e,t,l){var a=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return fe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Nt(he),pe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(aa(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ci())),fe(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Gt(t),u!==null?(fe(t),Br(t,u)):(fe(t),pc(t,n,null,a,l))):u?u!==e.memoizedState?(Gt(t),fe(t),Br(t,u)):(fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Gt(t),fe(t),pc(t,n,e,a,l)),null;case 27:if(En(t),l=Q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return fe(t),null}e=M.current,aa(t)?Ss(t):(e=wo(n,a,l),t.stateNode=e,Gt(t))}return fe(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return fe(t),null}if(u=M.current,aa(t))Ss(t);else{var i=Cu(Q.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ce]=t,u[Ye]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Oe(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Gt(t)}}return fe(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Gt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(p(166));if(e=Q.current,aa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=ze,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ce]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ho(e.nodeValue,l)),e||el(t,!0)}else e=Cu(e).createTextNode(a),e[Ce]=t,t.stateNode=e}return fe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=aa(t),l!==null){if(e===null){if(!a)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Ce]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),e=!1}else l=Ci(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return fe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(p(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Ce]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),n=!1}else n=Ci(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),ru(t,t.updateQueue),fe(t),null);case 4:return pe(),e===null&&Bc(t.stateNode.containerInfo),fe(t),null;case 10:return Nt(t.type),fe(t),null;case 19:if(E(Se),a=t.memoizedState,a===null)return fe(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)en(a,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=$n(e),u!==null){for(t.flags|=128,en(a,!1),e=u.updateQueue,t.updateQueue=e,ru(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)os(l,e),l=l.sibling;return A(Se,Se.current&1|2),w&&Ht(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ke()>pu&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304)}else{if(!n)if(e=$n(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ru(t,e),en(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!w)return fe(t),null}else 2*ke()-a.renderingStartTime>pu&&l!==536870912&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ke(),e.sibling=null,l=Se.current,A(Se,n?l&1|2:l&1),w&&Ht(t,a.treeForkCount),e):(fe(t),null);case 22:case 23:return lt(t),Li(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),l=t.updateQueue,l!==null&&ru(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&E(Ul),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Nt(he),fe(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function Wm(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nt(he),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(p(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Se),null;case 4:return pe(),null;case 10:return Nt(t.type),null;case 22:case 23:return lt(t),Li(),e!==null&&E(Ul),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Nt(he),null;case 25:return null;default:return null}}function Lr(e,t){switch(Di(t),t.tag){case 3:Nt(he),pe();break;case 26:case 27:case 5:En(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:E(Se);break;case 10:Nt(t.type);break;case 22:case 23:lt(t),Li(),e!==null&&E(Ul);break;case 24:Nt(he)}}function tn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){ee(t,t.return,c)}}function cl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=l,m=c;try{m()}catch(y){ee(n,f,y)}}}a=a.next}while(a!==u)}}catch(y){ee(t,t.return,y)}}function Qr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Os(t,l)}catch(a){ee(e,e.return,a)}}}function Gr(e,t,l){l.props=Bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ee(e,t,a)}}function ln(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ee(e,t,n)}}function zt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ee(e,t,n)}else l.current=null}function Yr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ee(e,e.return,n)}}function Sc(e,t,l){try{var a=e.stateNode;Sv(a,e.type,l,t),a[Ye]=t}catch(n){ee(e,e.return,n)}}function Jr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=xt));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(hc(e,t,l),e=e.sibling;e!==null;)hc(e,t,l),e=e.sibling}function ou(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(ou(e,t,l),e=e.sibling;e!==null;)ou(e,t,l),e=e.sibling}function Xr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oe(t,a,l),t[Ce]=e,t[Ye]=l}catch(u){ee(e,e.return,u)}}var Yt=!1,Ee=!1,gc=!1,Zr=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Fm(e,t){if(e=e.containerInfo,Gc=Uu,e=ls(e),di(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,c=-1,f=-1,m=0,y=0,b=e,v=null;t:for(;;){for(var S;b!==l||n!==0&&b.nodeType!==3||(c=i+n),b!==u||a!==0&&b.nodeType!==3||(f=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(S=b.firstChild)!==null;)v=b,b=S;for(;;){if(b===e)break t;if(v===l&&++m===n&&(c=i),v===u&&++y===a&&(f=i),(S=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=S}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yc={focusedElem:e,selectionRange:l},Uu=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var C=Bl(l.type,n);e=a.getSnapshotBeforeUpdate(C,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(x){ee(l,l.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Zc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function wr(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(e,l),a&4&&tn(5,l);break;case 1:if(Xt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){ee(l,l.return,i)}else{var n=Bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ee(l,l.return,i)}}a&64&&Qr(l),a&512&&ln(l,l.return);break;case 3:if(Xt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Os(e,t)}catch(i){ee(l,l.return,i)}}break;case 27:t===null&&a&4&&Xr(l);case 26:case 5:Xt(e,l),t===null&&a&4&&Yr(l),a&512&&ln(l,l.return);break;case 12:Xt(e,l);break;case 31:Xt(e,l),a&4&&Wr(e,l);break;case 13:Xt(e,l),a&4&&Fr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=nv.bind(null,l),Av(e,l))));break;case 22:if(a=l.memoizedState!==null||Yt,!a){t=t!==null&&t.memoizedState!==null||Ee,n=Yt;var u=Ee;Yt=a,(Ee=t)&&!u?Zt(e,l,(l.subtreeFlags&8772)!==0):Xt(e,l),Yt=n,Ee=u}break;case 30:break;default:Xt(e,l)}}function Vr(e){var t=e.alternate;t!==null&&(e.alternate=null,Vr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Xe=!1;function Jt(e,t,l){for(l=l.child;l!==null;)Kr(e,t,l),l=l.sibling}function Kr(e,t,l){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(za,l)}catch{}switch(l.tag){case 26:Ee||zt(l,t),Jt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ee||zt(l,t);var a=re,n=Xe;vl(l.type)&&(re=l.stateNode,Xe=!1),Jt(e,t,l),dn(l.stateNode),re=a,Xe=n;break;case 5:Ee||zt(l,t);case 6:if(a=re,n=Xe,re=null,Jt(e,t,l),re=a,Xe=n,re!==null)if(Xe)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(l.stateNode)}catch(u){ee(l,t,u)}else try{re.removeChild(l.stateNode)}catch(u){ee(l,t,u)}break;case 18:re!==null&&(Xe?(e=re,Go(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Aa(e)):Go(re,l.stateNode));break;case 4:a=re,n=Xe,re=l.stateNode.containerInfo,Xe=!0,Jt(e,t,l),re=a,Xe=n;break;case 0:case 11:case 14:case 15:cl(2,l,t),Ee||cl(4,l,t),Jt(e,t,l);break;case 1:Ee||(zt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Gr(l,t,a)),Jt(e,t,l);break;case 21:Jt(e,t,l);break;case 22:Ee=(a=Ee)||l.memoizedState!==null,Jt(e,t,l),Ee=a;break;default:Jt(e,t,l)}}function Wr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Aa(e)}catch(l){ee(t,t.return,l)}}}function Fr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(l){ee(t,t.return,l)}}function km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zr),t;default:throw Error(p(435,e.tag))}}function du(e,t){var l=km(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=uv.bind(null,e,a);a.then(n,n)}})}function Ze(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){re=c.stateNode,Xe=!1;break e}break;case 5:re=c.stateNode,Xe=!1;break e;case 3:case 4:re=c.stateNode.containerInfo,Xe=!0;break e}c=c.return}if(re===null)throw Error(p(160));Kr(u,i,n),re=null,Xe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kr(t,e),t=t.sibling}var gt=null;function kr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),we(e),a&4&&(cl(3,e,e.return),tn(3,e),cl(5,e,e.return));break;case 1:Ze(t,e),we(e),a&512&&(Ee||l===null||zt(l,l.return)),a&64&&Yt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=gt;if(Ze(t,e),we(e),a&512&&(Ee||l===null||zt(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Oa]||u[Ce]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Oe(u,a,l),u[Ce]=e,De(u),a=u;break e;case"link":var i=$o("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),Oe(u,a,l),n.head.appendChild(u);break;case"meta":if(i=$o("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}u=n.createElement(a),Oe(u,a,l),n.head.appendChild(u);break;default:throw Error(p(468,a))}u[Ce]=e,De(u),a=u}e.stateNode=a}else Io(n,e.type,e.stateNode);else e.stateNode=ko(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Io(n,e.type,e.stateNode):ko(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ze(t,e),we(e),a&512&&(Ee||l===null||zt(l,l.return)),l!==null&&a&4&&Sc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ze(t,e),we(e),a&512&&(Ee||l===null||zt(l,l.return)),e.flags&32){n=e.stateNode;try{Kl(n,"")}catch(C){ee(e,e.return,C)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Sc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(gc=!0);break;case 6:if(Ze(t,e),we(e),a&4){if(e.stateNode===null)throw Error(p(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(C){ee(e,e.return,C)}}break;case 3:if(Ru=null,n=gt,gt=zu(t.containerInfo),Ze(t,e),gt=n,we(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(C){ee(e,e.return,C)}gc&&(gc=!1,$r(e));break;case 4:a=gt,gt=zu(e.stateNode.containerInfo),Ze(t,e),we(e),gt=a;break;case 12:Ze(t,e),we(e);break;case 31:Ze(t,e),we(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 13:Ze(t,e),we(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vu=ke()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 22:n=e.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,m=Yt,y=Ee;if(Yt=m||n,Ee=y||f,Ze(t,e),Ee=y,Yt=m,we(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||f||Yt||Ee||Ll(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){f=l=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(C){ee(f,f.return,C)}}}else if(t.tag===6){if(l===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(C){ee(f,f.return,C)}}}else if(t.tag===18){if(l===null){f=t;try{var S=f.stateNode;n?Yo(S,!0):Yo(f.stateNode,!1)}catch(C){ee(f,f.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,du(e,l))));break;case 19:Ze(t,e),we(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 30:break;case 21:break;default:Ze(t,e),we(e)}}function we(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Jr(a)){l=a;break}a=a.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var n=l.stateNode,u=yc(e);ou(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Kl(i,""),l.flags&=-33);var c=yc(e);ou(e,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,m=yc(e);hc(e,m,f);break;default:throw Error(p(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $r(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$r(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wr(e,t.alternate,t),t=t.sibling}function Ll(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cl(4,t,t.return),Ll(t);break;case 1:zt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Gr(t,t.return,l),Ll(t);break;case 27:dn(t.stateNode);case 26:case 5:zt(t,t.return),Ll(t);break;case 22:t.memoizedState===null&&Ll(t);break;case 30:Ll(t);break;default:Ll(t)}e=e.sibling}}function Zt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Zt(n,u,l),tn(4,u);break;case 1:if(Zt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(a,a.return,m)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)Rs(f[n],c)}catch(m){ee(a,a.return,m)}}l&&i&64&&Qr(u),ln(u,u.return);break;case 27:Xr(u);case 26:case 5:Zt(n,u,l),l&&a===null&&i&4&&Yr(u),ln(u,u.return);break;case 12:Zt(n,u,l);break;case 31:Zt(n,u,l),l&&i&4&&Wr(n,u);break;case 13:Zt(n,u,l),l&&i&4&&Fr(n,u);break;case 22:u.memoizedState===null&&Zt(n,u,l),ln(u,u.return);break;case 30:break;default:Zt(n,u,l)}t=t.sibling}}function bc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ja(l))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e))}function bt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ir(e,t,l,a),t=t.sibling}function Ir(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,l,a),n&2048&&tn(9,t);break;case 1:bt(e,t,l,a);break;case 3:bt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e)));break;case 12:if(n&2048){bt(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ee(t,t.return,f)}}else bt(e,t,l,a);break;case 31:bt(e,t,l,a);break;case 13:bt(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?bt(e,t,l,a):an(e,t):u._visibility&2?bt(e,t,l,a):(u._visibility|=2,ma(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bc(i,t);break;case 24:bt(e,t,l,a),n&2048&&Ec(t.alternate,t);break;default:bt(e,t,l,a)}}function ma(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=l,f=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ma(u,i,c,f,n),tn(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?ma(u,i,c,f,n):an(u,i):(y._visibility|=2,ma(u,i,c,f,n)),n&&m&2048&&bc(i.alternate,i);break;case 24:ma(u,i,c,f,n),n&&m&2048&&Ec(i.alternate,i);break;default:ma(u,i,c,f,n)}t=t.sibling}}function an(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:an(l,a),n&2048&&bc(a.alternate,a);break;case 24:an(l,a),n&2048&&Ec(a.alternate,a);break;default:an(l,a)}t=t.sibling}}var nn=8192;function va(e,t,l){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)Pr(e,t,l),e=e.sibling}function Pr(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&nn&&e.memoizedState!==null&&Nv(l,gt,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=gt;gt=zu(e.stateNode.containerInfo),va(e,t,l),gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=nn,nn=16777216,va(e,t,l),nn=a):va(e,t,l));break;default:va(e,t,l)}}function eo(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,lo(a,e)}eo(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)to(e),e=e.sibling}function to(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&cl(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mu(e)):un(e);break;default:un(e)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ae=a,lo(a,e)}eo(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cl(8,t,t.return),mu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,mu(t));break;default:mu(t)}e=e.sibling}}function lo(e,t){for(;Ae!==null;){var l=Ae;switch(l.tag){case 0:case 11:case 15:cl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ae=a;else e:for(l=e;Ae!==null;){a=Ae;var n=a.sibling,u=a.return;if(Vr(a),a===l){Ae=null;break e}if(n!==null){n.return=u,Ae=n;break e}Ae=u}}}var $m={getCacheForType:function(e){var t=Me(he),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Me(he).controller.signal}},Im=typeof WeakMap=="function"?WeakMap:Map,F=0,ie=null,G=null,J=0,P=0,at=null,fl=!1,pa=!1,Tc=!1,wt=0,me=0,sl=0,Ql=0,Dc=0,nt=0,Sa=0,cn=null,Ve=null,Ac=!1,vu=0,ao=0,pu=1/0,Su=null,rl=null,Te=0,ol=null,ya=null,Vt=0,Cc=0,zc=null,no=null,fn=0,Mc=null;function ut(){return(F&2)!==0&&J!==0?J&-J:h.T!==null?_c():bf()}function uo(){if(nt===0)if((J&536870912)===0||w){var e=An;An<<=1,(An&3932160)===0&&(An=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,l){(e===ie&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(ha(e,0),dl(e,J,nt,!1)),Ra(e,l),((F&2)===0||e!==ie)&&(e===ie&&((F&2)===0&&(Ql|=l),me===4&&dl(e,J,nt,!1)),Mt(e))}function io(e,t,l){if((F&6)!==0)throw Error(p(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ma(e,t),n=a?tv(e,t):Oc(e,t,!0),u=a;do{if(n===0){pa&&!a&&dl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!Pm(l)){n=Oc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=cn;var f=c.current.memoizedState.isDehydrated;if(f&&(ha(c,i).flags|=256),i=Oc(c,i,!1),i!==2){if(Tc&&!f){c.errorRecoveryDisabledLanes|=u,Ql|=u,n=4;break e}u=Ve,Ve=n,u!==null&&(Ve===null?Ve=u:Ve.push.apply(Ve,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){ha(e,0),dl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:dl(a,t,nt,!fl);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(n=vu+300-ke(),10<n)){if(dl(a,t,nt,!fl),zn(a,0,!0)!==0)break e;Vt=t,a.timeoutHandle=Lo(co.bind(null,a,l,Ve,Su,Ac,t,nt,Ql,Sa,fl,u,"Throttled",-0,0),n);break e}co(a,l,Ve,Su,Ac,t,nt,Ql,Sa,fl,u,null,-0,0)}}break}while(!0);Mt(e)}function co(e,t,l,a,n,u,i,c,f,m,y,b,v,S){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xt},Pr(t,u,b);var C=(u&62914560)===u?vu-ke():(u&4194048)===u?ao-ke():0;if(C=Bv(b,C),C!==null){Vt=u,e.cancelPendingCommit=C(So.bind(null,e,t,u,l,a,n,i,c,f,y,b,null,v,S)),dl(e,u,i,!m);return}}So(e,t,u,l,a,n,i,c,f)}function Pm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!Pe(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dl(e,t,l,a){t&=~Dc,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-Ie(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&yf(e,l,t)}function yu(){return(F&6)===0?(sn(0),!1):!0}function Rc(){if(G!==null){if(P===0)var e=G.return;else e=G,jt=ql=null,Zi(e),fa=null,Za=0,e=G;for(;e!==null;)Lr(e.alternate,e),e=e.return;G=null}}function ha(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,gv(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Vt=0,Rc(),ie=e,G=l=_t(e.current,null),J=t,P=0,at=null,fl=!1,pa=Ma(e,t),Tc=!1,Sa=nt=Dc=Ql=sl=me=0,Ve=cn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Ie(a),u=1<<n;t|=e[n],a&=~u}return wt=t,Ln(),l}function fo(e,t){B=null,h.H=Ia,t===ca||t===Vn?(t=As(),P=3):t===Ui?(t=As(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,G===null&&(me=1,iu(e,rt(t,e.current)))}function so(){var e=tt.current;return e===null?!0:(J&4194048)===J?vt===null:(J&62914560)===J||(J&536870912)!==0?e===vt:!1}function ro(){var e=h.H;return h.H=Ia,e===null?Ia:e}function oo(){var e=h.A;return h.A=$m,e}function hu(){me=4,fl||(J&4194048)!==J&&tt.current!==null||(pa=!0),(sl&134217727)===0&&(Ql&134217727)===0||ie===null||dl(ie,J,nt,!1)}function Oc(e,t,l){var a=F;F|=2;var n=ro(),u=oo();(ie!==e||J!==t)&&(Su=null,ha(e,t)),t=!1;var i=me;e:do try{if(P!==0&&G!==null){var c=G,f=at;switch(P){case 8:Rc(),i=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=P;if(P=0,at=null,ga(e,c,f,m),l&&pa){i=0;break e}break;default:m=P,P=0,at=null,ga(e,c,f,m)}}ev(),i=me;break}catch(y){fo(e,y)}while(!0);return t&&e.shellSuspendCounter++,jt=ql=null,F=a,h.H=n,h.A=u,G===null&&(ie=null,J=0,Ln()),i}function ev(){for(;G!==null;)mo(G)}function tv(e,t){var l=F;F|=2;var a=ro(),n=oo();ie!==e||J!==t?(Su=null,pu=ke()+500,ha(e,t)):pa=Ma(e,t);e:do try{if(P!==0&&G!==null){t=G;var u=at;t:switch(P){case 1:P=0,at=null,ga(e,t,u,1);break;case 2:case 9:if(Ts(u)){P=0,at=null,vo(t);break}t=function(){P!==2&&P!==9||ie!==e||(P=7),Mt(e)},u.then(t,t);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:Ts(u)?(P=0,at=null,vo(t)):(P=0,at=null,ga(e,t,u,7));break;case 5:var i=null;switch(G.tag){case 26:i=G.memoizedState;case 5:case 27:var c=G;if(i?Po(i):c.stateNode.complete){P=0,at=null;var f=c.sibling;if(f!==null)G=f;else{var m=c.return;m!==null?(G=m,gu(m)):G=null}break t}}P=0,at=null,ga(e,t,u,5);break;case 6:P=0,at=null,ga(e,t,u,6);break;case 8:Rc(),me=6;break e;default:throw Error(p(462))}}lv();break}catch(y){fo(e,y)}while(!0);return jt=ql=null,h.H=a,h.A=n,F=l,G!==null?0:(ie=null,J=0,Ln(),me)}function lv(){for(;G!==null&&!Cd();)mo(G)}function mo(e){var t=Nr(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?gu(e):G=t}function vo(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=qr(l,t,t.pendingProps,t.type,void 0,J);break;case 11:t=qr(l,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Zi(t);default:Lr(l,t),t=G=os(t,wt),t=Nr(l,t,wt)}e.memoizedProps=e.pendingProps,t===null?gu(e):G=t}function ga(e,t,l,a){jt=ql=null,Zi(t),fa=null,Za=0;var n=t.return;try{if(Zm(e,n,t,l,J)){me=1,iu(e,rt(l,e.current)),G=null;return}}catch(u){if(n!==null)throw G=n,u;me=1,iu(e,rt(l,e.current)),G=null;return}t.flags&32768?(w||a===1?e=!0:pa||(J&536870912)!==0?e=!1:(fl=e=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),po(t,e)):gu(t)}function gu(e){var t=e;do{if((t.flags&32768)!==0){po(t,fl);return}e=t.return;var l=Km(t.alternate,t,wt);if(l!==null){G=l;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);me===0&&(me=5)}function po(e,t){do{var l=Wm(e.alternate,e);if(l!==null){l.flags&=32767,G=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=l}while(e!==null);me=6,G=null}function So(e,t,l,a,n,u,i,c,f){e.cancelPendingCommit=null;do bu();while(Te!==0);if((F&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(u=t.lanes|t.childLanes,u|=yi,jd(e,l,u,i,c,f),e===ie&&(G=ie=null,J=0),ya=t,ol=e,Vt=l,Cc=u,zc=n,no=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iv(Tn,function(){return Eo(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=h.T,h.T=null,n=D.p,D.p=2,i=F,F|=4;try{Fm(e,t,l)}finally{F=i,D.p=n,h.T=a}}Te=1,yo(),ho(),go()}}function yo(){if(Te===1){Te=0;var e=ol,t=ya,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=h.T,h.T=null;var a=D.p;D.p=2;var n=F;F|=4;try{kr(t,e);var u=Yc,i=ls(e.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&ts(c.ownerDocument.documentElement,c)){if(f!==null&&di(c)){var m=f.start,y=f.end;if(y===void 0&&(y=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(y,c.value.length);else{var b=c.ownerDocument||document,v=b&&b.defaultView||window;if(v.getSelection){var S=v.getSelection(),C=c.textContent.length,x=Math.min(f.start,C),ne=f.end===void 0?x:Math.min(f.end,C);!S.extend&&x>ne&&(i=ne,ne=x,x=i);var o=es(c,x),s=es(c,ne);if(o&&s&&(S.rangeCount!==1||S.anchorNode!==o.node||S.anchorOffset!==o.offset||S.focusNode!==s.node||S.focusOffset!==s.offset)){var d=b.createRange();d.setStart(o.node,o.offset),S.removeAllRanges(),x>ne?(S.addRange(d),S.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),S.addRange(d))}}}}for(b=[],S=c;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Uu=!!Gc,Yc=Gc=null}finally{F=n,D.p=a,h.T=l}}e.current=t,Te=2}}function ho(){if(Te===2){Te=0;var e=ol,t=ya,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=h.T,h.T=null;var a=D.p;D.p=2;var n=F;F|=4;try{wr(e,t.alternate,t)}finally{F=n,D.p=a,h.T=l}}Te=3}}function go(){if(Te===4||Te===3){Te=0,zd();var e=ol,t=ya,l=Vt,a=no;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,ya=ol=null,bo(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(rl=null),Ku(l),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=h.T,n=D.p,D.p=2,h.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{h.T=t,D.p=n}}(Vt&3)!==0&&bu(),Mt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Mc?fn++:(fn=0,Mc=e):fn=0,sn(0)}}function bo(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ja(t)))}function bu(){return yo(),ho(),go(),Eo()}function Eo(){if(Te!==5)return!1;var e=ol,t=Cc;Cc=0;var l=Ku(Vt),a=h.T,n=D.p;try{D.p=32>l?32:l,h.T=null,l=zc,zc=null;var u=ol,i=Vt;if(Te=0,ya=ol=null,Vt=0,(F&6)!==0)throw Error(p(331));var c=F;if(F|=4,to(u.current),Ir(u,u.current,i,l),F=c,sn(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(za,u)}catch{}return!0}finally{D.p=n,h.T=a,bo(e,t)}}function To(e,t,l){t=rt(l,t),t=uc(e.stateNode,t,2),e=nl(e,t,2),e!==null&&(Ra(e,2),Mt(e))}function ee(e,t,l){if(e.tag===3)To(e,e,l);else for(;t!==null;){if(t.tag===3){To(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(rl===null||!rl.has(a))){e=rt(l,e),l=Tr(2),a=nl(t,l,2),a!==null&&(Dr(l,a,t,e),Ra(a,2),Mt(a));break}}t=t.return}}function qc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Im;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Tc=!0,n.add(l),e=av.bind(null,e,t,l),t.then(e,e))}function av(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ie===e&&(J&l)===l&&(me===4||me===3&&(J&62914560)===J&&300>ke()-vu?(F&2)===0&&ha(e,0):Dc|=l,Sa===J&&(Sa=0)),Mt(e)}function Do(e,t){t===0&&(t=Sf()),e=Ml(e,t),e!==null&&(Ra(e,t),Mt(e))}function nv(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Do(e,l)}function uv(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(t),Do(e,l)}function iv(e,t){return Xu(e,t)}var Eu=null,ba=null,xc=!1,Tu=!1,Uc=!1,ml=0;function Mt(e){e!==ba&&e.next===null&&(ba===null?Eu=ba=e:ba=ba.next=e),Tu=!0,xc||(xc=!0,fv())}function sn(e,t){if(!Uc&&Tu){Uc=!0;do for(var l=!1,a=Eu;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-Ie(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Mo(a,u))}else u=J,u=zn(a,a===ie?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ma(a,u)||(l=!0,Mo(a,u));a=a.next}while(l);Uc=!1}}function cv(){Ao()}function Ao(){Tu=xc=!1;var e=0;ml!==0&&hv()&&(e=ml);for(var t=ke(),l=null,a=Eu;a!==null;){var n=a.next,u=Co(a,t);u===0?(a.next=null,l===null?Eu=n:l.next=n,n===null&&(ba=l)):(l=a,(e!==0||(u&3)!==0)&&(Tu=!0)),a=n}Te!==0&&Te!==5||sn(e),ml!==0&&(ml=0)}function Co(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Ie(u),c=1<<i,f=n[i];f===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Hd(c,t)):f<=t&&(e.expiredLanes|=c),u&=~c}if(t=ie,l=J,l=zn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(P===2||P===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Zu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ma(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Zu(a),Ku(l)){case 2:case 8:l=vf;break;case 32:l=Tn;break;case 268435456:l=pf;break;default:l=Tn}return a=zo.bind(null,e),l=Xu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Zu(a),e.callbackPriority=2,e.callbackNode=null,2}function zo(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(bu()&&e.callbackNode!==l)return null;var a=J;return a=zn(e,e===ie?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(io(e,a,t),Co(e,ke()),e.callbackNode!=null&&e.callbackNode===l?zo.bind(null,e):null)}function Mo(e,t){if(bu())return null;io(e,t,!0)}function fv(){bv(function(){(F&6)!==0?Xu(mf,cv):Ao()})}function _c(){if(ml===0){var e=ua;e===0&&(e=Dn,Dn<<=1,(Dn&261888)===0&&(Dn=256)),ml=e}return ml}function Ro(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qn(""+e)}function Oo(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function sv(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=Ro((n[Ye]||null).action),i=a.submitter;i&&(t=(t=i[Ye]||null)?Ro(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Hn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var f=i?Oo(n,i):new FormData(n);Pi(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Oo(n,i):new FormData(n),Pi(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Hc=0;Hc<Si.length;Hc++){var jc=Si[Hc],rv=jc.toLowerCase(),ov=jc[0].toUpperCase()+jc.slice(1);ht(rv,"on"+ov)}ht(us,"onAnimationEnd"),ht(is,"onAnimationIteration"),ht(cs,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(Mm,"onTransitionRun"),ht(Rm,"onTransitionStart"),ht(Om,"onTransitionCancel"),ht(fs,"onTransitionEnd"),wl("onMouseEnter",["mouseout","mouseover"]),wl("onMouseLeave",["mouseout","mouseover"]),wl("onPointerEnter",["pointerout","pointerover"]),wl("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn));function qo(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(y){Bn(y)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(y){Bn(y)}n.currentTarget=null,u=f}}}}function Y(e,t){var l=t[Wu];l===void 0&&(l=t[Wu]=new Set);var a=e+"__bubble";l.has(a)||(xo(t,e,2,!1),l.add(a))}function Nc(e,t,l){var a=0;t&&(a|=4),xo(l,e,a,t)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[Du]){e[Du]=!0,Df.forEach(function(l){l!=="selectionchange"&&(dv.has(l)||Nc(l,!1,e),Nc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Du]||(t[Du]=!0,Nc("selectionchange",!1,t))}}function xo(e,t,l,a){switch(id(t)){case 2:var n=Gv;break;case 8:n=Yv;break;default:n=Ic}l=n.bind(null,t,l,e),n=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Lc(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Jl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue e}c=c.parentNode}}a=a.return}jf(function(){var m=u,y=ti(l),b=[];e:{var v=ss.get(e);if(v!==void 0){var S=Hn,C=e;switch(e){case"keypress":if(Un(l)===0)break e;case"keydown":case"keyup":S=um;break;case"focusin":C="focus",S=ci;break;case"focusout":C="blur",S=ci;break;case"beforeblur":case"afterblur":S=ci;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=fm;break;case us:case is:case cs:S=kd;break;case fs:S=rm;break;case"scroll":case"scrollend":S=wd;break;case"wheel":S=dm;break;case"copy":case"cut":case"paste":S=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Gf;break;case"toggle":case"beforetoggle":S=vm}var x=(t&4)!==0,ne=!x&&(e==="scroll"||e==="scrollend"),o=x?v!==null?v+"Capture":null:v;x=[];for(var s=m,d;s!==null;){var g=s;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||o===null||(g=xa(s,o),g!=null&&x.push(on(s,g,d))),ne)break;s=s.return}0<x.length&&(v=new S(v,C,null,l,y),b.push({event:v,listeners:x}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&l!==ei&&(C=l.relatedTarget||l.fromElement)&&(Jl(C)||C[Yl]))break e;if((S||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,S?(C=l.relatedTarget||l.toElement,S=m,C=C?Jl(C):null,C!==null&&(ne=W(C),x=C.tag,C!==ne||x!==5&&x!==27&&x!==6)&&(C=null)):(S=null,C=m),S!==C)){if(x=Lf,g="onMouseLeave",o="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(x=Gf,g="onPointerLeave",o="onPointerEnter",s="pointer"),ne=S==null?v:qa(S),d=C==null?v:qa(C),v=new x(g,s+"leave",S,l,y),v.target=ne,v.relatedTarget=d,g=null,Jl(y)===m&&(x=new x(o,s+"enter",C,l,y),x.target=d,x.relatedTarget=ne,g=x),ne=g,S&&C)t:{for(x=mv,o=S,s=C,d=0,g=o;g;g=x(g))d++;g=0;for(var O=s;O;O=x(O))g++;for(;0<d-g;)o=x(o),d--;for(;0<g-d;)s=x(s),g--;for(;d--;){if(o===s||s!==null&&o===s.alternate){x=o;break t}o=x(o),s=x(s)}x=null}else x=null;S!==null&&Uo(b,v,S,x,!1),C!==null&&ne!==null&&Uo(b,ne,C,x,!0)}}e:{if(v=m?qa(m):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var V=Wf;else if(Vf(v))if(Ff)V=Am;else{V=Tm;var R=Em}else S=v.nodeName,!S||S.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Pu(m.elementType)&&(V=Wf):V=Dm;if(V&&(V=V(e,m))){Kf(b,V,l,y);break e}R&&R(e,v,m),e==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&Iu(v,"number",v.value)}switch(R=m?qa(m):window,e){case"focusin":(Vf(R)||R.contentEditable==="true")&&($l=R,mi=m,Qa=null);break;case"focusout":Qa=mi=$l=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,as(b,l,y);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":as(b,l,y)}var L;if(si)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else kl?Zf(e,l)&&(X="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(X="onCompositionStart");X&&(Yf&&l.locale!=="ko"&&(kl||X!=="onCompositionStart"?X==="onCompositionEnd"&&kl&&(L=Nf()):($t=y,ni="value"in $t?$t.value:$t.textContent,kl=!0)),R=Au(m,X),0<R.length&&(X=new Qf(X,e,null,l,y),b.push({event:X,listeners:R}),L?X.data=L:(L=wf(l),L!==null&&(X.data=L)))),(L=Sm?ym(e,l):hm(e,l))&&(X=Au(m,"onBeforeInput"),0<X.length&&(R=new Qf("onBeforeInput","beforeinput",null,l,y),b.push({event:R,listeners:X}),R.data=L)),sv(b,e,m,l,y)}qo(b,t)})}function on(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Au(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=xa(e,l),n!=null&&a.unshift(on(e,n,u)),n=xa(e,t),n!=null&&a.push(on(e,n,u))),e.tag===3)return a;e=e.return}return[]}function mv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Uo(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var c=l,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,n?(m=xa(l,u),m!=null&&i.unshift(on(l,m,f))):n||(m=xa(l,u),m!=null&&i.push(on(l,m,f)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var vv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function _o(e){return(typeof e=="string"?e:""+e).replace(vv,`
`).replace(pv,"")}function Ho(e,t){return t=_o(t),_o(e)===t}function ae(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Kl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Kl(e,""+a);break;case"className":Rn(e,"class",a);break;case"tabIndex":Rn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,l,a);break;case"style":_f(e,a,u);break;case"data":if(t!=="object"){Rn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=qn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&ae(e,t,"name",n.name,n,null),ae(e,t,"formEncType",n.formEncType,n,null),ae(e,t,"formMethod",n.formMethod,n,null),ae(e,t,"formTarget",n.formTarget,n,null)):(ae(e,t,"encType",n.encType,n,null),ae(e,t,"method",n.method,n,null),ae(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=qn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=xt);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=qn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":Y("beforetoggle",e),Y("toggle",e),Mn(e,"popover",a);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Xd.get(l)||l,Mn(e,l,a))}}function Qc(e,t,l,a,n,u){switch(l){case"style":_f(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Kl(e,a):(typeof a=="number"||typeof a=="bigint")&&Kl(e,""+a);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"onClick":a!=null&&(e.onclick=xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Af.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Ye]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Mn(e,l,a)}}}function Oe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ae(e,t,u,i,l,null)}}n&&ae(e,t,"srcSet",l.srcSet,l,null),a&&ae(e,t,"src",l.src,l,null);return;case"input":Y("invalid",e);var c=u=i=n=null,f=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var y=l[a];if(y!=null)switch(a){case"name":n=y;break;case"type":i=y;break;case"checked":f=y;break;case"defaultChecked":m=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:ae(e,t,a,y,l,null)}}Of(e,u,c,f,m,i,n,!1);return;case"select":Y("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ae(e,t,n,c,l,null)}t=u,l=i,e.multiple=!!a,t!=null?Vl(e,!!a,t,!1):l!=null&&Vl(e,!!a,l,!0);return;case"textarea":Y("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:ae(e,t,i,c,l,null)}xf(e,a,n,u);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ae(e,t,f,a,l,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(a=0;a<rn.length;a++)Y(rn[a],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ae(e,t,m,a,l,null)}return;default:if(Pu(t)){for(y in l)l.hasOwnProperty(y)&&(a=l[y],a!==void 0&&Qc(e,t,y,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ae(e,t,c,a,l,null))}function Sv(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,m=null,y=null;for(S in l){var b=l[S];if(l.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=b;default:a.hasOwnProperty(S)||ae(e,t,S,null,a,b)}}for(var v in a){var S=a[v];if(b=l[v],a.hasOwnProperty(v)&&(S!=null||b!=null))switch(v){case"type":u=S;break;case"name":n=S;break;case"checked":m=S;break;case"defaultChecked":y=S;break;case"value":i=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:S!==b&&ae(e,t,v,S,a,b)}}$u(e,i,c,f,m,y,u,n);return;case"select":S=i=c=v=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":S=f;default:a.hasOwnProperty(u)||ae(e,t,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&ae(e,t,n,u,a,f)}t=c,l=i,a=S,v!=null?Vl(e,!!l,v,!1):!!a!=!!l&&(t!=null?Vl(e,!!l,t,!0):Vl(e,!!l,l?[]:"",!1));return;case"textarea":S=v=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ae(e,t,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==u&&ae(e,t,i,n,a,u)}qf(e,v,S);return;case"option":for(var C in l)if(v=l[C],l.hasOwnProperty(C)&&v!=null&&!a.hasOwnProperty(C))switch(C){case"selected":e.selected=!1;break;default:ae(e,t,C,null,a,v)}for(f in a)if(v=a[f],S=l[f],a.hasOwnProperty(f)&&v!==S&&(v!=null||S!=null))switch(f){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ae(e,t,f,v,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in l)v=l[x],l.hasOwnProperty(x)&&v!=null&&!a.hasOwnProperty(x)&&ae(e,t,x,null,a,v);for(m in a)if(v=a[m],S=l[m],a.hasOwnProperty(m)&&v!==S&&(v!=null||S!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(p(137,t));break;default:ae(e,t,m,v,a,S)}return;default:if(Pu(t)){for(var ne in l)v=l[ne],l.hasOwnProperty(ne)&&v!==void 0&&!a.hasOwnProperty(ne)&&Qc(e,t,ne,void 0,a,v);for(y in a)v=a[y],S=l[y],!a.hasOwnProperty(y)||v===S||v===void 0&&S===void 0||Qc(e,t,y,v,a,S);return}}for(var o in l)v=l[o],l.hasOwnProperty(o)&&v!=null&&!a.hasOwnProperty(o)&&ae(e,t,o,null,a,v);for(b in a)v=a[b],S=l[b],!a.hasOwnProperty(b)||v===S||v==null&&S==null||ae(e,t,b,v,a,S)}function jo(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&jo(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],m=f.startTime;if(m>c)break;var y=f.transferSize,b=f.initiatorType;y&&jo(b)&&(f=f.responseEnd,i+=y*(f<c?1:(c-m)/(f-m)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gc=null,Yc=null;function Cu(e){return e.nodeType===9?e:e.ownerDocument}function No(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bo(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=null;function hv(){var e=window.event;return e&&e.type==="popstate"?e===Xc?!1:(Xc=e,!0):(Xc=null,!1)}var Lo=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(e){return Qo.resolve(null).then(e).catch(Ev)}:Lo;function Ev(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function Go(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Aa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")dn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,dn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[Oa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&dn(e.ownerDocument.body);l=n}while(l);Aa(t)}function Yo(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Zc(l),Fu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Tv(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Oa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Dv(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=pt(e.nextSibling),e===null))return null;return e}function Jo(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Av(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kc=null;function Xo(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return pt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Zo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function wo(e,t,l){switch(t=Cu(l),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fu(e)}var St=new Map,Vo=new Set;function zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=D.d;D.d={f:Cv,r:zv,D:Mv,C:Rv,L:Ov,m:qv,X:Uv,S:xv,M:_v};function Cv(){var e=Kt.f(),t=yu();return e||t}function zv(e){var t=Xl(e);t!==null&&t.tag===5&&t.type==="form"?fr(t):Kt.r(e)}var Ea=typeof document>"u"?null:document;function Ko(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var n=ft(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Vo.has(n)||(Vo.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Oe(t,"link",e),De(t),a.head.appendChild(t)))}}function Mv(e){Kt.D(e),Ko("dns-prefetch",e,null)}function Rv(e,t){Kt.C(e,t),Ko("preconnect",e,t)}function Ov(e,t,l){Kt.L(e,t,l);var a=Ea;if(a&&e&&t){var n='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ft(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ft(l.imageSizes)+'"]')):n+='[href="'+ft(e)+'"]';var u=n;switch(t){case"style":u=Ta(e);break;case"script":u=Da(e)}St.has(u)||(e=_({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),St.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(mn(u))||t==="script"&&a.querySelector(vn(u))||(t=a.createElement("link"),Oe(t,"link",e),De(t),a.head.appendChild(t)))}}function qv(e,t){Kt.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ft(a)+'"][href="'+ft(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Da(e)}if(!St.has(u)&&(e=_({rel:"modulepreload",href:e},t),St.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(u)))return}a=l.createElement("link"),Oe(a,"link",e),De(a),l.head.appendChild(a)}}}function xv(e,t,l){Kt.S(e,t,l);var a=Ea;if(a&&e){var n=Zl(a).hoistableStyles,u=Ta(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(mn(u)))c.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},l),(l=St.get(u))&&Wc(e,l);var f=i=a.createElement("link");De(f),Oe(f,"link",e),f._p=new Promise(function(m,y){f.onload=m,f.onerror=y}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Uv(e,t){Kt.X(e,t);var l=Ea;if(l&&e){var a=Zl(l).hoistableScripts,n=Da(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=_({src:e,async:!0},t),(t=St.get(n))&&Fc(e,t),u=l.createElement("script"),De(u),Oe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function _v(e,t){Kt.M(e,t);var l=Ea;if(l&&e){var a=Zl(l).hoistableScripts,n=Da(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=_({src:e,async:!0,type:"module"},t),(t=St.get(n))&&Fc(e,t),u=l.createElement("script"),De(u),Oe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Wo(e,t,l,a){var n=(n=Q.current)?zu(n):null;if(!n)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ta(l.href),l=Zl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ta(l.href);var u=Zl(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(mn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),St.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},St.set(e,l),u||Hv(n,e,l,i.state))),t&&a===null)throw Error(p(528,""));return i}if(t&&a!==null)throw Error(p(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Da(l),l=Zl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Ta(e){return'href="'+ft(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Fo(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Hv(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Oe(t,"link",l),De(t),e.head.appendChild(t))}function Da(e){return'[src="'+ft(e)+'"]'}function vn(e){return"script[async]"+e}function ko(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ft(l.href)+'"]');if(a)return t.instance=a,De(a),a;var n=_({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),De(a),Oe(a,"style",n),Mu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ta(l.href);var u=e.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,De(u),u;a=Fo(l),(n=St.get(n))&&Wc(a,n),u=(e.ownerDocument||e).createElement("link"),De(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Oe(u,"link",a),t.state.loading|=4,Mu(u,l.precedence,e),t.instance=u;case"script":return u=Da(l.src),(n=e.querySelector(vn(u)))?(t.instance=n,De(n),n):(a=l,(n=St.get(u))&&(a=_({},l),Fc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),De(n),Oe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mu(a,l.precedence,e));return t.instance}function Mu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ru=null;function $o(e,t,l){if(Ru===null){var a=new Map,n=Ru=new Map;n.set(l,a)}else n=Ru,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[Oa]||u[Ce]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function Io(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function jv(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Po(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nv(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ta(a.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ou.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,De(u);return}u=t.ownerDocument||t,a=Fo(a),(n=St.get(n))&&Wc(a,n),u=u.createElement("link"),De(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Oe(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ou.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var kc=0;function Bv(e,t){return e.stylesheets&&e.count===0&&xu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&kc===0&&(kc=62500*yv());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>kc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qu=null;function xu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qu=new Map,t.forEach(Lv,e),qu=null,Ou.call(e))}function Lv(e,t){if(!(t.state.loading&4)){var l=qu.get(e);if(l)var a=l.get(null);else{l=new Map,qu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Ou.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:qe,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Qv(e,t,l,a,n,u,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.hiddenUpdates=wu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ed(e,t,l,a,n,u,i,c,f,m,y,b){return e=new Qv(e,t,l,i,f,m,y,b,c),t=1,u===!0&&(t|=24),u=et(3,null,null,t),e.current=u,u.stateNode=e,t=Oi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},_i(u),e}function td(e){return e?(e=ea,e):ea}function ld(e,t,l,a,n,u){n=td(n),a.context===null?a.context=n:a.pendingContext=n,a=al(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=nl(e,a,t),l!==null&&(Ke(l,e,t),Va(l,e,t))}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function $c(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=Ml(e,67108864);t!==null&&Ke(t,e,67108864),$c(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=ut();t=Vu(t);var l=Ml(e,t);l!==null&&Ke(l,e,t),$c(e,t)}}var Uu=!0;function Gv(e,t,l,a){var n=h.T;h.T=null;var u=D.p;try{D.p=2,Ic(e,t,l,a)}finally{D.p=u,h.T=n}}function Yv(e,t,l,a){var n=h.T;h.T=null;var u=D.p;try{D.p=8,Ic(e,t,l,a)}finally{D.p=u,h.T=n}}function Ic(e,t,l,a){if(Uu){var n=Pc(a);if(n===null)Lc(e,t,a,_u,l),cd(e,a);else if(Xv(n,e,t,l,a))a.stopPropagation();else if(cd(e,a),t&4&&-1<Jv.indexOf(e)){for(;n!==null;){var u=Xl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Tl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Ie(i);c.entanglements[1]|=f,i&=~f}Mt(u),(F&6)===0&&(pu=ke()+500,sn(0))}}break;case 31:case 13:c=Ml(u,2),c!==null&&Ke(c,u,2),yu(),$c(u,2)}if(u=Pc(a),u===null&&Lc(e,t,a,_u,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(e,t,a,null,l)}}function Pc(e){return e=ti(e),ef(e)}var _u=null;function ef(e){if(_u=null,e=Jl(e),e!==null){var t=W(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ve(t),e!==null)return e;e=null}else if(l===31){if(e=Ue(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _u=e,null}function id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case mf:return 2;case vf:return 8;case Tn:case Rd:return 32;case pf:return 268435456;default:return 32}default:return 32}}var tf=!1,pl=null,Sl=null,yl=null,Sn=new Map,yn=new Map,hl=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function hn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Xl(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xv(e,t,l,a,n){switch(t){case"focusin":return pl=hn(pl,e,t,l,a,n),!0;case"dragenter":return Sl=hn(Sl,e,t,l,a,n),!0;case"mouseover":return yl=hn(yl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return Sn.set(u,hn(Sn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,yn.set(u,hn(yn.get(u)||null,e,t,l,a,n)),!0}return!1}function fd(e){var t=Jl(e.target);if(t!==null){var l=W(t);if(l!==null){if(t=l.tag,t===13){if(t=ve(l),t!==null){e.blockedOn=t,Ef(e.priority,function(){ud(l)});return}}else if(t===31){if(t=Ue(l),t!==null){e.blockedOn=t,Ef(e.priority,function(){ud(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Pc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ei=a,l.target.dispatchEvent(a),ei=null}else return t=Xl(l),t!==null&&nd(t),e.blockedOn=l,!1;t.shift()}return!0}function sd(e,t,l){Hu(e)&&l.delete(t)}function Zv(){tf=!1,pl!==null&&Hu(pl)&&(pl=null),Sl!==null&&Hu(Sl)&&(Sl=null),yl!==null&&Hu(yl)&&(yl=null),Sn.forEach(sd),yn.forEach(sd)}function ju(e,t){e.blockedOn===t&&(e.blockedOn=null,tf||(tf=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Zv)))}var Nu=null;function rd(e){Nu!==e&&(Nu=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Nu===e&&(Nu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(ef(a||l)===null)continue;break}var u=Xl(l);u!==null&&(e.splice(t,3),t-=3,Pi(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Aa(e){function t(f){return ju(f,e)}pl!==null&&ju(pl,e),Sl!==null&&ju(Sl,e),yl!==null&&ju(yl,e),Sn.forEach(t),yn.forEach(t);for(var l=0;l<hl.length;l++){var a=hl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<hl.length&&(l=hl[0],l.blockedOn===null);)fd(l),l.blockedOn===null&&hl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Ye]||null;if(typeof u=="function")i||rd(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ye]||null)c=i.formAction;else if(ef(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),rd(l)}}}function od(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function lf(e){this._internalRoot=e}Bu.prototype.render=lf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var l=t.current,a=ut();ld(l,a,e,t,null,null)},Bu.prototype.unmount=lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ld(e.current,2,null,e,null,null),yu(),t[Yl]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=bf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<hl.length&&t!==0&&t<hl[l].priority;l++);hl.splice(l,0,e),l===0&&fd(e)}};var dd=oe.version;if(dd!=="19.2.4")throw Error(p(527,dd,"19.2.4"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=T(t),e=e!==null?$(e):null,e=e===null?null:e.stateNode,e};var wv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{za=Lu.inject(wv),$e=Lu}catch{}}return bn.createRoot=function(e,t){if(!U(e))throw Error(p(299));var l=!1,a="",n=hr,u=gr,i=br;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ed(e,1,!1,null,null,l,a,null,n,u,i,od),e[Yl]=t.current,Bc(e),new lf(t)},bn.hydrateRoot=function(e,t,l){if(!U(e))throw Error(p(299));var a=!1,n="",u=hr,i=gr,c=br,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),t=ed(e,1,!0,t,l??null,a,n,f,u,i,c,od),t.context=td(null),l=t.current,a=ut(),a=Vu(a),n=al(a),n.callback=null,nl(l,n,a),l=a,t.current.lanes=l,Ra(t,l),Mt(t),e[Yl]=t.current,Bc(e),new Bu(t)},bn.version="19.2.4",bn}var Td;function tp(){if(Td)return uf.exports;Td=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(oe){console.error(oe)}}return z(),uf.exports=ep(),uf.exports}var lp=tp();function ap(){const[z,oe]=Dd.useState(null),k=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
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
      
      `},{id:11,question:"11. Explain Servlet Architecture & Execution Process.",answer:"📌 Very common long question",codeExample:`
⭐ What is Servlet?

A Servlet is a Java program that runs on a web server and handles client requests.

👉 It is used to create dynamic web applications.


⭐ Servlet Architecture

Servlet architecture shows how client request is processed by servlet using web container.


⭐ Main Components

1️⃣ Client (Browser)
2️⃣ Web Server
3️⃣ Servlet Container (Tomcat)
4️⃣ Servlet
5️⃣ Database (optional)



⭐ Servlet Architecture Diagram (Important ⭐)

        +-------------+
        |   Client    |
        |  (Browser)  |
        +------+------+
               |
               | HTTP Request
               v
        +-------------+
        | Web Server  |
        +------+------+
               |
               v
        +----------------------+
        | Servlet Container    |
        |  (Tomcat)            |
        +----------+-----------+
                   |
                   v
              +----------+
              | Servlet  |
              +----------+
                   |
                   v
             +------------+
             | Database   |
             +------------+

               ^
               |
        HTTP Response



⭐ 6 Steps of Servlet Execution Process ⭐⭐⭐


1️⃣ Client Sends Request

User sends request from browser using URL.

Example:

    http://localhost:8080/MyApp


2️⃣ Web Server Receives Request

Web server receives HTTP request and forwards it to Servlet Container.


3️⃣ Servlet Container Loads Servlet

If servlet is not loaded:

    Container loads servlet class
    Creates servlet object


4️⃣ init() Method is Called (Only Once)

Container calls:

    init()

👉 Used for initialization (database connection etc.)


5️⃣ service() Method is Called

For every request:

    service()

👉 It calls:

doGet() → For GET request
doPost() → For POST request


6️⃣ destroy() Method is Called

When server stops:

    destroy()

👉 Used to release resources


⭐ Execution Flow Summary

Client → Server → Container → init()
                             → service()
                             → doGet()/doPost()
                             → destroy()


⭐ Servlet Life Cycle Methods (Very Important)

| Method           | Purpose               |
| ---------------- | --------------------- |
| init()           | Initialization (once) |
| service()        | Handle request        |
| doGet()/doPost() | Process request       |
| destroy()        | Cleanup               |


⭐ One-Line Exam Answer

Servlet architecture consists of client, web server, servlet container and servlet. The servlet execution 
process includes loading, initialization, service handling, and destruction.


🧠 Memory Trick

Load → init → service → destroy



⭐ Simple Servlet Example Program

// Import required packages
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet
public class HelloServlet extends HttpServlet {

    // Step 1: init() method (called only once)
    public void init() throws ServletException {
        System.out.println("Servlet is initialized...");
    }

    // Step 2: doGet() method (called for each request)
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException {

        // Set response type
        response.setContentType("text/html");

        // Create PrintWriter object
        PrintWriter out = response.getWriter();

        // Send response to browser
        out.println("<html><body>");
        out.println("<h2>Hello, Welcome to Servlet!</h2>");
        out.println("</body></html>");

        System.out.println("Request processed...");
    }

    // Step 3: destroy() method (called once when server stops)
    public void destroy() {
        System.out.println("Servlet is destroyed...");
    }
}



⭐ Step 2: web.xml Configuration
<web-app>

  <servlet>
    <servlet-name>HelloServlet</servlet-name>
    <servlet-class>HelloServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>HelloServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
  </servlet-mapping>

</web-app>



⭐ How It Works

1️⃣ User enters:

http://localhost:8080/MyApp/hello


2️⃣ Servlet container:

Loads servlet
Calls init()
Calls doGet()
Sends response
Calls destroy() when server stops


⭐ Output in Browser

Hello, Welcome to Servlet!


⭐ Life Cycle Flow (Program Based)

Load Servlet
     ↓
init()  (only once)
     ↓
doGet() / doPost()  (every request)
     ↓
destroy() (when server stops)


⭐ Viva Important Points

Servlet extends HttpServlet
doGet() handles GET request
PrintWriter sends output to browser
init() runs once
destroy() runs once



⭐ Important Note (Modern Concept)

In newer versions (Servlet 3.0+):
We can use annotations instead of web.xml.

Example:

    @WebServlet("/hello")

So web.xml is optional in modern applications.


⭐ One-Line Viva Answer

👉 web.xml tells the server which servlet handles which URL.
`},{id:12,question:"12. Explain Servlet Life Cycle with methods -> init(), service(), destroy()",answer:"📌 100% exam question",codeExample:`
⭐ Servlet Life Cycle

The Servlet Life Cycle describes how a servlet is:

👉 Loaded
👉 Initialized
👉 Handles requests
👉 Destroyed
      
It is controlled by the Servlet Container (Tomcat).


⭐ Life Cycle Diagram (Important for Exam ⭐)

        1. Loading
            ↓
        2. init()   (Called once)
            ↓
        3. service() (Called for each request)
            ↓
        4. destroy() (Called once)


⭐ 1️⃣ init() Method

🔹 Meaning:

Called only once when servlet is loaded.

🔹 Purpose:

Initialize resources
Open database connection
Load configuration

🔹 Syntax:

public void init() throws ServletException

🔹 Example:

public void init() {
    System.out.println("Servlet Initialized");
}

📌 Runs only one time.
      


⭐ 2️⃣ service() Method
🔹 Meaning:

Called every time client sends request.

🔹 Purpose:

Processes request

Generates response

🔹 Syntax:

public void service(HttpServletRequest req,
                    HttpServletResponse res)


🔹 Inside service():

It calls:

doGet() → For GET request
doPost() → For POST request


🔹 Example:

public void service(HttpServletRequest req,
                    HttpServletResponse res)
        throws ServletException, IOException {
    System.out.println("Request handled");
}

In HttpServlet, service() method internally calls doGet() and doPost(), so normally we override doGet() or 
doPost() instead of service().


📌 Runs multiple times (for each request).



⭐ 3️⃣ destroy() Method
🔹 Meaning:

Called only once before servlet is removed.

🔹 Purpose:

Close database connection
Release resources

🔹 Syntax:

public void destroy()

🔹 Example:

public void destroy() {
    System.out.println("Servlet Destroyed");
}

📌 Runs only once when server stops.



⭐ Complete Life Cycle Example

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LifeCycleServlet extends HttpServlet {

    public void init() {
        System.out.println("init() called");
    }

    public void service(HttpServletRequest req,
                        HttpServletResponse res)
            throws IOException {
        System.out.println("service() called");
    }

    public void destroy() {
        System.out.println("destroy() called");
    }
}


⭐ Life Cycle Summary Table

| Method    | Called When        | How Many Times |
| --------- | ------------------ | -------------- |
| init()    | When servlet loads | Once           |
| service() | For every request  | Multiple times |
| destroy() | Before removal     | Once           |


⭐ One-Line Exam Answer

Servlet life cycle consists of init(), service(), and destroy() methods managed by the servlet container.


🧠 Memory Trick

I → S → D

init → service → destroy
`},{id:13,question:"13. Differentiate between CGI and Servlet",answer:"",codeExample:`
⭐ Difference Between CGI and Servlet

| CGI                                  | Servlet                                   |
| ------------------------------------ | ----------------------------------------- |
| Stands for Common Gateway Interface  | Java-based server-side technology         |
| Creates new process for each request | Uses single process with multiple threads |
| Slow performance                     | Faster performance                        |
| Written in C, C++, Perl etc.         | Written in Java                           |
| Platform dependent                   | Platform independent                      |
| High memory usage                    | Low memory usage                          |
| Less secure                          | More secure                               |
| Difficult to maintain                | Easy to maintain                          |


⭐ Why CGI is Slow?

In CGI:

For every client request:

    New process is created
    Memory is allocated
    Process is destroyed

This makes it slow and heavy.


⭐ Why Servlet is Fast?

In Servlet:

    Only one instance is created
    Multiple threads handle requests
    No new process each time

👉 That’s why servlet is much faster.


⭐ Simple Diagram (Easy to Draw)

CGI Model

Client → Server → New Process → Response
Client → Server → New Process → Response


Servlet Model

Client → Server → Single Servlet Instance
                     |
                   Threads
                     |
                  Response


⭐ One-Line Exam Answer

CGI creates a new process for every request, while Servlet uses multithreading in a single process, making 
it faster and more efficient.

🧠 Memory Trick

CGI → Process
Servlet → Thread

Process = Heavy
Thread = Light                  `},{id:14,question:"14. Explain GenericServlet and HttpServlet 👉 Difference 👉 doGet() vs doPost()",answer:"📌 Important for theory + viva",codeExample:`
⭐ 1️⃣ GenericServlet
🔹 Meaning

GenericServlet is an abstract class in Java used to create servlets that are protocol-independent.

📌 It works with any protocol (HTTP, FTP etc.)

🔹 Package

javax.servlet

🔹 Important Point
You must override:

service()

Because GenericServlet does not support doGet() or doPost().


🔹 Example

import java.io.*;
import javax.servlet.*;

public class MyGenericServlet extends GenericServlet {

    public void service(ServletRequest req,
                        ServletResponse res)
            throws IOException {

        PrintWriter out = res.getWriter();
        out.println("Hello from GenericServlet");
    }
}



⭐ 2️⃣ HttpServlet
🔹 Meaning

HttpServlet is a subclass of GenericServlet used to create HTTP-based web applications.

📌 It works only with HTTP protocol.


🔹 Package

javax.servlet.http

🔹 Important Point

You override:

    doGet()
    doPost()

Instead of service().


🔹 Example

import java.io.*;
import javax.servlet.http.*;

public class MyHttpServlet extends HttpServlet {

    public void doGet(HttpServletRequest req,
                      HttpServletResponse res)
            throws IOException {

        PrintWriter out = res.getWriter();
        out.println("Hello from HttpServlet");
    }
}


⭐ Difference Between GenericServlet and HttpServlet

| GenericServlet                        | HttpServlet                                   |
| ------------------------------------- | --------------------------------------------- |
| Protocol independent                  | HTTP specific                                 |
| Overrides service()                   | Overrides doGet() / doPost()                  |
| Uses ServletRequest & ServletResponse | Uses HttpServletRequest & HttpServletResponse |
| Less powerful                         | More powerful                                 |
| Used rarely                           | Used commonly                                 |


⭐ doGet() vs doPost()

| doGet()                  | doPost()              |
| ------------------------ | --------------------- |
| Used for retrieving data | Used for sending data |
| Data visible in URL      | Data hidden in body   |
| Limited data size        | Large data allowed    |
| Less secure              | More secure           |
| Used for search pages    | Used for login forms  |


⭐ Example Difference

doGet()

public void doGet(HttpServletRequest req,
                  HttpServletResponse res)

doPost()

public void doPost(HttpServletRequest req,
                   HttpServletResponse res)


⭐ Simple Diagram

GenericServlet
        ↑
   HttpServlet
        ↑
   doGet() / doPost()


⭐ One-Line Exam Answer

GenericServlet is protocol-independent and overrides service(), while HttpServlet is HTTP-specific and 
overrides doGet() and doPost() methods.


🧠 Memory Trick

Generic → General
HTTP → Web

GET → Get data
POST → Send data
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1111,question:"how to download jar folder",answer:"",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],p=U=>{oe(z===U?null:U)};return Ne.jsxs("div",{className:"app-container",children:[Ne.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),Ne.jsx("div",{className:"questions-container",children:k.map(U=>Ne.jsxs("div",{className:"question-item",children:[Ne.jsx("button",{className:`question-button ${z===U.id?"active":""}`,onClick:()=>p(U.id),children:U.question}),z===U.id&&Ne.jsxs("div",{className:"answer-container",children:[Ne.jsxs("div",{className:"answer",children:[Ne.jsx("h3",{children:"Answer:"}),Ne.jsx("p",{children:U.answer})]}),U.codeExample&&Ne.jsxs("div",{className:"code-example",children:[Ne.jsx("h3",{children:"Code Example:"}),Ne.jsx("pre",{children:Ne.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}lp.createRoot(document.getElementById("root")).render(Ne.jsx(Dd.StrictMode,{children:Ne.jsx(ap,{})}));
