angular.module("appModule").factory("bgImageService", ["$http", function ($http) {
    var service = {};
    var baseUrl = "http://localhost:3000";

    service.getBgImage = function () {
        var apiUrl = baseUrl + "/api/BgImage";
        return $http.get(apiUrl);
    };

    return service;
}]);