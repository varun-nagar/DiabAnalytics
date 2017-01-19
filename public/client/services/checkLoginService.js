angular.module("appModule").factory("checkLoginService", ["$http", function ($http) {
    var service = {};
    var gUser = {};
    var baseUrl = "http://localhost:3000";

    service.getLogin = function () {
        return !angular.equals(gUser, {});
    }
    service.setLogin = function (googleUser) {
        gUser = googleUser;
    };
    service.userAuth = function (userObj) {
        // console.log("userObj " + JSON.stringify(userObj))
        var apiUrl = baseUrl + "/api/login";
        return $http.post(apiUrl, userObj);
    };

    service.getUser = function () {
        return gUser;
    };

    // service.removeGUser = function () {
    //     // var auth2 = gapi.auth2.getAuthInstance();
    //     return gapi.auth.signOut();
    //     // return auth2.signOut();
    // };

    return service;
}]);