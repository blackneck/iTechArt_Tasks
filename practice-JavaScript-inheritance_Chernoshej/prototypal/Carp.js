function Carp(name) {
	var base = new Fish(name);
	var self = object(base);
		
	self.constructor = Carp;
	
	return self;	
}