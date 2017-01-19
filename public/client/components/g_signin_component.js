function gSigninController(checkLoginService, $rootScope, $location) {

    function onSuccess(googleUser) {
        var profile = googleUser.getBasicProfile();
        // console.log('ID: ' + profile.getId());
        // console.log('Full Name: ' + profile.getName());
        // console.log('Given Name: ' + profile.getGivenName());
        // console.log('Family Name: ' + profile.getFamilyName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());

        var userObj = {
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl(),
            idToken: googleUser.getAuthResponse().id_token
        };
        checkLoginService.userAuth({ user: userObj }).then(function (response) {
            // console.log(response);
            var authResp = response.data;
            localStorage.setItem('jwtToken', authResp.jwt);  //authorization
            checkLoginService.setLogin(googleUser);
            $rootScope.isLogin = checkLoginService.getLogin();
            // console.log(authResp.resCode);
            if (authResp.resCode === 1) {
                $location.path('/dashboard').replace();
            } else {
                $location.path('/signup');
            }
        }, function (err) {
            alert("issue in sign in the user. please login again. " + JSON.stringify(err));
        })
    }
    function onFailure(error) {
        // console.log(error);
    }
    function renderButton() {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }

    var init = function () {
        renderButton();
    };
    init();

}


angular.module("appModule").component("gSignin", {
    templateUrl: 'client/components/g_signin_component.html',
    controller: gSigninController,
    bindings: {}
});