(function(){const rt=document.createElement("link").relList;if(rt&&rt.supports&&rt.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))y(R);new MutationObserver(R=>{for(const W of R)if(W.type==="childList")for(const vt of W.addedNodes)vt.tagName==="LINK"&&vt.rel==="modulepreload"&&y(vt)}).observe(document,{childList:!0,subtree:!0});function $(R){const W={};return R.integrity&&(W.integrity=R.integrity),R.referrerPolicy&&(W.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?W.credentials="include":R.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function y(R){if(R.ep)return;R.ep=!0;const W=$(R);fetch(R.href,W)}})();var af={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function wv(){if(md)return gu;md=1;var C=Symbol.for("react.transitional.element"),rt=Symbol.for("react.fragment");function $(y,R,W){var vt=null;if(W!==void 0&&(vt=""+W),R.key!==void 0&&(vt=""+R.key),"key"in R){W={};for(var Rt in R)Rt!=="key"&&(W[Rt]=R[Rt])}else W=R;return R=W.ref,{$$typeof:C,type:y,key:vt,ref:R!==void 0?R:null,props:W}}return gu.Fragment=rt,gu.jsx=$,gu.jsxs=$,gu}var vd;function Wv(){return vd||(vd=1,af.exports=wv()),af.exports}var xt=Wv(),uf={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Fv(){if(yd)return H;yd=1;var C=Symbol.for("react.transitional.element"),rt=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),st=Symbol.iterator;function Wt(o){return o===null||typeof o!="object"?null:(o=st&&o[st]||o["@@iterator"],typeof o=="function"?o:null)}var Qt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qt=Object.assign,Ol={};function Ft(o,E,z){this.props=o,this.context=E,this.refs=Ol,this.updater=z||Qt}Ft.prototype.isReactComponent={},Ft.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},Ft.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Wl(){}Wl.prototype=Ft.prototype;function Ut(o,E,z){this.props=o,this.context=E,this.refs=Ol,this.updater=z||Qt}var il=Ut.prototype=new Wl;il.constructor=Ut,qt(il,Ft.prototype),il.isPureReactComponent=!0;var El=Array.isArray;function jt(){}var Z={H:null,A:null,T:null,S:null},Yt=Object.prototype.hasOwnProperty;function Dl(o,E,z){var M=z.ref;return{$$typeof:C,type:o,key:E,ref:M!==void 0?M:null,props:z}}function Le(o,E){return Dl(o.type,E,o.props)}function Tl(o){return typeof o=="object"&&o!==null&&o.$$typeof===C}function Lt(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(z){return E[z]})}var be=/\/+/g;function _l(o,E){return typeof o=="object"&&o!==null&&o.key!=null?Lt(""+o.key):E.toString(36)}function hl(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(jt,jt):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function g(o,E,z,M,x){var Y=typeof o;(Y==="undefined"||Y==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(Y){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case C:case rt:I=!0;break;case k:return I=o._init,g(I(o._payload),E,z,M,x)}}if(I)return x=x(o),I=M===""?"."+_l(o,0):M,El(x)?(z="",I!=null&&(z=I.replace(be,"$&/")+"/"),g(x,E,z,"",function(Aa){return Aa})):x!=null&&(Tl(x)&&(x=Le(x,z+(x.key==null||o&&o.key===x.key?"":(""+x.key).replace(be,"$&/")+"/")+I)),E.push(x)),1;I=0;var Bt=M===""?".":M+":";if(El(o))for(var yt=0;yt<o.length;yt++)M=o[yt],Y=Bt+_l(M,yt),I+=g(M,E,z,Y,x);else if(yt=Wt(o),typeof yt=="function")for(o=yt.call(o),yt=0;!(M=o.next()).done;)M=M.value,Y=Bt+_l(M,yt++),I+=g(M,E,z,Y,x);else if(Y==="object"){if(typeof o.then=="function")return g(hl(o),E,z,M,x);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function T(o,E,z){if(o==null)return o;var M=[],x=0;return g(o,M,"","",function(Y){return E.call(z,Y,x++)}),M}function B(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(z){(o._status===0||o._status===-1)&&(o._status=1,o._result=z)},function(z){(o._status===0||o._status===-1)&&(o._status=2,o._result=z)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var lt=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},nt={map:T,forEach:function(o,E,z){T(o,function(){E.apply(this,arguments)},z)},count:function(o){var E=0;return T(o,function(){E++}),E},toArray:function(o){return T(o,function(E){return E})||[]},only:function(o){if(!Tl(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return H.Activity=q,H.Children=nt,H.Component=Ft,H.Fragment=$,H.Profiler=R,H.PureComponent=Ut,H.StrictMode=y,H.Suspense=U,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,H.__COMPILER_RUNTIME={__proto__:null,c:function(o){return Z.H.useMemoCache(o)}},H.cache=function(o){return function(){return o.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(o,E,z){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var M=qt({},o.props),x=o.key;if(E!=null)for(Y in E.key!==void 0&&(x=""+E.key),E)!Yt.call(E,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&E.ref===void 0||(M[Y]=E[Y]);var Y=arguments.length-2;if(Y===1)M.children=z;else if(1<Y){for(var I=Array(Y),Bt=0;Bt<Y;Bt++)I[Bt]=arguments[Bt+2];M.children=I}return Dl(o.type,x,M)},H.createContext=function(o){return o={$$typeof:vt,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:W,_context:o},o},H.createElement=function(o,E,z){var M,x={},Y=null;if(E!=null)for(M in E.key!==void 0&&(Y=""+E.key),E)Yt.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(x[M]=E[M]);var I=arguments.length-2;if(I===1)x.children=z;else if(1<I){for(var Bt=Array(I),yt=0;yt<I;yt++)Bt[yt]=arguments[yt+2];x.children=Bt}if(o&&o.defaultProps)for(M in I=o.defaultProps,I)x[M]===void 0&&(x[M]=I[M]);return Dl(o,Y,x)},H.createRef=function(){return{current:null}},H.forwardRef=function(o){return{$$typeof:Rt,render:o}},H.isValidElement=Tl,H.lazy=function(o){return{$$typeof:k,_payload:{_status:-1,_result:o},_init:B}},H.memo=function(o,E){return{$$typeof:D,type:o,compare:E===void 0?null:E}},H.startTransition=function(o){var E=Z.T,z={};Z.T=z;try{var M=o(),x=Z.S;x!==null&&x(z,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(jt,lt)}catch(Y){lt(Y)}finally{E!==null&&z.types!==null&&(E.types=z.types),Z.T=E}},H.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},H.use=function(o){return Z.H.use(o)},H.useActionState=function(o,E,z){return Z.H.useActionState(o,E,z)},H.useCallback=function(o,E){return Z.H.useCallback(o,E)},H.useContext=function(o){return Z.H.useContext(o)},H.useDebugValue=function(){},H.useDeferredValue=function(o,E){return Z.H.useDeferredValue(o,E)},H.useEffect=function(o,E){return Z.H.useEffect(o,E)},H.useEffectEvent=function(o){return Z.H.useEffectEvent(o)},H.useId=function(){return Z.H.useId()},H.useImperativeHandle=function(o,E,z){return Z.H.useImperativeHandle(o,E,z)},H.useInsertionEffect=function(o,E){return Z.H.useInsertionEffect(o,E)},H.useLayoutEffect=function(o,E){return Z.H.useLayoutEffect(o,E)},H.useMemo=function(o,E){return Z.H.useMemo(o,E)},H.useOptimistic=function(o,E){return Z.H.useOptimistic(o,E)},H.useReducer=function(o,E,z){return Z.H.useReducer(o,E,z)},H.useRef=function(o){return Z.H.useRef(o)},H.useState=function(o){return Z.H.useState(o)},H.useSyncExternalStore=function(o,E,z){return Z.H.useSyncExternalStore(o,E,z)},H.useTransition=function(){return Z.H.useTransition()},H.version="19.2.4",H}var Sd;function of(){return Sd||(Sd=1,uf.exports=Fv()),uf.exports}var Td=of(),nf={exports:{}},pu={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function $v(){return hd||(hd=1,(function(C){function rt(g,T){var B=g.length;g.push(T);t:for(;0<B;){var lt=B-1>>>1,nt=g[lt];if(0<R(nt,T))g[lt]=T,g[B]=nt,B=lt;else break t}}function $(g){return g.length===0?null:g[0]}function y(g){if(g.length===0)return null;var T=g[0],B=g.pop();if(B!==T){g[0]=B;t:for(var lt=0,nt=g.length,o=nt>>>1;lt<o;){var E=2*(lt+1)-1,z=g[E],M=E+1,x=g[M];if(0>R(z,B))M<nt&&0>R(x,z)?(g[lt]=x,g[M]=B,lt=M):(g[lt]=z,g[E]=B,lt=E);else if(M<nt&&0>R(x,B))g[lt]=x,g[M]=B,lt=M;else break t}}return T}function R(g,T){var B=g.sortIndex-T.sortIndex;return B!==0?B:g.id-T.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;C.unstable_now=function(){return W.now()}}else{var vt=Date,Rt=vt.now();C.unstable_now=function(){return vt.now()-Rt}}var U=[],D=[],k=1,q=null,st=3,Wt=!1,Qt=!1,qt=!1,Ol=!1,Ft=typeof setTimeout=="function"?setTimeout:null,Wl=typeof clearTimeout=="function"?clearTimeout:null,Ut=typeof setImmediate<"u"?setImmediate:null;function il(g){for(var T=$(D);T!==null;){if(T.callback===null)y(D);else if(T.startTime<=g)y(D),T.sortIndex=T.expirationTime,rt(U,T);else break;T=$(D)}}function El(g){if(qt=!1,il(g),!Qt)if($(U)!==null)Qt=!0,jt||(jt=!0,Lt());else{var T=$(D);T!==null&&hl(El,T.startTime-g)}}var jt=!1,Z=-1,Yt=5,Dl=-1;function Le(){return Ol?!0:!(C.unstable_now()-Dl<Yt)}function Tl(){if(Ol=!1,jt){var g=C.unstable_now();Dl=g;var T=!0;try{t:{Qt=!1,qt&&(qt=!1,Wl(Z),Z=-1),Wt=!0;var B=st;try{l:{for(il(g),q=$(U);q!==null&&!(q.expirationTime>g&&Le());){var lt=q.callback;if(typeof lt=="function"){q.callback=null,st=q.priorityLevel;var nt=lt(q.expirationTime<=g);if(g=C.unstable_now(),typeof nt=="function"){q.callback=nt,il(g),T=!0;break l}q===$(U)&&y(U),il(g)}else y(U);q=$(U)}if(q!==null)T=!0;else{var o=$(D);o!==null&&hl(El,o.startTime-g),T=!1}}break t}finally{q=null,st=B,Wt=!1}T=void 0}}finally{T?Lt():jt=!1}}}var Lt;if(typeof Ut=="function")Lt=function(){Ut(Tl)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,_l=be.port2;be.port1.onmessage=Tl,Lt=function(){_l.postMessage(null)}}else Lt=function(){Ft(Tl,0)};function hl(g,T){Z=Ft(function(){g(C.unstable_now())},T)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(g){g.callback=null},C.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yt=0<g?Math.floor(1e3/g):5},C.unstable_getCurrentPriorityLevel=function(){return st},C.unstable_next=function(g){switch(st){case 1:case 2:case 3:var T=3;break;default:T=st}var B=st;st=T;try{return g()}finally{st=B}},C.unstable_requestPaint=function(){Ol=!0},C.unstable_runWithPriority=function(g,T){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var B=st;st=g;try{return T()}finally{st=B}},C.unstable_scheduleCallback=function(g,T,B){var lt=C.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?lt+B:lt):B=lt,g){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=B+nt,g={id:k++,callback:T,priorityLevel:g,startTime:B,expirationTime:nt,sortIndex:-1},B>lt?(g.sortIndex=B,rt(D,g),$(U)===null&&g===$(D)&&(qt?(Wl(Z),Z=-1):qt=!0,hl(El,B-lt))):(g.sortIndex=nt,rt(U,g),Qt||Wt||(Qt=!0,jt||(jt=!0,Lt()))),g},C.unstable_shouldYield=Le,C.unstable_wrapCallback=function(g){var T=st;return function(){var B=st;st=T;try{return g.apply(this,arguments)}finally{st=B}}}})(ff)),ff}var gd;function kv(){return gd||(gd=1,cf.exports=$v()),cf.exports}var sf={exports:{}},Nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Iv(){if(pd)return Nt;pd=1;var C=of();function rt(U){var D="https://react.dev/errors/"+U;if(1<arguments.length){D+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)D+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+U+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $(){}var y={d:{f:$,r:function(){throw Error(rt(522))},D:$,C:$,L:$,m:$,X:$,S:$,M:$},p:0,findDOMNode:null},R=Symbol.for("react.portal");function W(U,D,k){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:q==null?null:""+q,children:U,containerInfo:D,implementation:k}}var vt=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rt(U,D){if(U==="font")return"";if(typeof D=="string")return D==="use-credentials"?D:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Nt.createPortal=function(U,D){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D||D.nodeType!==1&&D.nodeType!==9&&D.nodeType!==11)throw Error(rt(299));return W(U,D,null,k)},Nt.flushSync=function(U){var D=vt.T,k=y.p;try{if(vt.T=null,y.p=2,U)return U()}finally{vt.T=D,y.p=k,y.d.f()}},Nt.preconnect=function(U,D){typeof U=="string"&&(D?(D=D.crossOrigin,D=typeof D=="string"?D==="use-credentials"?D:"":void 0):D=null,y.d.C(U,D))},Nt.prefetchDNS=function(U){typeof U=="string"&&y.d.D(U)},Nt.preinit=function(U,D){if(typeof U=="string"&&D&&typeof D.as=="string"){var k=D.as,q=Rt(k,D.crossOrigin),st=typeof D.integrity=="string"?D.integrity:void 0,Wt=typeof D.fetchPriority=="string"?D.fetchPriority:void 0;k==="style"?y.d.S(U,typeof D.precedence=="string"?D.precedence:void 0,{crossOrigin:q,integrity:st,fetchPriority:Wt}):k==="script"&&y.d.X(U,{crossOrigin:q,integrity:st,fetchPriority:Wt,nonce:typeof D.nonce=="string"?D.nonce:void 0})}},Nt.preinitModule=function(U,D){if(typeof U=="string")if(typeof D=="object"&&D!==null){if(D.as==null||D.as==="script"){var k=Rt(D.as,D.crossOrigin);y.d.M(U,{crossOrigin:k,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0})}}else D==null&&y.d.M(U)},Nt.preload=function(U,D){if(typeof U=="string"&&typeof D=="object"&&D!==null&&typeof D.as=="string"){var k=D.as,q=Rt(k,D.crossOrigin);y.d.L(U,k,{crossOrigin:q,integrity:typeof D.integrity=="string"?D.integrity:void 0,nonce:typeof D.nonce=="string"?D.nonce:void 0,type:typeof D.type=="string"?D.type:void 0,fetchPriority:typeof D.fetchPriority=="string"?D.fetchPriority:void 0,referrerPolicy:typeof D.referrerPolicy=="string"?D.referrerPolicy:void 0,imageSrcSet:typeof D.imageSrcSet=="string"?D.imageSrcSet:void 0,imageSizes:typeof D.imageSizes=="string"?D.imageSizes:void 0,media:typeof D.media=="string"?D.media:void 0})}},Nt.preloadModule=function(U,D){if(typeof U=="string")if(D){var k=Rt(D.as,D.crossOrigin);y.d.m(U,{as:typeof D.as=="string"&&D.as!=="script"?D.as:void 0,crossOrigin:k,integrity:typeof D.integrity=="string"?D.integrity:void 0})}else y.d.m(U)},Nt.requestFormReset=function(U){y.d.r(U)},Nt.unstable_batchedUpdates=function(U,D){return U(D)},Nt.useFormState=function(U,D,k){return vt.H.useFormState(U,D,k)},Nt.useFormStatus=function(){return vt.H.useHostTransitionStatus()},Nt.version="19.2.4",Nt}var bd;function Pv(){if(bd)return sf.exports;bd=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(rt){console.error(rt)}}return C(),sf.exports=Iv(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ty(){if(Ed)return pu;Ed=1;var C=kv(),rt=of(),$=Pv();function y(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function W(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function vt(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function Rt(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function U(t){if(W(t)!==t)throw Error(y(188))}function D(t){var l=t.alternate;if(!l){if(l=W(t),l===null)throw Error(y(188));return l!==t?null:t}for(var e=t,a=l;;){var u=e.return;if(u===null)break;var n=u.alternate;if(n===null){if(a=u.return,a!==null){e=a;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===e)return U(u),t;if(n===a)return U(u),l;n=n.sibling}throw Error(y(188))}if(e.return!==a.return)e=u,a=n;else{for(var i=!1,c=u.child;c;){if(c===e){i=!0,e=u,a=n;break}if(c===a){i=!0,a=u,e=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===e){i=!0,e=n,a=u;break}if(c===a){i=!0,a=n,e=u;break}c=c.sibling}if(!i)throw Error(y(189))}}if(e.alternate!==a)throw Error(y(190))}if(e.tag!==3)throw Error(y(188));return e.stateNode.current===e?t:l}function k(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=k(t),l!==null)return l;t=t.sibling}return null}var q=Object.assign,st=Symbol.for("react.element"),Wt=Symbol.for("react.transitional.element"),Qt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Ft=Symbol.for("react.profiler"),Wl=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),jt=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Dl=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),Tl=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=Tl&&t[Tl]||t["@@iterator"],typeof t=="function"?t:null)}var be=Symbol.for("react.client.reference");function _l(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===be?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qt:return"Fragment";case Ft:return"Profiler";case Ol:return"StrictMode";case El:return"Suspense";case jt:return"SuspenseList";case Dl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Qt:return"Portal";case Ut:return t.displayName||"Context";case Wl:return(t._context.displayName||"Context")+".Consumer";case il:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return l=t.displayName||null,l!==null?l:_l(t.type)||"Memo";case Yt:l=t._payload,t=t._init;try{return _l(t(l))}catch{}}return null}var hl=Array.isArray,g=rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},lt=[],nt=-1;function o(t){return{current:t}}function E(t){0>nt||(t.current=lt[nt],lt[nt]=null,nt--)}function z(t,l){nt++,lt[nt]=t.current,t.current=l}var M=o(null),x=o(null),Y=o(null),I=o(null);function Bt(t,l){switch(z(Y,l),z(x,t),z(M,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?xr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=xr(l),t=Qr(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(M),z(M,t)}function yt(){E(M),E(x),E(Y)}function Aa(t){t.memoizedState!==null&&z(I,t);var l=M.current,e=Qr(l,t.type);l!==e&&(z(x,t),z(M,e))}function bu(t){x.current===t&&(E(M),E(x)),I.current===t&&(E(I),vu._currentValue=B)}var Yn,rf;function Ee(t){if(Yn===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);Yn=l&&l[1]||"",rf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yn+t+rf}var Ln=!1;function Gn(t,l){if(!t||Ln)return"";Ln=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var v=S}Reflect.construct(t,[],b)}else{try{b.call()}catch(S){v=S}t.call(b.prototype)}}else{try{throw Error()}catch(S){v=S}(b=t())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&v&&typeof S.stack=="string")return[S.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(a===f.length||u===m.length)for(a=f.length-1,u=m.length-1;1<=a&&0<=u&&f[a]!==m[u];)u--;for(;1<=a&&0<=u;a--,u--)if(f[a]!==m[u]){if(a!==1||u!==1)do if(a--,u--,0>u||f[a]!==m[u]){var h=`
`+f[a].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=a&&0<=u);break}}}finally{Ln=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function zd(t,l){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==l&&l!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Gn(t.type,!1);case 11:return Gn(t.type.render,!1);case 1:return Gn(t.type,!0);case 31:return Ee("Activity");default:return""}}function df(t){try{var l="",e=null;do l+=zd(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Jn=Object.prototype.hasOwnProperty,Xn=C.unstable_scheduleCallback,Zn=C.unstable_cancelCallback,Ad=C.unstable_shouldYield,Cd=C.unstable_requestPaint,$t=C.unstable_now,Md=C.unstable_getCurrentPriorityLevel,mf=C.unstable_ImmediatePriority,vf=C.unstable_UserBlockingPriority,Eu=C.unstable_NormalPriority,Od=C.unstable_LowPriority,yf=C.unstable_IdlePriority,_d=C.log,Ud=C.unstable_setDisableYieldValue,Ca=null,kt=null;function Fl(t){if(typeof _d=="function"&&Ud(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Ca,t)}catch{}}var It=Math.clz32?Math.clz32:qd,Nd=Math.log,Rd=Math.LN2;function qd(t){return t>>>=0,t===0?32:31-(Nd(t)/Rd|0)|0}var Du=256,Tu=262144,zu=4194304;function De(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Au(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?u=De(a):(i&=c,i!==0?u=De(i):e||(e=c&~t,e!==0&&(u=De(e))))):(c=a&~n,c!==0?u=De(c):i!==0?u=De(i):e||(e=a&~t,e!==0&&(u=De(e)))),u===0?0:l!==0&&l!==u&&(l&n)===0&&(n=u&-u,e=l&-l,n>=e||n===32&&(e&4194048)!==0)?l:u}function Ma(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Bd(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(){var t=zu;return zu<<=1,(zu&62914560)===0&&(zu=4194304),t}function Vn(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Oa(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hd(t,l,e,a,u,n){var i=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(e=i&~e;0<e;){var h=31-It(e),b=1<<h;c[h]=0,f[h]=-1;var v=m[h];if(v!==null)for(m[h]=null,h=0;h<v.length;h++){var S=v[h];S!==null&&(S.lane&=-536870913)}e&=~b}a!==0&&hf(t,a,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~l))}function hf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-It(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function gf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-It(e),u=1<<a;u&l|t[a]&l&&(t[a]|=l),e&=~u}}function pf(t,l){var e=l&-l;return e=(e&42)!==0?1:Kn(e),(e&(t.suspendedLanes|l))!==0?0:e}function Kn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bf(){var t=T.p;return t!==0?t:(t=window.event,t===void 0?32:id(t.type))}function Ef(t,l){var e=T.p;try{return T.p=t,l()}finally{T.p=e}}var $l=Math.random().toString(36).slice(2),At="__reactFiber$"+$l,Gt="__reactProps$"+$l,Ge="__reactContainer$"+$l,Wn="__reactEvents$"+$l,xd="__reactListeners$"+$l,Qd="__reactHandles$"+$l,Df="__reactResources$"+$l,_a="__reactMarker$"+$l;function Fn(t){delete t[At],delete t[Gt],delete t[Wn],delete t[xd],delete t[Qd]}function Je(t){var l=t[At];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ge]||e[At]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=Zr(t);t!==null;){if(e=t[At])return e;t=Zr(t)}return l}t=e,e=t.parentNode}return null}function Xe(t){if(t=t[At]||t[Ge]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Ua(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(y(33))}function Ze(t){var l=t[Df];return l||(l=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Tt(t){t[_a]=!0}var Tf=new Set,zf={};function Te(t,l){Ve(t,l),Ve(t+"Capture",l)}function Ve(t,l){for(zf[t]=l,t=0;t<l.length;t++)Tf.add(l[t])}var jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Cf={};function Yd(t){return Jn.call(Cf,t)?!0:Jn.call(Af,t)?!1:jd.test(t)?Cf[t]=!0:(Af[t]=!0,!1)}function Cu(t,l,e){if(Yd(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function Mu(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Ul(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function cl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Ld(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function $n(t){if(!t._valueTracker){var l=Mf(t)?"checked":"value";t._valueTracker=Ld(t,l,""+t[l])}}function Of(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Mf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gd=/[\n"\\]/g;function fl(t){return t.replace(Gd,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function kn(t,l,e,a,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+cl(l)):t.value!==""+cl(l)&&(t.value=""+cl(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?In(t,i,cl(l)):e!=null?In(t,i,cl(e)):a!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+cl(c):t.removeAttribute("name")}function _f(t,l,e,a,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),l!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||l!=null)){$n(t);return}e=e!=null?""+cl(e):"",l=l!=null?""+cl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),$n(t)}function In(t,l,e){l==="number"&&Ou(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ke(t,l,e,a){if(t=t.options,l){l={};for(var u=0;u<e.length;u++)l["$"+e[u]]=!0;for(e=0;e<t.length;e++)u=l.hasOwnProperty("$"+t[e].value),t[e].selected!==u&&(t[e].selected=u),u&&a&&(t[e].defaultSelected=!0)}else{for(e=""+cl(e),l=null,u=0;u<t.length;u++){if(t[u].value===e){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}l!==null||t[u].disabled||(l=t[u])}l!==null&&(l.selected=!0)}}function Uf(t,l,e){if(l!=null&&(l=""+cl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+cl(e):""}function Nf(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(y(92));if(hl(a)){if(1<a.length)throw Error(y(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=cl(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),$n(t)}function we(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||Jd.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function qf(t,l,e){if(l!=null&&typeof l!="object")throw Error(y(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in l)a=l[u],l.hasOwnProperty(u)&&e[u]!==a&&Rf(t,u,a)}else for(var n in l)l.hasOwnProperty(n)&&Rf(t,n,l[n])}function Pn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(t){return Zd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Nl(){}var ti=null;function li(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var We=null,Fe=null;function Bf(t){var l=Xe(t);if(l&&(t=l.stateNode)){var e=t[Gt]||null;t:switch(t=l.stateNode,l.type){case"input":if(kn(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+fl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var u=a[Gt]||null;if(!u)throw Error(y(90));kn(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Of(a)}break t;case"textarea":Uf(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&Ke(t,!!e.multiple,l,!1)}}}var ei=!1;function Hf(t,l,e){if(ei)return t(l,e);ei=!0;try{var a=t(l);return a}finally{if(ei=!1,(We!==null||Fe!==null)&&(hn(),We&&(l=We,t=Fe,Fe=We=null,Bf(l),t)))for(l=0;l<t.length;l++)Bf(t[l])}}function Na(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Gt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(y(231,l,typeof e));return e}var Rl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(Rl)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){ai=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{ai=!1}var kl=null,ui=null,Uu=null;function xf(){if(Uu)return Uu;var t,l=ui,e=l.length,a,u="value"in kl?kl.value:kl.textContent,n=u.length;for(t=0;t<e&&l[t]===u[t];t++);var i=e-t;for(a=1;a<=i&&l[e-a]===u[n-a];a++);return Uu=u.slice(t,1<a?1-a:void 0)}function Nu(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Ru(){return!0}function Qf(){return!1}function Jt(t){function l(e,a,u,n,i){this._reactName=e,this._targetInst=u,this.type=a,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ru:Qf,this.isPropagationStopped=Qf,this}return q(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),l}var ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=Jt(ze),qa=q({},ze,{view:0,detail:0}),Vd=Jt(qa),ni,ii,Ba,Bu=q({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(ni=t.screenX-Ba.screenX,ii=t.screenY-Ba.screenY):ii=ni=0,Ba=t),ni)},movementY:function(t){return"movementY"in t?t.movementY:ii}}),jf=Jt(Bu),Kd=q({},Bu,{dataTransfer:0}),wd=Jt(Kd),Wd=q({},qa,{relatedTarget:0}),ci=Jt(Wd),Fd=q({},ze,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Jt(Fd),kd=q({},ze,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Id=Jt(kd),Pd=q({},ze,{data:0}),Yf=Jt(Pd),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=em[t])?!!l[t]:!1}function fi(){return am}var um=q({},qa,{key:function(t){if(t.key){var l=tm[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(t){return t.type==="keypress"?Nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nm=Jt(um),im=q({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Jt(im),cm=q({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),fm=Jt(cm),sm=q({},ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Jt(sm),rm=q({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Jt(rm),mm=q({},ze,{newState:0,oldState:0}),vm=Jt(mm),ym=[9,13,27,32],si=Rl&&"CompositionEvent"in window,Ha=null;Rl&&"documentMode"in document&&(Ha=document.documentMode);var Sm=Rl&&"TextEvent"in window&&!Ha,Gf=Rl&&(!si||Ha&&8<Ha&&11>=Ha),Jf=" ",Xf=!1;function Zf(t,l){switch(t){case"keyup":return ym.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $e=!1;function hm(t,l){switch(t){case"compositionend":return Vf(l);case"keypress":return l.which!==32?null:(Xf=!0,Jf);case"textInput":return t=l.data,t===Jf&&Xf?null:t;default:return null}}function gm(t,l){if($e)return t==="compositionend"||!si&&Zf(t,l)?(t=xf(),Uu=ui=kl=null,$e=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Gf&&l.locale!=="ko"?null:l.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!pm[t.type]:l==="textarea"}function wf(t,l,e,a){We?Fe?Fe.push(a):Fe=[a]:We=a,l=zn(l,"onChange"),0<l.length&&(e=new qu("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var xa=null,Qa=null;function bm(t){Ur(t,0)}function Hu(t){var l=Ua(t);if(Of(l))return t}function Wf(t,l){if(t==="change")return l}var Ff=!1;if(Rl){var oi;if(Rl){var ri="oninput"in document;if(!ri){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),ri=typeof $f.oninput=="function"}oi=ri}else oi=!1;Ff=oi&&(!document.documentMode||9<document.documentMode)}function kf(){xa&&(xa.detachEvent("onpropertychange",If),Qa=xa=null)}function If(t){if(t.propertyName==="value"&&Hu(Qa)){var l=[];wf(l,Qa,t,li(t)),Hf(bm,l)}}function Em(t,l,e){t==="focusin"?(kf(),xa=l,Qa=e,xa.attachEvent("onpropertychange",If)):t==="focusout"&&kf()}function Dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Qa)}function Tm(t,l){if(t==="click")return Hu(l)}function zm(t,l){if(t==="input"||t==="change")return Hu(l)}function Am(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var Pt=typeof Object.is=="function"?Object.is:Am;function ja(t,l){if(Pt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var u=e[a];if(!Jn.call(l,u)||!Pt(t[u],l[u]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ts(t,l){var e=Pf(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Pf(e)}}function ls(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?ls(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function es(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Ou(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=Ou(t.document)}return l}function di(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Cm=Rl&&"documentMode"in document&&11>=document.documentMode,ke=null,mi=null,Ya=null,vi=!1;function as(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;vi||ke==null||ke!==Ou(a)||(a=ke,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ya&&ja(Ya,a)||(Ya=a,a=zn(mi,"onSelect"),0<a.length&&(l=new qu("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=ke)))}function Ae(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var Ie={animationend:Ae("Animation","AnimationEnd"),animationiteration:Ae("Animation","AnimationIteration"),animationstart:Ae("Animation","AnimationStart"),transitionrun:Ae("Transition","TransitionRun"),transitionstart:Ae("Transition","TransitionStart"),transitioncancel:Ae("Transition","TransitionCancel"),transitionend:Ae("Transition","TransitionEnd")},yi={},us={};Rl&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete Ie.animationend.animation,delete Ie.animationiteration.animation,delete Ie.animationstart.animation),"TransitionEvent"in window||delete Ie.transitionend.transition);function Ce(t){if(yi[t])return yi[t];if(!Ie[t])return t;var l=Ie[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in us)return yi[t]=l[e];return t}var ns=Ce("animationend"),is=Ce("animationiteration"),cs=Ce("animationstart"),Mm=Ce("transitionrun"),Om=Ce("transitionstart"),_m=Ce("transitioncancel"),fs=Ce("transitionend"),ss=new Map,Si="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Si.push("scrollEnd");function gl(t,l){ss.set(t,l),Te(l,[t])}var xu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},sl=[],Pe=0,hi=0;function Qu(){for(var t=Pe,l=hi=Pe=0;l<t;){var e=sl[l];sl[l++]=null;var a=sl[l];sl[l++]=null;var u=sl[l];sl[l++]=null;var n=sl[l];if(sl[l++]=null,a!==null&&u!==null){var i=a.pending;i===null?u.next=u:(u.next=i.next,i.next=u),a.pending=u}n!==0&&os(e,u,n)}}function ju(t,l,e,a){sl[Pe++]=t,sl[Pe++]=l,sl[Pe++]=e,sl[Pe++]=a,hi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function gi(t,l,e,a){return ju(t,l,e,a),Yu(t)}function Me(t,l){return ju(t,null,null,l),Yu(t)}function os(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var u=!1,n=t.return;n!==null;)n.childLanes|=e,a=n.alternate,a!==null&&(a.childLanes|=e),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&l!==null&&(u=31-It(e),t=n.hiddenUpdates,a=t[u],a===null?t[u]=[l]:a.push(l),l.lane=e|536870912),n):null}function Yu(t){if(50<cu)throw cu=0,Mc=null,Error(y(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var ta={};function Um(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tl(t,l,e,a){return new Um(t,l,e,a)}function pi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ql(t,l){var e=t.alternate;return e===null?(e=tl(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function rs(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Lu(t,l,e,a,u,n){var i=0;if(a=t,typeof t=="function")pi(t)&&(i=1);else if(typeof t=="string")i=Hv(t,e,M.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Dl:return t=tl(31,e,l,u),t.elementType=Dl,t.lanes=n,t;case qt:return Oe(e.children,u,n,l);case Ol:i=8,u|=24;break;case Ft:return t=tl(12,e,l,u|2),t.elementType=Ft,t.lanes=n,t;case El:return t=tl(13,e,l,u),t.elementType=El,t.lanes=n,t;case jt:return t=tl(19,e,l,u),t.elementType=jt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ut:i=10;break t;case Wl:i=9;break t;case il:i=11;break t;case Z:i=14;break t;case Yt:i=16,a=null;break t}i=29,e=Error(y(130,t===null?"null":typeof t,"")),a=null}return l=tl(i,e,l,u),l.elementType=t,l.type=a,l.lanes=n,l}function Oe(t,l,e,a){return t=tl(7,t,a,l),t.lanes=e,t}function bi(t,l,e){return t=tl(6,t,null,l),t.lanes=e,t}function ds(t){var l=tl(18,null,null,0);return l.stateNode=t,l}function Ei(t,l,e){return l=tl(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var ms=new WeakMap;function ol(t,l){if(typeof t=="object"&&t!==null){var e=ms.get(t);return e!==void 0?e:(l={value:t,source:l,stack:df(l)},ms.set(t,l),l)}return{value:t,source:l,stack:df(l)}}var la=[],ea=0,Gu=null,La=0,rl=[],dl=0,Il=null,zl=1,Al="";function Bl(t,l){la[ea++]=La,la[ea++]=Gu,Gu=t,La=l}function vs(t,l,e){rl[dl++]=zl,rl[dl++]=Al,rl[dl++]=Il,Il=t;var a=zl;t=Al;var u=32-It(a)-1;a&=~(1<<u),e+=1;var n=32-It(l)+u;if(30<n){var i=u-u%5;n=(a&(1<<i)-1).toString(32),a>>=i,u-=i,zl=1<<32-It(l)+u|e<<u|a,Al=n+t}else zl=1<<n|e<<u|a,Al=t}function Di(t){t.return!==null&&(Bl(t,1),vs(t,1,0))}function Ti(t){for(;t===Gu;)Gu=la[--ea],la[ea]=null,La=la[--ea],la[ea]=null;for(;t===Il;)Il=rl[--dl],rl[dl]=null,Al=rl[--dl],rl[dl]=null,zl=rl[--dl],rl[dl]=null}function ys(t,l){rl[dl++]=zl,rl[dl++]=Al,rl[dl++]=Il,zl=l.id,Al=l.overflow,Il=t}var Ct=null,ct=null,V=!1,Pl=null,ml=!1,zi=Error(y(519));function te(t){var l=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(ol(l,t)),zi}function Ss(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[At]=t,l[Gt]=a,e){case"dialog":G("cancel",l),G("close",l);break;case"iframe":case"object":case"embed":G("load",l);break;case"video":case"audio":for(e=0;e<su.length;e++)G(su[e],l);break;case"source":G("error",l);break;case"img":case"image":case"link":G("error",l),G("load",l);break;case"details":G("toggle",l);break;case"input":G("invalid",l),_f(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":G("invalid",l);break;case"textarea":G("invalid",l),Nf(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||Br(l.textContent,e)?(a.popover!=null&&(G("beforetoggle",l),G("toggle",l)),a.onScroll!=null&&G("scroll",l),a.onScrollEnd!=null&&G("scrollend",l),a.onClick!=null&&(l.onclick=Nl),l=!0):l=!1,l||te(t,!0)}function hs(t){for(Ct=t.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:ml=!1;return;case 27:case 3:ml=!0;return;default:Ct=Ct.return}}function aa(t){if(t!==Ct)return!1;if(!V)return hs(t),V=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Jc(t.type,t.memoizedProps)),e=!e),e&&ct&&te(t),hs(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ct=Xr(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ct=Xr(t)}else l===27?(l=ct,ve(t.type)?(t=wc,wc=null,ct=t):ct=l):ct=Ct?yl(t.stateNode.nextSibling):null;return!0}function _e(){ct=Ct=null,V=!1}function Ai(){var t=Pl;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),Pl=null),t}function Ga(t){Pl===null?Pl=[t]:Pl.push(t)}var Ci=o(null),Ue=null,Hl=null;function le(t,l,e){z(Ci,l._currentValue),l._currentValue=e}function xl(t){t._currentValue=Ci.current,E(Ci)}function Mi(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function Oi(t,l,e,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<l.length;f++)if(c.context===l[f]){n.lanes|=e,c=n.alternate,c!==null&&(c.lanes|=e),Mi(n.return,e,t),a||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(y(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),Mi(i,e,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ua(t,l,e,a){t=null;for(var u=l,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=u.type;Pt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===I.current){if(i=u.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(vu):t=[vu])}u=u.return}t!==null&&Oi(l,t,e,a),l.flags|=262144}function Ju(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ne(t){Ue=t,Hl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mt(t){return gs(Ue,t)}function Xu(t,l){return Ue===null&&Ne(t),gs(t,l)}function gs(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},Hl===null){if(t===null)throw Error(y(308));Hl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Hl=Hl.next=l;return e}var Nm=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},Rm=C.unstable_scheduleCallback,qm=C.unstable_NormalPriority,gt={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _i(){return{controller:new Nm,data:new Map,refCount:0}}function Ja(t){t.refCount--,t.refCount===0&&Rm(qm,function(){t.controller.abort()})}var Xa=null,Ui=0,na=0,ia=null;function Bm(t,l){if(Xa===null){var e=Xa=[];Ui=0,na=qc(),ia={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Ui++,l.then(ps,ps),l}function ps(){if(--Ui===0&&Xa!==null){ia!==null&&(ia.status="fulfilled");var t=Xa;Xa=null,na=0,ia=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function Hm(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(u){e.push(u)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var u=0;u<e.length;u++)(0,e[u])(l)},function(u){for(a.status="rejected",a.reason=u,u=0;u<e.length;u++)(0,e[u])(void 0)}),a}var bs=g.S;g.S=function(t,l){ur=$t(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Bm(t,l),bs!==null&&bs(t,l)};var Re=o(null);function Ni(){var t=Re.current;return t!==null?t:it.pooledCache}function Zu(t,l){l===null?z(Re,Re.current):z(Re,l.pool)}function Es(){var t=Ni();return t===null?null:{parent:gt._currentValue,pool:t}}var ca=Error(y(460)),Ri=Error(y(474)),Vu=Error(y(542)),Ku={then:function(){}};function Ds(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ts(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Nl,Nl),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,As(t),t;default:if(typeof l.status=="string")l.then(Nl,Nl);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var u=l;u.status="fulfilled",u.value=a}},function(a){if(l.status==="pending"){var u=l;u.status="rejected",u.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,As(t),t}throw Be=l,ca}}function qe(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Be=e,ca):e}}var Be=null;function zs(){if(Be===null)throw Error(y(459));var t=Be;return Be=null,t}function As(t){if(t===ca||t===Vu)throw Error(y(483))}var fa=null,Za=0;function wu(t){var l=Za;return Za+=1,fa===null&&(fa=[]),Ts(fa,t,l)}function Va(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Wu(t,l){throw l.$$typeof===st?Error(y(525)):(t=Object.prototype.toString.call(l),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Cs(t){function l(r,s){if(t){var d=r.deletions;d===null?(r.deletions=[s],r.flags|=16):d.push(s)}}function e(r,s){if(!t)return null;for(;s!==null;)l(r,s),s=s.sibling;return null}function a(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function u(r,s){return r=ql(r,s),r.index=0,r.sibling=null,r}function n(r,s,d){return r.index=d,t?(d=r.alternate,d!==null?(d=d.index,d<s?(r.flags|=67108866,s):d):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,d,p){return s===null||s.tag!==6?(s=bi(d,r.mode,p),s.return=r,s):(s=u(s,d),s.return=r,s)}function f(r,s,d,p){var _=d.type;return _===qt?h(r,s,d.props.children,p,d.key):s!==null&&(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Yt&&qe(_)===s.type)?(s=u(s,d.props),Va(s,d),s.return=r,s):(s=Lu(d.type,d.key,d.props,null,r.mode,p),Va(s,d),s.return=r,s)}function m(r,s,d,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ei(d,r.mode,p),s.return=r,s):(s=u(s,d.children||[]),s.return=r,s)}function h(r,s,d,p,_){return s===null||s.tag!==7?(s=Oe(d,r.mode,p,_),s.return=r,s):(s=u(s,d),s.return=r,s)}function b(r,s,d){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=bi(""+s,r.mode,d),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Wt:return d=Lu(s.type,s.key,s.props,null,r.mode,d),Va(d,s),d.return=r,d;case Qt:return s=Ei(s,r.mode,d),s.return=r,s;case Yt:return s=qe(s),b(r,s,d)}if(hl(s)||Lt(s))return s=Oe(s,r.mode,d,null),s.return=r,s;if(typeof s.then=="function")return b(r,wu(s),d);if(s.$$typeof===Ut)return b(r,Xu(r,s),d);Wu(r,s)}return null}function v(r,s,d,p){var _=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return _!==null?null:c(r,s,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wt:return d.key===_?f(r,s,d,p):null;case Qt:return d.key===_?m(r,s,d,p):null;case Yt:return d=qe(d),v(r,s,d,p)}if(hl(d)||Lt(d))return _!==null?null:h(r,s,d,p,null);if(typeof d.then=="function")return v(r,s,wu(d),p);if(d.$$typeof===Ut)return v(r,s,Xu(r,d),p);Wu(r,d)}return null}function S(r,s,d,p,_){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return r=r.get(d)||null,c(s,r,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wt:return r=r.get(p.key===null?d:p.key)||null,f(s,r,p,_);case Qt:return r=r.get(p.key===null?d:p.key)||null,m(s,r,p,_);case Yt:return p=qe(p),S(r,s,d,p,_)}if(hl(p)||Lt(p))return r=r.get(d)||null,h(s,r,p,_,null);if(typeof p.then=="function")return S(r,s,d,wu(p),_);if(p.$$typeof===Ut)return S(r,s,d,Xu(s,p),_);Wu(s,p)}return null}function A(r,s,d,p){for(var _=null,K=null,O=s,j=s=0,X=null;O!==null&&j<d.length;j++){O.index>j?(X=O,O=null):X=O.sibling;var w=v(r,O,d[j],p);if(w===null){O===null&&(O=X);break}t&&O&&w.alternate===null&&l(r,O),s=n(w,s,j),K===null?_=w:K.sibling=w,K=w,O=X}if(j===d.length)return e(r,O),V&&Bl(r,j),_;if(O===null){for(;j<d.length;j++)O=b(r,d[j],p),O!==null&&(s=n(O,s,j),K===null?_=O:K.sibling=O,K=O);return V&&Bl(r,j),_}for(O=a(O);j<d.length;j++)X=S(O,r,j,d[j],p),X!==null&&(t&&X.alternate!==null&&O.delete(X.key===null?j:X.key),s=n(X,s,j),K===null?_=X:K.sibling=X,K=X);return t&&O.forEach(function(pe){return l(r,pe)}),V&&Bl(r,j),_}function N(r,s,d,p){if(d==null)throw Error(y(151));for(var _=null,K=null,O=s,j=s=0,X=null,w=d.next();O!==null&&!w.done;j++,w=d.next()){O.index>j?(X=O,O=null):X=O.sibling;var pe=v(r,O,w.value,p);if(pe===null){O===null&&(O=X);break}t&&O&&pe.alternate===null&&l(r,O),s=n(pe,s,j),K===null?_=pe:K.sibling=pe,K=pe,O=X}if(w.done)return e(r,O),V&&Bl(r,j),_;if(O===null){for(;!w.done;j++,w=d.next())w=b(r,w.value,p),w!==null&&(s=n(w,s,j),K===null?_=w:K.sibling=w,K=w);return V&&Bl(r,j),_}for(O=a(O);!w.done;j++,w=d.next())w=S(O,r,j,w.value,p),w!==null&&(t&&w.alternate!==null&&O.delete(w.key===null?j:w.key),s=n(w,s,j),K===null?_=w:K.sibling=w,K=w);return t&&O.forEach(function(Kv){return l(r,Kv)}),V&&Bl(r,j),_}function ut(r,s,d,p){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Wt:t:{for(var _=d.key;s!==null;){if(s.key===_){if(_=d.type,_===qt){if(s.tag===7){e(r,s.sibling),p=u(s,d.props.children),p.return=r,r=p;break t}}else if(s.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Yt&&qe(_)===s.type){e(r,s.sibling),p=u(s,d.props),Va(p,d),p.return=r,r=p;break t}e(r,s);break}else l(r,s);s=s.sibling}d.type===qt?(p=Oe(d.props.children,r.mode,p,d.key),p.return=r,r=p):(p=Lu(d.type,d.key,d.props,null,r.mode,p),Va(p,d),p.return=r,r=p)}return i(r);case Qt:t:{for(_=d.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){e(r,s.sibling),p=u(s,d.children||[]),p.return=r,r=p;break t}else{e(r,s);break}else l(r,s);s=s.sibling}p=Ei(d,r.mode,p),p.return=r,r=p}return i(r);case Yt:return d=qe(d),ut(r,s,d,p)}if(hl(d))return A(r,s,d,p);if(Lt(d)){if(_=Lt(d),typeof _!="function")throw Error(y(150));return d=_.call(d),N(r,s,d,p)}if(typeof d.then=="function")return ut(r,s,wu(d),p);if(d.$$typeof===Ut)return ut(r,s,Xu(r,d),p);Wu(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,s!==null&&s.tag===6?(e(r,s.sibling),p=u(s,d),p.return=r,r=p):(e(r,s),p=bi(d,r.mode,p),p.return=r,r=p),i(r)):e(r,s)}return function(r,s,d,p){try{Za=0;var _=ut(r,s,d,p);return fa=null,_}catch(O){if(O===ca||O===Vu)throw O;var K=tl(29,O,null,r.mode);return K.lanes=p,K.return=r,K}finally{}}}var He=Cs(!0),Ms=Cs(!1),ee=!1;function qi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ae(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ue(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(F&2)!==0){var u=a.pending;return u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l,l=Yu(t),os(t,null,e),l}return ju(t,a,l,e),Yu(t)}function Ka(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,gf(t,e)}}function Hi(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var u=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?u=n=l:n=n.next=l}else u=n=l;e={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var xi=!1;function wa(){if(xi){var t=ia;if(t!==null)throw t}}function Wa(t,l,e,a){xi=!1;var u=t.updateQueue;ee=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var h=t.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==i&&(c===null?h.firstBaseUpdate=m:c.next=m,h.lastBaseUpdate=f))}if(n!==null){var b=u.baseState;i=0,h=m=f=null,c=n;do{var v=c.lane&-536870913,S=v!==c.lane;if(S?(J&v)===v:(a&v)===v){v!==0&&v===na&&(xi=!0),h!==null&&(h=h.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var A=t,N=c;v=l;var ut=e;switch(N.tag){case 1:if(A=N.payload,typeof A=="function"){b=A.call(ut,b,v);break t}b=A;break t;case 3:A.flags=A.flags&-65537|128;case 0:if(A=N.payload,v=typeof A=="function"?A.call(ut,b,v):A,v==null)break t;b=q({},b,v);break t;case 2:ee=!0}}v=c.callback,v!==null&&(t.flags|=64,S&&(t.flags|=8192),S=u.callbacks,S===null?u.callbacks=[v]:S.push(v))}else S={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(m=h=S,f=b):h=h.next=S,i|=v;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;S=c,c=S.next,S.next=null,u.lastBaseUpdate=S,u.shared.pending=null}}while(!0);h===null&&(f=b),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=h,n===null&&(u.shared.lanes=0),se|=i,t.lanes=i,t.memoizedState=b}}function Os(t,l){if(typeof t!="function")throw Error(y(191,t));t.call(l)}function _s(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Os(e[t],l)}var sa=o(null),Fu=o(0);function Us(t,l){t=Vl,z(Fu,t),z(sa,l),Vl=t|l.baseLanes}function Qi(){z(Fu,Vl),z(sa,sa.current)}function ji(){Vl=Fu.current,E(sa),E(Fu)}var ll=o(null),vl=null;function ne(t){var l=t.alternate;z(St,St.current&1),z(ll,t),vl===null&&(l===null||sa.current!==null||l.memoizedState!==null)&&(vl=t)}function Yi(t){z(St,St.current),z(ll,t),vl===null&&(vl=t)}function Ns(t){t.tag===22?(z(St,St.current),z(ll,t),vl===null&&(vl=t)):ie()}function ie(){z(St,St.current),z(ll,ll.current)}function el(t){E(ll),vl===t&&(vl=null),E(St)}var St=o(0);function $u(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Vc(e)||Kc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Ql=0,Q=null,et=null,pt=null,ku=!1,oa=!1,xe=!1,Iu=0,Fa=0,ra=null,xm=0;function dt(){throw Error(y(321))}function Li(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!Pt(t[e],l[e]))return!1;return!0}function Gi(t,l,e,a,u,n){return Ql=n,Q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,g.H=t===null||t.memoizedState===null?yo:ec,xe=!1,n=e(a,u),xe=!1,oa&&(n=qs(l,e,a,u)),Rs(t),n}function Rs(t){g.H=Ia;var l=et!==null&&et.next!==null;if(Ql=0,pt=et=Q=null,ku=!1,Fa=0,ra=null,l)throw Error(y(300));t===null||bt||(t=t.dependencies,t!==null&&Ju(t)&&(bt=!0))}function qs(t,l,e,a){Q=t;var u=0;do{if(oa&&(ra=null),Fa=0,oa=!1,25<=u)throw Error(y(301));if(u+=1,pt=et=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}g.H=So,n=l(e,a)}while(oa);return n}function Qm(){var t=g.H,l=t.useState()[0];return l=typeof l.then=="function"?$a(l):l,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(Q.flags|=1024),l}function Ji(){var t=Iu!==0;return Iu=0,t}function Xi(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Zi(t){if(ku){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}ku=!1}Ql=0,pt=et=Q=null,oa=!1,Fa=Iu=0,ra=null}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Q.memoizedState=pt=t:pt=pt.next=t,pt}function ht(){if(et===null){var t=Q.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var l=pt===null?Q.memoizedState:pt.next;if(l!==null)pt=l,et=t;else{if(t===null)throw Q.alternate===null?Error(y(467)):Error(y(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},pt===null?Q.memoizedState=pt=t:pt=pt.next=t}return pt}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(t){var l=Fa;return Fa+=1,ra===null&&(ra=[]),t=Ts(ra,t,l),l=Q,(pt===null?l.memoizedState:pt.next)===null&&(l=l.alternate,g.H=l===null||l.memoizedState===null?yo:ec),t}function tn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $a(t);if(t.$$typeof===Ut)return Mt(t)}throw Error(y(438,String(t)))}function Vi(t){var l=null,e=Q.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(u){return u.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=Pu(),Q.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=Le;return l.index++,e}function jl(t,l){return typeof l=="function"?l(t):l}function ln(t){var l=ht();return Ki(l,et,t)}function Ki(t,l,e){var a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=e;var u=t.baseQueue,n=a.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}l.baseQueue=u=n,a.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{l=u.next;var c=i=null,f=null,m=l,h=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(J&b)===b:(Ql&b)===b){var v=m.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===na&&(h=!0);else if((Ql&v)===v){m=m.next,v===na&&(h=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=b,i=n):f=f.next=b,Q.lanes|=v,se|=v;b=m.action,xe&&e(n,b),n=m.hasEagerState?m.eagerState:e(n,b)}else v={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=v,i=n):f=f.next=v,Q.lanes|=b,se|=b;m=m.next}while(m!==null&&m!==l);if(f===null?i=n:f.next=c,!Pt(n,t.memoizedState)&&(bt=!0,h&&(e=ia,e!==null)))throw e;t.memoizedState=n,t.baseState=i,t.baseQueue=f,a.lastRenderedState=n}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function wi(t){var l=ht(),e=l.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=t;var a=e.dispatch,u=e.pending,n=l.memoizedState;if(u!==null){e.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);Pt(n,l.memoizedState)||(bt=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),e.lastRenderedState=n}return[n,a]}function Bs(t,l,e){var a=Q,u=ht(),n=V;if(n){if(e===void 0)throw Error(y(407));e=e()}else e=l();var i=!Pt((et||u).memoizedState,e);if(i&&(u.memoizedState=e,bt=!0),u=u.queue,$i(Qs.bind(null,a,u,t),[t]),u.getSnapshot!==l||i||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},xs.bind(null,a,u,e,l),null),it===null)throw Error(y(349));n||(Ql&127)!==0||Hs(a,l,e)}return e}function Hs(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=Q.updateQueue,l===null?(l=Pu(),Q.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function xs(t,l,e,a){l.value=e,l.getSnapshot=a,js(l)&&Ys(t)}function Qs(t,l,e){return e(function(){js(l)&&Ys(t)})}function js(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!Pt(t,e)}catch{return!0}}function Ys(t){var l=Me(t,2);l!==null&&wt(l,t,2)}function Wi(t){var l=Ht();if(typeof t=="function"){var e=t;if(t=e(),xe){Fl(!0);try{e()}finally{Fl(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:t},l}function Ls(t,l,e,a){return t.baseState=e,Ki(t,et,typeof a=="function"?a:jl)}function jm(t,l,e,a,u){if(un(t))throw Error(y(485));if(t=l.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};g.T!==null?e(!0):n.isTransition=!1,a(n),e=l.pending,e===null?(n.next=l.pending=n,Gs(l,n)):(n.next=e.next,l.pending=e.next=n)}}function Gs(t,l){var e=l.action,a=l.payload,u=t.state;if(l.isTransition){var n=g.T,i={};g.T=i;try{var c=e(u,a),f=g.S;f!==null&&f(i,c),Js(t,l,c)}catch(m){Fi(t,l,m)}finally{n!==null&&i.types!==null&&(n.types=i.types),g.T=n}}else try{n=e(u,a),Js(t,l,n)}catch(m){Fi(t,l,m)}}function Js(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Xs(t,l,a)},function(a){return Fi(t,l,a)}):Xs(t,l,e)}function Xs(t,l,e){l.status="fulfilled",l.value=e,Zs(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Gs(t,e)))}function Fi(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,Zs(l),l=l.next;while(l!==a)}t.action=null}function Zs(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Vs(t,l){return l}function Ks(t,l){if(V){var e=it.formState;if(e!==null){t:{var a=Q;if(V){if(ct){l:{for(var u=ct,n=ml;u.nodeType!==8;){if(!n){u=null;break l}if(u=yl(u.nextSibling),u===null){u=null;break l}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ct=yl(u.nextSibling),a=u.data==="F!";break t}}te(a)}a=!1}a&&(l=e[0])}}return e=Ht(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:l},e.queue=a,e=ro.bind(null,Q,a),a.dispatch=e,a=Wi(!1),n=lc.bind(null,Q,!1,a.queue),a=Ht(),u={state:l,dispatch:null,action:t,pending:null},a.queue=u,e=jm.bind(null,Q,u,n,e),u.dispatch=e,a.memoizedState=t,[l,e,!1]}function ws(t){var l=ht();return Ws(l,et,t)}function Ws(t,l,e){if(l=Ki(t,l,Vs)[0],t=ln(jl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=$a(l)}catch(i){throw i===ca?Vu:i}else a=l;l=ht();var u=l.queue,n=u.dispatch;return e!==l.memoizedState&&(Q.flags|=2048,da(9,{destroy:void 0},Ym.bind(null,u,e),null)),[a,n,t]}function Ym(t,l){t.action=l}function Fs(t){var l=ht(),e=et;if(e!==null)return Ws(l,e,t);ht(),l=l.memoizedState,e=ht();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function da(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=Q.updateQueue,l===null&&(l=Pu(),Q.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function $s(){return ht().memoizedState}function en(t,l,e,a){var u=Ht();Q.flags|=t,u.memoizedState=da(1|l,{destroy:void 0},e,a===void 0?null:a)}function an(t,l,e,a){var u=ht();a=a===void 0?null:a;var n=u.memoizedState.inst;et!==null&&a!==null&&Li(a,et.memoizedState.deps)?u.memoizedState=da(l,n,e,a):(Q.flags|=t,u.memoizedState=da(1|l,n,e,a))}function ks(t,l){en(8390656,8,t,l)}function $i(t,l){an(2048,8,t,l)}function Lm(t){Q.flags|=4;var l=Q.updateQueue;if(l===null)l=Pu(),Q.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function Is(t){var l=ht().memoizedState;return Lm({ref:l,nextImpl:t}),function(){if((F&2)!==0)throw Error(y(440));return l.impl.apply(void 0,arguments)}}function Ps(t,l){return an(4,2,t,l)}function to(t,l){return an(4,4,t,l)}function lo(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function eo(t,l,e){e=e!=null?e.concat([t]):null,an(4,4,lo.bind(null,l,t),e)}function ki(){}function ao(t,l){var e=ht();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Li(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function uo(t,l){var e=ht();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Li(l,a[1]))return a[0];if(a=t(),xe){Fl(!0);try{t()}finally{Fl(!1)}}return e.memoizedState=[a,l],a}function Ii(t,l,e){return e===void 0||(Ql&1073741824)!==0&&(J&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=ir(),Q.lanes|=t,se|=t,e)}function no(t,l,e,a){return Pt(e,l)?e:sa.current!==null?(t=Ii(t,e,a),Pt(t,l)||(bt=!0),t):(Ql&42)===0||(Ql&1073741824)!==0&&(J&261930)===0?(bt=!0,t.memoizedState=e):(t=ir(),Q.lanes|=t,se|=t,l)}function io(t,l,e,a,u){var n=T.p;T.p=n!==0&&8>n?n:8;var i=g.T,c={};g.T=c,lc(t,!1,l,e);try{var f=u(),m=g.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=Hm(f,a);ka(t,l,h,nl(t))}else ka(t,l,a,nl(t))}catch(b){ka(t,l,{then:function(){},status:"rejected",reason:b},nl())}finally{T.p=n,i!==null&&c.types!==null&&(i.types=c.types),g.T=i}}function Gm(){}function Pi(t,l,e,a){if(t.tag!==5)throw Error(y(476));var u=co(t).queue;io(t,u,l,B,e===null?Gm:function(){return fo(t),e(a)})}function co(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:B},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function fo(t){var l=co(t);l.next===null&&(l=t.alternate.memoizedState),ka(t,l.next.queue,{},nl())}function tc(){return Mt(vu)}function so(){return ht().memoizedState}function oo(){return ht().memoizedState}function Jm(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=nl();t=ae(e);var a=ue(l,t,e);a!==null&&(wt(a,l,e),Ka(a,l,e)),l={cache:_i()},t.payload=l;return}l=l.return}}function Xm(t,l,e){var a=nl();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},un(t)?mo(l,e):(e=gi(t,l,e,a),e!==null&&(wt(e,t,a),vo(e,l,a)))}function ro(t,l,e){var a=nl();ka(t,l,e,a)}function ka(t,l,e,a){var u={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(un(t))mo(l,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var i=l.lastRenderedState,c=n(i,e);if(u.hasEagerState=!0,u.eagerState=c,Pt(c,i))return ju(t,l,u,0),it===null&&Qu(),!1}catch{}finally{}if(e=gi(t,l,u,a),e!==null)return wt(e,t,a),vo(e,l,a),!0}return!1}function lc(t,l,e,a){if(a={lane:2,revertLane:qc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},un(t)){if(l)throw Error(y(479))}else l=gi(t,e,a,2),l!==null&&wt(l,t,2)}function un(t){var l=t.alternate;return t===Q||l!==null&&l===Q}function mo(t,l){oa=ku=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function vo(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,gf(t,e)}}var Ia={readContext:Mt,use:tn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt};Ia.useEffectEvent=dt;var yo={readContext:Mt,use:tn,useCallback:function(t,l){return Ht().memoizedState=[t,l===void 0?null:l],t},useContext:Mt,useEffect:ks,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,en(4194308,4,lo.bind(null,l,t),e)},useLayoutEffect:function(t,l){return en(4194308,4,t,l)},useInsertionEffect:function(t,l){en(4,2,t,l)},useMemo:function(t,l){var e=Ht();l=l===void 0?null:l;var a=t();if(xe){Fl(!0);try{t()}finally{Fl(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=Ht();if(e!==void 0){var u=e(l);if(xe){Fl(!0);try{e(l)}finally{Fl(!1)}}}else u=l;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Xm.bind(null,Q,t),[a.memoizedState,t]},useRef:function(t){var l=Ht();return t={current:t},l.memoizedState=t},useState:function(t){t=Wi(t);var l=t.queue,e=ro.bind(null,Q,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:ki,useDeferredValue:function(t,l){var e=Ht();return Ii(e,t,l)},useTransition:function(){var t=Wi(!1);return t=io.bind(null,Q,t.queue,!0,!1),Ht().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=Q,u=Ht();if(V){if(e===void 0)throw Error(y(407));e=e()}else{if(e=l(),it===null)throw Error(y(349));(J&127)!==0||Hs(a,l,e)}u.memoizedState=e;var n={value:e,getSnapshot:l};return u.queue=n,ks(Qs.bind(null,a,n,t),[t]),a.flags|=2048,da(9,{destroy:void 0},xs.bind(null,a,n,e,l),null),e},useId:function(){var t=Ht(),l=it.identifierPrefix;if(V){var e=Al,a=zl;e=(a&~(1<<32-It(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=Iu++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=xm++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:tc,useFormState:Ks,useActionState:Ks,useOptimistic:function(t){var l=Ht();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=lc.bind(null,Q,!0,e),e.dispatch=l,[t,l]},useMemoCache:Vi,useCacheRefresh:function(){return Ht().memoizedState=Jm.bind(null,Q)},useEffectEvent:function(t){var l=Ht(),e={impl:t};return l.memoizedState=e,function(){if((F&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}},ec={readContext:Mt,use:tn,useCallback:ao,useContext:Mt,useEffect:$i,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:to,useMemo:uo,useReducer:ln,useRef:$s,useState:function(){return ln(jl)},useDebugValue:ki,useDeferredValue:function(t,l){var e=ht();return no(e,et.memoizedState,t,l)},useTransition:function(){var t=ln(jl)[0],l=ht().memoizedState;return[typeof t=="boolean"?t:$a(t),l]},useSyncExternalStore:Bs,useId:so,useHostTransitionStatus:tc,useFormState:ws,useActionState:ws,useOptimistic:function(t,l){var e=ht();return Ls(e,et,t,l)},useMemoCache:Vi,useCacheRefresh:oo};ec.useEffectEvent=Is;var So={readContext:Mt,use:tn,useCallback:ao,useContext:Mt,useEffect:$i,useImperativeHandle:eo,useInsertionEffect:Ps,useLayoutEffect:to,useMemo:uo,useReducer:wi,useRef:$s,useState:function(){return wi(jl)},useDebugValue:ki,useDeferredValue:function(t,l){var e=ht();return et===null?Ii(e,t,l):no(e,et.memoizedState,t,l)},useTransition:function(){var t=wi(jl)[0],l=ht().memoizedState;return[typeof t=="boolean"?t:$a(t),l]},useSyncExternalStore:Bs,useId:so,useHostTransitionStatus:tc,useFormState:Fs,useActionState:Fs,useOptimistic:function(t,l){var e=ht();return et!==null?Ls(e,et,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:oo};So.useEffectEvent=Is;function ac(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:q({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var uc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=nl(),u=ae(a);u.payload=l,e!=null&&(u.callback=e),l=ue(t,u,a),l!==null&&(wt(l,t,a),Ka(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=nl(),u=ae(a);u.tag=1,u.payload=l,e!=null&&(u.callback=e),l=ue(t,u,a),l!==null&&(wt(l,t,a),Ka(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=nl(),a=ae(e);a.tag=2,l!=null&&(a.callback=l),l=ue(t,a,e),l!==null&&(wt(l,t,e),Ka(l,t,e))}};function ho(t,l,e,a,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,i):l.prototype&&l.prototype.isPureReactComponent?!ja(e,a)||!ja(u,n):!0}function go(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&uc.enqueueReplaceState(l,l.state,null)}function Qe(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=q({},e));for(var u in t)e[u]===void 0&&(e[u]=t[u])}return e}function po(t){xu(t)}function bo(t){console.error(t)}function Eo(t){xu(t)}function nn(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function Do(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nc(t,l,e){return e=ae(e),e.tag=3,e.payload={element:null},e.callback=function(){nn(t,l)},e}function To(t){return t=ae(t),t.tag=3,t}function zo(t,l,e,a){var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var n=a.value;t.payload=function(){return u(n)},t.callback=function(){Do(l,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Do(l,e,a),typeof u!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Zm(t,l,e,a,u){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&ua(l,e,u,!0),e=ll.current,e!==null){switch(e.tag){case 31:case 13:return vl===null?gn():e.alternate===null&&mt===0&&(mt=3),e.flags&=-257,e.flags|=65536,e.lanes=u,a===Ku?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Uc(t,a,u)),!1;case 22:return e.flags|=65536,a===Ku?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Uc(t,a,u)),!1}throw Error(y(435,e.tag))}return Uc(t,a,u),gn(),!1}if(V)return l=ll.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=u,a!==zi&&(t=Error(y(422),{cause:a}),Ga(ol(t,e)))):(a!==zi&&(l=Error(y(423),{cause:a}),Ga(ol(l,e))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=ol(a,e),u=nc(t.stateNode,a,u),Hi(t,u),mt!==4&&(mt=2)),!1;var n=Error(y(520),{cause:a});if(n=ol(n,e),iu===null?iu=[n]:iu.push(n),mt!==4&&(mt=2),l===null)return!0;a=ol(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=u&-u,e.lanes|=t,t=nc(e.stateNode,a,t),Hi(e,t),!1;case 1:if(l=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(oe===null||!oe.has(n))))return e.flags|=65536,u&=-u,e.lanes|=u,u=To(u),zo(u,t,e,a),Hi(e,u),!1}e=e.return}while(e!==null);return!1}var ic=Error(y(461)),bt=!1;function Ot(t,l,e,a){l.child=t===null?Ms(l,null,e,a):He(l,t.child,e,a)}function Ao(t,l,e,a,u){e=e.render;var n=l.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ne(l),a=Gi(t,l,e,i,n,u),c=Ji(),t!==null&&!bt?(Xi(t,l,u),Yl(t,l,u)):(V&&c&&Di(l),l.flags|=1,Ot(t,l,a,u),l.child)}function Co(t,l,e,a,u){if(t===null){var n=e.type;return typeof n=="function"&&!pi(n)&&n.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=n,Mo(t,l,n,a,u)):(t=Lu(e.type,null,a,l,l.mode,u),t.ref=l.ref,t.return=l,l.child=t)}if(n=t.child,!vc(t,u)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:ja,e(i,a)&&t.ref===l.ref)return Yl(t,l,u)}return l.flags|=1,t=ql(n,a),t.ref=l.ref,t.return=l,l.child=t}function Mo(t,l,e,a,u){if(t!==null){var n=t.memoizedProps;if(ja(n,a)&&t.ref===l.ref)if(bt=!1,l.pendingProps=a=n,vc(t,u))(t.flags&131072)!==0&&(bt=!0);else return l.lanes=t.lanes,Yl(t,l,u)}return cc(t,l,e,a,u)}function Oo(t,l,e,a){var u=a.children,n=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,t!==null){for(a=l.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~n}else a=0,l.child=null;return _o(t,l,n,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zu(l,n!==null?n.cachePool:null),n!==null?Us(l,n):Qi(),Ns(l);else return a=l.lanes=536870912,_o(t,l,n!==null?n.baseLanes|e:e,e,a)}else n!==null?(Zu(l,n.cachePool),Us(l,n),ie(),l.memoizedState=null):(t!==null&&Zu(l,null),Qi(),ie());return Ot(t,l,u,e),l.child}function Pa(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function _o(t,l,e,a,u){var n=Ni();return n=n===null?null:{parent:gt._currentValue,pool:n},l.memoizedState={baseLanes:e,cachePool:n},t!==null&&Zu(l,null),Qi(),Ns(l),t!==null&&ua(t,l,a,!0),l.childLanes=u,null}function cn(t,l){return l=sn({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Uo(t,l,e){return He(l,t.child,null,e),t=cn(l,l.pendingProps),t.flags|=2,el(l),l.memoizedState=null,t}function Vm(t,l,e){var a=l.pendingProps,u=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(V){if(a.mode==="hidden")return t=cn(l,a),l.lanes=536870912,Pa(null,t);if(Yi(l),(t=ct)?(t=Jr(t,ml),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Il!==null?{id:zl,overflow:Al}:null,retryLane:536870912,hydrationErrors:null},e=ds(t),e.return=l,l.child=e,Ct=l,ct=null)):t=null,t===null)throw te(l);return l.lanes=536870912,null}return cn(l,a)}var n=t.memoizedState;if(n!==null){var i=n.dehydrated;if(Yi(l),u)if(l.flags&256)l.flags&=-257,l=Uo(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(y(558));else if(bt||ua(t,l,e,!1),u=(e&t.childLanes)!==0,bt||u){if(a=it,a!==null&&(i=pf(a,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,Me(t,i),wt(a,t,i),ic;gn(),l=Uo(t,l,e)}else t=n.treeContext,ct=yl(i.nextSibling),Ct=l,V=!0,Pl=null,ml=!1,t!==null&&ys(l,t),l=cn(l,a),l.flags|=4096;return l}return t=ql(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function fn(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(y(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function cc(t,l,e,a,u){return Ne(l),e=Gi(t,l,e,a,void 0,u),a=Ji(),t!==null&&!bt?(Xi(t,l,u),Yl(t,l,u)):(V&&a&&Di(l),l.flags|=1,Ot(t,l,e,u),l.child)}function No(t,l,e,a,u,n){return Ne(l),l.updateQueue=null,e=qs(l,a,e,u),Rs(t),a=Ji(),t!==null&&!bt?(Xi(t,l,n),Yl(t,l,n)):(V&&a&&Di(l),l.flags|=1,Ot(t,l,e,n),l.child)}function Ro(t,l,e,a,u){if(Ne(l),l.stateNode===null){var n=ta,i=e.contextType;typeof i=="object"&&i!==null&&(n=Mt(i)),n=new e(a,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=uc,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=a,n.state=l.memoizedState,n.refs={},qi(l),i=e.contextType,n.context=typeof i=="object"&&i!==null?Mt(i):ta,n.state=l.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ac(l,e,i,a),n.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&uc.enqueueReplaceState(n,n.state,null),Wa(l,a,n,u),wa(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){n=l.stateNode;var c=l.memoizedProps,f=Qe(e,c);n.props=f;var m=n.context,h=e.contextType;i=ta,typeof h=="object"&&h!==null&&(i=Mt(h));var b=e.getDerivedStateFromProps;h=typeof b=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&go(l,n,a,i),ee=!1;var v=l.memoizedState;n.state=v,Wa(l,a,n,u),wa(),m=l.memoizedState,c||v!==m||ee?(typeof b=="function"&&(ac(l,e,b,a),m=l.memoizedState),(f=ee||ho(l,e,f,a,v,m,i))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=m),n.props=a,n.state=m,n.context=i,a=f):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{n=l.stateNode,Bi(t,l),i=l.memoizedProps,h=Qe(e,i),n.props=h,b=l.pendingProps,v=n.context,m=e.contextType,f=ta,typeof m=="object"&&m!==null&&(f=Mt(m)),c=e.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==b||v!==f)&&go(l,n,a,f),ee=!1,v=l.memoizedState,n.state=v,Wa(l,a,n,u),wa();var S=l.memoizedState;i!==b||v!==S||ee||t!==null&&t.dependencies!==null&&Ju(t.dependencies)?(typeof c=="function"&&(ac(l,e,c,a),S=l.memoizedState),(h=ee||ho(l,e,h,a,v,S,f)||t!==null&&t.dependencies!==null&&Ju(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,S,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,S,f)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=S),n.props=a,n.state=S,n.context=f,a=h):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(l.flags|=1024),a=!1)}return n=a,fn(t,l),a=(l.flags&128)!==0,n||a?(n=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,t!==null&&a?(l.child=He(l,t.child,null,u),l.child=He(l,null,e,u)):Ot(t,l,e,u),l.memoizedState=n.state,t=l.child):t=Yl(t,l,u),t}function qo(t,l,e,a){return _e(),l.flags|=256,Ot(t,l,e,a),l.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Es()}}function oc(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=ul),t}function Bo(t,l,e){var a=l.pendingProps,u=!1,n=(l.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),i&&(u=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(V){if(u?ne(l):ie(),(t=ct)?(t=Jr(t,ml),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Il!==null?{id:zl,overflow:Al}:null,retryLane:536870912,hydrationErrors:null},e=ds(t),e.return=l,l.child=e,Ct=l,ct=null)):t=null,t===null)throw te(l);return Kc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,u?(ie(),u=l.mode,c=sn({mode:"hidden",children:c},u),a=Oe(a,u,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=sc(e),a.childLanes=oc(t,i,e),l.memoizedState=fc,Pa(null,a)):(ne(l),rc(l,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)l.flags&256?(ne(l),l.flags&=-257,l=dc(t,l,e)):l.memoizedState!==null?(ie(),l.child=t.child,l.flags|=128,l=null):(ie(),c=a.fallback,u=l.mode,a=sn({mode:"visible",children:a.children},u),c=Oe(c,u,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,He(l,t.child,null,e),a=l.child,a.memoizedState=sc(e),a.childLanes=oc(t,i,e),l.memoizedState=fc,l=Pa(null,a));else if(ne(l),Kc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(y(419)),a.stack="",a.digest=i,Ga({value:a,source:null,stack:null}),l=dc(t,l,e)}else if(bt||ua(t,l,e,!1),i=(e&t.childLanes)!==0,bt||i){if(i=it,i!==null&&(a=pf(i,e),a!==0&&a!==f.retryLane))throw f.retryLane=a,Me(t,a),wt(i,t,a),ic;Vc(c)||gn(),l=dc(t,l,e)}else Vc(c)?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,ct=yl(c.nextSibling),Ct=l,V=!0,Pl=null,ml=!1,t!==null&&ys(l,t),l=rc(l,a.children),l.flags|=4096);return l}return u?(ie(),c=a.fallback,u=l.mode,f=t.child,m=f.sibling,a=ql(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=ql(m,c):(c=Oe(c,u,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,Pa(null,a),a=l.child,c=t.child.memoizedState,c===null?c=sc(e):(u=c.cachePool,u!==null?(f=gt._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=Es(),c={baseLanes:c.baseLanes|e,cachePool:u}),a.memoizedState=c,a.childLanes=oc(t,i,e),l.memoizedState=fc,Pa(t.child,a)):(ne(l),e=t.child,t=e.sibling,e=ql(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e)}function rc(t,l){return l=sn({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function sn(t,l){return t=tl(22,t,null,l),t.lanes=0,t}function dc(t,l,e){return He(l,t.child,null,e),t=rc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Ho(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Mi(t.return,l,e)}function mc(t,l,e,a,u,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:u,treeForkCount:n}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=u,i.treeForkCount=n)}function xo(t,l,e){var a=l.pendingProps,u=a.revealOrder,n=a.tail;a=a.children;var i=St.current,c=(i&2)!==0;if(c?(i=i&1|2,l.flags|=128):i&=1,z(St,i),Ot(t,l,a,e),a=V?La:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ho(t,e,l);else if(t.tag===19)Ho(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(e=l.child,u=null;e!==null;)t=e.alternate,t!==null&&$u(t)===null&&(u=e),e=e.sibling;e=u,e===null?(u=l.child,l.child=null):(u=e.sibling,e.sibling=null),mc(l,!1,u,e,n,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,u=l.child,l.child=null;u!==null;){if(t=u.alternate,t!==null&&$u(t)===null){l.child=u;break}t=u.sibling,u.sibling=e,e=u,u=t}mc(l,!0,e,null,n,a);break;case"together":mc(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Yl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),se|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(ua(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(y(153));if(l.child!==null){for(t=l.child,e=ql(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=ql(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function vc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Ju(t)))}function Km(t,l,e){switch(l.tag){case 3:Bt(l,l.stateNode.containerInfo),le(l,gt,t.memoizedState.cache),_e();break;case 27:case 5:Aa(l);break;case 4:Bt(l,l.stateNode.containerInfo);break;case 10:le(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Yi(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(ne(l),l.flags|=128,null):(e&l.child.childLanes)!==0?Bo(t,l,e):(ne(l),t=Yl(t,l,e),t!==null?t.sibling:null);ne(l);break;case 19:var u=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(ua(t,l,e,!1),a=(e&l.childLanes)!==0),u){if(a)return xo(t,l,e);l.flags|=128}if(u=l.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(St,St.current),a)break;return null;case 22:return l.lanes=0,Oo(t,l,e,l.pendingProps);case 24:le(l,gt,t.memoizedState.cache)}return Yl(t,l,e)}function Qo(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)bt=!0;else{if(!vc(t,e)&&(l.flags&128)===0)return bt=!1,Km(t,l,e);bt=(t.flags&131072)!==0}else bt=!1,V&&(l.flags&1048576)!==0&&vs(l,La,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=qe(l.elementType),l.type=t,typeof t=="function")pi(t)?(a=Qe(t,a),l.tag=1,l=Ro(null,l,t,a,e)):(l.tag=0,l=cc(null,l,t,a,e));else{if(t!=null){var u=t.$$typeof;if(u===il){l.tag=11,l=Ao(null,l,t,a,e);break t}else if(u===Z){l.tag=14,l=Co(null,l,t,a,e);break t}}throw l=_l(t)||t,Error(y(306,l,""))}}return l;case 0:return cc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,u=Qe(a,l.pendingProps),Ro(t,l,a,u,e);case 3:t:{if(Bt(l,l.stateNode.containerInfo),t===null)throw Error(y(387));a=l.pendingProps;var n=l.memoizedState;u=n.element,Bi(t,l),Wa(l,a,null,e);var i=l.memoizedState;if(a=i.cache,le(l,gt,a),a!==n.cache&&Oi(l,[gt],e,!0),wa(),a=i.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=qo(t,l,a,e);break t}else if(a!==u){u=ol(Error(y(424)),l),Ga(u),l=qo(t,l,a,e);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ct=yl(t.firstChild),Ct=l,V=!0,Pl=null,ml=!0,e=Ms(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(_e(),a===u){l=Yl(t,l,e);break t}Ot(t,l,a,e)}l=l.child}return l;case 26:return fn(t,l),t===null?(e=Wr(l.type,null,l.pendingProps,null))?l.memoizedState=e:V||(e=l.type,t=l.pendingProps,a=An(Y.current).createElement(e),a[At]=l,a[Gt]=t,_t(a,e,t),Tt(a),l.stateNode=a):l.memoizedState=Wr(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Aa(l),t===null&&V&&(a=l.stateNode=Vr(l.type,l.pendingProps,Y.current),Ct=l,ml=!0,u=ct,ve(l.type)?(wc=u,ct=yl(a.firstChild)):ct=u),Ot(t,l,l.pendingProps.children,e),fn(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&V&&((u=a=ct)&&(a=Dv(a,l.type,l.pendingProps,ml),a!==null?(l.stateNode=a,Ct=l,ct=yl(a.firstChild),ml=!1,u=!0):u=!1),u||te(l)),Aa(l),u=l.type,n=l.pendingProps,i=t!==null?t.memoizedProps:null,a=n.children,Jc(u,n)?a=null:i!==null&&Jc(u,i)&&(l.flags|=32),l.memoizedState!==null&&(u=Gi(t,l,Qm,null,null,e),vu._currentValue=u),fn(t,l),Ot(t,l,a,e),l.child;case 6:return t===null&&V&&((t=e=ct)&&(e=Tv(e,l.pendingProps,ml),e!==null?(l.stateNode=e,Ct=l,ct=null,t=!0):t=!1),t||te(l)),null;case 13:return Bo(t,l,e);case 4:return Bt(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=He(l,null,a,e):Ot(t,l,a,e),l.child;case 11:return Ao(t,l,l.type,l.pendingProps,e);case 7:return Ot(t,l,l.pendingProps,e),l.child;case 8:return Ot(t,l,l.pendingProps.children,e),l.child;case 12:return Ot(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,le(l,l.type,a.value),Ot(t,l,a.children,e),l.child;case 9:return u=l.type._context,a=l.pendingProps.children,Ne(l),u=Mt(u),a=a(u),l.flags|=1,Ot(t,l,a,e),l.child;case 14:return Co(t,l,l.type,l.pendingProps,e);case 15:return Mo(t,l,l.type,l.pendingProps,e);case 19:return xo(t,l,e);case 31:return Vm(t,l,e);case 22:return Oo(t,l,e,l.pendingProps);case 24:return Ne(l),a=Mt(gt),t===null?(u=Ni(),u===null&&(u=it,n=_i(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=e),u=n),l.memoizedState={parent:a,cache:u},qi(l),le(l,gt,u)):((t.lanes&e)!==0&&(Bi(t,l),Wa(l,null,null,e),wa()),u=t.memoizedState,n=l.memoizedState,u.parent!==a?(u={parent:a,cache:a},l.memoizedState=u,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=u),le(l,gt,a)):(a=n.cache,le(l,gt,a),a!==u.cache&&Oi(l,[gt],e,!0))),Ot(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(y(156,l.tag))}function Ll(t){t.flags|=4}function yc(t,l,e,a,u){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(or())t.flags|=8192;else throw Be=Ku,Ri}else t.flags&=-16777217}function jo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pr(l))if(or())t.flags|=8192;else throw Be=Ku,Ri}function on(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Sf():536870912,t.lanes|=l,Sa|=l)}function tu(t,l){if(!V)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ft(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)e|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function wm(t,l,e){var a=l.pendingProps;switch(Ti(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(l),null;case 1:return ft(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),xl(gt),yt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(aa(l)?Ll(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Ai())),ft(l),null;case 26:var u=l.type,n=l.memoizedState;return t===null?(Ll(l),n!==null?(ft(l),jo(l,n)):(ft(l),yc(l,u,null,a,e))):n?n!==t.memoizedState?(Ll(l),ft(l),jo(l,n)):(ft(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ll(l),ft(l),yc(l,u,t,a,e)),null;case 27:if(bu(l),e=Y.current,u=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(y(166));return ft(l),null}t=M.current,aa(l)?Ss(l):(t=Vr(u,a,e),l.stateNode=t,Ll(l))}return ft(l),null;case 5:if(bu(l),u=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(!a){if(l.stateNode===null)throw Error(y(166));return ft(l),null}if(n=M.current,aa(l))Ss(l);else{var i=An(Y.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?i.createElement(u,{is:a.is}):i.createElement(u)}}n[At]=l,n[Gt]=a;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=n;t:switch(_t(n,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ll(l)}}return ft(l),yc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Ll(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(y(166));if(t=Y.current,aa(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,u=Ct,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[At]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Br(t.nodeValue,e)),t||te(l,!0)}else t=An(t).createTextNode(a),t[At]=l,l.stateNode=t}return ft(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=aa(l),e!==null){if(t===null){if(!a)throw Error(y(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[At]=l}else _e(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ft(l),t=!1}else e=Ai(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?(el(l),l):(el(l),null);if((l.flags&128)!==0)throw Error(y(558))}return ft(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=aa(l),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(y(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(y(317));u[At]=l}else _e(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ft(l),u=!1}else u=Ai(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return l.flags&256?(el(l),l):(el(l),null)}return el(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==u&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),on(l,l.updateQueue),ft(l),null);case 4:return yt(),t===null&&Qc(l.stateNode.containerInfo),ft(l),null;case 10:return xl(l.type),ft(l),null;case 19:if(E(St),a=l.memoizedState,a===null)return ft(l),null;if(u=(l.flags&128)!==0,n=a.rendering,n===null)if(u)tu(a,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(n=$u(t),n!==null){for(l.flags|=128,tu(a,!1),t=n.updateQueue,l.updateQueue=t,on(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)rs(e,t),e=e.sibling;return z(St,St.current&1|2),V&&Bl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&$t()>yn&&(l.flags|=128,u=!0,tu(a,!1),l.lanes=4194304)}else{if(!u)if(t=$u(n),t!==null){if(l.flags|=128,u=!0,t=t.updateQueue,l.updateQueue=t,on(l,t),tu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!V)return ft(l),null}else 2*$t()-a.renderingStartTime>yn&&e!==536870912&&(l.flags|=128,u=!0,tu(a,!1),l.lanes=4194304);a.isBackwards?(n.sibling=l.child,l.child=n):(t=a.last,t!==null?t.sibling=n:l.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=$t(),t.sibling=null,e=St.current,z(St,u?e&1|2:e&1),V&&Bl(l,a.treeForkCount),t):(ft(l),null);case 22:case 23:return el(l),ji(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(ft(l),l.subtreeFlags&6&&(l.flags|=8192)):ft(l),e=l.updateQueue,e!==null&&on(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&E(Re),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),xl(gt),ft(l),null;case 25:return null;case 30:return null}throw Error(y(156,l.tag))}function Wm(t,l){switch(Ti(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return xl(gt),yt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return bu(l),null;case 31:if(l.memoizedState!==null){if(el(l),l.alternate===null)throw Error(y(340));_e()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(el(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(y(340));_e()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return E(St),null;case 4:return yt(),null;case 10:return xl(l.type),null;case 22:case 23:return el(l),ji(),t!==null&&E(Re),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return xl(gt),null;case 25:return null;default:return null}}function Yo(t,l){switch(Ti(l),l.tag){case 3:xl(gt),yt();break;case 26:case 27:case 5:bu(l);break;case 4:yt();break;case 31:l.memoizedState!==null&&el(l);break;case 13:el(l);break;case 19:E(St);break;case 10:xl(l.type);break;case 22:case 23:el(l),ji(),t!==null&&E(Re);break;case 24:xl(gt)}}function lu(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var u=a.next;e=u;do{if((e.tag&t)===t){a=void 0;var n=e.create,i=e.inst;a=n(),i.destroy=a}e=e.next}while(e!==u)}}catch(c){tt(l,l.return,c)}}function ce(t,l,e){try{var a=l.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var n=u.next;a=n;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=l;var f=e,m=c;try{m()}catch(h){tt(u,f,h)}}}a=a.next}while(a!==n)}}catch(h){tt(l,l.return,h)}}function Lo(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{_s(l,e)}catch(a){tt(t,t.return,a)}}}function Go(t,l,e){e.props=Qe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){tt(t,l,a)}}function eu(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(u){tt(t,l,u)}}function Cl(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(u){tt(t,l,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(u){tt(t,l,u)}else e.current=null}function Jo(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(u){tt(t,t.return,u)}}function Sc(t,l,e){try{var a=t.stateNode;Sv(a,t.type,e,l),a[Gt]=l}catch(u){tt(t,t.return,u)}}function Xo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ve(t.type)||t.tag===4}function hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ve(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gc(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Nl));else if(a!==4&&(a===27&&ve(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(gc(t,l,e),t=t.sibling;t!==null;)gc(t,l,e),t=t.sibling}function rn(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&ve(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(rn(t,l,e),t=t.sibling;t!==null;)rn(t,l,e),t=t.sibling}function Zo(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);_t(l,a,e),l[At]=t,l[Gt]=e}catch(n){tt(t,t.return,n)}}var Gl=!1,Et=!1,pc=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,zt=null;function Fm(t,l){if(t=t.containerInfo,Lc=Rn,t=es(t),di(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var u=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break t}var i=0,c=-1,f=-1,m=0,h=0,b=t,v=null;l:for(;;){for(var S;b!==e||u!==0&&b.nodeType!==3||(c=i+u),b!==n||a!==0&&b.nodeType!==3||(f=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(S=b.firstChild)!==null;)v=b,b=S;for(;;){if(b===t)break l;if(v===e&&++m===u&&(c=i),v===n&&++h===a&&(f=i),(S=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=S}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Gc={focusedElem:t,selectionRange:e},Rn=!1,zt=l;zt!==null;)if(l=zt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,zt=t;else for(;zt!==null;){switch(l=zt,n=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)u=t[e],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,e=l,u=n.memoizedProps,n=n.memoizedState,a=e.stateNode;try{var A=Qe(e.type,u);t=a.getSnapshotBeforeUpdate(A,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(N){tt(e,e.return,N)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)Zc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=l.sibling,t!==null){t.return=l.return,zt=t;break}zt=l.return}}function Ko(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Xl(t,e),a&4&&lu(5,e);break;case 1:if(Xl(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(i){tt(e,e.return,i)}else{var u=Qe(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(u,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){tt(e,e.return,i)}}a&64&&Lo(e),a&512&&eu(e,e.return);break;case 3:if(Xl(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{_s(t,l)}catch(i){tt(e,e.return,i)}}break;case 27:l===null&&a&4&&Zo(e);case 26:case 5:Xl(t,e),l===null&&a&4&&Jo(e),a&512&&eu(e,e.return);break;case 12:Xl(t,e);break;case 31:Xl(t,e),a&4&&Fo(t,e);break;case 13:Xl(t,e),a&4&&$o(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=uv.bind(null,e),zv(t,e))));break;case 22:if(a=e.memoizedState!==null||Gl,!a){l=l!==null&&l.memoizedState!==null||Et,u=Gl;var n=Et;Gl=a,(Et=l)&&!n?Zl(t,e,(e.subtreeFlags&8772)!==0):Xl(t,e),Gl=u,Et=n}break;case 30:break;default:Xl(t,e)}}function wo(t){var l=t.alternate;l!==null&&(t.alternate=null,wo(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Fn(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Xt=!1;function Jl(t,l,e){for(e=e.child;e!==null;)Wo(t,l,e),e=e.sibling}function Wo(t,l,e){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ca,e)}catch{}switch(e.tag){case 26:Et||Cl(e,l),Jl(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||Cl(e,l);var a=ot,u=Xt;ve(e.type)&&(ot=e.stateNode,Xt=!1),Jl(t,l,e),ru(e.stateNode),ot=a,Xt=u;break;case 5:Et||Cl(e,l);case 6:if(a=ot,u=Xt,ot=null,Jl(t,l,e),ot=a,Xt=u,ot!==null)if(Xt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(e.stateNode)}catch(n){tt(e,l,n)}else try{ot.removeChild(e.stateNode)}catch(n){tt(e,l,n)}break;case 18:ot!==null&&(Xt?(t=ot,Lr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),za(t)):Lr(ot,e.stateNode));break;case 4:a=ot,u=Xt,ot=e.stateNode.containerInfo,Xt=!0,Jl(t,l,e),ot=a,Xt=u;break;case 0:case 11:case 14:case 15:ce(2,e,l),Et||ce(4,e,l),Jl(t,l,e);break;case 1:Et||(Cl(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Go(e,l,a)),Jl(t,l,e);break;case 21:Jl(t,l,e);break;case 22:Et=(a=Et)||e.memoizedState!==null,Jl(t,l,e),Et=a;break;default:Jl(t,l,e)}}function Fo(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{za(t)}catch(e){tt(l,l.return,e)}}}function $o(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{za(t)}catch(e){tt(l,l.return,e)}}function $m(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Vo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Vo),l;default:throw Error(y(435,t.tag))}}function dn(t,l){var e=$m(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var u=nv.bind(null,t,a);a.then(u,u)}})}function Zt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var u=e[a],n=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){ot=c.stateNode,Xt=!1;break t}break;case 5:ot=c.stateNode,Xt=!1;break t;case 3:case 4:ot=c.stateNode.containerInfo,Xt=!0;break t}c=c.return}if(ot===null)throw Error(y(160));Wo(n,i,u),ot=null,Xt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)ko(l,t),l=l.sibling}var pl=null;function ko(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zt(l,t),Vt(t),a&4&&(ce(3,t,t.return),lu(3,t),ce(5,t,t.return));break;case 1:Zt(l,t),Vt(t),a&512&&(Et||e===null||Cl(e,e.return)),a&64&&Gl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var u=pl;if(Zt(l,t),Vt(t),a&512&&(Et||e===null||Cl(e,e.return)),a&4){var n=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,u=u.ownerDocument||u;l:switch(a){case"title":n=u.getElementsByTagName("title")[0],(!n||n[_a]||n[At]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(a),u.head.insertBefore(n,u.querySelector("head > title"))),_t(n,a,e),n[At]=t,Tt(n),a=n;break t;case"link":var i=kr("link","href",u).get(a+(e.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(c,1);break l}}n=u.createElement(a),_t(n,a,e),u.head.appendChild(n);break;case"meta":if(i=kr("meta","content",u).get(a+(e.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(c,1);break l}}n=u.createElement(a),_t(n,a,e),u.head.appendChild(n);break;default:throw Error(y(468,a))}n[At]=t,Tt(n),a=n}t.stateNode=a}else Ir(u,t.type,t.stateNode);else t.stateNode=$r(u,a,t.memoizedProps);else n!==a?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,a===null?Ir(u,t.type,t.stateNode):$r(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Zt(l,t),Vt(t),a&512&&(Et||e===null||Cl(e,e.return)),e!==null&&a&4&&Sc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Zt(l,t),Vt(t),a&512&&(Et||e===null||Cl(e,e.return)),t.flags&32){u=t.stateNode;try{we(u,"")}catch(A){tt(t,t.return,A)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,Sc(t,u,e!==null?e.memoizedProps:u)),a&1024&&(pc=!0);break;case 6:if(Zt(l,t),Vt(t),a&4){if(t.stateNode===null)throw Error(y(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(A){tt(t,t.return,A)}}break;case 3:if(On=null,u=pl,pl=Cn(l.containerInfo),Zt(l,t),pl=u,Vt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{za(l.containerInfo)}catch(A){tt(t,t.return,A)}pc&&(pc=!1,Io(t));break;case 4:a=pl,pl=Cn(t.stateNode.containerInfo),Zt(l,t),Vt(t),pl=a;break;case 12:Zt(l,t),Vt(t);break;case 31:Zt(l,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 13:Zt(l,t),Vt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vn=$t()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 22:u=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,m=Gl,h=Et;if(Gl=m||u,Et=h||f,Zt(l,t),Et=h,Gl=m,Vt(t),a&8192)t:for(l=t.stateNode,l._visibility=u?l._visibility&-2:l._visibility|1,u&&(e===null||f||Gl||Et||je(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){f=e=l;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(A){tt(f,f.return,A)}}}else if(l.tag===6){if(e===null){f=l;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){tt(f,f.return,A)}}}else if(l.tag===18){if(e===null){f=l;try{var S=f.stateNode;u?Gr(S,!0):Gr(f.stateNode,!1)}catch(A){tt(f,f.return,A)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,dn(t,e))));break;case 19:Zt(l,t),Vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,dn(t,a)));break;case 30:break;case 21:break;default:Zt(l,t),Vt(t)}}function Vt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(Xo(a)){e=a;break}a=a.return}if(e==null)throw Error(y(160));switch(e.tag){case 27:var u=e.stateNode,n=hc(t);rn(t,n,u);break;case 5:var i=e.stateNode;e.flags&32&&(we(i,""),e.flags&=-33);var c=hc(t);rn(t,c,i);break;case 3:case 4:var f=e.stateNode.containerInfo,m=hc(t);gc(t,m,f);break;default:throw Error(y(161))}}catch(h){tt(t,t.return,h)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Io(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Io(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Xl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Ko(t,l.alternate,l),l=l.sibling}function je(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:ce(4,l,l.return),je(l);break;case 1:Cl(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&Go(l,l.return,e),je(l);break;case 27:ru(l.stateNode);case 26:case 5:Cl(l,l.return),je(l);break;case 22:l.memoizedState===null&&je(l);break;case 30:je(l);break;default:je(l)}t=t.sibling}}function Zl(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,u=t,n=l,i=n.flags;switch(n.tag){case 0:case 11:case 15:Zl(u,n,e),lu(4,n);break;case 1:if(Zl(u,n,e),a=n,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){tt(a,a.return,m)}if(a=n,u=a.updateQueue,u!==null){var c=a.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Os(f[u],c)}catch(m){tt(a,a.return,m)}}e&&i&64&&Lo(n),eu(n,n.return);break;case 27:Zo(n);case 26:case 5:Zl(u,n,e),e&&a===null&&i&4&&Jo(n),eu(n,n.return);break;case 12:Zl(u,n,e);break;case 31:Zl(u,n,e),e&&i&4&&Fo(u,n);break;case 13:Zl(u,n,e),e&&i&4&&$o(u,n);break;case 22:n.memoizedState===null&&Zl(u,n,e),eu(n,n.return);break;case 30:break;default:Zl(u,n,e)}l=l.sibling}}function bc(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Ja(e))}function Ec(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ja(t))}function bl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Po(t,l,e,a),l=l.sibling}function Po(t,l,e,a){var u=l.flags;switch(l.tag){case 0:case 11:case 15:bl(t,l,e,a),u&2048&&lu(9,l);break;case 1:bl(t,l,e,a);break;case 3:bl(t,l,e,a),u&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ja(t)));break;case 12:if(u&2048){bl(t,l,e,a),t=l.stateNode;try{var n=l.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){tt(l,l.return,f)}}else bl(t,l,e,a);break;case 31:bl(t,l,e,a);break;case 13:bl(t,l,e,a);break;case 23:break;case 22:n=l.stateNode,i=l.alternate,l.memoizedState!==null?n._visibility&2?bl(t,l,e,a):au(t,l):n._visibility&2?bl(t,l,e,a):(n._visibility|=2,ma(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),u&2048&&bc(i,l);break;case 24:bl(t,l,e,a),u&2048&&Ec(l.alternate,l);break;default:bl(t,l,e,a)}}function ma(t,l,e,a,u){for(u=u&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var n=t,i=l,c=e,f=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ma(n,i,c,f,u),lu(8,i);break;case 23:break;case 22:var h=i.stateNode;i.memoizedState!==null?h._visibility&2?ma(n,i,c,f,u):au(n,i):(h._visibility|=2,ma(n,i,c,f,u)),u&&m&2048&&bc(i.alternate,i);break;case 24:ma(n,i,c,f,u),u&&m&2048&&Ec(i.alternate,i);break;default:ma(n,i,c,f,u)}l=l.sibling}}function au(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,u=a.flags;switch(a.tag){case 22:au(e,a),u&2048&&bc(a.alternate,a);break;case 24:au(e,a),u&2048&&Ec(a.alternate,a);break;default:au(e,a)}l=l.sibling}}var uu=8192;function va(t,l,e){if(t.subtreeFlags&uu)for(t=t.child;t!==null;)tr(t,l,e),t=t.sibling}function tr(t,l,e){switch(t.tag){case 26:va(t,l,e),t.flags&uu&&t.memoizedState!==null&&xv(e,pl,t.memoizedState,t.memoizedProps);break;case 5:va(t,l,e);break;case 3:case 4:var a=pl;pl=Cn(t.stateNode.containerInfo),va(t,l,e),pl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=uu,uu=16777216,va(t,l,e),uu=a):va(t,l,e));break;default:va(t,l,e)}}function lr(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function nu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];zt=a,ar(a,t)}lr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)er(t),t=t.sibling}function er(t){switch(t.tag){case 0:case 11:case 15:nu(t),t.flags&2048&&ce(9,t,t.return);break;case 3:nu(t);break;case 12:nu(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,mn(t)):nu(t);break;default:nu(t)}}function mn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];zt=a,ar(a,t)}lr(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:ce(8,l,l.return),mn(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,mn(l));break;default:mn(l)}t=t.sibling}}function ar(t,l){for(;zt!==null;){var e=zt;switch(e.tag){case 0:case 11:case 15:ce(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,zt=a;else t:for(e=t;zt!==null;){a=zt;var u=a.sibling,n=a.return;if(wo(a),a===e){zt=null;break t}if(u!==null){u.return=n,zt=u;break t}zt=n}}}var km={getCacheForType:function(t){var l=Mt(gt),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Mt(gt).controller.signal}},Im=typeof WeakMap=="function"?WeakMap:Map,F=0,it=null,L=null,J=0,P=0,al=null,fe=!1,ya=!1,Dc=!1,Vl=0,mt=0,se=0,Ye=0,Tc=0,ul=0,Sa=0,iu=null,Kt=null,zc=!1,vn=0,ur=0,yn=1/0,Sn=null,oe=null,Dt=0,re=null,ha=null,Kl=0,Ac=0,Cc=null,nr=null,cu=0,Mc=null;function nl(){return(F&2)!==0&&J!==0?J&-J:g.T!==null?qc():bf()}function ir(){if(ul===0)if((J&536870912)===0||V){var t=Tu;Tu<<=1,(Tu&3932160)===0&&(Tu=262144),ul=t}else ul=536870912;return t=ll.current,t!==null&&(t.flags|=32),ul}function wt(t,l,e){(t===it&&(P===2||P===9)||t.cancelPendingCommit!==null)&&(ga(t,0),de(t,J,ul,!1)),Oa(t,e),((F&2)===0||t!==it)&&(t===it&&((F&2)===0&&(Ye|=e),mt===4&&de(t,J,ul,!1)),Ml(t))}function cr(t,l,e){if((F&6)!==0)throw Error(y(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Ma(t,l),u=a?lv(t,l):_c(t,l,!0),n=a;do{if(u===0){ya&&!a&&de(t,l,0,!1);break}else{if(e=t.current.alternate,n&&!Pm(e)){u=_c(t,l,!1),n=!1;continue}if(u===2){if(n=l,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;u=iu;var f=c.current.memoizedState.isDehydrated;if(f&&(ga(c,i).flags|=256),i=_c(c,i,!1),i!==2){if(Dc&&!f){c.errorRecoveryDisabledLanes|=n,Ye|=n,u=4;break t}n=Kt,Kt=u,n!==null&&(Kt===null?Kt=n:Kt.push.apply(Kt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){ga(t,0),de(t,l,0,!0);break}t:{switch(a=t,n=u,n){case 0:case 1:throw Error(y(345));case 4:if((l&4194048)!==l)break;case 6:de(a,l,ul,!fe);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(y(329))}if((l&62914560)===l&&(u=vn+300-$t(),10<u)){if(de(a,l,ul,!fe),Au(a,0,!0)!==0)break t;Kl=l,a.timeoutHandle=jr(fr.bind(null,a,e,Kt,Sn,zc,l,ul,Ye,Sa,fe,n,"Throttled",-0,0),u);break t}fr(a,e,Kt,Sn,zc,l,ul,Ye,Sa,fe,n,null,-0,0)}}break}while(!0);Ml(t)}function fr(t,l,e,a,u,n,i,c,f,m,h,b,v,S){if(t.timeoutHandle=-1,b=l.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nl},tr(l,n,b);var A=(n&62914560)===n?vn-$t():(n&4194048)===n?ur-$t():0;if(A=Qv(b,A),A!==null){Kl=n,t.cancelPendingCommit=A(Sr.bind(null,t,l,n,e,a,u,i,c,f,h,b,null,v,S)),de(t,n,i,!m);return}}Sr(t,l,n,e,a,u,i,c,f)}function Pm(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var u=e[a],n=u.getSnapshot;u=u.value;try{if(!Pt(n(),u))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function de(t,l,e,a){l&=~Tc,l&=~Ye,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var u=l;0<u;){var n=31-It(u),i=1<<n;a[n]=-1,u&=~i}e!==0&&hf(t,e,l)}function hn(){return(F&6)===0?(fu(0),!1):!0}function Oc(){if(L!==null){if(P===0)var t=L.return;else t=L,Hl=Ue=null,Zi(t),fa=null,Za=0,t=L;for(;t!==null;)Yo(t.alternate,t),t=t.return;L=null}}function ga(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,pv(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Kl=0,Oc(),it=t,L=e=ql(t.current,null),J=l,P=0,al=null,fe=!1,ya=Ma(t,l),Dc=!1,Sa=ul=Tc=Ye=se=mt=0,Kt=iu=null,zc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var u=31-It(a),n=1<<u;l|=t[u],a&=~n}return Vl=l,Qu(),e}function sr(t,l){Q=null,g.H=Ia,l===ca||l===Vu?(l=zs(),P=3):l===Ri?(l=zs(),P=4):P=l===ic?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,al=l,L===null&&(mt=1,nn(t,ol(l,t.current)))}function or(){var t=ll.current;return t===null?!0:(J&4194048)===J?vl===null:(J&62914560)===J||(J&536870912)!==0?t===vl:!1}function rr(){var t=g.H;return g.H=Ia,t===null?Ia:t}function dr(){var t=g.A;return g.A=km,t}function gn(){mt=4,fe||(J&4194048)!==J&&ll.current!==null||(ya=!0),(se&134217727)===0&&(Ye&134217727)===0||it===null||de(it,J,ul,!1)}function _c(t,l,e){var a=F;F|=2;var u=rr(),n=dr();(it!==t||J!==l)&&(Sn=null,ga(t,l)),l=!1;var i=mt;t:do try{if(P!==0&&L!==null){var c=L,f=al;switch(P){case 8:Oc(),i=6;break t;case 3:case 2:case 9:case 6:ll.current===null&&(l=!0);var m=P;if(P=0,al=null,pa(t,c,f,m),e&&ya){i=0;break t}break;default:m=P,P=0,al=null,pa(t,c,f,m)}}tv(),i=mt;break}catch(h){sr(t,h)}while(!0);return l&&t.shellSuspendCounter++,Hl=Ue=null,F=a,g.H=u,g.A=n,L===null&&(it=null,J=0,Qu()),i}function tv(){for(;L!==null;)mr(L)}function lv(t,l){var e=F;F|=2;var a=rr(),u=dr();it!==t||J!==l?(Sn=null,yn=$t()+500,ga(t,l)):ya=Ma(t,l);t:do try{if(P!==0&&L!==null){l=L;var n=al;l:switch(P){case 1:P=0,al=null,pa(t,l,n,1);break;case 2:case 9:if(Ds(n)){P=0,al=null,vr(l);break}l=function(){P!==2&&P!==9||it!==t||(P=7),Ml(t)},n.then(l,l);break t;case 3:P=7;break t;case 4:P=5;break t;case 7:Ds(n)?(P=0,al=null,vr(l)):(P=0,al=null,pa(t,l,n,7));break;case 5:var i=null;switch(L.tag){case 26:i=L.memoizedState;case 5:case 27:var c=L;if(i?Pr(i):c.stateNode.complete){P=0,al=null;var f=c.sibling;if(f!==null)L=f;else{var m=c.return;m!==null?(L=m,pn(m)):L=null}break l}}P=0,al=null,pa(t,l,n,5);break;case 6:P=0,al=null,pa(t,l,n,6);break;case 8:Oc(),mt=6;break t;default:throw Error(y(462))}}ev();break}catch(h){sr(t,h)}while(!0);return Hl=Ue=null,g.H=a,g.A=u,F=e,L!==null?0:(it=null,J=0,Qu(),mt)}function ev(){for(;L!==null&&!Ad();)mr(L)}function mr(t){var l=Qo(t.alternate,t,Vl);t.memoizedProps=t.pendingProps,l===null?pn(t):L=l}function vr(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=No(e,l,l.pendingProps,l.type,void 0,J);break;case 11:l=No(e,l,l.pendingProps,l.type.render,l.ref,J);break;case 5:Zi(l);default:Yo(e,l),l=L=rs(l,Vl),l=Qo(e,l,Vl)}t.memoizedProps=t.pendingProps,l===null?pn(t):L=l}function pa(t,l,e,a){Hl=Ue=null,Zi(l),fa=null,Za=0;var u=l.return;try{if(Zm(t,u,l,e,J)){mt=1,nn(t,ol(e,t.current)),L=null;return}}catch(n){if(u!==null)throw L=u,n;mt=1,nn(t,ol(e,t.current)),L=null;return}l.flags&32768?(V||a===1?t=!0:ya||(J&536870912)!==0?t=!1:(fe=t=!0,(a===2||a===9||a===3||a===6)&&(a=ll.current,a!==null&&a.tag===13&&(a.flags|=16384))),yr(l,t)):pn(l)}function pn(t){var l=t;do{if((l.flags&32768)!==0){yr(l,fe);return}t=l.return;var e=wm(l.alternate,l,Vl);if(e!==null){L=e;return}if(l=l.sibling,l!==null){L=l;return}L=l=t}while(l!==null);mt===0&&(mt=5)}function yr(t,l){do{var e=Wm(t.alternate,t);if(e!==null){e.flags&=32767,L=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){L=t;return}L=t=e}while(t!==null);mt=6,L=null}function Sr(t,l,e,a,u,n,i,c,f){t.cancelPendingCommit=null;do bn();while(Dt!==0);if((F&6)!==0)throw Error(y(327));if(l!==null){if(l===t.current)throw Error(y(177));if(n=l.lanes|l.childLanes,n|=hi,Hd(t,e,n,i,c,f),t===it&&(L=it=null,J=0),ha=l,re=t,Kl=e,Ac=n,Cc=u,nr=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iv(Eu,function(){return Er(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=g.T,g.T=null,u=T.p,T.p=2,i=F,F|=4;try{Fm(t,l,e)}finally{F=i,T.p=u,g.T=a}}Dt=1,hr(),gr(),pr()}}function hr(){if(Dt===1){Dt=0;var t=re,l=ha,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=g.T,g.T=null;var a=T.p;T.p=2;var u=F;F|=4;try{ko(l,t);var n=Gc,i=es(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&ls(c.ownerDocument.documentElement,c)){if(f!==null&&di(c)){var m=f.start,h=f.end;if(h===void 0&&(h=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(h,c.value.length);else{var b=c.ownerDocument||document,v=b&&b.defaultView||window;if(v.getSelection){var S=v.getSelection(),A=c.textContent.length,N=Math.min(f.start,A),ut=f.end===void 0?N:Math.min(f.end,A);!S.extend&&N>ut&&(i=ut,ut=N,N=i);var r=ts(c,N),s=ts(c,ut);if(r&&s&&(S.rangeCount!==1||S.anchorNode!==r.node||S.anchorOffset!==r.offset||S.focusNode!==s.node||S.focusOffset!==s.offset)){var d=b.createRange();d.setStart(r.node,r.offset),S.removeAllRanges(),N>ut?(S.addRange(d),S.extend(s.node,s.offset)):(d.setEnd(s.node,s.offset),S.addRange(d))}}}}for(b=[],S=c;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var p=b[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Rn=!!Lc,Gc=Lc=null}finally{F=u,T.p=a,g.T=e}}t.current=l,Dt=2}}function gr(){if(Dt===2){Dt=0;var t=re,l=ha,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=g.T,g.T=null;var a=T.p;T.p=2;var u=F;F|=4;try{Ko(t,l.alternate,l)}finally{F=u,T.p=a,g.T=e}}Dt=3}}function pr(){if(Dt===4||Dt===3){Dt=0,Cd();var t=re,l=ha,e=Kl,a=nr;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Dt=5:(Dt=0,ha=re=null,br(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(oe=null),wn(e),l=l.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ca,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=g.T,u=T.p,T.p=2,g.T=null;try{for(var n=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];n(c.value,{componentStack:c.stack})}}finally{g.T=l,T.p=u}}(Kl&3)!==0&&bn(),Ml(t),u=t.pendingLanes,(e&261930)!==0&&(u&42)!==0?t===Mc?cu++:(cu=0,Mc=t):cu=0,fu(0)}}function br(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Ja(l)))}function bn(){return hr(),gr(),pr(),Er()}function Er(){if(Dt!==5)return!1;var t=re,l=Ac;Ac=0;var e=wn(Kl),a=g.T,u=T.p;try{T.p=32>e?32:e,g.T=null,e=Cc,Cc=null;var n=re,i=Kl;if(Dt=0,ha=re=null,Kl=0,(F&6)!==0)throw Error(y(331));var c=F;if(F|=4,er(n.current),Po(n,n.current,i,e),F=c,fu(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ca,n)}catch{}return!0}finally{T.p=u,g.T=a,br(t,l)}}function Dr(t,l,e){l=ol(e,l),l=nc(t.stateNode,l,2),t=ue(t,l,2),t!==null&&(Oa(t,2),Ml(t))}function tt(t,l,e){if(t.tag===3)Dr(t,t,e);else for(;l!==null;){if(l.tag===3){Dr(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(oe===null||!oe.has(a))){t=ol(e,t),e=To(2),a=ue(l,e,2),a!==null&&(zo(e,a,l,t),Oa(a,2),Ml(a));break}}l=l.return}}function Uc(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new Im;var u=new Set;a.set(l,u)}else u=a.get(l),u===void 0&&(u=new Set,a.set(l,u));u.has(e)||(Dc=!0,u.add(e),t=av.bind(null,t,l,e),l.then(t,t))}function av(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,it===t&&(J&e)===e&&(mt===4||mt===3&&(J&62914560)===J&&300>$t()-vn?(F&2)===0&&ga(t,0):Tc|=e,Sa===J&&(Sa=0)),Ml(t)}function Tr(t,l){l===0&&(l=Sf()),t=Me(t,l),t!==null&&(Oa(t,l),Ml(t))}function uv(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),Tr(t,e)}function nv(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(e=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(l),Tr(t,e)}function iv(t,l){return Xn(t,l)}var En=null,ba=null,Nc=!1,Dn=!1,Rc=!1,me=0;function Ml(t){t!==ba&&t.next===null&&(ba===null?En=ba=t:ba=ba.next=t),Dn=!0,Nc||(Nc=!0,fv())}function fu(t,l){if(!Rc&&Dn){Rc=!0;do for(var e=!1,a=En;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var n=0;else{var i=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-It(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,Mr(a,n))}else n=J,n=Au(a,a===it?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Ma(a,n)||(e=!0,Mr(a,n));a=a.next}while(e);Rc=!1}}function cv(){zr()}function zr(){Dn=Nc=!1;var t=0;me!==0&&gv()&&(t=me);for(var l=$t(),e=null,a=En;a!==null;){var u=a.next,n=Ar(a,l);n===0?(a.next=null,e===null?En=u:e.next=u,u===null&&(ba=e)):(e=a,(t!==0||(n&3)!==0)&&(Dn=!0)),a=u}Dt!==0&&Dt!==5||fu(t),me!==0&&(me=0)}function Ar(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-It(n),c=1<<i,f=u[i];f===-1?((c&e)===0||(c&a)!==0)&&(u[i]=Bd(c,l)):f<=l&&(t.expiredLanes|=c),n&=~c}if(l=it,e=J,e=Au(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&(P===2||P===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zn(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Ma(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Zn(a),wn(e)){case 2:case 8:e=vf;break;case 32:e=Eu;break;case 268435456:e=yf;break;default:e=Eu}return a=Cr.bind(null,t),e=Xn(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Zn(a),t.callbackPriority=2,t.callbackNode=null,2}function Cr(t,l){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(bn()&&t.callbackNode!==e)return null;var a=J;return a=Au(t,t===it?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(cr(t,a,l),Ar(t,$t()),t.callbackNode!=null&&t.callbackNode===e?Cr.bind(null,t):null)}function Mr(t,l){if(bn())return null;cr(t,l,!0)}function fv(){bv(function(){(F&6)!==0?Xn(mf,cv):zr()})}function qc(){if(me===0){var t=na;t===0&&(t=Du,Du<<=1,(Du&261888)===0&&(Du=256)),me=t}return me}function Or(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_u(""+t)}function _r(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function sv(t,l,e,a,u){if(l==="submit"&&e&&e.stateNode===u){var n=Or((u[Gt]||null).action),i=a.submitter;i&&(l=(l=i[Gt]||null)?Or(l.formAction):i.getAttribute("formAction"),l!==null&&(n=l,i=null));var c=new qu("action","action",null,a,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(me!==0){var f=i?_r(u,i):new FormData(u);Pi(e,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?_r(u,i):new FormData(u),Pi(e,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Bc=0;Bc<Si.length;Bc++){var Hc=Si[Bc],ov=Hc.toLowerCase(),rv=Hc[0].toUpperCase()+Hc.slice(1);gl(ov,"on"+rv)}gl(ns,"onAnimationEnd"),gl(is,"onAnimationIteration"),gl(cs,"onAnimationStart"),gl("dblclick","onDoubleClick"),gl("focusin","onFocus"),gl("focusout","onBlur"),gl(Mm,"onTransitionRun"),gl(Om,"onTransitionStart"),gl(_m,"onTransitionCancel"),gl(fs,"onTransitionEnd"),Ve("onMouseEnter",["mouseout","mouseover"]),Ve("onMouseLeave",["mouseout","mouseover"]),Ve("onPointerEnter",["pointerout","pointerover"]),Ve("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function Ur(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],u=a.event;a=a.listeners;t:{var n=void 0;if(l)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(h){xu(h)}u.currentTarget=null,n=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(h){xu(h)}u.currentTarget=null,n=f}}}}function G(t,l){var e=l[Wn];e===void 0&&(e=l[Wn]=new Set);var a=t+"__bubble";e.has(a)||(Nr(l,t,2,!1),e.add(a))}function xc(t,l,e){var a=0;l&&(a|=4),Nr(e,t,a,l)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[Tn]){t[Tn]=!0,Tf.forEach(function(e){e!=="selectionchange"&&(dv.has(e)||xc(e,!1,t),xc(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Tn]||(l[Tn]=!0,xc("selectionchange",!1,l))}}function Nr(t,l,e,a){switch(id(l)){case 2:var u=Lv;break;case 8:u=Gv;break;default:u=Ic}e=u.bind(null,l,e,t),u=void 0,!ai||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(l,e,{capture:!0,passive:u}):t.addEventListener(l,e,!0):u!==void 0?t.addEventListener(l,e,{passive:u}):t.addEventListener(l,e,!1)}function jc(t,l,e,a,u){var n=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Je(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=n=i;continue t}c=c.parentNode}}a=a.return}Hf(function(){var m=n,h=li(e),b=[];t:{var v=ss.get(t);if(v!==void 0){var S=qu,A=t;switch(t){case"keypress":if(Nu(e)===0)break t;case"keydown":case"keyup":S=nm;break;case"focusin":A="focus",S=ci;break;case"focusout":A="blur",S=ci;break;case"beforeblur":case"afterblur":S=ci;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=fm;break;case ns:case is:case cs:S=$d;break;case fs:S=om;break;case"scroll":case"scrollend":S=Vd;break;case"wheel":S=dm;break;case"copy":case"cut":case"paste":S=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Lf;break;case"toggle":case"beforetoggle":S=vm}var N=(l&4)!==0,ut=!N&&(t==="scroll"||t==="scrollend"),r=N?v!==null?v+"Capture":null:v;N=[];for(var s=m,d;s!==null;){var p=s;if(d=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||d===null||r===null||(p=Na(s,r),p!=null&&N.push(ou(s,p,d))),ut)break;s=s.return}0<N.length&&(v=new S(v,A,null,e,h),b.push({event:v,listeners:N}))}}if((l&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",v&&e!==ti&&(A=e.relatedTarget||e.fromElement)&&(Je(A)||A[Ge]))break t;if((S||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,S?(A=e.relatedTarget||e.toElement,S=m,A=A?Je(A):null,A!==null&&(ut=W(A),N=A.tag,A!==ut||N!==5&&N!==27&&N!==6)&&(A=null)):(S=null,A=m),S!==A)){if(N=jf,p="onMouseLeave",r="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(N=Lf,p="onPointerLeave",r="onPointerEnter",s="pointer"),ut=S==null?v:Ua(S),d=A==null?v:Ua(A),v=new N(p,s+"leave",S,e,h),v.target=ut,v.relatedTarget=d,p=null,Je(h)===m&&(N=new N(r,s+"enter",A,e,h),N.target=d,N.relatedTarget=ut,p=N),ut=p,S&&A)l:{for(N=mv,r=S,s=A,d=0,p=r;p;p=N(p))d++;p=0;for(var _=s;_;_=N(_))p++;for(;0<d-p;)r=N(r),d--;for(;0<p-d;)s=N(s),p--;for(;d--;){if(r===s||s!==null&&r===s.alternate){N=r;break l}r=N(r),s=N(s)}N=null}else N=null;S!==null&&Rr(b,v,S,N,!1),A!==null&&ut!==null&&Rr(b,ut,A,N,!0)}}t:{if(v=m?Ua(m):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var K=Wf;else if(Kf(v))if(Ff)K=zm;else{K=Dm;var O=Em}else S=v.nodeName,!S||S.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Pn(m.elementType)&&(K=Wf):K=Tm;if(K&&(K=K(t,m))){wf(b,K,e,h);break t}O&&O(t,v,m),t==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&In(v,"number",v.value)}switch(O=m?Ua(m):window,t){case"focusin":(Kf(O)||O.contentEditable==="true")&&(ke=O,mi=m,Ya=null);break;case"focusout":Ya=mi=ke=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,as(b,e,h);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":as(b,e,h)}var j;if(si)t:{switch(t){case"compositionstart":var X="onCompositionStart";break t;case"compositionend":X="onCompositionEnd";break t;case"compositionupdate":X="onCompositionUpdate";break t}X=void 0}else $e?Zf(t,e)&&(X="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(X="onCompositionStart");X&&(Gf&&e.locale!=="ko"&&($e||X!=="onCompositionStart"?X==="onCompositionEnd"&&$e&&(j=xf()):(kl=h,ui="value"in kl?kl.value:kl.textContent,$e=!0)),O=zn(m,X),0<O.length&&(X=new Yf(X,t,null,e,h),b.push({event:X,listeners:O}),j?X.data=j:(j=Vf(e),j!==null&&(X.data=j)))),(j=Sm?hm(t,e):gm(t,e))&&(X=zn(m,"onBeforeInput"),0<X.length&&(O=new Yf("onBeforeInput","beforeinput",null,e,h),b.push({event:O,listeners:X}),O.data=j)),sv(b,t,m,e,h)}Ur(b,l)})}function ou(t,l,e){return{instance:t,listener:l,currentTarget:e}}function zn(t,l){for(var e=l+"Capture",a=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Na(t,e),u!=null&&a.unshift(ou(t,u,n)),u=Na(t,l),u!=null&&a.push(ou(t,u,n))),t.tag===3)return a;t=t.return}return[]}function mv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rr(t,l,e,a,u){for(var n=l._reactName,i=[];e!==null&&e!==a;){var c=e,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=Na(e,n),m!=null&&i.unshift(ou(e,m,f))):u||(m=Na(e,n),m!=null&&i.push(ou(e,m,f)))),e=e.return}i.length!==0&&t.push({event:l,listeners:i})}var vv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function qr(t){return(typeof t=="string"?t:""+t).replace(vv,`
`).replace(yv,"")}function Br(t,l){return l=qr(l),qr(t)===l}function at(t,l,e,a,u,n){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||we(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&we(t,""+a);break;case"className":Mu(t,"class",a);break;case"tabIndex":Mu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mu(t,e,a);break;case"style":qf(t,a,n);break;case"data":if(l!=="object"){Mu(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=_u(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(l!=="input"&&at(t,l,"name",u.name,u,null),at(t,l,"formEncType",u.formEncType,u,null),at(t,l,"formMethod",u.formMethod,u,null),at(t,l,"formTarget",u.formTarget,u,null)):(at(t,l,"encType",u.encType,u,null),at(t,l,"method",u.method,u,null),at(t,l,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=_u(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Nl);break;case"onScroll":a!=null&&G("scroll",t);break;case"onScrollEnd":a!=null&&G("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=_u(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":G("beforetoggle",t),G("toggle",t),Cu(t,"popover",a);break;case"xlinkActuate":Ul(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ul(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ul(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ul(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ul(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ul(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ul(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Xd.get(e)||e,Cu(t,e,a))}}function Yc(t,l,e,a,u,n){switch(e){case"style":qf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(e=a.__html,e!=null){if(u.children!=null)throw Error(y(60));t.innerHTML=e}}break;case"children":typeof a=="string"?we(t,a):(typeof a=="number"||typeof a=="bigint")&&we(t,""+a);break;case"onScroll":a!=null&&G("scroll",t);break;case"onScrollEnd":a!=null&&G("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(u=e.endsWith("Capture"),l=e.slice(2,u?e.length-7:void 0),n=t[Gt]||null,n=n!=null?n[e]:null,typeof n=="function"&&t.removeEventListener(l,n,u),typeof a=="function")){typeof n!="function"&&n!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,u);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Cu(t,e,a)}}}function _t(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",t),G("load",t);var a=!1,u=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,l));default:at(t,l,n,i,e,null)}}u&&at(t,l,"srcSet",e.srcSet,e,null),a&&at(t,l,"src",e.src,e,null);return;case"input":G("invalid",t);var c=n=i=u=null,f=null,m=null;for(a in e)if(e.hasOwnProperty(a)){var h=e[a];if(h!=null)switch(a){case"name":u=h;break;case"type":i=h;break;case"checked":f=h;break;case"defaultChecked":m=h;break;case"value":n=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,l));break;default:at(t,l,a,h,e,null)}}_f(t,n,c,f,m,i,u,!1);return;case"select":G("invalid",t),a=i=n=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:at(t,l,u,c,e,null)}l=n,e=i,t.multiple=!!a,l!=null?Ke(t,!!a,l,!1):e!=null&&Ke(t,!!a,e,!0);return;case"textarea":G("invalid",t),n=u=a=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:at(t,l,i,c,e,null)}Nf(t,a,u,n);return;case"option":for(f in e)if(e.hasOwnProperty(f)&&(a=e[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:at(t,l,f,a,e,null)}return;case"dialog":G("beforetoggle",t),G("toggle",t),G("cancel",t),G("close",t);break;case"iframe":case"object":G("load",t);break;case"video":case"audio":for(a=0;a<su.length;a++)G(su[a],t);break;case"image":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"embed":case"source":case"link":G("error",t),G("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,l));default:at(t,l,m,a,e,null)}return;default:if(Pn(l)){for(h in e)e.hasOwnProperty(h)&&(a=e[h],a!==void 0&&Yc(t,l,h,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&at(t,l,c,a,e,null))}function Sv(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,h=null;for(S in e){var b=e[S];if(e.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=b;default:a.hasOwnProperty(S)||at(t,l,S,null,a,b)}}for(var v in a){var S=a[v];if(b=e[v],a.hasOwnProperty(v)&&(S!=null||b!=null))switch(v){case"type":n=S;break;case"name":u=S;break;case"checked":m=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(y(137,l));break;default:S!==b&&at(t,l,v,S,a,b)}}kn(t,i,c,f,m,h,n,u);return;case"select":S=i=c=v=null;for(n in e)if(f=e[n],e.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":S=f;default:a.hasOwnProperty(n)||at(t,l,n,null,a,f)}for(u in a)if(n=a[u],f=e[u],a.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":v=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&at(t,l,u,n,a,f)}l=c,e=i,a=S,v!=null?Ke(t,!!e,v,!1):!!a!=!!e&&(l!=null?Ke(t,!!e,l,!0):Ke(t,!!e,e?[]:"",!1));return;case"textarea":S=v=null;for(c in e)if(u=e[c],e.hasOwnProperty(c)&&u!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:at(t,l,c,null,a,u)}for(i in a)if(u=a[i],n=e[i],a.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":v=u;break;case"defaultValue":S=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(y(91));break;default:u!==n&&at(t,l,i,u,a,n)}Uf(t,v,S);return;case"option":for(var A in e)if(v=e[A],e.hasOwnProperty(A)&&v!=null&&!a.hasOwnProperty(A))switch(A){case"selected":t.selected=!1;break;default:at(t,l,A,null,a,v)}for(f in a)if(v=a[f],S=e[f],a.hasOwnProperty(f)&&v!==S&&(v!=null||S!=null))switch(f){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:at(t,l,f,v,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in e)v=e[N],e.hasOwnProperty(N)&&v!=null&&!a.hasOwnProperty(N)&&at(t,l,N,null,a,v);for(m in a)if(v=a[m],S=e[m],a.hasOwnProperty(m)&&v!==S&&(v!=null||S!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,l));break;default:at(t,l,m,v,a,S)}return;default:if(Pn(l)){for(var ut in e)v=e[ut],e.hasOwnProperty(ut)&&v!==void 0&&!a.hasOwnProperty(ut)&&Yc(t,l,ut,void 0,a,v);for(h in a)v=a[h],S=e[h],!a.hasOwnProperty(h)||v===S||v===void 0&&S===void 0||Yc(t,l,h,v,a,S);return}}for(var r in e)v=e[r],e.hasOwnProperty(r)&&v!=null&&!a.hasOwnProperty(r)&&at(t,l,r,null,a,v);for(b in a)v=a[b],S=e[b],!a.hasOwnProperty(b)||v===S||v==null&&S==null||at(t,l,b,v,a,S)}function Hr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var u=e[a],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&Hr(i)){for(i=0,c=u.responseEnd,a+=1;a<e.length;a++){var f=e[a],m=f.startTime;if(m>c)break;var h=f.transferSize,b=f.initiatorType;h&&Hr(b)&&(f=f.responseEnd,i+=h*(f<c?1:(c-m)/(f-m)))}if(--a,l+=8*(n+i)/(u.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lc=null,Gc=null;function An(t){return t.nodeType===9?t:t.ownerDocument}function xr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qr(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Jc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Xc=null;function gv(){var t=window.event;return t&&t.type==="popstate"?t===Xc?!1:(Xc=t,!0):(Xc=null,!1)}var jr=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(t){return Yr.resolve(null).then(t).catch(Ev)}:jr;function Ev(t){setTimeout(function(){throw t})}function ve(t){return t==="head"}function Lr(t,l){var e=l,a=0;do{var u=e.nextSibling;if(t.removeChild(e),u&&u.nodeType===8)if(e=u.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(u),za(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")ru(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,ru(e);for(var n=e.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[_a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&ru(t.ownerDocument.body);e=u}while(e);za(l)}function Gr(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function Zc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Zc(e),Fn(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function Dv(t,l,e,a){for(;t.nodeType===1;){var u=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_a])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=yl(t.nextSibling),t===null)break}return null}function Tv(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=yl(t.nextSibling),t===null))return null;return t}function Jr(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=yl(t.nextSibling),t===null))return null;return t}function Vc(t){return t.data==="$?"||t.data==="$~"}function Kc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zv(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function yl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var wc=null;function Xr(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return yl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function Zr(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function Vr(t,l,e){switch(l=An(e),t){case"html":if(t=l.documentElement,!t)throw Error(y(452));return t;case"head":if(t=l.head,!t)throw Error(y(453));return t;case"body":if(t=l.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function ru(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fn(t)}var Sl=new Map,Kr=new Set;function Cn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wl=T.d;T.d={f:Av,r:Cv,D:Mv,C:Ov,L:_v,m:Uv,X:Rv,S:Nv,M:qv};function Av(){var t=wl.f(),l=hn();return t||l}function Cv(t){var l=Xe(t);l!==null&&l.tag===5&&l.type==="form"?fo(l):wl.r(t)}var Ea=typeof document>"u"?null:document;function wr(t,l,e){var a=Ea;if(a&&typeof l=="string"&&l){var u=fl(l);u='link[rel="'+t+'"][href="'+u+'"]',typeof e=="string"&&(u+='[crossorigin="'+e+'"]'),Kr.has(u)||(Kr.add(u),t={rel:t,crossOrigin:e,href:l},a.querySelector(u)===null&&(l=a.createElement("link"),_t(l,"link",t),Tt(l),a.head.appendChild(l)))}}function Mv(t){wl.D(t),wr("dns-prefetch",t,null)}function Ov(t,l){wl.C(t,l),wr("preconnect",t,l)}function _v(t,l,e){wl.L(t,l,e);var a=Ea;if(a&&t&&l){var u='link[rel="preload"][as="'+fl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(u+='[imagesrcset="'+fl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(u+='[imagesizes="'+fl(e.imageSizes)+'"]')):u+='[href="'+fl(t)+'"]';var n=u;switch(l){case"style":n=Da(t);break;case"script":n=Ta(t)}Sl.has(n)||(t=q({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),Sl.set(n,t),a.querySelector(u)!==null||l==="style"&&a.querySelector(du(n))||l==="script"&&a.querySelector(mu(n))||(l=a.createElement("link"),_t(l,"link",t),Tt(l),a.head.appendChild(l)))}}function Uv(t,l){wl.m(t,l);var e=Ea;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",u='link[rel="modulepreload"][as="'+fl(a)+'"][href="'+fl(t)+'"]',n=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ta(t)}if(!Sl.has(n)&&(t=q({rel:"modulepreload",href:t},l),Sl.set(n,t),e.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(mu(n)))return}a=e.createElement("link"),_t(a,"link",t),Tt(a),e.head.appendChild(a)}}}function Nv(t,l,e){wl.S(t,l,e);var a=Ea;if(a&&t){var u=Ze(a).hoistableStyles,n=Da(t);l=l||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(du(n)))c.loading=5;else{t=q({rel:"stylesheet",href:t,"data-precedence":l},e),(e=Sl.get(n))&&Wc(t,e);var f=i=a.createElement("link");Tt(f),_t(f,"link",t),f._p=new Promise(function(m,h){f.onload=m,f.onerror=h}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mn(i,l,a)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Rv(t,l){wl.X(t,l);var e=Ea;if(e&&t){var a=Ze(e).hoistableScripts,u=Ta(t),n=a.get(u);n||(n=e.querySelector(mu(u)),n||(t=q({src:t,async:!0},l),(l=Sl.get(u))&&Fc(t,l),n=e.createElement("script"),Tt(n),_t(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function qv(t,l){wl.M(t,l);var e=Ea;if(e&&t){var a=Ze(e).hoistableScripts,u=Ta(t),n=a.get(u);n||(n=e.querySelector(mu(u)),n||(t=q({src:t,async:!0,type:"module"},l),(l=Sl.get(u))&&Fc(t,l),n=e.createElement("script"),Tt(n),_t(n,"link",t),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(u,n))}}function Wr(t,l,e,a){var u=(u=Y.current)?Cn(u):null;if(!u)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=Da(e.href),e=Ze(u).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Da(e.href);var n=Ze(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(du(t)))&&!n._p&&(i.instance=n,i.state.loading=5),Sl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Sl.set(t,e),n||Bv(u,t,e,i.state))),l&&a===null)throw Error(y(528,""));return i}if(l&&a!==null)throw Error(y(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Ta(e),e=Ze(u).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function Da(t){return'href="'+fl(t)+'"'}function du(t){return'link[rel="stylesheet"]['+t+"]"}function Fr(t){return q({},t,{"data-precedence":t.precedence,precedence:null})}function Bv(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),_t(l,"link",e),Tt(l),t.head.appendChild(l))}function Ta(t){return'[src="'+fl(t)+'"]'}function mu(t){return"script[async]"+t}function $r(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+fl(e.href)+'"]');if(a)return l.instance=a,Tt(a),a;var u=q({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Tt(a),_t(a,"style",u),Mn(a,e.precedence,t),l.instance=a;case"stylesheet":u=Da(e.href);var n=t.querySelector(du(u));if(n)return l.state.loading|=4,l.instance=n,Tt(n),n;a=Fr(e),(u=Sl.get(u))&&Wc(a,u),n=(t.ownerDocument||t).createElement("link"),Tt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),_t(n,"link",a),l.state.loading|=4,Mn(n,e.precedence,t),l.instance=n;case"script":return n=Ta(e.src),(u=t.querySelector(mu(n)))?(l.instance=u,Tt(u),u):(a=e,(u=Sl.get(n))&&(a=q({},e),Fc(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),Tt(u),_t(u,"link",a),t.head.appendChild(u),l.instance=u);case"void":return null;default:throw Error(y(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Mn(a,e.precedence,t));return l.instance}function Mn(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,n=u,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===l)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function Wc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Fc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var On=null;function kr(t,l,e){if(On===null){var a=new Map,u=On=new Map;u.set(e,a)}else u=On,a=u.get(e),a||(a=new Map,u.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),u=0;u<e.length;u++){var n=e[u];if(!(n[_a]||n[At]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(l)||"";i=t+i;var c=a.get(i);c?c.push(n):a.set(i,[n])}}return a}function Ir(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function Hv(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Pr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xv(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=Da(a.href),n=l.querySelector(du(u));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=_n.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=n,Tt(n);return}n=l.ownerDocument||l,a=Fr(a),(u=Sl.get(u))&&Wc(a,u),n=n.createElement("link"),Tt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),_t(n,"link",a),e.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=_n.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var $c=0;function Qv(t,l){return t.stylesheets&&t.count===0&&Nn(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Nn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+l);0<t.imgBytes&&$c===0&&($c=62500*hv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>$c?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function _n(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Un=null;function Nn(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Un=new Map,l.forEach(jv,t),Un=null,_n.call(t))}function jv(t,l){if(!(l.state.loading&4)){var e=Un.get(t);if(e)var a=e.get(null);else{e=new Map,Un.set(t,e);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}u=l.instance,i=u.getAttribute("data-precedence"),n=e.get(i)||a,n===a&&e.set(null,u),e.set(i,u),this.count++,a=_n.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),l.state.loading|=4}}var vu={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Yv(t,l,e,a,u,n,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.hiddenUpdates=Vn(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function td(t,l,e,a,u,n,i,c,f,m,h,b){return t=new Yv(t,l,e,i,f,m,h,b,c),l=1,n===!0&&(l|=24),n=tl(3,null,null,l),t.current=n,n.stateNode=t,l=_i(),l.refCount++,t.pooledCache=l,l.refCount++,n.memoizedState={element:a,isDehydrated:e,cache:l},qi(n),t}function ld(t){return t?(t=ta,t):ta}function ed(t,l,e,a,u,n){u=ld(u),a.context===null?a.context=u:a.pendingContext=u,a=ae(l),a.payload={element:e},n=n===void 0?null:n,n!==null&&(a.callback=n),e=ue(t,a,l),e!==null&&(wt(e,t,l),Ka(e,t,l))}function ad(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function kc(t,l){ad(t,l),(t=t.alternate)&&ad(t,l)}function ud(t){if(t.tag===13||t.tag===31){var l=Me(t,67108864);l!==null&&wt(l,t,67108864),kc(t,67108864)}}function nd(t){if(t.tag===13||t.tag===31){var l=nl();l=Kn(l);var e=Me(t,l);e!==null&&wt(e,t,l),kc(t,l)}}var Rn=!0;function Lv(t,l,e,a){var u=g.T;g.T=null;var n=T.p;try{T.p=2,Ic(t,l,e,a)}finally{T.p=n,g.T=u}}function Gv(t,l,e,a){var u=g.T;g.T=null;var n=T.p;try{T.p=8,Ic(t,l,e,a)}finally{T.p=n,g.T=u}}function Ic(t,l,e,a){if(Rn){var u=Pc(a);if(u===null)jc(t,l,a,qn,e),cd(t,a);else if(Xv(u,t,l,e,a))a.stopPropagation();else if(cd(t,a),l&4&&-1<Jv.indexOf(t)){for(;u!==null;){var n=Xe(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=De(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-It(i);c.entanglements[1]|=f,i&=~f}Ml(n),(F&6)===0&&(yn=$t()+500,fu(0))}}break;case 31:case 13:c=Me(n,2),c!==null&&wt(c,n,2),hn(),kc(n,2)}if(n=Pc(a),n===null&&jc(t,l,a,qn,e),n===u)break;u=n}u!==null&&a.stopPropagation()}else jc(t,l,a,null,e)}}function Pc(t){return t=li(t),tf(t)}var qn=null;function tf(t){if(qn=null,t=Je(t),t!==null){var l=W(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=vt(l),t!==null)return t;t=null}else if(e===31){if(t=Rt(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return qn=t,null}function id(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case mf:return 2;case vf:return 8;case Eu:case Od:return 32;case yf:return 268435456;default:return 32}default:return 32}}var lf=!1,ye=null,Se=null,he=null,yu=new Map,Su=new Map,ge=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(t,l){switch(t){case"focusin":case"focusout":ye=null;break;case"dragenter":case"dragleave":Se=null;break;case"mouseover":case"mouseout":he=null;break;case"pointerover":case"pointerout":yu.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Su.delete(l.pointerId)}}function hu(t,l,e,a,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:n,targetContainers:[u]},l!==null&&(l=Xe(l),l!==null&&ud(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,u!==null&&l.indexOf(u)===-1&&l.push(u),t)}function Xv(t,l,e,a,u){switch(l){case"focusin":return ye=hu(ye,t,l,e,a,u),!0;case"dragenter":return Se=hu(Se,t,l,e,a,u),!0;case"mouseover":return he=hu(he,t,l,e,a,u),!0;case"pointerover":var n=u.pointerId;return yu.set(n,hu(yu.get(n)||null,t,l,e,a,u)),!0;case"gotpointercapture":return n=u.pointerId,Su.set(n,hu(Su.get(n)||null,t,l,e,a,u)),!0}return!1}function fd(t){var l=Je(t.target);if(l!==null){var e=W(l);if(e!==null){if(l=e.tag,l===13){if(l=vt(e),l!==null){t.blockedOn=l,Ef(t.priority,function(){nd(e)});return}}else if(l===31){if(l=Rt(e),l!==null){t.blockedOn=l,Ef(t.priority,function(){nd(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bn(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=Pc(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);ti=a,e.target.dispatchEvent(a),ti=null}else return l=Xe(e),l!==null&&ud(l),t.blockedOn=e,!1;l.shift()}return!0}function sd(t,l,e){Bn(t)&&e.delete(l)}function Zv(){lf=!1,ye!==null&&Bn(ye)&&(ye=null),Se!==null&&Bn(Se)&&(Se=null),he!==null&&Bn(he)&&(he=null),yu.forEach(sd),Su.forEach(sd)}function Hn(t,l){t.blockedOn===l&&(t.blockedOn=null,lf||(lf=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Zv)))}var xn=null;function od(t){xn!==t&&(xn=t,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){xn===t&&(xn=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],u=t[l+2];if(typeof a!="function"){if(tf(a||e)===null)continue;break}var n=Xe(e);n!==null&&(t.splice(l,3),l-=3,Pi(n,{pending:!0,data:u,method:e.method,action:a},a,u))}}))}function za(t){function l(f){return Hn(f,t)}ye!==null&&Hn(ye,t),Se!==null&&Hn(Se,t),he!==null&&Hn(he,t),yu.forEach(l),Su.forEach(l);for(var e=0;e<ge.length;e++){var a=ge[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ge.length&&(e=ge[0],e.blockedOn===null);)fd(e),e.blockedOn===null&&ge.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var u=e[a],n=e[a+1],i=u[Gt]||null;if(typeof n=="function")i||od(e);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Gt]||null)c=i.formAction;else if(tf(u)!==null)continue}else c=i.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),od(e)}}}function rd(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function l(){u!==null&&(u(),u=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),u!==null&&(u(),u=null)}}}function ef(t){this._internalRoot=t}Qn.prototype.render=ef.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(y(409));var e=l.current,a=nl();ed(e,a,t,l,null,null)},Qn.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;ed(t.current,2,null,t,null,null),hn(),l[Ge]=null}};function Qn(t){this._internalRoot=t}Qn.prototype.unstable_scheduleHydration=function(t){if(t){var l=bf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<ge.length&&l!==0&&l<ge[e].priority;e++);ge.splice(e,0,t),e===0&&fd(t)}};var dd=rt.version;if(dd!=="19.2.4")throw Error(y(527,dd,"19.2.4"));T.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=D(l),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var Vv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jn.isDisabled&&jn.supportsFiber)try{Ca=jn.inject(Vv),kt=jn}catch{}}return pu.createRoot=function(t,l){if(!R(t))throw Error(y(299));var e=!1,a="",u=po,n=bo,i=Eo;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=td(t,1,!1,null,null,e,a,null,u,n,i,rd),t[Ge]=l.current,Qc(t),new ef(l)},pu.hydrateRoot=function(t,l,e){if(!R(t))throw Error(y(299));var a=!1,u="",n=po,i=bo,c=Eo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(u=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),l=td(t,1,!0,l,e??null,a,u,f,n,i,c,rd),l.context=ld(null),e=l.current,a=nl(),a=Kn(a),u=ae(a),u.callback=null,ue(e,u,a),e=a,l.current.lanes=e,Oa(l,e),Ml(l),t[Ge]=l.current,Qc(t),new Qn(l)},pu.version="19.2.4",pu}var Dd;function ly(){if(Dd)return nf.exports;Dd=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(rt){console.error(rt)}}return C(),nf.exports=ty(),nf.exports}var ey=ly();function ay(){const[C,rt]=Td.useState(null),$=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. JDBC Connectivity Develop a java application using concept of JDBC for user login. User will enter username and password. Application will match for the same in database table. If match is found then display message 'Successful Login' and if not found then display message 'Invalid Username and password'.",answer:"",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],y=R=>{rt(C===R?null:R)};return xt.jsxs("div",{className:"app-container",children:[xt.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),xt.jsx("div",{className:"questions-container",children:$.map(R=>xt.jsxs("div",{className:"question-item",children:[xt.jsx("button",{className:`question-button ${C===R.id?"active":""}`,onClick:()=>y(R.id),children:R.question}),C===R.id&&xt.jsxs("div",{className:"answer-container",children:[xt.jsxs("div",{className:"answer",children:[xt.jsx("h3",{children:"Answer:"}),xt.jsx("p",{children:R.answer})]}),R.codeExample&&xt.jsxs("div",{className:"code-example",children:[xt.jsx("h3",{children:"Code Example:"}),xt.jsx("pre",{children:xt.jsx("code",{children:R.codeExample})})]})]})]},R.id))})]})}ey.createRoot(document.getElementById("root")).render(xt.jsx(Td.StrictMode,{children:xt.jsx(ay,{})}));
