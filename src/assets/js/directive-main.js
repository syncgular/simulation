var app = angular.module("app");

app.directive("detailView", [function() {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "./src/views/detail-view.html",
    }
}]);



app.directive("homeView", [function() {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "./src/views/home-view.html",
    }
}]);