/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("transition-native",function(B){var F="transitionstart",I="transitionend",G="-webkit-transition",J="WebkitTransition",C="-webkit-transition-property",E="-webkit-transition-duration",A="-webkit-transition-timing-function",H="webkitTransitionEnd",D=function(){this.init.apply(this,arguments);};D._reKeywords=/^(?:node|duration|iterations|easing)$/;D.useNative=false;if(G in B.config.doc.documentElement.style){D.useNative=true;D.supported=true;}B.Node.DOM_EVENTS[H]=1;D.NAME="transition";D.DEFAULT_EASING="ease-in-out";D.DEFAULT_DURATION=0.5;D.prototype={constructor:D,init:function(L,K){this._node=L;L._transition=this;this._config=K;this._duration=("duration" in K)?K.duration:this.constructor.DEFAULT_DURATION;this._easing=K.easing||this.constructor.DEFAULT_EASING;this._count=0;this._totalDuration=0;this._running=false;return this;},run:function(){if(!this._running){this._running=true;this._node.fire(F);this._start();}return this;},_start:function(){this._runNative();},_prepDur:function(K){K=parseFloat(K);if(K>this._totalDuration){this._totalDuration=K;}return K+"s";},_runNative:function(P){var W={},S=this,L=S._node._node.style,N=S._config,Q="",X=C+": ",V,R=E+": ",U=A+": ",O=S._node,M,K,T;if(N.transform&&!N["-webkit-transform"]){N["-webkit-transform"]=N.transform;delete N.transform;}for(T in N){if(!D._reKeywords.test(T)){W[T]=N[T];V=W[T];M=V;S._count++;if(typeof V.value!=="undefined"){M=V.value;}if(typeof M==="function"){M=M.call(O,O);}K=(typeof V.duration!=="undefined")?V.duration:S._duration;R+=S._prepDur(K)+",";U+=(V.easing||S._easing)+",";X+=T+",";Q+=T+": "+M+"; ";}}X=X.replace(/,$/,";");R=R.replace(/,$/,";");U=U.replace(/,$/,";");if(!S._hasEndEvent){O.on(H,this._onNativeEnd,this);}setTimeout(function(){L.cssText+=X+R+U+Q;},0);},_onNativeEnd:function(N){var L=N._event,M=this,K=M._node;M._hasEndEvent=true;K.fire(I,{elapsedTime:L.elapsedTime,propertyName:L.propertyName});M._count--;if(L.elapsedTime>=M._totalDuration&&M._count<=0){K._node.style[J]="";K.fire("transitionsend",{elapsedTime:L.elapsedTime});M._running=false;}},destroy:function(){this.detachAll();this._node=null;}};B.Transition=D;B.TransitionNative=D;B.Node.prototype.transition=function(K){var L=(this._transition)?this._transition.init(this,K):new D(this,K);L.run();return this;};},"3.2.0PR1",{requires:["node-base"]});