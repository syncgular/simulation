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

    this.random_text = function(min_length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < min_length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }


    this.icon_list = [
        "apple", "whatsapp", "twitter", "amazon", "facebook", "linkedin", "hangouts", "windows", "backup",
        "favorite", "thumb_up", "watch_later", "add_alert", "album", "insert_emoticon", "monetization_on",
        "cloud", "color_lens"
    ];
    this.cutomer_type = [{ "name": "Customer" }, { "name": "Driver" }];

    this.sample_customer_list = [
        { "name": "Santosh Indian", "type": "C" },
        { "name": "Vivek Singh", "type": "C" },
        { "name": "Sunil Mondal", "type": "C" },
        { "name": "Shashikant Yadav", "type": "C" },
        { "name": "Vipin Yadav", "type": "C" },
        { "name": "Harihar Khobragade", "type": "C" },
        { "name": "Rajendra Kotulkar", "type": "C" },
        { "name": "Dipak Mali", "type": "C" },
        { "name": "Jitu Jitu", "type": "C" },
        { "name": "Jyoti Krishna", "type": "C" },
        { "name": "Ved Prakash Singh", "type": "C" },
        { "name": "Arvind Jha", "type": "C" },
        { "name": "Suman Kumar", "type": "C" }
    ];

    this.sample_driver_list = [
        { "name": "Umesh Ghadge", "type": "D" },
        { "name": "Nishar Hussain", "type": "D" },
        { "name": "Mahesh Singh", "type": "D" },
        { "name": "Suresh Babu", "type": "D" },
        { "name": "Raju Bhai", "type": "D" },
        { "name": "Pawan Singh", "type": "D" },
        { "name": "Jigar Sharma", "type": "D" },
        { "name": "Ram Babu", "type": "D" },
        { "name": "Rajesh Kakde", "type": "D" },
        { "name": "Rahul CM", "type": "D" },
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

    this.sample_destination_list = [
        { "dest_address": "Domestic Airport", "dest_city": "Mumbai", "fare": 800 },
        { "dest_address": "Bandra Stn", "dest_city": "Mumbai", "fare": 700 },
        { "dest_address": "Mumbai Central", "dest_city": "Mumbai", "fare": 800 },

        { "dest_address": "CST Terminus", "dest_city": "Mumbai", "fare": 700 },
        { "dest_address": "Bandra Kurla Complex", "dest_city": "Mumbai", "fare": 700 },
        { "dest_address": "Andheri", "dest_city": "Mumbai", "fare": 800 },

        { "dest_address": "Kurla", "dest_city": "Mumbai", "fare": 600 },
        { "dest_address": "Marine Drive", "dest_city": "Mumbai", "fare": 800 },
        { "dest_address": "Gateway of India", "dest_city": "Mumbai", "fare": 800 },

        { "dest_address": "International Airport", "dest_city": "Mumbai", "fare": 800 },
        { "dest_address": "Vashi", "dest_city": "Mumbai", "fare": 250 },
    ];


    this.get_contact_list = function() {
        let sthis = this;
        var customer_list = this.util_prepare_customer_driver_data(this.sample_customer_list);
        var driver_list = this.util_prepare_customer_driver_data(this.sample_driver_list);

        _.each(customer_list, function(customer) {
            sthis.populate_customer_driver_time_line(customer, driver_list);
        });

        var concated_list = customer_list.concat(driver_list);
        console.log(concated_list)
        return concated_list;
    };


    this.util_prepare_customer_driver_data = function(item_list) {
        let sthis = this;
        let new_item_list = [];

        _.each(item_list, function(item) {

            if (item.type.toLowerCase() == 'd') {
                item["icon"] = "local_taxi";

                var area_code = sthis.getRandomInt(10, 46);
                var area_text = sthis.random_text(2);
                var cab_number = sthis.getRandomInt(999, 9999);
                item["cab"] = `MH${area_code}-${area_text} ${cab_number}`
            } else {
                var rand_icon = sthis.getRandomInt(0, sthis.icon_list.length - 1);
                item["icon"] = sthis.icon_list[rand_icon];
            }


            var rand_mob = sthis.getRandomInt(7676767676, 9999999999);
            item["mobile"] = rand_mob;

            var rand_address = sthis.getRandomInt(0, sthis.address_list.length - 1);
            var rand_address_obj = sthis.address_list[rand_address];
            for (var key in rand_address_obj) {
                item[key] = rand_address_obj[key];
            }

            new_item_list.push(item);
        });

        return new_item_list;
    }


    this.populate_customer_driver_time_line = function(customer, driver_list) {
        var time_line_list = [];

        var rand_time_line = this.getRandomInt(5, this.sample_destination_list.length);
        for (var i = 0; i < rand_time_line; i++) {
            var time_line = {};

            // POPULATE CUSTOMER DETAIL
            time_line["passanger"] = customer;

            // RANDOM DRIVER
            var rand_driver = this.getRandomInt(0, driver_list.length - 1);
            var rand_driver_obj = driver_list[rand_driver];
            time_line["driver"] = rand_driver_obj;


            // RANDOM DESTINATION
            var rand_dest = this.getRandomInt(0, this.sample_destination_list.length - 1);
            var rand_dest_obj = this.sample_destination_list[rand_dest];
            for (var key in rand_dest_obj) {
                time_line[key] = rand_dest_obj[key];
            }


            var dmonth = this.getRandomInt(8, 8);
            var ddate = this.getRandomInt(20, 28);
            var dhour = this.getRandomInt(1, 23);
            var dmin = this.getRandomInt(0, 59);
            var dstr = `2017-${dmonth}-${ddate} ${dhour}:${dmin}`;
            time_line.booking_time = moment(dstr, 'YYYY-MM-DD HH:mm').toDate();
            time_line.pickup_time = moment(dstr, 'YYYY-MM-DD HH:mm').toDate();

            // PUSH TO CUSTOMER TIME LINE
            time_line_list.push(time_line);

            // PUSH TO DRIVER TIME LINE
            rand_driver_obj.time_line_list = rand_driver_obj.time_line_list || [];
            rand_driver_obj.time_line_list.push(time_line);

            rand_driver_obj.time_line_list = _.sortBy(rand_driver_obj.time_line_list, 'booking_time');
            rand_driver_obj.time_line_list = rand_driver_obj.time_line_list.reverse();
        }

        time_line_list = _.sortBy(time_line_list, 'booking_time');
        customer.time_line_list = time_line_list.reverse();
    };



}])