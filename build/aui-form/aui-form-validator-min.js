AUI.add("aui-form-validator",function(S){var M=S.Lang,K=S.Object,h=M.isArray,n=M.isBoolean,g=M.isDate,X=K.isEmpty,U=M.isFunction,z=M.isNumber,t=M.isObject,N=M.isString,B=M.trim,Q="",P="form-validator",b="Invalid Date",j="|",G="checkbox",E="container",p="error",x="errorClass",m="errorContainer",D="form",s="message",Y="messages",C="messageContainer",o="name",r="radio",R="rules",w="showAllMessages",Z="showMessages",V="type",v="valid",e="validateOnBlur",q="validClass",c=P+"|blur",l="errorField",i="reset",a="submit",f="submitError",J="validateField",d="validField",I=S.ClassNameManager.getClassName,y=I(P,p),F=I(P,v),W=I(P,p,E),H=I(P,s,E),T='<label class="'+W+'"></label>',u='<div class="'+H+'"></div>';function k(){k.superclass.constructor.apply(this,arguments);}S.mix(k,{NAME:P,ATTRS:{errorContainer:{getter:function(A){return S.Node.create(A).cloneNode(true);},value:T},errorClass:{value:y,validator:N},form:{setter:S.one},messages:{value:{},validator:t},messageContainer:{getter:function(A){return S.Node.create(A).cloneNode(true);},value:u},rules:{validator:t,value:{}},showMessages:{value:true,validator:n},showAllMessages:{value:false,validator:n},validateOnBlur:{value:true,validator:n},validClass:{value:F,validator:N}},MESSAGES:{acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(AA,O,AB){var L=null;if(N(AB)){var A=AB.split(/,\s*|\b\s*/).join(j);L=new RegExp(".("+A+")$","i");}return L&&L.test(AA);},date:function(O,L,AA){var A=new Date(O);return(g(A)&&(A!=b)&&!isNaN(A));},equalTo:function(O,L,AA){var A=S.one(AA);return A&&(B(A.val())==O);},max:function(L,A,O){return(k.toNumber(L)<=O);},maxLength:function(L,A,O){return(L.length<=O);},min:function(L,A,O){return(k.toNumber(L)>=O);},minLength:function(L,A,O){return(L.length>=O);},range:function(O,L,AA){var A=k.toNumber(O);return(A>=AA[0])&&(A<=AA[1]);},rangeLength:function(O,L,AA){var A=O.length;return(A>=AA[0])&&(A<=AA[1]);},required:function(AB,O,AC){var A=this;if(S.FormValidator.isCheckable(O)){var L=O.get(o);var AA=A.getElementsByName(L);return(AA.filter(":checked").size()>0);}else{return !!AB;}}},isCheckable:function(L){var A=L.get(V).toLowerCase();return(A==G||A==r);},toNumber:function(A){return parseFloat(A)||0;}});S.each(k.REGEX,function(L,A){k.RULES[A]=function(AA,O,AB){return k.REGEX[A].test(AA);};});S.extend(k,S.Base,{errors:{},errorContainers:{},initializer:function(){var A=this;A.bindUI();},bindUI:function(){var A=this;A._createEvents();A._bindValidation();},addFieldError:function(AA,O){var A=this;var AB=A.errors;var L=AA.get(o);if(!AB[L]){AB[L]=[];}AB[L].push(O);},clearFieldError:function(L){var A=this;delete A.errors[L.get(o)];},clearErrors:function(){var A=this;A.errors={};},eachRule:function(L){var A=this;S.each(A.get(R),function(O,AA){if(U(L)){L.apply(A,[O,AA]);}});},getField:function(L){var A=this;if(N(L)){L=A.getElementsByName(L).item(0);}return L;},getFieldError:function(L){var A=this;return A.errors[L.get(o)];},hasErrors:function(){var A=this;return !X(A.errors);},getElementsByName:function(L){var A=this;return A.get(D).all('[name="'+L+'"]');},getFieldErrorContainer:function(AA){var A=this;
var L=AA.get(o);var O=A.errorContainers;if(!O[L]){O[L]=A.get(m);}return O[L];},getFieldErrorMessage:function(AC,AB){var AD=this;var AE=AC.get(o);var L=AD.get(Y)[AE]||{};var A=AD.get(R)[AE];var AA={};if(AB in A){var O=S.Array(A[AB]);S.each(O,function(AH,AG){AA[AG]=[AH].join(Q);});}var AF=(L[AB]||k.MESSAGES[AB]);return S.substitute(AF,AA);},highlight:function(AA){var L=this;var A=L.get(x);var O=L.get(q);AA.removeClass(O).addClass(A);},unhighlight:function(AA){var L=this;var A=L.get(x);var O=L.get(q);AA.removeClass(A).addClass(O);},printErrorStack:function(O,L,AA){var A=this;if(!A.get(w)){AA=AA.slice(0,1);}L.empty();S.each(AA,function(AC,AB){var AD=A.getFieldErrorMessage(O,AC);var AE=A.get(C).addClass(AC);L.append(AE.html(AD));});},resetField:function(AB){var L=this;var A=L.get(x);var AA=L.get(q);var O=L.getFieldErrorContainer(AB);O.remove();L.clearFieldError(AB);AB.removeClass(AA).removeClass(A);},validatable:function(O){var A=this;var AB=A.get(R)[O.get(o)];var AA=AB.required;var L=k.RULES.required.apply(A,[O.val(),O]);return(AA||(!AA&&L));},validate:function(){var A=this;A.eachRule(function(L,O){A.validateField(O);});},validateField:function(AA){var A=this;var O=A.getField(AA);var L=A.validatable(O);A.resetField(O);if(L){A.fire(J,{validator:{field:O}});}},_bindValidation:function(){var A=this;var L=A.get(D);A.eachRule(function(AA,AB){var O=A.getElementsByName(AB);O.on(c,S.bind(A._onBlurField,A));});L.on(i,S.bind(A._onFormReset,A));L.on(a,S.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var L=function(O,AA){A.publish(O,{defaultFn:AA});};L(l,A._defErrorFieldFn);L(d,A._defValidFieldFn);L(J,A._defValidateFieldFn);},_defErrorFieldFn:function(AA){var A=this;var O=AA.validator;var AB=O.field;A.highlight(AB);if(A.get(Z)){var L=A.getFieldErrorContainer(AB);AB.placeBefore(L);A.printErrorStack(AB,L,O.errors);}},_defValidFieldFn:function(L){var A=this;var O=L.validator.field;A.unhighlight(O);},_defValidateFieldFn:function(O){var L=this;var AA=O.validator.field;var AB=L.get(R)[AA.get(o)];S.each(AB,function(AF,AD){var AE=k.RULES[AD];var AC=B(AA.val());if(U(AE)&&!AE.apply(L,[AC,AA,AF])){L.addFieldError(AA,AD);}});var A=L.getFieldError(AA);if(A){L.fire(l,{validator:{field:AA,errors:A}});}else{L.fire(d,{validator:{field:AA}});}},_onBlurField:function(L){var A=this;if(A.get(e)){var O=L.currentTarget.get(o);A.validateField(O);}},_onFormSubmit:function(L){var A=this;var O={validator:{formEvent:L}};A.validate();if(A.hasErrors()){O.validator.errors=A.errors;A.fire(f,O);L.halt();}else{A.fire(a,O);}},_onFormReset:function(L){var A=this;A.eachRule(function(AA,AB){var O=A.getField(AB);A.resetField(O);});}});S.FormValidator=k;},"@VERSION@",{requires:["aui-base","substitute"]});