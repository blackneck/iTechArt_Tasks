function Animal(name) {
	this.name = name;

	this.walk = function () {
		console.log(this.name + " is walking");
	}
}

function Fish(name) {
	Animal.call(this, name);

	this.float = function (speed) {
		console.log(this.name + " is floating with the speed " + speed);
	};

	this.walk = function () {
		console.log("I'm a fish - I can not walk!1");
	}
}

function Rabbit(name) {
	Animal.call(this, name);

	this.run = function (speed) {
		console.log(this.name + " is running with the speed " + speed);
	};
}

function Carp(name) {
	Fish.call(this, name);
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