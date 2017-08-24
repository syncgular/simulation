let app = angular.module("app", ["ngRoute", "ngMaterial"]);


app.config(["$routeProvider", function($routeProvider){

    $routeProvider.when("/", {
        "templateUrl" : "./src/views/home.html",
        "controller" : "home-controller"
    });

}]);