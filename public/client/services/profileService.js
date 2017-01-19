angular.module("appModule").factory("profileService", ["$http", function ($http) {
    var service = {};
    var baseUrl = "http://localhost:3000";

    service.submitProfile = function (userObj) {
        var apiUrl = baseUrl + "/api/fillProfile";
        return $http.post(apiUrl, userObj,{headers: {'Authorization': localStorage.getItem('jwtToken')}});
    };

    return service;
}]);