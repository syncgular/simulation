var app = angular.module("app");

app.controller("home-controller", ["$scope", function($scope) {

    var contact_list_original = [
        { "id": 1, "name": "Santosh Indian", "mobile": "9323791976", "icon": "apple", "selected": true, "last_pickup_date": new Date() },
        { "id": 2, "name": "Vivek Singh", "mobile": "9323791976", "icon": "whatsapp", "last_pickup_date": new Date() },
        { "id": 3, "name": "Sunil Mondal", "mobile": "9323791976", "icon": "twitter", "last_pickup_date": new Date() },
        { "id": 4, "name": "Harihar Khobragade", "mobile": "9323791976", "icon": "amazon", "last_pickup_date": new Date() },
        { "id": 5, "name": "Vipin Yadav", "mobile": "9323791976", "icon": "facebook", "last_pickup_date": new Date() },
        { "id": 6, "name": "Shashi Yadav", "mobile": "9323791976", "icon": "linkedin", "last_pickup_date": new Date() },
        { "id": 7, "name": "Krish Singh", "mobile": "9323791976", "icon": "hangouts", "last_pickup_date": new Date() },
        { "id": 7, "name": "Jitu Jitu", "mobile": "9323791976", "icon": "windows", "last_pickup_date": new Date() },
        { "id": 7, "name": "Dipak Mali", "mobile": "9323791976", "icon": "backup", "last_pickup_date": new Date() },
        { "id": 7, "name": "Suchita Dabir", "mobile": "9323791976", "icon": "favorite", "last_pickup_date": new Date() },
        { "id": 7, "name": "Ashwitha Anchan", "mobile": "9323791976", "icon": "thumb_up", "last_pickup_date": new Date() },
        { "id": 7, "name": "Kharghar Khg", "mobile": "9323791976", "icon": "watch_later", "last_pickup_date": new Date() },
        { "id": 7, "name": "Sachin Tendulkar", "mobile": "9323791976", "icon": "add_alert", "last_pickup_date": new Date() },
        { "id": 7, "name": "Saurav Gangulay", "mobile": "9323791976", "icon": "album", "last_pickup_date": new Date() },
        { "id": 7, "name": "Belapur BLB", "mobile": "9323791976", "icon": "insert_emoticon", "last_pickup_date": new Date() },
        { "id": 7, "name": "Rahul Yadav", "mobile": "9323791976", "icon": "monetization_on", "last_pickup_date": new Date() },
        { "id": 7, "name": "Dhoni MS", "mobile": "9323791976", "icon": "cloud", "last_pickup_date": new Date() },
        { "id": 7, "name": "Kohli Virat", "mobile": "9323791976", "icon": "color_lens", "last_pickup_date": new Date() },

    ];

    let ref_traverl = {
        "id": 1,
        "from": "Kharghar",
        "to": "Airport",
        "driver": "Santosh Indian",
        "fare": 800.00,
        "booking_time": new Date(),
        "pickup_time": new Date(),
        "address": "",
        "cab": "MH-12HN 6663"
    };
    var travel_detal_list_original = [angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
        angular.copy(ref_traverl), angular.copy(ref_traverl),
    ];

    var refjson = {
        "title": "Hello Angular Material",

        "contact_list": angular.copy(contact_list_original),

        "search_text": "",

        "travel_detal_list": angular.copy(travel_detal_list_original),

        "selected_contact": contact_list_original[0]
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
            filter_contact_list = _.filter(contact_list_original, function(item) {
                return item.name.toLowerCase().indexOf(search_text.toLowerCase()) !== -1;
            });
        } else {
            filter_contact_list = angular.copy(contact_list_original);
        }

        $scope.refjson.contact_list = filter_contact_list;
    };


}]);