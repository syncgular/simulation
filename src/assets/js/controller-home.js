var app = angular.module("app");

app.controller("home-controller", ["$scope", "dataService", function($scope, dataService) {

    var contact_list = dataService.get_contact_list();

    var refjson = {
        "title": "Hello Angular Material",
        "search_text": "",

        "contact_list": angular.copy(contact_list),
        "selected_contact": contact_list[0],
    };
    $scope.refjson = refjson;



    $scope.left_nav_list_user_item_click = function(item) {
        // MAKE EACH ELEMENT SELECTED FALSE
        _.each($scope.refjson.contact_list, function(iobj) {
            iobj.selected = false;
        });

        item.selected = true;

        $scope.refjson.selected_contact = item;
    };


    $scope.search_filter = function() {
        var search_text = $scope.refjson.search_text
        console.log(search_text);

        var filter_contact_list = [];
        if (search_text && search_text.trim().length > 0) {
            filter_contact_list = _.filter(contact_list, function(item) {
                return item.name.toLowerCase().indexOf(search_text.toLowerCase()) !== -1;
            });
        } else {
            filter_contact_list = angular.copy(contact_list);
        }

        $scope.refjson.contact_list = filter_contact_list;
    };


}]);