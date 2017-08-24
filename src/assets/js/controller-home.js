var app = angular.module("app");

app.controller("home-controller", ["$scope", function($scope) {

    var contact_list = [
        { "id": 1, "name": "Santosh", "mobile": "9323791976", "icon": "apple", "selected": true },
        { "id": 2, "name": "Vivek", "mobile": "9323791976", "icon": "whatsapp" },
        { "id": 3, "name": "Sunil", "mobile": "9323791976", "icon": "twitter" },
        { "id": 4, "name": "Hari", "mobile": "9323791976", "icon": "amazon" },
        { "id": 5, "name": "Vipin", "mobile": "9323791976", "icon": "facebook" },
        { "id": 6, "name": "Shashi", "mobile": "9323791976", "icon": "linkedin" },
        { "id": 7, "name": "Krish", "mobile": "9323791976", "icon": "hangouts" },
        { "id": 7, "name": "Jitu", "mobile": "9323791976", "icon": "windows" },
        { "id": 7, "name": "Dipak", "mobile": "9323791976", "icon": "backup" },
        { "id": 7, "name": "Suchita", "mobile": "9323791976", "icon": "favorite" },
        { "id": 7, "name": "Ashwitha", "mobile": "9323791976", "icon": "thumb_up" },
        { "id": 7, "name": "Kharghar", "mobile": "9323791976", "icon": "watch_later" },
        { "id": 7, "name": "Sachin", "mobile": "9323791976", "icon": "add_alert" },
        { "id": 7, "name": "Saurav", "mobile": "9323791976", "icon": "album" },
        { "id": 7, "name": "Belapur", "mobile": "9323791976", "icon": "insert_emoticon" },
        { "id": 7, "name": "Rahul", "mobile": "9323791976", "icon": "monetization_on" },
        { "id": 7, "name": "Dhoni", "mobile": "9323791976", "icon": "cloud" },
        { "id": 7, "name": "Kohli", "mobile": "9323791976", "icon": "color_lens" },

    ];
    var refjson = {
        "title": "Hello Angular Material",

        "contact_list": contact_list
    };

    $scope.refjson = refjson;



    $scope.left_nav_list_user_item_click = function(item) {
        // MAKE EACH ELEMENT SELECTED FALSE
        _.each($scope.refjson.contact_list, function(iobj) {
            iobj.selected = false;
        });

        item.background = true;
    }


    $scope.fnReviewEmployeeId = function(index) {
        if ($scope.selectedIndex === null) {
            $scope.selectedIndex = index;
        } else if ($scope.selectedIndex === index) {
            $scope.selectedIndex = null;
        } else {
            $scope.selectedIndex = index;
        }
    }


}]);