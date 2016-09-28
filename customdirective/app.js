//@author - Arun Kumar Madas

var app = angular.module("stockapp",[]);

//directives are created with .directive
//directive names should be camel cased when creating and should be used with hyphens when using.
// example define directive name as "stockValue" and use it as "stock-value" element tag
// Directives can be used in 4 ways :
	// Element
	// html attribute
	// html comment
	// CSS class name

app.directive("stockValue",function(){
	return {
		template : "<h2>Stock Price : $99.00</h2>"
	};
});

app.directive("stockValueAsComment",function(){
	return {
		restrict : "M",
        replace : true,
		template : "<h3>Stock Price As Comment: $199.00</h3>"
	};
});


app.directive("stockValueAsHtmlAttribute",function(){
	return {
		template : "<h1>Stock Price As HTML Attribute: $299.00</h1>"
	};
});


app.directive("stockValueAsCssClass",function(){
	return {
		restrict : "C",
		template : "<h4>Stock Price As Css Class: $499.00</h4>"
	};
});