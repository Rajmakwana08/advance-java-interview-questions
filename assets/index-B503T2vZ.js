(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))p(j);new MutationObserver(j=>{for(const W of j)if(W.type==="childList")for(const ve of W.addedNodes)ve.tagName==="LINK"&&ve.rel==="modulepreload"&&p(ve)}).observe(document,{childList:!0,subtree:!0});function k(j){const W={};return j.integrity&&(W.integrity=j.integrity),j.referrerPolicy&&(W.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?W.credentials="include":j.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function p(j){if(j.ep)return;j.ep=!0;const W=k(j);fetch(j.href,W)}})();var as={exports:{}},gn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Kv(){if(md)return gn;md=1;var x=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function k(p,j,W){var ve=null;if(W!==void 0&&(ve=""+W),j.key!==void 0&&(ve=""+j.key),"key"in j){W={};for(var je in j)je!=="key"&&(W[je]=j[je])}else W=j;return j=W.ref,{$$typeof:x,type:p,key:ve,ref:j!==void 0?j:null,props:W}}return gn.Fragment=fe,gn.jsx=k,gn.jsxs=k,gn}var vd;function Wv(){return vd||(vd=1,as.exports=Kv()),as.exports}var _e=Wv(),ns={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function Fv(){if(pd)return N;pd=1;var x=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ve=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),re=Symbol.iterator;function We(o){return o===null||typeof o!="object"?null:(o=re&&o[re]||o["@@iterator"],typeof o=="function"?o:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,Mt={};function Fe(o,E,D){this.props=o,this.context=E,this.refs=Mt,this.updater=D||Be}Fe.prototype.isReactComponent={},Fe.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},Fe.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Wt(){}Wt.prototype=Fe.prototype;function ze(o,E,D){this.props=o,this.context=E,this.refs=Mt,this.updater=D||Be}var it=ze.prototype=new Wt;it.constructor=ze,He(it,Fe.prototype),it.isPureReactComponent=!0;var Et=Array.isArray;function Le(){}var X={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Tt(o,E,D){var R=D.ref;return{$$typeof:x,type:o,key:E,ref:R!==void 0?R:null,props:D}}function Ql(o,E){return Tt(o.type,E,o.props)}function Ct(o){return typeof o=="object"&&o!==null&&o.$$typeof===x}function Qe(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(D){return E[D]})}var bl=/\/+/g;function qt(o,E){return typeof o=="object"&&o!==null&&o.key!=null?Qe(""+o.key):E.toString(36)}function ht(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Le,Le):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function y(o,E,D,R,_){var w=typeof o;(w==="undefined"||w==="boolean")&&(o=null);var $=!1;if(o===null)$=!0;else switch(w){case"bigint":case"string":case"number":$=!0;break;case"object":switch(o.$$typeof){case x:case fe:$=!0;break;case I:return $=o._init,y($(o._payload),E,D,R,_)}}if($)return _=_(o),$=R===""?"."+qt(o,0):R,Et(_)?(D="",$!=null&&(D=$.replace(bl,"$&/")+"/"),y(_,E,D,"",function(Aa){return Aa})):_!=null&&(Ct(_)&&(_=Ql(_,D+(_.key==null||o&&o.key===_.key?"":(""+_.key).replace(bl,"$&/")+"/")+$)),E.push(_)),1;$=0;var Ue=R===""?".":R+":";if(Et(o))for(var pe=0;pe<o.length;pe++)R=o[pe],w=Ue+qt(R,pe),$+=y(R,E,D,w,_);else if(pe=We(o),typeof pe=="function")for(o=pe.call(o),pe=0;!(R=o.next()).done;)R=R.value,w=Ue+qt(R,pe++),$+=y(R,E,D,w,_);else if(w==="object"){if(typeof o.then=="function")return y(ht(o),E,D,R,_);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return $}function C(o,E,D){if(o==null)return o;var R=[],_=0;return y(o,R,"","",function(w){return E.call(D,w,_++)}),R}function U(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(D){(o._status===0||o._status===-1)&&(o._status=1,o._result=D)},function(D){(o._status===0||o._status===-1)&&(o._status=2,o._result=D)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var te=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ue={map:C,forEach:function(o,E,D){C(o,function(){E.apply(this,arguments)},D)},count:function(o){var E=0;return C(o,function(){E++}),E},toArray:function(o){return C(o,function(E){return E})||[]},only:function(o){if(!Ct(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return N.Activity=H,N.Children=ue,N.Component=Fe,N.Fragment=k,N.Profiler=j,N.PureComponent=ze,N.StrictMode=p,N.Suspense=z,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,N.__COMPILER_RUNTIME={__proto__:null,c:function(o){return X.H.useMemoCache(o)}},N.cache=function(o){return function(){return o.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(o,E,D){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var R=He({},o.props),_=o.key;if(E!=null)for(w in E.key!==void 0&&(_=""+E.key),E)!we.call(E,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&E.ref===void 0||(R[w]=E[w]);var w=arguments.length-2;if(w===1)R.children=D;else if(1<w){for(var $=Array(w),Ue=0;Ue<w;Ue++)$[Ue]=arguments[Ue+2];R.children=$}return Tt(o.type,_,R)},N.createContext=function(o){return o={$$typeof:ve,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:W,_context:o},o},N.createElement=function(o,E,D){var R,_={},w=null;if(E!=null)for(R in E.key!==void 0&&(w=""+E.key),E)we.call(E,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(_[R]=E[R]);var $=arguments.length-2;if($===1)_.children=D;else if(1<$){for(var Ue=Array($),pe=0;pe<$;pe++)Ue[pe]=arguments[pe+2];_.children=Ue}if(o&&o.defaultProps)for(R in $=o.defaultProps,$)_[R]===void 0&&(_[R]=$[R]);return Tt(o,w,_)},N.createRef=function(){return{current:null}},N.forwardRef=function(o){return{$$typeof:je,render:o}},N.isValidElement=Ct,N.lazy=function(o){return{$$typeof:I,_payload:{_status:-1,_result:o},_init:U}},N.memo=function(o,E){return{$$typeof:T,type:o,compare:E===void 0?null:E}},N.startTransition=function(o){var E=X.T,D={};X.T=D;try{var R=o(),_=X.S;_!==null&&_(D,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Le,te)}catch(w){te(w)}finally{E!==null&&D.types!==null&&(E.types=D.types),X.T=E}},N.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},N.use=function(o){return X.H.use(o)},N.useActionState=function(o,E,D){return X.H.useActionState(o,E,D)},N.useCallback=function(o,E){return X.H.useCallback(o,E)},N.useContext=function(o){return X.H.useContext(o)},N.useDebugValue=function(){},N.useDeferredValue=function(o,E){return X.H.useDeferredValue(o,E)},N.useEffect=function(o,E){return X.H.useEffect(o,E)},N.useEffectEvent=function(o){return X.H.useEffectEvent(o)},N.useId=function(){return X.H.useId()},N.useImperativeHandle=function(o,E,D){return X.H.useImperativeHandle(o,E,D)},N.useInsertionEffect=function(o,E){return X.H.useInsertionEffect(o,E)},N.useLayoutEffect=function(o,E){return X.H.useLayoutEffect(o,E)},N.useMemo=function(o,E){return X.H.useMemo(o,E)},N.useOptimistic=function(o,E){return X.H.useOptimistic(o,E)},N.useReducer=function(o,E,D){return X.H.useReducer(o,E,D)},N.useRef=function(o){return X.H.useRef(o)},N.useState=function(o){return X.H.useState(o)},N.useSyncExternalStore=function(o,E,D){return X.H.useSyncExternalStore(o,E,D)},N.useTransition=function(){return X.H.useTransition()},N.version="19.2.4",N}var Sd;function rs(){return Sd||(Sd=1,ns.exports=Fv()),ns.exports}var Cd=rs(),us={exports:{}},bn={},is={exports:{}},cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function kv(){return hd||(hd=1,(function(x){function fe(y,C){var U=y.length;y.push(C);e:for(;0<U;){var te=U-1>>>1,ue=y[te];if(0<j(ue,C))y[te]=C,y[U]=ue,U=te;else break e}}function k(y){return y.length===0?null:y[0]}function p(y){if(y.length===0)return null;var C=y[0],U=y.pop();if(U!==C){y[0]=U;e:for(var te=0,ue=y.length,o=ue>>>1;te<o;){var E=2*(te+1)-1,D=y[E],R=E+1,_=y[R];if(0>j(D,U))R<ue&&0>j(_,D)?(y[te]=_,y[R]=U,te=R):(y[te]=D,y[E]=U,te=E);else if(R<ue&&0>j(_,U))y[te]=_,y[R]=U,te=R;else break e}}return C}function j(y,C){var U=y.sortIndex-C.sortIndex;return U!==0?U:y.id-C.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;x.unstable_now=function(){return W.now()}}else{var ve=Date,je=ve.now();x.unstable_now=function(){return ve.now()-je}}var z=[],T=[],I=1,H=null,re=3,We=!1,Be=!1,He=!1,Mt=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;function it(y){for(var C=k(T);C!==null;){if(C.callback===null)p(T);else if(C.startTime<=y)p(T),C.sortIndex=C.expirationTime,fe(z,C);else break;C=k(T)}}function Et(y){if(He=!1,it(y),!Be)if(k(z)!==null)Be=!0,Le||(Le=!0,Qe());else{var C=k(T);C!==null&&ht(Et,C.startTime-y)}}var Le=!1,X=-1,we=5,Tt=-1;function Ql(){return Mt?!0:!(x.unstable_now()-Tt<we)}function Ct(){if(Mt=!1,Le){var y=x.unstable_now();Tt=y;var C=!0;try{e:{Be=!1,He&&(He=!1,Wt(X),X=-1),We=!0;var U=re;try{t:{for(it(y),H=k(z);H!==null&&!(H.expirationTime>y&&Ql());){var te=H.callback;if(typeof te=="function"){H.callback=null,re=H.priorityLevel;var ue=te(H.expirationTime<=y);if(y=x.unstable_now(),typeof ue=="function"){H.callback=ue,it(y),C=!0;break t}H===k(z)&&p(z),it(y)}else p(z);H=k(z)}if(H!==null)C=!0;else{var o=k(T);o!==null&&ht(Et,o.startTime-y),C=!1}}break e}finally{H=null,re=U,We=!1}C=void 0}}finally{C?Qe():Le=!1}}}var Qe;if(typeof ze=="function")Qe=function(){ze(Ct)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,qt=bl.port2;bl.port1.onmessage=Ct,Qe=function(){qt.postMessage(null)}}else Qe=function(){Fe(Ct,0)};function ht(y,C){X=Fe(function(){y(x.unstable_now())},C)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(y){y.callback=null},x.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<y?Math.floor(1e3/y):5},x.unstable_getCurrentPriorityLevel=function(){return re},x.unstable_next=function(y){switch(re){case 1:case 2:case 3:var C=3;break;default:C=re}var U=re;re=C;try{return y()}finally{re=U}},x.unstable_requestPaint=function(){Mt=!0},x.unstable_runWithPriority=function(y,C){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var U=re;re=y;try{return C()}finally{re=U}},x.unstable_scheduleCallback=function(y,C,U){var te=x.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,y){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=U+ue,y={id:I++,callback:C,priorityLevel:y,startTime:U,expirationTime:ue,sortIndex:-1},U>te?(y.sortIndex=U,fe(T,y),k(z)===null&&y===k(T)&&(He?(Wt(X),X=-1):He=!0,ht(Et,U-te))):(y.sortIndex=ue,fe(z,y),Be||We||(Be=!0,Le||(Le=!0,Qe()))),y},x.unstable_shouldYield=Ql,x.unstable_wrapCallback=function(y){var C=re;return function(){var U=re;re=C;try{return y.apply(this,arguments)}finally{re=U}}}})(cs)),cs}var yd;function Iv(){return yd||(yd=1,is.exports=kv()),is.exports}var ss={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function $v(){if(gd)return Oe;gd=1;var x=rs();function fe(z){var T="https://react.dev/errors/"+z;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)T+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+z+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(){}var p={d:{f:k,r:function(){throw Error(fe(522))},D:k,C:k,L:k,m:k,X:k,S:k,M:k},p:0,findDOMNode:null},j=Symbol.for("react.portal");function W(z,T,I){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:H==null?null:""+H,children:z,containerInfo:T,implementation:I}}var ve=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function je(z,T){if(z==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Oe.createPortal=function(z,T){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(fe(299));return W(z,T,null,I)},Oe.flushSync=function(z){var T=ve.T,I=p.p;try{if(ve.T=null,p.p=2,z)return z()}finally{ve.T=T,p.p=I,p.d.f()}},Oe.preconnect=function(z,T){typeof z=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,p.d.C(z,T))},Oe.prefetchDNS=function(z){typeof z=="string"&&p.d.D(z)},Oe.preinit=function(z,T){if(typeof z=="string"&&T&&typeof T.as=="string"){var I=T.as,H=je(I,T.crossOrigin),re=typeof T.integrity=="string"?T.integrity:void 0,We=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;I==="style"?p.d.S(z,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:H,integrity:re,fetchPriority:We}):I==="script"&&p.d.X(z,{crossOrigin:H,integrity:re,fetchPriority:We,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Oe.preinitModule=function(z,T){if(typeof z=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var I=je(T.as,T.crossOrigin);p.d.M(z,{crossOrigin:I,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&p.d.M(z)},Oe.preload=function(z,T){if(typeof z=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var I=T.as,H=je(I,T.crossOrigin);p.d.L(z,I,{crossOrigin:H,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Oe.preloadModule=function(z,T){if(typeof z=="string")if(T){var I=je(T.as,T.crossOrigin);p.d.m(z,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:I,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else p.d.m(z)},Oe.requestFormReset=function(z){p.d.r(z)},Oe.unstable_batchedUpdates=function(z,T){return z(T)},Oe.useFormState=function(z,T,I){return ve.H.useFormState(z,T,I)},Oe.useFormStatus=function(){return ve.H.useHostTransitionStatus()},Oe.version="19.2.4",Oe}var bd;function Pv(){if(bd)return ss.exports;bd=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(fe){console.error(fe)}}return x(),ss.exports=$v(),ss.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ep(){if(Ed)return bn;Ed=1;var x=Iv(),fe=rs(),k=Pv();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function W(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ve(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function je(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(W(e)!==e)throw Error(p(188))}function T(e){var t=e.alternate;if(!t){if(t=W(e),t===null)throw Error(p(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return z(n),e;if(u===a)return z(n),t;u=u.sibling}throw Error(p(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(p(189))}}if(l.alternate!==a)throw Error(p(190))}if(l.tag!==3)throw Error(p(188));return l.stateNode.current===l?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,re=Symbol.for("react.element"),We=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Mt=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),ze=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Ql=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var bl=Symbol.for("react.client.reference");function qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case Fe:return"Profiler";case Mt:return"StrictMode";case Et:return"Suspense";case Le:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case ze:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case it:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:qt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return qt(e(t))}catch{}}return null}var ht=Array.isArray,y=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},te=[],ue=-1;function o(e){return{current:e}}function E(e){0>ue||(e.current=te[ue],te[ue]=null,ue--)}function D(e,t){ue++,te[ue]=e.current,e.current=t}var R=o(null),_=o(null),w=o(null),$=o(null);function Ue(e,t){switch(D(w,t),D(_,e),D(R,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_f(t),e=Bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(R),D(R,e)}function pe(){E(R),E(_),E(w)}function Aa(e){e.memoizedState!==null&&D($,e);var t=R.current,l=Bf(t,e.type);t!==l&&(D(_,e),D(R,l))}function En(e){_.current===e&&(E(R),E(_)),$.current===e&&(E($),pn._currentValue=U)}var wu,os;function El(e){if(wu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);wu=t&&t[1]||"",os=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wu+e+os}var Qu=!1;function Gu(e,t){if(!e||Qu)return"";Qu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(S){var v=S}Reflect.construct(e,[],b)}else{try{b.call()}catch(S){v=S}e.call(b.prototype)}}else{try{throw Error()}catch(S){v=S}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(S){if(S&&v&&typeof S.stack=="string")return[S.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var h=`
`+s[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=n);break}}}finally{Qu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Dd(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Gu(e.type,!1);case 11:return Gu(e.type.render,!1);case 1:return Gu(e.type,!0);case 31:return El("Activity");default:return""}}function fs(e){try{var t="",l=null;do t+=Dd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Yu=Object.prototype.hasOwnProperty,Ju=x.unstable_scheduleCallback,Xu=x.unstable_cancelCallback,Ad=x.unstable_shouldYield,xd=x.unstable_requestPaint,ke=x.unstable_now,Rd=x.unstable_getCurrentPriorityLevel,ds=x.unstable_ImmediatePriority,ms=x.unstable_UserBlockingPriority,Tn=x.unstable_NormalPriority,Md=x.unstable_LowPriority,vs=x.unstable_IdlePriority,qd=x.log,zd=x.unstable_setDisableYieldValue,xa=null,Ie=null;function Ft(e){if(typeof qd=="function"&&zd(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(xa,e)}catch{}}var $e=Math.clz32?Math.clz32:Hd,Od=Math.log,jd=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(Od(e)/jd|0)|0}var Cn=256,Dn=262144,An=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Tl(a):(i&=c,i!==0?n=Tl(i):l||(l=c&~e,l!==0&&(n=Tl(l))))):(c=a&~u,c!==0?n=Tl(c):i!==0?n=Tl(i):l||(l=a&~e,l!==0&&(n=Tl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function Ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ud(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var e=An;return An<<=1,(An&62914560)===0&&(An=4194304),e}function Zu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nd(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(l=i&~l;0<l;){var h=31-$e(l),b=1<<h;c[h]=0,s[h]=-1;var v=m[h];if(v!==null)for(m[h]=null,h=0;h<v.length;h++){var S=v[h];S!==null&&(S.lane&=-536870913)}l&=~b}a!==0&&Ss(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Ss(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function hs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-$e(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function ys(e,t){var l=t&-t;return l=(l&42)!==0?1:Vu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Vu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ku(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gs(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:id(e.type))}function bs(e,t){var l=C.p;try{return C.p=e,t()}finally{C.p=l}}var kt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+kt,Ge="__reactProps$"+kt,Gl="__reactContainer$"+kt,Wu="__reactEvents$"+kt,_d="__reactListeners$"+kt,Bd="__reactHandles$"+kt,Es="__reactResources$"+kt,qa="__reactMarker$"+kt;function Fu(e){delete e[Ae],delete e[Ge],delete e[Wu],delete e[_d],delete e[Bd]}function Yl(e){var t=e[Ae];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Gl]||l[Ae]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Xf(e);e!==null;){if(l=e[Ae])return l;e=Xf(e)}return t}e=l,l=e.parentNode}return null}function Jl(e){if(e=e[Ae]||e[Gl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Xl(e){var t=e[Es];return t||(t=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[qa]=!0}var Ts=new Set,Cs={};function Cl(e,t){Zl(e,t),Zl(e+"Capture",t)}function Zl(e,t){for(Cs[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ds={},As={};function wd(e){return Yu.call(As,e)?!0:Yu.call(Ds,e)?!1:Ld.test(e)?As[e]=!0:(Ds[e]=!0,!1)}function Rn(e,t,l){if(wd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Mn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function zt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=xs(e)?"checked":"value";e._valueTracker=Qd(e,t,""+e[t])}}function Rs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=xs(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gd=/[\n"\\]/g;function st(e){return e.replace(Gd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Iu(e,t,l,a,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?$u(e,i,ct(t)):l!=null?$u(e,i,ct(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ct(c):e.removeAttribute("name")}function Ms(e,t,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ku(e);return}l=l!=null?""+ct(l):"",t=t!=null?""+ct(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ku(e)}function $u(e,t,l){t==="number"&&qn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Vl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ct(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function qs(e,t,l){if(t!=null&&(t=""+ct(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ct(l):""}function zs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(p(92));if(ht(a)){if(1<a.length)throw Error(p(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ct(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ku(e)}function Kl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Yd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Os(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Yd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function js(e,t,l){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Os(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&Os(e,u,t[u])}function Pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zn(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var ei=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Fl=null;function Hs(e){var t=Jl(e);if(t&&(e=t.stateNode)){var l=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(Iu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ge]||null;if(!n)throw Error(p(90));Iu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Rs(a)}break e;case"textarea":qs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Vl(e,!!l.multiple,t,!1)}}}var li=!1;function Us(e,t,l){if(li)return e(t,l);li=!0;try{var a=e(t);return a}finally{if(li=!1,(Wl!==null||Fl!==null)&&(hu(),Wl&&(t=Wl,e=Fl,Fl=Wl=null,Hs(t),e)))for(t=0;t<e.length;t++)Hs(e[t])}}function Oa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ge]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(p(231,t,typeof l));return l}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=!1;if(jt)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){ai=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{ai=!1}var It=null,ni=null,On=null;function Ns(){if(On)return On;var e,t=ni,l=t.length,a,n="value"in It?It.value:It.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return On=n.slice(e,1<a?1-a:void 0)}function jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function _s(){return!1}function Ye(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hn:_s,this.isPropagationStopped=_s,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Ye(Dl),Ha=H({},Dl,{view:0,detail:0}),Zd=Ye(Ha),ui,ii,Ua,Nn=H({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(ui=e.screenX-Ua.screenX,ii=e.screenY-Ua.screenY):ii=ui=0,Ua=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Bs=Ye(Nn),Vd=H({},Nn,{dataTransfer:0}),Kd=Ye(Vd),Wd=H({},Ha,{relatedTarget:0}),ci=Ye(Wd),Fd=H({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Ye(Fd),Id=H({},Dl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Ye(Id),Pd=H({},Dl,{data:0}),Ls=Ye(Pd),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function si(){return am}var nm=H({},Ha,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Ye(nm),im=H({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=Ye(im),cm=H({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),sm=Ye(cm),rm=H({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=Ye(rm),fm=H({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ye(fm),mm=H({},Dl,{newState:0,oldState:0}),vm=Ye(mm),pm=[9,13,27,32],ri=jt&&"CompositionEvent"in window,Na=null;jt&&"documentMode"in document&&(Na=document.documentMode);var Sm=jt&&"TextEvent"in window&&!Na,Qs=jt&&(!ri||Na&&8<Na&&11>=Na),Gs=" ",Ys=!1;function Js(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function hm(e,t){switch(e){case"compositionend":return Xs(t);case"keypress":return t.which!==32?null:(Ys=!0,Gs);case"textInput":return e=t.data,e===Gs&&Ys?null:e;default:return null}}function ym(e,t){if(kl)return e==="compositionend"||!ri&&Js(e,t)?(e=Ns(),On=ni=It=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var gm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gm[e.type]:t==="textarea"}function Vs(e,t,l,a){Wl?Fl?Fl.push(a):Fl=[a]:Wl=a,t=Du(t,"onChange"),0<t.length&&(l=new Un("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var _a=null,Ba=null;function bm(e){zf(e,0)}function _n(e){var t=za(e);if(Rs(t))return e}function Ks(e,t){if(e==="change")return t}var Ws=!1;if(jt){var oi;if(jt){var fi="oninput"in document;if(!fi){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),fi=typeof Fs.oninput=="function"}oi=fi}else oi=!1;Ws=oi&&(!document.documentMode||9<document.documentMode)}function ks(){_a&&(_a.detachEvent("onpropertychange",Is),Ba=_a=null)}function Is(e){if(e.propertyName==="value"&&_n(Ba)){var t=[];Vs(t,Ba,e,ti(e)),Us(bm,t)}}function Em(e,t,l){e==="focusin"?(ks(),_a=t,Ba=l,_a.attachEvent("onpropertychange",Is)):e==="focusout"&&ks()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _n(Ba)}function Cm(e,t){if(e==="click")return _n(t)}function Dm(e,t){if(e==="input"||e==="change")return _n(t)}function Am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Am;function La(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Yu.call(t,n)||!Pe(e[n],t[n]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ps(e,t){var l=$s(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$s(l)}}function er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?er(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=qn(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xm=jt&&"documentMode"in document&&11>=document.documentMode,Il=null,mi=null,wa=null,vi=!1;function lr(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vi||Il==null||Il!==qn(a)||(a=Il,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wa&&La(wa,a)||(wa=a,a=Du(mi,"onSelect"),0<a.length&&(t=new Un("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Il)))}function Al(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var $l={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},pi={},ar={};jt&&(ar=document.createElement("div").style,"AnimationEvent"in window||(delete $l.animationend.animation,delete $l.animationiteration.animation,delete $l.animationstart.animation),"TransitionEvent"in window||delete $l.transitionend.transition);function xl(e){if(pi[e])return pi[e];if(!$l[e])return e;var t=$l[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ar)return pi[e]=t[l];return e}var nr=xl("animationend"),ur=xl("animationiteration"),ir=xl("animationstart"),Rm=xl("transitionrun"),Mm=xl("transitionstart"),qm=xl("transitioncancel"),cr=xl("transitionend"),sr=new Map,Si="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Si.push("scrollEnd");function yt(e,t){sr.set(e,t),Cl(t,[e])}var Bn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rt=[],Pl=0,hi=0;function Ln(){for(var e=Pl,t=hi=Pl=0;t<e;){var l=rt[t];rt[t++]=null;var a=rt[t];rt[t++]=null;var n=rt[t];rt[t++]=null;var u=rt[t];if(rt[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&rr(l,n,u)}}function wn(e,t,l,a){rt[Pl++]=e,rt[Pl++]=t,rt[Pl++]=l,rt[Pl++]=a,hi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function yi(e,t,l,a){return wn(e,t,l,a),Qn(e)}function Rl(e,t){return wn(e,null,null,t),Qn(e)}function rr(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-$e(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Qn(e){if(50<sn)throw sn=0,Rc=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ea={};function zm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,l,a){return new zm(e,t,l,a)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var l=e.alternate;return l===null?(l=et(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function or(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=Nv(e,l,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=et(31,l,t,n),e.elementType=Tt,e.lanes=u,e;case He:return Ml(l.children,n,u,t);case Mt:i=8,n|=24;break;case Fe:return e=et(12,l,t,n|2),e.elementType=Fe,e.lanes=u,e;case Et:return e=et(13,l,t,n),e.elementType=Et,e.lanes=u,e;case Le:return e=et(19,l,t,n),e.elementType=Le,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:i=10;break e;case Wt:i=9;break e;case it:i=11;break e;case X:i=14;break e;case we:i=16,a=null;break e}i=29,l=Error(p(130,e===null?"null":typeof e,"")),a=null}return t=et(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function Ml(e,t,l,a){return e=et(7,e,a,t),e.lanes=l,e}function bi(e,t,l){return e=et(6,e,null,t),e.lanes=l,e}function fr(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,l){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dr=new WeakMap;function ot(e,t){if(typeof e=="object"&&e!==null){var l=dr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:fs(t)},dr.set(e,t),t)}return{value:e,source:t,stack:fs(t)}}var ta=[],la=0,Yn=null,Qa=0,ft=[],dt=0,$t=null,Dt=1,At="";function Ut(e,t){ta[la++]=Qa,ta[la++]=Yn,Yn=e,Qa=t}function mr(e,t,l){ft[dt++]=Dt,ft[dt++]=At,ft[dt++]=$t,$t=e;var a=Dt;e=At;var n=32-$e(a)-1;a&=~(1<<n),l+=1;var u=32-$e(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Dt=1<<32-$e(t)+n|l<<n|a,At=u+e}else Dt=1<<u|l<<n|a,At=e}function Ti(e){e.return!==null&&(Ut(e,1),mr(e,1,0))}function Ci(e){for(;e===Yn;)Yn=ta[--la],ta[la]=null,Qa=ta[--la],ta[la]=null;for(;e===$t;)$t=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null,Dt=ft[--dt],ft[dt]=null}function vr(e,t){ft[dt++]=Dt,ft[dt++]=At,ft[dt++]=$t,Dt=t.id,At=t.overflow,$t=e}var xe=null,ce=null,Z=!1,Pt=null,mt=!1,Di=Error(p(519));function el(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(ot(t,e)),Di}function pr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ae]=e,t[Ge]=a,l){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(l=0;l<on.length;l++)G(on[l],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),Ms(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),zs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Uf(t.textContent,l)?(a.popover!=null&&(G("beforetoggle",t),G("toggle",t)),a.onScroll!=null&&G("scroll",t),a.onScrollEnd!=null&&G("scrollend",t),a.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||el(e,!0)}function Sr(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:xe=xe.return}}function aa(e){if(e!==xe)return!1;if(!Z)return Sr(e),Z=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Yc(e.type,e.memoizedProps)),l=!l),l&&ce&&el(e),Sr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));ce=Jf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));ce=Jf(e)}else t===27?(t=ce,vl(e.type)?(e=Kc,Kc=null,ce=e):ce=t):ce=xe?pt(e.stateNode.nextSibling):null;return!0}function ql(){ce=xe=null,Z=!1}function Ai(){var e=Pt;return e!==null&&(Ve===null?Ve=e:Ve.push.apply(Ve,e),Pt=null),e}function Ga(e){Pt===null?Pt=[e]:Pt.push(e)}var xi=o(null),zl=null,Nt=null;function tl(e,t,l){D(xi,t._currentValue),t._currentValue=l}function _t(e){e._currentValue=xi.current,E(xi)}function Ri(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Mi(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Ri(u.return,l,e),a||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(p(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ri(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function na(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(p(387));if(i=i.memoizedProps,i!==null){var c=n.type;Pe(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===$.current){if(i=n.alternate,i===null)throw Error(p(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&Mi(t,e,l,a),t.flags|=262144}function Jn(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ol(e){zl=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return hr(zl,e)}function Xn(e,t){return zl===null&&Ol(e),hr(e,t)}function hr(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Nt===null){if(e===null)throw Error(p(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return l}var Om=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},jm=x.unstable_scheduleCallback,Hm=x.unstable_NormalPriority,ye={$$typeof:ze,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qi(){return{controller:new Om,data:new Map,refCount:0}}function Ya(e){e.refCount--,e.refCount===0&&jm(Hm,function(){e.controller.abort()})}var Ja=null,zi=0,ua=0,ia=null;function Um(e,t){if(Ja===null){var l=Ja=[];zi=0,ua=Hc(),ia={status:"pending",value:void 0,then:function(a){l.push(a)}}}return zi++,t.then(yr,yr),t}function yr(){if(--zi===0&&Ja!==null){ia!==null&&(ia.status="fulfilled");var e=Ja;Ja=null,ua=0,ia=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var gr=y.S;y.S=function(e,t){af=ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Um(e,t),gr!==null&&gr(e,t)};var jl=o(null);function Oi(){var e=jl.current;return e!==null?e:ie.pooledCache}function Zn(e,t){t===null?D(jl,jl.current):D(jl,t.pool)}function br(){var e=Oi();return e===null?null:{parent:ye._currentValue,pool:e}}var ca=Error(p(460)),ji=Error(p(474)),Vn=Error(p(542)),Kn={then:function(){}};function Er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tr(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ot,Ot),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e}throw Ul=t,ca}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ul=l,ca):l}}var Ul=null;function Cr(){if(Ul===null)throw Error(p(459));var e=Ul;return Ul=null,e}function Dr(e){if(e===ca||e===Vn)throw Error(p(483))}var sa=null,Xa=0;function Wn(e){var t=Xa;return Xa+=1,sa===null&&(sa=[]),Tr(sa,e,t)}function Za(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fn(e,t){throw t.$$typeof===re?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ar(e){function t(f,r){if(e){var d=f.deletions;d===null?(f.deletions=[r],f.flags|=16):d.push(r)}}function l(f,r){if(!e)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function a(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Ht(f,r),f.index=0,f.sibling=null,f}function u(f,r,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<r?(f.flags|=67108866,r):d):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function c(f,r,d,g){return r===null||r.tag!==6?(r=bi(d,f.mode,g),r.return=f,r):(r=n(r,d),r.return=f,r)}function s(f,r,d,g){var q=d.type;return q===He?h(f,r,d.props.children,g,d.key):r!==null&&(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===we&&Hl(q)===r.type)?(r=n(r,d.props),Za(r,d),r.return=f,r):(r=Gn(d.type,d.key,d.props,null,f.mode,g),Za(r,d),r.return=f,r)}function m(f,r,d,g){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=Ei(d,f.mode,g),r.return=f,r):(r=n(r,d.children||[]),r.return=f,r)}function h(f,r,d,g,q){return r===null||r.tag!==7?(r=Ml(d,f.mode,g,q),r.return=f,r):(r=n(r,d),r.return=f,r)}function b(f,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=bi(""+r,f.mode,d),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case We:return d=Gn(r.type,r.key,r.props,null,f.mode,d),Za(d,r),d.return=f,d;case Be:return r=Ei(r,f.mode,d),r.return=f,r;case we:return r=Hl(r),b(f,r,d)}if(ht(r)||Qe(r))return r=Ml(r,f.mode,d,null),r.return=f,r;if(typeof r.then=="function")return b(f,Wn(r),d);if(r.$$typeof===ze)return b(f,Xn(f,r),d);Fn(f,r)}return null}function v(f,r,d,g){var q=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return q!==null?null:c(f,r,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case We:return d.key===q?s(f,r,d,g):null;case Be:return d.key===q?m(f,r,d,g):null;case we:return d=Hl(d),v(f,r,d,g)}if(ht(d)||Qe(d))return q!==null?null:h(f,r,d,g,null);if(typeof d.then=="function")return v(f,r,Wn(d),g);if(d.$$typeof===ze)return v(f,r,Xn(f,d),g);Fn(f,d)}return null}function S(f,r,d,g,q){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(d)||null,c(r,f,""+g,q);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case We:return f=f.get(g.key===null?d:g.key)||null,s(r,f,g,q);case Be:return f=f.get(g.key===null?d:g.key)||null,m(r,f,g,q);case we:return g=Hl(g),S(f,r,d,g,q)}if(ht(g)||Qe(g))return f=f.get(d)||null,h(r,f,g,q,null);if(typeof g.then=="function")return S(f,r,d,Wn(g),q);if(g.$$typeof===ze)return S(f,r,d,Xn(r,g),q);Fn(r,g)}return null}function A(f,r,d,g){for(var q=null,V=null,M=r,L=r=0,J=null;M!==null&&L<d.length;L++){M.index>L?(J=M,M=null):J=M.sibling;var K=v(f,M,d[L],g);if(K===null){M===null&&(M=J);break}e&&M&&K.alternate===null&&t(f,M),r=u(K,r,L),V===null?q=K:V.sibling=K,V=K,M=J}if(L===d.length)return l(f,M),Z&&Ut(f,L),q;if(M===null){for(;L<d.length;L++)M=b(f,d[L],g),M!==null&&(r=u(M,r,L),V===null?q=M:V.sibling=M,V=M);return Z&&Ut(f,L),q}for(M=a(M);L<d.length;L++)J=S(M,f,L,d[L],g),J!==null&&(e&&J.alternate!==null&&M.delete(J.key===null?L:J.key),r=u(J,r,L),V===null?q=J:V.sibling=J,V=J);return e&&M.forEach(function(gl){return t(f,gl)}),Z&&Ut(f,L),q}function O(f,r,d,g){if(d==null)throw Error(p(151));for(var q=null,V=null,M=r,L=r=0,J=null,K=d.next();M!==null&&!K.done;L++,K=d.next()){M.index>L?(J=M,M=null):J=M.sibling;var gl=v(f,M,K.value,g);if(gl===null){M===null&&(M=J);break}e&&M&&gl.alternate===null&&t(f,M),r=u(gl,r,L),V===null?q=gl:V.sibling=gl,V=gl,M=J}if(K.done)return l(f,M),Z&&Ut(f,L),q;if(M===null){for(;!K.done;L++,K=d.next())K=b(f,K.value,g),K!==null&&(r=u(K,r,L),V===null?q=K:V.sibling=K,V=K);return Z&&Ut(f,L),q}for(M=a(M);!K.done;L++,K=d.next())K=S(M,f,L,K.value,g),K!==null&&(e&&K.alternate!==null&&M.delete(K.key===null?L:K.key),r=u(K,r,L),V===null?q=K:V.sibling=K,V=K);return e&&M.forEach(function(Vv){return t(f,Vv)}),Z&&Ut(f,L),q}function ne(f,r,d,g){if(typeof d=="object"&&d!==null&&d.type===He&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case We:e:{for(var q=d.key;r!==null;){if(r.key===q){if(q=d.type,q===He){if(r.tag===7){l(f,r.sibling),g=n(r,d.props.children),g.return=f,f=g;break e}}else if(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===we&&Hl(q)===r.type){l(f,r.sibling),g=n(r,d.props),Za(g,d),g.return=f,f=g;break e}l(f,r);break}else t(f,r);r=r.sibling}d.type===He?(g=Ml(d.props.children,f.mode,g,d.key),g.return=f,f=g):(g=Gn(d.type,d.key,d.props,null,f.mode,g),Za(g,d),g.return=f,f=g)}return i(f);case Be:e:{for(q=d.key;r!==null;){if(r.key===q)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){l(f,r.sibling),g=n(r,d.children||[]),g.return=f,f=g;break e}else{l(f,r);break}else t(f,r);r=r.sibling}g=Ei(d,f.mode,g),g.return=f,f=g}return i(f);case we:return d=Hl(d),ne(f,r,d,g)}if(ht(d))return A(f,r,d,g);if(Qe(d)){if(q=Qe(d),typeof q!="function")throw Error(p(150));return d=q.call(d),O(f,r,d,g)}if(typeof d.then=="function")return ne(f,r,Wn(d),g);if(d.$$typeof===ze)return ne(f,r,Xn(f,d),g);Fn(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(l(f,r.sibling),g=n(r,d),g.return=f,f=g):(l(f,r),g=bi(d,f.mode,g),g.return=f,f=g),i(f)):l(f,r)}return function(f,r,d,g){try{Xa=0;var q=ne(f,r,d,g);return sa=null,q}catch(M){if(M===ca||M===Vn)throw M;var V=et(29,M,null,f.mode);return V.lanes=g,V.return=f,V}finally{}}}var Nl=Ar(!0),xr=Ar(!1),ll=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ui(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(F&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Qn(e),rr(e,null,l),t}return wn(e,a,t,l),Qn(e)}function Va(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hs(e,l)}}function Ni(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var _i=!1;function Ka(){if(_i){var e=ia;if(e!==null)throw e}}function Wa(e,t,l,a){_i=!1;var n=e.updateQueue;ll=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,i===null?u=m:i.next=m,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==i&&(c===null?h.firstBaseUpdate=m:c.next=m,h.lastBaseUpdate=s))}if(u!==null){var b=n.baseState;i=0,h=m=s=null,c=u;do{var v=c.lane&-536870913,S=v!==c.lane;if(S?(Y&v)===v:(a&v)===v){v!==0&&v===ua&&(_i=!0),h!==null&&(h=h.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var A=e,O=c;v=t;var ne=l;switch(O.tag){case 1:if(A=O.payload,typeof A=="function"){b=A.call(ne,b,v);break e}b=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=O.payload,v=typeof A=="function"?A.call(ne,b,v):A,v==null)break e;b=H({},b,v);break e;case 2:ll=!0}}v=c.callback,v!==null&&(e.flags|=64,S&&(e.flags|=8192),S=n.callbacks,S===null?n.callbacks=[v]:S.push(v))}else S={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(m=h=S,s=b):h=h.next=S,i|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;S=c,c=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);h===null&&(s=b),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=h,u===null&&(n.shared.lanes=0),rl|=i,e.lanes=i,e.memoizedState=b}}function Rr(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function Mr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Rr(l[e],t)}var ra=o(null),kn=o(0);function qr(e,t){e=Zt,D(kn,e),D(ra,t),Zt=e|t.baseLanes}function Bi(){D(kn,Zt),D(ra,ra.current)}function Li(){Zt=kn.current,E(ra),E(kn)}var tt=o(null),vt=null;function ul(e){var t=e.alternate;D(Se,Se.current&1),D(tt,e),vt===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(vt=e)}function wi(e){D(Se,Se.current),D(tt,e),vt===null&&(vt=e)}function zr(e){e.tag===22?(D(Se,Se.current),D(tt,e),vt===null&&(vt=e)):il()}function il(){D(Se,Se.current),D(tt,tt.current)}function lt(e){E(tt),vt===e&&(vt=null),E(Se)}var Se=o(0);function In(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Zc(l)||Vc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,le=null,ge=null,$n=!1,oa=!1,_l=!1,Pn=0,Fa=0,fa=null,_m=0;function de(){throw Error(p(321))}function Qi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Pe(e[l],t[l]))return!1;return!0}function Gi(e,t,l,a,n,u){return Bt=u,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?vo:lc,_l=!1,u=l(a,n),_l=!1,oa&&(u=jr(t,l,a,n)),Or(e),u}function Or(e){y.H=$a;var t=le!==null&&le.next!==null;if(Bt=0,ge=le=B=null,$n=!1,Fa=0,fa=null,t)throw Error(p(300));e===null||be||(e=e.dependencies,e!==null&&Jn(e)&&(be=!0))}function jr(e,t,l,a){B=e;var n=0;do{if(oa&&(fa=null),Fa=0,oa=!1,25<=n)throw Error(p(301));if(n+=1,ge=le=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}y.H=po,u=t(l,a)}while(oa);return u}function Bm(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?ka(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(B.flags|=1024),t}function Yi(){var e=Pn!==0;return Pn=0,e}function Ji(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Xi(e){if($n){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$n=!1}Bt=0,ge=le=B=null,oa=!1,Fa=Pn=0,fa=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?B.memoizedState=ge=e:ge=ge.next=e,ge}function he(){if(le===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ge===null?B.memoizedState:ge.next;if(t!==null)ge=t,le=e;else{if(e===null)throw B.alternate===null?Error(p(467)):Error(p(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ge===null?B.memoizedState=ge=e:ge=ge.next=e}return ge}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(e){var t=Fa;return Fa+=1,fa===null&&(fa=[]),e=Tr(fa,e,t),t=B,(ge===null?t.memoizedState:ge.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?vo:lc),e}function tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ka(e);if(e.$$typeof===ze)return Re(e)}throw Error(p(438,String(e)))}function Zi(e){var t=null,l=B.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=B.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=eu(),B.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ql;return t.index++,l}function Lt(e,t){return typeof t=="function"?t(e):t}function lu(e){var t=he();return Vi(t,le,e)}function Vi(e,t,l){var a=e.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,s=null,m=t,h=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(Y&b)===b:(Bt&b)===b){var v=m.revertLane;if(v===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===ua&&(h=!0);else if((Bt&v)===v){m=m.next,v===ua&&(h=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=b,i=u):s=s.next=b,B.lanes|=v,rl|=v;b=m.action,_l&&l(u,b),u=m.hasEagerState?m.eagerState:l(u,b)}else v={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=v,i=u):s=s.next=v,B.lanes|=b,rl|=b;m=m.next}while(m!==null&&m!==t);if(s===null?i=u:s.next=c,!Pe(u,e.memoizedState)&&(be=!0,h&&(l=ia,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=s,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ki(e){var t=he(),l=t.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);Pe(u,t.memoizedState)||(be=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function Hr(e,t,l){var a=B,n=he(),u=Z;if(u){if(l===void 0)throw Error(p(407));l=l()}else l=t();var i=!Pe((le||n).memoizedState,l);if(i&&(n.memoizedState=l,be=!0),n=n.queue,ki(_r.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(a.flags|=2048,da(9,{destroy:void 0},Nr.bind(null,a,n,l,t),null),ie===null)throw Error(p(349));u||(Bt&127)!==0||Ur(a,t,l)}return l}function Ur(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=B.updateQueue,t===null?(t=eu(),B.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Nr(e,t,l,a){t.value=l,t.getSnapshot=a,Br(t)&&Lr(e)}function _r(e,t,l){return l(function(){Br(t)&&Lr(e)})}function Br(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Pe(e,l)}catch{return!0}}function Lr(e){var t=Rl(e,2);t!==null&&Ke(t,e,2)}function Wi(e){var t=Ne();if(typeof e=="function"){var l=e;if(e=l(),_l){Ft(!0);try{l()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function wr(e,t,l,a){return e.baseState=l,Vi(e,le,typeof a=="function"?a:Lt)}function Lm(e,t,l,a,n){if(uu(e))throw Error(p(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};y.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Qr(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Qr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=y.T,i={};y.T=i;try{var c=l(n,a),s=y.S;s!==null&&s(i,c),Gr(e,t,c)}catch(m){Fi(e,t,m)}finally{u!==null&&i.types!==null&&(u.types=i.types),y.T=u}}else try{u=l(n,a),Gr(e,t,u)}catch(m){Fi(e,t,m)}}function Gr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Yr(e,t,a)},function(a){return Fi(e,t,a)}):Yr(e,t,l)}function Yr(e,t,l){t.status="fulfilled",t.value=l,Jr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Qr(e,l)))}function Fi(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Jr(t),t=t.next;while(t!==a)}e.action=null}function Jr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xr(e,t){return t}function Zr(e,t){if(Z){var l=ie.formState;if(l!==null){e:{var a=B;if(Z){if(ce){t:{for(var n=ce,u=mt;n.nodeType!==8;){if(!u){n=null;break t}if(n=pt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ce=pt(n.nextSibling),a=n.data==="F!";break e}}el(a)}a=!1}a&&(t=l[0])}}return l=Ne(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},l.queue=a,l=oo.bind(null,B,a),a.dispatch=l,a=Wi(!1),u=tc.bind(null,B,!1,a.queue),a=Ne(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Lm.bind(null,B,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Vr(e){var t=he();return Kr(t,le,e)}function Kr(e,t,l){if(t=Vi(e,t,Xr)[0],e=lu(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ka(t)}catch(i){throw i===ca?Vn:i}else a=t;t=he();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(B.flags|=2048,da(9,{destroy:void 0},wm.bind(null,n,l),null)),[a,u,e]}function wm(e,t){e.action=t}function Wr(e){var t=he(),l=le;if(l!==null)return Kr(t,l,e);he(),t=t.memoizedState,l=he();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function da(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=B.updateQueue,t===null&&(t=eu(),B.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Fr(){return he().memoizedState}function au(e,t,l,a){var n=Ne();B.flags|=e,n.memoizedState=da(1|t,{destroy:void 0},l,a===void 0?null:a)}function nu(e,t,l,a){var n=he();a=a===void 0?null:a;var u=n.memoizedState.inst;le!==null&&a!==null&&Qi(a,le.memoizedState.deps)?n.memoizedState=da(t,u,l,a):(B.flags|=e,n.memoizedState=da(1|t,u,l,a))}function kr(e,t){au(8390656,8,e,t)}function ki(e,t){nu(2048,8,e,t)}function Qm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=eu(),B.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Ir(e){var t=he().memoizedState;return Qm({ref:t,nextImpl:e}),function(){if((F&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function $r(e,t){return nu(4,2,e,t)}function Pr(e,t){return nu(4,4,e,t)}function eo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function to(e,t,l){l=l!=null?l.concat([e]):null,nu(4,4,eo.bind(null,t,e),l)}function Ii(){}function lo(e,t){var l=he();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Qi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function ao(e,t){var l=he();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Qi(t,a[1]))return a[0];if(a=e(),_l){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a}function $i(e,t,l){return l===void 0||(Bt&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=uf(),B.lanes|=e,rl|=e,l)}function no(e,t,l,a){return Pe(l,t)?l:ra.current!==null?(e=$i(e,l,a),Pe(e,t)||(be=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(Y&261930)===0?(be=!0,e.memoizedState=l):(e=uf(),B.lanes|=e,rl|=e,t)}function uo(e,t,l,a,n){var u=C.p;C.p=u!==0&&8>u?u:8;var i=y.T,c={};y.T=c,tc(e,!1,t,l);try{var s=n(),m=y.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var h=Nm(s,a);Ia(e,t,h,ut(e))}else Ia(e,t,a,ut(e))}catch(b){Ia(e,t,{then:function(){},status:"rejected",reason:b},ut())}finally{C.p=u,i!==null&&c.types!==null&&(i.types=c.types),y.T=i}}function Gm(){}function Pi(e,t,l,a){if(e.tag!==5)throw Error(p(476));var n=io(e).queue;uo(e,n,t,U,l===null?Gm:function(){return co(e),l(a)})}function io(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:U},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function co(e){var t=io(e);t.next===null&&(t=e.alternate.memoizedState),Ia(e,t.next.queue,{},ut())}function ec(){return Re(pn)}function so(){return he().memoizedState}function ro(){return he().memoizedState}function Ym(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ut();e=al(l);var a=nl(t,e,l);a!==null&&(Ke(a,t,l),Va(a,t,l)),t={cache:qi()},e.payload=t;return}t=t.return}}function Jm(e,t,l){var a=ut();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uu(e)?fo(t,l):(l=yi(e,t,l,a),l!==null&&(Ke(l,e,a),mo(l,t,a)))}function oo(e,t,l){var a=ut();Ia(e,t,l,a)}function Ia(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(uu(e))fo(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,Pe(c,i))return wn(e,t,n,0),ie===null&&Ln(),!1}catch{}finally{}if(l=yi(e,t,n,a),l!==null)return Ke(l,e,a),mo(l,t,a),!0}return!1}function tc(e,t,l,a){if(a={lane:2,revertLane:Hc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(e)){if(t)throw Error(p(479))}else t=yi(e,l,a,2),t!==null&&Ke(t,e,2)}function uu(e){var t=e.alternate;return e===B||t!==null&&t===B}function fo(e,t){oa=$n=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function mo(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hs(e,l)}}var $a={readContext:Re,use:tu,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};$a.useEffectEvent=de;var vo={readContext:Re,use:tu,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:kr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,au(4194308,4,eo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return au(4194308,4,e,t)},useInsertionEffect:function(e,t){au(4,2,e,t)},useMemo:function(e,t){var l=Ne();t=t===void 0?null:t;var a=e();if(_l){Ft(!0);try{e()}finally{Ft(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ne();if(l!==void 0){var n=l(t);if(_l){Ft(!0);try{l(t)}finally{Ft(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Jm.bind(null,B,e),[a.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=Wi(e);var t=e.queue,l=oo.bind(null,B,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Ii,useDeferredValue:function(e,t){var l=Ne();return $i(l,e,t)},useTransition:function(){var e=Wi(!1);return e=uo.bind(null,B,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=B,n=Ne();if(Z){if(l===void 0)throw Error(p(407));l=l()}else{if(l=t(),ie===null)throw Error(p(349));(Y&127)!==0||Ur(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,kr(_r.bind(null,a,u,e),[e]),a.flags|=2048,da(9,{destroy:void 0},Nr.bind(null,a,u,l,t),null),l},useId:function(){var e=Ne(),t=ie.identifierPrefix;if(Z){var l=At,a=Dt;l=(a&~(1<<32-$e(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Pn++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=_m++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ec,useFormState:Zr,useActionState:Zr,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=tc.bind(null,B,!0,l),l.dispatch=t,[e,t]},useMemoCache:Zi,useCacheRefresh:function(){return Ne().memoizedState=Ym.bind(null,B)},useEffectEvent:function(e){var t=Ne(),l={impl:e};return t.memoizedState=l,function(){if((F&2)!==0)throw Error(p(440));return l.impl.apply(void 0,arguments)}}},lc={readContext:Re,use:tu,useCallback:lo,useContext:Re,useEffect:ki,useImperativeHandle:to,useInsertionEffect:$r,useLayoutEffect:Pr,useMemo:ao,useReducer:lu,useRef:Fr,useState:function(){return lu(Lt)},useDebugValue:Ii,useDeferredValue:function(e,t){var l=he();return no(l,le.memoizedState,e,t)},useTransition:function(){var e=lu(Lt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:Hr,useId:so,useHostTransitionStatus:ec,useFormState:Vr,useActionState:Vr,useOptimistic:function(e,t){var l=he();return wr(l,le,e,t)},useMemoCache:Zi,useCacheRefresh:ro};lc.useEffectEvent=Ir;var po={readContext:Re,use:tu,useCallback:lo,useContext:Re,useEffect:ki,useImperativeHandle:to,useInsertionEffect:$r,useLayoutEffect:Pr,useMemo:ao,useReducer:Ki,useRef:Fr,useState:function(){return Ki(Lt)},useDebugValue:Ii,useDeferredValue:function(e,t){var l=he();return le===null?$i(l,e,t):no(l,le.memoizedState,e,t)},useTransition:function(){var e=Ki(Lt)[0],t=he().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:Hr,useId:so,useHostTransitionStatus:ec,useFormState:Wr,useActionState:Wr,useOptimistic:function(e,t){var l=he();return le!==null?wr(l,le,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Zi,useCacheRefresh:ro};po.useEffectEvent=Ir;function ac(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:H({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var nc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ut(),n=al(a);n.payload=t,l!=null&&(n.callback=l),t=nl(e,n,a),t!==null&&(Ke(t,e,a),Va(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ut(),n=al(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=nl(e,n,a),t!==null&&(Ke(t,e,a),Va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ut(),a=al(l);a.tag=2,t!=null&&(a.callback=t),t=nl(e,a,l),t!==null&&(Ke(t,e,l),Va(t,e,l))}};function So(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!La(l,a)||!La(n,u):!0}function ho(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function Bl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=H({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function yo(e){Bn(e)}function go(e){console.error(e)}function bo(e){Bn(e)}function iu(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Eo(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(e,t,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){iu(e,t)},l}function To(e){return e=al(e),e.tag=3,e}function Co(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){Eo(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Eo(t,l,a),typeof n!="function"&&(ol===null?ol=new Set([this]):ol.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Xm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&na(t,l,n,!0),l=tt.current,l!==null){switch(l.tag){case 31:case 13:return vt===null?yu():l.alternate===null&&me===0&&(me=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Kn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),zc(e,a,n)),!1;case 22:return l.flags|=65536,a===Kn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),zc(e,a,n)),!1}throw Error(p(435,l.tag))}return zc(e,a,n),yu(),!1}if(Z)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Di&&(e=Error(p(422),{cause:a}),Ga(ot(e,l)))):(a!==Di&&(t=Error(p(423),{cause:a}),Ga(ot(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=ot(a,l),n=uc(e.stateNode,a,n),Ni(e,n),me!==4&&(me=2)),!1;var u=Error(p(520),{cause:a});if(u=ot(u,l),cn===null?cn=[u]:cn.push(u),me!==4&&(me=2),t===null)return!0;a=ot(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=uc(l.stateNode,a,e),Ni(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ol===null||!ol.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=To(n),Co(n,e,l,a),Ni(l,n),!1}l=l.return}while(l!==null);return!1}var ic=Error(p(461)),be=!1;function Me(e,t,l,a){t.child=e===null?xr(t,null,l,a):Nl(t,e.child,l,a)}function Do(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ol(t),a=Gi(e,t,l,i,u,n),c=Yi(),e!==null&&!be?(Ji(e,t,n),wt(e,t,n)):(Z&&c&&Ti(t),t.flags|=1,Me(e,t,a,n),t.child)}function Ao(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!gi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,xo(e,t,u,a,n)):(e=Gn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!vc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:La,l(i,a)&&e.ref===t.ref)return wt(e,t,n)}return t.flags|=1,e=Ht(u,a),e.ref=t.ref,e.return=t,t.child=e}function xo(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(La(u,a)&&e.ref===t.ref)if(be=!1,t.pendingProps=a=u,vc(e,n))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,wt(e,t,n)}return cc(e,t,l,a,n)}function Ro(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Mo(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zn(t,u!==null?u.cachePool:null),u!==null?qr(t,u):Bi(),zr(t);else return a=t.lanes=536870912,Mo(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Zn(t,u.cachePool),qr(t,u),il(),t.memoizedState=null):(e!==null&&Zn(t,null),Bi(),il());return Me(e,t,n,l),t.child}function Pa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mo(e,t,l,a,n){var u=Oi();return u=u===null?null:{parent:ye._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Zn(t,null),Bi(),zr(t),e!==null&&na(e,t,a,!0),t.childLanes=n,null}function cu(e,t){return t=ru({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qo(e,t,l){return Nl(t,e.child,null,l),e=cu(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Zm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(a.mode==="hidden")return e=cu(t,a),t.lanes=536870912,Pa(null,e);if(wi(t),(e=ce)?(e=Yf(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},l=fr(e),l.return=t,t.child=l,xe=t,ce=null)):e=null,e===null)throw el(t);return t.lanes=536870912,null}return cu(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(wi(t),n)if(t.flags&256)t.flags&=-257,t=qo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(be||na(e,t,l,!1),n=(l&e.childLanes)!==0,be||n){if(a=ie,a!==null&&(i=ys(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Rl(e,i),Ke(a,e,i),ic;yu(),t=qo(e,t,l)}else e=u.treeContext,ce=pt(i.nextSibling),xe=t,Z=!0,Pt=null,mt=!1,e!==null&&vr(t,e),t=cu(t,a),t.flags|=4096;return t}return e=Ht(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function su(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(p(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function cc(e,t,l,a,n){return Ol(t),l=Gi(e,t,l,a,void 0,n),a=Yi(),e!==null&&!be?(Ji(e,t,n),wt(e,t,n)):(Z&&a&&Ti(t),t.flags|=1,Me(e,t,l,n),t.child)}function zo(e,t,l,a,n,u){return Ol(t),t.updateQueue=null,l=jr(t,a,l,n),Or(e),a=Yi(),e!==null&&!be?(Ji(e,t,u),wt(e,t,u)):(Z&&a&&Ti(t),t.flags|=1,Me(e,t,l,u),t.child)}function Oo(e,t,l,a,n){if(Ol(t),t.stateNode===null){var u=ea,i=l.contextType;typeof i=="object"&&i!==null&&(u=Re(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Hi(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Re(i):ea,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ac(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&nc.enqueueReplaceState(u,u.state,null),Wa(t,a,u,n),Ka(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,s=Bl(l,c);u.props=s;var m=u.context,h=l.contextType;i=ea,typeof h=="object"&&h!==null&&(i=Re(h));var b=l.getDerivedStateFromProps;h=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,h||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&ho(t,u,a,i),ll=!1;var v=t.memoizedState;u.state=v,Wa(t,a,u,n),Ka(),m=t.memoizedState,c||v!==m||ll?(typeof b=="function"&&(ac(t,l,b,a),m=t.memoizedState),(s=ll||So(t,l,s,a,v,m,i))?(h||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),u.props=a,u.state=m,u.context=i,a=s):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Ui(e,t),i=t.memoizedProps,h=Bl(l,i),u.props=h,b=t.pendingProps,v=u.context,m=l.contextType,s=ea,typeof m=="object"&&m!==null&&(s=Re(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==b||v!==s)&&ho(t,u,a,s),ll=!1,v=t.memoizedState,u.state=v,Wa(t,a,u,n),Ka();var S=t.memoizedState;i!==b||v!==S||ll||e!==null&&e.dependencies!==null&&Jn(e.dependencies)?(typeof c=="function"&&(ac(t,l,c,a),S=t.memoizedState),(h=ll||So(t,l,h,a,v,S,s)||e!==null&&e.dependencies!==null&&Jn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,S,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,S,s)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=S),u.props=a,u.state=S,u.context=s,a=h):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,su(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Nl(t,e.child,null,n),t.child=Nl(t,null,l,n)):Me(e,t,l,n),t.memoizedState=u.state,e=t.child):e=wt(e,t,n),e}function jo(e,t,l,a){return ql(),t.flags|=256,Me(e,t,l,a),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:br()}}function oc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=nt),e}function Ho(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(n?ul(t):il(),(e=ce)?(e=Yf(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:Dt,overflow:At}:null,retryLane:536870912,hydrationErrors:null},l=fr(e),l.return=t,t.child=l,xe=t,ce=null)):e=null,e===null)throw el(t);return Vc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(il(),n=t.mode,c=ru({mode:"hidden",children:c},n),a=Ml(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=rc(l),a.childLanes=oc(e,i,l),t.memoizedState=sc,Pa(null,a)):(ul(t),fc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)t.flags&256?(ul(t),t.flags&=-257,t=dc(e,t,l)):t.memoizedState!==null?(il(),t.child=e.child,t.flags|=128,t=null):(il(),c=a.fallback,n=t.mode,a=ru({mode:"visible",children:a.children},n),c=Ml(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Nl(t,e.child,null,l),a=t.child,a.memoizedState=rc(l),a.childLanes=oc(e,i,l),t.memoizedState=sc,t=Pa(null,a));else if(ul(t),Vc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,a=Error(p(419)),a.stack="",a.digest=i,Ga({value:a,source:null,stack:null}),t=dc(e,t,l)}else if(be||na(e,t,l,!1),i=(l&e.childLanes)!==0,be||i){if(i=ie,i!==null&&(a=ys(i,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Rl(e,a),Ke(i,e,a),ic;Zc(c)||yu(),t=dc(e,t,l)}else Zc(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ce=pt(c.nextSibling),xe=t,Z=!0,Pt=null,mt=!1,e!==null&&vr(t,e),t=fc(t,a.children),t.flags|=4096);return t}return n?(il(),c=a.fallback,n=t.mode,s=e.child,m=s.sibling,a=Ht(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Ht(m,c):(c=Ml(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Pa(null,a),a=t.child,c=e.child.memoizedState,c===null?c=rc(l):(n=c.cachePool,n!==null?(s=ye._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=br(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=oc(e,i,l),t.memoizedState=sc,Pa(e.child,a)):(ul(t),l=e.child,e=l.sibling,l=Ht(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function fc(e,t){return t=ru({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ru(e,t){return e=et(22,e,null,t),e.lanes=0,e}function dc(e,t,l){return Nl(t,e.child,null,l),e=fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ri(e.return,t,l)}function mc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function No(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Se.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,D(Se,i),Me(e,t,a,l),a=Z?Qa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uo(e,l,t);else if(e.tag===19)Uo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&In(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),mc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&In(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}mc(t,!0,l,null,u,a);break;case"together":mc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),rl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(na(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,l=Ht(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ht(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function vc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Jn(e)))}function Vm(e,t,l){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),tl(t,ye,e.memoizedState.cache),ql();break;case 27:case 5:Aa(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:tl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ul(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Ho(e,t,l):(ul(t),e=wt(e,t,l),e!==null?e.sibling:null);ul(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(na(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return No(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Se,Se.current),a)break;return null;case 22:return t.lanes=0,Ro(e,t,l,t.pendingProps);case 24:tl(t,ye,e.memoizedState.cache)}return wt(e,t,l)}function _o(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!vc(e,l)&&(t.flags&128)===0)return be=!1,Vm(e,t,l);be=(e.flags&131072)!==0}else be=!1,Z&&(t.flags&1048576)!==0&&mr(t,Qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")gi(e)?(a=Bl(e,a),t.tag=1,t=Oo(null,t,e,a,l)):(t.tag=0,t=cc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===it){t.tag=11,t=Do(null,t,e,a,l);break e}else if(n===X){t.tag=14,t=Ao(null,t,e,a,l);break e}}throw t=qt(e)||e,Error(p(306,t,""))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Bl(a,t.pendingProps),Oo(e,t,a,n,l);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(p(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Ui(e,t),Wa(t,a,null,l);var i=t.memoizedState;if(a=i.cache,tl(t,ye,a),a!==u.cache&&Mi(t,[ye],l,!0),Ka(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=jo(e,t,a,l);break e}else if(a!==n){n=ot(Error(p(424)),t),Ga(n),t=jo(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ce=pt(e.firstChild),xe=t,Z=!0,Pt=null,mt=!0,l=xr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ql(),a===n){t=wt(e,t,l);break e}Me(e,t,a,l)}t=t.child}return t;case 26:return su(e,t),e===null?(l=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=l:Z||(l=t.type,e=t.pendingProps,a=Au(w.current).createElement(l),a[Ae]=t,a[Ge]=e,qe(a,l,e),Ce(a),t.stateNode=a):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Aa(t),e===null&&Z&&(a=t.stateNode=Zf(t.type,t.pendingProps,w.current),xe=t,mt=!0,n=ce,vl(t.type)?(Kc=n,ce=pt(a.firstChild)):ce=n),Me(e,t,t.pendingProps.children,l),su(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((n=a=ce)&&(a=Tv(a,t.type,t.pendingProps,mt),a!==null?(t.stateNode=a,xe=t,ce=pt(a.firstChild),mt=!1,n=!0):n=!1),n||el(t)),Aa(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,Yc(n,u)?a=null:i!==null&&Yc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Gi(e,t,Bm,null,null,l),pn._currentValue=n),su(e,t),Me(e,t,a,l),t.child;case 6:return e===null&&Z&&((e=l=ce)&&(l=Cv(l,t.pendingProps,mt),l!==null?(t.stateNode=l,xe=t,ce=null,e=!0):e=!1),e||el(t)),null;case 13:return Ho(e,t,l);case 4:return Ue(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Nl(t,null,a,l):Me(e,t,a,l),t.child;case 11:return Do(e,t,t.type,t.pendingProps,l);case 7:return Me(e,t,t.pendingProps,l),t.child;case 8:return Me(e,t,t.pendingProps.children,l),t.child;case 12:return Me(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,tl(t,t.type,a.value),Me(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ol(t),n=Re(n),a=a(n),t.flags|=1,Me(e,t,a,l),t.child;case 14:return Ao(e,t,t.type,t.pendingProps,l);case 15:return xo(e,t,t.type,t.pendingProps,l);case 19:return No(e,t,l);case 31:return Zm(e,t,l);case 22:return Ro(e,t,l,t.pendingProps);case 24:return Ol(t),a=Re(ye),e===null?(n=Oi(),n===null&&(n=ie,u=qi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},Hi(t),tl(t,ye,n)):((e.lanes&l)!==0&&(Ui(e,t),Wa(t,null,null,l),Ka()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),tl(t,ye,a)):(a=u.cache,tl(t,ye,a),a!==n.cache&&Mi(t,[ye],l,!0))),Me(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Qt(e){e.flags|=4}function pc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(of())e.flags|=8192;else throw Ul=Kn,ji}else e.flags&=-16777217}function Bo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pf(t))if(of())e.flags|=8192;else throw Ul=Kn,ji}function ou(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ps():536870912,e.lanes|=t,Sa|=t)}function en(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Km(e,t,l){var a=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return se(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_t(ye),pe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(aa(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ai())),se(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Qt(t),u!==null?(se(t),Bo(t,u)):(se(t),pc(t,n,null,a,l))):u?u!==e.memoizedState?(Qt(t),se(t),Bo(t,u)):(se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qt(t),se(t),pc(t,n,e,a,l)),null;case 27:if(En(t),l=w.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return se(t),null}e=R.current,aa(t)?pr(t):(e=Zf(n,a,l),t.stateNode=e,Qt(t))}return se(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(p(166));return se(t),null}if(u=R.current,aa(t))pr(t);else{var i=Au(w.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Ae]=t,u[Ge]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(qe(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qt(t)}}return se(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(p(166));if(e=w.current,aa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=xe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Uf(e.nodeValue,l)),e||el(t,!0)}else e=Au(e).createTextNode(a),e[Ae]=t,t.stateNode=e}return se(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=aa(t),l!==null){if(e===null){if(!a)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Ae]=t}else ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),e=!1}else l=Ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return se(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=aa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(p(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[Ae]=t}else ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),n=!1}else n=Ai(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),ou(t,t.updateQueue),se(t),null);case 4:return pe(),e===null&&Bc(t.stateNode.containerInfo),se(t),null;case 10:return _t(t.type),se(t),null;case 19:if(E(Se),a=t.memoizedState,a===null)return se(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)en(a,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=In(e),u!==null){for(t.flags|=128,en(a,!1),e=u.updateQueue,t.updateQueue=e,ou(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)or(l,e),l=l.sibling;return D(Se,Se.current&1|2),Z&&Ut(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ke()>pu&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304)}else{if(!n)if(e=In(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ou(t,e),en(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Z)return se(t),null}else 2*ke()-a.renderingStartTime>pu&&l!==536870912&&(t.flags|=128,n=!0,en(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ke(),e.sibling=null,l=Se.current,D(Se,n?l&1|2:l&1),Z&&Ut(t,a.treeForkCount),e):(se(t),null);case 22:case 23:return lt(t),Li(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),l=t.updateQueue,l!==null&&ou(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&E(jl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),_t(ye),se(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function Wm(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _t(ye),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(p(340));ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(Se),null;case 4:return pe(),null;case 10:return _t(t.type),null;case 22:case 23:return lt(t),Li(),e!==null&&E(jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _t(ye),null;case 25:return null;default:return null}}function Lo(e,t){switch(Ci(t),t.tag){case 3:_t(ye),pe();break;case 26:case 27:case 5:En(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:E(Se);break;case 10:_t(t.type);break;case 22:case 23:lt(t),Li(),e!==null&&E(jl);break;case 24:_t(ye)}}function tn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){ee(t,t.return,c)}}function cl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var s=l,m=c;try{m()}catch(h){ee(n,s,h)}}}a=a.next}while(a!==u)}}catch(h){ee(t,t.return,h)}}function wo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Mr(t,l)}catch(a){ee(e,e.return,a)}}}function Qo(e,t,l){l.props=Bl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ee(e,t,a)}}function ln(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ee(e,t,n)}}function xt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ee(e,t,n)}else l.current=null}function Go(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ee(e,e.return,n)}}function Sc(e,t,l){try{var a=e.stateNode;Sv(a,e.type,l,t),a[Ge]=t}catch(n){ee(e,e.return,n)}}function Yo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ot));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(yc(e,t,l),e=e.sibling;e!==null;)yc(e,t,l),e=e.sibling}function fu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(fu(e,t,l),e=e.sibling;e!==null;)fu(e,t,l),e=e.sibling}function Jo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qe(t,a,l),t[Ae]=e,t[Ge]=l}catch(u){ee(e,e.return,u)}}var Gt=!1,Ee=!1,gc=!1,Xo=typeof WeakSet=="function"?WeakSet:Set,De=null;function Fm(e,t){if(e=e.containerInfo,Qc=ju,e=tr(e),di(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,c=-1,s=-1,m=0,h=0,b=e,v=null;t:for(;;){for(var S;b!==l||n!==0&&b.nodeType!==3||(c=i+n),b!==u||a!==0&&b.nodeType!==3||(s=i+a),b.nodeType===3&&(i+=b.nodeValue.length),(S=b.firstChild)!==null;)v=b,b=S;for(;;){if(b===e)break t;if(v===l&&++m===n&&(c=i),v===u&&++h===a&&(s=i),(S=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=S}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gc={focusedElem:e,selectionRange:l},ju=!1,De=t;De!==null;)if(t=De,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,De=e;else for(;De!==null;){switch(t=De,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var A=Bl(l.type,n);e=a.getSnapshotBeforeUpdate(A,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(O){ee(l,l.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Xc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,De=e;break}De=t.return}}function Zo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Jt(e,l),a&4&&tn(5,l);break;case 1:if(Jt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){ee(l,l.return,i)}else{var n=Bl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ee(l,l.return,i)}}a&64&&wo(l),a&512&&ln(l,l.return);break;case 3:if(Jt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Mr(e,t)}catch(i){ee(l,l.return,i)}}break;case 27:t===null&&a&4&&Jo(l);case 26:case 5:Jt(e,l),t===null&&a&4&&Go(l),a&512&&ln(l,l.return);break;case 12:Jt(e,l);break;case 31:Jt(e,l),a&4&&Wo(e,l);break;case 13:Jt(e,l),a&4&&Fo(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=nv.bind(null,l),Dv(e,l))));break;case 22:if(a=l.memoizedState!==null||Gt,!a){t=t!==null&&t.memoizedState!==null||Ee,n=Gt;var u=Ee;Gt=a,(Ee=t)&&!u?Xt(e,l,(l.subtreeFlags&8772)!==0):Jt(e,l),Gt=n,Ee=u}break;case 30:break;default:Jt(e,l)}}function Vo(e){var t=e.alternate;t!==null&&(e.alternate=null,Vo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Je=!1;function Yt(e,t,l){for(l=l.child;l!==null;)Ko(e,t,l),l=l.sibling}function Ko(e,t,l){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(xa,l)}catch{}switch(l.tag){case 26:Ee||xt(l,t),Yt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ee||xt(l,t);var a=oe,n=Je;vl(l.type)&&(oe=l.stateNode,Je=!1),Yt(e,t,l),dn(l.stateNode),oe=a,Je=n;break;case 5:Ee||xt(l,t);case 6:if(a=oe,n=Je,oe=null,Yt(e,t,l),oe=a,Je=n,oe!==null)if(Je)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(l.stateNode)}catch(u){ee(l,t,u)}else try{oe.removeChild(l.stateNode)}catch(u){ee(l,t,u)}break;case 18:oe!==null&&(Je?(e=oe,Qf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Da(e)):Qf(oe,l.stateNode));break;case 4:a=oe,n=Je,oe=l.stateNode.containerInfo,Je=!0,Yt(e,t,l),oe=a,Je=n;break;case 0:case 11:case 14:case 15:cl(2,l,t),Ee||cl(4,l,t),Yt(e,t,l);break;case 1:Ee||(xt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Qo(l,t,a)),Yt(e,t,l);break;case 21:Yt(e,t,l);break;case 22:Ee=(a=Ee)||l.memoizedState!==null,Yt(e,t,l),Ee=a;break;default:Yt(e,t,l)}}function Wo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Da(e)}catch(l){ee(t,t.return,l)}}}function Fo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Da(e)}catch(l){ee(t,t.return,l)}}function km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xo),t;default:throw Error(p(435,e.tag))}}function du(e,t){var l=km(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=uv.bind(null,e,a);a.then(n,n)}})}function Xe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){oe=c.stateNode,Je=!1;break e}break;case 5:oe=c.stateNode,Je=!1;break e;case 3:case 4:oe=c.stateNode.containerInfo,Je=!0;break e}c=c.return}if(oe===null)throw Error(p(160));Ko(u,i,n),oe=null,Je=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ko(t,e),t=t.sibling}var gt=null;function ko(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ze(e),a&4&&(cl(3,e,e.return),tn(3,e),cl(5,e,e.return));break;case 1:Xe(t,e),Ze(e),a&512&&(Ee||l===null||xt(l,l.return)),a&64&&Gt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=gt;if(Xe(t,e),Ze(e),a&512&&(Ee||l===null||xt(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[qa]||u[Ae]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),qe(u,a,l),u[Ae]=e,Ce(u),a=u;break e;case"link":var i=If("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),qe(u,a,l),n.head.appendChild(u);break;case"meta":if(i=If("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}u=n.createElement(a),qe(u,a,l),n.head.appendChild(u);break;default:throw Error(p(468,a))}u[Ae]=e,Ce(u),a=u}e.stateNode=a}else $f(n,e.type,e.stateNode);else e.stateNode=kf(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?$f(n,e.type,e.stateNode):kf(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Xe(t,e),Ze(e),a&512&&(Ee||l===null||xt(l,l.return)),l!==null&&a&4&&Sc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Xe(t,e),Ze(e),a&512&&(Ee||l===null||xt(l,l.return)),e.flags&32){n=e.stateNode;try{Kl(n,"")}catch(A){ee(e,e.return,A)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Sc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(gc=!0);break;case 6:if(Xe(t,e),Ze(e),a&4){if(e.stateNode===null)throw Error(p(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(A){ee(e,e.return,A)}}break;case 3:if(Mu=null,n=gt,gt=xu(t.containerInfo),Xe(t,e),gt=n,Ze(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Da(t.containerInfo)}catch(A){ee(e,e.return,A)}gc&&(gc=!1,Io(e));break;case 4:a=gt,gt=xu(e.stateNode.containerInfo),Xe(t,e),Ze(e),gt=a;break;case 12:Xe(t,e),Ze(e);break;case 31:Xe(t,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 13:Xe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vu=ke()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=Gt,h=Ee;if(Gt=m||n,Ee=h||s,Xe(t,e),Ee=h,Gt=m,Ze(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Gt||Ee||Ll(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var b=s.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(A){ee(s,s.return,A)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(A){ee(s,s.return,A)}}}else if(t.tag===18){if(l===null){s=t;try{var S=s.stateNode;n?Gf(S,!0):Gf(s.stateNode,!1)}catch(A){ee(s,s.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,du(e,l))));break;case 19:Xe(t,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,du(e,a)));break;case 30:break;case 21:break;default:Xe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Yo(a)){l=a;break}a=a.return}if(l==null)throw Error(p(160));switch(l.tag){case 27:var n=l.stateNode,u=hc(e);fu(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Kl(i,""),l.flags&=-33);var c=hc(e);fu(e,c,i);break;case 3:case 4:var s=l.stateNode.containerInfo,m=hc(e);yc(e,m,s);break;default:throw Error(p(161))}}catch(h){ee(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Io(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Io(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zo(e,t.alternate,t),t=t.sibling}function Ll(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cl(4,t,t.return),Ll(t);break;case 1:xt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Qo(t,t.return,l),Ll(t);break;case 27:dn(t.stateNode);case 26:case 5:xt(t,t.return),Ll(t);break;case 22:t.memoizedState===null&&Ll(t);break;case 30:Ll(t);break;default:Ll(t)}e=e.sibling}}function Xt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Xt(n,u,l),tn(4,u);break;case 1:if(Xt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ee(a,a.return,m)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Rr(s[n],c)}catch(m){ee(a,a.return,m)}}l&&i&64&&wo(u),ln(u,u.return);break;case 27:Jo(u);case 26:case 5:Xt(n,u,l),l&&a===null&&i&4&&Go(u),ln(u,u.return);break;case 12:Xt(n,u,l);break;case 31:Xt(n,u,l),l&&i&4&&Wo(n,u);break;case 13:Xt(n,u,l),l&&i&4&&Fo(n,u);break;case 22:u.memoizedState===null&&Xt(n,u,l),ln(u,u.return);break;case 30:break;default:Xt(n,u,l)}t=t.sibling}}function bc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ya(l))}function Ec(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e))}function bt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$o(e,t,l,a),t=t.sibling}function $o(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,l,a),n&2048&&tn(9,t);break;case 1:bt(e,t,l,a);break;case 3:bt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e)));break;case 12:if(n&2048){bt(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ee(t,t.return,s)}}else bt(e,t,l,a);break;case 31:bt(e,t,l,a);break;case 13:bt(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?bt(e,t,l,a):an(e,t):u._visibility&2?bt(e,t,l,a):(u._visibility|=2,ma(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bc(i,t);break;case 24:bt(e,t,l,a),n&2048&&Ec(t.alternate,t);break;default:bt(e,t,l,a)}}function ma(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=l,s=a,m=i.flags;switch(i.tag){case 0:case 11:case 15:ma(u,i,c,s,n),tn(8,i);break;case 23:break;case 22:var h=i.stateNode;i.memoizedState!==null?h._visibility&2?ma(u,i,c,s,n):an(u,i):(h._visibility|=2,ma(u,i,c,s,n)),n&&m&2048&&bc(i.alternate,i);break;case 24:ma(u,i,c,s,n),n&&m&2048&&Ec(i.alternate,i);break;default:ma(u,i,c,s,n)}t=t.sibling}}function an(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:an(l,a),n&2048&&bc(a.alternate,a);break;case 24:an(l,a),n&2048&&Ec(a.alternate,a);break;default:an(l,a)}t=t.sibling}}var nn=8192;function va(e,t,l){if(e.subtreeFlags&nn)for(e=e.child;e!==null;)Po(e,t,l),e=e.sibling}function Po(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&nn&&e.memoizedState!==null&&_v(l,gt,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=gt;gt=xu(e.stateNode.containerInfo),va(e,t,l),gt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=nn,nn=16777216,va(e,t,l),nn=a):va(e,t,l));break;default:va(e,t,l)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];De=a,lf(a,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:un(e),e.flags&2048&&cl(9,e,e.return);break;case 3:un(e);break;case 12:un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mu(e)):un(e);break;default:un(e)}}function mu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];De=a,lf(a,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cl(8,t,t.return),mu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,mu(t));break;default:mu(t)}e=e.sibling}}function lf(e,t){for(;De!==null;){var l=De;switch(l.tag){case 0:case 11:case 15:cl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ya(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,De=a;else e:for(l=e;De!==null;){a=De;var n=a.sibling,u=a.return;if(Vo(a),a===l){De=null;break e}if(n!==null){n.return=u,De=n;break e}De=u}}}var Im={getCacheForType:function(e){var t=Re(ye),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Re(ye).controller.signal}},$m=typeof WeakMap=="function"?WeakMap:Map,F=0,ie=null,Q=null,Y=0,P=0,at=null,sl=!1,pa=!1,Tc=!1,Zt=0,me=0,rl=0,wl=0,Cc=0,nt=0,Sa=0,cn=null,Ve=null,Dc=!1,vu=0,af=0,pu=1/0,Su=null,ol=null,Te=0,fl=null,ha=null,Vt=0,Ac=0,xc=null,nf=null,sn=0,Rc=null;function ut(){return(F&2)!==0&&Y!==0?Y&-Y:y.T!==null?Hc():gs()}function uf(){if(nt===0)if((Y&536870912)===0||Z){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,l){(e===ie&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(ya(e,0),dl(e,Y,nt,!1)),Ma(e,l),((F&2)===0||e!==ie)&&(e===ie&&((F&2)===0&&(wl|=l),me===4&&dl(e,Y,nt,!1)),Rt(e))}function cf(e,t,l){if((F&6)!==0)throw Error(p(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ra(e,t),n=a?tv(e,t):qc(e,t,!0),u=a;do{if(n===0){pa&&!a&&dl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!Pm(l)){n=qc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=cn;var s=c.current.memoizedState.isDehydrated;if(s&&(ya(c,i).flags|=256),i=qc(c,i,!1),i!==2){if(Tc&&!s){c.errorRecoveryDisabledLanes|=u,wl|=u,n=4;break e}u=Ve,Ve=n,u!==null&&(Ve===null?Ve=u:Ve.push.apply(Ve,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){ya(e,0),dl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:dl(a,t,nt,!sl);break e;case 2:Ve=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(n=vu+300-ke(),10<n)){if(dl(a,t,nt,!sl),xn(a,0,!0)!==0)break e;Vt=t,a.timeoutHandle=Lf(sf.bind(null,a,l,Ve,Su,Dc,t,nt,wl,Sa,sl,u,"Throttled",-0,0),n);break e}sf(a,l,Ve,Su,Dc,t,nt,wl,Sa,sl,u,null,-0,0)}}break}while(!0);Rt(e)}function sf(e,t,l,a,n,u,i,c,s,m,h,b,v,S){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},Po(t,u,b);var A=(u&62914560)===u?vu-ke():(u&4194048)===u?af-ke():0;if(A=Bv(b,A),A!==null){Vt=u,e.cancelPendingCommit=A(Sf.bind(null,e,t,u,l,a,n,i,c,s,h,b,null,v,S)),dl(e,u,i,!m);return}}Sf(e,t,u,l,a,n,i,c,s)}function Pm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!Pe(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dl(e,t,l,a){t&=~Cc,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-$e(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Ss(e,l,t)}function hu(){return(F&6)===0?(rn(0),!1):!0}function Mc(){if(Q!==null){if(P===0)var e=Q.return;else e=Q,Nt=zl=null,Xi(e),sa=null,Xa=0,e=Q;for(;e!==null;)Lo(e.alternate,e),e=e.return;Q=null}}function ya(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,gv(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Vt=0,Mc(),ie=e,Q=l=Ht(e.current,null),Y=t,P=0,at=null,sl=!1,pa=Ra(e,t),Tc=!1,Sa=nt=Cc=wl=rl=me=0,Ve=cn=null,Dc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-$e(a),u=1<<n;t|=e[n],a&=~u}return Zt=t,Ln(),l}function rf(e,t){B=null,y.H=$a,t===ca||t===Vn?(t=Cr(),P=3):t===ji?(t=Cr(),P=4):P=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,at=t,Q===null&&(me=1,iu(e,ot(t,e.current)))}function of(){var e=tt.current;return e===null?!0:(Y&4194048)===Y?vt===null:(Y&62914560)===Y||(Y&536870912)!==0?e===vt:!1}function ff(){var e=y.H;return y.H=$a,e===null?$a:e}function df(){var e=y.A;return y.A=Im,e}function yu(){me=4,sl||(Y&4194048)!==Y&&tt.current!==null||(pa=!0),(rl&134217727)===0&&(wl&134217727)===0||ie===null||dl(ie,Y,nt,!1)}function qc(e,t,l){var a=F;F|=2;var n=ff(),u=df();(ie!==e||Y!==t)&&(Su=null,ya(e,t)),t=!1;var i=me;e:do try{if(P!==0&&Q!==null){var c=Q,s=at;switch(P){case 8:Mc(),i=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=P;if(P=0,at=null,ga(e,c,s,m),l&&pa){i=0;break e}break;default:m=P,P=0,at=null,ga(e,c,s,m)}}ev(),i=me;break}catch(h){rf(e,h)}while(!0);return t&&e.shellSuspendCounter++,Nt=zl=null,F=a,y.H=n,y.A=u,Q===null&&(ie=null,Y=0,Ln()),i}function ev(){for(;Q!==null;)mf(Q)}function tv(e,t){var l=F;F|=2;var a=ff(),n=df();ie!==e||Y!==t?(Su=null,pu=ke()+500,ya(e,t)):pa=Ra(e,t);e:do try{if(P!==0&&Q!==null){t=Q;var u=at;t:switch(P){case 1:P=0,at=null,ga(e,t,u,1);break;case 2:case 9:if(Er(u)){P=0,at=null,vf(t);break}t=function(){P!==2&&P!==9||ie!==e||(P=7),Rt(e)},u.then(t,t);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:Er(u)?(P=0,at=null,vf(t)):(P=0,at=null,ga(e,t,u,7));break;case 5:var i=null;switch(Q.tag){case 26:i=Q.memoizedState;case 5:case 27:var c=Q;if(i?Pf(i):c.stateNode.complete){P=0,at=null;var s=c.sibling;if(s!==null)Q=s;else{var m=c.return;m!==null?(Q=m,gu(m)):Q=null}break t}}P=0,at=null,ga(e,t,u,5);break;case 6:P=0,at=null,ga(e,t,u,6);break;case 8:Mc(),me=6;break e;default:throw Error(p(462))}}lv();break}catch(h){rf(e,h)}while(!0);return Nt=zl=null,y.H=a,y.A=n,F=l,Q!==null?0:(ie=null,Y=0,Ln(),me)}function lv(){for(;Q!==null&&!Ad();)mf(Q)}function mf(e){var t=_o(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?gu(e):Q=t}function vf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=zo(l,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=zo(l,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Xi(t);default:Lo(l,t),t=Q=or(t,Zt),t=_o(l,t,Zt)}e.memoizedProps=e.pendingProps,t===null?gu(e):Q=t}function ga(e,t,l,a){Nt=zl=null,Xi(t),sa=null,Xa=0;var n=t.return;try{if(Xm(e,n,t,l,Y)){me=1,iu(e,ot(l,e.current)),Q=null;return}}catch(u){if(n!==null)throw Q=n,u;me=1,iu(e,ot(l,e.current)),Q=null;return}t.flags&32768?(Z||a===1?e=!0:pa||(Y&536870912)!==0?e=!1:(sl=e=!0,(a===2||a===9||a===3||a===6)&&(a=tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),pf(t,e)):gu(t)}function gu(e){var t=e;do{if((t.flags&32768)!==0){pf(t,sl);return}e=t.return;var l=Km(t.alternate,t,Zt);if(l!==null){Q=l;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);me===0&&(me=5)}function pf(e,t){do{var l=Wm(e.alternate,e);if(l!==null){l.flags&=32767,Q=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=l}while(e!==null);me=6,Q=null}function Sf(e,t,l,a,n,u,i,c,s){e.cancelPendingCommit=null;do bu();while(Te!==0);if((F&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(u=t.lanes|t.childLanes,u|=hi,Nd(e,l,u,i,c,s),e===ie&&(Q=ie=null,Y=0),ha=t,fl=e,Vt=l,Ac=u,xc=n,nf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iv(Tn,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,n=C.p,C.p=2,i=F,F|=4;try{Fm(e,t,l)}finally{F=i,C.p=n,y.T=a}}Te=1,hf(),yf(),gf()}}function hf(){if(Te===1){Te=0;var e=fl,t=ha,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=C.p;C.p=2;var n=F;F|=4;try{ko(t,e);var u=Gc,i=tr(e.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&er(c.ownerDocument.documentElement,c)){if(s!==null&&di(c)){var m=s.start,h=s.end;if(h===void 0&&(h=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(h,c.value.length);else{var b=c.ownerDocument||document,v=b&&b.defaultView||window;if(v.getSelection){var S=v.getSelection(),A=c.textContent.length,O=Math.min(s.start,A),ne=s.end===void 0?O:Math.min(s.end,A);!S.extend&&O>ne&&(i=ne,ne=O,O=i);var f=Ps(c,O),r=Ps(c,ne);if(f&&r&&(S.rangeCount!==1||S.anchorNode!==f.node||S.anchorOffset!==f.offset||S.focusNode!==r.node||S.focusOffset!==r.offset)){var d=b.createRange();d.setStart(f.node,f.offset),S.removeAllRanges(),O>ne?(S.addRange(d),S.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),S.addRange(d))}}}}for(b=[],S=c;S=S.parentNode;)S.nodeType===1&&b.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}ju=!!Qc,Gc=Qc=null}finally{F=n,C.p=a,y.T=l}}e.current=t,Te=2}}function yf(){if(Te===2){Te=0;var e=fl,t=ha,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=C.p;C.p=2;var n=F;F|=4;try{Zo(e,t.alternate,t)}finally{F=n,C.p=a,y.T=l}}Te=3}}function gf(){if(Te===4||Te===3){Te=0,xd();var e=fl,t=ha,l=Vt,a=nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,ha=fl=null,bf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ol=null),Ku(l),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(xa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,n=C.p,C.p=2,y.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{y.T=t,C.p=n}}(Vt&3)!==0&&bu(),Rt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Rc?sn++:(sn=0,Rc=e):sn=0,rn(0)}}function bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ya(t)))}function bu(){return hf(),yf(),gf(),Ef()}function Ef(){if(Te!==5)return!1;var e=fl,t=Ac;Ac=0;var l=Ku(Vt),a=y.T,n=C.p;try{C.p=32>l?32:l,y.T=null,l=xc,xc=null;var u=fl,i=Vt;if(Te=0,ha=fl=null,Vt=0,(F&6)!==0)throw Error(p(331));var c=F;if(F|=4,tf(u.current),$o(u,u.current,i,l),F=c,rn(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(xa,u)}catch{}return!0}finally{C.p=n,y.T=a,bf(e,t)}}function Tf(e,t,l){t=ot(l,t),t=uc(e.stateNode,t,2),e=nl(e,t,2),e!==null&&(Ma(e,2),Rt(e))}function ee(e,t,l){if(e.tag===3)Tf(e,e,l);else for(;t!==null;){if(t.tag===3){Tf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ol===null||!ol.has(a))){e=ot(l,e),l=To(2),a=nl(t,l,2),a!==null&&(Co(l,a,t,e),Ma(a,2),Rt(a));break}}t=t.return}}function zc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new $m;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Tc=!0,n.add(l),e=av.bind(null,e,t,l),t.then(e,e))}function av(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ie===e&&(Y&l)===l&&(me===4||me===3&&(Y&62914560)===Y&&300>ke()-vu?(F&2)===0&&ya(e,0):Cc|=l,Sa===Y&&(Sa=0)),Rt(e)}function Cf(e,t){t===0&&(t=ps()),e=Rl(e,t),e!==null&&(Ma(e,t),Rt(e))}function nv(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Cf(e,l)}function uv(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(p(314))}a!==null&&a.delete(t),Cf(e,l)}function iv(e,t){return Ju(e,t)}var Eu=null,ba=null,Oc=!1,Tu=!1,jc=!1,ml=0;function Rt(e){e!==ba&&e.next===null&&(ba===null?Eu=ba=e:ba=ba.next=e),Tu=!0,Oc||(Oc=!0,sv())}function rn(e,t){if(!jc&&Tu){jc=!0;do for(var l=!1,a=Eu;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-$e(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,Rf(a,u))}else u=Y,u=xn(a,a===ie?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ra(a,u)||(l=!0,Rf(a,u));a=a.next}while(l);jc=!1}}function cv(){Df()}function Df(){Tu=Oc=!1;var e=0;ml!==0&&yv()&&(e=ml);for(var t=ke(),l=null,a=Eu;a!==null;){var n=a.next,u=Af(a,t);u===0?(a.next=null,l===null?Eu=n:l.next=n,n===null&&(ba=l)):(l=a,(e!==0||(u&3)!==0)&&(Tu=!0)),a=n}Te!==0&&Te!==5||rn(e),ml!==0&&(ml=0)}function Af(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-$e(u),c=1<<i,s=n[i];s===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Ud(c,t)):s<=t&&(e.expiredLanes|=c),u&=~c}if(t=ie,l=Y,l=xn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(P===2||P===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ra(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Xu(a),Ku(l)){case 2:case 8:l=ms;break;case 32:l=Tn;break;case 268435456:l=vs;break;default:l=Tn}return a=xf.bind(null,e),l=Ju(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Xu(a),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(bu()&&e.callbackNode!==l)return null;var a=Y;return a=xn(e,e===ie?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cf(e,a,t),Af(e,ke()),e.callbackNode!=null&&e.callbackNode===l?xf.bind(null,e):null)}function Rf(e,t){if(bu())return null;cf(e,t,!0)}function sv(){bv(function(){(F&6)!==0?Ju(ds,cv):Df()})}function Hc(){if(ml===0){var e=ua;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),ml=e}return ml}function Mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zn(""+e)}function qf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function rv(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=Mf((n[Ge]||null).action),i=a.submitter;i&&(t=(t=i[Ge]||null)?Mf(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Un("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ml!==0){var s=i?qf(n,i):new FormData(n);Pi(l,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?qf(n,i):new FormData(n),Pi(l,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var Uc=0;Uc<Si.length;Uc++){var Nc=Si[Uc],ov=Nc.toLowerCase(),fv=Nc[0].toUpperCase()+Nc.slice(1);yt(ov,"on"+fv)}yt(nr,"onAnimationEnd"),yt(ur,"onAnimationIteration"),yt(ir,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(Rm,"onTransitionRun"),yt(Mm,"onTransitionStart"),yt(qm,"onTransitionCancel"),yt(cr,"onTransitionEnd"),Zl("onMouseEnter",["mouseout","mouseover"]),Zl("onMouseLeave",["mouseout","mouseover"]),Zl("onPointerEnter",["pointerout","pointerover"]),Zl("onPointerLeave",["pointerout","pointerover"]),Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));function zf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(h){Bn(h)}n.currentTarget=null,u=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,m=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(h){Bn(h)}n.currentTarget=null,u=s}}}}function G(e,t){var l=t[Wu];l===void 0&&(l=t[Wu]=new Set);var a=e+"__bubble";l.has(a)||(Of(t,e,2,!1),l.add(a))}function _c(e,t,l){var a=0;t&&(a|=4),Of(l,e,a,t)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[Cu]){e[Cu]=!0,Ts.forEach(function(l){l!=="selectionchange"&&(dv.has(l)||_c(l,!1,e),_c(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cu]||(t[Cu]=!0,_c("selectionchange",!1,t))}}function Of(e,t,l,a){switch(id(t)){case 2:var n=Qv;break;case 8:n=Gv;break;default:n=$c}l=n.bind(null,t,l,e),n=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Lc(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Yl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=u=i;continue e}c=c.parentNode}}a=a.return}Us(function(){var m=u,h=ti(l),b=[];e:{var v=sr.get(e);if(v!==void 0){var S=Un,A=e;switch(e){case"keypress":if(jn(l)===0)break e;case"keydown":case"keyup":S=um;break;case"focusin":A="focus",S=ci;break;case"focusout":A="blur",S=ci;break;case"beforeblur":case"afterblur":S=ci;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=sm;break;case nr:case ur:case ir:S=kd;break;case cr:S=om;break;case"scroll":case"scrollend":S=Zd;break;case"wheel":S=dm;break;case"copy":case"cut":case"paste":S=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ws;break;case"toggle":case"beforetoggle":S=vm}var O=(t&4)!==0,ne=!O&&(e==="scroll"||e==="scrollend"),f=O?v!==null?v+"Capture":null:v;O=[];for(var r=m,d;r!==null;){var g=r;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||f===null||(g=Oa(r,f),g!=null&&O.push(fn(r,g,d))),ne)break;r=r.return}0<O.length&&(v=new S(v,A,null,l,h),b.push({event:v,listeners:O}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&l!==ei&&(A=l.relatedTarget||l.fromElement)&&(Yl(A)||A[Gl]))break e;if((S||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,S?(A=l.relatedTarget||l.toElement,S=m,A=A?Yl(A):null,A!==null&&(ne=W(A),O=A.tag,A!==ne||O!==5&&O!==27&&O!==6)&&(A=null)):(S=null,A=m),S!==A)){if(O=Bs,g="onMouseLeave",f="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(O=ws,g="onPointerLeave",f="onPointerEnter",r="pointer"),ne=S==null?v:za(S),d=A==null?v:za(A),v=new O(g,r+"leave",S,l,h),v.target=ne,v.relatedTarget=d,g=null,Yl(h)===m&&(O=new O(f,r+"enter",A,l,h),O.target=d,O.relatedTarget=ne,g=O),ne=g,S&&A)t:{for(O=mv,f=S,r=A,d=0,g=f;g;g=O(g))d++;g=0;for(var q=r;q;q=O(q))g++;for(;0<d-g;)f=O(f),d--;for(;0<g-d;)r=O(r),g--;for(;d--;){if(f===r||r!==null&&f===r.alternate){O=f;break t}f=O(f),r=O(r)}O=null}else O=null;S!==null&&jf(b,v,S,O,!1),A!==null&&ne!==null&&jf(b,ne,A,O,!0)}}e:{if(v=m?za(m):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var V=Ks;else if(Zs(v))if(Ws)V=Dm;else{V=Tm;var M=Em}else S=v.nodeName,!S||S.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Pu(m.elementType)&&(V=Ks):V=Cm;if(V&&(V=V(e,m))){Vs(b,V,l,h);break e}M&&M(e,v,m),e==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&$u(v,"number",v.value)}switch(M=m?za(m):window,e){case"focusin":(Zs(M)||M.contentEditable==="true")&&(Il=M,mi=m,wa=null);break;case"focusout":wa=mi=Il=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,lr(b,l,h);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":lr(b,l,h)}var L;if(ri)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else kl?Js(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(Qs&&l.locale!=="ko"&&(kl||J!=="onCompositionStart"?J==="onCompositionEnd"&&kl&&(L=Ns()):(It=h,ni="value"in It?It.value:It.textContent,kl=!0)),M=Du(m,J),0<M.length&&(J=new Ls(J,e,null,l,h),b.push({event:J,listeners:M}),L?J.data=L:(L=Xs(l),L!==null&&(J.data=L)))),(L=Sm?hm(e,l):ym(e,l))&&(J=Du(m,"onBeforeInput"),0<J.length&&(M=new Ls("onBeforeInput","beforeinput",null,l,h),b.push({event:M,listeners:J}),M.data=L)),rv(b,e,m,l,h)}zf(b,t)})}function fn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Du(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Oa(e,l),n!=null&&a.unshift(fn(e,n,u)),n=Oa(e,t),n!=null&&a.push(fn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function mv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jf(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Oa(l,u),m!=null&&i.unshift(fn(l,m,s))):n||(m=Oa(l,u),m!=null&&i.push(fn(l,m,s)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var vv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(vv,`
`).replace(pv,"")}function Uf(e,t){return t=Hf(t),Hf(e)===t}function ae(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Kl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Kl(e,""+a);break;case"className":Mn(e,"class",a);break;case"tabIndex":Mn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(e,l,a);break;case"style":js(e,a,u);break;case"data":if(t!=="object"){Mn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&ae(e,t,"name",n.name,n,null),ae(e,t,"formEncType",n.formEncType,n,null),ae(e,t,"formMethod",n.formMethod,n,null),ae(e,t,"formTarget",n.formTarget,n,null)):(ae(e,t,"encType",n.encType,n,null),ae(e,t,"method",n.method,n,null),ae(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=zn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"onScroll":a!=null&&G("scroll",e);break;case"onScrollEnd":a!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=zn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":G("beforetoggle",e),G("toggle",e),Rn(e,"popover",a);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Rn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Jd.get(l)||l,Rn(e,l,a))}}function wc(e,t,l,a,n,u){switch(l){case"style":js(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(p(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(p(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Kl(e,a):(typeof a=="number"||typeof a=="bigint")&&Kl(e,""+a);break;case"onScroll":a!=null&&G("scroll",e);break;case"onScrollEnd":a!=null&&G("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Ge]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Rn(e,l,a)}}}function qe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ae(e,t,u,i,l,null)}}n&&ae(e,t,"srcSet",l.srcSet,l,null),a&&ae(e,t,"src",l.src,l,null);return;case"input":G("invalid",e);var c=u=i=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var h=l[a];if(h!=null)switch(a){case"name":n=h;break;case"type":i=h;break;case"checked":s=h;break;case"defaultChecked":m=h;break;case"value":u=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,t));break;default:ae(e,t,a,h,l,null)}}Ms(e,u,c,s,m,i,n,!1);return;case"select":G("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ae(e,t,n,c,l,null)}t=u,l=i,e.multiple=!!a,t!=null?Vl(e,!!a,t,!1):l!=null&&Vl(e,!!a,l,!0);return;case"textarea":G("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(91));break;default:ae(e,t,i,c,l,null)}zs(e,a,n,u);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ae(e,t,s,a,l,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(a=0;a<on.length;a++)G(on[a],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ae(e,t,m,a,l,null)}return;default:if(Pu(t)){for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!==void 0&&wc(e,t,h,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ae(e,t,c,a,l,null))}function Sv(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,m=null,h=null;for(S in l){var b=l[S];if(l.hasOwnProperty(S)&&b!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":s=b;default:a.hasOwnProperty(S)||ae(e,t,S,null,a,b)}}for(var v in a){var S=a[v];if(b=l[v],a.hasOwnProperty(v)&&(S!=null||b!=null))switch(v){case"type":u=S;break;case"name":n=S;break;case"checked":m=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:S!==b&&ae(e,t,v,S,a,b)}}Iu(e,i,c,s,m,h,u,n);return;case"select":S=i=c=v=null;for(u in l)if(s=l[u],l.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":S=s;default:a.hasOwnProperty(u)||ae(e,t,u,null,a,s)}for(n in a)if(u=a[n],s=l[n],a.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&ae(e,t,n,u,a,s)}t=c,l=i,a=S,v!=null?Vl(e,!!l,v,!1):!!a!=!!l&&(t!=null?Vl(e,!!l,t,!0):Vl(e,!!l,l?[]:"",!1));return;case"textarea":S=v=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ae(e,t,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==u&&ae(e,t,i,n,a,u)}qs(e,v,S);return;case"option":for(var A in l)if(v=l[A],l.hasOwnProperty(A)&&v!=null&&!a.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:ae(e,t,A,null,a,v)}for(s in a)if(v=a[s],S=l[s],a.hasOwnProperty(s)&&v!==S&&(v!=null||S!=null))switch(s){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ae(e,t,s,v,a,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in l)v=l[O],l.hasOwnProperty(O)&&v!=null&&!a.hasOwnProperty(O)&&ae(e,t,O,null,a,v);for(m in a)if(v=a[m],S=l[m],a.hasOwnProperty(m)&&v!==S&&(v!=null||S!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(p(137,t));break;default:ae(e,t,m,v,a,S)}return;default:if(Pu(t)){for(var ne in l)v=l[ne],l.hasOwnProperty(ne)&&v!==void 0&&!a.hasOwnProperty(ne)&&wc(e,t,ne,void 0,a,v);for(h in a)v=a[h],S=l[h],!a.hasOwnProperty(h)||v===S||v===void 0&&S===void 0||wc(e,t,h,v,a,S);return}}for(var f in l)v=l[f],l.hasOwnProperty(f)&&v!=null&&!a.hasOwnProperty(f)&&ae(e,t,f,null,a,v);for(b in a)v=a[b],S=l[b],!a.hasOwnProperty(b)||v===S||v==null&&S==null||ae(e,t,b,v,a,S)}function Nf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Nf(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var h=s.transferSize,b=s.initiatorType;h&&Nf(b)&&(s=s.responseEnd,i+=h*(s<c?1:(c-m)/(s-m)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Gc=null;function Au(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=null;function yv(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(e){return wf.resolve(null).then(e).catch(Ev)}:Lf;function Ev(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function Qf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Da(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")dn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,dn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[qa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&dn(e.ownerDocument.body);l=n}while(l);Da(t)}function Gf(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Xc(l),Fu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Tv(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[qa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Cv(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=pt(e.nextSibling),e===null))return null;return e}function Yf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dv(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kc=null;function Jf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return pt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Zf(e,t,l){switch(t=Au(l),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fu(e)}var St=new Map,Vf=new Set;function xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=C.d;C.d={f:Av,r:xv,D:Rv,C:Mv,L:qv,m:zv,X:jv,S:Ov,M:Hv};function Av(){var e=Kt.f(),t=hu();return e||t}function xv(e){var t=Jl(e);t!==null&&t.tag===5&&t.type==="form"?co(t):Kt.r(e)}var Ea=typeof document>"u"?null:document;function Kf(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Vf.has(n)||(Vf.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),qe(t,"link",e),Ce(t),a.head.appendChild(t)))}}function Rv(e){Kt.D(e),Kf("dns-prefetch",e,null)}function Mv(e,t){Kt.C(e,t),Kf("preconnect",e,t)}function qv(e,t,l){Kt.L(e,t,l);var a=Ea;if(a&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+st(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+st(l.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var u=n;switch(t){case"style":u=Ta(e);break;case"script":u=Ca(e)}St.has(u)||(e=H({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),St.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(mn(u))||t==="script"&&a.querySelector(vn(u))||(t=a.createElement("link"),qe(t,"link",e),Ce(t),a.head.appendChild(t)))}}function zv(e,t){Kt.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ca(e)}if(!St.has(u)&&(e=H({rel:"modulepreload",href:e},t),St.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(u)))return}a=l.createElement("link"),qe(a,"link",e),Ce(a),l.head.appendChild(a)}}}function Ov(e,t,l){Kt.S(e,t,l);var a=Ea;if(a&&e){var n=Xl(a).hoistableStyles,u=Ta(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(mn(u)))c.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},l),(l=St.get(u))&&Wc(e,l);var s=i=a.createElement("link");Ce(s),qe(s,"link",e),s._p=new Promise(function(m,h){s.onload=m,s.onerror=h}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ru(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function jv(e,t){Kt.X(e,t);var l=Ea;if(l&&e){var a=Xl(l).hoistableScripts,n=Ca(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=H({src:e,async:!0},t),(t=St.get(n))&&Fc(e,t),u=l.createElement("script"),Ce(u),qe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Hv(e,t){Kt.M(e,t);var l=Ea;if(l&&e){var a=Xl(l).hoistableScripts,n=Ca(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=H({src:e,async:!0,type:"module"},t),(t=St.get(n))&&Fc(e,t),u=l.createElement("script"),Ce(u),qe(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Wf(e,t,l,a){var n=(n=w.current)?xu(n):null;if(!n)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ta(l.href),l=Xl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ta(l.href);var u=Xl(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(mn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),St.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},St.set(e,l),u||Uv(n,e,l,i.state))),t&&a===null)throw Error(p(528,""));return i}if(t&&a!==null)throw Error(p(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ca(l),l=Xl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Ta(e){return'href="'+st(e)+'"'}function mn(e){return'link[rel="stylesheet"]['+e+"]"}function Ff(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function Uv(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),qe(t,"link",l),Ce(t),e.head.appendChild(t))}function Ca(e){return'[src="'+st(e)+'"]'}function vn(e){return"script[async]"+e}function kf(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+st(l.href)+'"]');if(a)return t.instance=a,Ce(a),a;var n=H({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ce(a),qe(a,"style",n),Ru(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ta(l.href);var u=e.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,Ce(u),u;a=Ff(l),(n=St.get(n))&&Wc(a,n),u=(e.ownerDocument||e).createElement("link"),Ce(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),qe(u,"link",a),t.state.loading|=4,Ru(u,l.precedence,e),t.instance=u;case"script":return u=Ca(l.src),(n=e.querySelector(vn(u)))?(t.instance=n,Ce(n),n):(a=l,(n=St.get(u))&&(a=H({},l),Fc(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),qe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ru(a,l.precedence,e));return t.instance}function Ru(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mu=null;function If(e,t,l){if(Mu===null){var a=new Map,n=Mu=new Map;n.set(l,a)}else n=Mu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[qa]||u[Ae]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function $f(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Nv(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _v(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ta(a.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Ce(u);return}u=t.ownerDocument||t,a=Ff(a),(n=St.get(n))&&Wc(a,n),u=u.createElement("link"),Ce(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),qe(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=qu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var kc=0;function Bv(e,t){return e.stylesheets&&e.count===0&&Ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&kc===0&&(kc=62500*hv());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>kc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function qu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zu=null;function Ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zu=new Map,t.forEach(Lv,e),zu=null,qu.call(e))}function Lv(e,t){if(!(t.state.loading&4)){var l=zu.get(e);if(l)var a=l.get(null);else{l=new Map,zu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=qu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:ze,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function wv(e,t,l,a,n,u,i,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.hiddenUpdates=Zu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ed(e,t,l,a,n,u,i,c,s,m,h,b){return e=new wv(e,t,l,i,s,m,h,b,c),t=1,u===!0&&(t|=24),u=et(3,null,null,t),e.current=u,u.stateNode=e,t=qi(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},Hi(u),e}function td(e){return e?(e=ea,e):ea}function ld(e,t,l,a,n,u){n=td(n),a.context===null?a.context=n:a.pendingContext=n,a=al(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=nl(e,a,t),l!==null&&(Ke(l,e,t),Va(l,e,t))}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ic(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function nd(e){if(e.tag===13||e.tag===31){var t=Rl(e,67108864);t!==null&&Ke(t,e,67108864),Ic(e,67108864)}}function ud(e){if(e.tag===13||e.tag===31){var t=ut();t=Vu(t);var l=Rl(e,t);l!==null&&Ke(l,e,t),Ic(e,t)}}var ju=!0;function Qv(e,t,l,a){var n=y.T;y.T=null;var u=C.p;try{C.p=2,$c(e,t,l,a)}finally{C.p=u,y.T=n}}function Gv(e,t,l,a){var n=y.T;y.T=null;var u=C.p;try{C.p=8,$c(e,t,l,a)}finally{C.p=u,y.T=n}}function $c(e,t,l,a){if(ju){var n=Pc(a);if(n===null)Lc(e,t,a,Hu,l),cd(e,a);else if(Jv(n,e,t,l,a))a.stopPropagation();else if(cd(e,a),t&4&&-1<Yv.indexOf(e)){for(;n!==null;){var u=Jl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Tl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-$e(i);c.entanglements[1]|=s,i&=~s}Rt(u),(F&6)===0&&(pu=ke()+500,rn(0))}}break;case 31:case 13:c=Rl(u,2),c!==null&&Ke(c,u,2),hu(),Ic(u,2)}if(u=Pc(a),u===null&&Lc(e,t,a,Hu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Lc(e,t,a,null,l)}}function Pc(e){return e=ti(e),es(e)}var Hu=null;function es(e){if(Hu=null,e=Yl(e),e!==null){var t=W(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ve(t),e!==null)return e;e=null}else if(l===31){if(e=je(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hu=e,null}function id(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case ds:return 2;case ms:return 8;case Tn:case Md:return 32;case vs:return 268435456;default:return 32}default:return 32}}var ts=!1,pl=null,Sl=null,hl=null,Sn=new Map,hn=new Map,yl=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":pl=null;break;case"dragenter":case"dragleave":Sl=null;break;case"mouseover":case"mouseout":hl=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function yn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Jl(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Jv(e,t,l,a,n){switch(t){case"focusin":return pl=yn(pl,e,t,l,a,n),!0;case"dragenter":return Sl=yn(Sl,e,t,l,a,n),!0;case"mouseover":return hl=yn(hl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return Sn.set(u,yn(Sn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,hn.set(u,yn(hn.get(u)||null,e,t,l,a,n)),!0}return!1}function sd(e){var t=Yl(e.target);if(t!==null){var l=W(t);if(l!==null){if(t=l.tag,t===13){if(t=ve(l),t!==null){e.blockedOn=t,bs(e.priority,function(){ud(l)});return}}else if(t===31){if(t=je(l),t!==null){e.blockedOn=t,bs(e.priority,function(){ud(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Pc(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ei=a,l.target.dispatchEvent(a),ei=null}else return t=Jl(l),t!==null&&nd(t),e.blockedOn=l,!1;t.shift()}return!0}function rd(e,t,l){Uu(e)&&l.delete(t)}function Xv(){ts=!1,pl!==null&&Uu(pl)&&(pl=null),Sl!==null&&Uu(Sl)&&(Sl=null),hl!==null&&Uu(hl)&&(hl=null),Sn.forEach(rd),hn.forEach(rd)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Xv)))}var _u=null;function od(e){_u!==e&&(_u=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(es(a||l)===null)continue;break}var u=Jl(l);u!==null&&(e.splice(t,3),t-=3,Pi(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Da(e){function t(s){return Nu(s,e)}pl!==null&&Nu(pl,e),Sl!==null&&Nu(Sl,e),hl!==null&&Nu(hl,e),Sn.forEach(t),hn.forEach(t);for(var l=0;l<yl.length;l++){var a=yl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<yl.length&&(l=yl[0],l.blockedOn===null);)sd(l),l.blockedOn===null&&yl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Ge]||null;if(typeof u=="function")i||od(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ge]||null)c=i.formAction;else if(es(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),od(l)}}}function fd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ls(e){this._internalRoot=e}Bu.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var l=t.current,a=ut();ld(l,a,e,t,null,null)},Bu.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ld(e.current,2,null,e,null,null),hu(),t[Gl]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=gs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<yl.length&&t!==0&&t<yl[l].priority;l++);yl.splice(l,0,e),l===0&&sd(e)}};var dd=fe.version;if(dd!=="19.2.4")throw Error(p(527,dd,"19.2.4"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=T(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Zv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{xa=Lu.inject(Zv),Ie=Lu}catch{}}return bn.createRoot=function(e,t){if(!j(e))throw Error(p(299));var l=!1,a="",n=yo,u=go,i=bo;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ed(e,1,!1,null,null,l,a,null,n,u,i,fd),e[Gl]=t.current,Bc(e),new ls(t)},bn.hydrateRoot=function(e,t,l){if(!j(e))throw Error(p(299));var a=!1,n="",u=yo,i=go,c=bo,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=ed(e,1,!0,t,l??null,a,n,s,u,i,c,fd),t.context=td(null),l=t.current,a=ut(),a=Vu(a),n=al(a),n.callback=null,nl(l,n,a),l=a,t.current.lanes=l,Ma(t,l),Rt(t),e[Gl]=t.current,Bc(e),new Bu(t)},bn.version="19.2.4",bn}var Td;function tp(){if(Td)return us.exports;Td=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(fe){console.error(fe)}}return x(),us.exports=ep(),us.exports}var lp=tp();function ap(){const[x,fe]=Cd.useState(null),k=[{id:1,question:"1. What is JDBC? Explain JDBC Architecture. (Definition + Application, DriverManager, Driver, DB)",answer:"📌 Very high probability long answer",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],p=j=>{fe(x===j?null:j)};return _e.jsxs("div",{className:"app-container",children:[_e.jsx("h1",{children:"ADVANCE JAVA Interview Questions"}),_e.jsx("div",{className:"questions-container",children:k.map(j=>_e.jsxs("div",{className:"question-item",children:[_e.jsx("button",{className:`question-button ${x===j.id?"active":""}`,onClick:()=>p(j.id),children:j.question}),x===j.id&&_e.jsxs("div",{className:"answer-container",children:[_e.jsxs("div",{className:"answer",children:[_e.jsx("h3",{children:"Answer:"}),_e.jsx("p",{children:j.answer})]}),j.codeExample&&_e.jsxs("div",{className:"code-example",children:[_e.jsx("h3",{children:"Code Example:"}),_e.jsx("pre",{children:_e.jsx("code",{children:j.codeExample})})]})]})]},j.id))})]})}lp.createRoot(document.getElementById("root")).render(_e.jsx(Cd.StrictMode,{children:_e.jsx(ap,{})}));
