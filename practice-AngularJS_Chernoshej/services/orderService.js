(function () {
	"use strict"

	function OrderService() {
		this.order = { product: "", amount: "" };
	}


	var app = angular.module("appModule");
	app.factory("orderService", function () {
		return new OrderService();
	})
})();