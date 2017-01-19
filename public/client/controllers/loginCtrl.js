angular.module("appModule").controller("loginCtrl", ["$scope", function ($scope) {
    $scope.user = {};
    $scope.showVals = function () {
        $scope.show = true;
    };
}]);