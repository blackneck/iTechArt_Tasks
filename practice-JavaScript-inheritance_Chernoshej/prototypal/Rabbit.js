function Rabbit(name) {
	var base = new Animal(name);
	var self = object(base);

	self.run = function (speed) {
		console.log(this.name + " is running with the speed " + speed);
	}
	
	self.constrctor = Rabbit;
	
	return self;
}