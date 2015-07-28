function extend(Child, Parent) {
	var F = function () { };
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}

function Animal(name) {
	this.name = name;
}

Animal.prototype = {
	constructor: Animal,

	walk: function () {
		console.log(this.name + " is walking");
	}
};

function Fish(name) {
	Fish.superclass.constructor.call(this, name);
}

function Rabbit(name) {
	Rabbit.superclass.constructor.call(this, name);
}

extend(Rabbit, Animal);

function Carp(name) {
	Carp.superclass.constructor.call(this, name);
}

extend(Fish, Animal);
extend(Rabbit, Animal);
extend(Carp, Fish);


Fish.prototype.float = function (speed) {
	console.log(this.name + " is floating with the speed " + speed);
}

Fish.prototype.walk = function () {
	console.log("I'm a fish - I can not walk!1");
}

Rabbit.prototype.run = function (speed) {
	console.log(this.name + " is running with the speed " + speed);
};


var rabbit1 = new Rabbit("Roger"),
	fish1 = new Fish("nemo"),
	carp = new Carp("vasily");

rabbit1.walk();
rabbit1.run(50);
fish1.walk();
fish1.float(40);
carp.walk();
console.log("carps name is " + carp.name);
carp.float(90);