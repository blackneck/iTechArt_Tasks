(function () {
	"use strict"

	function StockController(stockService) {
		var vm = this;

		vm.products = stockService.getProducts();

		vm.addProduct = function (name, amount, minAmount) {
			stockService.add(name, amount, minAmount);
		}
	};

	var app = angular.module("appModule");
	app.controller("stockController", ["stockService", StockController])
})();