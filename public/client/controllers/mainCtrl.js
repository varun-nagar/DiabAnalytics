angular.module("appModule").controller("mainCtrl", ["$scope", "$rootScope", "checkLoginService", "bgImageService", function ($scope, $rootScope, checkLoginService, bgImageService) {
    $rootScope.isLogin = checkLoginService.getLogin();

    $scope.openSideBar = function () {
        document.getElementById("sideNavBar").style.width = "250px";
    };

    $rootScope.$watch(function (scope) { return scope.isLogin; }, function (newVal, oldVal) {
        if (newVal) {
            document.getElementsByTagName("body")[0].style.background = "none";
        } else {
            bgImageService.getBgImage().then(function (response) {
                resObj = response.data;
                // document.getElementsByTagName("body")[0].style.background = "-webkit-radial-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(" + resObj.imgUrl + ")";
                document.getElementsByTagName("body")[0].style.background = "-webkit-radial-gradient(rgba(0,50,100,0.5),rgba(0,50,50,0.5)), url(" + resObj.imgUrl + ")";
            })
        }
    })

}]);