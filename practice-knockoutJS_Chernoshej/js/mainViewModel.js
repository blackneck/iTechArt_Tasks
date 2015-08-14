/// <reference path="../typings/knockout/knockout.d.ts"/>

var mainViewModel = (function () {

	function convertData(rawData, callback) {
		if (typeof callback === "undefined")
			return rawData;
		else
			return callback.call(this, rawData);
	};

	function OrderedItem(name, price) {
		var self = this;
		self.name = name;
		self.price = price;
		self.count = ko.observable(1);
		self.changeCount = function (value) {
			self.count(self.count() + value);
		}
	};

	function MainViewModel(modelData) {

		var self = this;

		self.menu = convertData(modelData);

		self.order = ko.observableArray([]);

		self.totalPrice = ko.computed(function () {
			var res = 0;
			for (var i in self.order())
				res += self.order()[i].price * self.order()[i].count();

			return res;
		});

		self.addDish = function (object) {
			for (var i in self.order())
				if (self.order()[i].name == object.name) {
					self.order()[i].changeCount(1);
					return;
				}

			self.order.push(new OrderedItem(object.name, object.price));
		};

		self.removeDish = function (object) {
			if (object.count() > 1)
				object.changeCount(-1);
			else
				self.order.remove(object);
		}

		self.checkout = function () {
			$("body").block("Wait, please...", 3000);
			self.order.removeAll();
		}
	};
	
	return {
		Constructor: MainViewModel
	}
	
})();



ko.applyBindings(new mainViewModel.Constructor(dishesModel.data));