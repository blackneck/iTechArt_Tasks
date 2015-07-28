function Animal(name) {
	this.name = name;

	this.walk = function () {
		console.log(this.name + " is walking");
	}
}