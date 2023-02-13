<%--
  ~ Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
  ~
  ~ WSO2 Inc. licenses this file to you under the Apache License,
  ~ Version 2.0 (the "License"); you may not use this file except
  ~ in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~ http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing,
  ~ software distributed under the License is distributed on an
  ~ "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  ~ KIND, either express or implied.  See the License for the
  ~ specific language governing permissions and limitations
  ~ under the License.
  --%>

<%@ page import="com.google.gson.Gson" %>
<%@ page import="org.apache.commons.lang3.StringUtils" %>
<%@ page import="org.owasp.encoder.Encode" %>
<%@ page import="java.io.File" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.AuthContextAPIClient" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.Constants" %>
<%@ page import="org.wso2.carbon.identity.core.util.IdentityUtil" %>
<%@ page import="java.util.Map" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="includes/localize.jsp" %>

<%!
    private static final String SERVER_AUTH_URL = "/api/identity/auth/v1.1/";
    private static final String DATA_AUTH_ERROR_URL = "data/AuthenticationError/";
    private static final String REQUEST_PARAM_ERROR_KEY = "errorKey";
%>

<%
    String stat = request.getParameter("status");
    String statusMessage = request.getParameter("statusMsg");
    // Check the error is null or whether there is no corresponding value in the resource bundle.
    if (stat == null || statusMessage == null) {
        String errorKey = request.getParameter(REQUEST_PARAM_ERROR_KEY);
        if (errorKey != null) {
            String authAPIURL = application.getInitParameter(Constants.AUTHENTICATION_REST_ENDPOINT_URL);
            if (StringUtils.isBlank(authAPIURL)) {
                authAPIURL = IdentityUtil.getServerURL(SERVER_AUTH_URL, true, true);
            }
            if (!authAPIURL.endsWith("/")) {
                authAPIURL += "/";
            }
            authAPIURL += DATA_AUTH_ERROR_URL + errorKey;
            String contextProperties = AuthContextAPIClient.getContextProperties(authAPIURL);
            Gson gson = new Gson();
            Map<String, Object> parameters = gson.fromJson(contextProperties, Map.class);
            if (parameters != null) {
                String statusParam = (String) parameters.get("status");
                String statusMessageParam = (String) parameters.get("statusMsg");
                    if (StringUtils.isNotEmpty(statusParam)) {
                        stat = AuthenticationEndpointUtil.customi18n(resourceBundle, statusParam);
                    }
                    if (StringUtils.isNotEmpty(statusMessageParam)) {
                        statusMessage = AuthenticationEndpointUtil.customi18n(resourceBundle, statusMessageParam);
                    }
                }
            }
            if (StringUtils.isEmpty(stat)) {
                stat = AuthenticationEndpointUtil.i18n(resourceBundle, "authentication.error");
            }
            if (StringUtils.isEmpty(statusMessage)) {
                statusMessage =  AuthenticationEndpointUtil.i18n(resourceBundle,
                        "something.went.wrong.during.authentication");
            }
    } else {
        String i18nErrorMapping = AuthenticationEndpointUtil.getErrorCodeToi18nMapping(
            stat, statusMessage);
        if (!(Constants.ErrorToi18nMappingConstants.INCORRECT_ERROR_MAPPING_KEY).equals(i18nErrorMapping)) {
            stat = AuthenticationEndpointUtil.customi18n(resourceBundle, stat);
            statusMessage = AuthenticationEndpointUtil.customi18n(resourceBundle, statusMessage);
        } else {
            stat = AuthenticationEndpointUtil.i18n(resourceBundle, "authentication.error");
            statusMessage =  AuthenticationEndpointUtil.i18n(resourceBundle,
                "something.went.wrong.during.authentication");
        }
    }
    session.invalidate();
%>

<!doctype html>
<html>
<head>
    <!-- header -->
    <%
        File headerFile = new File(getServletContext().getRealPath("extensions/header.jsp"));
        if (headerFile.exists()) {
    %>
        <jsp:include page="extensions/header.jsp"/>
    <% } else { %>
        <jsp:include page="includes/header.jsp"/>
    <% } %>
</head>
<body class="login-portal layout authentication-portal-layout">
    <main class="center-segment">
        <div class="ui container medium center aligned middle aligned">

            <!-- product-title -->
            <%
                File productTitleFile = new File(getServletContext().getRealPath("extensions/product-title.jsp"));
                if (productTitleFile.exists()) {
            %>
                <jsp:include page="extensions/product-title.jsp"/>
            <% } else { %>
                <jsp:include page="includes/product-title.jsp"/>
            <% } %>

            <div class="ui segment">
                <div class="segment-form">
                    <div class="ui visible negative message">
                        <div class="header"><%=Encode.forHtmlContent(stat)%></div>
                        <p><%=Encode.forHtmlContent(statusMessage)%></p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- product-footer -->
    <%
        File productFooterFile = new File(getServletContext().getRealPath("extensions/product-footer.jsp"));
        if (productFooterFile.exists()) {
    %>
        <jsp:include page="extensions/product-footer.jsp"/>
    <% } else { %>
        <jsp:include page="includes/product-footer.jsp"/>
    <% } %>

    <!-- footer -->
    <%
        File footerFile = new File(getServletContext().getRealPath("extensions/footer.jsp"));
        if (footerFile.exists()) {
    %>
        <jsp:include page="extensions/footer.jsp"/>
    <% } else { %>
        <jsp:include page="includes/footer.jsp"/>
    <% } %>
</body>
</html>
