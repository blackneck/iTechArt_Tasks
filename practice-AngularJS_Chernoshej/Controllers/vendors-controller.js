(function () {
	"use strict"

	function VendorsController($scope, vendorsService, orderService) {

		$scope.vendors = vendorsService.getVendors();
		$scope.order = orderService.get();


		$scope.$watch(
			function ($scope) {
				return $scope.order.product;
			},

			function (value) {
				$scope.availableVendors = vendorsService.
					getAvailableVendors(value);
			});

	};

	var app = angular.module("appModule");
	app.controller("vendorsController", ["$scope", "vendorsService", "orderService", VendorsController])
})();