var app = angular.module("madLibsApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/view1", {
        controller: "inputController",
        templateUrl: "partials/view1.html"
    }).when("/view2", {
        controller: "outputController",
        templateUrl: "partials/view2.html"
    });
});
