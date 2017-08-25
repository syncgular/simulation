var app = angular.module("app");

app.service("dataService", [function() {

    this.get_contact_list = function() {
        var contact_list_original = [
            { "id": 1, "name": "Santosh Indian", "mobile": "9323791976", "icon": "apple", "selected": true, "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 2, "name": "Vivek Singh", "mobile": "9323791976", "icon": "whatsapp", "last_pickup_date": new Date(), "address": "Hiranandai", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 3, "name": "Sunil Mondal", "mobile": "9323791976", "icon": "twitter", "last_pickup_date": new Date(), "address": "Hirnandani", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 4, "name": "Harihar Khobragade", "mobile": "9323791976", "icon": "amazon", "last_pickup_date": new Date(), "address": "Navrant", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 5, "name": "Vipin Yadav", "mobile": "9323791976", "icon": "facebook", "last_pickup_date": new Date(), "address": "Utstav Chaok", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 6, "name": "Shashi Yadav", "mobile": "9323791976", "icon": "linkedin", "last_pickup_date": new Date(), "address": "Shilp Chaok", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Krish Singh", "mobile": "9323791976", "icon": "hangouts", "last_pickup_date": new Date(), "address": "Kopra Gaon", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Jitu Jitu", "mobile": "9323791976", "icon": "windows", "last_pickup_date": new Date(), "address": "Belpada", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Dipak Mali", "mobile": "9323791976", "icon": "backup", "last_pickup_date": new Date(), "address": "Belpada", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Suchita Dabir", "mobile": "9323791976", "icon": "favorite", "last_pickup_date": new Date(), "address": "Hiranandai", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Ashwitha Anchan", "mobile": "9323791976", "icon": "thumb_up", "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Kharghar Khg", "mobile": "9323791976", "icon": "watch_later", "last_pickup_date": new Date(), "address": "Navrang", "sector": "30", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Sachin Tendulkar", "mobile": "9323791976", "icon": "add_alert", "last_pickup_date": new Date(), "address": "Navrang", "sector": "13", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Saurav Gangulay", "mobile": "9323791976", "icon": "album", "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "11", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Belapur BLB", "mobile": "9323791976", "icon": "insert_emoticon", "last_pickup_date": new Date(), "address": "Raghunath Vihar", "sector": "12", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Rahul Yadav", "mobile": "9323791976", "icon": "monetization_on", "last_pickup_date": new Date(), "address": "Raghunath Vivhar", "sector": "14", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Dhoni MS", "mobile": "9323791976", "icon": "cloud", "last_pickup_date": new Date(), "address": "Rail Vivhar", "sector": "13", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Kohli Virat", "mobile": "9323791976", "icon": "color_lens", "last_pickup_date": new Date(), "address": "KV", "sector": "7", "city": "Kharghar", "state": "Maharashtra" },
        ];

        return contact_list_original;
    };


    this.get_travel_detal_list = function() {
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


        return travel_detal_list_original;
    };

}])