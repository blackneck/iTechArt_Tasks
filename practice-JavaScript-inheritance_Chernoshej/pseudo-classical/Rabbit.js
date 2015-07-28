function Rabbit(name) {
	Rabbit.supercalss.constructor.call(this, name);
}

extend(Rabbit, Animal);

Rabbit.prototype.run = function (speed) {
	console.log(this.name + " is running with the speed " + speed);
};