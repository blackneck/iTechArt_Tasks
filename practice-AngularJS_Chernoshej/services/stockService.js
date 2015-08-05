(function () {
	"use strict"

	function StockItem(name, amount, minAmount) {
		this.name = name;
		this.amount = amount;
		this.minAmount = minAmount;
	}

	function convertData(rawData, callback) {
		if (typeof callback === "undefined")
			return rawData;
		else
			return callback.call(this, rawData);
	}

	function StockService(data) {

		var content = convertData(data);		

		this.getProducts = function () {
			return content;
		}

		this.add = function (name, amount, minAmount) {
			content.push(new StockItem(name, amount, minAmount));
		}

		this.refill = function (name) {

		}
	};

	var app = angular.module("appModule");
	app.factory("stockService", function () {
		return new StockService(storageModel.data);
	});
})()