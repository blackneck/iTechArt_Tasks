(function () {
	"use strict"

	function AvailableVendor(name, price, quickness) {
		this.name = name;
		this.price = price;
		this.quickness = quickness;
	}

	function Vendor(name, products, quickness) {
		this.name = name;
		this.products = products;
		this.quickness = quickness;
	}

	function Product(name, price) {
		this.name = name;
		this.price = price;
	}

	function VendorsService(data) {

		var content = utils.convertData(data);

		this.getVendors = function () {
			return content;
		}

		this.getAvailableVendors = function (product) {
			var result = [];
			for (var i in content)
				for (var j in content[i].products)
					if (product === content[i].products[j].name)
						result.push(new AvailableVendor(content[i].name,
							content[i].products[j].price,
							content[i].quickness));
			return result;
		}

		this.removeVendor = function (name) {
			for (var i in content)
				if (name == content[i].name) {
					content.splice(i, 1);
					return;
				}
		}

		this.addVendor = function (name, product, quickness, productPrice) {
			for (var i in content)
				if (name == content[i].name) {
					content[i].products.push(new Product(product, productPrice));
					return;
				}

			content.push(new Vendor(name, [new Product(product, productPrice)], quickness));
		}
	};


	var app = angular.module("appModule");
	app.factory("vendorsService", function () {
		return new VendorsService(vendorsModel.data);
	})
})(); 