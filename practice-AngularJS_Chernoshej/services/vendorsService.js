(function () {
	"use strict"

	function AvailableVendor(name, price, quickness) {
		this.name = name;
		this.price = price;
		this.quickness = quickness;
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
	};


	var app = angular.module("appModule");
	app.factory("vendorsService", function () {
		return new VendorsService(vendorsModel.data);
	})
})(); 