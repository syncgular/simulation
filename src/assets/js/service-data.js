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
        var contact_list_original = [
            { "id": 1, "name": "Santosh Indian", "type": "Customer", "mobile": "9323791976", "icon": "apple", "selected": true, "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 2, "name": "Vivek Singh", "type": "Driver", "mobile": "9323791976", "icon": "whatsapp", "last_pickup_date": new Date(), "address": "Hiranandai", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 3, "name": "Sunil Mondal", "type": "Customer", "mobile": "9323791976", "icon": "twitter", "last_pickup_date": new Date(), "address": "Hirnandani", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 4, "name": "Harihar Khobragade", "type": "Customer", "mobile": "9323791976", "icon": "amazon", "last_pickup_date": new Date(), "address": "Navrant", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 5, "name": "Vipin Yadav", "type": "Customer", "mobile": "9323791976", "icon": "facebook", "last_pickup_date": new Date(), "address": "Utstav Chaok", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 6, "name": "Shashi Yadav", "type": "Customer", "mobile": "9323791976", "icon": "linkedin", "last_pickup_date": new Date(), "address": "Shilp Chaok", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Krish Singh", "type": "Customer", "mobile": "9323791976", "icon": "hangouts", "last_pickup_date": new Date(), "address": "Kopra Gaon", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Jitu Jitu", "type": "Customer", "mobile": "9323791976", "icon": "windows", "last_pickup_date": new Date(), "address": "Belpada", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Dipak Mali", "type": "Customer", "mobile": "9323791976", "icon": "backup", "last_pickup_date": new Date(), "address": "Belpada", "sector": "5", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Suchita Dabir", "type": "Customer", "mobile": "9323791976", "icon": "favorite", "last_pickup_date": new Date(), "address": "Hiranandai", "sector": "3", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Ashwitha Anchan", "type": "Customer", "mobile": "9323791976", "icon": "thumb_up", "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "4", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Kharghar Khg", "type": "Customer", "mobile": "9323791976", "icon": "watch_later", "last_pickup_date": new Date(), "address": "Navrang", "sector": "30", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Sachin Tendulkar", "type": "Customer", "mobile": "9323791976", "icon": "add_alert", "last_pickup_date": new Date(), "address": "Navrang", "sector": "13", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Saurav Gangulay", "type": "Customer", "mobile": "9323791976", "icon": "album", "last_pickup_date": new Date(), "address": "Kedndirya Vivhar", "sector": "11", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Belapur BLB", "type": "Customer", "mobile": "9323791976", "icon": "insert_emoticon", "last_pickup_date": new Date(), "address": "Raghunath Vihar", "sector": "12", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Rahul Yadav", "type": "Customer", "mobile": "9323791976", "icon": "monetization_on", "last_pickup_date": new Date(), "address": "Raghunath Vivhar", "sector": "14", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Dhoni MS", "type": "Customer", "mobile": "9323791976", "icon": "cloud", "last_pickup_date": new Date(), "address": "Rail Vivhar", "sector": "13", "city": "Kharghar", "state": "Maharashtra" },
            { "id": 7, "name": "Kohli Virat", "type": "Customer", "mobile": "9323791976", "icon": "color_lens", "last_pickup_date": new Date(), "address": "KV", "sector": "7", "city": "Kharghar", "state": "Maharashtra" },
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