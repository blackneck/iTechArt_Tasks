function Animal(name) {
	this.name = name;
}

Animal.prototype = {
	constructor: Animal,
	
	walk: function () {
		console.log(this.name + " is walking");
	}
};