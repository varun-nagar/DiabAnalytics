var app = angular.module("appModule",['ngRoute','ui.bootstrap.datetimepicker']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "client/templates/login.html",
        controller : "loginCtrl"
    })
    .when("/dashboard", {
        templateUrl : "client/templates/dashboard.html",
        controller : "dashboardCtrl"
    })
    .when("/signup", {
        templateUrl : "client/templates/signup.html",
        controller : "signupCtrl"
    })
    .when("/bloodGlucose", {
        templateUrl : "client/templates/bloodGlucose.html",
        controller : "bloodGlucoseCtrl"
    })
    .otherwise({
        templateUrl : "client/templates/login.html",
        controller : "loginCtrl"
    });

});