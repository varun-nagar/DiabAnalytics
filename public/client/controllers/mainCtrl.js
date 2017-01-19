angular.module("appModule").controller("mainCtrl", ["$scope", "$rootScope", "checkLoginService", function ($scope, $rootScope, checkLoginService) {
    $rootScope.isLogin = checkLoginService.getLogin();

    $scope.openSideBar = function () {
        document.getElementById("sideNavBar").style.width = "250px";
    };
}]);