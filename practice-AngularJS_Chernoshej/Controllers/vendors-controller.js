(function () {
	"use strict"

	function VendorsController($scope, vendorsService) {

		var reset = function () {
			$scope.newVendorName = null;
			$scope.newVendorQuickness = null;
			$scope.newVendorProduct = null;
			$scope.newVendorProductPrice = null;
		}

		$scope.vendors = vendorsService.getVendors();

		$scope.removeVendor = function (name) {
			vendorsService.removeVendor(name);
		}

		$scope.addVendor = function () {
			vendorsService.addVendor($scope.newVendorName, $scope.newVendorProduct,
				$scope.newVendorQuickness, $scope.newVendorProductPrice);
			reset();
		}
	};

	var app = angular.module("appModule");
	app.controller("vendorsController", ["$scope", "vendorsService", VendorsController])
})();