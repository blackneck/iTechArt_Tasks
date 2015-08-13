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

		$scope.showStory = function () {
			$(".story-popup").bPopup();
		}
		
		$scope.showChart = function () {
			$(".chart-popup").bPopup();
		}
		
		$scope.removeProduct = function (name, vendor) {
			orderService.removeProduct(name, vendor);
		}

		$scope.confirmSuccess = function () {
			orderService.confirmOrder();
			stockService.refill($scope.orderList);
			$scope.orderList = orderService.getOrderList();
			$scope.ordersStory = orderService.getOrdersStory();
			$(".success-popup").bPopup();
		}

		$scope.confirmError = function () {
			$(".error-popup").bPopup();
		}
		
		///request here
		$scope.confirmOrder = function (success, error) {

			if ($(".wrapper").block(
				function () {
					return (Math.random() * 10) > 5;
				}))
				success();

			else
				error();
		}
	};

	var app = angular.module("appModule");
	app.controller("orderController", ["$scope", "orderService", "vendorsService", "stockService", OrderController]);
})();