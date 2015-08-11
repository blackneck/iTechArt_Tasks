(function () {
	"use strict"

	function VendorsController($scope, vendorsService) {

		$scope.newVendorName;
		$scope.newVendorQuickness;
		$scope.newVendorProduct;
		$scope.newVendorProductPrice;

		$scope.vendors = vendorsService.getVendors();

		$scope.removeVendor = function (name) {
			vendorsService.removeVendor(name);
		}

		$scope.addVendor = function () {
			vendorsService.addVendor($scope.newVendorName, $scope.newVendorProduct,
				$scope.newVendorQuickness, $scope.newVendorProductPrice);
		}
	};

	var app = angular.module("appModule");
	app.controller("vendorsController", ["$scope", "vendorsService", VendorsController])
})();