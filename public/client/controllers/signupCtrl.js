angular.module("appModule").controller("signupCtrl", ["$scope", "checkLoginService", "profileService", "$location", function ($scope, checkLoginService, profileService, $location) {
    var gUser = checkLoginService.getUser().getBasicProfile();
    $scope.user = {
        email: gUser.getEmail(),
        name: gUser.getName()
    };

    $scope.saveProfile = function () {
        // console.log($scope.user);
        profileService.submitProfile($scope.user).then(function (response) {
            var res = response.data;
            if (res.resCode === 1) {
                $location.path('/dashboard');
            }
        }, function (error) {
            alert(error);
            $location.path('/dashboard');
        });
    };
}]);