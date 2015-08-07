(function () {
	"use strict"

	function VendorsController(vendorsService, orderService) {
		var vm = this;

		vm.vendors = vendorsService.getVendors();
		
		vm.vendorsByProduct = vendorsService.getVendorsByProduct(orderService.order.name);		
	};



	var app = angular.module("appModule");
	app.controller("vendorsController", ["vendorsService", "orderService", VendorsController])
})()