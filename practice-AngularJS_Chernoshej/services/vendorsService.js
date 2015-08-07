(function () {
	"use strict"

	function VendorsService(data) {
		var content = utils.convertData(data);

		this.getVendors = function () {
			return content;
		}

		this.getVendorsByProduct = function (product) {
			var result = [];
			for (var i in content)
				for (var j in content[i].products)
					if (product === content[i].products[j].name)
						result.push(content[i]);
			return result;
		}
	}


	var app = angular.module("appModule");
	app.factory("vendorsService", function () {
		return new VendorsService(vendorsModel.data);
	})
})(); 