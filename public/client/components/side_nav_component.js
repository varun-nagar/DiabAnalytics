function appSideNavController($location) {
    this.closeSideNav = function () {
        // console.log("in component nav.....");
        document.getElementById("sideNavBar").style.width = "0px";
    };

    this.navigateTo = function (navPath) {
        $location.path(navPath);
    };
}


angular.module("appModule").component("appSideNav", {
    templateUrl: 'client/components/side_nav_component.html',
    controller: appSideNavController,
    bindings: {}
});
