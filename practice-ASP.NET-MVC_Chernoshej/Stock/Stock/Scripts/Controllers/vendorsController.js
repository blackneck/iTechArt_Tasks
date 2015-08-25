(function () {
    "use strict"

    function VendorsController($scope, vendorsService) {

        var reset = function () {
            $scope.newVendorName = null;
            $scope.newVendorQuickness = null;
            $scope.newVendorProduct = null;
            $scope.newVendorProductPrice = null;
        }

        vendorsService.getVendors().then(function (response) {
            $scope.vendors = response;
        });        

        $scope.removeVendor = function (id) {
            vendorsService.removeVendor(id);
        }

        $scope.addVendor = function () {
            vendorsService.addVendor($scope.newVendorName, $scope.newVendorProduct,
				$scope.newVendorQuickness, $scope.newVendorProductPrice);
            reset();
        }
    };

    var app = angular.module("RestaurantApp");
    app.controller("vendorsController", ["$scope", "vendorsService", VendorsController])
})();