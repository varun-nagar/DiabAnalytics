angular.module("appModule").controller("bloodGlucoseCtrl", ["$scope", "$timeout", function ($scope, $timeout) {

    const cardWidth = 350;
    const cardHeight = 350;

    var creatGraphTiles = function () {
        var graphTilesArr = [];
        var meals = ["breakfast", "lunch", "dinner"]
        var keyIndex = 0;
        
        meals.forEach(function (meal) {
            graphTilesArr.push({
                key: "svg" + keyIndex++,
                title: "before " + meal,
                width: cardWidth,
                height: cardHeight
            });
            graphTilesArr.push({
                key: "svg" + keyIndex++,
                title: "after " + meal,
                width: cardWidth,
                height: cardHeight
            });
        }, this);
        return graphTilesArr;
    };

    $scope.graphTiles = creatGraphTiles();

    $scope.showLoader = function () {
        $scope.loading = true;
    };

    $scope.hideLoader = function () {
        $scope.loading = false;
    };

}]);