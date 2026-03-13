(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))v(z);new MutationObserver(z=>{for(const k of z)if(k.type==="childList")for(const pe of k.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&v(pe)}).observe(document,{childList:!0,subtree:!0});function F(z){const k={};return z.integrity&&(k.integrity=z.integrity),z.referrerPolicy&&(k.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?k.credentials="include":z.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function v(z){if(z.ep)return;z.ep=!0;const k=F(z);fetch(z.href,k)}})();var lr={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Kp(){if(dm)return gn;dm=1;var j=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function F(v,z,k){var pe=null;if(k!==void 0&&(pe=""+k),z.key!==void 0&&(pe=""+z.key),"key"in z){k={};for(var ze in z)ze!=="key"&&(k[ze]=z[ze])}else k=z;return z=k.ref,{$$typeof:j,type:v,key:pe,ref:z!==void 0?z:null,props:k}}return gn.Fragment=fe,gn.jsx=F,gn.jsxs=F,gn}var pm;function kp(){return pm||(pm=1,lr.exports=Kp()),lr.exports}var Be=kp(),nr={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Wp(){if(vm)return N;vm=1;var j=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ce=Symbol.iterator;function ke(o){return o===null||typeof o!="object"?null:(o=ce&&o[ce]||o["@@iterator"],typeof o=="function"?o:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,Rt={};function We(o,E,x){this.props=o,this.context=E,this.refs=Rt,this.updater=x||Le}We.prototype.isReactComponent={},We.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},We.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function kt(){}kt.prototype=We.prototype;function qe(o,E,x){this.props=o,this.context=E,this.refs=Rt,this.updater=x||Le}var ut=qe.prototype=new kt;ut.constructor=qe,Ue(ut,We.prototype),ut.isPureReactComponent=!0;var Et=Array.isArray;function we(){}var X={H:null,A:null,T:null,S:null},Je=Object.prototype.hasOwnProperty;function Tt(o,E,x){var D=x.ref;return{$$typeof:j,type:o,key:E,ref:D!==void 0?D:null,props:x}}function _a(o,E){return Tt(o.type,E,o.props)}function Ct(o){return typeof o=="object"&&o!==null&&o.$$typeof===j}function _e(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(x){return E[x]})}var ba=/\/+/g;function Mt(o,E){return typeof o=="object"&&o!==null&&o.key!=null?_e(""+o.key):E.toString(36)}function ht(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(we,we):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function y(o,E,x,D,B){var J=typeof o;(J==="undefined"||J==="boolean")&&(o=null);var I=!1;if(o===null)I=!0;else switch(J){case"bigint":case"string":case"number":I=!0;break;case"object":switch(o.$$typeof){case j:case fe:I=!0;break;case P:return I=o._init,y(I(o._payload),E,x,D,B)}}if(I)return B=B(o),I=D===""?"."+Mt(o,0):D,Et(B)?(x="",I!=null&&(x=I.replace(ba,"$&/")+"/"),y(B,E,x,"",function(Al){return Al})):B!=null&&(Ct(B)&&(B=_a(B,x+(B.key==null||o&&o.key===B.key?"":(""+B.key).replace(ba,"$&/")+"/")+I)),E.push(B)),1;I=0;var He=D===""?".":D+":";if(Et(o))for(var ve=0;ve<o.length;ve++)D=o[ve],J=He+Mt(D,ve),I+=y(D,E,x,J,B);else if(ve=ke(o),typeof ve=="function")for(o=ve.call(o),ve=0;!(D=o.next()).done;)D=D.value,J=He+Mt(D,ve++),I+=y(D,E,x,J,B);else if(J==="object"){if(typeof o.then=="function")return y(ht(o),E,x,D,B);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return I}function C(o,E,x){if(o==null)return o;var D=[],B=0;return y(o,D,"","",function(J){return E.call(x,J,B++)}),D}function H(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(x){(o._status===0||o._status===-1)&&(o._status=1,o._result=x)},function(x){(o._status===0||o._status===-1)&&(o._status=2,o._result=x)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var te=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ie={map:C,forEach:function(o,E,x){C(o,function(){E.apply(this,arguments)},x)},count:function(o){var E=0;return C(o,function(){E++}),E},toArray:function(o){return C(o,function(E){return E})||[]},only:function(o){if(!Ct(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return N.Activity=U,N.Children=ie,N.Component=We,N.Fragment=F,N.Profiler=z,N.PureComponent=qe,N.StrictMode=v,N.Suspense=q,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,N.__COMPILER_RUNTIME={__proto__:null,c:function(o){return X.H.useMemoCache(o)}},N.cache=function(o){return function(){return o.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(o,E,x){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var D=Ue({},o.props),B=o.key;if(E!=null)for(J in E.key!==void 0&&(B=""+E.key),E)!Je.call(E,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&E.ref===void 0||(D[J]=E[J]);var J=arguments.length-2;if(J===1)D.children=x;else if(1<J){for(var I=Array(J),He=0;He<J;He++)I[He]=arguments[He+2];D.children=I}return Tt(o.type,B,D)},N.createContext=function(o){return o={$$typeof:pe,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:k,_context:o},o},N.createElement=function(o,E,x){var D,B={},J=null;if(E!=null)for(D in E.key!==void 0&&(J=""+E.key),E)Je.call(E,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(B[D]=E[D]);var I=arguments.length-2;if(I===1)B.children=x;else if(1<I){for(var He=Array(I),ve=0;ve<I;ve++)He[ve]=arguments[ve+2];B.children=He}if(o&&o.defaultProps)for(D in I=o.defaultProps,I)B[D]===void 0&&(B[D]=I[D]);return Tt(o,J,B)},N.createRef=function(){return{current:null}},N.forwardRef=function(o){return{$$typeof:ze,render:o}},N.isValidElement=Ct,N.lazy=function(o){return{$$typeof:P,_payload:{_status:-1,_result:o},_init:H}},N.memo=function(o,E){return{$$typeof:T,type:o,compare:E===void 0?null:E}},N.startTransition=function(o){var E=X.T,x={};X.T=x;try{var D=o(),B=X.S;B!==null&&B(x,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(we,te)}catch(J){te(J)}finally{E!==null&&x.types!==null&&(E.types=x.types),X.T=E}},N.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},N.use=function(o){return X.H.use(o)},N.useActionState=function(o,E,x){return X.H.useActionState(o,E,x)},N.useCallback=function(o,E){return X.H.useCallback(o,E)},N.useContext=function(o){return X.H.useContext(o)},N.useDebugValue=function(){},N.useDeferredValue=function(o,E){return X.H.useDeferredValue(o,E)},N.useEffect=function(o,E){return X.H.useEffect(o,E)},N.useEffectEvent=function(o){return X.H.useEffectEvent(o)},N.useId=function(){return X.H.useId()},N.useImperativeHandle=function(o,E,x){return X.H.useImperativeHandle(o,E,x)},N.useInsertionEffect=function(o,E){return X.H.useInsertionEffect(o,E)},N.useLayoutEffect=function(o,E){return X.H.useLayoutEffect(o,E)},N.useMemo=function(o,E){return X.H.useMemo(o,E)},N.useOptimistic=function(o,E){return X.H.useOptimistic(o,E)},N.useReducer=function(o,E,x){return X.H.useReducer(o,E,x)},N.useRef=function(o){return X.H.useRef(o)},N.useState=function(o){return X.H.useState(o)},N.useSyncExternalStore=function(o,E,x){return X.H.useSyncExternalStore(o,E,x)},N.useTransition=function(){return X.H.useTransition()},N.version="19.2.4",N}var Sm;function cr(){return Sm||(Sm=1,nr.exports=Wp()),nr.exports}var Cm=cr(),ir={exports:{}},bn={},ur={exports:{}},sr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Fp(){return hm||(hm=1,(function(j){function fe(y,C){var H=y.length;y.push(C);e:for(;0<H;){var te=H-1>>>1,ie=y[te];if(0<z(ie,C))y[te]=C,y[H]=ie,H=te;else break e}}function F(y){return y.length===0?null:y[0]}function v(y){if(y.length===0)return null;var C=y[0],H=y.pop();if(H!==C){y[0]=H;e:for(var te=0,ie=y.length,o=ie>>>1;te<o;){var E=2*(te+1)-1,x=y[E],D=E+1,B=y[D];if(0>z(x,H))D<ie&&0>z(B,x)?(y[te]=B,y[D]=H,te=D):(y[te]=x,y[E]=H,te=E);else if(D<ie&&0>z(B,H))y[te]=B,y[D]=H,te=D;else break e}}return C}function z(y,C){var H=y.sortIndex-C.sortIndex;return H!==0?H:y.id-C.id}if(j.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;j.unstable_now=function(){return k.now()}}else{var pe=Date,ze=pe.now();j.unstable_now=function(){return pe.now()-ze}}var q=[],T=[],P=1,U=null,ce=3,ke=!1,Le=!1,Ue=!1,Rt=!1,We=typeof setTimeout=="function"?setTimeout:null,kt=typeof clearTimeout=="function"?clearTimeout:null,qe=typeof setImmediate<"u"?setImmediate:null;function ut(y){for(var C=F(T);C!==null;){if(C.callback===null)v(T);else if(C.startTime<=y)v(T),C.sortIndex=C.expirationTime,fe(q,C);else break;C=F(T)}}function Et(y){if(Ue=!1,ut(y),!Le)if(F(q)!==null)Le=!0,we||(we=!0,_e());else{var C=F(T);C!==null&&ht(Et,C.startTime-y)}}var we=!1,X=-1,Je=5,Tt=-1;function _a(){return Rt?!0:!(j.unstable_now()-Tt<Je)}function Ct(){if(Rt=!1,we){var y=j.unstable_now();Tt=y;var C=!0;try{e:{Le=!1,Ue&&(Ue=!1,kt(X),X=-1),ke=!0;var H=ce;try{t:{for(ut(y),U=F(q);U!==null&&!(U.expirationTime>y&&_a());){var te=U.callback;if(typeof te=="function"){U.callback=null,ce=U.priorityLevel;var ie=te(U.expirationTime<=y);if(y=j.unstable_now(),typeof ie=="function"){U.callback=ie,ut(y),C=!0;break t}U===F(q)&&v(q),ut(y)}else v(q);U=F(q)}if(U!==null)C=!0;else{var o=F(T);o!==null&&ht(Et,o.startTime-y),C=!1}}break e}finally{U=null,ce=H,ke=!1}C=void 0}}finally{C?_e():we=!1}}}var _e;if(typeof qe=="function")_e=function(){qe(Ct)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Mt=ba.port2;ba.port1.onmessage=Ct,_e=function(){Mt.postMessage(null)}}else _e=function(){We(Ct,0)};function ht(y,C){X=We(function(){y(j.unstable_now())},C)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(y){y.callback=null},j.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<y?Math.floor(1e3/y):5},j.unstable_getCurrentPriorityLevel=function(){return ce},j.unstable_next=function(y){switch(ce){case 1:case 2:case 3:var C=3;break;default:C=ce}var H=ce;ce=C;try{return y()}finally{ce=H}},j.unstable_requestPaint=function(){Rt=!0},j.unstable_runWithPriority=function(y,C){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var H=ce;ce=y;try{return C()}finally{ce=H}},j.unstable_scheduleCallback=function(y,C,H){var te=j.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,y){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,y={id:P++,callback:C,priorityLevel:y,startTime:H,expirationTime:ie,sortIndex:-1},H>te?(y.sortIndex=H,fe(T,y),F(q)===null&&y===F(T)&&(Ue?(kt(X),X=-1):Ue=!0,ht(Et,H-te))):(y.sortIndex=ie,fe(q,y),Le||ke||(Le=!0,we||(we=!0,_e()))),y},j.unstable_shouldYield=_a,j.unstable_wrapCallback=function(y){var C=ce;return function(){var H=ce;ce=C;try{return y.apply(this,arguments)}finally{ce=H}}}})(sr)),sr}var ym;function Pp(){return ym||(ym=1,ur.exports=Fp()),ur.exports}var rr={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Ip(){if(gm)return Oe;gm=1;var j=cr();function fe(q){var T="https://react.dev/errors/"+q;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)T+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+q+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var v={d:{f:F,r:function(){throw Error(fe(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},z=Symbol.for("react.portal");function k(q,T,P){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:U==null?null:""+U,children:q,containerInfo:T,implementation:P}}var pe=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ze(q,T){if(q==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,Oe.createPortal=function(q,T){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return k(q,T,null,P)},Oe.flushSync=function(q){var T=pe.T,P=v.p;try{if(pe.T=null,v.p=2,q)return q()}finally{pe.T=T,v.p=P,v.d.f()}},Oe.preconnect=function(q,T){typeof q=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,v.d.C(q,T))},Oe.prefetchDNS=function(q){typeof q=="string"&&v.d.D(q)},Oe.preinit=function(q,T){if(typeof q=="string"&&T&&typeof T.as=="string"){var P=T.as,U=ze(P,T.crossOrigin),ce=typeof T.integrity=="string"?T.integrity:void 0,ke=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;P==="style"?v.d.S(q,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:U,integrity:ce,fetchPriority:ke}):P==="script"&&v.d.X(q,{crossOrigin:U,integrity:ce,fetchPriority:ke,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Oe.preinitModule=function(q,T){if(typeof q=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var P=ze(T.as,T.crossOrigin);v.d.M(q,{crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&v.d.M(q)},Oe.preload=function(q,T){if(typeof q=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var P=T.as,U=ze(P,T.crossOrigin);v.d.L(q,P,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Oe.preloadModule=function(q,T){if(typeof q=="string")if(T){var P=ze(T.as,T.crossOrigin);v.d.m(q,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:P,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else v.d.m(q)},Oe.requestFormReset=function(q){v.d.r(q)},Oe.unstable_batchedUpdates=function(q,T){return q(T)},Oe.useFormState=function(q,T,P){return pe.H.useFormState(q,T,P)},Oe.useFormStatus=function(){return pe.H.useHostTransitionStatus()},Oe.version="19.2.4",Oe}var bm;function $p(){if(bm)return rr.exports;bm=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(fe){console.error(fe)}}return j(),rr.exports=Ip(),rr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function ev(){if(Em)return bn;Em=1;var j=Pp(),fe=cr(),F=$p();function v(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ze(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(k(e)!==e)throw Error(v(188))}function T(e){var t=e.alternate;if(!t){if(t=k(e),t===null)throw Error(v(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return q(n),e;if(i===l)return q(n),t;i=i.sibling}throw Error(v(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,l=i;break}if(s===l){u=!0,l=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,l=n;break}if(s===l){u=!0,l=i,a=n;break}s=s.sibling}if(!u)throw Error(v(189))}}if(a.alternate!==l)throw Error(v(190))}if(a.tag!==3)throw Error(v(188));return a.stateNode.current===a?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,ce=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),Le=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),kt=Symbol.for("react.consumer"),qe=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),_a=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case We:return"Profiler";case Rt:return"StrictMode";case Et:return"Suspense";case we:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Le:return"Portal";case qe:return e.displayName||"Context";case kt:return(e._context.displayName||"Context")+".Consumer";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Mt(e(t))}catch{}}return null}var ht=Array.isArray,y=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function o(e){return{current:e}}function E(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function x(e,t){ie++,te[ie]=e.current,e.current=t}var D=o(null),B=o(null),J=o(null),I=o(null);function He(e,t){switch(x(J,t),x(B,e),x(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bf(t),e=Lf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(D),x(D,e)}function ve(){E(D),E(B),E(J)}function Al(e){e.memoizedState!==null&&x(I,e);var t=D.current,a=Lf(t,e.type);t!==a&&(x(B,e),x(D,a))}function En(e){B.current===e&&(E(D),E(B)),I.current===e&&(E(I),vn._currentValue=H)}var Ji,or;function Ea(e){if(Ji===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||"",or=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ji+e+or}var _i=!1;function Qi(e,t){if(!e||_i)return"";_i=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var p=S}Reflect.construct(e,[],b)}else{try{b.call()}catch(S){p=S}e.call(b.prototype)}}else{try{throw Error()}catch(S){p=S}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&p&&typeof S.stack=="string")return[S.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),d=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===d.length)for(l=r.length-1,n=d.length-1;1<=l&&0<=n&&r[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==d[n]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=n);break}}}finally{_i=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function xm(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Qi(e.type,!1);case 11:return Qi(e.type.render,!1);case 1:return Qi(e.type,!0);case 31:return Ea("Activity");default:return""}}function fr(e){try{var t="",a=null;do t+=xm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Gi=Object.prototype.hasOwnProperty,Yi=j.unstable_scheduleCallback,Xi=j.unstable_cancelCallback,Am=j.unstable_shouldYield,Dm=j.unstable_requestPaint,Fe=j.unstable_now,jm=j.unstable_getCurrentPriorityLevel,mr=j.unstable_ImmediatePriority,dr=j.unstable_UserBlockingPriority,Tn=j.unstable_NormalPriority,Rm=j.unstable_LowPriority,pr=j.unstable_IdlePriority,Mm=j.log,qm=j.unstable_setDisableYieldValue,Dl=null,Pe=null;function Wt(e){if(typeof Mm=="function"&&qm(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Dl,e)}catch{}}var Ie=Math.clz32?Math.clz32:Um,Om=Math.log,zm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Om(e)/zm|0)|0}var Cn=256,xn=262144,An=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ta(l):(u&=s,u!==0?n=Ta(u):a||(a=s&~e,a!==0&&(n=Ta(a))))):(s=l&~i,s!==0?n=Ta(s):u!==0?n=Ta(u):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(){var e=An;return An<<=1,(An&62914560)===0&&(An=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nm(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,d=e.hiddenUpdates;for(a=u&~a;0<a;){var h=31-Ie(a),b=1<<h;s[h]=0,r[h]=-1;var p=d[h];if(p!==null)for(d[h]=null,h=0;h<p.length;h++){var S=p[h];S!==null&&(S.lane&=-536870913)}a&=~b}l!==0&&Sr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Sr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function hr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ie(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function yr(e,t){var a=t&-t;return a=(a&42)!==0?1:Zi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gr(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:um(e.type))}function br(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var Ft=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Ft,Qe="__reactProps$"+Ft,Qa="__reactContainer$"+Ft,ki="__reactEvents$"+Ft,Bm="__reactListeners$"+Ft,Lm="__reactHandles$"+Ft,Er="__reactResources$"+Ft,Ml="__reactMarker$"+Ft;function Wi(e){delete e[Ae],delete e[Qe],delete e[ki],delete e[Bm],delete e[Lm]}function Ga(e){var t=e[Ae];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Ae]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[Ae])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Ya(e){if(e=e[Ae]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(v(33))}function Xa(e){var t=e[Er];return t||(t=e[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Ml]=!0}var Tr=new Set,Cr={};function Ca(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Tr.add(t[e])}var wm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xr={},Ar={};function Jm(e){return Gi.call(Ar,e)?!0:Gi.call(xr,e)?!1:wm.test(e)?Ar[e]=!0:(xr[e]=!0,!1)}function jn(e,t,a){if(Jm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=Dr(e)?"checked":"value";e._valueTracker=_m(e,t,""+e[t])}}function jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Dr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qm=/[\n"\\]/g;function rt(e){return e.replace(Qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pi(e,t,a,l,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ii(e,u,st(t)):a!=null?Ii(e,u,st(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function Rr(e,t,a,l,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Fi(e)}function Ii(e,t,a){t==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Mr(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function qr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(v(92));if(ht(l)){if(1<l.length)throw Error(v(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Fi(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Or(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Gm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zr(e,t,a){if(t!=null&&typeof t!="object")throw Error(v(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Or(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Or(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qn(e){return Xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,Wa=null;function Ur(e){var t=Ya(e);if(t&&(e=t.stateNode)){var a=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Qe]||null;if(!n)throw Error(v(90));Pi(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&jr(l)}break e;case"textarea":Mr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var au=!1;function Hr(e,t,a){if(au)return e(t,a);au=!0;try{var l=e(t);return l}finally{if(au=!1,(ka!==null||Wa!==null)&&(hi(),ka&&(t=ka,e=Wa,Wa=ka=null,Ur(t),e)))for(t=0;t<e.length;t++)Ur(e[t])}}function Ol(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Qe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(v(231,t,typeof a));return a}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(zt)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){lu=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{lu=!1}var Pt=null,nu=null,On=null;function Nr(){if(On)return On;var e,t=nu,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return On=n.slice(e,1<l?1-l:void 0)}function zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function Br(){return!1}function Ge(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Un:Br,this.isPropagationStopped=Br,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Ge(xa),Ul=U({},xa,{view:0,detail:0}),Vm=Ge(Ul),iu,uu,Hl,Nn=U({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(iu=e.screenX-Hl.screenX,uu=e.screenY-Hl.screenY):uu=iu=0,Hl=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Lr=Ge(Nn),Zm=U({},Nn,{dataTransfer:0}),Km=Ge(Zm),km=U({},Ul,{relatedTarget:0}),su=Ge(km),Wm=U({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Ge(Wm),Pm=U({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Im=Ge(Pm),$m=U({},xa,{data:0}),wr=Ge($m),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function ru(){return ld}var nd=U({},Ul,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),id=Ge(nd),ud=U({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jr=Ge(ud),sd=U({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),rd=Ge(sd),cd=U({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),od=Ge(cd),fd=U({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Ge(fd),dd=U({},xa,{newState:0,oldState:0}),pd=Ge(dd),vd=[9,13,27,32],cu=zt&&"CompositionEvent"in window,Nl=null;zt&&"documentMode"in document&&(Nl=document.documentMode);var Sd=zt&&"TextEvent"in window&&!Nl,_r=zt&&(!cu||Nl&&8<Nl&&11>=Nl),Qr=" ",Gr=!1;function Yr(e,t){switch(e){case"keyup":return vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function hd(e,t){switch(e){case"compositionend":return Xr(t);case"keypress":return t.which!==32?null:(Gr=!0,Qr);case"textInput":return e=t.data,e===Qr&&Gr?null:e;default:return null}}function yd(e,t){if(Fa)return e==="compositionend"||!cu&&Yr(e,t)?(e=Nr(),On=nu=Pt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _r&&t.locale!=="ko"?null:t.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gd[e.type]:t==="textarea"}function Zr(e,t,a,l){ka?Wa?Wa.push(l):Wa=[l]:ka=l,t=xi(t,"onChange"),0<t.length&&(a=new Hn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Bl=null,Ll=null;function bd(e){qf(e,0)}function Bn(e){var t=ql(e);if(jr(t))return e}function Kr(e,t){if(e==="change")return t}var kr=!1;if(zt){var ou;if(zt){var fu="oninput"in document;if(!fu){var Wr=document.createElement("div");Wr.setAttribute("oninput","return;"),fu=typeof Wr.oninput=="function"}ou=fu}else ou=!1;kr=ou&&(!document.documentMode||9<document.documentMode)}function Fr(){Bl&&(Bl.detachEvent("onpropertychange",Pr),Ll=Bl=null)}function Pr(e){if(e.propertyName==="value"&&Bn(Ll)){var t=[];Zr(t,Ll,e,tu(e)),Hr(bd,t)}}function Ed(e,t,a){e==="focusin"?(Fr(),Bl=t,Ll=a,Bl.attachEvent("onpropertychange",Pr)):e==="focusout"&&Fr()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bn(Ll)}function Cd(e,t){if(e==="click")return Bn(t)}function xd(e,t){if(e==="input"||e==="change")return Bn(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Ad;function wl(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Gi.call(t,n)||!$e(e[n],t[n]))return!1}return!0}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $r(e,t){var a=Ir(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ir(a)}}function ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Mn(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dd=zt&&"documentMode"in document&&11>=document.documentMode,Pa=null,du=null,Jl=null,pu=!1;function ac(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Pa==null||Pa!==Mn(l)||(l=Pa,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jl&&wl(Jl,l)||(Jl=l,l=xi(du,"onSelect"),0<l.length&&(t=new Hn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function Aa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ia={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},vu={},lc={};zt&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function Da(e){if(vu[e])return vu[e];if(!Ia[e])return e;var t=Ia[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lc)return vu[e]=t[a];return e}var nc=Da("animationend"),ic=Da("animationiteration"),uc=Da("animationstart"),jd=Da("transitionrun"),Rd=Da("transitionstart"),Md=Da("transitioncancel"),sc=Da("transitionend"),rc=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function yt(e,t){rc.set(e,t),Ca(t,[e])}var Ln=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,hu=0;function wn(){for(var e=$a,t=hu=$a=0;t<e;){var a=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&cc(a,n,i)}}function Jn(e,t,a,l){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=l,hu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yu(e,t,a,l){return Jn(e,t,a,l),_n(e)}function ja(e,t){return Jn(e,null,null,t),_n(e)}function cc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Ie(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function _n(e){if(50<rn)throw rn=0,js=null,Error(v(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function qd(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,l){return new qd(e,t,a,l)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function oc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")gu(e)&&(u=1);else if(typeof e=="string")u=Np(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,a,t,n),e.elementType=Tt,e.lanes=i,e;case Ue:return Ra(a.children,n,i,t);case Rt:u=8,n|=24;break;case We:return e=et(12,a,t,n|2),e.elementType=We,e.lanes=i,e;case Et:return e=et(13,a,t,n),e.elementType=Et,e.lanes=i,e;case we:return e=et(19,a,t,n),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:u=10;break e;case kt:u=9;break e;case ut:u=11;break e;case X:u=14;break e;case Je:u=16,l=null;break e}u=29,a=Error(v(130,e===null?"null":typeof e,"")),l=null}return t=et(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ra(e,t,a,l){return e=et(7,e,l,t),e.lanes=a,e}function bu(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fr(t)},mc.set(e,t),t)}return{value:e,source:t,stack:fr(t)}}var tl=[],al=0,Gn=null,_l=0,ft=[],mt=0,It=null,xt=1,At="";function Ht(e,t){tl[al++]=_l,tl[al++]=Gn,Gn=e,_l=t}function dc(e,t,a){ft[mt++]=xt,ft[mt++]=At,ft[mt++]=It,It=e;var l=xt;e=At;var n=32-Ie(l)-1;l&=~(1<<n),a+=1;var i=32-Ie(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,xt=1<<32-Ie(t)+n|a<<n|l,At=i+e}else xt=1<<i|a<<n|l,At=e}function Tu(e){e.return!==null&&(Ht(e,1),dc(e,1,0))}function Cu(e){for(;e===Gn;)Gn=tl[--al],tl[al]=null,_l=tl[--al],tl[al]=null;for(;e===It;)It=ft[--mt],ft[mt]=null,At=ft[--mt],ft[mt]=null,xt=ft[--mt],ft[mt]=null}function pc(e,t){ft[mt++]=xt,ft[mt++]=At,ft[mt++]=It,xt=t.id,At=t.overflow,It=e}var De=null,se=null,V=!1,$t=null,dt=!1,xu=Error(v(519));function ea(e){var t=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(ot(t,e)),xu}function vc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ae]=e,t[Qe]=l,a){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(a=0;a<on.length;a++)Q(on[a],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Rr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),qr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Hf(t.textContent,a)?(l.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),l.onScroll!=null&&Q("scroll",t),l.onScrollEnd!=null&&Q("scrollend",t),l.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ea(e,!0)}function Sc(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:De=De.return}}function ll(e){if(e!==De)return!1;if(!V)return Sc(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gs(e.type,e.memoizedProps)),a=!a),a&&se&&ea(e),Sc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));se=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));se=Yf(e)}else t===27?(t=se,pa(e.type)?(e=Ks,Ks=null,se=e):se=t):se=De?vt(e.stateNode.nextSibling):null;return!0}function Ma(){se=De=null,V=!1}function Au(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function Ql(e){$t===null?$t=[e]:$t.push(e)}var Du=o(null),qa=null,Nt=null;function ta(e,t,a){x(Du,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Du.current,E(Du)}function ju(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ru(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),ju(i.return,a,e),l||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(v(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),ju(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function nl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(v(387));if(u=u.memoizedProps,u!==null){var s=n.type;$e(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===I.current){if(u=n.alternate,u===null)throw Error(v(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(vn):e=[vn])}n=n.return}e!==null&&Ru(t,e,a,l),t.flags|=262144}function Yn(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){qa=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function je(e){return hc(qa,e)}function Xn(e,t){return qa===null&&Oa(e),hc(e,t)}function hc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(v(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var Od=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},zd=j.unstable_scheduleCallback,Ud=j.unstable_NormalPriority,ye={$$typeof:qe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Od,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&zd(Ud,function(){e.controller.abort()})}var Yl=null,qu=0,il=0,ul=null;function Hd(e,t){if(Yl===null){var a=Yl=[];qu=0,il=Us(),ul={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qu++,t.then(yc,yc),t}function yc(){if(--qu===0&&Yl!==null){ul!==null&&(ul.status="fulfilled");var e=Yl;Yl=null,il=0,ul=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nd(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var gc=y.S;y.S=function(e,t){lf=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hd(e,t),gc!==null&&gc(e,t)};var za=o(null);function Ou(){var e=za.current;return e!==null?e:ue.pooledCache}function Vn(e,t){t===null?x(za,za.current):x(za,t.pool)}function bc(){var e=Ou();return e===null?null:{parent:ye._currentValue,pool:e}}var sl=Error(v(460)),zu=Error(v(474)),Zn=Error(v(542)),Kn={then:function(){}};function Ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(v(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xc(e),e}throw Ha=t,sl}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,sl):a}}var Ha=null;function Cc(){if(Ha===null)throw Error(v(459));var e=Ha;return Ha=null,e}function xc(e){if(e===sl||e===Zn)throw Error(v(483))}var rl=null,Xl=0;function kn(e){var t=Xl;return Xl+=1,rl===null&&(rl=[]),Tc(rl,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===ce?Error(v(525)):(e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ac(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=Ut(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function u(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,m,g){return c===null||c.tag!==6?(c=bu(m,f.mode,g),c.return=f,c):(c=n(c,m),c.return=f,c)}function r(f,c,m,g){var M=m.type;return M===Ue?h(f,c,m.props.children,g,m.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Je&&Ua(M)===c.type)?(c=n(c,m.props),Vl(c,m),c.return=f,c):(c=Qn(m.type,m.key,m.props,null,f.mode,g),Vl(c,m),c.return=f,c)}function d(f,c,m,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Eu(m,f.mode,g),c.return=f,c):(c=n(c,m.children||[]),c.return=f,c)}function h(f,c,m,g,M){return c===null||c.tag!==7?(c=Ra(m,f.mode,g,M),c.return=f,c):(c=n(c,m),c.return=f,c)}function b(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=bu(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ke:return m=Qn(c.type,c.key,c.props,null,f.mode,m),Vl(m,c),m.return=f,m;case Le:return c=Eu(c,f.mode,m),c.return=f,c;case Je:return c=Ua(c),b(f,c,m)}if(ht(c)||_e(c))return c=Ra(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return b(f,kn(c),m);if(c.$$typeof===qe)return b(f,Xn(f,c),m);Wn(f,c)}return null}function p(f,c,m,g){var M=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:s(f,c,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ke:return m.key===M?r(f,c,m,g):null;case Le:return m.key===M?d(f,c,m,g):null;case Je:return m=Ua(m),p(f,c,m,g)}if(ht(m)||_e(m))return M!==null?null:h(f,c,m,g,null);if(typeof m.then=="function")return p(f,c,kn(m),g);if(m.$$typeof===qe)return p(f,c,Xn(f,m),g);Wn(f,m)}return null}function S(f,c,m,g,M){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(m)||null,s(c,f,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ke:return f=f.get(g.key===null?m:g.key)||null,r(c,f,g,M);case Le:return f=f.get(g.key===null?m:g.key)||null,d(c,f,g,M);case Je:return g=Ua(g),S(f,c,m,g,M)}if(ht(g)||_e(g))return f=f.get(m)||null,h(c,f,g,M,null);if(typeof g.then=="function")return S(f,c,m,kn(g),M);if(g.$$typeof===qe)return S(f,c,m,Xn(c,g),M);Wn(c,g)}return null}function A(f,c,m,g){for(var M=null,Z=null,R=c,w=c=0,Y=null;R!==null&&w<m.length;w++){R.index>w?(Y=R,R=null):Y=R.sibling;var K=p(f,R,m[w],g);if(K===null){R===null&&(R=Y);break}e&&R&&K.alternate===null&&t(f,R),c=i(K,c,w),Z===null?M=K:Z.sibling=K,Z=K,R=Y}if(w===m.length)return a(f,R),V&&Ht(f,w),M;if(R===null){for(;w<m.length;w++)R=b(f,m[w],g),R!==null&&(c=i(R,c,w),Z===null?M=R:Z.sibling=R,Z=R);return V&&Ht(f,w),M}for(R=l(R);w<m.length;w++)Y=S(R,f,w,m[w],g),Y!==null&&(e&&Y.alternate!==null&&R.delete(Y.key===null?w:Y.key),c=i(Y,c,w),Z===null?M=Y:Z.sibling=Y,Z=Y);return e&&R.forEach(function(ga){return t(f,ga)}),V&&Ht(f,w),M}function O(f,c,m,g){if(m==null)throw Error(v(151));for(var M=null,Z=null,R=c,w=c=0,Y=null,K=m.next();R!==null&&!K.done;w++,K=m.next()){R.index>w?(Y=R,R=null):Y=R.sibling;var ga=p(f,R,K.value,g);if(ga===null){R===null&&(R=Y);break}e&&R&&ga.alternate===null&&t(f,R),c=i(ga,c,w),Z===null?M=ga:Z.sibling=ga,Z=ga,R=Y}if(K.done)return a(f,R),V&&Ht(f,w),M;if(R===null){for(;!K.done;w++,K=m.next())K=b(f,K.value,g),K!==null&&(c=i(K,c,w),Z===null?M=K:Z.sibling=K,Z=K);return V&&Ht(f,w),M}for(R=l(R);!K.done;w++,K=m.next())K=S(R,f,w,K.value,g),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?w:K.key),c=i(K,c,w),Z===null?M=K:Z.sibling=K,Z=K);return e&&R.forEach(function(Zp){return t(f,Zp)}),V&&Ht(f,w),M}function ne(f,c,m,g){if(typeof m=="object"&&m!==null&&m.type===Ue&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ke:e:{for(var M=m.key;c!==null;){if(c.key===M){if(M=m.type,M===Ue){if(c.tag===7){a(f,c.sibling),g=n(c,m.props.children),g.return=f,f=g;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Je&&Ua(M)===c.type){a(f,c.sibling),g=n(c,m.props),Vl(g,m),g.return=f,f=g;break e}a(f,c);break}else t(f,c);c=c.sibling}m.type===Ue?(g=Ra(m.props.children,f.mode,g,m.key),g.return=f,f=g):(g=Qn(m.type,m.key,m.props,null,f.mode,g),Vl(g,m),g.return=f,f=g)}return u(f);case Le:e:{for(M=m.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(f,c.sibling),g=n(c,m.children||[]),g.return=f,f=g;break e}else{a(f,c);break}else t(f,c);c=c.sibling}g=Eu(m,f.mode,g),g.return=f,f=g}return u(f);case Je:return m=Ua(m),ne(f,c,m,g)}if(ht(m))return A(f,c,m,g);if(_e(m)){if(M=_e(m),typeof M!="function")throw Error(v(150));return m=M.call(m),O(f,c,m,g)}if(typeof m.then=="function")return ne(f,c,kn(m),g);if(m.$$typeof===qe)return ne(f,c,Xn(f,m),g);Wn(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(f,c.sibling),g=n(c,m),g.return=f,f=g):(a(f,c),g=bu(m,f.mode,g),g.return=f,f=g),u(f)):a(f,c)}return function(f,c,m,g){try{Xl=0;var M=ne(f,c,m,g);return rl=null,M}catch(R){if(R===sl||R===Zn)throw R;var Z=et(29,R,null,f.mode);return Z.lanes=g,Z.return=f,Z}finally{}}}var Na=Ac(!0),Dc=Ac(!1),aa=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(W&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=_n(e),cc(e,null,a),t}return Jn(e,l,t,a),_n(e)}function Zl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hr(e,a)}}function Nu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bu=!1;function Kl(){if(Bu){var e=ul;if(e!==null)throw e}}function kl(e,t,a,l){Bu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==u&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=r))}if(i!==null){var b=n.baseState;u=0,h=d=r=null,s=i;do{var p=s.lane&-536870913,S=p!==s.lane;if(S?(G&p)===p:(l&p)===p){p!==0&&p===il&&(Bu=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var A=e,O=s;p=t;var ne=a;switch(O.tag){case 1:if(A=O.payload,typeof A=="function"){b=A.call(ne,b,p);break e}b=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=O.payload,p=typeof A=="function"?A.call(ne,b,p):A,p==null)break e;b=U({},b,p);break e;case 2:aa=!0}}p=s.callback,p!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[p]:S.push(p))}else S={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=S,r=b):h=h.next=S,u|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;S=s,s=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);h===null&&(r=b),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),ca|=u,e.lanes=u,e.memoizedState=b}}function jc(e,t){if(typeof e!="function")throw Error(v(191,e));e.call(t)}function Rc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jc(a[e],t)}var cl=o(null),Fn=o(0);function Mc(e,t){e=Vt,x(Fn,e),x(cl,t),Vt=e|t.baseLanes}function Lu(){x(Fn,Vt),x(cl,cl.current)}function wu(){Vt=Fn.current,E(cl),E(Fn)}var tt=o(null),pt=null;function ia(e){var t=e.alternate;x(Se,Se.current&1),x(tt,e),pt===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(pt=e)}function Ju(e){x(Se,Se.current),x(tt,e),pt===null&&(pt=e)}function qc(e){e.tag===22?(x(Se,Se.current),x(tt,e),pt===null&&(pt=e)):ua()}function ua(){x(Se,Se.current),x(tt,tt.current)}function at(e){E(tt),pt===e&&(pt=null),E(Se)}var Se=o(0);function Pn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vs(a)||Zs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,L=null,ae=null,ge=null,In=!1,ol=!1,Ba=!1,$n=0,Wl=0,fl=null,Bd=0;function me(){throw Error(v(321))}function _u(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Qu(e,t,a,l,n,i){return Lt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?po:as,Ba=!1,i=a(l,n),Ba=!1,ol&&(i=zc(t,a,l,n)),Oc(e),i}function Oc(e){y.H=Il;var t=ae!==null&&ae.next!==null;if(Lt=0,ge=ae=L=null,In=!1,Wl=0,fl=null,t)throw Error(v(300));e===null||be||(e=e.dependencies,e!==null&&Yn(e)&&(be=!0))}function zc(e,t,a,l){L=e;var n=0;do{if(ol&&(fl=null),Wl=0,ol=!1,25<=n)throw Error(v(301));if(n+=1,ge=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=vo,i=t(a,l)}while(ol);return i}function Ld(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Fl(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(L.flags|=1024),t}function Gu(){var e=$n!==0;return $n=0,e}function Yu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xu(e){if(In){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}In=!1}Lt=0,ge=ae=L=null,ol=!1,Wl=$n=0,fl=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?L.memoizedState=ge=e:ge=ge.next=e,ge}function he(){if(ae===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ge===null?L.memoizedState:ge.next;if(t!==null)ge=t,ae=e;else{if(e===null)throw L.alternate===null?Error(v(467)):Error(v(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ge===null?L.memoizedState=ge=e:ge=ge.next=e}return ge}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(e){var t=Wl;return Wl+=1,fl===null&&(fl=[]),e=Tc(fl,e,t),t=L,(ge===null?t.memoizedState:ge.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?po:as),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fl(e);if(e.$$typeof===qe)return je(e)}throw Error(v(438,String(e)))}function Vu(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=L.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=_a;return t.index++,a}function wt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=he();return Zu(t,ae,e)}function Zu(e,t,a){var l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,r=null,d=t,h=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(G&b)===b:(Lt&b)===b){var p=d.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===il&&(h=!0);else if((Lt&p)===p){d=d.next,p===il&&(h=!0);continue}else b={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=b,u=i):r=r.next=b,L.lanes|=p,ca|=p;b=d.action,Ba&&a(i,b),i=d.hasEagerState?d.eagerState:a(i,b)}else p={lane:b,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=p,u=i):r=r.next=p,L.lanes|=b,ca|=b;d=d.next}while(d!==null&&d!==t);if(r===null?u=i:r.next=s,!$e(i,e.memoizedState)&&(be=!0,h&&(a=ul,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ku(e){var t=he(),a=t.queue;if(a===null)throw Error(v(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);$e(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Uc(e,t,a){var l=L,n=he(),i=V;if(i){if(a===void 0)throw Error(v(407));a=a()}else a=t();var u=!$e((ae||n).memoizedState,a);if(u&&(n.memoizedState=a,be=!0),n=n.queue,Fu(Bc.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},Nc.bind(null,l,n,a,t),null),ue===null)throw Error(v(349));i||(Lt&127)!==0||Hc(l,t,a)}return a}function Hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=ei(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Nc(e,t,a,l){t.value=a,t.getSnapshot=l,Lc(t)&&wc(e)}function Bc(e,t,a){return a(function(){Lc(t)&&wc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function wc(e){var t=ja(e,2);t!==null&&Ke(t,e,2)}function ku(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),Ba){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:e},t}function Jc(e,t,a,l){return e.baseState=a,Zu(e,ae,typeof l=="function"?l:wt)}function wd(e,t,a,l,n){if(ii(e))throw Error(v(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};y.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,_c(t,i)):(i.next=a.next,t.pending=a.next=i)}}function _c(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=y.T,u={};y.T=u;try{var s=a(n,l),r=y.S;r!==null&&r(u,s),Qc(e,t,s)}catch(d){Wu(e,t,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),y.T=i}}else try{i=a(n,l),Qc(e,t,i)}catch(d){Wu(e,t,d)}}function Qc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Gc(e,t,l)},function(l){return Wu(e,t,l)}):Gc(e,t,a)}function Gc(e,t,a){t.status="fulfilled",t.value=a,Yc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_c(e,a)))}function Wu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Yc(t),t=t.next;while(t!==l)}e.action=null}function Yc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xc(e,t){return t}function Vc(e,t){if(V){var a=ue.formState;if(a!==null){e:{var l=L;if(V){if(se){t:{for(var n=se,i=dt;n.nodeType!==8;){if(!i){n=null;break t}if(n=vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){se=vt(n.nextSibling),l=n.data==="F!";break e}}ea(l)}l=!1}l&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},a.queue=l,a=oo.bind(null,L,l),l.dispatch=a,l=ku(!1),i=ts.bind(null,L,!1,l.queue),l=Ne(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=wd.bind(null,L,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Zc(e){var t=he();return Kc(t,ae,e)}function Kc(e,t,a){if(t=Zu(e,t,Xc)[0],e=ai(wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fl(t)}catch(u){throw u===sl?Zn:u}else l=t;t=he();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,ml(9,{destroy:void 0},Jd.bind(null,n,a),null)),[l,i,e]}function Jd(e,t){e.action=t}function kc(e){var t=he(),a=ae;if(a!==null)return Kc(t,a,e);he(),t=t.memoizedState,a=he();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=L.updateQueue,t===null&&(t=ei(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Wc(){return he().memoizedState}function li(e,t,a,l){var n=Ne();L.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function ni(e,t,a,l){var n=he();l=l===void 0?null:l;var i=n.memoizedState.inst;ae!==null&&l!==null&&_u(l,ae.memoizedState.deps)?n.memoizedState=ml(t,i,a,l):(L.flags|=e,n.memoizedState=ml(1|t,i,a,l))}function Fc(e,t){li(8390656,8,e,t)}function Fu(e,t){ni(2048,8,e,t)}function _d(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ei(),L.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Pc(e){var t=he().memoizedState;return _d({ref:t,nextImpl:e}),function(){if((W&2)!==0)throw Error(v(440));return t.impl.apply(void 0,arguments)}}function Ic(e,t){return ni(4,2,e,t)}function $c(e,t){return ni(4,4,e,t)}function eo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function to(e,t,a){a=a!=null?a.concat([e]):null,ni(4,4,eo.bind(null,t,e),a)}function Pu(){}function ao(e,t){var a=he();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&_u(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function lo(e,t){var a=he();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&_u(t,l[1]))return l[0];if(l=e(),Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l}function Iu(e,t,a){return a===void 0||(Lt&1073741824)!==0&&(G&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),L.lanes|=e,ca|=e,a)}function no(e,t,a,l){return $e(a,t)?a:cl.current!==null?(e=Iu(e,a,l),$e(e,t)||(be=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(G&261930)===0?(be=!0,e.memoizedState=a):(e=uf(),L.lanes|=e,ca|=e,t)}function io(e,t,a,l,n){var i=C.p;C.p=i!==0&&8>i?i:8;var u=y.T,s={};y.T=s,ts(e,!1,t,a);try{var r=n(),d=y.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var h=Nd(r,l);Pl(e,t,h,it(e))}else Pl(e,t,l,it(e))}catch(b){Pl(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{C.p=i,u!==null&&s.types!==null&&(u.types=s.types),y.T=u}}function Qd(){}function $u(e,t,a,l){if(e.tag!==5)throw Error(v(476));var n=uo(e).queue;io(e,n,t,H,a===null?Qd:function(){return so(e),a(l)})}function uo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function so(e){var t=uo(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},it())}function es(){return je(vn)}function ro(){return he().memoizedState}function co(){return he().memoizedState}function Gd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=la(a);var l=na(t,e,a);l!==null&&(Ke(l,t,a),Zl(l,t,a)),t={cache:Mu()},e.payload=t;return}t=t.return}}function Yd(e,t,a){var l=it();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?fo(t,a):(a=yu(e,t,a,l),a!==null&&(Ke(a,e,l),mo(a,t,l)))}function oo(e,t,a){var l=it();Pl(e,t,a,l)}function Pl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))fo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,$e(s,u))return Jn(e,t,n,0),ue===null&&wn(),!1}catch{}finally{}if(a=yu(e,t,n,l),a!==null)return Ke(a,e,l),mo(a,t,l),!0}return!1}function ts(e,t,a,l){if(l={lane:2,revertLane:Us(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(v(479))}else t=yu(e,a,l,2),t!==null&&Ke(t,e,2)}function ii(e){var t=e.alternate;return e===L||t!==null&&t===L}function fo(e,t){ol=In=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hr(e,a)}}var Il={readContext:je,use:ti,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};Il.useEffectEvent=me;var po={readContext:je,use:ti,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Fc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,eo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var l=e();if(Ba){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ne();if(a!==void 0){var n=a(t);if(Ba){Wt(!0);try{a(t)}finally{Wt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Yd.bind(null,L,e),[l.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=ku(e);var t=e.queue,a=oo.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ne();return Iu(a,e,t)},useTransition:function(){var e=ku(!1);return e=io.bind(null,L,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=L,n=Ne();if(V){if(a===void 0)throw Error(v(407));a=a()}else{if(a=t(),ue===null)throw Error(v(349));(G&127)!==0||Hc(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Fc(Bc.bind(null,l,i,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},Nc.bind(null,l,i,a,t),null),a},useId:function(){var e=Ne(),t=ue.identifierPrefix;if(V){var a=At,l=xt;a=(l&~(1<<32-Ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$n++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:es,useFormState:Vc,useActionState:Vc,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ts.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vu,useCacheRefresh:function(){return Ne().memoizedState=Gd.bind(null,L)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(v(440));return a.impl.apply(void 0,arguments)}}},as={readContext:je,use:ti,useCallback:ao,useContext:je,useEffect:Fu,useImperativeHandle:to,useInsertionEffect:Ic,useLayoutEffect:$c,useMemo:lo,useReducer:ai,useRef:Wc,useState:function(){return ai(wt)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=he();return no(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(wt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Uc,useId:ro,useHostTransitionStatus:es,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var a=he();return Jc(a,ae,e,t)},useMemoCache:Vu,useCacheRefresh:co};as.useEffectEvent=Pc;var vo={readContext:je,use:ti,useCallback:ao,useContext:je,useEffect:Fu,useImperativeHandle:to,useInsertionEffect:Ic,useLayoutEffect:$c,useMemo:lo,useReducer:Ku,useRef:Wc,useState:function(){return Ku(wt)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=he();return ae===null?Iu(a,e,t):no(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ku(wt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:Fl(e),t]},useSyncExternalStore:Uc,useId:ro,useHostTransitionStatus:es,useFormState:kc,useActionState:kc,useOptimistic:function(e,t){var a=he();return ae!==null?Jc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:co};vo.useEffectEvent=Pc;function ls(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:U({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ns={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ke(t,e,l),Zl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=it(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(Ke(t,e,l),Zl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(Ke(t,e,a),Zl(t,e,a))}};function So(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!wl(a,l)||!wl(n,i):!0}function ho(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function La(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=U({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function yo(e){Ln(e)}function go(e){console.error(e)}function bo(e){Ln(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Eo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function is(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function To(e){return e=la(e),e.tag=3,e}function Co(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Eo(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Eo(t,a,l),typeof n!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Xd(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&nl(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?yi():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Kn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),qs(e,l,n)),!1;case 22:return a.flags|=65536,l===Kn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),qs(e,l,n)),!1}throw Error(v(435,a.tag))}return qs(e,l,n),yi(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==xu&&(e=Error(v(422),{cause:l}),Ql(ot(e,a)))):(l!==xu&&(t=Error(v(423),{cause:l}),Ql(ot(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ot(l,a),n=is(e.stateNode,l,n),Nu(e,n),de!==4&&(de=2)),!1;var i=Error(v(520),{cause:l});if(i=ot(i,a),sn===null?sn=[i]:sn.push(i),de!==4&&(de=2),t===null)return!0;l=ot(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=is(a.stateNode,l,e),Nu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=To(n),Co(n,e,a,l),Nu(a,n),!1}a=a.return}while(a!==null);return!1}var us=Error(v(461)),be=!1;function Re(e,t,a,l){t.child=e===null?Dc(t,null,a,l):Na(t,e.child,a,l)}function xo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var s in l)s!=="ref"&&(u[s]=l[s])}else u=l;return Oa(t),l=Qu(e,t,a,u,i,n),s=Gu(),e!==null&&!be?(Yu(e,t,n),Jt(e,t,n)):(V&&s&&Tu(t),t.flags|=1,Re(e,t,l,n),t.child)}function Ao(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!gu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Do(e,t,i,l,n)):(e=Qn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ps(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(u,l)&&e.ref===t.ref)return Jt(e,t,n)}return t.flags|=1,e=Ut(i,l),e.ref=t.ref,e.return=t,t.child=e}function Do(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(wl(i,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=i,ps(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,Jt(e,t,n)}return ss(e,t,a,l,n)}function jo(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Ro(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vn(t,i!==null?i.cachePool:null),i!==null?Mc(t,i):Lu(),qc(t);else return l=t.lanes=536870912,Ro(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Vn(t,i.cachePool),Mc(t,i),ua(),t.memoizedState=null):(e!==null&&Vn(t,null),Lu(),ua());return Re(e,t,n,a),t.child}function $l(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ro(e,t,a,l,n){var i=Ou();return i=i===null?null:{parent:ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vn(t,null),Lu(),qc(t),e!==null&&nl(e,t,l,!0),t.childLanes=n,null}function si(e,t){return t=ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Mo(e,t,a){return Na(t,e.child,null,a),e=si(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vd(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=si(t,l),t.lanes=536870912,$l(null,e);if(Ju(t),(e=se)?(e=Gf(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:xt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,De=t,se=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return si(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Ju(t),n)if(t.flags&256)t.flags&=-257,t=Mo(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(v(558));else if(be||nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ue,l!==null&&(u=yr(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,ja(e,u),Ke(l,e,u),us;yi(),t=Mo(e,t,a)}else e=i.treeContext,se=vt(u.nextSibling),De=t,V=!0,$t=null,dt=!1,e!==null&&pc(t,e),t=si(t,l),t.flags|=4096;return t}return e=Ut(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ri(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(v(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ss(e,t,a,l,n){return Oa(t),a=Qu(e,t,a,l,void 0,n),l=Gu(),e!==null&&!be?(Yu(e,t,n),Jt(e,t,n)):(V&&l&&Tu(t),t.flags|=1,Re(e,t,a,n),t.child)}function qo(e,t,a,l,n,i){return Oa(t),t.updateQueue=null,a=zc(t,l,a,n),Oc(e),l=Gu(),e!==null&&!be?(Yu(e,t,i),Jt(e,t,i)):(V&&l&&Tu(t),t.flags|=1,Re(e,t,a,i),t.child)}function Oo(e,t,a,l,n){if(Oa(t),t.stateNode===null){var i=el,u=a.contextType;typeof u=="object"&&u!==null&&(i=je(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ns,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Uu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?je(u):el,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ls(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ns.enqueueReplaceState(i,i.state,null),kl(t,l,i,n),Kl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=La(a,s);i.props=r;var d=i.context,h=a.contextType;u=el,typeof h=="object"&&h!==null&&(u=je(h));var b=a.getDerivedStateFromProps;h=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||d!==u)&&ho(t,i,l,u),aa=!1;var p=t.memoizedState;i.state=p,kl(t,l,i,n),Kl(),d=t.memoizedState,s||p!==d||aa?(typeof b=="function"&&(ls(t,a,b,l),d=t.memoizedState),(r=aa||So(t,a,r,l,p,d,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),i.props=l,i.state=d,i.context=u,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Hu(e,t),u=t.memoizedProps,h=La(a,u),i.props=h,b=t.pendingProps,p=i.context,d=a.contextType,r=el,typeof d=="object"&&d!==null&&(r=je(d)),s=a.getDerivedStateFromProps,(d=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||p!==r)&&ho(t,i,l,r),aa=!1,p=t.memoizedState,i.state=p,kl(t,l,i,n),Kl();var S=t.memoizedState;u!==b||p!==S||aa||e!==null&&e.dependencies!==null&&Yn(e.dependencies)?(typeof s=="function"&&(ls(t,a,s,l),S=t.memoizedState),(h=aa||So(t,a,h,l,p,S,r)||e!==null&&e.dependencies!==null&&Yn(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,S,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,S,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=r,l=h):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ri(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Na(t,e.child,null,n),t.child=Na(t,null,a,n)):Re(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Jt(e,t,n),e}function zo(e,t,a,l){return Ma(),t.flags|=256,Re(e,t,a,l),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:bc()}}function os(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function Uo(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(n?ia(t):ua(),(e=se)?(e=Gf(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:It!==null?{id:xt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,De=t,se=null)):e=null,e===null)throw ea(t);return Zs(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ua(),n=t.mode,s=ci({mode:"hidden",children:s},n),l=Ra(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=cs(a),l.childLanes=os(e,u,a),t.memoizedState=rs,$l(null,l)):(ia(t),fs(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=ms(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=l.fallback,n=t.mode,l=ci({mode:"visible",children:l.children},n),s=Ra(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Na(t,e.child,null,a),l=t.child,l.memoizedState=cs(a),l.childLanes=os(e,u,a),t.memoizedState=rs,t=$l(null,l));else if(ia(t),Zs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var d=u.dgst;u=d,l=Error(v(419)),l.stack="",l.digest=u,Ql({value:l,source:null,stack:null}),t=ms(e,t,a)}else if(be||nl(e,t,a,!1),u=(a&e.childLanes)!==0,be||u){if(u=ue,u!==null&&(l=yr(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,ja(e,l),Ke(u,e,l),us;Vs(s)||yi(),t=ms(e,t,a)}else Vs(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,se=vt(s.nextSibling),De=t,V=!0,$t=null,dt=!1,e!==null&&pc(t,e),t=fs(t,l.children),t.flags|=4096);return t}return n?(ua(),s=l.fallback,n=t.mode,r=e.child,d=r.sibling,l=Ut(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=Ut(d,s):(s=Ra(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,$l(null,l),l=t.child,s=e.child.memoizedState,s===null?s=cs(a):(n=s.cachePool,n!==null?(r=ye._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=bc(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=os(e,u,a),t.memoizedState=rs,$l(e.child,l)):(ia(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function fs(e,t){return t=ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ci(e,t){return e=et(22,e,null,t),e.lanes=0,e}function ms(e,t,a){return Na(t,e.child,null,a),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ho(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ju(e.return,t,a)}function ds(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function No(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Se.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,x(Se,u),Re(e,t,l,a),l=V?_l:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ho(e,a,t);else if(e.tag===19)Ho(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Pn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ds(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Pn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ds(t,!0,a,null,i,l);break;case"together":ds(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ps(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yn(e)))}function Zd(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),ta(t,ye,e.memoizedState.cache),Ma();break;case 27:case 5:Al(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ju(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Uo(e,t,a):(ia(t),e=Jt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return No(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(Se,Se.current),l)break;return null;case 22:return t.lanes=0,jo(e,t,a,t.pendingProps);case 24:ta(t,ye,e.memoizedState.cache)}return Jt(e,t,a)}function Bo(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!ps(e,a)&&(t.flags&128)===0)return be=!1,Zd(e,t,a);be=(e.flags&131072)!==0}else be=!1,V&&(t.flags&1048576)!==0&&dc(t,_l,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")gu(e)?(l=La(e,l),t.tag=1,t=Oo(null,t,e,l,a)):(t.tag=0,t=ss(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ut){t.tag=11,t=xo(null,t,e,l,a);break e}else if(n===X){t.tag=14,t=Ao(null,t,e,l,a);break e}}throw t=Mt(e)||e,Error(v(306,t,""))}}return t;case 0:return ss(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=La(l,t.pendingProps),Oo(e,t,l,n,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(v(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Hu(e,t),kl(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ta(t,ye,l),l!==i.cache&&Ru(t,[ye],a,!0),Kl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zo(e,t,l,a);break e}else if(l!==n){n=ot(Error(v(424)),t),Ql(n),t=zo(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=vt(e.firstChild),De=t,V=!0,$t=null,dt=!0,a=Dc(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ma(),l===n){t=Jt(e,t,a);break e}Re(e,t,l,a)}t=t.child}return t;case 26:return ri(e,t),e===null?(a=kf(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,l=Ai(J.current).createElement(a),l[Ae]=t,l[Qe]=e,Me(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Al(t),e===null&&V&&(l=t.stateNode=Vf(t.type,t.pendingProps,J.current),De=t,dt=!0,n=se,pa(t.type)?(Ks=n,se=vt(l.firstChild)):se=n),Re(e,t,t.pendingProps.children,a),ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((n=l=se)&&(l=Tp(l,t.type,t.pendingProps,dt),l!==null?(t.stateNode=l,De=t,se=vt(l.firstChild),dt=!1,n=!0):n=!1),n||ea(t)),Al(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Gs(n,i)?l=null:u!==null&&Gs(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Qu(e,t,Ld,null,null,a),vn._currentValue=n),ri(e,t),Re(e,t,l,a),t.child;case 6:return e===null&&V&&((e=a=se)&&(a=Cp(a,t.pendingProps,dt),a!==null?(t.stateNode=a,De=t,se=null,e=!0):e=!1),e||ea(t)),null;case 13:return Uo(e,t,a);case 4:return He(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Na(t,null,l,a):Re(e,t,l,a),t.child;case 11:return xo(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),Re(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Oa(t),n=je(n),l=l(n),t.flags|=1,Re(e,t,l,a),t.child;case 14:return Ao(e,t,t.type,t.pendingProps,a);case 15:return Do(e,t,t.type,t.pendingProps,a);case 19:return No(e,t,a);case 31:return Vd(e,t,a);case 22:return jo(e,t,a,t.pendingProps);case 24:return Oa(t),l=je(ye),e===null?(n=Ou(),n===null&&(n=ue,i=Mu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Uu(t),ta(t,ye,n)):((e.lanes&a)!==0&&(Hu(e,t),kl(t,null,null,a),Kl()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ye,l)):(l=i.cache,ta(t,ye,l),l!==n.cache&&Ru(t,[ye],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(v(156,t.tag))}function _t(e){e.flags|=4}function vs(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(of())e.flags|=8192;else throw Ha=Kn,zu}else e.flags&=-16777217}function Lo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(of())e.flags|=8192;else throw Ha=Kn,zu}function oi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vr():536870912,e.lanes|=t,Sl|=t)}function en(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Kd(e,t,a){var l=t.pendingProps;switch(Cu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return re(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(ye),ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?_t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Au())),re(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(_t(t),i!==null?(re(t),Lo(t,i)):(re(t),vs(t,n,null,l,a))):i?i!==e.memoizedState?(_t(t),re(t),Lo(t,i)):(re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&_t(t),re(t),vs(t,n,e,l,a)),null;case 27:if(En(t),a=J.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_t(t);else{if(!l){if(t.stateNode===null)throw Error(v(166));return re(t),null}e=D.current,ll(t)?vc(t):(e=Vf(n,l,a),t.stateNode=e,_t(t))}return re(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&_t(t);else{if(!l){if(t.stateNode===null)throw Error(v(166));return re(t),null}if(i=D.current,ll(t))vc(t);else{var u=Ai(J.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Ae]=t,i[Qe]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Me(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_t(t)}}return re(t),vs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&_t(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(v(166));if(e=J.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=De,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Hf(e.nodeValue,a)),e||ea(t,!0)}else e=Ai(e).createTextNode(l),e[Ae]=t,t.stateNode=e}return re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ll(t),a!==null){if(e===null){if(!l)throw Error(v(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(557));e[Ae]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;re(t),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(v(558))}return re(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(v(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n[Ae]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;re(t),n=!1}else n=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),oi(t,t.updateQueue),re(t),null);case 4:return ve(),e===null&&Ls(t.stateNode.containerInfo),re(t),null;case 10:return Bt(t.type),re(t),null;case 19:if(E(Se),l=t.memoizedState,l===null)return re(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)en(l,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Pn(e),i!==null){for(t.flags|=128,en(l,!1),e=i.updateQueue,t.updateQueue=e,oi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)oc(a,e),a=a.sibling;return x(Se,Se.current&1|2),V&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>vi&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304)}else{if(!n)if(e=Pn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,oi(t,e),en(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!V)return re(t),null}else 2*Fe()-l.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,en(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=Se.current,x(Se,n?a&1|2:a&1),V&&Ht(t,l.treeForkCount),e):(re(t),null);case 22:case 23:return at(t),wu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),a=t.updateQueue,a!==null&&oi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&E(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ye),re(t),null;case 25:return null;case 30:return null}throw Error(v(156,t.tag))}function kd(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ye),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(v(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Se),null;case 4:return ve(),null;case 10:return Bt(t.type),null;case 22:case 23:return at(t),wu(),e!==null&&E(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ye),null;case 25:return null;default:return null}}function wo(e,t){switch(Cu(t),t.tag){case 3:Bt(ye),ve();break;case 26:case 27:case 5:En(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(Se);break;case 10:Bt(t.type);break;case 22:case 23:at(t),wu(),e!==null&&E(za);break;case 24:Bt(ye)}}function tn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(s){ee(t,t.return,s)}}function sa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var r=a,d=s;try{d()}catch(h){ee(n,r,h)}}}l=l.next}while(l!==i)}}catch(h){ee(t,t.return,h)}}function Jo(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Rc(t,a)}catch(l){ee(e,e.return,l)}}}function _o(e,t,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ee(e,t,l)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ee(e,t,n)}}function Dt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Qo(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function Ss(e,t,a){try{var l=e.stateNode;Sp(l,e.type,a,t),l[Qe]=t}catch(n){ee(e,e.return,n)}}function Go(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Go(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ys(e,t,a),e=e.sibling;e!==null;)ys(e,t,a),e=e.sibling}function fi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Yo(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Me(t,l,a),t[Ae]=e,t[Qe]=a}catch(i){ee(e,e.return,i)}}var Qt=!1,Ee=!1,gs=!1,Xo=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Wd(e,t){if(e=e.containerInfo,_s=zi,e=tc(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,s=-1,r=-1,d=0,h=0,b=e,p=null;t:for(;;){for(var S;b!==a||n!==0&&b.nodeType!==3||(s=u+n),b!==i||l!==0&&b.nodeType!==3||(r=u+l),b.nodeType===3&&(u+=b.nodeValue.length),(S=b.firstChild)!==null;)p=b,b=S;for(;;){if(b===e)break t;if(p===a&&++d===n&&(s=u),p===i&&++h===l&&(r=u),(S=b.nextSibling)!==null)break;b=p,p=b.parentNode}b=S}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qs={focusedElem:e,selectionRange:a},zi=!1,xe=t;xe!==null;)if(t=xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xe=e;else for(;xe!==null;){switch(t=xe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var A=La(a.type,n);e=l.getSnapshotBeforeUpdate(A,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(O){ee(a,a.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(v(163))}if(e=t.sibling,e!==null){e.return=t.return,xe=e;break}xe=t.return}}function Vo(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Yt(e,a),l&4&&tn(5,a);break;case 1:if(Yt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ee(a,a.return,u)}else{var n=La(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ee(a,a.return,u)}}l&64&&Jo(a),l&512&&an(a,a.return);break;case 3:if(Yt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Rc(e,t)}catch(u){ee(a,a.return,u)}}break;case 27:t===null&&l&4&&Yo(a);case 26:case 5:Yt(e,a),t===null&&l&4&&Qo(a),l&512&&an(a,a.return);break;case 12:Yt(e,a);break;case 31:Yt(e,a),l&4&&ko(e,a);break;case 13:Yt(e,a),l&4&&Wo(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=np.bind(null,a),xp(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Ee,n=Qt;var i=Ee;Qt=l,(Ee=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):Yt(e,a),Qt=n,Ee=i}break;case 30:break;default:Yt(e,a)}}function Zo(e){var t=e.alternate;t!==null&&(e.alternate=null,Zo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Ye=!1;function Gt(e,t,a){for(a=a.child;a!==null;)Ko(e,t,a),a=a.sibling}function Ko(e,t,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:Ee||Dt(a,t),Gt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Dt(a,t);var l=oe,n=Ye;pa(a.type)&&(oe=a.stateNode,Ye=!1),Gt(e,t,a),mn(a.stateNode),oe=l,Ye=n;break;case 5:Ee||Dt(a,t);case 6:if(l=oe,n=Ye,oe=null,Gt(e,t,a),oe=l,Ye=n,oe!==null)if(Ye)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{oe.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:oe!==null&&(Ye?(e=oe,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xl(e)):_f(oe,a.stateNode));break;case 4:l=oe,n=Ye,oe=a.stateNode.containerInfo,Ye=!0,Gt(e,t,a),oe=l,Ye=n;break;case 0:case 11:case 14:case 15:sa(2,a,t),Ee||sa(4,a,t),Gt(e,t,a);break;case 1:Ee||(Dt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_o(a,t,l)),Gt(e,t,a);break;case 21:Gt(e,t,a);break;case 22:Ee=(l=Ee)||a.memoizedState!==null,Gt(e,t,a),Ee=l;break;default:Gt(e,t,a)}}function ko(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xl(e)}catch(a){ee(t,t.return,a)}}}function Wo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xl(e)}catch(a){ee(t,t.return,a)}}function Fd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xo),t;default:throw Error(v(435,e.tag))}}function mi(e,t){var a=Fd(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ip.bind(null,e,l);l.then(n,n)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){oe=s.stateNode,Ye=!1;break e}break;case 5:oe=s.stateNode,Ye=!1;break e;case 3:case 4:oe=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(oe===null)throw Error(v(160));Ko(i,u,n),oe=null,Ye=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fo(t,e),t=t.sibling}var gt=null;function Fo(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ve(e),l&4&&(sa(3,e,e.return),tn(3,e),sa(5,e,e.return));break;case 1:Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=gt;if(Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ml]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Me(i,l,a),i[Ae]=e,Ce(i),l=i;break e;case"link":var u=Pf("link","href",n).get(l+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(l),Me(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Pf("meta","content",n).get(l+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(l),Me(i,l,a),n.head.appendChild(i);break;default:throw Error(v(468,l))}i[Ae]=e,Ce(i),l=i}e.stateNode=l}else If(n,e.type,e.stateNode);else e.stateNode=Ff(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?If(n,e.type,e.stateNode):Ff(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ss(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),a!==null&&l&4&&Ss(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ve(e),l&512&&(Ee||a===null||Dt(a,a.return)),e.flags&32){n=e.stateNode;try{Ka(n,"")}catch(A){ee(e,e.return,A)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Ss(e,n,a!==null?a.memoizedProps:n)),l&1024&&(gs=!0);break;case 6:if(Xe(t,e),Ve(e),l&4){if(e.stateNode===null)throw Error(v(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(A){ee(e,e.return,A)}}break;case 3:if(Ri=null,n=gt,gt=Di(t.containerInfo),Xe(t,e),gt=n,Ve(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(A){ee(e,e.return,A)}gs&&(gs=!1,Po(e));break;case 4:l=gt,gt=Di(e.stateNode.containerInfo),Xe(t,e),Ve(e),gt=l;break;case 12:Xe(t,e),Ve(e);break;case 31:Xe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:Xe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pi=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=Qt,h=Ee;if(Qt=d||n,Ee=h||r,Xe(t,e),Ee=h,Qt=d,Ve(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Qt||Ee||wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var b=r.memoizedProps.style,p=b!=null&&b.hasOwnProperty("display")?b.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(A){ee(r,r.return,A)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(A){ee(r,r.return,A)}}}else if(t.tag===18){if(a===null){r=t;try{var S=r.stateNode;n?Qf(S,!0):Qf(r.stateNode,!1)}catch(A){ee(r,r.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mi(e,a))));break;case 19:Xe(t,e),Ve(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:Xe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Go(l)){a=l;break}l=l.return}if(a==null)throw Error(v(160));switch(a.tag){case 27:var n=a.stateNode,i=hs(e);fi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ka(u,""),a.flags&=-33);var s=hs(e);fi(e,s,u);break;case 3:case 4:var r=a.stateNode.containerInfo,d=hs(e);ys(e,d,r);break;default:throw Error(v(161))}}catch(h){ee(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Po(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Po(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vo(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),wa(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_o(t,t.return,a),wa(t);break;case 27:mn(t.stateNode);case 26:case 5:Dt(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(n,i,a),tn(4,i);break;case 1:if(Xt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){ee(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)jc(r[n],s)}catch(d){ee(l,l.return,d)}}a&&u&64&&Jo(i),an(i,i.return);break;case 27:Yo(i);case 26:case 5:Xt(n,i,a),a&&l===null&&u&4&&Qo(i),an(i,i.return);break;case 12:Xt(n,i,a);break;case 31:Xt(n,i,a),a&&u&4&&ko(n,i);break;case 13:Xt(n,i,a),a&&u&4&&Wo(n,i);break;case 22:i.memoizedState===null&&Xt(n,i,a),an(i,i.return);break;case 30:break;default:Xt(n,i,a)}t=t.sibling}}function bs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Gl(a))}function Es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function bt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Io(e,t,a,l),t=t.sibling}function Io(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,l),n&2048&&tn(9,t);break;case 1:bt(e,t,a,l);break;case 3:bt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(n&2048){bt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ee(t,t.return,r)}}else bt(e,t,a,l);break;case 31:bt(e,t,a,l);break;case 13:bt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,l):ln(e,t):i._visibility&2?bt(e,t,a,l):(i._visibility|=2,dl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bs(u,t);break;case 24:bt(e,t,a,l),n&2048&&Es(t.alternate,t);break;default:bt(e,t,a,l)}}function dl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=a,r=l,d=u.flags;switch(u.tag){case 0:case 11:case 15:dl(i,u,s,r,n),tn(8,u);break;case 23:break;case 22:var h=u.stateNode;u.memoizedState!==null?h._visibility&2?dl(i,u,s,r,n):ln(i,u):(h._visibility|=2,dl(i,u,s,r,n)),n&&d&2048&&bs(u.alternate,u);break;case 24:dl(i,u,s,r,n),n&&d&2048&&Es(u.alternate,u);break;default:dl(i,u,s,r,n)}t=t.sibling}}function ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:ln(a,l),n&2048&&bs(l.alternate,l);break;case 24:ln(a,l),n&2048&&Es(l.alternate,l);break;default:ln(a,l)}t=t.sibling}}var nn=8192;function pl(e,t,a){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)$o(e,t,a),e=e.sibling}function $o(e,t,a){switch(e.tag){case 26:pl(e,t,a),e.flags&nn&&e.memoizedState!==null&&Bp(a,gt,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,a);break;case 3:case 4:var l=gt;gt=Di(e.stateNode.containerInfo),pl(e,t,a),gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=nn,nn=16777216,pl(e,t,a),nn=l):pl(e,t,a));break;default:pl(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,af(l,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&sa(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,di(e)):un(e);break;default:un(e)}}function di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];xe=l,af(l,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,di(t));break;default:di(t)}e=e.sibling}}function af(e,t){for(;xe!==null;){var a=xe;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Gl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,xe=l;else e:for(a=e;xe!==null;){l=xe;var n=l.sibling,i=l.return;if(Zo(l),l===a){xe=null;break e}if(n!==null){n.return=i,xe=n;break e}xe=i}}}var Pd={getCacheForType:function(e){var t=je(ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return je(ye).controller.signal}},Id=typeof WeakMap=="function"?WeakMap:Map,W=0,ue=null,_=null,G=0,$=0,lt=null,ra=!1,vl=!1,Ts=!1,Vt=0,de=0,ca=0,Ja=0,Cs=0,nt=0,Sl=0,sn=null,Ze=null,xs=!1,pi=0,lf=0,vi=1/0,Si=null,oa=null,Te=0,fa=null,hl=null,Zt=0,As=0,Ds=null,nf=null,rn=0,js=null;function it(){return(W&2)!==0&&G!==0?G&-G:y.T!==null?Us():gr()}function uf(){if(nt===0)if((G&536870912)===0||V){var e=xn;xn<<=1,(xn&3932160)===0&&(xn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,a){(e===ue&&($===2||$===9)||e.cancelPendingCommit!==null)&&(yl(e,0),ma(e,G,nt,!1)),Rl(e,a),((W&2)===0||e!==ue)&&(e===ue&&((W&2)===0&&(Ja|=a),de===4&&ma(e,G,nt,!1)),jt(e))}function sf(e,t,a){if((W&6)!==0)throw Error(v(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||jl(e,t),n=l?tp(e,t):Ms(e,t,!0),i=l;do{if(n===0){vl&&!l&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$d(a)){n=Ms(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=sn;var r=s.current.memoizedState.isDehydrated;if(r&&(yl(s,u).flags|=256),u=Ms(s,u,!1),u!==2){if(Ts&&!r){s.errorRecoveryDisabledLanes|=i,Ja|=i,n=4;break e}i=Ze,Ze=n,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){yl(e,0),ma(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(v(345));case 4:if((t&4194048)!==t)break;case 6:ma(l,t,nt,!ra);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(v(329))}if((t&62914560)===t&&(n=pi+300-Fe(),10<n)){if(ma(l,t,nt,!ra),Dn(l,0,!0)!==0)break e;Zt=t,l.timeoutHandle=wf(rf.bind(null,l,a,Ze,Si,xs,t,nt,Ja,Sl,ra,i,"Throttled",-0,0),n);break e}rf(l,a,Ze,Si,xs,t,nt,Ja,Sl,ra,i,null,-0,0)}}break}while(!0);jt(e)}function rf(e,t,a,l,n,i,u,s,r,d,h,b,p,S){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},$o(t,i,b);var A=(i&62914560)===i?pi-Fe():(i&4194048)===i?lf-Fe():0;if(A=Lp(b,A),A!==null){Zt=i,e.cancelPendingCommit=A(Sf.bind(null,e,t,i,a,l,n,u,s,r,h,b,null,p,S)),ma(e,i,u,!d);return}}Sf(e,t,i,a,l,n,u,s,r)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!$e(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,l){t&=~Cs,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-Ie(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Sr(e,a,t)}function hi(){return(W&6)===0?(cn(0),!1):!0}function Rs(){if(_!==null){if($===0)var e=_.return;else e=_,Nt=qa=null,Xu(e),rl=null,Xl=0,e=_;for(;e!==null;)wo(e.alternate,e),e=e.return;_=null}}function yl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,Rs(),ue=e,_=a=Ut(e.current,null),G=t,$=0,lt=null,ra=!1,vl=jl(e,t),Ts=!1,Sl=nt=Cs=Ja=ca=de=0,Ze=sn=null,xs=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ie(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,wn(),a}function cf(e,t){L=null,y.H=Il,t===sl||t===Zn?(t=Cc(),$=3):t===zu?(t=Cc(),$=4):$=t===us?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,lt=t,_===null&&(de=1,ui(e,ot(t,e.current)))}function of(){var e=tt.current;return e===null?!0:(G&4194048)===G?pt===null:(G&62914560)===G||(G&536870912)!==0?e===pt:!1}function ff(){var e=y.H;return y.H=Il,e===null?Il:e}function mf(){var e=y.A;return y.A=Pd,e}function yi(){de=4,ra||(G&4194048)!==G&&tt.current!==null||(vl=!0),(ca&134217727)===0&&(Ja&134217727)===0||ue===null||ma(ue,G,nt,!1)}function Ms(e,t,a){var l=W;W|=2;var n=ff(),i=mf();(ue!==e||G!==t)&&(Si=null,yl(e,t)),t=!1;var u=de;e:do try{if($!==0&&_!==null){var s=_,r=lt;switch($){case 8:Rs(),u=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,lt=null,gl(e,s,r,d),a&&vl){u=0;break e}break;default:d=$,$=0,lt=null,gl(e,s,r,d)}}ep(),u=de;break}catch(h){cf(e,h)}while(!0);return t&&e.shellSuspendCounter++,Nt=qa=null,W=l,y.H=n,y.A=i,_===null&&(ue=null,G=0,wn()),u}function ep(){for(;_!==null;)df(_)}function tp(e,t){var a=W;W|=2;var l=ff(),n=mf();ue!==e||G!==t?(Si=null,vi=Fe()+500,yl(e,t)):vl=jl(e,t);e:do try{if($!==0&&_!==null){t=_;var i=lt;t:switch($){case 1:$=0,lt=null,gl(e,t,i,1);break;case 2:case 9:if(Ec(i)){$=0,lt=null,pf(t);break}t=function(){$!==2&&$!==9||ue!==e||($=7),jt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ec(i)?($=0,lt=null,pf(t)):($=0,lt=null,gl(e,t,i,7));break;case 5:var u=null;switch(_.tag){case 26:u=_.memoizedState;case 5:case 27:var s=_;if(u?$f(u):s.stateNode.complete){$=0,lt=null;var r=s.sibling;if(r!==null)_=r;else{var d=s.return;d!==null?(_=d,gi(d)):_=null}break t}}$=0,lt=null,gl(e,t,i,5);break;case 6:$=0,lt=null,gl(e,t,i,6);break;case 8:Rs(),de=6;break e;default:throw Error(v(462))}}ap();break}catch(h){cf(e,h)}while(!0);return Nt=qa=null,y.H=l,y.A=n,W=a,_!==null?0:(ue=null,G=0,wn(),de)}function ap(){for(;_!==null&&!Am();)df(_)}function df(e){var t=Bo(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?gi(e):_=t}function pf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qo(a,t,t.pendingProps,t.type,void 0,G);break;case 11:t=qo(a,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Xu(t);default:wo(a,t),t=_=oc(t,Vt),t=Bo(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?gi(e):_=t}function gl(e,t,a,l){Nt=qa=null,Xu(t),rl=null,Xl=0;var n=t.return;try{if(Xd(e,n,t,a,G)){de=1,ui(e,ot(a,e.current)),_=null;return}}catch(i){if(n!==null)throw _=n,i;de=1,ui(e,ot(a,e.current)),_=null;return}t.flags&32768?(V||l===1?e=!0:vl||(G&536870912)!==0?e=!1:(ra=e=!0,(l===2||l===9||l===3||l===6)&&(l=tt.current,l!==null&&l.tag===13&&(l.flags|=16384))),vf(t,e)):gi(t)}function gi(e){var t=e;do{if((t.flags&32768)!==0){vf(t,ra);return}e=t.return;var a=Kd(t.alternate,t,Vt);if(a!==null){_=a;return}if(t=t.sibling,t!==null){_=t;return}_=t=e}while(t!==null);de===0&&(de=5)}function vf(e,t){do{var a=kd(e.alternate,e);if(a!==null){a.flags&=32767,_=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){_=e;return}_=e=a}while(e!==null);de=6,_=null}function Sf(e,t,a,l,n,i,u,s,r){e.cancelPendingCommit=null;do bi();while(Te!==0);if((W&6)!==0)throw Error(v(327));if(t!==null){if(t===e.current)throw Error(v(177));if(i=t.lanes|t.childLanes,i|=hu,Nm(e,a,i,u,s,r),e===ue&&(_=ue=null,G=0),hl=t,fa=e,Zt=a,As=i,Ds=n,nf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,up(Tn,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=C.p,C.p=2,u=W,W|=4;try{Wd(e,t,a)}finally{W=u,C.p=n,y.T=l}}Te=1,hf(),yf(),gf()}}function hf(){if(Te===1){Te=0;var e=fa,t=hl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=C.p;C.p=2;var n=W;W|=4;try{Fo(t,e);var i=Qs,u=tc(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&ec(s.ownerDocument.documentElement,s)){if(r!==null&&mu(s)){var d=r.start,h=r.end;if(h===void 0&&(h=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(h,s.value.length);else{var b=s.ownerDocument||document,p=b&&b.defaultView||window;if(p.getSelection){var S=p.getSelection(),A=s.textContent.length,O=Math.min(r.start,A),ne=r.end===void 0?O:Math.min(r.end,A);!S.extend&&O>ne&&(u=ne,ne=O,O=u);var f=$r(s,O),c=$r(s,ne);if(f&&c&&(S.rangeCount!==1||S.anchorNode!==f.node||S.anchorOffset!==f.offset||S.focusNode!==c.node||S.focusOffset!==c.offset)){var m=b.createRange();m.setStart(f.node,f.offset),S.removeAllRanges(),O>ne?(S.addRange(m),S.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),S.addRange(m))}}}}for(b=[],S=s;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<b.length;s++){var g=b[s];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}zi=!!_s,Qs=_s=null}finally{W=n,C.p=l,y.T=a}}e.current=t,Te=2}}function yf(){if(Te===2){Te=0;var e=fa,t=hl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=C.p;C.p=2;var n=W;W|=4;try{Vo(e,t.alternate,t)}finally{W=n,C.p=l,y.T=a}}Te=3}}function gf(){if(Te===4||Te===3){Te=0,Dm();var e=fa,t=hl,a=Zt,l=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,hl=fa=null,bf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(oa=null),Ki(a),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=y.T,n=C.p,C.p=2,y.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var s=l[u];i(s.value,{componentStack:s.stack})}}finally{y.T=t,C.p=n}}(Zt&3)!==0&&bi(),jt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===js?rn++:(rn=0,js=e):rn=0,cn(0)}}function bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function bi(){return hf(),yf(),gf(),Ef()}function Ef(){if(Te!==5)return!1;var e=fa,t=As;As=0;var a=Ki(Zt),l=y.T,n=C.p;try{C.p=32>a?32:a,y.T=null,a=Ds,Ds=null;var i=fa,u=Zt;if(Te=0,hl=fa=null,Zt=0,(W&6)!==0)throw Error(v(331));var s=W;if(W|=4,tf(i.current),Io(i,i.current,u,a),W=s,cn(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{C.p=n,y.T=l,bf(e,t)}}function Tf(e,t,a){t=ot(a,t),t=is(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Rl(e,2),jt(e))}function ee(e,t,a){if(e.tag===3)Tf(e,e,a);else for(;t!==null;){if(t.tag===3){Tf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(oa===null||!oa.has(l))){e=ot(a,e),a=To(2),l=na(t,a,2),l!==null&&(Co(a,l,t,e),Rl(l,2),jt(l));break}}t=t.return}}function qs(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Id;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ts=!0,n.add(a),e=lp.bind(null,e,t,a),t.then(e,e))}function lp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(G&a)===a&&(de===4||de===3&&(G&62914560)===G&&300>Fe()-pi?(W&2)===0&&yl(e,0):Cs|=a,Sl===G&&(Sl=0)),jt(e)}function Cf(e,t){t===0&&(t=vr()),e=ja(e,t),e!==null&&(Rl(e,t),jt(e))}function np(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(e,a)}function ip(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(v(314))}l!==null&&l.delete(t),Cf(e,a)}function up(e,t){return Yi(e,t)}var Ei=null,bl=null,Os=!1,Ti=!1,zs=!1,da=0;function jt(e){e!==bl&&e.next===null&&(bl===null?Ei=bl=e:bl=bl.next=e),Ti=!0,Os||(Os=!0,rp())}function cn(e,t){if(!zs&&Ti){zs=!0;do for(var a=!1,l=Ei;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-Ie(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,jf(l,i))}else i=G,i=Dn(l,l===ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||jl(l,i)||(a=!0,jf(l,i));l=l.next}while(a);zs=!1}}function sp(){xf()}function xf(){Ti=Os=!1;var e=0;da!==0&&yp()&&(e=da);for(var t=Fe(),a=null,l=Ei;l!==null;){var n=l.next,i=Af(l,t);i===0?(l.next=null,a===null?Ei=n:a.next=n,n===null&&(bl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=n}Te!==0&&Te!==5||cn(e),da!==0&&(da=0)}function Af(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Ie(i),s=1<<u,r=n[u];r===-1?((s&a)===0||(s&l)!==0)&&(n[u]=Hm(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=ue,a=G,a=Dn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Xi(l),Ki(a)){case 2:case 8:a=dr;break;case 32:a=Tn;break;case 268435456:a=pr;break;default:a=Tn}return l=Df.bind(null,e),a=Yi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Xi(l),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var l=G;return l=Dn(e,e===ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sf(e,l,t),Af(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Df.bind(null,e):null)}function jf(e,t){if(bi())return null;sf(e,t,!0)}function rp(){bp(function(){(W&6)!==0?Yi(mr,sp):xf()})}function Us(){if(da===0){var e=il;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),da=e}return da}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qn(""+e)}function Mf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Rf((n[Qe]||null).action),u=l.submitter;u&&(t=(t=u[Qe]||null)?Rf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Hn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(da!==0){var r=u?Mf(n,u):new FormData(n);$u(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?Mf(n,u):new FormData(n),$u(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Hs=0;Hs<Su.length;Hs++){var Ns=Su[Hs],op=Ns.toLowerCase(),fp=Ns[0].toUpperCase()+Ns.slice(1);yt(op,"on"+fp)}yt(nc,"onAnimationEnd"),yt(ic,"onAnimationIteration"),yt(uc,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(jd,"onTransitionRun"),yt(Rd,"onTransitionStart"),yt(Md,"onTransitionCancel"),yt(sc,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));function qf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var s=l[u],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){Ln(h)}n.currentTarget=null,i=r}else for(u=0;u<l.length;u++){if(s=l[u],r=s.instance,d=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=d;try{i(n)}catch(h){Ln(h)}n.currentTarget=null,i=r}}}}function Q(e,t){var a=t[ki];a===void 0&&(a=t[ki]=new Set);var l=e+"__bubble";a.has(l)||(Of(t,e,2,!1),a.add(l))}function Bs(e,t,a){var l=0;t&&(l|=4),Of(a,e,l,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[Ci]){e[Ci]=!0,Tr.forEach(function(a){a!=="selectionchange"&&(mp.has(a)||Bs(a,!1,e),Bs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Bs("selectionchange",!1,t))}}function Of(e,t,a,l){switch(um(t)){case 2:var n=_p;break;case 8:n=Qp;break;default:n=Is}a=n.bind(null,t,a,e),n=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ws(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var s=l.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ga(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=i=u;continue e}s=s.parentNode}}l=l.return}Hr(function(){var d=i,h=tu(a),b=[];e:{var p=rc.get(e);if(p!==void 0){var S=Hn,A=e;switch(e){case"keypress":if(zn(a)===0)break e;case"keydown":case"keyup":S=id;break;case"focusin":A="focus",S=su;break;case"focusout":A="blur",S=su;break;case"beforeblur":case"afterblur":S=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=rd;break;case nc:case ic:case uc:S=Fm;break;case sc:S=od;break;case"scroll":case"scrollend":S=Vm;break;case"wheel":S=md;break;case"copy":case"cut":case"paste":S=Im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Jr;break;case"toggle":case"beforetoggle":S=pd}var O=(t&4)!==0,ne=!O&&(e==="scroll"||e==="scrollend"),f=O?p!==null?p+"Capture":null:p;O=[];for(var c=d,m;c!==null;){var g=c;if(m=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||m===null||f===null||(g=Ol(c,f),g!=null&&O.push(fn(c,g,m))),ne)break;c=c.return}0<O.length&&(p=new S(p,A,null,a,h),b.push({event:p,listeners:O}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",p&&a!==eu&&(A=a.relatedTarget||a.fromElement)&&(Ga(A)||A[Qa]))break e;if((S||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,S?(A=a.relatedTarget||a.toElement,S=d,A=A?Ga(A):null,A!==null&&(ne=k(A),O=A.tag,A!==ne||O!==5&&O!==27&&O!==6)&&(A=null)):(S=null,A=d),S!==A)){if(O=Lr,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(O=Jr,g="onPointerLeave",f="onPointerEnter",c="pointer"),ne=S==null?p:ql(S),m=A==null?p:ql(A),p=new O(g,c+"leave",S,a,h),p.target=ne,p.relatedTarget=m,g=null,Ga(h)===d&&(O=new O(f,c+"enter",A,a,h),O.target=m,O.relatedTarget=ne,g=O),ne=g,S&&A)t:{for(O=dp,f=S,c=A,m=0,g=f;g;g=O(g))m++;g=0;for(var M=c;M;M=O(M))g++;for(;0<m-g;)f=O(f),m--;for(;0<g-m;)c=O(c),g--;for(;m--;){if(f===c||c!==null&&f===c.alternate){O=f;break t}f=O(f),c=O(c)}O=null}else O=null;S!==null&&zf(b,p,S,O,!1),A!==null&&ne!==null&&zf(b,ne,A,O,!0)}}e:{if(p=d?ql(d):window,S=p.nodeName&&p.nodeName.toLowerCase(),S==="select"||S==="input"&&p.type==="file")var Z=Kr;else if(Vr(p))if(kr)Z=xd;else{Z=Td;var R=Ed}else S=p.nodeName,!S||S.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&$i(d.elementType)&&(Z=Kr):Z=Cd;if(Z&&(Z=Z(e,d))){Zr(b,Z,a,h);break e}R&&R(e,p,d),e==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&Ii(p,"number",p.value)}switch(R=d?ql(d):window,e){case"focusin":(Vr(R)||R.contentEditable==="true")&&(Pa=R,du=d,Jl=null);break;case"focusout":Jl=du=Pa=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,ac(b,a,h);break;case"selectionchange":if(Dd)break;case"keydown":case"keyup":ac(b,a,h)}var w;if(cu)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Fa?Yr(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(_r&&a.locale!=="ko"&&(Fa||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Fa&&(w=Nr()):(Pt=h,nu="value"in Pt?Pt.value:Pt.textContent,Fa=!0)),R=xi(d,Y),0<R.length&&(Y=new wr(Y,e,null,a,h),b.push({event:Y,listeners:R}),w?Y.data=w:(w=Xr(a),w!==null&&(Y.data=w)))),(w=Sd?hd(e,a):yd(e,a))&&(Y=xi(d,"onBeforeInput"),0<Y.length&&(R=new wr("onBeforeInput","beforeinput",null,a,h),b.push({event:R,listeners:Y}),R.data=w)),cp(b,e,d,a,h)}qf(b,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ol(e,a),n!=null&&l.unshift(fn(e,n,i)),n=Ol(e,t),n!=null&&l.push(fn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function dp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var s=a,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=Ol(a,i),d!=null&&u.unshift(fn(a,d,r))):n||(d=Ol(a,i),d!=null&&u.push(fn(a,d,r)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var pp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(vp,"")}function Hf(e,t){return t=Uf(t),Uf(e)===t}function le(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":Rn(e,"class",l);break;case"tabIndex":Rn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,l);break;case"style":zr(e,l,i);break;case"data":if(t!=="object"){Rn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=qn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&le(e,t,"name",n.name,n,null),le(e,t,"formEncType",n.formEncType,n,null),le(e,t,"formMethod",n.formMethod,n,null),le(e,t,"formTarget",n.formTarget,n,null)):(le(e,t,"encType",n.encType,n,null),le(e,t,"method",n.method,n,null),le(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=qn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"onScroll":l!=null&&Q("scroll",e);break;case"onScrollEnd":l!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(v(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Q("beforetoggle",e),Q("toggle",e),jn(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":jn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ym.get(a)||a,jn(e,a,l))}}function Js(e,t,a,l,n,i){switch(a){case"style":zr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(v(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&Q("scroll",e);break;case"onScrollEnd":l!=null&&Q("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Qe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):jn(e,a,l)}}}function Me(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:le(e,t,i,u,a,null)}}n&&le(e,t,"srcSet",a.srcSet,a,null),l&&le(e,t,"src",a.src,a,null);return;case"input":Q("invalid",e);var s=i=u=n=null,r=null,d=null;for(l in a)if(a.hasOwnProperty(l)){var h=a[l];if(h!=null)switch(l){case"name":n=h;break;case"type":u=h;break;case"checked":r=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(v(137,t));break;default:le(e,t,l,h,a,null)}}Rr(e,i,s,r,d,u,n,!1);return;case"select":Q("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":l=s;default:le(e,t,n,s,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Za(e,!!l,t,!1):a!=null&&Za(e,!!l,a,!0);return;case"textarea":Q("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(v(91));break;default:le(e,t,u,s,a,null)}qr(e,l,n,i);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,t,r,l,a,null)}return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(l=0;l<on.length;l++)Q(on[l],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:le(e,t,d,l,a,null)}return;default:if($i(t)){for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!==void 0&&Js(e,t,h,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&le(e,t,s,l,a,null))}function Sp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,r=null,d=null,h=null;for(S in a){var b=a[S];if(a.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":r=b;default:l.hasOwnProperty(S)||le(e,t,S,null,l,b)}}for(var p in l){var S=l[p];if(b=a[p],l.hasOwnProperty(p)&&(S!=null||b!=null))switch(p){case"type":i=S;break;case"name":n=S;break;case"checked":d=S;break;case"defaultChecked":h=S;break;case"value":u=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(v(137,t));break;default:S!==b&&le(e,t,p,S,l,b)}}Pi(e,u,s,r,d,h,i,n);return;case"select":S=u=s=p=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":S=r;default:l.hasOwnProperty(i)||le(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&le(e,t,n,i,l,r)}t=s,a=u,l=S,p!=null?Za(e,!!a,p,!1):!!l!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":S=p=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:le(e,t,s,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(v(91));break;default:n!==i&&le(e,t,u,n,l,i)}Mr(e,p,S);return;case"option":for(var A in a)if(p=a[A],a.hasOwnProperty(A)&&p!=null&&!l.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:le(e,t,A,null,l,p)}for(r in l)if(p=l[r],S=a[r],l.hasOwnProperty(r)&&p!==S&&(p!=null||S!=null))switch(r){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:le(e,t,r,p,l,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in a)p=a[O],a.hasOwnProperty(O)&&p!=null&&!l.hasOwnProperty(O)&&le(e,t,O,null,l,p);for(d in l)if(p=l[d],S=a[d],l.hasOwnProperty(d)&&p!==S&&(p!=null||S!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(v(137,t));break;default:le(e,t,d,p,l,S)}return;default:if($i(t)){for(var ne in a)p=a[ne],a.hasOwnProperty(ne)&&p!==void 0&&!l.hasOwnProperty(ne)&&Js(e,t,ne,void 0,l,p);for(h in l)p=l[h],S=a[h],!l.hasOwnProperty(h)||p===S||p===void 0&&S===void 0||Js(e,t,h,p,l,S);return}}for(var f in a)p=a[f],a.hasOwnProperty(f)&&p!=null&&!l.hasOwnProperty(f)&&le(e,t,f,null,l,p);for(b in l)p=l[b],S=a[b],!l.hasOwnProperty(b)||p===S||p==null&&S==null||le(e,t,b,p,l,S)}function Nf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Nf(u)){for(u=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],d=r.startTime;if(d>s)break;var h=r.transferSize,b=r.initiatorType;h&&Nf(b)&&(r=r.responseEnd,u+=h*(r<s?1:(s-d)/(r-d)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _s=null,Qs=null;function Ai(e){return e.nodeType===9?e:e.ownerDocument}function Bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=null;function yp(){var e=window.event;return e&&e.type==="popstate"?e===Ys?!1:(Ys=e,!0):(Ys=null,!1)}var wf=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(Ep)}:wf;function Ep(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function _f(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),xl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Ml]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(e.ownerDocument.body);a=n}while(a);xl(t)}function Qf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xs(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Tp(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Cp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function Gf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Vs(e){return e.data==="$?"||e.data==="$~"}function Zs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ks=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Ai(a),e){case"html":if(e=t.documentElement,!e)throw Error(v(452));return e;case"head":if(e=t.head,!e)throw Error(v(453));return e;case"body":if(e=t.body,!e)throw Error(v(454));return e;default:throw Error(v(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var St=new Map,Zf=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=C.d;C.d={f:Ap,r:Dp,D:jp,C:Rp,L:Mp,m:qp,X:zp,S:Op,M:Up};function Ap(){var e=Kt.f(),t=hi();return e||t}function Dp(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?so(t):Kt.r(e)}var El=typeof document>"u"?null:document;function Kf(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Zf.has(n)||(Zf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Me(t,"link",e),Ce(t),l.head.appendChild(t)))}}function jp(e){Kt.D(e),Kf("dns-prefetch",e,null)}function Rp(e,t){Kt.C(e,t),Kf("preconnect",e,t)}function Mp(e,t,a){Kt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+rt(a.imageSizes)+'"]')):n+='[href="'+rt(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=Cl(e)}St.has(i)||(e=U({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),St.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(dn(i))||t==="script"&&l.querySelector(pn(i))||(t=l.createElement("link"),Me(t,"link",e),Ce(t),l.head.appendChild(t)))}}function qp(e,t){Kt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Cl(e)}if(!St.has(i)&&(e=U({rel:"modulepreload",href:e},t),St.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pn(i)))return}l=a.createElement("link"),Me(l,"link",e),Ce(l),a.head.appendChild(l)}}}function Op(e,t,a){Kt.S(e,t,a);var l=El;if(l&&e){var n=Xa(l).hoistableStyles,i=Tl(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=l.querySelector(dn(i)))s.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},a),(a=St.get(i))&&ks(e,a);var r=u=l.createElement("link");Ce(r),Me(r,"link",e),r._p=new Promise(function(d,h){r.onload=d,r.onerror=h}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ji(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function zp(e,t){Kt.X(e,t);var a=El;if(a&&e){var l=Xa(a).hoistableScripts,n=Cl(e),i=l.get(n);i||(i=a.querySelector(pn(n)),i||(e=U({src:e,async:!0},t),(t=St.get(n))&&Ws(e,t),i=a.createElement("script"),Ce(i),Me(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Up(e,t){Kt.M(e,t);var a=El;if(a&&e){var l=Xa(a).hoistableScripts,n=Cl(e),i=l.get(n);i||(i=a.querySelector(pn(n)),i||(e=U({src:e,async:!0,type:"module"},t),(t=St.get(n))&&Ws(e,t),i=a.createElement("script"),Ce(i),Me(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function kf(e,t,a,l){var n=(n=J.current)?Di(n):null;if(!n)throw Error(v(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Xa(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Xa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),St.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},St.set(e,a),i||Hp(n,e,a,u.state))),t&&l===null)throw Error(v(528,""));return u}if(t&&l!==null)throw Error(v(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cl(a),a=Xa(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,e))}}function Tl(e){return'href="'+rt(e)+'"'}function dn(e){return'link[rel="stylesheet"]['+e+"]"}function Wf(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Me(t,"link",a),Ce(t),e.head.appendChild(t))}function Cl(e){return'[src="'+rt(e)+'"]'}function pn(e){return"script[async]"+e}function Ff(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Me(l,"style",n),ji(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(dn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=Wf(a),(n=St.get(n))&&ks(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Me(i,"link",l),t.state.loading|=4,ji(i,a.precedence,e),t.instance=i;case"script":return i=Cl(a.src),(n=e.querySelector(pn(i)))?(t.instance=n,Ce(n),n):(l=a,(n=St.get(i))&&(l=U({},a),Ws(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Me(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(v(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ji(l,a.precedence,e));return t.instance}function ji(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var s=l[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function Pf(e,t,a){if(Ri===null){var l=new Map,n=Ri=new Map;n.set(a,l)}else n=Ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ml]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=l.get(u);s?s.push(i):l.set(u,[i])}}return l}function If(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Np(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),i=t.querySelector(dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ce(i);return}i=t.ownerDocument||t,l=Wf(l),(n=St.get(n))&&ks(l,n),i=i.createElement("link"),Ce(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Me(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Mi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fs=0;function Lp(e,t){return e.stylesheets&&e.count===0&&Oi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fs===0&&(Fs=62500*hp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Oi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(wp,e),qi=null,Mi.call(e))}function wp(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var l=a.get(null);else{a=new Map,qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Mi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var vn={$$typeof:qe,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Jp(e,t,a,l,n,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function em(e,t,a,l,n,i,u,s,r,d,h,b){return e=new Jp(e,t,a,u,r,d,h,b,s),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=Mu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Uu(i),e}function tm(e){return e?(e=el,e):el}function am(e,t,a,l,n,i){n=tm(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(Ke(a,e,t),Zl(a,e,t))}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ps(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=ja(e,67108864);t!==null&&Ke(t,e,67108864),Ps(e,67108864)}}function im(e){if(e.tag===13||e.tag===31){var t=it();t=Zi(t);var a=ja(e,t);a!==null&&Ke(a,e,t),Ps(e,t)}}var zi=!0;function _p(e,t,a,l){var n=y.T;y.T=null;var i=C.p;try{C.p=2,Is(e,t,a,l)}finally{C.p=i,y.T=n}}function Qp(e,t,a,l){var n=y.T;y.T=null;var i=C.p;try{C.p=8,Is(e,t,a,l)}finally{C.p=i,y.T=n}}function Is(e,t,a,l){if(zi){var n=$s(l);if(n===null)ws(e,t,l,Ui,a),sm(e,l);else if(Yp(n,e,t,a,l))l.stopPropagation();else if(sm(e,l),t&4&&-1<Gp.indexOf(e)){for(;n!==null;){var i=Ya(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ta(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-Ie(u);s.entanglements[1]|=r,u&=~r}jt(i),(W&6)===0&&(vi=Fe()+500,cn(0))}}break;case 31:case 13:s=ja(i,2),s!==null&&Ke(s,i,2),hi(),Ps(i,2)}if(i=$s(l),i===null&&ws(e,t,l,Ui,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ws(e,t,l,null,a)}}function $s(e){return e=tu(e),er(e)}var Ui=null;function er(e){if(Ui=null,e=Ga(e),e!==null){var t=k(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=pe(t),e!==null)return e;e=null}else if(a===31){if(e=ze(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jm()){case mr:return 2;case dr:return 8;case Tn:case Rm:return 32;case pr:return 268435456;default:return 32}default:return 32}}var tr=!1,va=null,Sa=null,ha=null,Sn=new Map,hn=new Map,ya=[],Gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sm(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function yn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ya(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Yp(e,t,a,l,n){switch(t){case"focusin":return va=yn(va,e,t,a,l,n),!0;case"dragenter":return Sa=yn(Sa,e,t,a,l,n),!0;case"mouseover":return ha=yn(ha,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Sn.set(i,yn(Sn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,hn.set(i,yn(hn.get(i)||null,e,t,a,l,n)),!0}return!1}function rm(e){var t=Ga(e.target);if(t!==null){var a=k(t);if(a!==null){if(t=a.tag,t===13){if(t=pe(a),t!==null){e.blockedOn=t,br(e.priority,function(){im(a)});return}}else if(t===31){if(t=ze(a),t!==null){e.blockedOn=t,br(e.priority,function(){im(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$s(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);eu=l,a.target.dispatchEvent(l),eu=null}else return t=Ya(a),t!==null&&nm(t),e.blockedOn=a,!1;t.shift()}return!0}function cm(e,t,a){Hi(e)&&a.delete(t)}function Xp(){tr=!1,va!==null&&Hi(va)&&(va=null),Sa!==null&&Hi(Sa)&&(Sa=null),ha!==null&&Hi(ha)&&(ha=null),Sn.forEach(cm),hn.forEach(cm)}function Ni(e,t){e.blockedOn===t&&(e.blockedOn=null,tr||(tr=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,Xp)))}var Bi=null;function om(e){Bi!==e&&(Bi=e,j.unstable_scheduleCallback(j.unstable_NormalPriority,function(){Bi===e&&(Bi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(er(l||a)===null)continue;break}var i=Ya(a);i!==null&&(e.splice(t,3),t-=3,$u(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function xl(e){function t(r){return Ni(r,e)}va!==null&&Ni(va,e),Sa!==null&&Ni(Sa,e),ha!==null&&Ni(ha,e),Sn.forEach(t),hn.forEach(t);for(var a=0;a<ya.length;a++){var l=ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)rm(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Qe]||null;if(typeof i=="function")u||om(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Qe]||null)s=u.formAction;else if(er(n)!==null)continue}else s=u.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),om(a)}}}function fm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ar(e){this._internalRoot=e}Li.prototype.render=ar.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));var a=t.current,l=it();am(a,l,e,t,null,null)},Li.prototype.unmount=ar.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),hi(),t[Qa]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=gr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&rm(e)}};var mm=fe.version;if(mm!=="19.2.4")throw Error(v(527,mm,"19.2.4"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=T(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Vp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{Dl=wi.inject(Vp),Pe=wi}catch{}}return bn.createRoot=function(e,t){if(!z(e))throw Error(v(299));var a=!1,l="",n=yo,i=go,u=bo;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=em(e,1,!1,null,null,a,l,null,n,i,u,fm),e[Qa]=t.current,Ls(e),new ar(t)},bn.hydrateRoot=function(e,t,a){if(!z(e))throw Error(v(299));var l=!1,n="",i=yo,u=go,s=bo,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=em(e,1,!0,t,a??null,l,n,r,i,u,s,fm),t.context=tm(null),a=t.current,l=it(),l=Zi(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Rl(t,a),jt(t),e[Qa]=t.current,Ls(e),new Li(t)},bn.version="19.2.4",bn}var Tm;function tv(){if(Tm)return ir.exports;Tm=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(fe){console.error(fe)}}return j(),ir.exports=ev(),ir.exports}var av=tv();function lv(){const[j,fe]=Cm.useState(null),F=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
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
`},{id:28,question:"28. ",answer:"",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],v=z=>{fe(j===z?null:z)};return Be.jsxs("div",{className:"app-container",children:[Be.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),Be.jsx("div",{className:"questions-container",children:F.map(z=>Be.jsxs("div",{className:"question-item",children:[Be.jsx("button",{className:"question-button $ {activeId === q.id ? 'active' : ''}",onClick:()=>v(z.id),children:z.question}),j===z.id&&Be.jsxs("div",{className:"answer-container",children:[Be.jsxs("div",{className:"answer",children:[Be.jsx("h3",{children:"Answer:"}),Be.jsx("p",{children:z.answer})]}),z.codeExample&&Be.jsxs("div",{className:"code-example",children:[Be.jsx("h3",{children:"Code Example:"}),Be.jsx("pre",{children:Be.jsx("code",{children:z.codeExample})})]})]})]},z.id))})]})}av.createRoot(document.getElementById("root")).render(Be.jsx(Cm.StrictMode,{children:Be.jsx(lv,{})}));
