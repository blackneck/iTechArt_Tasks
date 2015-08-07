(function () {
	"use strict"

	function StockController(stockService, orderService) {
		var vm = this;

		vm.newProductFamily = null;
		vm.newProductKind = null;
		vm.newProductAmount = 0;
		vm.newProductMinAmount = 0;

		vm.addProduct = function () {
			stockService.add(vm.newProductFamily, vm.newProductKind,
				vm.newProductAmount, vm.newProductMinAmount);
		}

		vm.products = stockService.getProducts();

		vm.refill = function (family, kind, amount) {
			orderService.order.product = kind;
			orderService.order.amount = amount;
			// stockService.refill(family, kind, amount);
		}

		vm.removeProduct = function (family, kindName) {
			stockService.remove(family, kindName);
		}

		vm.grabProduct = function (family, kindName, portions) {
			stockService.grabIngredient(family, kindName, portions);
		}
	};

	var app = angular.module("appModule");
	app.controller("stockController", ["stockService", "orderService", StockController])
})();