(function () {
	"use strict"

	function StockController($scope, stockService, orderService) {

		var reset = function () {
			$scope.newProductFamily = null;
			$scope.newProductKind = null;
			$scope.newProductMinAmount = null;
		}

		$scope.showAddPopup = function () {
			stockService.showAddPopup();
		}

		$scope.addProduct = function () {
			stockService.add($scope.newProductFamily, $scope.newProductKind, 0,
				$scope.newProductMinAmount);
			reset();
		}

		$scope.products = stockService.getProducts();

		$scope.refill = function (family, kind) {
			orderService.set(family, kind);
			orderService.showOrderVendors();
		}

		$scope.removeProduct = function (family, kindName) {
			stockService.remove(family, kindName);
		}
	};

	var app = angular.module("appModule");
	app.controller("stockController", ["$scope", "stockService", "orderService", StockController])
})();