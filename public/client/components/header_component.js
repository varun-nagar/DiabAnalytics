function appHeaderController(checkLoginService, $window) {
    this.proj = "Diab Analytics";
    var googUser = checkLoginService.getUser();
    this.userName = googUser.getBasicProfile().getName();//.getBasicProfile().getImageUrl();
    this.imageUrl = googUser.getBasicProfile().getImageUrl();

    this.signOut = function () {
        localStorage.removeItem('jwtToken');
        $window.location.replace("https://mail.google.com/mail/u/0/?logout&hl=en");
    };

    var init = function () {
        var googUser = checkLoginService.getUser();
        // console.log(googUser.getBasicProfile().getName());
        this.userName = googUser.getBasicProfile().getName();
        var props = Object.keys(googUser);
        if (props.length > 0) {
            // console.log("in if...............");
        }
    };
    // init();
}


angular.module("appModule").component("appHeader", {
    templateUrl: 'client/components/header_component.html',
    controller: appHeaderController,
    bindings: {}
});
