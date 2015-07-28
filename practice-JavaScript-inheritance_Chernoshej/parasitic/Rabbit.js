function Rabbit(name) {
	Animal.call(this, name);

	this.run = function (speed) {
		console.log(this.name + " is running with the speed " + speed);
	};
}