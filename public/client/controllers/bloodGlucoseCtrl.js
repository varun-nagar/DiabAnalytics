angular.module("appModule").controller("bloodGlucoseCtrl", ["$scope","$timeout", function ($scope,$timeout) {
    $scope.graphTiles = [
        {
            key: "svg1",
            title: "before breakfast",
            width: "350",
            height: "350"
        },
        {
            key: "svg2",
            title: "after breakfast",
            width: "350",
            height: "350"
        }
    ];

    $scope.showLoader = function () {
        $scope.loading = true;
    };

    $scope.hideLoader = function () {
        $scope.loading = false;
    };

}]);