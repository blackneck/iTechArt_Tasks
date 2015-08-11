(function () {
	"use strict"

	function StockItem(family, name, amount, minAmount) {
		this.family = family;
		this.kinds = [{ name, amount, minAmount }];
	}

	function lackOfProduct(product) {
		alert("Lack of " + product);
	}

	function StockService(data) {

		var content = utils.convertData(data);

		this.getProducts = function () {
			return content;
		}

		function getProduct(family) {
			for (var i in content)
				if (content[i].family === family)
					return content[i];
		}

		function getKind(familyName, kindName) {
			var product = getProduct(familyName);
			for (var j in product.kinds)
				if (product.kinds[j].name === kindName)
					return product.kinds[j];
		}

		this.add = function (familyName, name, amount, minAmount) {
			var product = getProduct(familyName)
			if (product)
				return product.kinds.push({ name, amount, minAmount });
			content.push(new StockItem(familyName, name, amount, minAmount));
		}

		this.refill = function (orderList) {
			for (var i in orderList)
				getKind(orderList[i].family,
					orderList[i].name).amount += orderList[i].amount;
		}

		this.remove = function (familyName, kindName) {
			var product = getProduct(familyName),
				kind = getKind(product.family, kindName);
			if (product.kinds.length > 1)
				product.kinds.splice(product.kinds.indexOf(kind), 1);
			else
				content.splice(content.indexOf(product), 1);
		}

		this.grabIngredient = function (familyName, kindName, portions) {
			var kind = getKind(familyName, kindName);
			if (kind.amount >= portions)
				getKind(familyName, kindName).amount -= portions;
			if (kind.amount <= kind.minAmount)
				lackOfProduct(kind.name);
		}
	};


	var app = angular.module("appModule");
	app.factory("stockService", function () {
		return new StockService(storageModel.data);
	});
})()
