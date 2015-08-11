(function () {
	"use strict"

	function OrderController($scope, orderService, vendorsService, stockService) {

		$scope.order = orderService.get();
		$scope.orderList = orderService.getOrderList();

		$scope.$watch(
			function ($scope) {
				return orderService.getSum();
			},

			function (value) {
				$scope.sum = value;
			});

		$scope.$watch(
			function ($scope) {
				return $scope.order.product;
			},

			function (value) {
				$scope.availableVendors = vendorsService.
					getAvailableVendors(value);
			});

		$scope.pickProduct = function (name, family, vendor, price) {
			orderService.pickProduct(name, family, vendor, price);
		}

		$scope.removeProduct = function (name, vendor) {
			orderService.removeProduct(name, vendor);
		}
		
		///request here
		$scope.confirmOrder = function () {
			$(".wrapper").block(orderService.confirmOrder);			
			// orderService.confirmOrder();
			stockService.refill($scope.orderList);
		}
	};

	var app = angular.module("appModule");
	app.controller("orderController", ["$scope", "orderService", "vendorsService", "stockService", OrderController]);
})();