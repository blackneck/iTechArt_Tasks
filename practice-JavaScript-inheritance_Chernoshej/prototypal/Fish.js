function Fish(name) {
	var base = new Animal(name);
	var self = object(base);

	self.float = function (speed) {
		console.log(this.name + " is floating with the speed " + speed);
	};

	self.walk = function () {
		console.log("I'm a fish - I can not walk!1");
	};
	
	self.constructor = Fish;
	
	return self;
}