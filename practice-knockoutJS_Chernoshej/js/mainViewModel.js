function convertData(rawData, callback) {
	if (typeof callback === "undefined")
		return rawData;
	else
		return callback.call(this, rawData);
}

function orderItem(name, price, count) {
	var self = this;
	self.name = name;
	self.price = price;
	self.count = ko.observable(count);
}

function mainViewModel(modelData) {

	var self = this;

	self.menu = convertData(modelData);

	self.order = ko.observableArray([]);

	self.totalPrice = ko.computed(function () {
		var res = 0;
		for (var i in self.order()) {
			res += self.order()[i].price * self.order()[i].count();
		}
		return res;
	});

	//TODO: refactoring
	self.addDish = function (object) {
		for (var i in self.order())
			if (self.order()[i].name == object.name) {
				self.order()[i].count(self.order()[i].count() + 1);
				return;
			}

		self.order.push(new orderItem(object.name, object.price, 1));
	};

	//TODO: refactoring
	self.removeDish = function (object) {
		for (var i in self.order())
			if (self.order()[i].name == object.name) {
				if (self.order()[i].count() > 1) {
					self.order()[i].count(self.order()[i].count() - 1);
					return;
				}
				else {
					self.order.splice(i, 1);
					return;
				}

			}
	}

	self.checkout = function () {
		$('body').block("Wait, please...", 3000);
		self.order.removeAll();
	}
}

ko.applyBindings(new mainViewModel(dishesModel.data));