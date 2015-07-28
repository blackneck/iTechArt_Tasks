function Animal(name) {
	var self = {
		name: name,

		walk: function () {
			console.log(this.name + " is walking");
		}
	};

	self.constructor = Animal;

	return self;
};