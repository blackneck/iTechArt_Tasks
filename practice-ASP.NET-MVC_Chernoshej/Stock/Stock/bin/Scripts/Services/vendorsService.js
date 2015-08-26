(function () {
    "use strict"

    function AvailableVendor(name, price, quickness) {
        this.name = name;
        this.price = price;
        this.quickness = quickness;
    }

    function Vendor(name, quickness) {
        this.Name = name;        
        this.Quickness = quickness;
    }

    function Product(name, price) {
        this.name = name;
        this.price = price;
    }

    function VendorsService($http) {

        var content = [];

        this.getVendors = function () {
            return $http.get("Home/GetVendors")
            .then(function (result) {
                return result.data;
            });
        }

        this.removeVendor = function (id) {
            return $http.post("/Home/DeleteVendor/" + id);
        }

        this.getAvailableVendors = function (product) {
            var result = [];
            for (var i in content)
                for (var j in content[i].products)
                    if (product === content[i].products[j].name)
                        result.push(new AvailableVendor(content[i].name,
							content[i].products[j].price,
							content[i].quickness));
            return result;
        }   

        this.addVendor = function (name, product, quickness, productPrice) {
            return $http.post("/Home/CreateVendor/", new Vendor(name, quickness));           
        }
    };


    var app = angular.module("RestaurantApp");
    app.factory("vendorsService", ["$http", function ($http) {
        return new VendorsService($http);
    }])
})();