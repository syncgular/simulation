var app = angular.module("app");

app.service("dataService", [function() {

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    this.getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
    };

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.icon_list = [
        "apple", "whatsapp", "twitter", "amazon", "facebook", "linkedin", "hangouts", "windows", "backup",
        "favorite", "thumb_up", "watch_later", "add_alert", "album", "insert_emoticon", "monetization_on",
        "cloud", "color_lens"
    ];
    this.cutomer_type = [{ "name": "Customer" }, { "name": "Driver" }];
    this.sample_customer_list = [
        { "name": "Santosh Indian", "type": "Cutomer" },
        { "name": "Vivek Singh", "type": "Cutomer" },
        { "name": "Sunil Mondal", "type": "Cutomer" },
        { "name": "Shashikant Yadav", "type": "Cutomer" },
        { "name": "Vipin Yadav", "type": "Cutomer" },
        { "name": "Harihar Khobragade", "type": "Cutomer" },
        { "name": "Rajendra Kotulkar", "type": "Cutomer" },
        { "name": "Dipak Mali", "type": "Cutomer" },
        { "name": "Jitu Jitu", "type": "Cutomer" },
        { "name": "Jyoti Krishna", "type": "Cutomer" },
        { "name": "Ved Prakash Singh", "type": "Cutomer" },
        { "name": "Arvind Jha", "type": "Cutomer" },
        { "name": "Suman Kumar", "type": "Cutomer" }
    ];

    this.sample_driver_list = [
        { "name": "Umesh Ghadge", "type": "Driver" },
        { "name": "Nishar Hussain", "type": "Driver" },
        { "name": "Mahesh Singh", "type": "Driver" },
        { "name": "Suresh Babu", "type": "Driver" },
        { "name": "Raju Bhaiya", "type": "Driver" },
        { "name": "Pawan Singh", "type": "Driver" },
        { "name": "Jigar Sharma", "type": "Driver" },
        { "name": "Ram Babu", "type": "Driver" },
        { "name": "Rajesh Kakde", "type": "Driver" },
        { "name": "Rahul CM", "type": "Driver" },
    ];

    this.address_list = [
        { "address": "Kendriya Vihar", "sector": "12", "landmark": "", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Belpada, Arham Arcade", "sector": "3", "landmark": "Honda Showroom", "city": "Kharghar", "state": "Maharashtra" },

        { "address": "Belpada, Dattatray Apt", "sector": "3", "landmark": "Vithal Kamath Hotel", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Hiranandani", "sector": "7", "landmark": "Taxi Stand", "city": "Kharghar", "state": "Maharashtra" },

        { "address": "Navrang", "sector": "12", "landmark": "Kotak Bank", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Roadpali, Satyakunk Society", "sector": "13", "landmark": "Cidco Water Tank", "city": "Kalmboli", "state": "Maharashtra" },

        { "address": "Roadpali, Satyakunk Society", "sector": "13", "landmark": "Cidco Water Tank", "city": "Kalmboli", "state": "Maharashtra" },
        { "address": "Kalamboli, Gurudwara", "sector": "11", "landmark": "Gurudwara", "city": "Kalmboli", "state": "Maharashtra" },

        { "address": "Rail Vihar", "sector": "4", "landmark": "Utsav Chowk", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Raghunath Vihar", "sector": "14", "landmark": "Petrol Pump", "city": "Kalmboli", "state": "Maharashtra" },

        { "address": "ITM Hostel", "sector": "5", "landmark": "Utsav Chowk", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Shilp Chowk", "sector": "21", "landmark": "Shilp Chowk", "city": "Kharghar", "state": "Maharashtra" },

        { "address": "Prajapati Building", "sector": "2", "landmark": "Royal Rasoi", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Elite Heights", "sector": "10", "landmark": "Kopra Gaon", "city": "Kharghar", "state": "Maharashtra" },

        { "address": "Virgin Streen Cafe", "sector": "4", "landmark": "Balaji Aangan", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Nikunk CHS", "sector": "4", "landmark": "", "city": "Kharghar", "state": "Maharashtra" },

        { "address": "Hardrock CHS", "sector": "7", "landmark": "PNB Bank", "city": "Kharghar", "state": "Maharashtra" },
        { "address": "Aristo Bliss", "sector": "27", "landmark": "Central Park", "city": "Kharghar", "state": "Maharashtra" },

    ];


    this.get_contact_list = function() {
        let sthis = this;
        var customer_list = this.util_prepare_customer_driver_data(this.sample_customer_list);
        var driver_list = this.util_prepare_customer_driver_data(this.sample_driver_list);

        var concated_list = customer_list.concat(driver_list);
        return concated_list;
    };


    this.util_prepare_customer_driver_data = function(item_list) {
        let sthis = this;
        let new_item_list = [];

        _.each(item_list, function(item) {

            var rand_icon = sthis.getRandomInt(0, 17);
            item["icon"] = sthis.icon_list[rand_icon];

            var rand_mob = sthis.getRandomInt(7676767676, 9999999999);
            item["mobile"] = rand_mob;

            var rand_address = sthis.getRandomInt(0, 17);
            var rand_address_obj = sthis.address_list[rand_address];
            for (var key in rand_address_obj) {
                item[key] = rand_address_obj[key];
            }

            new_item_list.push(item);
        });

        return new_item_list;
    }


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