var app = angular.module("app");

app.controller("home-controller", ["$scope", "$timeout", "dataService", function($scope, $timeout, dataService) {

    var contact_list = dataService.get_contact_list();
    var taxi_stand_list = dataService.taxi_stand_list(contact_list);

    var refjson = {
        "title": "Hello Angular Material",
        "search_text": "",

        "contact_list": angular.copy(contact_list),
        "selected_contact": contact_list[0],

        "taxi_stand_list": taxi_stand_list
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


    $scope.taxi_stand_wait_time_refresh = function() {

        _.each($scope.refjson.taxi_stand_list, function(item) {
            var str = "";

            var duration = moment.duration(moment().diff(item.last_pickup_time));
            var asDays = Math.floor(duration.asDays());
            if (asDays == 0) {
                var asHours = Math.floor(duration.asHours());
                if (asHours == 0) {
                    var asMinutes = Math.floor(duration.asMinutes());
                    if (asMinutes > 0) {
                        str = `Since ${asMinutes} minute`;
                    }
                } else {
                    if (asHours > 0) {
                        str = `Since ${asHours} hour`;
                    }
                }
            } else {
                if (asDays > 0) {
                    str = `Since ${asDays} day`;
                }
            }

            item.waiting_since = str;

            console.log(str);
        });


        // SCHEDULE EVERY MINUTE
        $timeout(function() {
            $scope.taxi_stand_wait_time_refresh();
        }, 60000);
    };
    $scope.taxi_stand_wait_time_refresh();

}]);