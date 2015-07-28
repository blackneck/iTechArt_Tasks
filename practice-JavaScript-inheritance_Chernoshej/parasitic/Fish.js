function Fish(name) {
	Animal.call(this, name);

	this.float = function (speed) {
		console.log(this.name + " is floating with the speed " + speed);
	};

	this.walk = function () {
		console.log("I'm a fish - I can not walk!1");
	}
}