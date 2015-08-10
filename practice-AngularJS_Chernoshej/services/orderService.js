(function () {
	"use strict"

	function OrderService() {
		var order = { product: "", amount: "" };

		this.get = function () {
			return order;
		}

		this.set = function (product, amount) {
			order.product = product;
			order.amount = amount;
		}

		this.showOrderVendors = function () {
			$(".available-vendors").bPopup();
		}
	}


	var app = angular.module("appModule");
	app.factory("orderService", function () {
		return new OrderService();
	})
})();