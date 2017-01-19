angular.module("appModule").controller("dashboardCtrl", ["$scope", "checkLoginService", function ($scope, checkLoginService) {

    $scope.imageUrl = checkLoginService.getUser().getBasicProfile().getImageUrl();

}]);