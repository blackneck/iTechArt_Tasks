(function () {
	"use strict"

	function convertData(rawData, callback) {
		if (typeof callback === "undefined")
			return rawData;
		else
			return callback.call(this, rawData);
	}

	function StockItem(family, name, amount, minAmount) {
		this.family = family;
		this.kinds = [{ name, amount, minAmount }];
	}

	function StockService(data) {

		var content = convertData(data);

		function getKindByName(kindName) {
			for (var i in content)
				for (var j in content[i].kinds) {
					if (content[i].kinds[j].name === kindName)
						return content[i].kinds[j];
				}
		}

		this.getProducts = function () {
			return content;
		}

		this.add = function (family, name, amount, minAmount) {
			for (var i in content)
				if (content[i].family === family) {
					content[i].kinds.push({ name, amount, minAmount })
					return;
				}
			content.push(new StockItem(family, name, amount, minAmount));
		}

		this.refill = function (kind, portions) {
			getKindByName(kind).amount += portions;
		}

		this.remove = function (family, name) {

		}

		this.grabIngredient = function (name, portions) {
			if (getKindByName(name).amount > 0)
				getKindByName(name).amount -= portions;
		}
	};


	var app = angular.module("appModule");
	app.factory("stockService", function () {
		return new StockService(storageModel.data);
	});
})()
