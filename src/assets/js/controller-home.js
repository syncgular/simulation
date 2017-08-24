var app = angular.module("app");

app.controller("home-controller", ["$scope", function($scope){

    var refjson = {"title": "Hello Angular Material"};
    $scope.refjson = refjson;

}]);