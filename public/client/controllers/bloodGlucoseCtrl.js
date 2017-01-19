angular.module("appModule").controller("bloodGlucoseCtrl", ["$scope", function ($scope) {
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
}]);