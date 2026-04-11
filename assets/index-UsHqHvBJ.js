(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))v(O);new MutationObserver(O=>{for(const Z of O)if(Z.type==="childList")for(const me of Z.addedNodes)me.tagName==="LINK"&&me.rel==="modulepreload"&&v(me)}).observe(document,{childList:!0,subtree:!0});function K(O){const Z={};return O.integrity&&(Z.integrity=O.integrity),O.referrerPolicy&&(Z.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?Z.credentials="include":O.crossOrigin==="anonymous"?Z.credentials="omit":Z.credentials="same-origin",Z}function v(O){if(O.ep)return;O.ep=!0;const Z=K(O);fetch(O.href,Z)}})();var nu={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function km(){if(dp)return yl;dp=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function K(v,O,Z){var me=null;if(Z!==void 0&&(me=""+Z),O.key!==void 0&&(me=""+O.key),"key"in O){Z={};for(var Oe in O)Oe!=="key"&&(Z[Oe]=O[Oe])}else Z=O;return O=Z.ref,{$$typeof:M,type:v,key:me,ref:O!==void 0?O:null,props:Z}}return yl.Fragment=fe,yl.jsx=K,yl.jsxs=K,yl}var mp;function Zm(){return mp||(mp=1,nu.exports=km()),nu.exports}var ze=Zm(),lu={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function Wm(){if(vp)return H;vp=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),me=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),oe=Symbol.iterator;function Ze(c){return c===null||typeof c!="object"?null:(c=oe&&c[oe]||c["@@iterator"],typeof c=="function"?c:null)}var Ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,Rt={};function We(c,E,D){this.props=c,this.context=E,this.refs=Rt,this.updater=D||Ne}We.prototype.isReactComponent={},We.prototype.setState=function(c,E){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,E,"setState")},We.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Zt(){}Zt.prototype=We.prototype;function we(c,E,D){this.props=c,this.context=E,this.refs=Rt,this.updater=D||Ne}var st=we.prototype=new Zt;st.constructor=we,Le(st,We.prototype),st.isPureReactComponent=!0;var Et=Array.isArray;function Be(){}var X={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function Tt(c,E,D){var x=D.ref;return{$$typeof:M,type:c,key:E,ref:x!==void 0?x:null,props:D}}function _a(c,E){return Tt(c.type,E,c.props)}function Ct(c){return typeof c=="object"&&c!==null&&c.$$typeof===M}function _e(c){var E={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(D){return E[D]})}var ba=/\/+/g;function jt(c,E){return typeof c=="object"&&c!==null&&c.key!=null?_e(""+c.key):E.toString(36)}function ht(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Be,Be):(c.status="pending",c.then(function(E){c.status==="pending"&&(c.status="fulfilled",c.value=E)},function(E){c.status==="pending"&&(c.status="rejected",c.reason=E)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function g(c,E,D,x,z){var J=typeof c;(J==="undefined"||J==="boolean")&&(c=null);var F=!1;if(c===null)F=!0;else switch(J){case"bigint":case"string":case"number":F=!0;break;case"object":switch(c.$$typeof){case M:case fe:F=!0;break;case I:return F=c._init,g(F(c._payload),E,D,x,z)}}if(F)return z=z(c),F=x===""?"."+jt(c,0):x,Et(z)?(D="",F!=null&&(D=F.replace(ba,"$&/")+"/"),g(z,E,D,"",function(xn){return xn})):z!=null&&(Ct(z)&&(z=_a(z,D+(z.key==null||c&&c.key===z.key?"":(""+z.key).replace(ba,"$&/")+"/")+F)),E.push(z)),1;F=0;var Ue=x===""?".":x+":";if(Et(c))for(var ve=0;ve<c.length;ve++)x=c[ve],J=Ue+jt(x,ve),F+=g(x,E,D,J,z);else if(ve=Ze(c),typeof ve=="function")for(c=ve.call(c),ve=0;!(x=c.next()).done;)x=x.value,J=Ue+jt(x,ve++),F+=g(x,E,D,J,z);else if(J==="object"){if(typeof c.then=="function")return g(ht(c),E,D,x,z);throw E=String(c),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return F}function C(c,E,D){if(c==null)return c;var x=[],z=0;return g(c,x,"","",function(J){return E.call(D,J,z++)}),x}function U(c){if(c._status===-1){var E=c._result;E=E(),E.then(function(D){(c._status===0||c._status===-1)&&(c._status=1,c._result=D)},function(D){(c._status===0||c._status===-1)&&(c._status=2,c._result=D)}),c._status===-1&&(c._status=0,c._result=E)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ie={map:C,forEach:function(c,E,D){C(c,function(){E.apply(this,arguments)},D)},count:function(c){var E=0;return C(c,function(){E++}),E},toArray:function(c){return C(c,function(E){return E})||[]},only:function(c){if(!Ct(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return H.Activity=L,H.Children=ie,H.Component=We,H.Fragment=K,H.Profiler=O,H.PureComponent=we,H.StrictMode=v,H.Suspense=w,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,H.__COMPILER_RUNTIME={__proto__:null,c:function(c){return X.H.useMemoCache(c)}},H.cache=function(c){return function(){return c.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(c,E,D){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var x=Le({},c.props),z=c.key;if(E!=null)for(J in E.key!==void 0&&(z=""+E.key),E)!Je.call(E,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&E.ref===void 0||(x[J]=E[J]);var J=arguments.length-2;if(J===1)x.children=D;else if(1<J){for(var F=Array(J),Ue=0;Ue<J;Ue++)F[Ue]=arguments[Ue+2];x.children=F}return Tt(c.type,z,x)},H.createContext=function(c){return c={$$typeof:me,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:Z,_context:c},c},H.createElement=function(c,E,D){var x,z={},J=null;if(E!=null)for(x in E.key!==void 0&&(J=""+E.key),E)Je.call(E,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(z[x]=E[x]);var F=arguments.length-2;if(F===1)z.children=D;else if(1<F){for(var Ue=Array(F),ve=0;ve<F;ve++)Ue[ve]=arguments[ve+2];z.children=Ue}if(c&&c.defaultProps)for(x in F=c.defaultProps,F)z[x]===void 0&&(z[x]=F[x]);return Tt(c,J,z)},H.createRef=function(){return{current:null}},H.forwardRef=function(c){return{$$typeof:Oe,render:c}},H.isValidElement=Ct,H.lazy=function(c){return{$$typeof:I,_payload:{_status:-1,_result:c},_init:U}},H.memo=function(c,E){return{$$typeof:T,type:c,compare:E===void 0?null:E}},H.startTransition=function(c){var E=X.T,D={};X.T=D;try{var x=c(),z=X.S;z!==null&&z(D,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(Be,te)}catch(J){te(J)}finally{E!==null&&D.types!==null&&(E.types=D.types),X.T=E}},H.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},H.use=function(c){return X.H.use(c)},H.useActionState=function(c,E,D){return X.H.useActionState(c,E,D)},H.useCallback=function(c,E){return X.H.useCallback(c,E)},H.useContext=function(c){return X.H.useContext(c)},H.useDebugValue=function(){},H.useDeferredValue=function(c,E){return X.H.useDeferredValue(c,E)},H.useEffect=function(c,E){return X.H.useEffect(c,E)},H.useEffectEvent=function(c){return X.H.useEffectEvent(c)},H.useId=function(){return X.H.useId()},H.useImperativeHandle=function(c,E,D){return X.H.useImperativeHandle(c,E,D)},H.useInsertionEffect=function(c,E){return X.H.useInsertionEffect(c,E)},H.useLayoutEffect=function(c,E){return X.H.useLayoutEffect(c,E)},H.useMemo=function(c,E){return X.H.useMemo(c,E)},H.useOptimistic=function(c,E){return X.H.useOptimistic(c,E)},H.useReducer=function(c,E,D){return X.H.useReducer(c,E,D)},H.useRef=function(c){return X.H.useRef(c)},H.useState=function(c){return X.H.useState(c)},H.useSyncExternalStore=function(c,E,D){return X.H.useSyncExternalStore(c,E,D)},H.useTransition=function(){return X.H.useTransition()},H.version="19.2.4",H}var Sp;function ou(){return Sp||(Sp=1,lu.exports=Wm()),lu.exports}var Cp=ou(),iu={exports:{}},bl={},su={exports:{}},ru={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Km(){return hp||(hp=1,(function(M){function fe(g,C){var U=g.length;g.push(C);e:for(;0<U;){var te=U-1>>>1,ie=g[te];if(0<O(ie,C))g[te]=C,g[U]=ie,U=te;else break e}}function K(g){return g.length===0?null:g[0]}function v(g){if(g.length===0)return null;var C=g[0],U=g.pop();if(U!==C){g[0]=U;e:for(var te=0,ie=g.length,c=ie>>>1;te<c;){var E=2*(te+1)-1,D=g[E],x=E+1,z=g[x];if(0>O(D,U))x<ie&&0>O(z,D)?(g[te]=z,g[x]=U,te=x):(g[te]=D,g[E]=U,te=E);else if(x<ie&&0>O(z,U))g[te]=z,g[x]=U,te=x;else break e}}return C}function O(g,C){var U=g.sortIndex-C.sortIndex;return U!==0?U:g.id-C.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Z=performance;M.unstable_now=function(){return Z.now()}}else{var me=Date,Oe=me.now();M.unstable_now=function(){return me.now()-Oe}}var w=[],T=[],I=1,L=null,oe=3,Ze=!1,Ne=!1,Le=!1,Rt=!1,We=typeof setTimeout=="function"?setTimeout:null,Zt=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;function st(g){for(var C=K(T);C!==null;){if(C.callback===null)v(T);else if(C.startTime<=g)v(T),C.sortIndex=C.expirationTime,fe(w,C);else break;C=K(T)}}function Et(g){if(Le=!1,st(g),!Ne)if(K(w)!==null)Ne=!0,Be||(Be=!0,_e());else{var C=K(T);C!==null&&ht(Et,C.startTime-g)}}var Be=!1,X=-1,Je=5,Tt=-1;function _a(){return Rt?!0:!(M.unstable_now()-Tt<Je)}function Ct(){if(Rt=!1,Be){var g=M.unstable_now();Tt=g;var C=!0;try{e:{Ne=!1,Le&&(Le=!1,Zt(X),X=-1),Ze=!0;var U=oe;try{t:{for(st(g),L=K(w);L!==null&&!(L.expirationTime>g&&_a());){var te=L.callback;if(typeof te=="function"){L.callback=null,oe=L.priorityLevel;var ie=te(L.expirationTime<=g);if(g=M.unstable_now(),typeof ie=="function"){L.callback=ie,st(g),C=!0;break t}L===K(w)&&v(w),st(g)}else v(w);L=K(w)}if(L!==null)C=!0;else{var c=K(T);c!==null&&ht(Et,c.startTime-g),C=!1}}break e}finally{L=null,oe=U,Ze=!1}C=void 0}}finally{C?_e():Be=!1}}}var _e;if(typeof we=="function")_e=function(){we(Ct)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,jt=ba.port2;ba.port1.onmessage=Ct,_e=function(){jt.postMessage(null)}}else _e=function(){We(Ct,0)};function ht(g,C){X=We(function(){g(M.unstable_now())},C)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(g){g.callback=null},M.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<g?Math.floor(1e3/g):5},M.unstable_getCurrentPriorityLevel=function(){return oe},M.unstable_next=function(g){switch(oe){case 1:case 2:case 3:var C=3;break;default:C=oe}var U=oe;oe=C;try{return g()}finally{oe=U}},M.unstable_requestPaint=function(){Rt=!0},M.unstable_runWithPriority=function(g,C){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var U=oe;oe=g;try{return C()}finally{oe=U}},M.unstable_scheduleCallback=function(g,C,U){var te=M.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,g){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=U+ie,g={id:I++,callback:C,priorityLevel:g,startTime:U,expirationTime:ie,sortIndex:-1},U>te?(g.sortIndex=U,fe(T,g),K(w)===null&&g===K(T)&&(Le?(Zt(X),X=-1):Le=!0,ht(Et,U-te))):(g.sortIndex=ie,fe(w,g),Ne||Ze||(Ne=!0,Be||(Be=!0,_e()))),g},M.unstable_shouldYield=_a,M.unstable_wrapCallback=function(g){var C=oe;return function(){var U=oe;oe=C;try{return g.apply(this,arguments)}finally{oe=U}}}})(ru)),ru}var gp;function Im(){return gp||(gp=1,su.exports=Km()),su.exports}var uu={exports:{}},qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Fm(){if(yp)return qe;yp=1;var M=ou();function fe(w){var T="https://react.dev/errors/"+w;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)T+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+w+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function K(){}var v={d:{f:K,r:function(){throw Error(fe(522))},D:K,C:K,L:K,m:K,X:K,S:K,M:K},p:0,findDOMNode:null},O=Symbol.for("react.portal");function Z(w,T,I){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:L==null?null:""+L,children:w,containerInfo:T,implementation:I}}var me=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Oe(w,T){if(w==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,qe.createPortal=function(w,T){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return Z(w,T,null,I)},qe.flushSync=function(w){var T=me.T,I=v.p;try{if(me.T=null,v.p=2,w)return w()}finally{me.T=T,v.p=I,v.d.f()}},qe.preconnect=function(w,T){typeof w=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,v.d.C(w,T))},qe.prefetchDNS=function(w){typeof w=="string"&&v.d.D(w)},qe.preinit=function(w,T){if(typeof w=="string"&&T&&typeof T.as=="string"){var I=T.as,L=Oe(I,T.crossOrigin),oe=typeof T.integrity=="string"?T.integrity:void 0,Ze=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;I==="style"?v.d.S(w,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:L,integrity:oe,fetchPriority:Ze}):I==="script"&&v.d.X(w,{crossOrigin:L,integrity:oe,fetchPriority:Ze,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},qe.preinitModule=function(w,T){if(typeof w=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var I=Oe(T.as,T.crossOrigin);v.d.M(w,{crossOrigin:I,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&v.d.M(w)},qe.preload=function(w,T){if(typeof w=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var I=T.as,L=Oe(I,T.crossOrigin);v.d.L(w,I,{crossOrigin:L,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},qe.preloadModule=function(w,T){if(typeof w=="string")if(T){var I=Oe(T.as,T.crossOrigin);v.d.m(w,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:I,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else v.d.m(w)},qe.requestFormReset=function(w){v.d.r(w)},qe.unstable_batchedUpdates=function(w,T){return w(T)},qe.useFormState=function(w,T,I){return me.H.useFormState(w,T,I)},qe.useFormStatus=function(){return me.H.useHostTransitionStatus()},qe.version="19.2.4",qe}var bp;function $m(){if(bp)return uu.exports;bp=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),uu.exports=Fm(),uu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function ev(){if(Ep)return bl;Ep=1;var M=Im(),fe=ou(),K=$m();function v(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Z(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function me(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(Z(e)!==e)throw Error(v(188))}function T(e){var t=e.alternate;if(!t){if(t=Z(e),t===null)throw Error(v(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return w(l),e;if(i===n)return w(l),t;i=i.sibling}throw Error(v(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,r=l.child;r;){if(r===a){s=!0,a=l,n=i;break}if(r===n){s=!0,n=l,a=i;break}r=r.sibling}if(!s){for(r=i.child;r;){if(r===a){s=!0,a=i,n=l;break}if(r===n){s=!0,n=i,a=l;break}r=r.sibling}if(!s)throw Error(v(189))}}if(a.alternate!==n)throw Error(v(190))}if(a.tag!==3)throw Error(v(188));return a.stateNode.current===a?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,oe=Symbol.for("react.element"),Ze=Symbol.for("react.transitional.element"),Ne=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),we=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),_a=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function jt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case We:return"Profiler";case Rt:return"StrictMode";case Et:return"Suspense";case Be:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ne:return"Portal";case we:return e.displayName||"Context";case Zt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:jt(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return jt(e(t))}catch{}}return null}var ht=Array.isArray,g=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function c(e){return{current:e}}function E(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function D(e,t){ie++,te[ie]=e.current,e.current=t}var x=c(null),z=c(null),J=c(null),F=c(null);function Ue(e,t){switch(D(J,t),D(z,e),D(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(x),D(x,e)}function ve(){E(x),E(z),E(J)}function xn(e){e.memoizedState!==null&&D(F,e);var t=x.current,a=Nf(t,e.type);t!==a&&(D(z,e),D(x,a))}function El(e){z.current===e&&(E(x),E(z)),F.current===e&&(E(F),vl._currentValue=U)}var Ji,cu;function Ea(e){if(Ji===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||"",cu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ji+e+cu}var _i=!1;function Qi(e,t){if(!e||_i)return"";_i=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var m=S}Reflect.construct(e,[],b)}else{try{b.call()}catch(S){m=S}e.call(b.prototype)}}else{try{throw Error()}catch(S){m=S}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&m&&typeof S.stack=="string")return[S.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],r=i[1];if(s&&r){var u=s.split(`
`),d=r.split(`
`);for(l=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(n===u.length||l===d.length)for(n=u.length-1,l=d.length-1;1<=n&&0<=l&&u[n]!==d[l];)l--;for(;1<=n&&0<=l;n--,l--)if(u[n]!==d[l]){if(n!==1||l!==1)do if(n--,l--,0>l||u[n]!==d[l]){var h=`
`+u[n].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=n&&0<=l);break}}}finally{_i=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function Dp(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return Ea("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Dp(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gi=Object.prototype.hasOwnProperty,Yi=M.unstable_scheduleCallback,Xi=M.unstable_cancelCallback,Ap=M.unstable_shouldYield,xp=M.unstable_requestPaint,Ke=M.unstable_now,Mp=M.unstable_getCurrentPriorityLevel,pu=M.unstable_ImmediatePriority,du=M.unstable_UserBlockingPriority,Tl=M.unstable_NormalPriority,Rp=M.unstable_LowPriority,mu=M.unstable_IdlePriority,jp=M.log,wp=M.unstable_setDisableYieldValue,Mn=null,Ie=null;function Wt(e){if(typeof jp=="function"&&wp(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Mn,e)}catch{}}var Fe=Math.clz32?Math.clz32:Lp,qp=Math.log,Op=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-(qp(e)/Op|0)|0}var Cl=256,Dl=262144,Al=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?l=Ta(n):(s&=r,s!==0?l=Ta(s):a||(a=r&~e,a!==0&&(l=Ta(a))))):(r=n&~i,r!==0?l=Ta(r):s!==0?l=Ta(s):a||(a=n&~e,a!==0&&(l=Ta(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Up(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var e=Al;return Al<<=1,(Al&62914560)===0&&(Al=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function jn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hp(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,u=e.expirationTimes,d=e.hiddenUpdates;for(a=s&~a;0<a;){var h=31-Fe(a),b=1<<h;r[h]=0,u[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var S=m[h];S!==null&&(S.lane&=-536870913)}a&=~b}n!==0&&Su(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Su(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Fe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function hu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Fe(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function gu(e,t){var a=t&-t;return a=(a&42)!==0?1:Pi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Pi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yu(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function bu(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var Kt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Kt,Qe="__reactProps$"+Kt,Qa="__reactContainer$"+Kt,Zi="__reactEvents$"+Kt,zp="__reactListeners$"+Kt,Np="__reactHandles$"+Kt,Eu="__reactResources$"+Kt,wn="__reactMarker$"+Kt;function Wi(e){delete e[Ae],delete e[Qe],delete e[Zi],delete e[zp],delete e[Np]}function Ga(e){var t=e[Ae];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Ae]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[Ae])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Ya(e){if(e=e[Ae]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(v(33))}function Xa(e){var t=e[Eu];return t||(t=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[wn]=!0}var Tu=new Set,Cu={};function Ca(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Cu[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var Bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Au={};function Jp(e){return Gi.call(Au,e)?!0:Gi.call(Du,e)?!1:Bp.test(e)?Au[e]=!0:(Du[e]=!0,!1)}function Ml(e,t,a){if(Jp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function wt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){if(!e._valueTracker){var t=xu(e)?"checked":"value";e._valueTracker=_p(e,t,""+e[t])}}function Mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=xu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qp=/[\n"\\]/g;function ut(e){return e.replace(Qp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ii(e,t,a,n,l,i,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Fi(e,s,rt(t)):a!=null?Fi(e,s,rt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+rt(r):e.removeAttribute("name")}function Ru(e,t,a,n,l,i,s,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ki(e);return}a=a!=null?""+rt(a):"",t=t!=null?""+rt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ki(e)}function Fi(e,t,a){t==="number"&&jl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+rt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ju(e,t,a){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+rt(a):""}function wu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(v(92));if(ht(n)){if(1<n.length)throw Error(v(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=rt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ki(e)}function ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Gp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ou(e,t,a){if(t!=null&&typeof t!="object")throw Error(v(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&qu(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&qu(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return Xp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Wa=null;function Lu(e){var t=Ya(e);if(t&&(e=t.stateNode)){var a=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Qe]||null;if(!l)throw Error(v(90));Ii(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Mu(n)}break e;case"textarea":ju(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var as=!1;function Uu(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Za!==null||Wa!==null)&&(hi(),Za&&(t=Za,e=Wa,Wa=Za=null,Lu(t),e)))for(t=0;t<e.length;t++)Lu(e[t])}}function On(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Qe]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(v(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Ot)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{ns=!1}var It=null,ls=null,ql=null;function Hu(){if(ql)return ql;var e,t=ls,a=t.length,n,l="value"in It?It.value:It.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return ql=l.slice(e,1<n?1-n:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function zu(){return!1}function Ge(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ll:zu,this.isPropagationStopped=zu,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Ge(Da),Un=L({},Da,{view:0,detail:0}),Vp=Ge(Un),is,ss,Hn,Hl=L({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(is=e.screenX-Hn.screenX,ss=e.screenY-Hn.screenY):ss=is=0,Hn=e),is)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Nu=Ge(Hl),Pp=L({},Hl,{dataTransfer:0}),kp=Ge(Pp),Zp=L({},Un,{relatedTarget:0}),rs=Ge(Zp),Wp=L({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=Ge(Wp),Ip=L({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=Ge(Ip),$p=L({},Da,{data:0}),Bu=Ge($p),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function us(){return nd}var ld=L({},Un,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Ge(ld),sd=L({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=Ge(sd),rd=L({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),ud=Ge(rd),od=L({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=Ge(od),fd=L({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=Ge(fd),dd=L({},Da,{newState:0,oldState:0}),md=Ge(dd),vd=[9,13,27,32],os=Ot&&"CompositionEvent"in window,zn=null;Ot&&"documentMode"in document&&(zn=document.documentMode);var Sd=Ot&&"TextEvent"in window&&!zn,_u=Ot&&(!os||zn&&8<zn&&11>=zn),Qu=" ",Gu=!1;function Yu(e,t){switch(e){case"keyup":return vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function hd(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Gu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Gu?null:e;default:return null}}function gd(e,t){if(Ka)return e==="compositionend"||!os&&Yu(e,t)?(e=Hu(),ql=ls=It=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yd[e.type]:t==="textarea"}function Pu(e,t,a,n){Za?Wa?Wa.push(n):Wa=[n]:Za=n,t=Di(t,"onChange"),0<t.length&&(a=new Ul("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Nn=null,Bn=null;function bd(e){wf(e,0)}function zl(e){var t=qn(e);if(Mu(t))return e}function ku(e,t){if(e==="change")return t}var Zu=!1;if(Ot){var cs;if(Ot){var fs="oninput"in document;if(!fs){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),fs=typeof Wu.oninput=="function"}cs=fs}else cs=!1;Zu=cs&&(!document.documentMode||9<document.documentMode)}function Ku(){Nn&&(Nn.detachEvent("onpropertychange",Iu),Bn=Nn=null)}function Iu(e){if(e.propertyName==="value"&&zl(Bn)){var t=[];Pu(t,Bn,e,ts(e)),Uu(bd,t)}}function Ed(e,t,a){e==="focusin"?(Ku(),Nn=t,Bn=a,Nn.attachEvent("onpropertychange",Iu)):e==="focusout"&&Ku()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(Bn)}function Cd(e,t){if(e==="click")return zl(t)}function Dd(e,t){if(e==="input"||e==="change")return zl(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Ad;function Jn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Gi.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,t){var a=Fu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fu(a)}}function eo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function to(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=jl(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xd=Ot&&"documentMode"in document&&11>=document.documentMode,Ia=null,ds=null,_n=null,ms=!1;function ao(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ms||Ia==null||Ia!==jl(n)||(n=Ia,"selectionStart"in n&&ps(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_n&&Jn(_n,n)||(_n=n,n=Di(ds,"onSelect"),0<n.length&&(t=new Ul("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ia)))}function Aa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},vs={},no={};Ot&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function xa(e){if(vs[e])return vs[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in no)return vs[e]=t[a];return e}var lo=xa("animationend"),io=xa("animationiteration"),so=xa("animationstart"),Md=xa("transitionrun"),Rd=xa("transitionstart"),jd=xa("transitioncancel"),ro=xa("transitionend"),uo=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function gt(e,t){uo.set(e,t),Ca(t,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ot=[],$a=0,hs=0;function Bl(){for(var e=$a,t=hs=$a=0;t<e;){var a=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var l=ot[t];ot[t++]=null;var i=ot[t];if(ot[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&oo(a,l,i)}}function Jl(e,t,a,n){ot[$a++]=e,ot[$a++]=t,ot[$a++]=a,ot[$a++]=n,hs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function gs(e,t,a,n){return Jl(e,t,a,n),_l(e)}function Ma(e,t){return Jl(e,null,null,t),_l(e)}function oo(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Fe(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function _l(e){if(50<ul)throw ul=0,Mr=null,Error(v(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function wd(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new wd(e,t,a,n)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function co(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ql(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")ys(e)&&(s=1);else if(typeof e=="string")s=Hm(e,a,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,l),e.elementType=Tt,e.lanes=i,e;case Le:return Ra(a.children,l,i,t);case Rt:s=8,l|=24;break;case We:return e=et(12,a,t,l|2),e.elementType=We,e.lanes=i,e;case Et:return e=et(13,a,t,l),e.elementType=Et,e.lanes=i,e;case Be:return e=et(19,a,t,l),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:s=10;break e;case Zt:s=9;break e;case st:s=11;break e;case X:s=14;break e;case Je:s=16,n=null;break e}s=29,a=Error(v(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ra(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function bs(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fo(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Es(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var po=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=po.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},po.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var tn=[],an=0,Gl=null,Qn=0,ft=[],pt=0,Ft=null,Dt=1,At="";function Ut(e,t){tn[an++]=Qn,tn[an++]=Gl,Gl=e,Qn=t}function mo(e,t,a){ft[pt++]=Dt,ft[pt++]=At,ft[pt++]=Ft,Ft=e;var n=Dt;e=At;var l=32-Fe(n)-1;n&=~(1<<l),a+=1;var i=32-Fe(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Dt=1<<32-Fe(t)+l|a<<l|n,At=i+e}else Dt=1<<i|a<<l|n,At=e}function Ts(e){e.return!==null&&(Ut(e,1),mo(e,1,0))}function Cs(e){for(;e===Gl;)Gl=tn[--an],tn[an]=null,Qn=tn[--an],tn[an]=null;for(;e===Ft;)Ft=ft[--pt],ft[pt]=null,At=ft[--pt],ft[pt]=null,Dt=ft[--pt],ft[pt]=null}function vo(e,t){ft[pt++]=Dt,ft[pt++]=At,ft[pt++]=Ft,Dt=t.id,At=t.overflow,Ft=e}var xe=null,re=null,V=!1,$t=null,dt=!1,Ds=Error(v(519));function ea(e){var t=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gn(ct(t,e)),Ds}function So(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ae]=e,t[Qe]=n,a){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(a=0;a<cl.length;a++)Q(cl[a],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Ru(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),wu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Uf(t.textContent,a)?(n.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),n.onScroll!=null&&Q("scroll",t),n.onScrollEnd!=null&&Q("scrollend",t),n.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ea(e,!0)}function ho(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:xe=xe.return}}function nn(e){if(e!==xe)return!1;if(!V)return ho(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gr(e.type,e.memoizedProps)),a=!a),a&&re&&ea(e),ho(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));re=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));re=Yf(e)}else t===27?(t=re,ma(e.type)?(e=kr,kr=null,re=e):re=t):re=xe?vt(e.stateNode.nextSibling):null;return!0}function ja(){re=xe=null,V=!1}function As(){var e=$t;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),$t=null),e}function Gn(e){$t===null?$t=[e]:$t.push(e)}var xs=c(null),wa=null,Ht=null;function ta(e,t,a){D(xs,t._currentValue),t._currentValue=a}function zt(e){e._currentValue=xs.current,E(xs)}function Ms(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Rs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var u=0;u<t.length;u++)if(r.context===t[u]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Ms(i.return,a,e),n||(s=null);break e}i=r.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(v(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ms(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ln(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(v(387));if(s=s.memoizedProps,s!==null){var r=l.type;$e(l.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(l===F.current){if(s=l.alternate,s===null)throw Error(v(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(vl):e=[vl])}l=l.return}e!==null&&Rs(t,e,a,n),t.flags|=262144}function Yl(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){wa=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return go(wa,e)}function Xl(e,t){return wa===null&&qa(e),go(e,t)}function go(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(v(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var qd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Od=M.unstable_scheduleCallback,Ld=M.unstable_NormalPriority,ge={$$typeof:we,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function js(){return{controller:new qd,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&Od(Ld,function(){e.controller.abort()})}var Xn=null,ws=0,sn=0,rn=null;function Ud(e,t){if(Xn===null){var a=Xn=[];ws=0,sn=Lr(),rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ws++,t.then(yo,yo),t}function yo(){if(--ws===0&&Xn!==null){rn!==null&&(rn.status="fulfilled");var e=Xn;Xn=null,sn=0,rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hd(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var bo=g.S;g.S=function(e,t){nf=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ud(e,t),bo!==null&&bo(e,t)};var Oa=c(null);function qs(){var e=Oa.current;return e!==null?e:se.pooledCache}function Vl(e,t){t===null?D(Oa,Oa.current):D(Oa,t.pool)}function Eo(){var e=qs();return e===null?null:{parent:ge._currentValue,pool:e}}var un=Error(v(460)),Os=Error(v(474)),Pl=Error(v(542)),kl={then:function(){}};function To(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Co(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ao(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(v(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ao(e),e}throw Ua=t,un}}function La(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,un):a}}var Ua=null;function Do(){if(Ua===null)throw Error(v(459));var e=Ua;return Ua=null,e}function Ao(e){if(e===un||e===Pl)throw Error(v(483))}var on=null,Vn=0;function Zl(e){var t=Vn;return Vn+=1,on===null&&(on=[]),Co(on,e,t)}function Pn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wl(e,t){throw t.$$typeof===oe?Error(v(525)):(e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xo(e){function t(f,o){if(e){var p=f.deletions;p===null?(f.deletions=[o],f.flags|=16):p.push(o)}}function a(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function n(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function l(f,o){return f=Lt(f,o),f.index=0,f.sibling=null,f}function i(f,o,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<o?(f.flags|=67108866,o):p):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function r(f,o,p,y){return o===null||o.tag!==6?(o=bs(p,f.mode,y),o.return=f,o):(o=l(o,p),o.return=f,o)}function u(f,o,p,y){var j=p.type;return j===Le?h(f,o,p.props.children,y,p.key):o!==null&&(o.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&La(j)===o.type)?(o=l(o,p.props),Pn(o,p),o.return=f,o):(o=Ql(p.type,p.key,p.props,null,f.mode,y),Pn(o,p),o.return=f,o)}function d(f,o,p,y){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Es(p,f.mode,y),o.return=f,o):(o=l(o,p.children||[]),o.return=f,o)}function h(f,o,p,y,j){return o===null||o.tag!==7?(o=Ra(p,f.mode,y,j),o.return=f,o):(o=l(o,p),o.return=f,o)}function b(f,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=bs(""+o,f.mode,p),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ze:return p=Ql(o.type,o.key,o.props,null,f.mode,p),Pn(p,o),p.return=f,p;case Ne:return o=Es(o,f.mode,p),o.return=f,o;case Je:return o=La(o),b(f,o,p)}if(ht(o)||_e(o))return o=Ra(o,f.mode,p,null),o.return=f,o;if(typeof o.then=="function")return b(f,Zl(o),p);if(o.$$typeof===we)return b(f,Xl(f,o),p);Wl(f,o)}return null}function m(f,o,p,y){var j=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return j!==null?null:r(f,o,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:return p.key===j?u(f,o,p,y):null;case Ne:return p.key===j?d(f,o,p,y):null;case Je:return p=La(p),m(f,o,p,y)}if(ht(p)||_e(p))return j!==null?null:h(f,o,p,y,null);if(typeof p.then=="function")return m(f,o,Zl(p),y);if(p.$$typeof===we)return m(f,o,Xl(f,p),y);Wl(f,p)}return null}function S(f,o,p,y,j){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(p)||null,r(o,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ze:return f=f.get(y.key===null?p:y.key)||null,u(o,f,y,j);case Ne:return f=f.get(y.key===null?p:y.key)||null,d(o,f,y,j);case Je:return y=La(y),S(f,o,p,y,j)}if(ht(y)||_e(y))return f=f.get(p)||null,h(o,f,y,j,null);if(typeof y.then=="function")return S(f,o,p,Zl(y),j);if(y.$$typeof===we)return S(f,o,p,Xl(o,y),j);Wl(o,y)}return null}function A(f,o,p,y){for(var j=null,P=null,R=o,B=o=0,Y=null;R!==null&&B<p.length;B++){R.index>B?(Y=R,R=null):Y=R.sibling;var k=m(f,R,p[B],y);if(k===null){R===null&&(R=Y);break}e&&R&&k.alternate===null&&t(f,R),o=i(k,o,B),P===null?j=k:P.sibling=k,P=k,R=Y}if(B===p.length)return a(f,R),V&&Ut(f,B),j;if(R===null){for(;B<p.length;B++)R=b(f,p[B],y),R!==null&&(o=i(R,o,B),P===null?j=R:P.sibling=R,P=R);return V&&Ut(f,B),j}for(R=n(R);B<p.length;B++)Y=S(R,f,B,p[B],y),Y!==null&&(e&&Y.alternate!==null&&R.delete(Y.key===null?B:Y.key),o=i(Y,o,B),P===null?j=Y:P.sibling=Y,P=Y);return e&&R.forEach(function(ya){return t(f,ya)}),V&&Ut(f,B),j}function q(f,o,p,y){if(p==null)throw Error(v(151));for(var j=null,P=null,R=o,B=o=0,Y=null,k=p.next();R!==null&&!k.done;B++,k=p.next()){R.index>B?(Y=R,R=null):Y=R.sibling;var ya=m(f,R,k.value,y);if(ya===null){R===null&&(R=Y);break}e&&R&&ya.alternate===null&&t(f,R),o=i(ya,o,B),P===null?j=ya:P.sibling=ya,P=ya,R=Y}if(k.done)return a(f,R),V&&Ut(f,B),j;if(R===null){for(;!k.done;B++,k=p.next())k=b(f,k.value,y),k!==null&&(o=i(k,o,B),P===null?j=k:P.sibling=k,P=k);return V&&Ut(f,B),j}for(R=n(R);!k.done;B++,k=p.next())k=S(R,f,B,k.value,y),k!==null&&(e&&k.alternate!==null&&R.delete(k.key===null?B:k.key),o=i(k,o,B),P===null?j=k:P.sibling=k,P=k);return e&&R.forEach(function(Pm){return t(f,Pm)}),V&&Ut(f,B),j}function le(f,o,p,y){if(typeof p=="object"&&p!==null&&p.type===Le&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ze:e:{for(var j=p.key;o!==null;){if(o.key===j){if(j=p.type,j===Le){if(o.tag===7){a(f,o.sibling),y=l(o,p.props.children),y.return=f,f=y;break e}}else if(o.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&La(j)===o.type){a(f,o.sibling),y=l(o,p.props),Pn(y,p),y.return=f,f=y;break e}a(f,o);break}else t(f,o);o=o.sibling}p.type===Le?(y=Ra(p.props.children,f.mode,y,p.key),y.return=f,f=y):(y=Ql(p.type,p.key,p.props,null,f.mode,y),Pn(y,p),y.return=f,f=y)}return s(f);case Ne:e:{for(j=p.key;o!==null;){if(o.key===j)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){a(f,o.sibling),y=l(o,p.children||[]),y.return=f,f=y;break e}else{a(f,o);break}else t(f,o);o=o.sibling}y=Es(p,f.mode,y),y.return=f,f=y}return s(f);case Je:return p=La(p),le(f,o,p,y)}if(ht(p))return A(f,o,p,y);if(_e(p)){if(j=_e(p),typeof j!="function")throw Error(v(150));return p=j.call(p),q(f,o,p,y)}if(typeof p.then=="function")return le(f,o,Zl(p),y);if(p.$$typeof===we)return le(f,o,Xl(f,p),y);Wl(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(a(f,o.sibling),y=l(o,p),y.return=f,f=y):(a(f,o),y=bs(p,f.mode,y),y.return=f,f=y),s(f)):a(f,o)}return function(f,o,p,y){try{Vn=0;var j=le(f,o,p,y);return on=null,j}catch(R){if(R===un||R===Pl)throw R;var P=et(29,R,null,f.mode);return P.lanes=y,P.return=f,P}finally{}}}var Ha=xo(!0),Mo=xo(!1),aa=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(W&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=_l(e),oo(e,null,a),t}return Jl(e,n,t,a),_l(e)}function kn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,hu(e,a)}}function Hs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zs=!1;function Zn(){if(zs){var e=rn;if(e!==null)throw e}}function Wn(e,t,a,n){zs=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var u=r,d=u.next;u.next=null,s===null?i=d:s.next=d,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,r=h.lastBaseUpdate,r!==s&&(r===null?h.firstBaseUpdate=d:r.next=d,h.lastBaseUpdate=u))}if(i!==null){var b=l.baseState;s=0,h=d=u=null,r=i;do{var m=r.lane&-536870913,S=m!==r.lane;if(S?(G&m)===m:(n&m)===m){m!==0&&m===sn&&(zs=!0),h!==null&&(h=h.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var A=e,q=r;m=t;var le=a;switch(q.tag){case 1:if(A=q.payload,typeof A=="function"){b=A.call(le,b,m);break e}b=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=q.payload,m=typeof A=="function"?A.call(le,b,m):A,m==null)break e;b=L({},b,m);break e;case 2:aa=!0}}m=r.callback,m!==null&&(e.flags|=64,S&&(e.flags|=8192),S=l.callbacks,S===null?l.callbacks=[m]:S.push(m))}else S={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},h===null?(d=h=S,u=b):h=h.next=S,s|=m;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;S=r,r=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);h===null&&(u=b),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,i===null&&(l.shared.lanes=0),oa|=s,e.lanes=s,e.memoizedState=b}}function Ro(e,t){if(typeof e!="function")throw Error(v(191,e));e.call(t)}function jo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ro(a[e],t)}var cn=c(null),Kl=c(0);function wo(e,t){e=Vt,D(Kl,e),D(cn,t),Vt=e|t.baseLanes}function Ns(){D(Kl,Vt),D(cn,cn.current)}function Bs(){Vt=Kl.current,E(cn),E(Kl)}var tt=c(null),mt=null;function ia(e){var t=e.alternate;D(Se,Se.current&1),D(tt,e),mt===null&&(t===null||cn.current!==null||t.memoizedState!==null)&&(mt=e)}function Js(e){D(Se,Se.current),D(tt,e),mt===null&&(mt=e)}function qo(e){e.tag===22?(D(Se,Se.current),D(tt,e),mt===null&&(mt=e)):sa()}function sa(){D(Se,Se.current),D(tt,tt.current)}function at(e){E(tt),mt===e&&(mt=null),E(Se)}var Se=c(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vr(a)||Pr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nt=0,N=null,ae=null,ye=null,Fl=!1,fn=!1,za=!1,$l=0,Kn=0,pn=null,zd=0;function pe(){throw Error(v(321))}function _s(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Qs(e,t,a,n,l,i){return Nt=i,N=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?mc:ar,za=!1,i=a(n,l),za=!1,fn&&(i=Lo(t,a,n,l)),Oo(e),i}function Oo(e){g.H=$n;var t=ae!==null&&ae.next!==null;if(Nt=0,ye=ae=N=null,Fl=!1,Kn=0,pn=null,t)throw Error(v(300));e===null||be||(e=e.dependencies,e!==null&&Yl(e)&&(be=!0))}function Lo(e,t,a,n){N=e;var l=0;do{if(fn&&(pn=null),Kn=0,fn=!1,25<=l)throw Error(v(301));if(l+=1,ye=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=vc,i=t(a,n)}while(fn);return i}function Nd(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?In(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(N.flags|=1024),t}function Gs(){var e=$l!==0;return $l=0,e}function Ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if(Fl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fl=!1}Nt=0,ye=ae=N=null,fn=!1,Kn=$l=0,pn=null}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?N.memoizedState=ye=e:ye=ye.next=e,ye}function he(){if(ae===null){var e=N.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ye===null?N.memoizedState:ye.next;if(t!==null)ye=t,ae=e;else{if(e===null)throw N.alternate===null?Error(v(467)):Error(v(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ye===null?N.memoizedState=ye=e:ye=ye.next=e}return ye}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function In(e){var t=Kn;return Kn+=1,pn===null&&(pn=[]),e=Co(pn,e,t),t=N,(ye===null?t.memoizedState:ye.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?mc:ar),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return In(e);if(e.$$typeof===we)return Me(e)}throw Error(v(438,String(e)))}function Vs(e){var t=null,a=N.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=N.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),N.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=_a;return t.index++,a}function Bt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=he();return Ps(t,ae,e)}function Ps(e,t,a){var n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var r=s=null,u=null,d=t,h=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(G&b)===b:(Nt&b)===b){var m=d.revertLane;if(m===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===sn&&(h=!0);else if((Nt&m)===m){d=d.next,m===sn&&(h=!0);continue}else b={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(r=u=b,s=i):u=u.next=b,N.lanes|=m,oa|=m;b=d.action,za&&a(i,b),i=d.hasEagerState?d.eagerState:a(i,b)}else m={lane:b,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(r=u=m,s=i):u=u.next=m,N.lanes|=b,oa|=b;d=d.next}while(d!==null&&d!==t);if(u===null?s=i:u.next=r,!$e(i,e.memoizedState)&&(be=!0,h&&(a=rn,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ks(e){var t=he(),a=t.queue;if(a===null)throw Error(v(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);$e(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Uo(e,t,a){var n=N,l=he(),i=V;if(i){if(a===void 0)throw Error(v(407));a=a()}else a=t();var s=!$e((ae||l).memoizedState,a);if(s&&(l.memoizedState=a,be=!0),l=l.queue,Ks(No.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,dn(9,{destroy:void 0},zo.bind(null,n,l,a,t),null),se===null)throw Error(v(349));i||(Nt&127)!==0||Ho(n,t,a)}return a}function Ho(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=N.updateQueue,t===null?(t=ei(),N.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function zo(e,t,a,n){t.value=a,t.getSnapshot=n,Bo(t)&&Jo(e)}function No(e,t,a){return a(function(){Bo(t)&&Jo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Jo(e){var t=Ma(e,2);t!==null&&ke(t,e,2)}function Zs(e){var t=He();if(typeof e=="function"){var a=e;if(e=a(),za){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:e},t}function _o(e,t,a,n){return e.baseState=a,Ps(e,ae,typeof n=="function"?n:Bt)}function Bd(e,t,a,n,l){if(ii(e))throw Error(v(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};g.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Qo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Qo(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=g.T,s={};g.T=s;try{var r=a(l,n),u=g.S;u!==null&&u(s,r),Go(e,t,r)}catch(d){Ws(e,t,d)}finally{i!==null&&s.types!==null&&(i.types=s.types),g.T=i}}else try{i=a(l,n),Go(e,t,i)}catch(d){Ws(e,t,d)}}function Go(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Yo(e,t,n)},function(n){return Ws(e,t,n)}):Yo(e,t,a)}function Yo(e,t,a){t.status="fulfilled",t.value=a,Xo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Qo(e,a)))}function Ws(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xo(t),t=t.next;while(t!==n)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vo(e,t){return t}function Po(e,t){if(V){var a=se.formState;if(a!==null){e:{var n=N;if(V){if(re){t:{for(var l=re,i=dt;l.nodeType!==8;){if(!i){l=null;break t}if(l=vt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){re=vt(l.nextSibling),n=l.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=He(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},a.queue=n,a=fc.bind(null,N,n),n.dispatch=a,n=Zs(!1),i=tr.bind(null,N,!1,n.queue),n=He(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Bd.bind(null,N,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function ko(e){var t=he();return Zo(t,ae,e)}function Zo(e,t,a){if(t=Ps(e,t,Vo)[0],e=ai(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=In(t)}catch(s){throw s===un?Pl:s}else n=t;t=he();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(N.flags|=2048,dn(9,{destroy:void 0},Jd.bind(null,l,a),null)),[n,i,e]}function Jd(e,t){e.action=t}function Wo(e){var t=he(),a=ae;if(a!==null)return Zo(t,a,e);he(),t=t.memoizedState,a=he();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=N.updateQueue,t===null&&(t=ei(),N.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Ko(){return he().memoizedState}function ni(e,t,a,n){var l=He();N.flags|=e,l.memoizedState=dn(1|t,{destroy:void 0},a,n===void 0?null:n)}function li(e,t,a,n){var l=he();n=n===void 0?null:n;var i=l.memoizedState.inst;ae!==null&&n!==null&&_s(n,ae.memoizedState.deps)?l.memoizedState=dn(t,i,a,n):(N.flags|=e,l.memoizedState=dn(1|t,i,a,n))}function Io(e,t){ni(8390656,8,e,t)}function Ks(e,t){li(2048,8,e,t)}function _d(e){N.flags|=4;var t=N.updateQueue;if(t===null)t=ei(),N.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fo(e){var t=he().memoizedState;return _d({ref:t,nextImpl:e}),function(){if((W&2)!==0)throw Error(v(440));return t.impl.apply(void 0,arguments)}}function $o(e,t){return li(4,2,e,t)}function ec(e,t){return li(4,4,e,t)}function tc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,tc.bind(null,t,e),a)}function Is(){}function nc(e,t){var a=he();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&_s(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lc(e,t){var a=he();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&_s(t,n[1]))return n[0];if(n=e(),za){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n}function Fs(e,t,a){return a===void 0||(Nt&1073741824)!==0&&(G&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),N.lanes|=e,oa|=e,a)}function ic(e,t,a,n){return $e(a,t)?a:cn.current!==null?(e=Fs(e,a,n),$e(e,t)||(be=!0),e):(Nt&42)===0||(Nt&1073741824)!==0&&(G&261930)===0?(be=!0,e.memoizedState=a):(e=sf(),N.lanes|=e,oa|=e,t)}function sc(e,t,a,n,l){var i=C.p;C.p=i!==0&&8>i?i:8;var s=g.T,r={};g.T=r,tr(e,!1,t,a);try{var u=l(),d=g.S;if(d!==null&&d(r,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=Hd(u,n);Fn(e,t,h,it(e))}else Fn(e,t,n,it(e))}catch(b){Fn(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{C.p=i,s!==null&&r.types!==null&&(s.types=r.types),g.T=s}}function Qd(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(v(476));var l=rc(e).queue;sc(e,l,t,U,a===null?Qd:function(){return uc(e),a(n)})}function rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:U},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=rc(e);t.next===null&&(t=e.alternate.memoizedState),Fn(e,t.next.queue,{},it())}function er(){return Me(vl)}function oc(){return he().memoizedState}function cc(){return he().memoizedState}function Gd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var n=la(t,e,a);n!==null&&(ke(n,t,a),kn(n,t,a)),t={cache:js()},e.payload=t;return}t=t.return}}function Yd(e,t,a){var n=it();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?pc(t,a):(a=gs(e,t,a,n),a!==null&&(ke(a,e,n),dc(a,t,n)))}function fc(e,t,a){var n=it();Fn(e,t,a,n)}function Fn(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))pc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,r=i(s,a);if(l.hasEagerState=!0,l.eagerState=r,$e(r,s))return Jl(e,t,l,0),se===null&&Bl(),!1}catch{}finally{}if(a=gs(e,t,l,n),a!==null)return ke(a,e,n),dc(a,t,n),!0}return!1}function tr(e,t,a,n){if(n={lane:2,revertLane:Lr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(v(479))}else t=gs(e,a,n,2),t!==null&&ke(t,e,2)}function ii(e){var t=e.alternate;return e===N||t!==null&&t===N}function pc(e,t){fn=Fl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function dc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,hu(e,a)}}var $n={readContext:Me,use:ti,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe};$n.useEffectEvent=pe;var mc={readContext:Me,use:ti,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Io,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,tc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=He();t=t===void 0?null:t;var n=e();if(za){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=He();if(a!==void 0){var l=a(t);if(za){Wt(!0);try{a(t)}finally{Wt(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Yd.bind(null,N,e),[n.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,a=fc.bind(null,N,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Is,useDeferredValue:function(e,t){var a=He();return Fs(a,e,t)},useTransition:function(){var e=Zs(!1);return e=sc.bind(null,N,e.queue,!0,!1),He().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=N,l=He();if(V){if(a===void 0)throw Error(v(407));a=a()}else{if(a=t(),se===null)throw Error(v(349));(G&127)!==0||Ho(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Io(No.bind(null,n,i,e),[e]),n.flags|=2048,dn(9,{destroy:void 0},zo.bind(null,n,i,a,t),null),a},useId:function(){var e=He(),t=se.identifierPrefix;if(V){var a=At,n=Dt;a=(n&~(1<<32-Fe(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$l++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=zd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:er,useFormState:Po,useActionState:Po,useOptimistic:function(e){var t=He();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tr.bind(null,N,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return He().memoizedState=Gd.bind(null,N)},useEffectEvent:function(e){var t=He(),a={impl:e};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(v(440));return a.impl.apply(void 0,arguments)}}},ar={readContext:Me,use:ti,useCallback:nc,useContext:Me,useEffect:Ks,useImperativeHandle:ac,useInsertionEffect:$o,useLayoutEffect:ec,useMemo:lc,useReducer:ai,useRef:Ko,useState:function(){return ai(Bt)},useDebugValue:Is,useDeferredValue:function(e,t){var a=he();return ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(Bt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:In(e),t]},useSyncExternalStore:Uo,useId:oc,useHostTransitionStatus:er,useFormState:ko,useActionState:ko,useOptimistic:function(e,t){var a=he();return _o(a,ae,e,t)},useMemoCache:Vs,useCacheRefresh:cc};ar.useEffectEvent=Fo;var vc={readContext:Me,use:ti,useCallback:nc,useContext:Me,useEffect:Ks,useImperativeHandle:ac,useInsertionEffect:$o,useLayoutEffect:ec,useMemo:lc,useReducer:ks,useRef:Ko,useState:function(){return ks(Bt)},useDebugValue:Is,useDeferredValue:function(e,t){var a=he();return ae===null?Fs(a,e,t):ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=ks(Bt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:In(e),t]},useSyncExternalStore:Uo,useId:oc,useHostTransitionStatus:er,useFormState:Wo,useActionState:Wo,useOptimistic:function(e,t){var a=he();return ae!==null?_o(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:cc};vc.useEffectEvent=Fo;function nr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:L({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(ke(t,e,n),kn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(ke(t,e,n),kn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(ke(t,e,a),kn(t,e,a))}};function Sc(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(a,n)||!Jn(l,i):!0}function hc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lr.enqueueReplaceState(t,t.state,null)}function Na(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=L({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function gc(e){Nl(e)}function yc(e){console.error(e)}function bc(e){Nl(e)}function si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ec(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ir(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){si(e,t)},a}function Tc(e){return e=na(e),e.tag=3,e}function Cc(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Ec(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ec(t,a,n),typeof l!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Xd(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,l,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return mt===null?gi():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===kl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),wr(e,n,l)),!1;case 22:return a.flags|=65536,n===kl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),wr(e,n,l)),!1}throw Error(v(435,a.tag))}return wr(e,n,l),gi(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Ds&&(e=Error(v(422),{cause:n}),Gn(ct(e,a)))):(n!==Ds&&(t=Error(v(423),{cause:n}),Gn(ct(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ct(n,a),l=ir(e.stateNode,n,l),Hs(e,l),de!==4&&(de=2)),!1;var i=Error(v(520),{cause:n});if(i=ct(i,a),rl===null?rl=[i]:rl.push(i),de!==4&&(de=2),t===null)return!0;n=ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=ir(a.stateNode,n,e),Hs(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Tc(l),Cc(l,e,a,n),Hs(a,l),!1}a=a.return}while(a!==null);return!1}var sr=Error(v(461)),be=!1;function Re(e,t,a,n){t.child=e===null?Mo(t,null,a,n):Ha(t,e.child,a,n)}function Dc(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}else s=n;return qa(t),n=Qs(e,t,a,s,i,l),r=Gs(),e!==null&&!be?(Ys(e,t,l),Jt(e,t,l)):(V&&r&&Ts(t),t.flags|=1,Re(e,t,n,l),t.child)}function Ac(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,xc(e,t,i,n,l)):(e=Ql(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!mr(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Jn,a(s,n)&&e.ref===t.ref)return Jt(e,t,l)}return t.flags|=1,e=Lt(i,n),e.ref=t.ref,e.return=t,t.child=e}function xc(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Jn(i,n)&&e.ref===t.ref)if(be=!1,t.pendingProps=n=i,mr(e,l))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Jt(e,t,l)}return rr(e,t,a,n,l)}function Mc(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Rc(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(t,i!==null?i.cachePool:null),i!==null?wo(t,i):Ns(),qo(t);else return n=t.lanes=536870912,Rc(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Vl(t,i.cachePool),wo(t,i),sa(),t.memoizedState=null):(e!==null&&Vl(t,null),Ns(),sa());return Re(e,t,l,a),t.child}function el(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rc(e,t,a,n,l){var i=qs();return i=i===null?null:{parent:ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vl(t,null),Ns(),qo(t),e!==null&&ln(e,t,n,!0),t.childLanes=l,null}function ri(e,t){return t=oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function jc(e,t,a){return Ha(t,e.child,null,a),e=ri(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vd(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(n.mode==="hidden")return e=ri(t,n),t.lanes=536870912,el(null,e);if(Js(t),(e=re)?(e=Gf(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=fo(e),a.return=t,t.child=a,xe=t,re=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ri(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Js(t),l)if(t.flags&256)t.flags&=-257,t=jc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(v(558));else if(be||ln(e,t,a,!1),l=(a&e.childLanes)!==0,be||l){if(n=se,n!==null&&(s=gu(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ma(e,s),ke(n,e,s),sr;gi(),t=jc(e,t,a)}else e=i.treeContext,re=vt(s.nextSibling),xe=t,V=!0,$t=null,dt=!1,e!==null&&vo(t,e),t=ri(t,n),t.flags|=4096;return t}return e=Lt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ui(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(v(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function rr(e,t,a,n,l){return qa(t),a=Qs(e,t,a,n,void 0,l),n=Gs(),e!==null&&!be?(Ys(e,t,l),Jt(e,t,l)):(V&&n&&Ts(t),t.flags|=1,Re(e,t,a,l),t.child)}function wc(e,t,a,n,l,i){return qa(t),t.updateQueue=null,a=Lo(t,n,a,l),Oo(e),n=Gs(),e!==null&&!be?(Ys(e,t,i),Jt(e,t,i)):(V&&n&&Ts(t),t.flags|=1,Re(e,t,a,i),t.child)}function qc(e,t,a,n,l){if(qa(t),t.stateNode===null){var i=en,s=a.contextType;typeof s=="object"&&s!==null&&(i=Me(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Ls(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Me(s):en,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(nr(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&lr.enqueueReplaceState(i,i.state,null),Wn(t,n,i,l),Zn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,u=Na(a,r);i.props=u;var d=i.context,h=a.contextType;s=en,typeof h=="object"&&h!==null&&(s=Me(h));var b=a.getDerivedStateFromProps;h=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||d!==s)&&hc(t,i,n,s),aa=!1;var m=t.memoizedState;i.state=m,Wn(t,n,i,l),Zn(),d=t.memoizedState,r||m!==d||aa?(typeof b=="function"&&(nr(t,a,b,n),d=t.memoizedState),(u=aa||Sc(t,a,u,n,m,d,s))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),i.props=n,i.state=d,i.context=s,n=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Us(e,t),s=t.memoizedProps,h=Na(a,s),i.props=h,b=t.pendingProps,m=i.context,d=a.contextType,u=en,typeof d=="object"&&d!==null&&(u=Me(d)),r=a.getDerivedStateFromProps,(d=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||m!==u)&&hc(t,i,n,u),aa=!1,m=t.memoizedState,i.state=m,Wn(t,n,i,l),Zn();var S=t.memoizedState;s!==b||m!==S||aa||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof r=="function"&&(nr(t,a,r,n),S=t.memoizedState),(h=aa||Sc(t,a,h,n,m,S,u)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,S,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,S,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),i.props=n,i.state=S,i.context=u,n=h):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,ui(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Ha(t,e.child,null,l),t.child=Ha(t,null,a,l)):Re(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Jt(e,t,l),e}function Oc(e,t,a,n){return ja(),t.flags|=256,Re(e,t,a,n),t.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function or(e){return{baseLanes:e,cachePool:Eo()}}function cr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=lt),e}function Lc(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(l?ia(t):sa(),(e=re)?(e=Gf(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=fo(e),a.return=t,t.child=a,xe=t,re=null)):e=null,e===null)throw ea(t);return Pr(e)?t.lanes=32:t.lanes=536870912,null}var r=n.children;return n=n.fallback,l?(sa(),l=t.mode,r=oi({mode:"hidden",children:r},l),n=Ra(n,l,a,null),r.return=t,n.return=t,r.sibling=n,t.child=r,n=t.child,n.memoizedState=or(a),n.childLanes=cr(e,s,a),t.memoizedState=ur,el(null,n)):(ia(t),fr(t,r))}var u=e.memoizedState;if(u!==null&&(r=u.dehydrated,r!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=pr(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),r=n.fallback,l=t.mode,n=oi({mode:"visible",children:n.children},l),r=Ra(r,l,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,Ha(t,e.child,null,a),n=t.child,n.memoizedState=or(a),n.childLanes=cr(e,s,a),t.memoizedState=ur,t=el(null,n));else if(ia(t),Pr(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var d=s.dgst;s=d,n=Error(v(419)),n.stack="",n.digest=s,Gn({value:n,source:null,stack:null}),t=pr(e,t,a)}else if(be||ln(e,t,a,!1),s=(a&e.childLanes)!==0,be||s){if(s=se,s!==null&&(n=gu(s,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,Ma(e,n),ke(s,e,n),sr;Vr(r)||gi(),t=pr(e,t,a)}else Vr(r)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,re=vt(r.nextSibling),xe=t,V=!0,$t=null,dt=!1,e!==null&&vo(t,e),t=fr(t,n.children),t.flags|=4096);return t}return l?(sa(),r=n.fallback,l=t.mode,u=e.child,d=u.sibling,n=Lt(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,d!==null?r=Lt(d,r):(r=Ra(r,l,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,el(null,n),n=t.child,r=e.child.memoizedState,r===null?r=or(a):(l=r.cachePool,l!==null?(u=ge._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Eo(),r={baseLanes:r.baseLanes|a,cachePool:l}),n.memoizedState=r,n.childLanes=cr(e,s,a),t.memoizedState=ur,el(e.child,n)):(ia(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fr(e,t){return t=oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function oi(e,t){return e=et(22,e,null,t),e.lanes=0,e}function pr(e,t,a){return Ha(t,e.child,null,a),e=fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ms(e.return,t,a)}function dr(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function Hc(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=Se.current,r=(s&2)!==0;if(r?(s=s&1|2,t.flags|=128):s&=1,D(Se,s),Re(e,t,n,a),n=V?Qn:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,a,t);else if(e.tag===19)Uc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),dr(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Il(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}dr(t,!0,a,null,i,n);break;case"together":dr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),oa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function mr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function Pd(e,t,a){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),ta(t,ge,e.memoizedState.cache),ja();break;case 27:case 5:xn(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Js(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Lc(e,t,a):(ia(t),e=Jt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Hc(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(Se,Se.current),n)break;return null;case 22:return t.lanes=0,Mc(e,t,a,t.pendingProps);case 24:ta(t,ge,e.memoizedState.cache)}return Jt(e,t,a)}function zc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!mr(e,a)&&(t.flags&128)===0)return be=!1,Pd(e,t,a);be=(e.flags&131072)!==0}else be=!1,V&&(t.flags&1048576)!==0&&mo(t,Qn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=La(t.elementType),t.type=e,typeof e=="function")ys(e)?(n=Na(e,n),t.tag=1,t=qc(null,t,e,n,a)):(t.tag=0,t=rr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===st){t.tag=11,t=Dc(null,t,e,n,a);break e}else if(l===X){t.tag=14,t=Ac(null,t,e,n,a);break e}}throw t=jt(e)||e,Error(v(306,t,""))}}return t;case 0:return rr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Na(n,t.pendingProps),qc(e,t,n,l,a);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(v(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Us(e,t),Wn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,ge,n),n!==i.cache&&Rs(t,[ge],a,!0),Zn(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Oc(e,t,n,a);break e}else if(n!==l){l=ct(Error(v(424)),t),Gn(l),t=Oc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(re=vt(e.firstChild),xe=t,V=!0,$t=null,dt=!0,a=Mo(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ja(),n===l){t=Jt(e,t,a);break e}Re(e,t,n,a)}t=t.child}return t;case 26:return ui(e,t),e===null?(a=Zf(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,n=Ai(J.current).createElement(a),n[Ae]=t,n[Qe]=e,je(n,a,e),Ce(n),t.stateNode=n):t.memoizedState=Zf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xn(t),e===null&&V&&(n=t.stateNode=Vf(t.type,t.pendingProps,J.current),xe=t,dt=!0,l=re,ma(t.type)?(kr=l,re=vt(n.firstChild)):re=l),Re(e,t,t.pendingProps.children,a),ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((l=n=re)&&(n=Tm(n,t.type,t.pendingProps,dt),n!==null?(t.stateNode=n,xe=t,re=vt(n.firstChild),dt=!1,l=!0):l=!1),l||ea(t)),xn(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,Gr(l,i)?n=null:s!==null&&Gr(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Qs(e,t,Nd,null,null,a),vl._currentValue=l),ui(e,t),Re(e,t,n,a),t.child;case 6:return e===null&&V&&((e=a=re)&&(a=Cm(a,t.pendingProps,dt),a!==null?(t.stateNode=a,xe=t,re=null,e=!0):e=!1),e||ea(t)),null;case 13:return Lc(e,t,a);case 4:return Ue(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ha(t,null,n,a):Re(e,t,n,a),t.child;case 11:return Dc(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Re(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,qa(t),l=Me(l),n=n(l),t.flags|=1,Re(e,t,n,a),t.child;case 14:return Ac(e,t,t.type,t.pendingProps,a);case 15:return xc(e,t,t.type,t.pendingProps,a);case 19:return Hc(e,t,a);case 31:return Vd(e,t,a);case 22:return Mc(e,t,a,t.pendingProps);case 24:return qa(t),n=Me(ge),e===null?(l=qs(),l===null&&(l=se,i=js(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Ls(t),ta(t,ge,l)):((e.lanes&a)!==0&&(Us(e,t),Wn(t,null,null,a),Zn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,ge,n)):(n=i.cache,ta(t,ge,n),n!==l.cache&&Rs(t,[ge],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(v(156,t.tag))}function _t(e){e.flags|=4}function vr(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(cf())e.flags|=8192;else throw Ua=kl,Os}else e.flags&=-16777217}function Nc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(cf())e.flags|=8192;else throw Ua=kl,Os}function ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vu():536870912,e.lanes|=t,hn|=t)}function tl(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function kd(e,t,a){var n=t.pendingProps;switch(Cs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zt(ge),ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?_t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,As())),ue(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(_t(t),i!==null?(ue(t),Nc(t,i)):(ue(t),vr(t,l,null,n,a))):i?i!==e.memoizedState?(_t(t),ue(t),Nc(t,i)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&_t(t),ue(t),vr(t,l,e,n,a)),null;case 27:if(El(t),a=J.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(v(166));return ue(t),null}e=x.current,nn(t)?So(t):(e=Vf(l,n,a),t.stateNode=e,_t(t))}return ue(t),null;case 5:if(El(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(!n){if(t.stateNode===null)throw Error(v(166));return ue(t),null}if(i=x.current,nn(t))So(t);else{var s=Ai(J.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[Ae]=t,i[Qe]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(je(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&_t(t)}}return ue(t),vr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&_t(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(v(166));if(e=J.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=xe,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Uf(e.nodeValue,a)),e||ea(t,!0)}else e=Ai(e).createTextNode(n),e[Ae]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(v(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(557));e[Ae]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=As(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(v(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Ae]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else l=As(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ci(t,t.updateQueue),ue(t),null);case 4:return ve(),e===null&&Nr(t.stateNode.containerInfo),ue(t),null;case 10:return zt(t.type),ue(t),null;case 19:if(E(Se),n=t.memoizedState,n===null)return ue(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)tl(n,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Il(e),i!==null){for(t.flags|=128,tl(n,!1),e=i.updateQueue,t.updateQueue=e,ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)co(a,e),a=a.sibling;return D(Se,Se.current&1|2),V&&Ut(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ke()>vi&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Il(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ci(t,e),tl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!V)return ue(t),null}else 2*Ke()-n.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ke(),e.sibling=null,a=Se.current,D(Se,l?a&1|2:a&1),V&&Ut(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),Bs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&E(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),zt(ge),ue(t),null;case 25:return null;case 30:return null}throw Error(v(156,t.tag))}function Zd(e,t){switch(Cs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zt(ge),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return El(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(v(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Se),null;case 4:return ve(),null;case 10:return zt(t.type),null;case 22:case 23:return at(t),Bs(),e!==null&&E(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zt(ge),null;case 25:return null;default:return null}}function Bc(e,t){switch(Cs(t),t.tag){case 3:zt(ge),ve();break;case 26:case 27:case 5:El(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(Se);break;case 10:zt(t.type);break;case 22:case 23:at(t),Bs(),e!==null&&E(Oa);break;case 24:zt(ge)}}function al(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(r){ee(t,t.return,r)}}function ra(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,l=t;var u=a,d=r;try{d()}catch(h){ee(l,u,h)}}}n=n.next}while(n!==i)}}catch(h){ee(t,t.return,h)}}function Jc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{jo(t,a)}catch(n){ee(e,e.return,n)}}}function _c(e,t,a){a.props=Na(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ee(e,t,l)}}function xt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ee(e,t,l)}else a.current=null}function Qc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ee(e,e.return,l)}}function Sr(e,t,a){try{var n=e.stateNode;Sm(n,e.type,a,t),n[Qe]=t}catch(l){ee(e,e.return,l)}}function Gc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function hr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(gr(e,t,a),e=e.sibling;e!==null;)gr(e,t,a),e=e.sibling}function fi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Yc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);je(t,n,a),t[Ae]=e,t[Qe]=a}catch(i){ee(e,e.return,i)}}var Qt=!1,Ee=!1,yr=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,De=null;function Wd(e,t){if(e=e.containerInfo,_r=Oi,e=to(e),ps(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,r=-1,u=-1,d=0,h=0,b=e,m=null;t:for(;;){for(var S;b!==a||l!==0&&b.nodeType!==3||(r=s+l),b!==i||n!==0&&b.nodeType!==3||(u=s+n),b.nodeType===3&&(s+=b.nodeValue.length),(S=b.firstChild)!==null;)m=b,b=S;for(;;){if(b===e)break t;if(m===a&&++d===l&&(r=s),m===i&&++h===n&&(u=s),(S=b.nextSibling)!==null)break;b=m,m=b.parentNode}b=S}a=r===-1||u===-1?null:{start:r,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qr={focusedElem:e,selectionRange:a},Oi=!1,De=t;De!==null;)if(t=De,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,De=e;else for(;De!==null;){switch(t=De,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var A=Na(a.type,l);e=n.getSnapshotBeforeUpdate(A,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(q){ee(a,a.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(v(163))}if(e=t.sibling,e!==null){e.return=t.return,De=e;break}De=t.return}}function Vc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Yt(e,a),n&4&&al(5,a);break;case 1:if(Yt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var l=Na(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&Jc(a),n&512&&nl(a,a.return);break;case 3:if(Yt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{jo(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Yc(a);case 26:case 5:Yt(e,a),t===null&&n&4&&Qc(a),n&512&&nl(a,a.return);break;case 12:Yt(e,a);break;case 31:Yt(e,a),n&4&&Zc(e,a);break;case 13:Yt(e,a),n&4&&Wc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lm.bind(null,a),Dm(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||Ee,l=Qt;var i=Ee;Qt=n,(Ee=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):Yt(e,a),Qt=l,Ee=i}break;case 30:break;default:Yt(e,a)}}function Pc(e){var t=e.alternate;t!==null&&(e.alternate=null,Pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Ye=!1;function Gt(e,t,a){for(a=a.child;a!==null;)kc(e,t,a),a=a.sibling}function kc(e,t,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 26:Ee||xt(a,t),Gt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||xt(a,t);var n=ce,l=Ye;ma(a.type)&&(ce=a.stateNode,Ye=!1),Gt(e,t,a),pl(a.stateNode),ce=n,Ye=l;break;case 5:Ee||xt(a,t);case 6:if(n=ce,l=Ye,ce=null,Gt(e,t,a),ce=n,Ye=l,ce!==null)if(Ye)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:ce!==null&&(Ye?(e=ce,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),An(e)):_f(ce,a.stateNode));break;case 4:n=ce,l=Ye,ce=a.stateNode.containerInfo,Ye=!0,Gt(e,t,a),ce=n,Ye=l;break;case 0:case 11:case 14:case 15:ra(2,a,t),Ee||ra(4,a,t),Gt(e,t,a);break;case 1:Ee||(xt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&_c(a,t,n)),Gt(e,t,a);break;case 21:Gt(e,t,a);break;case 22:Ee=(n=Ee)||a.memoizedState!==null,Gt(e,t,a),Ee=n;break;default:Gt(e,t,a)}}function Zc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{An(e)}catch(a){ee(t,t.return,a)}}}function Wc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{An(e)}catch(a){ee(t,t.return,a)}}function Kd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xc),t;default:throw Error(v(435,e.tag))}}function pi(e,t){var a=Kd(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=im.bind(null,e,n);n.then(l,l)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,r=s;e:for(;r!==null;){switch(r.tag){case 27:if(ma(r.type)){ce=r.stateNode,Ye=!1;break e}break;case 5:ce=r.stateNode,Ye=!1;break e;case 3:case 4:ce=r.stateNode.containerInfo,Ye=!0;break e}r=r.return}if(ce===null)throw Error(v(160));kc(i,s,l),ce=null,Ye=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kc(t,e),t=t.sibling}var yt=null;function Kc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ve(e),n&4&&(ra(3,e,e.return),al(3,e),ra(5,e,e.return));break;case 1:Xe(t,e),Ve(e),n&512&&(Ee||a===null||xt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=yt;if(Xe(t,e),Ve(e),n&512&&(Ee||a===null||xt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[wn]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),je(i,n,a),i[Ae]=e,Ce(i),n=i;break e;case"link":var s=If("link","href",l).get(n+(a.href||""));if(s){for(var r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}i=l.createElement(n),je(i,n,a),l.head.appendChild(i);break;case"meta":if(s=If("meta","content",l).get(n+(a.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}i=l.createElement(n),je(i,n,a),l.head.appendChild(i);break;default:throw Error(v(468,n))}i[Ae]=e,Ce(i),n=i}e.stateNode=n}else Ff(l,e.type,e.stateNode);else e.stateNode=Kf(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Ff(l,e.type,e.stateNode):Kf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Sr(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ve(e),n&512&&(Ee||a===null||xt(a,a.return)),a!==null&&n&4&&Sr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ve(e),n&512&&(Ee||a===null||xt(a,a.return)),e.flags&32){l=e.stateNode;try{ka(l,"")}catch(A){ee(e,e.return,A)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Sr(e,l,a!==null?a.memoizedProps:l)),n&1024&&(yr=!0);break;case 6:if(Xe(t,e),Ve(e),n&4){if(e.stateNode===null)throw Error(v(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(A){ee(e,e.return,A)}}break;case 3:if(Ri=null,l=yt,yt=xi(t.containerInfo),Xe(t,e),yt=l,Ve(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(A){ee(e,e.return,A)}yr&&(yr=!1,Ic(e));break;case 4:n=yt,yt=xi(e.stateNode.containerInfo),Xe(t,e),Ve(e),yt=n;break;case 12:Xe(t,e),Ve(e);break;case 31:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pi(e,n)));break;case 13:Xe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mi=Ke()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pi(e,n)));break;case 22:l=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,d=Qt,h=Ee;if(Qt=d||l,Ee=h||u,Xe(t,e),Ee=h,Qt=d,Ve(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||u||Qt||Ee||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(i=u.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=u.stateNode;var b=u.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(A){ee(u,u.return,A)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(A){ee(u,u.return,A)}}}else if(t.tag===18){if(a===null){u=t;try{var S=u.stateNode;l?Qf(S,!0):Qf(u.stateNode,!1)}catch(A){ee(u,u.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,pi(e,a))));break;case 19:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,pi(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Gc(n)){a=n;break}n=n.return}if(a==null)throw Error(v(160));switch(a.tag){case 27:var l=a.stateNode,i=hr(e);fi(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(ka(s,""),a.flags&=-33);var r=hr(e);fi(e,r,s);break;case 3:case 4:var u=a.stateNode.containerInfo,d=hr(e);gr(e,d,u);break;default:throw Error(v(161))}}catch(h){ee(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ic(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ic(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vc(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ba(t);break;case 1:xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_c(t,t.return,a),Ba(t);break;case 27:pl(t.stateNode);case 26:case 5:xt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(l,i,a),al(4,i);break;case 1:if(Xt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(d){ee(n,n.return,d)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var u=l.shared.hiddenCallbacks;if(u!==null)for(l.shared.hiddenCallbacks=null,l=0;l<u.length;l++)Ro(u[l],r)}catch(d){ee(n,n.return,d)}}a&&s&64&&Jc(i),nl(i,i.return);break;case 27:Yc(i);case 26:case 5:Xt(l,i,a),a&&n===null&&s&4&&Qc(i),nl(i,i.return);break;case 12:Xt(l,i,a);break;case 31:Xt(l,i,a),a&&s&4&&Zc(l,i);break;case 13:Xt(l,i,a),a&&s&4&&Wc(l,i);break;case 22:i.memoizedState===null&&Xt(l,i,a),nl(i,i.return);break;case 30:break;default:Xt(l,i,a)}t=t.sibling}}function br(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function Er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fc(e,t,a,n),t=t.sibling}function Fc(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,n),l&2048&&al(9,t);break;case 1:bt(e,t,a,n);break;case 3:bt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(l&2048){bt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,r=i.onPostCommit;typeof r=="function"&&r(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else bt(e,t,a,n);break;case 31:bt(e,t,a,n);break;case 13:bt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,n):ll(e,t):i._visibility&2?bt(e,t,a,n):(i._visibility|=2,mn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&br(s,t);break;case 24:bt(e,t,a,n),l&2048&&Er(t.alternate,t);break;default:bt(e,t,a,n)}}function mn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,r=a,u=n,d=s.flags;switch(s.tag){case 0:case 11:case 15:mn(i,s,r,u,l),al(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?mn(i,s,r,u,l):ll(i,s):(h._visibility|=2,mn(i,s,r,u,l)),l&&d&2048&&br(s.alternate,s);break;case 24:mn(i,s,r,u,l),l&&d&2048&&Er(s.alternate,s);break;default:mn(i,s,r,u,l)}t=t.sibling}}function ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ll(a,n),l&2048&&br(n.alternate,n);break;case 24:ll(a,n),l&2048&&Er(n.alternate,n);break;default:ll(a,n)}t=t.sibling}}var il=8192;function vn(e,t,a){if(e.subtreeFlags&il)for(e=e.child;e!==null;)$c(e,t,a),e=e.sibling}function $c(e,t,a){switch(e.tag){case 26:vn(e,t,a),e.flags&il&&e.memoizedState!==null&&zm(a,yt,e.memoizedState,e.memoizedProps);break;case 5:vn(e,t,a);break;case 3:case 4:var n=yt;yt=xi(e.stateNode.containerInfo),vn(e,t,a),yt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,vn(e,t,a),il=n):vn(e,t,a));break;default:vn(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];De=n,af(n,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&ra(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,di(e)):sl(e);break;default:sl(e)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];De=n,af(n,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,di(t));break;default:di(t)}e=e.sibling}}function af(e,t){for(;De!==null;){var a=De;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,De=n;else e:for(a=e;De!==null;){n=De;var l=n.sibling,i=n.return;if(Pc(n),n===a){De=null;break e}if(l!==null){l.return=i,De=l;break e}De=i}}}var Id={getCacheForType:function(e){var t=Me(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Me(ge).controller.signal}},Fd=typeof WeakMap=="function"?WeakMap:Map,W=0,se=null,_=null,G=0,$=0,nt=null,ua=!1,Sn=!1,Tr=!1,Vt=0,de=0,oa=0,Ja=0,Cr=0,lt=0,hn=0,rl=null,Pe=null,Dr=!1,mi=0,nf=0,vi=1/0,Si=null,ca=null,Te=0,fa=null,gn=null,Pt=0,Ar=0,xr=null,lf=null,ul=0,Mr=null;function it(){return(W&2)!==0&&G!==0?G&-G:g.T!==null?Lr():yu()}function sf(){if(lt===0)if((G&536870912)===0||V){var e=Dl;Dl<<=1,(Dl&3932160)===0&&(Dl=262144),lt=e}else lt=536870912;return e=tt.current,e!==null&&(e.flags|=32),lt}function ke(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(yn(e,0),pa(e,G,lt,!1)),jn(e,a),((W&2)===0||e!==se)&&(e===se&&((W&2)===0&&(Ja|=a),de===4&&pa(e,G,lt,!1)),Mt(e))}function rf(e,t,a){if((W&6)!==0)throw Error(v(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rn(e,t),l=n?tm(e,t):jr(e,t,!0),i=n;do{if(l===0){Sn&&!n&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$d(a)){l=jr(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var r=e;l=rl;var u=r.current.memoizedState.isDehydrated;if(u&&(yn(r,s).flags|=256),s=jr(r,s,!1),s!==2){if(Tr&&!u){r.errorRecoveryDisabledLanes|=i,Ja|=i,l=4;break e}i=Pe,Pe=l,i!==null&&(Pe===null?Pe=i:Pe.push.apply(Pe,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){yn(e,0),pa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(v(345));case 4:if((t&4194048)!==t)break;case 6:pa(n,t,lt,!ua);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(v(329))}if((t&62914560)===t&&(l=mi+300-Ke(),10<l)){if(pa(n,t,lt,!ua),xl(n,0,!0)!==0)break e;Pt=t,n.timeoutHandle=Bf(uf.bind(null,n,a,Pe,Si,Dr,t,lt,Ja,hn,ua,i,"Throttled",-0,0),l);break e}uf(n,a,Pe,Si,Dr,t,lt,Ja,hn,ua,i,null,-0,0)}}break}while(!0);Mt(e)}function uf(e,t,a,n,l,i,s,r,u,d,h,b,m,S){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},$c(t,i,b);var A=(i&62914560)===i?mi-Ke():(i&4194048)===i?nf-Ke():0;if(A=Nm(b,A),A!==null){Pt=i,e.cancelPendingCommit=A(Sf.bind(null,e,t,i,a,n,l,s,r,u,h,b,null,m,S)),pa(e,i,s,!d);return}}Sf(e,t,i,a,n,l,s,r,u)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!$e(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,n){t&=~Cr,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-Fe(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&Su(e,a,t)}function hi(){return(W&6)===0?(ol(0),!1):!0}function Rr(){if(_!==null){if($===0)var e=_.return;else e=_,Ht=wa=null,Xs(e),on=null,Vn=0,e=_;for(;e!==null;)Bc(e.alternate,e),e=e.return;_=null}}function yn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ym(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pt=0,Rr(),se=e,_=a=Lt(e.current,null),G=t,$=0,nt=null,ua=!1,Sn=Rn(e,t),Tr=!1,hn=lt=Cr=Ja=oa=de=0,Pe=rl=null,Dr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Fe(n),i=1<<l;t|=e[l],n&=~i}return Vt=t,Bl(),a}function of(e,t){N=null,g.H=$n,t===un||t===Pl?(t=Do(),$=3):t===Os?(t=Do(),$=4):$=t===sr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,_===null&&(de=1,si(e,ct(t,e.current)))}function cf(){var e=tt.current;return e===null?!0:(G&4194048)===G?mt===null:(G&62914560)===G||(G&536870912)!==0?e===mt:!1}function ff(){var e=g.H;return g.H=$n,e===null?$n:e}function pf(){var e=g.A;return g.A=Id,e}function gi(){de=4,ua||(G&4194048)!==G&&tt.current!==null||(Sn=!0),(oa&134217727)===0&&(Ja&134217727)===0||se===null||pa(se,G,lt,!1)}function jr(e,t,a){var n=W;W|=2;var l=ff(),i=pf();(se!==e||G!==t)&&(Si=null,yn(e,t)),t=!1;var s=de;e:do try{if($!==0&&_!==null){var r=_,u=nt;switch($){case 8:Rr(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,nt=null,bn(e,r,u,d),a&&Sn){s=0;break e}break;default:d=$,$=0,nt=null,bn(e,r,u,d)}}em(),s=de;break}catch(h){of(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ht=wa=null,W=n,g.H=l,g.A=i,_===null&&(se=null,G=0,Bl()),s}function em(){for(;_!==null;)df(_)}function tm(e,t){var a=W;W|=2;var n=ff(),l=pf();se!==e||G!==t?(Si=null,vi=Ke()+500,yn(e,t)):Sn=Rn(e,t);e:do try{if($!==0&&_!==null){t=_;var i=nt;t:switch($){case 1:$=0,nt=null,bn(e,t,i,1);break;case 2:case 9:if(To(i)){$=0,nt=null,mf(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),Mt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:To(i)?($=0,nt=null,mf(t)):($=0,nt=null,bn(e,t,i,7));break;case 5:var s=null;switch(_.tag){case 26:s=_.memoizedState;case 5:case 27:var r=_;if(s?$f(s):r.stateNode.complete){$=0,nt=null;var u=r.sibling;if(u!==null)_=u;else{var d=r.return;d!==null?(_=d,yi(d)):_=null}break t}}$=0,nt=null,bn(e,t,i,5);break;case 6:$=0,nt=null,bn(e,t,i,6);break;case 8:Rr(),de=6;break e;default:throw Error(v(462))}}am();break}catch(h){of(e,h)}while(!0);return Ht=wa=null,g.H=n,g.A=l,W=a,_!==null?0:(se=null,G=0,Bl(),de)}function am(){for(;_!==null&&!Ap();)df(_)}function df(e){var t=zc(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?yi(e):_=t}function mf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=wc(a,t,t.pendingProps,t.type,void 0,G);break;case 11:t=wc(a,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Xs(t);default:Bc(a,t),t=_=co(t,Vt),t=zc(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?yi(e):_=t}function bn(e,t,a,n){Ht=wa=null,Xs(t),on=null,Vn=0;var l=t.return;try{if(Xd(e,l,t,a,G)){de=1,si(e,ct(a,e.current)),_=null;return}}catch(i){if(l!==null)throw _=l,i;de=1,si(e,ct(a,e.current)),_=null;return}t.flags&32768?(V||n===1?e=!0:Sn||(G&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),vf(t,e)):yi(t)}function yi(e){var t=e;do{if((t.flags&32768)!==0){vf(t,ua);return}e=t.return;var a=kd(t.alternate,t,Vt);if(a!==null){_=a;return}if(t=t.sibling,t!==null){_=t;return}_=t=e}while(t!==null);de===0&&(de=5)}function vf(e,t){do{var a=Zd(e.alternate,e);if(a!==null){a.flags&=32767,_=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){_=e;return}_=e=a}while(e!==null);de=6,_=null}function Sf(e,t,a,n,l,i,s,r,u){e.cancelPendingCommit=null;do bi();while(Te!==0);if((W&6)!==0)throw Error(v(327));if(t!==null){if(t===e.current)throw Error(v(177));if(i=t.lanes|t.childLanes,i|=hs,Hp(e,a,i,s,r,u),e===se&&(_=se=null,G=0),gn=t,fa=e,Pt=a,Ar=i,xr=l,lf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sm(Tl,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=g.T,g.T=null,l=C.p,C.p=2,s=W,W|=4;try{Wd(e,t,a)}finally{W=s,C.p=l,g.T=n}}Te=1,hf(),gf(),yf()}}function hf(){if(Te===1){Te=0;var e=fa,t=gn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var n=C.p;C.p=2;var l=W;W|=4;try{Kc(t,e);var i=Qr,s=to(e.containerInfo),r=i.focusedElem,u=i.selectionRange;if(s!==r&&r&&r.ownerDocument&&eo(r.ownerDocument.documentElement,r)){if(u!==null&&ps(r)){var d=u.start,h=u.end;if(h===void 0&&(h=d),"selectionStart"in r)r.selectionStart=d,r.selectionEnd=Math.min(h,r.value.length);else{var b=r.ownerDocument||document,m=b&&b.defaultView||window;if(m.getSelection){var S=m.getSelection(),A=r.textContent.length,q=Math.min(u.start,A),le=u.end===void 0?q:Math.min(u.end,A);!S.extend&&q>le&&(s=le,le=q,q=s);var f=$u(r,q),o=$u(r,le);if(f&&o&&(S.rangeCount!==1||S.anchorNode!==f.node||S.anchorOffset!==f.offset||S.focusNode!==o.node||S.focusOffset!==o.offset)){var p=b.createRange();p.setStart(f.node,f.offset),S.removeAllRanges(),q>le?(S.addRange(p),S.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),S.addRange(p))}}}}for(b=[],S=r;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<b.length;r++){var y=b[r];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Oi=!!_r,Qr=_r=null}finally{W=l,C.p=n,g.T=a}}e.current=t,Te=2}}function gf(){if(Te===2){Te=0;var e=fa,t=gn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var n=C.p;C.p=2;var l=W;W|=4;try{Vc(e,t.alternate,t)}finally{W=l,C.p=n,g.T=a}}Te=3}}function yf(){if(Te===4||Te===3){Te=0,xp();var e=fa,t=gn,a=Pt,n=lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,gn=fa=null,bf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ca=null),ki(a),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=g.T,l=C.p,C.p=2,g.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var r=n[s];i(r.value,{componentStack:r.stack})}}finally{g.T=t,C.p=l}}(Pt&3)!==0&&bi(),Mt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Mr?ul++:(ul=0,Mr=e):ul=0,ol(0)}}function bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function bi(){return hf(),gf(),yf(),Ef()}function Ef(){if(Te!==5)return!1;var e=fa,t=Ar;Ar=0;var a=ki(Pt),n=g.T,l=C.p;try{C.p=32>a?32:a,g.T=null,a=xr,xr=null;var i=fa,s=Pt;if(Te=0,gn=fa=null,Pt=0,(W&6)!==0)throw Error(v(331));var r=W;if(W|=4,tf(i.current),Fc(i,i.current,s,a),W=r,ol(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Mn,i)}catch{}return!0}finally{C.p=l,g.T=n,bf(e,t)}}function Tf(e,t,a){t=ct(a,t),t=ir(e.stateNode,t,2),e=la(e,t,2),e!==null&&(jn(e,2),Mt(e))}function ee(e,t,a){if(e.tag===3)Tf(e,e,a);else for(;t!==null;){if(t.tag===3){Tf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ca===null||!ca.has(n))){e=ct(a,e),a=Tc(2),n=la(t,a,2),n!==null&&(Cc(a,n,t,e),jn(n,2),Mt(n));break}}t=t.return}}function wr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Fd;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Tr=!0,l.add(a),e=nm.bind(null,e,t,a),t.then(e,e))}function nm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(G&a)===a&&(de===4||de===3&&(G&62914560)===G&&300>Ke()-mi?(W&2)===0&&yn(e,0):Cr|=a,hn===G&&(hn=0)),Mt(e)}function Cf(e,t){t===0&&(t=vu()),e=Ma(e,t),e!==null&&(jn(e,t),Mt(e))}function lm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(e,a)}function im(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(v(314))}n!==null&&n.delete(t),Cf(e,a)}function sm(e,t){return Yi(e,t)}var Ei=null,En=null,qr=!1,Ti=!1,Or=!1,da=0;function Mt(e){e!==En&&e.next===null&&(En===null?Ei=En=e:En=En.next=e),Ti=!0,qr||(qr=!0,um())}function ol(e,t){if(!Or&&Ti){Or=!0;do for(var a=!1,n=Ei;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-Fe(42|e)+1)-1,i&=l&~(s&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Mf(n,i))}else i=G,i=xl(n,n===se?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Rn(n,i)||(a=!0,Mf(n,i));n=n.next}while(a);Or=!1}}function rm(){Df()}function Df(){Ti=qr=!1;var e=0;da!==0&&gm()&&(e=da);for(var t=Ke(),a=null,n=Ei;n!==null;){var l=n.next,i=Af(n,t);i===0?(n.next=null,a===null?Ei=l:a.next=l,l===null&&(En=a)):(a=n,(e!==0||(i&3)!==0)&&(Ti=!0)),n=l}Te!==0&&Te!==5||ol(e),da!==0&&(da=0)}function Af(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-Fe(i),r=1<<s,u=l[s];u===-1?((r&a)===0||(r&n)!==0)&&(l[s]=Up(r,t)):u<=t&&(e.expiredLanes|=r),i&=~r}if(t=se,a=G,a=xl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xi(n),ki(a)){case 2:case 8:a=du;break;case 32:a=Tl;break;case 268435456:a=mu;break;default:a=Tl}return n=xf.bind(null,e),a=Yi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xi(n),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var n=G;return n=xl(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(rf(e,n,t),Af(e,Ke()),e.callbackNode!=null&&e.callbackNode===a?xf.bind(null,e):null)}function Mf(e,t){if(bi())return null;rf(e,t,!0)}function um(){bm(function(){(W&6)!==0?Yi(pu,rm):Df()})}function Lr(){if(da===0){var e=sn;e===0&&(e=Cl,Cl<<=1,(Cl&261888)===0&&(Cl=256)),da=e}return da}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(""+e)}function jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function om(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Rf((l[Qe]||null).action),s=n.submitter;s&&(t=(t=s[Qe]||null)?Rf(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var r=new Ul("action","action",null,n,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(da!==0){var u=s?jf(l,s):new FormData(l);$s(a,{pending:!0,data:u,method:l.method,action:i},null,u)}}else typeof i=="function"&&(r.preventDefault(),u=s?jf(l,s):new FormData(l),$s(a,{pending:!0,data:u,method:l.method,action:i},i,u))},currentTarget:l}]})}}for(var Ur=0;Ur<Ss.length;Ur++){var Hr=Ss[Ur],cm=Hr.toLowerCase(),fm=Hr[0].toUpperCase()+Hr.slice(1);gt(cm,"on"+fm)}gt(lo,"onAnimationEnd"),gt(io,"onAnimationIteration"),gt(so,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(Md,"onTransitionRun"),gt(Rd,"onTransitionStart"),gt(jd,"onTransitionCancel"),gt(ro,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var r=n[s],u=r.instance,d=r.currentTarget;if(r=r.listener,u!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=d;try{i(l)}catch(h){Nl(h)}l.currentTarget=null,i=u}else for(s=0;s<n.length;s++){if(r=n[s],u=r.instance,d=r.currentTarget,r=r.listener,u!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=d;try{i(l)}catch(h){Nl(h)}l.currentTarget=null,i=u}}}}function Q(e,t){var a=t[Zi];a===void 0&&(a=t[Zi]=new Set);var n=e+"__bubble";a.has(n)||(qf(t,e,2,!1),a.add(n))}function zr(e,t,a){var n=0;t&&(n|=4),qf(a,e,n,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Ci]){e[Ci]=!0,Tu.forEach(function(a){a!=="selectionchange"&&(pm.has(a)||zr(a,!1,e),zr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,zr("selectionchange",!1,t))}}function qf(e,t,a,n){switch(sp(t)){case 2:var l=_m;break;case 8:l=Qm;break;default:l=Fr}a=l.bind(null,t,a,e),l=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Br(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var r=n.stateNode.containerInfo;if(r===l)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;r!==null;){if(s=Ga(r),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=i=s;continue e}r=r.parentNode}}n=n.return}Uu(function(){var d=i,h=ts(a),b=[];e:{var m=uo.get(e);if(m!==void 0){var S=Ul,A=e;switch(e){case"keypress":if(Ol(a)===0)break e;case"keydown":case"keyup":S=id;break;case"focusin":A="focus",S=rs;break;case"focusout":A="blur",S=rs;break;case"beforeblur":case"afterblur":S=rs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ud;break;case lo:case io:case so:S=Kp;break;case ro:S=cd;break;case"scroll":case"scrollend":S=Vp;break;case"wheel":S=pd;break;case"copy":case"cut":case"paste":S=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ju;break;case"toggle":case"beforetoggle":S=md}var q=(t&4)!==0,le=!q&&(e==="scroll"||e==="scrollend"),f=q?m!==null?m+"Capture":null:m;q=[];for(var o=d,p;o!==null;){var y=o;if(p=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||p===null||f===null||(y=On(o,f),y!=null&&q.push(fl(o,y,p))),le)break;o=o.return}0<q.length&&(m=new S(m,A,null,a,h),b.push({event:m,listeners:q}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&a!==es&&(A=a.relatedTarget||a.fromElement)&&(Ga(A)||A[Qa]))break e;if((S||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,S?(A=a.relatedTarget||a.toElement,S=d,A=A?Ga(A):null,A!==null&&(le=Z(A),q=A.tag,A!==le||q!==5&&q!==27&&q!==6)&&(A=null)):(S=null,A=d),S!==A)){if(q=Nu,y="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(q=Ju,y="onPointerLeave",f="onPointerEnter",o="pointer"),le=S==null?m:qn(S),p=A==null?m:qn(A),m=new q(y,o+"leave",S,a,h),m.target=le,m.relatedTarget=p,y=null,Ga(h)===d&&(q=new q(f,o+"enter",A,a,h),q.target=p,q.relatedTarget=le,y=q),le=y,S&&A)t:{for(q=dm,f=S,o=A,p=0,y=f;y;y=q(y))p++;y=0;for(var j=o;j;j=q(j))y++;for(;0<p-y;)f=q(f),p--;for(;0<y-p;)o=q(o),y--;for(;p--;){if(f===o||o!==null&&f===o.alternate){q=f;break t}f=q(f),o=q(o)}q=null}else q=null;S!==null&&Of(b,m,S,q,!1),A!==null&&le!==null&&Of(b,le,A,q,!0)}}e:{if(m=d?qn(d):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var P=ku;else if(Vu(m))if(Zu)P=Dd;else{P=Td;var R=Ed}else S=m.nodeName,!S||S.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&$i(d.elementType)&&(P=ku):P=Cd;if(P&&(P=P(e,d))){Pu(b,P,a,h);break e}R&&R(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&Fi(m,"number",m.value)}switch(R=d?qn(d):window,e){case"focusin":(Vu(R)||R.contentEditable==="true")&&(Ia=R,ds=d,_n=null);break;case"focusout":_n=ds=Ia=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,ao(b,a,h);break;case"selectionchange":if(xd)break;case"keydown":case"keyup":ao(b,a,h)}var B;if(os)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ka?Yu(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(_u&&a.locale!=="ko"&&(Ka||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ka&&(B=Hu()):(It=h,ls="value"in It?It.value:It.textContent,Ka=!0)),R=Di(d,Y),0<R.length&&(Y=new Bu(Y,e,null,a,h),b.push({event:Y,listeners:R}),B?Y.data=B:(B=Xu(a),B!==null&&(Y.data=B)))),(B=Sd?hd(e,a):gd(e,a))&&(Y=Di(d,"onBeforeInput"),0<Y.length&&(R=new Bu("onBeforeInput","beforeinput",null,a,h),b.push({event:R,listeners:Y}),R.data=B)),om(b,e,d,a,h)}wf(b,t)})}function fl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Di(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=On(e,a),l!=null&&n.unshift(fl(e,l,i)),l=On(e,t),l!=null&&n.push(fl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Of(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var r=a,u=r.alternate,d=r.stateNode;if(r=r.tag,u!==null&&u===n)break;r!==5&&r!==26&&r!==27||d===null||(u=d,l?(d=On(a,i),d!=null&&s.unshift(fl(a,d,u))):l||(d=On(a,i),d!=null&&s.push(fl(a,d,u)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var mm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(vm,"")}function Uf(e,t){return t=Lf(t),Lf(e)===t}function ne(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||ka(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&ka(e,""+n);break;case"className":Rl(e,"class",n);break;case"tabIndex":Rl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(e,a,n);break;case"style":Ou(e,n,i);break;case"data":if(t!=="object"){Rl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",l.name,l,null),ne(e,t,"formEncType",l.formEncType,l,null),ne(e,t,"formMethod",l.formMethod,l,null),ne(e,t,"formTarget",l.formTarget,l,null)):(ne(e,t,"encType",l.encType,l,null),ne(e,t,"method",l.method,l,null),ne(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=qt);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(v(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(v(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=wl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Ml(e,"popover",n);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ml(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yp.get(a)||a,Ml(e,a,n))}}function Jr(e,t,a,n,l,i){switch(a){case"style":Ou(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(v(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(v(60));e.innerHTML=a}}break;case"children":typeof n=="string"?ka(e,n):(typeof n=="number"||typeof n=="bigint")&&ka(e,""+n);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"onClick":n!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Qe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ml(e,a,n)}}}function je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:ne(e,t,i,s,a,null)}}l&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":Q("invalid",e);var r=i=s=l=null,u=null,d=null;for(n in a)if(a.hasOwnProperty(n)){var h=a[n];if(h!=null)switch(n){case"name":l=h;break;case"type":s=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(v(137,t));break;default:ne(e,t,n,h,a,null)}}Ru(e,i,r,u,d,s,l,!1);return;case"select":Q("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(r=a[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":s=r;break;case"multiple":n=r;default:ne(e,t,l,r,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Pa(e,!!n,t,!1):a!=null&&Pa(e,!!n,a,!0);return;case"textarea":Q("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(r=a[s],r!=null))switch(s){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(v(91));break;default:ne(e,t,s,r,a,null)}wu(e,n,l,i);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(n=0;n<cl.length;n++)Q(cl[n],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:ne(e,t,d,n,a,null)}return;default:if($i(t)){for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!==void 0&&Jr(e,t,h,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&ne(e,t,r,n,a,null))}function Sm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,r=null,u=null,d=null,h=null;for(S in a){var b=a[S];if(a.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":u=b;default:n.hasOwnProperty(S)||ne(e,t,S,null,n,b)}}for(var m in n){var S=n[m];if(b=a[m],n.hasOwnProperty(m)&&(S!=null||b!=null))switch(m){case"type":i=S;break;case"name":l=S;break;case"checked":d=S;break;case"defaultChecked":h=S;break;case"value":s=S;break;case"defaultValue":r=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(v(137,t));break;default:S!==b&&ne(e,t,m,S,n,b)}}Ii(e,s,r,u,d,h,i,l);return;case"select":S=s=r=m=null;for(i in a)if(u=a[i],a.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":S=u;default:n.hasOwnProperty(i)||ne(e,t,i,null,n,u)}for(l in n)if(i=n[l],u=a[l],n.hasOwnProperty(l)&&(i!=null||u!=null))switch(l){case"value":m=i;break;case"defaultValue":r=i;break;case"multiple":s=i;default:i!==u&&ne(e,t,l,i,n,u)}t=r,a=s,n=S,m!=null?Pa(e,!!a,m,!1):!!n!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":S=m=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ne(e,t,r,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":m=l;break;case"defaultValue":S=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(v(91));break;default:l!==i&&ne(e,t,s,l,n,i)}ju(e,m,S);return;case"option":for(var A in a)if(m=a[A],a.hasOwnProperty(A)&&m!=null&&!n.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:ne(e,t,A,null,n,m)}for(u in n)if(m=n[u],S=a[u],n.hasOwnProperty(u)&&m!==S&&(m!=null||S!=null))switch(u){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ne(e,t,u,m,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in a)m=a[q],a.hasOwnProperty(q)&&m!=null&&!n.hasOwnProperty(q)&&ne(e,t,q,null,n,m);for(d in n)if(m=n[d],S=a[d],n.hasOwnProperty(d)&&m!==S&&(m!=null||S!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(v(137,t));break;default:ne(e,t,d,m,n,S)}return;default:if($i(t)){for(var le in a)m=a[le],a.hasOwnProperty(le)&&m!==void 0&&!n.hasOwnProperty(le)&&Jr(e,t,le,void 0,n,m);for(h in n)m=n[h],S=a[h],!n.hasOwnProperty(h)||m===S||m===void 0&&S===void 0||Jr(e,t,h,m,n,S);return}}for(var f in a)m=a[f],a.hasOwnProperty(f)&&m!=null&&!n.hasOwnProperty(f)&&ne(e,t,f,null,n,m);for(b in n)m=n[b],S=a[b],!n.hasOwnProperty(b)||m===S||m==null&&S==null||ne(e,t,b,m,n,S)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,r=l.duration;if(i&&r&&Hf(s)){for(s=0,r=l.responseEnd,n+=1;n<a.length;n++){var u=a[n],d=u.startTime;if(d>r)break;var h=u.transferSize,b=u.initiatorType;h&&Hf(b)&&(u=u.responseEnd,s+=h*(u<r?1:(r-d)/(u-d)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _r=null,Qr=null;function Ai(e){return e.nodeType===9?e:e.ownerDocument}function zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yr=null;function gm(){var e=window.event;return e&&e.type==="popstate"?e===Yr?!1:(Yr=e,!0):(Yr=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,ym=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,bm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(Em)}:Bf;function Em(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function _f(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),An(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")pl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,r=i.nodeName;i[wn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&pl(e.ownerDocument.body);a=l}while(a);An(t)}function Qf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Xr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xr(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Tm(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[wn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Cm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function Gf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Vr(e){return e.data==="$?"||e.data==="$~"}function Pr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var kr=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Ai(a),e){case"html":if(e=t.documentElement,!e)throw Error(v(452));return e;case"head":if(e=t.head,!e)throw Error(v(453));return e;case"body":if(e=t.body,!e)throw Error(v(454));return e;default:throw Error(v(451))}}function pl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var St=new Map,Pf=new Set;function xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kt=C.d;C.d={f:Am,r:xm,D:Mm,C:Rm,L:jm,m:wm,X:Om,S:qm,M:Lm};function Am(){var e=kt.f(),t=hi();return e||t}function xm(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?uc(t):kt.r(e)}var Tn=typeof document>"u"?null:document;function kf(e,t,a){var n=Tn;if(n&&typeof t=="string"&&t){var l=ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Pf.has(l)||(Pf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),je(t,"link",e),Ce(t),n.head.appendChild(t)))}}function Mm(e){kt.D(e),kf("dns-prefetch",e,null)}function Rm(e,t){kt.C(e,t),kf("preconnect",e,t)}function jm(e,t,a){kt.L(e,t,a);var n=Tn;if(n&&e&&t){var l='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ut(a.imageSizes)+'"]')):l+='[href="'+ut(e)+'"]';var i=l;switch(t){case"style":i=Cn(e);break;case"script":i=Dn(e)}St.has(i)||(e=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),St.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(dl(i))||t==="script"&&n.querySelector(ml(i))||(t=n.createElement("link"),je(t,"link",e),Ce(t),n.head.appendChild(t)))}}function wm(e,t){kt.m(e,t);var a=Tn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dn(e)}if(!St.has(i)&&(e=L({rel:"modulepreload",href:e},t),St.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(i)))return}n=a.createElement("link"),je(n,"link",e),Ce(n),a.head.appendChild(n)}}}function qm(e,t,a){kt.S(e,t,a);var n=Tn;if(n&&e){var l=Xa(n).hoistableStyles,i=Cn(e);t=t||"default";var s=l.get(i);if(!s){var r={loading:0,preload:null};if(s=n.querySelector(dl(i)))r.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},a),(a=St.get(i))&&Zr(e,a);var u=s=n.createElement("link");Ce(u),je(u,"link",e),u._p=new Promise(function(d,h){u.onload=d,u.onerror=h}),u.addEventListener("load",function(){r.loading|=1}),u.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Mi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:r},l.set(i,s)}}}function Om(e,t){kt.X(e,t);var a=Tn;if(a&&e){var n=Xa(a).hoistableScripts,l=Dn(e),i=n.get(l);i||(i=a.querySelector(ml(l)),i||(e=L({src:e,async:!0},t),(t=St.get(l))&&Wr(e,t),i=a.createElement("script"),Ce(i),je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Lm(e,t){kt.M(e,t);var a=Tn;if(a&&e){var n=Xa(a).hoistableScripts,l=Dn(e),i=n.get(l);i||(i=a.querySelector(ml(l)),i||(e=L({src:e,async:!0,type:"module"},t),(t=St.get(l))&&Wr(e,t),i=a.createElement("script"),Ce(i),je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Zf(e,t,a,n){var l=(l=J.current)?xi(l):null;if(!l)throw Error(v(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Cn(a.href),a=Xa(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cn(a.href);var i=Xa(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(dl(e)))&&!i._p&&(s.instance=i,s.state.loading=5),St.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},St.set(e,a),i||Um(l,e,a,s.state))),t&&n===null)throw Error(v(528,""));return s}if(t&&n!==null)throw Error(v(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dn(a),a=Xa(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,e))}}function Cn(e){return'href="'+ut(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function Wf(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function Um(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),je(t,"link",a),Ce(t),e.head.appendChild(t))}function Dn(e){return'[src="'+ut(e)+'"]'}function ml(e){return"script[async]"+e}function Kf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Ce(n),n;var l=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ce(n),je(n,"style",l),Mi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Cn(a.href);var i=e.querySelector(dl(l));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;n=Wf(a),(l=St.get(l))&&Zr(n,l),i=(e.ownerDocument||e).createElement("link"),Ce(i);var s=i;return s._p=new Promise(function(r,u){s.onload=r,s.onerror=u}),je(i,"link",n),t.state.loading|=4,Mi(i,a.precedence,e),t.instance=i;case"script":return i=Dn(a.src),(l=e.querySelector(ml(i)))?(t.instance=l,Ce(l),l):(n=a,(l=St.get(i))&&(n=L({},a),Wr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ce(l),je(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(v(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Mi(n,a.precedence,e));return t.instance}function Mi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var r=n[s];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function If(e,t,a){if(Ri===null){var n=new Map,l=Ri=new Map;l.set(a,n)}else l=Ri,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[wn]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var r=n.get(s);r?r.push(i):n.set(s,[i])}}return n}function Ff(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Hm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zm(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Cn(n.href),i=t.querySelector(dl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ji.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ce(i);return}i=t.ownerDocument||t,n=Wf(n),(l=St.get(l))&&Zr(n,l),i=i.createElement("link"),Ce(i);var s=i;s._p=new Promise(function(r,u){s.onload=r,s.onerror=u}),je(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ji.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Kr=0;function Nm(e,t){return e.stylesheets&&e.count===0&&qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Kr===0&&(Kr=62500*hm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Kr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wi=null;function qi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wi=new Map,t.forEach(Bm,e),wi=null,ji.call(e))}function Bm(e,t){if(!(t.state.loading&4)){var a=wi.get(e);if(a)var n=a.get(null);else{a=new Map,wi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=ji.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var vl={$$typeof:we,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Jm(e,t,a,n,l,i,s,r,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function ep(e,t,a,n,l,i,s,r,u,d,h,b){return e=new Jm(e,t,a,s,u,d,h,b,r),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=js(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Ls(i),e}function tp(e){return e?(e=en,e):en}function ap(e,t,a,n,l,i){l=tp(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(ke(a,e,t),kn(a,e,t))}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ir(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=Ma(e,67108864);t!==null&&ke(t,e,67108864),Ir(e,67108864)}}function ip(e){if(e.tag===13||e.tag===31){var t=it();t=Pi(t);var a=Ma(e,t);a!==null&&ke(a,e,t),Ir(e,t)}}var Oi=!0;function _m(e,t,a,n){var l=g.T;g.T=null;var i=C.p;try{C.p=2,Fr(e,t,a,n)}finally{C.p=i,g.T=l}}function Qm(e,t,a,n){var l=g.T;g.T=null;var i=C.p;try{C.p=8,Fr(e,t,a,n)}finally{C.p=i,g.T=l}}function Fr(e,t,a,n){if(Oi){var l=$r(n);if(l===null)Br(e,t,n,Li,a),rp(e,n);else if(Ym(l,e,t,a,n))n.stopPropagation();else if(rp(e,n),t&4&&-1<Gm.indexOf(e)){for(;l!==null;){var i=Ya(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ta(i.pendingLanes);if(s!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var u=1<<31-Fe(s);r.entanglements[1]|=u,s&=~u}Mt(i),(W&6)===0&&(vi=Ke()+500,ol(0))}}break;case 31:case 13:r=Ma(i,2),r!==null&&ke(r,i,2),hi(),Ir(i,2)}if(i=$r(n),i===null&&Br(e,t,n,Li,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Br(e,t,n,null,a)}}function $r(e){return e=ts(e),eu(e)}var Li=null;function eu(e){if(Li=null,e=Ga(e),e!==null){var t=Z(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=me(t),e!==null)return e;e=null}else if(a===31){if(e=Oe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Li=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mp()){case pu:return 2;case du:return 8;case Tl:case Rp:return 32;case mu:return 268435456;default:return 32}default:return 32}}var tu=!1,va=null,Sa=null,ha=null,Sl=new Map,hl=new Map,ga=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rp(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Sl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function gl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ya(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ym(e,t,a,n,l){switch(t){case"focusin":return va=gl(va,e,t,a,n,l),!0;case"dragenter":return Sa=gl(Sa,e,t,a,n,l),!0;case"mouseover":return ha=gl(ha,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return Sl.set(i,gl(Sl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,hl.set(i,gl(hl.get(i)||null,e,t,a,n,l)),!0}return!1}function up(e){var t=Ga(e.target);if(t!==null){var a=Z(t);if(a!==null){if(t=a.tag,t===13){if(t=me(a),t!==null){e.blockedOn=t,bu(e.priority,function(){ip(a)});return}}else if(t===31){if(t=Oe(a),t!==null){e.blockedOn=t,bu(e.priority,function(){ip(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$r(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Ya(a),t!==null&&lp(t),e.blockedOn=a,!1;t.shift()}return!0}function op(e,t,a){Ui(e)&&a.delete(t)}function Xm(){tu=!1,va!==null&&Ui(va)&&(va=null),Sa!==null&&Ui(Sa)&&(Sa=null),ha!==null&&Ui(ha)&&(ha=null),Sl.forEach(op),hl.forEach(op)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,tu||(tu=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Xm)))}var zi=null;function cp(e){zi!==e&&(zi=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){zi===e&&(zi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(eu(n||a)===null)continue;break}var i=Ya(a);i!==null&&(e.splice(t,3),t-=3,$s(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function An(e){function t(u){return Hi(u,e)}va!==null&&Hi(va,e),Sa!==null&&Hi(Sa,e),ha!==null&&Hi(ha,e),Sl.forEach(t),hl.forEach(t);for(var a=0;a<ga.length;a++){var n=ga[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ga.length&&(a=ga[0],a.blockedOn===null);)up(a),a.blockedOn===null&&ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[Qe]||null;if(typeof i=="function")s||cp(a);else if(s){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Qe]||null)r=s.formAction;else if(eu(l)!==null)continue}else r=s.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),cp(a)}}}function fp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function au(e){this._internalRoot=e}Ni.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));var a=t.current,n=it();ap(a,n,e,t,null,null)},Ni.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ap(e.current,2,null,e,null,null),hi(),t[Qa]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=yu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ga.length&&t!==0&&t<ga[a].priority;a++);ga.splice(a,0,e),a===0&&up(e)}};var pp=fe.version;if(pp!=="19.2.4")throw Error(v(527,pp,"19.2.4"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=T(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Vm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{Mn=Bi.inject(Vm),Ie=Bi}catch{}}return bl.createRoot=function(e,t){if(!O(e))throw Error(v(299));var a=!1,n="",l=gc,i=yc,s=bc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ep(e,1,!1,null,null,a,n,null,l,i,s,fp),e[Qa]=t.current,Nr(e),new au(t)},bl.hydrateRoot=function(e,t,a){if(!O(e))throw Error(v(299));var n=!1,l="",i=gc,s=yc,r=bc,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=ep(e,1,!0,t,a??null,n,l,u,i,s,r,fp),t.context=tp(null),a=t.current,n=it(),n=Pi(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,jn(t,a),Mt(t),e[Qa]=t.current,Nr(e),new Ni(t)},bl.version="19.2.4",bl}var Tp;function tv(){if(Tp)return iu.exports;Tp=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),iu.exports=ev(),iu.exports}var av=tv();function nv(){const[M,fe]=Cp.useState(null),K=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
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
      
      `},{id:15,question:"15. ⭐ 5️⃣ Explain Session Tracking Techniques in Servlets Cookies, Hidden Form Field, URL Rewriting, HttpSession ⭐⭐⭐",answer:"📌 MOST IMPORTANT TOPIC 🔥",codeExample:`
⭐ What is Session Tracking?

HTTP is a stateless protocol.

👉 That means server does NOT remember previous request.


So we use Session Tracking to:

    ✔ Maintain user data
    ✔ Remember login information
    ✔ Store user activity


⭐ 1️⃣ Cookies
🔹 Meaning

Cookies are small text files stored on client browser.
Server sends cookie → Browser stores it → Sends back with next request.

🔹 Example

Cookie ck = new Cookie("username", "Raj");
response.addCookie(ck);


To read cookie:

Cookie[] cookies = request.getCookies();


🔹 Advantages

✔ Simple
✔ Automatic sending

🔹 Disadvantages

❌ Stored on client
❌ Can be disabled



⭐ 2️⃣ Hidden Form Field
🔹 Meaning

Data is stored in hidden input field inside HTML form.

🔹 Example

<input type="hidden" name="username" value="Raj">


Retrieve in servlet:

String name = request.getParameter("username");


🔹 Advantages

✔ Easy to implement

🔹 Disadvantages

❌ Works only with forms
❌ Not secure



⭐ 3️⃣ URL Rewriting
🔹 Meaning

Session data is added to URL.


Example:

http://localhost:8080/app?username=Raj


🔹 Example

response.sendRedirect("welcome?username=Raj");


Get value:

String name = request.getParameter("username");


🔹 Advantages

✔ Works when cookies disabled

🔹 Disadvantages

❌ Data visible in URL
❌ Not secure



⭐ 4️⃣ HttpSession ⭐⭐⭐ (Most Important)
🔹 Meaning

HttpSession stores data on server side.
Best and most secure method.


🔹 Example

Create session:

HttpSession session = request.getSession();
session.setAttribute("username", "Raj");


Get session value:

String name = (String) session.getAttribute("username");


Destroy session:

session.invalidate();


🔹 Advantages

✔ Secure
✔ Stored on server
✔ Can store objects

🔹 Disadvantages

❌ Uses server memory


⭐ Comparison Table

| Technique     | Stored At | Secure | Used For              |
| ------------- | --------- | ------ | --------------------- |
| Cookies       | Client    | Medium | Login                 |
| Hidden Field  | Client    | Low    | Form data             |
| URL Rewriting | URL       | Low    | When cookies disabled |
| HttpSession   | Server    | High   | Login, Shopping cart  |



⭐ Simple Diagram

Client ↔ Server
   |
Cookies / URL / Hidden Field
   |
HttpSession (Server Side Storage)


⭐ One-Line Exam Answer

Session tracking techniques are used to maintain user data across multiple requests in a web application.

🧠 Memory Trick

CHUH

C → Cookies
H → Hidden Field
U → URL Rewriting
H → HttpSession


--------------------------------------------------------


⭐ 1️⃣ Cookies – Full Example

👉 First Servlet (Create Cookie)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Create Cookie
        Cookie ck = new Cookie("username", "Raj");
        response.addCookie(ck);

        out.println("Cookie Created");
        out.println("<a href='cookie2'>Go to Next</a>");
    }
}

👉 Second Servlet (Read Cookie)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        PrintWriter out = response.getWriter();

        Cookie[] cookies = request.getCookies();

        for (Cookie c : cookies) {
            if (c.getName().equals("username")) {
                out.println("Welcome " + c.getValue());
            }
        }
    }
}



⭐ 2️⃣ Hidden Form Field – Full Example

👉 HTML Page

<form action="hiddenServlet" method="get">
    <input type="hidden" name="username" value="Raj">
    <input type="submit" value="Submit">
</form>

👉 Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HiddenServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = request.getParameter("username");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}



⭐ 3️⃣ URL Rewriting – Full Example

👉 First Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class URLServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        PrintWriter out = response.getWriter();

        out.println("<a href='url2?username=Raj'>Click Here</a>");
    }
}

👉 Second Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class URLServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = request.getParameter("username");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}



⭐ 4️⃣ HttpSession – Full Example ⭐⭐⭐

👉 First Servlet (Create Session)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        HttpSession session = request.getSession();

        session.setAttribute("username", "Raj");

        PrintWriter out = response.getWriter();
        out.println("Session Created");
        out.println("<a href='session2'>Next</a>");
    }
}

👉 Second Servlet (Get Session Data)

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet2 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        HttpSession session = request.getSession(false);

        PrintWriter out = response.getWriter();

        if (session != null) {
            String name = (String) session.getAttribute("username");
            out.println("Welcome " + name);
        } else {
            out.println("No Session Found");
        }
    }
}


⭐ Which One is Best?

✔ Cookies → Simple
✔ Hidden Field → Only forms
✔ URL Rewriting → When cookies disabled
✔ HttpSession → ⭐ Most Secure & Recommended


⭐ Viva Important Line

HttpSession is the most commonly used session tracking technique because it stores data on the server 
side.
      `},{id:16,question:"16. ⭐ 6️⃣ Explain RequestDispatcher and sendRedirect() or 👉 Difference between forward() and sendRedirect()",answer:"",codeExample:`
⭐ 1️⃣ RequestDispatcher
🔹 Meaning

RequestDispatcher is used to:

    👉 Forward request from one resource to another (Servlet/JSP/HTML)
    👉 Include another resource’s output

📌 It works on server side


🔹 Methods

forward()
include()


🔹 Example of forward()

First Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FirstServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("name", "Raj");

        RequestDispatcher rd =
            request.getRequestDispatcher("second");

        rd.forward(request, response);
    }
}


Second Servlet

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        String name = (String) request.getAttribute("name");

        PrintWriter out = response.getWriter();
        out.println("Welcome " + name);
    }
}




⭐ 2️⃣ sendRedirect()
🔹 Meaning

sendRedirect() is used to:

    👉 Redirect client to another resource

📌 It works on client side


🔹 Example

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RedirectServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException {

        response.sendRedirect("https://www.google.com");
    }
}


⭐ Difference Between forward() and sendRedirect() ⭐⭐

| forward()             | sendRedirect()           |
| --------------------- | ------------------------ |
| Server side           | Client side              |
| Same request object   | New request object       |
| URL does not change   | URL changes              |
| Faster                | Slower                   |
| Can pass request data | Cannot pass request data |


⭐ Diagram Difference

forward()

Client → Servlet1 → Servlet2
           (same request)

URL stays same.


sendRedirect()

Client → Servlet1 → Client → Servlet2

Browser makes new request.
URL changes.



⭐ Very Important Viva Points

✔ forward() keeps request data
✔ sendRedirect() creates new request
✔ forward() is faster


⭐ One-Line Exam Answer

RequestDispatcher forward() transfers control on the server side without changing URL, while 
sendRedirect() redirects the client to a new URL and creates a new request.

🧠 Memory Trick

F → Fast → Forward
R → Reload → Redirect
      
      `},{id:17,question:"17. Explain Servlet Filter & Filter API Filter, FilterChain, FilterConfig, Mapping",answer:"📌 New concept → high chance in exam",codeExample:`
🔵 What is Filter? (Very Simple)

Imagine 👇

You enter a college gate.
Before going inside:

    👉 Security checks your ID card.

That security = Filter
Classroom = Servlet

So,

👉 Filter checks request
👉 Then allows it to go to servlet


🔵 Simple Flow

Client → Filter → Servlet → Filter → Client

Filter works:

    Before servlet
    After servlet


⭐ Why Use Filter?

✔ Authentication
✔ Logging
✔ Data validation
✔ Compression
✔ Encryption



⭐ Filter API Components

Filter API is in package:

    javax.servlet

Main components:

1️⃣ Filter
2️⃣ FilterChain
3️⃣ FilterConfig
4️⃣ Filter Mapping
    


⭐ 1️⃣ Filter Interface

You must implement:

init()
doFilter()
destroy()


Example Filter:

import java.io.*;
import javax.servlet.*;

public class MyFilter implements Filter {

    public void init(FilterConfig config) {
        System.out.println("Filter initialized");
    }

    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        System.out.println("Request received");

        // Pass request to next resource
        chain.doFilter(request, response);

        System.out.println("Response sent");
    }

    public void destroy() {
        System.out.println("Filter destroyed");
    }
}



⭐ 2️⃣ FilterChain
🔹 Meaning

FilterChain is used to:

👉 Pass request to next filter or servlet

Without this line:

    chain.doFilter(request, response);

Request will NOT reach servlet.



⭐ 3️⃣ What is FilterConfig? (Very Simple)

Think like this:

👉 When filter starts, it may need some initial values
Example:

    Admin name
    Password
    Message
    Any configuration value

These values are written in web.xml
FilterConfig helps to read those values.

⭐ Real Example (Step by Step)

🔹 Step 1: Write Filter with init()

import java.io.*;
import javax.servlet.*;

public class MyFilter implements Filter {

    FilterConfig config;

    // init() runs only once
    public void init(FilterConfig config) {
        this.config = config;   // store config object
    }

    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        PrintWriter out = response.getWriter();

        // Get value from web.xml
        String admin = config.getInitParameter("adminName");

        out.println("Admin Name from web.xml: " + admin);

        chain.doFilter(request, response);
    }

    public void destroy() {}
}


🔹 Step 2: Add Initialization Parameter in web.xml

<filter>
    <filter-name>MyFilter</filter-name>
    <filter-class>MyFilter</filter-class>

    <!-- Initialization Parameter -->
    <init-param>
        <param-name>adminName</param-name>
        <param-value>Raj</param-value>
    </init-param>

</filter>


🔹 What Happens?

1️⃣ Server starts filter
2️⃣ init() runs
3️⃣ FilterConfig gets value from web.xml
4️⃣ doFilter() prints:

Admin Name from web.xml: Raj



⭐ 4️⃣ What is Filter Mapping?

Now very important part 👇

Filter mapping tells:

    👉 On which URL or servlet this filter should work
    Without mapping → Filter will NOT run.


⭐ Example of Filter Mapping

<filter-mapping>
    <filter-name>MyFilter</filter-name>
    <url-pattern>/hello</url-pattern>
</filter-mapping>


This means:

Filter runs only when user accesses:

http://localhost:8080/app/hello


⭐ If We Write

    <url-pattern>/*</url-pattern>

It means:

✔ Filter runs for ALL requests
✔ Every servlet
✔ Every JSP


⭐ Simple Diagram

    Client → Filter (MyFilter) → HelloServlet

Only if mapping matches.


⭐ Real-Life Example

Imagine filter is:

🔒 Security Guard

Mapping is:

📍 Which door he should stand at

If door = /*
→ Guard checks everyone

If door = /admin
→ Guard checks only admin page


⭐ Quick Summary

| Topic          | Meaning                            |
| -------------- | ---------------------------------- |
| FilterConfig   | Reads init parameters from web.xml |
| Filter Mapping | Decides where filter will apply    |


⭐ One-Line Exam Answer

FilterConfig is used to get initialization parameters of filter from web.xml, and filter mapping is used to 
define the URL pattern where filter should be applied.


🧠 Memory Trick

F C C M

Filter
Chain
Config
Mapping
`},{id:18,question:"18. 🧠 2 MARK / MCQ – JUST READ",answer:"",codeExample:`
Default HTTP port → 80
Servlet is managed by → Servlet Container
Web server example → Apache Tomcat
Application server → JBoss, GlassFish
Session id created by → Container
doGet() → URL data
doPost() → Form body data
      `},{id:21,question:"21. Explain JSP Architecture and Working.",answer:"📌 Very common theory question.",codeExample:`
⭐ 1️⃣ What is JSP?

First think about this question:

When we make a website page like:

    <h1>Welcome Raj</h1>

This is HTML (static).


But sometimes we want dynamic data like:

    user name
    date
    database data

So we use JSP (Java Server Pages).

👉 JSP is a technology used to create dynamic web pages using Java.

It allows us to write:

    HTML
    Java code

inside the same page.


Example JSP:

<html>
<body>

<%
out.println("Hello JSP");
%>

</body>
</html>

📌 JSP runs on the server, not in the browser.



⭐ 2️⃣ JSP Architecture (How JSP Works)

Before I explain, look at this flow carefully.

Client (Browser)
       |
       v
   Web Server
       |
       v
 Servlet Container (Tomcat)
       |
       v
      JSP
       |
       v
   Converted to Servlet
       |
       v
  Compiled Java Class
       |
       v
   Response to Client


📌 Important idea:

JSP is internally converted into a Servlet.



⭐ 3️⃣ JSP Working Process (Step by Step)

Let’s go step by step.


Step 1 – Client Request

User opens page:

http://localhost:8080/app/index.jsp

Browser sends request to web server.


Step 2 – Request goes to Servlet Container

The server forwards request to Servlet Container (Tomcat).


Step 3 – JSP is converted to Servlet

If JSP is accessed first time:
JSP file → Converted into Servlet (.java file)

Example:
index.jsp → index_jsp.java


Step 4 – Servlet is compiled

Servlet container compiles it:
index_jsp.java → index_jsp.class


Step 5 – Servlet executes

The servlet executes and generates HTML response.


Step 6 – Response sent to Browser

Finally browser receives output.



⭐ JSP Working Diagram (Important for Exam)

Browser
   |
   v
Web Server
   |
   v
Servlet Container
   |
   v
JSP Page
   |
   v
Converted to Servlet
   |
   v
Compiled Class
   |
   v
Response to Browser



⭐ 4️⃣ Advantages of JSP over Servlets

Now think:

Servlet → mostly Java code
JSP → mostly HTML + small Java
So JSP is easier for web pages.

| JSP                  | Servlet                |
| -------------------- | ---------------------- |
| Easy to write HTML   | HTML writing difficult |
| Less Java code       | More Java code         |
| Faster development   | Slower development     |
| Better for UI design | Better for logic       |


⭐ Simple Example

JSP Page

<html>
<body>

<h2>Welcome to JSP</h2>

<%
String name = "Raj";
out.println("Hello " + name);
%>

</body>
</html>

Output:

Welcome to JSP
Hello Raj


⭐ One-Line Exam Answer

JSP is a server-side technology used to create dynamic web pages. A JSP page is converted into a servlet 
by the servlet container and executed to generate the response.
      
      `},{id:22,question:"22. Explain JSP Life Cycle with diagram.",answer:"📌 Very important exam question.",codeExample:`
➡ JSP is converted into a Servlet by the servlet container (Tomcat).

So the JSP life cycle is very similar to the Servlet life cycle.

Let’s go step by step.


⭐ JSP Life Cycle

The JSP Life Cycle describes how a JSP page is:

1️⃣ Converted to servlet
2️⃣ Compiled
3️⃣ Loaded
4️⃣ Executed
5️⃣ Destroyed

The servlet container manages all these steps.


⭐ JSP Life Cycle Diagram (Important for Exam)

JSP Page
   |
   v
Translation
(JSP → Servlet)
   |
   v
Compilation
(Servlet → .class)
   |
   v
Class Loading
   |
   v
Instantiation
   |
   v
jspInit()
   |
   v
_jspService()
   |
   v
jspDestroy()


⭐ Step 1️⃣ JSP Translation

When a JSP page runs for the first time, the container converts it into a Servlet (.java file).

Example:

    index.jsp → index_jsp.java

This process is called Translation.


⭐ Step 2️⃣ Compilation

Now the generated servlet file is compiled.

    index_jsp.java → index_jsp.class

This is normal Java compilation.


⭐ Step 3️⃣ Class Loading

The servlet container loads the compiled .class file into memory.
Now the JSP servlet is ready to run.


⭐ Step 4️⃣ Instantiation

The container creates an object of the JSP servlet class.

Example idea:

    new index_jsp();

Now the JSP object exists in memory.


⭐ Step 5️⃣ Initialization – jspInit()

After object creation, the container calls:

    jspInit()

Purpose:

✔ Initialize resources
✔ Database connection
✔ Configuration setup

Important point:

    📌 This method runs only once.

Example:

<%! 
public void jspInit(){
    System.out.println("JSP Initialized");
}
%>


⭐ Step 6️⃣ Request Processing – _jspService()

This method processes every client request.

Example:

    _jspService(request, response)

Important points:

✔ Runs for every request
✔ Generates response
✔ Cannot be overridden by user


⭐ Step 7️⃣ Destruction – jspDestroy()

When the server stops or JSP is removed, the container calls:

    jspDestroy()

Purpose:

✔ Release resources
✔ Close connections

Example:

<%! 
public void jspDestroy(){
    System.out.println("JSP Destroyed");
}
%>


⭐ Summary Table

| Step          | Description              |
| ------------- | ------------------------ |
| Translation   | JSP → Servlet            |
| Compilation   | Servlet → Class file     |
| Class Loading | Class loaded into memory |
| Instantiation | Object created           |
| jspInit()     | Initialization           |
| _jspService() | Handles requests         |
| jspDestroy()  | Cleanup                  |


⭐ One-Line Exam Answer

JSP life cycle includes translation, compilation, class loading, instantiation, initialization (jspInit), request 
processing (_jspService), and destruction (jspDestroy).




----------------------------------------------------------------

Example:


<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%!
/* Initialization method - runs only once when JSP loads */
public void jspInit(){
    System.out.println("JSP Initialized");
}

/* Destruction method - runs when server stops or JSP is unloaded */
public void jspDestroy(){
    System.out.println("JSP Destroyed");
}
%>

<!DOCTYPE html>
<html>
<head>
    <title>JSP Life Cycle Example</title>
</head>
<body>

<h2>JSP Life Cycle Demonstration</h2>

<%
    // This code runs inside _jspService() method automatically
    out.println("This content is generated from _jspService() method.<br>");
    out.println("Current Time: " + new java.util.Date());
%>

</body>
</html>
      `},{id:23,question:"23. Explain JSP Scripting Elements.",answer:"Often asked in exam.",codeExample:`
⭐ JSP Scripting Elements

In JSP we sometimes need to write Java code inside HTML page.
The special tags used to write Java code in JSP are called Scripting Elements.

There are 3 types:

1️⃣ Scriptlet
2️⃣ Expression
3️⃣ Declaration



⭐ 1️⃣ Scriptlet <% %>

First think:
Where do we normally write Java statements like loops or variables?

👉 That is done using Scriptlet.

Syntax
<% Java code %>


Example

<html>
<body>

<%
int a = 10;
int b = 20;
out.println("Sum = " + (a+b));
%>

</body>
</html>


Output:

Sum = 30


📌 Scriptlet is used to write Java logic (statements).

Examples:

loops
conditions
variable creation



⭐ 2️⃣ Expression <%= %>

Now imagine you just want to display a value on the webpage.

Instead of writing:

    out.println(value);

JSP provides Expression.

Syntax
<%= expression %>

Example
<html>
<body>

Current Time: <%= new java.util.Date() %>

</body>
</html>


Output example:

Current Time: Tue Mar 12 22:30:10 IST 2026


📌 Expression automatically prints value.

So internally JSP converts:

<%= value %>

into

out.println(value);



⭐ 3️⃣ Declaration <%! %>

Declaration is used to declare variables or methods.
These become class-level variables in the generated servlet.

Syntax
<%! declaration %>

Example
<%!
int count = 0;

public int add(int a, int b){
    return a + b;
}
%>

Result = <%= add(5,3) %>


Output:

Result = 8


📌 Declaration is used for:

variables
methods
class level code


⭐ Simple Comparison

| Element            | Purpose                   |
| -------------------| ------------------------- |
| Scriptlet <% %>    | Write Java statements     |
| Expression <%= %>  | Print output              |
| Declaration <%! %> | Declare variables/methods |


⭐ Easy Diagram
JSP Page
   |
   |-- Scriptlet <% %> → Java Logic
   |-- Expression <%= %> → Display Value
   |-- Declaration <%! %> → Variables/Methods


⭐ One-Line Exam Answer

JSP scripting elements are used to embed Java code inside JSP pages. The three types are Scriptlet, 
Expression, and Declaration.
      
      `},{id:24,question:"24. Explain JSP Implicit Objects.",answer:"📌 Very important long answer.",codeExample:`
⭐ JSP Implicit Objects

First understand the idea.
In JSP, some objects are automatically created by the JSP container.
You do NOT need to declare them.
These ready-to-use objects are called Implicit Objects.

📌 Total JSP implicit objects = 9


But for exam, the important ones are:

request
response
session
application
out
config
pageContext
page
exception



⭐ 1️⃣ request Object
Meaning

request object stores client request information.

Example:

form data
user input
parameters

Example
<%
String name = request.getParameter("username");
out.println("Welcome " + name);
%>

📌 Used for:

getting form values
client request information



⭐ 2️⃣ response Object
Meaning

response object is used to send response to the client (browser).

Example:

redirect page
send output

Example
<%
response.sendRedirect("home.jsp");
%>

📌 Used for:

redirecting pages
sending response to browser



⭐ 3️⃣ session Object
Meaning

session object stores user data during session.


Example:

login information
user id

Example
<%
session.setAttribute("user","Raj");
%>


Retrieve value:

<%
String user = (String)session.getAttribute("user");
%>

📌 Used for:

login sessions
storing user data



⭐ 4️⃣ application Object
Meaning

application object stores data shared by all users.
It represents ServletContext.

Example
<%
application.setAttribute("count",100);
%>

📌 Used for:

global application data



⭐ 5️⃣ out Object
Meaning

out is used to send output to browser.

It is similar to:

    System.out.println()

but prints to webpage.

Example
<%
out.println("Hello JSP");
%>



⭐ 6️⃣ config Object
Meaning

config object is used to get servlet configuration information.

Example
<%
String value = config.getServletName();
out.println(value);
%>

📌 Used to access init parameters.



⭐ 7️⃣ pageContext Object
Meaning

pageContext is used to access all JSP objects.
It manages page scope data.

Example
<%
pageContext.setAttribute("msg","Hello");
%>

📌 Used to:

manage page attributes
access other implicit objects



⭐ 8️⃣ page Object
Meaning

page object represents current JSP page instance.

It is similar to:

    this

in Java.

Example:
<%
out.println(page);
%>



⭐ 9️⃣ exception Object
Meaning

exception object is used only in error pages.
It stores error information.

Example:

<%= exception.getMessage() %>

Used in:

<%@ page isErrorPage="true" %>



⭐ Easy Diagram

Client (Browser)
       |
       v
   JSP Page
       |
--------------------------------
| request   → client data       |
| response  → send response     |
| session   → user session      |
| application → global data     |
| out       → print output      |
| config    → servlet config    |
| pageContext → page control    |
| page      → current page      |
| exception → error info        |
--------------------------------


⭐ One-Line Exam Definition

JSP implicit objects are automatically created objects provided by the JSP container that can be used 
directly in JSP pages without declaration.
      
      `},{id:25,question:"25. Explain JavaBeans in JSP.",answer:"📌 High chance question.",codeExample:`
⭐ 1️⃣ What is JavaBean (Very Simple)

JavaBean is just a normal Java class used to store data.

Example: storing

student name
marks
age


But the rule is:

variables private
use getter and setter methods



⭐ 2️⃣ JavaBean Class (Student.java)

This file is created inside Java classes folder.

public class Student {

    private String name;   // variable
    private int marks;     // variable

    // setter method
    public void setName(String name){
        this.name = name;
    }

    // getter method
    public String getName(){
        return name;
    }

    // setter
    public void setMarks(int marks){
        this.marks = marks;
    }

    // getter
    public int getMarks(){
        return marks;
    }
}

Now this class only stores values.
But JSP will use this class.



⭐ 3️⃣ JSP Page Using JavaBean

Now JSP creates object of the class.

Step 1 — Create Bean Object

<jsp:useBean id="s" class="Student"/>

Meaning:
create object s of class Student

Same as Java:
Student s = new Student();


⭐ 4️⃣ Setting Values (Setter)

Now JSP sets values inside object.

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Internally JSP converts it to Java:

    s.setName("Raj");
    s.setMarks(90);

So values stored in object.



⭐ 5️⃣ Getting Values (Getter)

Now we print the values.

Name : <jsp:getProperty name="s" property="name"/>
Marks : <jsp:getProperty name="s" property="marks"/>


Internally JSP converts to:

s.getName();
s.getMarks();


⭐ Full JSP Example

<jsp:useBean id="s" class="Student"/>

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Name : <jsp:getProperty name="s" property="name"/>

Marks : <jsp:getProperty name="s" property="marks"/>


Output

Name : Raj
Marks : 90



⭐ Simple Flow Diagram

JSP Page
   |
   | create object
   v
Student Bean Object
   |
   | set values
   v
setName("Raj")
setMarks(90)
   |
   | get values
   v
getName()
getMarks()
   |
   v
Display on webpage



⭐ Easy Trick to Remember

set = store value
get = read value

Example:

setName("Raj")   → store name
getName()        → read name



⭐ Real Life Example

Think JavaBean like Student Form.

Name field → setName()
Marks field → setMarks()

Show result → getName()
Show marks → getMarks()


Now I want to check one thing (very important):

If variable is

    private int age;
      

--------------------------------------------------------------------------


1️⃣ Look carefully at this line

<jsp:setProperty name="s" property="name" value="Raj"/>


Focus on this part:

    property="name"


This tells JSP:

👉 Use the variable called name


So JSP searches in the JavaBean:

    set + Name

So it calls:

    setName("Raj")


2️⃣ If you write property="marks"

Example:

    <jsp:setProperty name="s" property="marks" value="90"/>

Now JSP sees:

    property="marks"


So JSP searches:

    setMarks()


and internally it calls:

s.setMarks(90);


3️⃣ Simple Rule

JSP always uses:

property name = variable name

Then it creates method name automatically.

property="name"  → setName()
property="marks" → setMarks()
property="age"   → setAge()


4️⃣ Visual Flow
property="name"
      ↓
variable = name
      ↓
method = setName()


Another example:

property="marks"
      ↓
variable = marks
      ↓
method = setMarks()


5️⃣ Example JavaBean

private String name;
private int marks;

Methods:

setName()
getName()

setMarks()
getMarks()

JSP matches property name with variable name.


6️⃣ Very Simple Example

JSP Code

<jsp:setProperty name="s" property="name" value="Raj"/>
<jsp:setProperty name="s" property="marks" value="90"/>

Internally becomes:

s.setName("Raj");
s.setMarks(90);
      `},{id:26,question:"26. Explain JSP Action Tags.",answer:"📌 Often asked with example.",codeExample:`
First quick reminder:

➡ JavaBean = class that stores data
➡ JSP Action Tags = tags used to work with that JavaBean

Now let’s learn the three important JSP Action Tags.


⭐ JSP Action Tags

JSP Action Tags are special tags used to perform actions inside JSP pages.
They are written in XML style and executed by the JSP container.

Example:

    <jsp:actionName />

Important action tags for exam:

<jsp:useBean>
<jsp:setProperty>
<jsp:getProperty>


⭐ 1️⃣ <jsp:useBean>
Meaning

This tag is used to create or locate a JavaBean object.
It creates an object of a Java class.

Syntax
    <jsp:useBean id="objectName" class="ClassName"/>

Example
    <jsp:useBean id="s" class="Student"/>

Meaning (internally):

    Student s = new Student();

So now JSP can use object s.


⭐ 2️⃣ <jsp:setProperty>
Meaning

This tag is used to set value of a bean property.
It calls the setter method of the JavaBean.

Syntax
    <jsp:setProperty name="beanName" property="variable" value="value"/>

Example
    <jsp:setProperty name="s" property="name" value="Raj"/>

Internally JSP calls:

    s.setName("Raj");

So the value Raj is stored in the bean.


⭐ 3️⃣ <jsp:getProperty>
Meaning

This tag is used to display the value of a bean property.
It calls the getter method.

Syntax

    <jsp:getProperty name="beanName" property="variable"/>

Example

    Name : <jsp:getProperty name="s" property="name"/>

Internally JSP calls:

    s.getName();

So it prints the value stored earlier.



⭐ Full Example (Very Important)

JavaBean Class

public class Student {

    private String name;

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }
}


JSP Page

<jsp:useBean id="s" class="Student"/>
<jsp:setProperty name="s" property="name" value="Raj"/>
Name : <jsp:getProperty name="s" property="name"/>


Output:

Name : Raj


⭐ Simple Diagram

JSP Page
   |
   | useBean
   v
Create Object (Student s)
   |
   | setProperty
   v
s.setName("Raj")
   |
   | getProperty
   v
s.getName()
   |
   v
Display on webpage


⭐ Easy Comparison

| Tag               | Purpose                |
| ------------------| ---------------------- |
| <jsp:useBean>     | Create JavaBean object |
| <jsp:setProperty> | Set value in bean      |
| <jsp:getProperty> | Get value from bean    |



⭐ One-Line Exam Answer

JSP Action Tags are used to perform actions such as creating JavaBean objects and setting or retrieving 
their properties.
      
      `},{id:27,question:"27. Explain Expression Language (EL) in JSP.",answer:"",codeExample:`
Note: if you see like this $ {text}
this means $ is join with {text} ok in this website is not supported to i wirte like this ok.


First small idea:

Earlier in JSP we printed values like this:

    <%= name %>

But JSP introduced Expression Language (EL) to make this simpler.



⭐ Expression Language (EL) in JSP

1️⃣ Definition

Expression Language (EL) is used to access and display data in JSP pages easily without writing Java code.

It allows us to read values from:

JavaBeans
request
session
application


📌 In simple words:

EL is a simple way to display data in JSP.



⭐ 2️⃣ EL Syntax

EL expressions are written inside:

$ {expression}


Example:

$ {name}


This means:

print value of name


So instead of writing:

<%= name %>


we write:

$ {name}



⭐ 3️⃣ Accessing Bean Properties

Suppose we have a JavaBean Student.

private String name;
private int marks;

Getter methods:

getName()
getMarks()


JSP Using EL

$ {student.name}
$ {student.marks}

EL automatically calls:

student.getName()
student.getMarks()

So EL makes code short and clean.



⭐ Example

⭐ Step 1 — Create JavaBean Class

File name: Student.java

public class Student {

    private String name;
    private int marks;

    // Setter for name
    public void setName(String name){
        this.name = name;
    }

    // Getter for name
    public String getName(){
        return name;
    }

    // Setter for marks
    public void setMarks(int marks){
        this.marks = marks;
    }

    // Getter for marks
    public int getMarks(){
        return marks;
    }
}

📌 This class only stores data.


⭐ Step 2 — JSP Page

File name: index.jsp

<%@ page language="java" %>

<html>
<body>

<h2>Student Information</h2>

<!-- Create Bean Object -->
<jsp:useBean id="student" class="Student"/>

<!-- Set Values -->
<jsp:setProperty name="student" property="name" value="Raj"/>
<jsp:setProperty name="student" property="marks" value="90"/>

<!-- Access Using EL -->
Name : $ {student.name} <br>
Marks : $ {student.marks}

</body>
</html>


⭐ Final Output

Student Information

Name : Raj
Marks : 90


⭐ 4️⃣ Accessing Scope Variables

JSP has different scopes where data can be stored.

Scopes:

pageScope
requestScope
sessionScope
applicationScope

EL can access these values.


Example 1 — Request Scope

    $ {requestScope.username}

Means:

    request.getAttribute("username")


Example 2 — Session Scope

    $ {sessionScope.user}

Means:

    session.getAttribute("user")


Example 3 — Application Scope

    $ {applicationScope.count}

Means:

    application.getAttribute("count")


⭐ Simple Diagram

JSP Page
   |
   |  $ {expression}
   v
Expression Language
   |
   | access data from
   v
--------------------------
JavaBean properties
Request variables
Session variables
Application variables
--------------------------


⭐ Advantages of EL

1️⃣ No Java code needed in JSP
2️⃣ Easy to read
3️⃣ Short syntax
4️⃣ Access multiple scopes easily


⭐ One-Line Exam Answer

Expression Language (EL) in JSP is used to access and display data from JavaBeans and different scopes 
using the syntax $ {expression}.
      

-----------------------------------------------------------------------------


1️⃣ Servlet (Set Variables in Different Scopes)

File: ScopeServlet.java

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ScopeServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Request Scope
        request.setAttribute("username", "Raj");

        // Session Scope
        HttpSession session = request.getSession();
        session.setAttribute("user", "Raj Session");

        // Application Scope
        ServletContext application = getServletContext();
        application.setAttribute("count", 10);

        // Forward to JSP page
        RequestDispatcher rd = request.getRequestDispatcher("scope.jsp");
        rd.forward(request, response);
    }
}


Explanation:

request.setAttribute() → requestScope
session.setAttribute() → sessionScope
application.setAttribute() → applicationScope



2️⃣ JSP Page (Access Scope Variables)

File: scope.jsp

<%@ page language="java" contentType="text/html" pageEncoding="UTF-8"%>

<%
    // Page Scope
    pageContext.setAttribute("pageName", "This is Page Scope");
%>

<html>
<head>
<title>Scope Example</title>
</head>

<body>

<h2>JSP Scope Example</h2>

<h3>Page Scope</h3>
$ {pageScope.pageName}

<br><br>

<h3>Request Scope</h3>
$ {requestScope.username}

<br><br>

<h3>Session Scope</h3>
$ {sessionScope.user}

<br><br>

<h3>Application Scope</h3>
$ {applicationScope.count}

</body>
</html>


3️⃣ Output in Browser

When you open the servlet, the page will show:

JSP Scope Example

Page Scope
This is Page Scope

Request Scope
Raj

Session Scope
Raj Session

Application Scope
10



what is application scop


⭐ Application Scope in JSP

Application Scope means a variable that is shared across the entire web application.
This data is available to all users, all pages, and all servlets in the application.
It is stored in the ServletContext object.
      

🔹 Lifetime

Starts when the web application starts (server starts)
Ends when the server stops or application is restarted

So the data stays for the whole application life.


🔹 Example (Setting Value)

In Servlet or JSP:

    application.setAttribute("count", 100);

This stores the value 100 in application scope.



🔹 Access in JSP using EL
$ {applicationScope.count}

Meaning in Java:

application.getAttribute("count");



🔹 Simple Real-Life Example

Suppose a website tracks total visitors.

When someone visits:

int count = (Integer)application.getAttribute("count");
count++;
application.setAttribute("count", count);

Now every user sees the same visitor count because it is stored in application scope.


🔹 Example JSP

<%
application.setAttribute("siteName", "My Website");
%>

Site Name: $ {applicationScope.siteName}


Output:

Site Name: My Website




🔹 Easy Way to Remember

Page Scope → Only one page
Request Scope → One request
Session Scope → One user session
Application Scope → Whole website
`},{id:28,question:"28. Page scop.",answer:"",codeExample:`
⭐ Page Scope

Page Scope means the variable is available only inside one JSP page.
Other pages cannot use it.
When the page finishes loading, the data is removed.

Example:

pageContext.setAttribute("name","Raj");

Access:

$ {pageScope.name}

👉 Simple idea:
Only one page can see the data.



⭐ Request Scope

Request Scope means the variable is available during one request.
If a Servlet sends data to a JSP, the JSP can read it.
After the response is sent to the browser, the data is destroyed.

Example:

request.setAttribute("username","Raj");

Access:

$ {requestScope.username}

👉 Simple idea:
Data lives only for one request.

Example flow:

Servlet → JSP



⭐ Session Scope

Session Scope means the variable is available for one user during their session.

The data stays until:

the user logs out
the session expires
the browser closes

Example:

session.setAttribute("user","Raj");

Access:

$ {sessionScope.user}

👉 Simple idea:
Data stays for one user while they are using the website.

Example:
Logged-in user information.
      
      `},{id:29,question:"29. JSTL (Java Standard Tag Library)",answer:"",codeExample:`
⭐ JSTL (Java Standard Tag Library)
1️⃣ Definition

JSTL is a library of ready-made JSP tags used to perform common tasks like:

loops
conditions
printing values
working with XML
formatting data

📌 In simple words:

JSTL provides tags to replace Java code in JSP.


⭐ Why JSTL is Used

Without JSTL:

<%
if(marks > 40){
    out.println("Pass");
}
%>

With JSTL:

<c:if test="$ {marks > 40}">
Pass
</c:if>

Much cleaner and easier.


⭐ JSTL Tag Libraries

JSTL provides different tag libraries.

| Library    | Purpose             |
| ---------- | ------------------- |
| Core       | Basic operations    |
| Formatting | Date and numbers    |
| SQL        | Database operations |
| XML        | XML processing      |
| Functions  | String functions    |

Most commonly used: Core Library


⭐ Core JSTL Tags (Important)

1️⃣ <c:out>

Used to print value.

Example:

<c:out value="$ {name}" />

Output:

Raj



2️⃣ <c:set>

Used to store value in variable.

Example:

<c:set var="marks" value="85"/>



3️⃣ <c:if>

Used for condition checking.

Example:

<c:if test="$ {marks > 40}">
Pass
</c:if>



4️⃣ <c:forEach>

Used for looping.

Example:

<c:forEach var="i" begin="1" end="5">
$ {i} <br>
</c:forEach>

Output:

1
2
3
4
5


⭐ Example JSP Program

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>

<c:set var="name" value="Raj"/>

Name : <c:out value="$ {name}"/>

</body>
</html>


Output:

Name : Raj


⭐ Simple Diagram

JSP Page
   |
   v
 JSTL Library
   |
--------------------------------
| <c:out>     → print value     |
| <c:set>     → store value     |
| <c:if>      → condition       |
| <c:forEach> → loop            |
--------------------------------


⭐ Advantages of JSTL

1️⃣ Reduces Java code in JSP
2️⃣ Makes JSP cleaner
3️⃣ Easy to read
4️⃣ Improves maintainability


⭐ One-Line Exam Answer

JSTL (Java Standard Tag Library) is a collection of custom tags used in JSP to perform common tasks such 
as iteration, condition checking, and output formatting without using Java code.
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid Paper",answer:"",codeExample:`
=========================================
ADVANCED JAVA PROGRAMMING - SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: Define JDBC
-----------------------------------------

Answer:
JDBC (Java Database Connectivity) is an API
used to connect Java applications with databases
and execute SQL queries.


-----------------------------------------
Q1 (a) (ii)
Question: Purpose of HttpServletRequest
-----------------------------------------

Answer:
HttpServletRequest is used to get request
information from client such as parameters,
form data, headers, etc.


-----------------------------------------
Q1 (a) (iii)
Question: Any two implicit objects in JSP
-----------------------------------------

Answer:
1. request
2. response


-----------------------------------------
Q1 (b) MCQs
-----------------------------------------

1. Statement
2. False
3. Java Server Pages
4. DriverManager
5. out
6. getConnection()
7. init(), service(), destroy()



-----------------------------------------
Q2 (a) (i)
Question: Steps to establish JDBC connection
-----------------------------------------

Answer:

1. Load driver
   Class.forName("com.mysql.cj.jdbc.Driver");

2. Establish connection
   Connection con = DriverManager.getConnection(url, user, pass);

3. Create statement
   Statement stmt = con.createStatement();

4. Execute query
   stmt.executeQuery() / executeUpdate();

5. Close connection
   con.close();


-----------------------------------------
Q2 (a) (ii)
Question: Servlet Life Cycle
-----------------------------------------

Answer:

1. init() → Initialization
2. service() → Handles requests
3. destroy() → Cleanup resources


-----------------------------------------
Q2 (b) (i)
Question: Statement vs PreparedStatement
-----------------------------------------

Answer:

Statement:
- Used for simple queries
- Less secure
- No pre-compilation

PreparedStatement:
- Precompiled queries
- More secure (prevents SQL injection)
- Faster execution


-----------------------------------------
Q2 (b) (ii)
Question: JSP implicit objects with example
-----------------------------------------

Answer:

Example:

<%
String name = request.getParameter("name");
out.println("Welcome " + name);
%>

Implicit objects:
request, response, session, application, out



-----------------------------------------
Q3 (i)
Question: JDBC program to insert data
-----------------------------------------

Answer:

import java.sql.*;

class InsertDemo {
    public static void main(String[] args) throws Exception {

        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/db", "root", "1234");

        PreparedStatement ps = con.prepareStatement(
            "insert into student values(?, ?)");

        ps.setInt(1, 1);
        ps.setString(2, "Ram");

        ps.executeUpdate();

        con.close();
    }
}


-----------------------------------------
Q3 (ii)
Question: JDBC Architecture
-----------------------------------------

Answer:

Components:
1. Java Application
2. JDBC API
3. Driver Manager
4. JDBC Driver
5. Database

Flow:
Application → JDBC API → Driver → Database


-----------------------------------------
Q3 (iii)
Question: Servlet vs JSP
-----------------------------------------

Answer:

Servlet:
- Java code based
- Used for logic
- Hard to design UI

JSP:
- HTML + Java
- Used for presentation
- Easy to design UI



-----------------------------------------
Q4 (a)
Question: JDBC + Servlet Authentication
-----------------------------------------

Answer:

Steps:

1. User enters username/password in form
2. Servlet receives data using request
3. Connect database using JDBC
4. Check credentials using SQL query
5. If valid → show welcome message
6. Else → show error message


-----------------------------------------
Q4 (b)
Question: JSP Authentication Application
-----------------------------------------

Answer:

index.jsp

<form action="login.jsp">
Username: <input type="text" name="user">
<input type="submit">
</form>


login.jsp

<%
String user = request.getParameter("user");

if(user != null)
{
    out.println("Welcome " + user);
}
%


-----------------------------------------
OR
-----------------------------------------

Question: JSP personalized welcome message
-----------------------------------------

Answer:

index.jsp

<form action="welcome.jsp">
Enter Name: <input type="text" name="name">
<input type="submit">
</form>


welcome.jsp

<%
String name = request.getParameter("name");
out.println("Hello " + name + " Welcome!");
%>
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:31,question:"31. What is a Web Service? Explain its need & features.",answer:"📌 Basic + very common question",codeExample:`
⭐ What is a Web Service?

🔹 Definition  
A Web Service is a software system that allows different applications to communicate over the internet.  

📌 Simple Definition:  
A Web Service is a method of communication between two applications using web technologies.  


🔹 Example  
Mobile App → sends request → Web Service → Database → Response  

Examples:  
- Weather app calling a weather API  
- Payment system connecting to bank server  



⭐ Need of Web Service  

Why do we need Web Services?  

1️⃣ Communication between different systems  
→ Different applications can share data  

2️⃣ Platform independence  
→ Java app can communicate with Python / .NET app  

3️⃣ Reusability  
→ Same service can be used by multiple applications  

4️⃣ Remote access  
→ Applications can access services over the internet  



⭐ Key Features of Web Service  

🔹 1️⃣ Interoperability  

Meaning:  
Different systems (Java, Python, .NET) can work together  

📌 Example:  
Java application ↔ Python application  


🔹 2️⃣ XML-Based Communication  

Meaning:  
Web services use XML format to send and receive data  

📌 Example:  
<user>  
   <name>Raj</name>  
</user>  

XML is:  
- Simple  
- Platform-independent  


🔹 3️⃣ Loosely Coupled System  

Meaning:  
Applications are independent of each other  

📌 Simple Words:  
One system can change without affecting the other  

Example:  
Mobile app uses API  
Backend changes → App still works  


⭐ Simple Diagram  

Client (App)  
     |  
     v  
 Web Service  
     |  
     v  
 Server / Database  


⭐ One-Line Exam Answer  

A Web Service is a software system that enables communication between different applications over the 
internet using standard protocols like XML.
      
      `},{id:32,question:"32. Explain Web Service Architecture.",answer:"📌 Very important long answer",codeExample:`
⭐ Web Service with Architecture

🔹 Definition (Quick)  
A Web Service is a system that allows different applications to communicate over the internet.  


⭐ Main Components of Web Service  

There are three main components:  

1️⃣ Service Provider  
2️⃣ Service Requestor  
3️⃣ Service Registry (UDDI)  


⭐ 1️⃣ Service Provider  

Meaning:  
The Service Provider is the system that creates and provides the web service.  

📌 It:  
- Develops the service  
- Publishes it  
- Handles requests  

Example:  
- Bank server providing payment service  
- Weather API providing weather data  


⭐ 2️⃣ Service Requestor  

Meaning:  
The Service Requestor is the client that uses the web service.  

📌 It:  
- Sends request  
- Receives response  

Example:  
- Mobile app requesting weather data  
- Website calling payment service  


⭐ 3️⃣ Service Registry (UDDI)  

Meaning:  
UDDI (Universal Description, Discovery, and Integration) is like a directory of web services.  

📌 It helps to:  
- Store service information  
- Allow clients to find services  

Example:  
Like a phone directory of web services  


⭐ Operations in Web Service  

There are three main operations:  


⭐ 1️⃣ Publish  
- Service Provider registers the service in UDDI  
- Makes service available  

Flow:  
Provider → UDDI  


⭐ 2️⃣ Find  
- Service Requestor searches for service in registry  

Flow:  
Requestor → UDDI  


⭐ 3️⃣ Bind  
- Requestor connects to provider and uses the service  

Flow:  
Requestor ↔ Provider  


⭐ Web Service Architecture (Perfect Diagram)

                (1) Publish
     ----------------------------------->
   Service Provider                 Service Registry (UDDI)
        |                                   |
        |                                   |
        |<----------------------------------|
                (2) Find

        |
        | (3) Bind / Invoke
        v
   Service Requestor  <-------------------->  Service Provider


⭐ Components Recap  

- Service Provider → Creates and provides service  
- Service Requestor → Uses the service  
- Service Registry (UDDI) → Stores service information  



⭐ How Web Service Works (Step-by-Step)  

🔹 Step 1 — Publish  
- Service Provider creates web service  
- Publishes details to registry (UDDI)  

Flow:  
Provider → Registry  

📌 Meaning: “My service is available”  


🔹 Step 2 — Find  
- Service Requestor searches for service in registry  

Flow:  
Requestor → Registry  

📌 Meaning: “Which service can I use?”  


🔹 Step 3 — Bind (Invoke)  
- Requestor connects to Provider  
- Sends request and receives response  

Flow:  
Requestor ↔ Provider  

📌 Meaning: “Use the service”  



⭐ Real-Life Example  

Example: Weather App  

Step 1 — Publish  
Weather company publishes API in registry  

Step 2 — Find  
Mobile app searches for weather service  

Step 3 — Bind  
App calls API → gets weather data  


⭐ Simple Flow Summary  

1️⃣ Publish → Service available  
2️⃣ Find → Service discovered  
3️⃣ Bind → Service used  


⭐ One-Line Exam Answer  

In Web Service architecture, the provider publishes the service to the registry, the requestor finds it, and 
then binds to use the service.  

      `},{id:33,question:"33. Explain Web Service Protocol Stack.",answer:"📌 Frequently asked question",codeExample:`
⭐ Web Service Protocol Stack

🔹 Definition  
Web Service Protocol Stack is a set of layers (protocols) used for communication between applications 
over the web.  

📌 Each layer has a specific role.  


⭐ Layers of Protocol Stack  

There are 4 main layers:  

1️⃣ Transport Layer  
2️⃣ Messaging Layer  
3️⃣ Description Layer  
4️⃣ Discovery Layer  


⭐ 1️⃣ Transport Layer  

🔹 Meaning  
This layer is responsible for sending data over the network.  

🔹 Protocols  
- HTTP (most common)  
- FTP  
- SMTP  

🔹 Role  
Send request and response between client and server  

🔹 Example  
Browser → HTTP → Server  


⭐ 2️⃣ Messaging Layer (SOAP)  

🔹 Meaning  
This layer defines how messages are formatted and exchanged.  

🔹 Protocol  
SOAP (Simple Object Access Protocol)  

🔹 Role  
Convert data into XML format and send it  

🔹 Example  
<soap>  
   <name>Raj</name>  
</soap>  


⭐ 3️⃣ Description Layer (WSDL)  

🔹 Meaning  
This layer describes how the web service works.  

🔹 Protocol  
WSDL (Web Services Description Language)  

🔹 Role  
Provides information about service methods, inputs, outputs  

🔹 Example  
Service: Weather API  
Input: city  
Output: temperature  


⭐ 4️⃣ Discovery Layer (UDDI)  

🔹 Meaning  
This layer helps to find web services.  

🔹 Protocol  
UDDI (Universal Description, Discovery, and Integration)  

🔹 Role  
Acts like a directory of services  


⭐ Complete Stack Diagram  

   Discovery Layer   → UDDI  
   -------------------------  
   Description Layer → WSDL  
   -------------------------  
   Messaging Layer   → SOAP  
   -------------------------  
   Transport Layer   → HTTP / FTP / SMTP  


⭐ How It Works (Flow)  

1️⃣ UDDI → Find service  
2️⃣ WSDL → Understand service  
3️⃣ SOAP → Send message  
4️⃣ HTTP → Deliver message  


⭐ One-Line Exam Answer  

The Web Service Protocol Stack consists of Transport (HTTP), Messaging (SOAP), Description (WSDL), and 
Discovery (UDDI) layers used for communication between web services.  


🎯 Easy Memory Trick  

Transport → Messaging → Description → Discovery  
(HTTP → SOAP → WSDL → UDDI)  
      `},{id:34,question:"34. Explain SOAP Web Services with advantages & disadvantages.",answer:"📌 Important theory question",codeExample:`
⭐ SOAP Web Services

🔹 Definition  
SOAP (Simple Object Access Protocol) is a protocol used to exchange information between applications 
over the internet.  

📌 Simple Definition:  
SOAP is an XML-based protocol used for communication between web services.  


⭐ 1️⃣ XML-Based Protocol  

SOAP uses XML format to send and receive messages.  

Example:  
<soap>  
   <body>  
      <name>Raj</name>  
   </body>  
</soap>  

📌 All data is sent in structured XML format.  


⭐ 2️⃣ Platform Independent  

SOAP works on any platform and any programming language.  

📌 Example:  
Java ↔ .NET ↔ Python  

All can communicate using SOAP.  


⭐ 3️⃣ How SOAP Works (Simple)  

Client → SOAP Request (XML) → Server  
Server → SOAP Response (XML) → Client  


⭐ Simple Diagram  

Client  
  |  
  |  SOAP (XML Message)  
  v  
Web Service (Server)  
  |  
  v  
Response (XML)  


⭐ Advantages of SOAP  

1️⃣ Platform Independent  
→ Works with any language (Java, Python, etc.)  

2️⃣ Standard Protocol  
→ Uses standard rules (XML, HTTP)  

3️⃣ Secure  
→ Supports security features (WS-Security)  

4️⃣ Reliable  
→ Used in enterprise applications  


⭐ Disadvantages of SOAP  

1️⃣ Slow & Heavy ⭐  
→ Uses XML (large size) → takes more time  

2️⃣ Complex  
→ Difficult to understand and implement  

3️⃣ More Bandwidth  
→ Requires more data transfer  

4️⃣ Not Flexible  
→ Strict format compared to REST  


⭐ Quick Comparison Idea  

SOAP → Heavy, Secure, XML  
REST → Light, Fast, JSON  


⭐ One-Line Exam Answer  

SOAP is an XML-based protocol used for web services communication that is platform independent but 
slow and heavy due to its complex structure.  
      
      `},{id:35,question:"35. Explain RESTful Web Services.",answer:"📌 Very important question",codeExample:`
⭐ RESTful Web Services

🔹 Definition  

REST stands for:  
RE → Representational  
S  → State  
T  → Transfer  

📌 Simple Definition:  
REST is an architectural style used to design web services that use HTTP for communication.  


⭐ 1️⃣ REST = Architectural Style  

- REST is not a protocol (like SOAP)  
- It is a design approach for building web services  

📌 It defines how web services should be created and used  


⭐ 2️⃣ Resource-Based  

In REST, everything is treated as a resource  

📌 A resource can be:  
- User  
- Product  
- Order  

Each resource is identified by a URL  

Example:  
/users  
/products  
/orders  

👉 User data = resource  


⭐ 3️⃣ HTTP Methods ⭐  

REST uses standard HTTP methods to perform operations  


🔹 GET  
→ Used to retrieve data  

Example:  
GET /users  
👉 Get all users  


🔹 POST  
→ Used to create new data  

Example:  
POST /users  
👉 Add new user  


🔹 PUT  
→ Used to update data  

Example:  
PUT /users/1  
👉 Update user with ID 1  


🔹 DELETE  
→ Used to delete data  

Example:  
DELETE /users/1  
👉 Delete user  


⭐ Simple Diagram  

Client (App)  
     |  
     | HTTP Request (GET / POST / PUT / DELETE)  
     v  
REST Web Service  
     |  
     v  
Server / Database  


⭐ Features of REST  

1️⃣ Lightweight (mostly uses JSON)  
2️⃣ Fast and simple  
3️⃣ Platform independent  
4️⃣ Easy to use  


⭐ Advantages  

- Faster than SOAP  
- Easy to understand  
- Uses simple HTTP methods  


⭐ Disadvantages  

- Less secure than SOAP  
- No strict standard  


⭐ One-Line Exam Answer  

RESTful Web Services are web services based on REST architecture that use HTTP methods like GET, POST, 
PUT, and DELETE to operate on resources.  


⭐ Quick Comparison (Very Important)  

SOAP → Protocol, XML, Heavy  
REST → Style, JSON, Light  
      
      
      `},{id:36,question:"36.Difference between SOAP vs REST",answer:"📌 Guaranteed exam question",codeExample:`
      
| Point       | SOAP                  | REST                 |
| ------------| --------------------- | -------------------- |
| Type        | Protocol              | Architectural Style  |
| Speed       | Slow (heavy)          | Fast (lightweight)   |
| Data Format | Only XML              | JSON, XML, Text      |
| Performance | Low (more processing) | High (less overhead) |
| Complexity  | Complex               | Simple               |
| Flexibility | Less flexible         | More flexible        |


⭐ Easy Memory Trick
SOAP → Heavy, XML, Slow
REST → Light, JSON, Fast


⭐ One-Line Exam Answer

SOAP is a protocol that uses XML and is slower, while REST is an architectural style that supports multiple 
formats and provides better performance.

      
      `},{id:37,question:"37. Explain REST Principles.",answer:"📌 Short/medium question",codeExample:`
⭐ REST Principles

REST (Representational State Transfer) follows some basic rules (principles) to design web services.  


⭐ 1️⃣ Stateless  

🔹 Meaning  
Each request from client to server must contain all information.  

📌 Server does NOT store previous request data  


🔹 Example  
Request 1 → Login  
Request 2 → Get data (must include login info again)  

👉 Server does NOT remember previous request  


🔹 Key Point  
No memory between requests  


⭐ 2️⃣ Client–Server  

🔹 Meaning  
Client and Server are separate systems  

- Client → sends request  
- Server → sends response  

🔹 Example  
Mobile App (Client) → API Server → Database  

🔹 Key Point  
Independent systems  


⭐ 3️⃣ Cacheable  

🔹 Meaning  
Responses can be stored (cached) for reuse  

📌 Improves speed and performance  

🔹 Example  
GET /products → stored in cache  
Next request → data comes from cache (faster)  

🔹 Key Point  
Faster response using cache  


⭐ 4️⃣ Layered System  

🔹 Meaning  
System can have multiple layers (client, server, proxy, gateway)  

📌 Client does not know how many layers exist  


🔹 Example  
Client → API Gateway → Server → Database  


🔹 Key Point  
Multiple layers for security & scalability  



⭐ Simple Diagram  

Client  
  |  
  v  
[ Layer 1 ]  
  |  
[ Layer 2 ]  
  |  
[ Server ]  


⭐ One-Line Exam Answer  

REST principles include stateless communication, client-server separation, cacheable responses, and 
layered system architecture.  


🎯 Quick Memory Trick  

Stateless → No memory  
Client-Server → Separate  
Cacheable → Fast  
Layered → Multiple levels  
      
      `},{id:38,question:"38. 2–3 MARK",answer:"",codeExample:`
⭐ 1️⃣ WSDL → Service Description  

🔹 Meaning  
WSDL (Web Services Description Language) is used to describe a web service.  

📌 It tells:  
- What the service does  
- What inputs are required  
- What output is given  

🔹 Simple Line  
WSDL is used to describe how a web service works.  


⭐ 2️⃣ UDDI → Service Registry  

🔹 Meaning  
UDDI (Universal Description, Discovery, and Integration) is a directory of web services.  

📌 It helps to:  
- Store services  
- Find services  

🔹 Simple Line  
UDDI is used to register and discover web services.  


⭐ 3️⃣ HTTP Methods → GET, POST, PUT, DELETE  

🔹 Meaning  
These methods are used in REST APIs to perform operations.  

🔹 Functions  
GET → Retrieve data  
POST → Create data  
PUT → Update data  
DELETE → Remove data  

🔹 Example  
GET /users → get users  
POST /users → add user  


⭐ 4️⃣ SOAP → XML Protocol  

🔹 Meaning  
SOAP (Simple Object Access Protocol) is a protocol used for communication.  

📌 Uses:  
- XML format  
- Standard rules  

🔹 Simple Line  
SOAP is an XML-based protocol used for web service communication.  


⭐ 5️⃣ REST → Lightweight  

🔹 Meaning  
REST is an architectural style used to build web services.  

📌 Features:  
- Lightweight  
- Fast  
- Uses HTTP methods  

🔹 Simple Line  
REST is a lightweight and fast way to create web services.  



⭐ Final Quick Summary  

WSDL → Describe service  
UDDI → Find service  
HTTP → Operations (GET, POST, PUT, DELETE)  
SOAP → XML-based protocol  
REST → Lightweight architecture  





⭐ Difference Between REST and REST API

🔹 1️⃣ REST (Representational State Transfer)

Meaning:  
REST is an architectural style (design pattern) used to build web services.  

📌 It defines rules/principles like:  
- Stateless  
- Client-Server  
- Cacheable  
- Layered system  

👉 REST is a concept / theory (how to design system)  


🔹 2️⃣ REST API

Meaning:  
A REST API is an actual implementation of REST principles.  

📌 It is a web service that:  
- Uses HTTP methods (GET, POST, PUT, DELETE)  
- Works with resources (URLs like /users, /products)  
- Sends/receives data (usually JSON)  

👉 REST API is a real working system  


⭐ Key Differences

Point            REST                          REST API  
-------------------------------------------------------------  
Type             Architectural Style           Implementation (Service)  
Nature           Concept / Design              Practical Application  
Purpose          Defines rules                 Uses those rules  
Usage            Not directly used             Used by apps (frontend/backend)  
Example          Rules like Stateless          GET /users API  


⭐ Simple Understanding  

REST = Rules / Guidelines  
REST API = Actual code using those rules  


⭐ Real-Life Example  

REST → Traffic rules  
REST API → Cars following those rules  


⭐ One-Line Exam Answer  

REST is an architectural style that defines how web services should be designed, while a REST API is 
the actual implementation of those principles used to communicate between systems.  
      
      `},{id:41,question:"41. Explain Spring MVC Architecture & Flow.",answer:"📌 Most important long question",codeExample:`
⭐ Spring MVC Architecture

🔹 Definition  
Spring MVC is a framework used to build web applications using the Model–View–Controller (MVC) design pattern.  


⭐ Main Components  

⭐ 1️⃣ Model  

🔹 Meaning  
- Holds data of the application  
- Interacts with the database  

📌 Example:  
User data, Product data  


⭐ 2️⃣ View  

🔹 Meaning  
- Responsible for UI (User Interface)  
- Displays data to the user  

📌 Example:  
JSP, HTML page  


⭐ 3️⃣ Controller  

🔹 Meaning  
- Handles user request  
- Processes input  
- Sends response  

📌 Example:  
LoginController, UserController  



⭐ ⭐ DispatcherServlet (Front Controller)  

🔹 Meaning  
DispatcherServlet is the main controller (front controller) in Spring MVC  

📌 It:  
- Receives all requests  
- Sends them to the correct controller  
- Controls the full flow  

🔹 Simple Line  
DispatcherServlet acts as the central controller of Spring MVC  



⭐ Other Important Components  

⭐ 4️⃣ HandlerMapping  

🔹 Meaning  
Finds which controller should handle the request  

📌 Example:  
/user → UserController  


⭐ 5️⃣ ViewResolver  

🔹 Meaning  
Decides which view (page) to show  

📌 Example:  
"home" → home.jsp  


⭐ Complete Architecture Diagram  

Client (Browser)  
        |  
        v  
 DispatcherServlet  
        |  
        v  
  HandlerMapping  
        |  
        v  
   Controller  
        |  
        v  
     Model  
        |  
        v  
 ViewResolver  
        |  
        v  
     View (JSP)  
        |  
        v  
     Response  


⭐ Flow of Spring MVC (Step-by-Step)  

🔹 Step 1  
Client sends request  
Browser → DispatcherServlet  

🔹 Step 2  
DispatcherServlet receives request  

🔹 Step 3  
HandlerMapping finds controller  

🔹 Step 4  
Controller processes request  
- Calls Model  
- Gets data  

🔹 Step 5  
Controller returns view name  

🔹 Step 6  
ViewResolver finds actual page  

🔹 Step 7  
View displays data to user  


⭐ Simple Flow Summary  

Request → DispatcherServlet → Controller → Model → View → Response  


⭐ One-Line Exam Answer  

Spring MVC architecture consists of Model, View, and Controller with DispatcherServlet acting as the 
front controller, along with HandlerMapping and ViewResolver to process requests.  


🎯 Easy Memory Trick  

DispatcherServlet → Main boss  
HandlerMapping → Find controller  
ViewResolver → Find page  
      `},{id:42,question:"42. What is Spring Framework? Explain its features.",answer:"📌 Basic theory question",codeExample:`
⭐ What is Spring Framework?

🔹 Definition  
Spring Framework is a Java framework used to develop enterprise applications easily.  

📌 Simple Meaning:  
- Helps to build web apps, APIs, and large systems  
- Reduces coding complexity  


⭐ Features of Spring Framework  

⭐ 1️⃣ Lightweight  

🔹 Meaning  
Spring is lightweight (small and fast).  

📌 It does not require heavy resources  


🔹 Example  
Small configuration + less code  


🔹 Key Point  
Easy to use and fast  


⭐ 2️⃣ IoC (Inversion of Control)  

🔹 Meaning  
In Spring, object creation is controlled by the container, not by the programmer  


📌 Normally:  
Car c = new Car();  
👉 You create object manually  


📌 In Spring:  
Spring container creates and manages objects  


🔹 Simple Line  
IoC means control is given to Spring, not the developer  



⭐ 3️⃣ AOP (Aspect-Oriented Programming)

🔹 Simple Idea  
AOP means putting common work (like logging, security) in one place instead of writing it again and again.  


⭐ First Understand the Problem ❗  

Suppose you have 3 methods:  

login()  
register()  
payment()  


Now you want to add logging (print "method called") in all:  

login() {  
   print("log");  
   // code  
}  

register() {  
   print("log");  
   // code  
}  

payment() {  
   print("log");  
   // code  
}  


❌ Problem:  
- Same code repeated again & again  
- Code becomes messy  


⭐ Solution → AOP ✅  

With AOP, you write logging only once:  

👉 Apply logging to all methods automatically  

Spring will automatically add it everywhere  


⭐ Real-Life Example 🧠  

Think like this:  

🏫 In college:  
Every class needs attendance  

Instead of teacher taking attendance in each class manually  
👉 One system handles attendance for all classes  

🔹 Key Point  
Separates cross-cutting concerns  


⭐ 4️⃣ Integration  

🔹 Meaning  
Spring easily integrates with other technologies  


📌 Can work with:  
- Hibernate  
- JDBC  
- Servlet  
- REST APIs  


🔹 Example  
Spring + Hibernate → Database  
Spring + REST → API  


⭐ Simple Diagram  

Spring Framework  
      |  
-------------------------  
|    |     |      |  
IoC  AOP   MVC  Integration  


⭐ One-Line Exam Answer  

Spring Framework is a lightweight Java framework that supports features like IoC, AOP, and easy 
integration for building enterprise applications.  


🎯 Easy Memory Trick  

Spring = Lightweight + IoC + AOP + Integration  
      
      `},{id:43,question:"43. Explain IoC (Inversion of Control) Container.",answer:"📌 Frequently asked",codeExample:`
⭐ What is IoC (Inversion of Control) Container?

🔹 Simple Meaning  
IoC Container is a part of Spring that creates and manages objects (beans).  


🔹 First Understand Normally ❗  

In normal Java:  

Car c = new Car();  

👉 You (developer) create object manually  


🔹 In Spring (IoC) ✅  

Spring creates object for you  

👉 You don’t use new  
👉 Spring container handles everything  


🔹 Why “Inversion of Control”?  

Normally → You control object creation  
In Spring → Spring controls object creation  

📌 So control is inverted (reversed)  


⭐ Real-Life Example 🧠  

Think like food order:  

❌ Without IoC:  
You go to kitchen and cook yourself  

✅ With IoC:  
You order food → kitchen prepares → you just use  

👉 Spring = Kitchen 🍽️  


⭐ Types of IoC Container  

There are 2 main types:  


⭐ 1️⃣ BeanFactory  

🔹 Meaning  
Basic and simple container  
Creates objects only when needed  

🔹 Key Point  
Lazy loading (object created when required)  

🔹 Example Idea  
You ask → then object is created  


⭐ 2️⃣ ApplicationContext ⭐  

🔹 Meaning  
Advanced container (used most)  
Creates objects at start  

🔹 Key Point  
Eager loading (created at startup)  

🔹 Extra Features  
- AOP support  
- Event handling  
- Internationalization  

🔹 Example Idea  
App starts → all objects ready  


⭐ Difference (Very Important)  

Point                BeanFactory           ApplicationContext  
-------------------------------------------------------------  
Type                 Basic                 Advanced  
Object Creation      Lazy (on demand)      Eager (on startup)  
Features             Limited               More features  


⭐ Simple Diagram  

IoC Container  
     |  
---------------------  
|                   |  
BeanFactory     ApplicationContext  


⭐ One-Line Exam Answer  

IoC Container in Spring is responsible for creating and managing objects, and its main types are 
BeanFactory and ApplicationContext.  


🎯 Easy Memory Trick  

BeanFactory → Lazy  
ApplicationContext → Ready at start  
      `},{id:44,question:"44. Explain Dependency Injection (DI).",answer:"",codeExample:`
⭐ What is Dependency Injection (DI)?

🔹 Simple Meaning  
Dependency Injection means giving required objects (dependencies) from outside instead of creating them inside.  


🔹 First Understand the Problem ❗  

❌ Without DI:  

class Car {  
   Engine e = new Engine(); // tightly connected  
}  

👉 Problem:  
- Car is directly creating Engine  
- Hard to change / test  


🔹 With DI ✅  

class Car {  
   Engine e;  

   Car(Engine e) {  
      this.e = e;  
   }  
}  

👉 Engine is given from outside  


🔹 Key Idea  
Don't create object → Receive object  


⭐ Real-Life Example 🧠  

❌ Without DI:  
You cook food yourself  

✅ With DI:  
Food is delivered to you  

👉 You just use it  


⭐ Types of Dependency Injection  

There are 3 types:  


⭐ 1️⃣ Constructor Injection  

🔹 Meaning  
Dependency is passed through constructor  

🔹 Example  

class Car {  
   Engine e;  

   Car(Engine e) {   // constructor injection  
      this.e = e;  
   }  
}  

🔹 Key Point  
Object given at time of creation  


⭐ 2️⃣ Setter Injection  

🔹 Meaning  
Dependency is set using setter method  

🔹 Example  

class Car {  
   Engine e;  

   void setEngine(Engine e) {  
      this.e = e;  
   }  
}  

🔹 Key Point  
Object given after creation  


⭐ 3️⃣ Field Injection  

🔹 Meaning  
Dependency is injected directly into variable  

🔹 Example (Spring)  

class Car {  
   @Autowired  
   Engine e;   // field injection  
}  

🔹 Key Point  
No constructor or setter needed  


⭐ Difference (Easy Table)  

Type                     How it works  
------------------------------------------  
Constructor Injection    Through constructor  
Setter Injection         Through setter method  
Field Injection          Directly into variable  


⭐ Simple Diagram  

Car → needs Engine  

Constructor → Car(Engine)  
Setter → setEngine(Engine)  
Field → @Autowired Engine  


⭐ One-Line Exam Answer  

Dependency Injection is a technique where objects are provided from outside, and its types include 
Constructor, Setter, and Field Injection.  


🎯 Easy Memory Trick  

Constructor → at start  
Setter → after start  
Field → directly  


---------------------------------------------------------------------


⭐ First Understand in 1 Line  

👉 DI = Don’t create object → Get object from outside  


❌ WITHOUT Dependency Injection  

You create object yourself:  

class Engine {  
    void start() {  
        System.out.println("Engine started");  
    }  
}  

class Car {  
    Engine e = new Engine(); // ❌ tightly connected  

    void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Car c = new Car();  
        c.drive();  
    }  
}  


❌ Problem:  
- Car is fixed with Engine  
- Cannot easily change or test  


✅ WITH Dependency Injection (Constructor Injection)  

Now object comes from outside:  

class Engine {  
    void start() {  
        System.out.println("Engine started");  
    }  
}  

class Car {  
    Engine e;  

    // Constructor Injection  
    Car(Engine e) {  
        this.e = e;  
    }  

    void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  

        Engine e1 = new Engine();   // created outside  
        Car c = new Car(e1);        // injected into Car  

        c.drive();  
    }  
}  


⭐ OUTPUT  

Engine started  
Car is running  


⭐ What Changed? (VERY IMPORTANT)  

Before → Car creates Engine  
After  → Engine given to Car  

👉 This is Dependency Injection  


⭐ Now Types with Simple Programs  


⭐ 1️⃣ Constructor Injection  

Car(Engine e) {  
    this.e = e;  
}  

👉 Given while creating object  


⭐ 2️⃣ Setter Injection  

class Car {  
    Engine e;  

    void setEngine(Engine e) {  
        this.e = e;  
    }  

    void drive() {  
        e.start();  
        System.out.println("Car running");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Engine e = new Engine();  
        Car c = new Car();  

        c.setEngine(e); // injection here  
        c.drive();  
    }  
}  

👉 Given after object creation  


⭐ 3️⃣ Field Injection (Spring)  


🔹 Meaning  
Dependency is injected directly into variable  


⭐ FULL WORKING EXAMPLE (Spring)  


⭐ 1️⃣ Engine Class  

import org.springframework.stereotype.Component;  

@Component   // tells Spring to create object  
class Engine {  

    public void start() {  
        System.out.println("Engine started");  
    }  
}  


⭐ 2️⃣ Car Class (Field Injection)  

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Component;  

@Component   // Spring will manage this class  
class Car {  

    @Autowired   // Spring injects Engine automatically  
    Engine e;  

    public void drive() {  
        e.start();  
        System.out.println("Car is running");  
    }  
}  


⭐ 3️⃣ Main Class  

import org.springframework.context.ApplicationContext;  
import org.springframework.context.annotation.AnnotationConfigApplicationContext;  
import org.springframework.context.annotation.ComponentScan;  
import org.springframework.context.annotation.Configuration;  

@Configuration  
@ComponentScan   // scan for @Component classes  
class AppConfig {}  

public class Main {  
    public static void main(String[] args) {  

        ApplicationContext context =  
            new AnnotationConfigApplicationContext(AppConfig.class);  

        Car c = context.getBean(Car.class);  // get object from Spring  
        c.drive();  
    }  
}  


⭐ OUTPUT  

Engine started  
Car is running  


⭐ How It Works (VERY IMPORTANT)  

Step-by-step:  

1️⃣ @Component → Spring creates objects (Engine, Car)  
2️⃣ @Autowired → Spring connects Engine to Car  
3️⃣ context.getBean(Car.class) → get Car object  
4️⃣ Car uses Engine → output printed  


🔹 Key Point  
No constructor or setter needed  


⭐ Difference (Easy Table)  

Type                     How it works  
------------------------------------------  
Constructor Injection    Through constructor  
Setter Injection         Through setter method  
Field Injection          Directly into variable  


⭐ Simple Diagram  

Car → needs Engine  

Constructor → Car(Engine)  
Setter → setEngine(Engine)  
Field → @Autowired Engine  


⭐ One-Line Exam Answer  

Dependency Injection is a technique where objects are provided from outside, and its types include 
Constructor, Setter, and Field Injection.  


      `},{id:45,question:"45. Explain Hibernate Architecture.",answer:"📌 Important long answer",codeExample:`
⭐ Hibernate Architecture

🔹 Definition  
Hibernate is a framework used to connect Java applications with databases (ORM – Object Relational Mapping).  

📌 It converts:  
Java Objects ↔ Database Tables  


⭐ Main Components of Hibernate  

⭐ 1️⃣ SessionFactory  

🔹 Meaning  
- Main factory object in Hibernate  
- Creates Session objects  

🔹 Key Points  
- Created once (at startup)  
- Heavy object  

🔹 Simple Idea  
👉 Like a factory that produces sessions  


⭐ 2️⃣ Session  

🔹 Meaning  
Used to interact with the database  

🔹 Work  
- Save data  
- Update data  
- Delete data  
- Fetch data  

🔹 Example Idea  
Session → perform database operations  


⭐ 3️⃣ Transaction  

🔹 Meaning  
Ensures data consistency  

🔹 Work  
Begin → Do work → Commit / Rollback  

🔹 Example  
Money transfer → must complete fully or cancel  


⭐ 4️⃣ ConnectionProvider  

🔹 Meaning  
Provides database connection  

🔹 Work  
Connects Hibernate → Database  


⭐ Simple Architecture Diagram  

Java Application  
        |  
        v  
   SessionFactory  
        |  
        v  
     Session  
        |  
        v  
   Transaction  
        |  
        v  
ConnectionProvider  
        |  
        v  
     Database  


⭐ Working Flow (Step-by-Step)  

1️⃣ Application creates SessionFactory  
2️⃣ SessionFactory creates Session  
3️⃣ Session starts Transaction  
4️⃣ Perform operations (save, update, delete)  
5️⃣ Transaction commit / rollback  
6️⃣ ConnectionProvider connects to database  


⭐ One-Line Exam Answer  

Hibernate architecture includes SessionFactory, Session, Transaction, and ConnectionProvider to manage 
database operations efficiently.  


🎯 Easy Memory Trick  

SessionFactory → Create session  
Session → Do work  
Transaction → Control work  
ConnectionProvider → Connect DB  




⭐ 1️⃣ Entity Class (Student.java)  

// Entity class (represents table)  
import jakarta.persistence.*;  

@Entity                      // marks this class as table  
@Table(name = "student")  
public class Student {  

    @Id                     // primary key  
    private int id;  

    private String name;  
    private int marks;  

    // Getter and Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  

    public int getMarks() { return marks; }  
    public void setMarks(int marks) { this.marks = marks; }  
}  


⭐ 2️⃣ Hibernate Config (hibernate.cfg.xml)  

<!-- Configuration file -->  
<!DOCTYPE hibernate-configuration PUBLIC  
 "-//Hibernate/Hibernate Configuration DTD 3.0//EN"  
 "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">  

<hibernate-configuration>  
 <session-factory>  

  <!-- Database connection -->  
  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <!-- Hibernate settings -->  
  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  
  <property name="show_sql">true</property>  

  <!-- Mapping class -->  
  <mapping class="Student"/>  

 </session-factory>  
</hibernate-configuration>  


⭐ 3️⃣ Main Program (Insert Data)  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainApp {  
    public static void main(String[] args) {  

        // Step 1: Create Configuration  
        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");   // load config file  

        // Step 2: Create SessionFactory  
        SessionFactory factory = cfg.buildSessionFactory();  

        // Step 3: Create Session  
        Session session = factory.openSession();  

        // Step 4: Begin Transaction  
        Transaction tx = session.beginTransaction();  

        // Step 5: Create object  
        Student s = new Student();  
        s.setId(1);  
        s.setName("Raj");  
        s.setMarks(90);  

        // Step 6: Save object  
        session.save(s);  

        // Step 7: Commit transaction  
        tx.commit();  

        // Step 8: Close session  
        session.close();  

        System.out.println("Data Inserted Successfully!");  
    }  
}  


⭐ Output  

Data Inserted Successfully!  


⭐ Step-by-Step Flow (Very Important)  

1️⃣ Load configuration  
2️⃣ Create SessionFactory  
3️⃣ Open Session  
4️⃣ Begin Transaction  
5️⃣ Create object  
6️⃣ Save data  
7️⃣ Commit  
8️⃣ Close session  


⭐ Easy Memory Trick  

Config → Factory → Session → Transaction → Save → Commit  
      `},{id:46,question:"46. What is ORM (Object Relational Mapping)? Explain in Hibernate.",answer:"📌 Common theory question",codeExample:`
⭐ What is ORM (Object Relational Mapping)?

🔹 Definition  
ORM is a technique used to convert Java objects into database tables and vice versa.  


🔹 Simple Meaning  
Java Object ↔ Database Table  

👉 It creates a bridge between Java and Database  


⭐ Why ORM is Used?  

❌ Without ORM  
- You write SQL queries manually  

✅ With ORM  
- Hibernate handles database automatically  


⭐ ORM in Hibernate  

Hibernate uses ORM to map:  


⭐ 1️⃣ Mapping Class ↔ Table  

- Java class = Database table  

Example:  
class Student  
Table → student  

👉 Class name becomes table name  


⭐ 2️⃣ Field ↔ Column  

- Variables = Columns  

Example:  
int id;  
String name;  

Columns → id, name  


⭐ Simple Mapping Diagram  

Java Class (Student)  
---------------------  
id      → column id  
name    → column name  
marks   → column marks  

        ↓  

Database Table (student)  
------------------------  
id | name | marks  


⭐ 3️⃣ XML / Annotation Mapping  

Hibernate provides 2 ways to define mapping:  


🔹 (A) XML Mapping  

Mapping written in XML file  

<class name="Student" table="student">  
   <id name="id"/>  
   <property name="name"/>  
</class>  


🔹 (B) Annotation Mapping ⭐ (Most Used)  

Mapping written using annotations in Java class  

@Entity  
@Table(name="student")  
class Student {  

   @Id  
   private int id;  

   private String name;  
}  


⭐ Key Idea  

Class → Table  
Field → Column  
Object → Record (Row)  


⭐ Advantages of ORM  

1️⃣ No need to write SQL  
2️⃣ Easy to use  
3️⃣ Saves time  
4️⃣ Reduces code  


⭐ One-Line Exam Answer  

ORM is a technique that maps Java objects to database tables, where classes map to tables and fields 
map to columns using XML or annotations.  


🎯 Easy Memory Trick  

Class → Table  
Field → Column  
Object → Row  




⭐ 1️⃣ Hibernate Program using XML Mapping  


🔹 (A) Student.java  

// Simple POJO class (no annotations)  
public class Student {  
    private int id;  
    private String name;  

    // Getter & Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  
}  


🔹 (B) student.hbm.xml  

<!-- Mapping file -->  
<hibernate-mapping>  
    <class name="Student" table="student">  
        <id name="id" column="id"/>  
        <property name="name" column="name"/>  
    </class>  
</hibernate-mapping>  


🔹 (C) hibernate.cfg.xml  

<hibernate-configuration>  
 <session-factory>  

  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  

  <!-- Mapping file -->  
  <mapping resource="student.hbm.xml"/>  

 </session-factory>  
</hibernate-configuration>  


🔹 (D) Main Program  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainXML {  
    public static void main(String[] args) {  

        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");  

        SessionFactory factory = cfg.buildSessionFactory();  
        Session session = factory.openSession();  
        Transaction tx = session.beginTransaction();  

        Student s = new Student();  
        s.setId(1);  
        s.setName("Raj");  

        session.save(s);  

        tx.commit();  
        session.close();  

        System.out.println("Data Inserted (XML Mapping)");  
    }  
}  



⭐ 2️⃣ Hibernate Program using Annotation Mapping ⭐  


🔹 (A) Student.java  

import jakarta.persistence.*;  

@Entity  
@Table(name="student")  
public class Student {  

    @Id  
    private int id;  

    private String name;  

    // Getter & Setter  
    public int getId() { return id; }  
    public void setId(int id) { this.id = id; }  

    public String getName() { return name; }  
    public void setName(String name) { this.name = name; }  
}  


🔹 (B) hibernate.cfg.xml  

<hibernate-configuration>  
 <session-factory>  

  <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>  
  <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/test</property>  
  <property name="hibernate.connection.username">root</property>  
  <property name="hibernate.connection.password">root</property>  

  <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>  
  <property name="hibernate.hbm2ddl.auto">update</property>  

  <!-- Mapping class -->  
  <mapping class="Student"/>  

 </session-factory>  
</hibernate-configuration>  


🔹 (C) Main Program  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  

public class MainAnnotation {  
    public static void main(String[] args) {  

        Configuration cfg = new Configuration();  
        cfg.configure("hibernate.cfg.xml");  

        SessionFactory factory = cfg.buildSessionFactory();  
        Session session = factory.openSession();  
        Transaction tx = session.beginTransaction();  

        Student s = new Student();  
        s.setId(2);  
        s.setName("Amit");  

        session.save(s);  

        tx.commit();  
        session.close();  

        System.out.println("Data Inserted (Annotation)");  
    }  
}  


⭐ Key Difference (VERY IMPORTANT)  

XML Mapping → Mapping in separate XML file  
Annotation → Mapping inside Java class  


🎯 Easy Memory Trick  

XML → External file  
Annotation → Inside class  
      
      `},{id:47,question:"47. Explain HQL (Hibernate Query Language).",answer:"📌 High chance question",codeExample:`
⭐ What is HQL (Hibernate Query Language)?

🔹 Definition  
HQL is a query language used in Hibernate to perform database operations using Java class names 
instead of table names.  


🔹 Simple Meaning  
HQL → Works on Objects  
SQL → Works on Tables  

👉 HQL uses class & field names, not table/column names  


⭐ Difference between HQL and SQL  

| Point              | HQL            | SQL                     |
| ------------------ | -------------- | ----------------------- |
| Works On           | Java Objects   | Database Tables         |
| Names Used         | Class & fields | Table & columns         |
| Database Dependent | No             | Yes                     |
| Example            | from Student   | SELECT * FROM student   |


⭐ HQL Examples  

Assume:  

class Student {  
   int id;  
   String name;  
}  


⭐ 1️⃣ SELECT Query  

Query q = session.createQuery("from Student");  
List<Student> list = q.list();  

📌 Meaning:  
Get all Student objects  


⭐ 2️⃣ UPDATE Query  

Query q = session.createQuery("update Student set name='Raj' where id=1");  
q.executeUpdate();  

📌 Meaning:  
Update name of student with id = 1  


⭐ 3️⃣ DELETE Query  

Query q = session.createQuery("delete from Student where id=1");  
q.executeUpdate();  

📌 Meaning:  
Delete student with id = 1  


⭐ Simple Diagram  

Java Object (Student)  
        |  
        v  
       HQL  
        |  
        v  
     Database  


⭐ Key Points  

1️⃣ Uses class name, not table name  
2️⃣ Database independent  
3️⃣ Easy to use  


⭐ One-Line Exam Answer  

HQL is a Hibernate query language that works on Java objects and is used to perform operations like 
SELECT, UPDATE, and DELETE.  


🎯 Easy Memory Trick  

HQL → Object based  
SQL → Table based  




⭐ HQL Program Example  


🔹 Assumption  

You already have Student entity class:  

@Entity  
@Table(name="student")  
public class Student {  

    @Id  
    private int id;  
    private String name;  

    // getters & setters  
}  


⭐ Main Program (HQL Operations)  

import org.hibernate.*;  
import org.hibernate.cfg.Configuration;  
import java.util.List;  

public class HQLExample {  
    public static void main(String[] args) {  

        // Step 1: Load configuration  
        Configuration cfg = new Configuration().configure("hibernate.cfg.xml");  

        // Step 2: Create SessionFactory  
        SessionFactory factory = cfg.buildSessionFactory();  

        // Step 3: Open Session  
        Session session = factory.openSession();  

        // Step 4: Begin Transaction  
        Transaction tx = session.beginTransaction();  


        // =========================  
        // ⭐ 1️⃣ SELECT Query  
        // =========================  
        Query q1 = session.createQuery("from Student"); // HQL  
        List<Student> list = q1.list();  

        System.out.println("---- SELECT ----");  
        for(Student s : list) {  
            System.out.println(s.getId() + " " + s.getName());  
        }  


        // =========================  
        // ⭐ 2️⃣ UPDATE Query  
        // =========================  
        Query q2 = session.createQuery(  
            "update Student set name='UpdatedName' where id=1"  
        );  
        int updated = q2.executeUpdate();  
        System.out.println("Updated Rows: " + updated);  


        // =========================  
        // ⭐ 3️⃣ DELETE Query  
        // =========================  
        Query q3 = session.createQuery(  
            "delete from Student where id=2"  
        );  
        int deleted = q3.executeUpdate();  
        System.out.println("Deleted Rows: " + deleted);  


        // Step 5: Commit Transaction  
        tx.commit();  

        // Step 6: Close Session  
        session.close();  

        System.out.println("HQL Operations Done!");  
    }  
}  


⭐ Output Example  

---- SELECT ----  
1 Raj  
2 Amit  

Updated Rows: 1  
Deleted Rows: 1  

HQL Operations Done!  


⭐ Step-by-Step Flow  

1️⃣ Load config  
2️⃣ Open session  
3️⃣ Start transaction  
4️⃣ Run HQL queries  
5️⃣ Commit  
6️⃣ Close session  


⭐ Important Points  

"from Student" → uses class name (not table)  
"update Student" → object-based query  
"delete from Student" → remove object  


⭐ One-Line Exam Tip  

In HQL program, we use session.createQuery() to execute object-based queries like SELECT, UPDATE, and 
DELETE.  
      
      `},{id:1,question:"1.",answer:"",codeExample:""},{id:1,question:"1.",answer:"",codeExample:""},{id:1,question:"1.",answer:"",codeExample:""},{id:1,question:"1.",answer:"",codeExample:""},{id:1,question:"1.",answer:"",codeExample:""},{id:1,question:"1.",answer:"",codeExample:""},{id:1111,question:"how to download jar folder",answer:"",codeExample:`
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
      `},{id:8.8,question:"8. Practical 8: JSP - Java Beans     Develop an application for Bank Account information using Java Beans. This application will perform various operation on bank account like withdraw, deposit and displaying the information.",answer:"",codeExample:`

Final Project Structure (Very Important)

DataDrivenBankApp
│
├── index.jsp
│
└── WEB-INF
     ├── web.xml
     └── classes
          └── com
               └── bank
                    ├── BankBean.java
                    └── BankBean.class


Compile and run code:

javac BankBean.java

http://localhost:8080/JSPBankApp/



index.jsp

<%@ page import="com.bank.BankBean" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<jsp:useBean id="bank" class="com.bank.BankBean" scope="session"/>

<html>
<head>
 <title>Bank Account Application</title>
</head>
<body>

<h2>Bank Account Information</h2>

<form method="post">
 Account Holder Name:
 <input type="text" name="name" required><br><br>

 Amount:
 <input type="number" name="amount" step="0.01"><br><br>

 <input type="submit" name="action" value="Deposit">
 <input type="submit" name="action" value="Withdraw">
</form>

<%
 String name = request.getParameter("name");
 String amountStr = request.getParameter("amount");
 String action = request.getParameter("action");

 if (name != null) {
     bank.setAccountHolder(name);
 }

 if (amountStr != null && action != null) {

     double amount = Double.parseDouble(amountStr);

     if (action.equals("Deposit")) {
         bank.deposit(amount);
     }
     else if (action.equals("Withdraw")) {
         bank.withdraw(amount);
     }
 }
%>

<h3>Account Details</h3>

Account Holder: <%= bank.getAccountHolder() %> <br>
Balance: <%= bank.getBalance() %>

</body>
</html>
      


web.xml

<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

</web-app>



BankBean.java

package com.bank;   // package name must match folder structure

import java.io.Serializable;

public class BankBean implements Serializable {

    private String accountHolder;
    private double balance;

    // No-argument constructor (VERY IMPORTANT for JavaBean)
    public BankBean() {
        balance = 0.0;   // initial balance
    }

    // Getter for account holder
    public String getAccountHolder() {
        return accountHolder;
    }

    // Setter for account holder
    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }

    // Deposit method
    public void deposit(double amount) {
        if(amount > 0) {
            balance = balance + amount;
        }
    }

    // Withdraw method
    public void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance = balance - amount;
        }
    }
}
      
                    `},{id:9,question:"9. JSP - Custom Tags   Develop a custom JSP tag which accepts 10 numbers from user and sorts them in specified order.",answer:"",codeExample:`
Project Folder Structure

Example path:

C:\\xampp\\tomcat\\webapps\\CustomTag9

Folder structure:
    
CustomTag9
│
├── index.jsp
│
└── WEB-INF
     │
     ├── web.xml
     ├── custom.tld
     │
     └── classes
          └── com
               └── custom
                    ├── SortTag.java
                    └── SortTag.class


index.jsp

<%@ page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="WEB-INF/custom.tld" prefix="c" %>

<html>
<body>

<h2>Custom Tag Sorting</h2>

<c:sort numbers="9,5,3,8,1,2"/>

</body>
</html>



web.xml

<web-app>

<welcome-file-list>
<welcome-file>index.jsp</welcome-file>
</welcome-file-list>

</web-app>



custom.tld

<?xml version="1.0" encoding="UTF-8"?>

<taglib>

<tlib-version>1.0</tlib-version>
<jsp-version>2.0</jsp-version>
<short-name>custom</short-name>

<tag>
<name>sort</name>
<tag-class>com.custom.SortTag</tag-class>
<body-content>empty</body-content>

<attribute>
<name>numbers</name>
<required>true</required>
</attribute>

</tag>

</taglib>



SortTag.java

package com.custom;

import java.io.IOException;
import java.util.Arrays;
import java.util.StringTokenizer;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

public class SortTag extends SimpleTagSupport {

    private String numbers;

    public void setNumbers(String numbers){
        this.numbers = numbers;
    }

    public void doTag() throws JspException, IOException {

        JspWriter out = getJspContext().getOut();

        StringTokenizer st = new StringTokenizer(numbers, ",");

        int arr[] = new int[st.countTokens()];

        for(int i=0;i<arr.length;i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arr);

        out.println("<h3>Sorted Numbers</h3>");

        for(int i=0;i<arr.length;i++){
            out.println(arr[i] + "<br>");
        }
    }
}




✅ Correct Compile Command

Run this inside:

WEB-INF\\classes\\com\\custom
javac -cp "C:\\tomcat9\\apache-tomcat-9.0.115\\lib\\servlet-api.jar;C:\\tomcat9\\apache-tomcat-9.0.115\\lib\\jsp-api.jar" SortTag.java

⚠ Important: On Windows, classpath jars are separated by ;



🚀 Then run project

Start Tomcat and open:

http://localhost:8080/CustomTag9



Output should be:

Sorted Numbers
1
2
3
5
8
9




---------------------------------------------------------


🎯 Why .tld is Used

Without a .tld file, JSP cannot understand your custom tag.
It acts like a configuration file connecting JSP tags to Java classes.


Example flow:

JSP Page
   ↓
Custom Tag (<c:sort>)
   ↓
custom.tld
   ↓
Java Class (SortTag.java)
   ↓
Execution


📌 Example

1️⃣ JSP Page

<%@ taglib uri="WEB-INF/custom.tld" prefix="c" %>

<c:sort numbers="9,5,3,8,1"/>


Here:

c → tag prefix
sort → custom tag


2️⃣ TLD File

<tag>
    <name>sort</name>
    <tag-class>com.custom.SortTag</tag-class>

    <attribute>
        <name>numbers</name>
        <required>true</required>
    </attribute>

</tag>


This tells JSP:

    Tag name = sort
    Java class = SortTag
    Attribute = numbers


📌 Where .tld File is Stored

Usually inside:
    WEB-INF/

Example:
    WEB-INF/custom.tld

📌 Advantages of TLD

✔ Allows creating reusable tags
✔ Makes JSP cleaner and easier to read
✔ Separates Java logic from HTML
✔ Similar to built-in JSTL tags


🧠 Simple One-Line Exam Answer

A .tld (Tag Library Descriptor) file is an XML file used in JSP to define custom tags and map them to 
their corresponding Java classes.
      `},{id:10.1,question:"10. JSP - Application Context  Develop an application that will allow maximum 3 users to access the application. If number of users exceeds than limit then user will be redirected to the error page.",answer:"",codeExample:`
Project Folder Structure

Create project inside Tomcat webapps.

Example:

    C:\\tomcat9\\apache-tomcat-9.0.115\\webapps\\UserLimitApp

Structure:
    
UserLimitApp
│
├── index.jsp
├── error.jsp
│
└── WEB-INF
     └── web.xml



index.jsp

<%@ page contentType="text/html;charset=UTF-8" %>

<%
Integer count = (Integer)application.getAttribute("userCount");

if(count == null){
    count = 0;
}

count++;

application.setAttribute("userCount", count);

if(count > 3){
    response.sendRedirect("error.jsp");
    return;
}
%>

<html>
<body>

<h2>Welcome to the Application</h2>

<p>Current Users: <%= count %></p>

</body>
</html>



error.jsp

<html>
<body>

<h2 style="color:red;">Maximum User Limit Reached!</h2>

<p>Only 3 users can access the application at a time.</p>

</body>
</html>



web.xml

<web-app>

<welcome-file-list>
<welcome-file>index.jsp</welcome-file>
</welcome-file-list>

</web-app>


OUTPUT:

Welcome to the Application
Current Users: 1

Welcome to the Application
Current Users: 2

Welcome to the Application
Current Users: 3

Maximum User Limit Reached!
Only 3 users can access the application at a time.




Run program:

Open Browser:

http://localhost:8080/UserLimitApp
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],v=O=>{fe(M===O?null:O)};return ze.jsxs("div",{className:"app-container",children:[ze.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),ze.jsx("div",{className:"questions-container",children:K.map(O=>ze.jsxs("div",{className:"question-item",children:[ze.jsx("button",{className:"question-button $ {activeId === q.id ? 'active' : ''}",onClick:()=>v(O.id),children:O.question}),M===O.id&&ze.jsxs("div",{className:"answer-container",children:[ze.jsxs("div",{className:"answer",children:[ze.jsx("h3",{children:"Answer:"}),ze.jsx("p",{children:O.answer})]}),O.codeExample&&ze.jsxs("div",{className:"code-example",children:[ze.jsx("h3",{children:"Code Example:"}),ze.jsx("pre",{children:ze.jsx("code",{children:O.codeExample})})]})]})]},O.id))})]})}av.createRoot(document.getElementById("root")).render(ze.jsx(Cp.StrictMode,{children:ze.jsx(nv,{})}));
