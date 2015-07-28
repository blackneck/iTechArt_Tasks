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

function object(o) {
    var F = function () { };
    F.prototype = o;

    return new F();
}

function Rabbit(name) {
	var base = new Animal(name);
	var self = object(base);

	self.run = function (speed) {
		console.log(this.name + " is running with the speed " + speed);
	}

	self.constrctor = Rabbit;

	return self;
}

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

function Carp(name) {
	var base = new Fish(name);
	var self = object(base);

	self.constructor = Carp;

	return self;
}

var animal = new Animal("Roger"),
	fish = new Fish("vasily"),
	carp = new Carp("Igar"),
	rabbit = new Rabbit("Bunny");

rabbit.walk();
rabbit.run(50);
fish.walk();
fish.float(40);
carp.walk();
console.log("carps name is " + carp.name);
carp.float(90);