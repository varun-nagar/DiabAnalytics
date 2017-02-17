angular.module("appModule").controller("mainCtrl", ["$scope", "$rootScope", "checkLoginService", function ($scope, $rootScope, checkLoginService) {
    $rootScope.isLogin = checkLoginService.getLogin();

    $scope.openSideBar = function () {
        document.getElementById("sideNavBar").style.width = "250px";
    };

    $rootScope.$watch(function (scope) { return scope.isLogin; }, function (newVal, oldVal) {
        if (newVal) {
            document.getElementsByTagName("body")[0].style.background="none";
        } else {
            document.getElementsByTagName("body")[0].style.background="-webkit-radial-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLwW0x7XKLHM/v3/-1x-1.jpg')";            
        }
    })

}]);