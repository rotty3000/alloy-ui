AUI.add("aui-input-handler",function(C){var B=C.Lang,H=B.isFunction,F="activeElement",G="ownerDocument",E=C.UA;var D={on:function(K,J,I){var L="input";if(!/chrome/i.test(E.agent)&&E.webkit&&E.version.major<=2){L="keypress";}else{if(E.ie){L="propertychange";}}var A=function(P){var N=this;var O=P.target;var M=P._event;if(P.type=="propertychange"){if(M&&(M.propertyName!="value")){return false;}}var Q=(O.get(G).get(F)==O);if(Q&&H(J)){J.apply(N,arguments);}};return C.Event.attach(L,A,I);}};C.Env.evt.plugins.input=D;if(C.Node){C.Node.DOM_EVENTS.input=D;}},"@VERSION@",{skinnable:false});