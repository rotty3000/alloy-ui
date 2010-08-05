<%@ include file="/html/taglib/alloy/init.jsp" %>

<%
Map<String, Object> dynamicAttributes = (Map<String, Object>)request.getAttribute("alloy:nested-list:dynamicAttributes");
Map<String, Object> scopedAttributes = (Map<String, Object>)request.getAttribute("alloy:nested-list:scopedAttributes");

java.lang.Boolean _destroyed = (java.lang.Boolean)request.getAttribute("alloy:nested-list:destroyed");
java.lang.Boolean _initialized = (java.lang.Boolean)request.getAttribute("alloy:nested-list:initialized");
java.lang.String _afterDestroy = (java.lang.String)request.getAttribute("alloy:nested-list:afterDestroy");
java.lang.String _afterDestroyedChange = (java.lang.String)request.getAttribute("alloy:nested-list:afterDestroyedChange");
java.lang.String _afterInit = (java.lang.String)request.getAttribute("alloy:nested-list:afterInit");
java.lang.String _afterInitializedChange = (java.lang.String)request.getAttribute("alloy:nested-list:afterInitializedChange");
java.lang.String _onDestroy = (java.lang.String)request.getAttribute("alloy:nested-list:onDestroy");
java.lang.String _onDestroyedChange = (java.lang.String)request.getAttribute("alloy:nested-list:onDestroyedChange");
java.lang.String _onInit = (java.lang.String)request.getAttribute("alloy:nested-list:onInit");
java.lang.String _onInitializedChange = (java.lang.String)request.getAttribute("alloy:nested-list:onInitializedChange");
%>

<%@ include file="init-ext.jsp" %>

<%
if (_destroyed != null) {
	scopedAttributes.put("destroyed", _destroyed);
}

if (_initialized != null) {
	scopedAttributes.put("initialized", _initialized);
}

if (_afterDestroy != null) {
	scopedAttributes.put("afterDestroy", _afterDestroy);
}

if (_afterDestroyedChange != null) {
	scopedAttributes.put("afterDestroyedChange", _afterDestroyedChange);
}

if (_afterInit != null) {
	scopedAttributes.put("afterInit", _afterInit);
}

if (_afterInitializedChange != null) {
	scopedAttributes.put("afterInitializedChange", _afterInitializedChange);
}

if (_onDestroy != null) {
	scopedAttributes.put("onDestroy", _onDestroy);
}

if (_onDestroyedChange != null) {
	scopedAttributes.put("onDestroyedChange", _onDestroyedChange);
}

if (_onInit != null) {
	scopedAttributes.put("onInit", _onInit);
}

if (_onInitializedChange != null) {
	scopedAttributes.put("onInitializedChange", _onInitializedChange);
}

%>

<alloy:createConfig
	excludeAttributes="var,javaScriptAttributes"
	tagPageContext="<%= pageContext %>"
	tagDynamicAttributes="<%= dynamicAttributes %>"
	tagScopedAttributes="<%= scopedAttributes %>"
	var="options"
/>