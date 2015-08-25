(function () {
    "use strict"

    function StockController($scope, stockService, orderService) {

        var reset = function () {
            $scope.newProductFamily = null;
            $scope.newProductKind = null;
            $scope.newProductMinAmount = null;
        }

        var promiseIngredients = stockService.getProducts();

        promiseIngredients.then(function (response) {
            $scope.products = response.data;
        });

        $scope.showAddPopup = function () {
            stockService.showAddPopup();
        }

        $scope.addProduct = function () {
            stockService.add($scope.newProductFamily, $scope.newProductKind, 0,
				$scope.newProductMinAmount);
            reset();
        }                

        $scope.refill = function (family, kind) {
            orderService.set(family, kind);
            orderService.showOrderVendors();
        }

        $scope.removeProduct = function (family, kindName) {
            stockService.remove(family, kindName);
        }
    };

    var app = angular.module("RestaurantApp");
    app.controller('StockController', ["$scope", "stockService", "orderService", StockController]);
})();
