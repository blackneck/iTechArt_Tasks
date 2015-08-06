(function () {
	"use strict"

	function StockController(stockService) {
		var vm = this;

		vm.products = stockService.getProducts();

		vm.addProduct = function (family, kind, amount, minAmount) {
			// stockService.add(family, name, amount, minAmount);
			stockService.add("meat", "name", 10, "minAmount");
		}

		vm.refill = function (kind, amount) {
			stockService.refill(kind, amount);
			// stockService.refill("tomato", 4);
		}

		vm.removeProduct = function (family, kindName) {
			stockService.remove(family, kindName);
		}
		
		vm.grabProduct = function (kindName, portions) {
			stockService.grabIngredient(kindName, portions);
		}
	};

	var app = angular.module("appModule");
	app.controller("stockController", ["stockService", StockController])
})();