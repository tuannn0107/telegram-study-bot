<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>

<head>
    <title>Trang chủ</title>
    <link type="text/css" href="${pageContext.request.contextPath}/css/source/index.css" rel="stylesheet"/>
</head>

<body class="body-fixed">
<%-- Main Menu --%>
<img src="${pageContext.request.contextPath}/images/banner.png" style="width: 100%; border-bottom: 1px solid #0055a7;">
<%--<jsp:include page="common/header.jsp"/>--%>
<%-- Main content --%>
<div class="container-fluid">
    &nbsp;
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            Welcome to my page
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>
</body>
</html>
