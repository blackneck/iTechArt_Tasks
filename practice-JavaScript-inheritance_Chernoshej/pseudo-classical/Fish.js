function Fish(name) {
	Fish.superclass.constructor.call(this, name);
}

extend(Fish, Animal);

Fish.prototype.float = function (speed) {
	console.log(this.name + " is floating with the speed " + speed);
}

Fish.prototype.walk = function () {
	console.log("I'm a fish - I can not walk!1");
}