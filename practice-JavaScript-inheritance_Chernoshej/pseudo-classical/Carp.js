function Carp (name) {
	Carp.superclass.constructor.call(this, name);
}

extend(Carp, Fish);