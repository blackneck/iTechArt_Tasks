(function () {
	"use strict"

	function StockController($scope, stockService, orderService) {		

		$scope.newProductFamily = null;
		$scope.newProductKind = null;
		$scope.newProductAmount = 0;
		$scope.newProductMinAmount = 0;

		$scope.addProduct = function () {
			stockService.add($scope.newProductFamily, $scope.newProductKind,
				$scope.newProductAmount, $scope.newProductMinAmount);
		}

		$scope.products = stockService.getProducts();

		$scope.refill = function (family, kind, amount) {
			orderService.set(kind, amount);
			orderService.showOrderVendors();
		}

		$scope.removeProduct = function (family, kindName) {
			stockService.remove(family, kindName);
		}

		$scope.grabProduct = function (family, kindName, portions) {
			stockService.grabIngredient(family, kindName, portions);
		}
	};

	var app = angular.module("appModule");
	app.controller("stockController", ["$scope", "stockService", "orderService", StockController])
})();