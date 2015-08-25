(function () {
    "use strict"

    function OrderItem(name, family, vendor, amount, price) {
        this.date;
        this.family = family;
        this.vendor = vendor;
        this.amount = amount;
        this.name = name;
        this.price = price;
    }

    function OrderService() {

        var order = { family: "", product: "" },
			orderList = [],
			ordersStory = [];

        this.get = function () {
            return order;
        }

        this.set = function (family, product) {
            order.family = family;
            order.product = product;
        }

        this.getSum = function () {
            var res = 0;
            for (var i in orderList)
                res += orderList[i].price * orderList[i].amount;
            return res;
        }

        this.getOrderList = function () {
            return orderList;
        }

        this.getOrdersStory = function () {
            return ordersStory;
        }

        this.pickProduct = function (name, family, vendor, price) {
            for (var i in orderList)
                if (name == orderList[i].name && vendor == orderList[i].vendor) {
                    orderList[i].amount += 1;
                    return;
                }

            orderList.push(new OrderItem(name, family, vendor, 1, price));

        }

        this.removeProduct = function (name, vendor) {
            for (var i in orderList)
                if (name == orderList[i].name && vendor ==
					orderList[i].vendor) {
                    if (orderList[i].amount > 1)
                        orderList[i].amount -= 1;
                    else
                        orderList.splice(orderList.indexOf(orderList[i]), 1);
                    return;
                }
        }

        this.confirmOrder = function () {
            var date = new Date();
            for (var i in orderList)
                orderList[i].date = date;
            ordersStory = ordersStory.concat(orderList);
            orderList = [];
        }

        this.showOrderVendors = function () {
            $(".available-vendors").bPopup();
        }
    }


    var app = angular.module("RestaurantApp");
    app.factory("orderService", function () {
        return new OrderService();
    })
})();