function lazyEvaluation(callback) {			
	
	var args = Array.prototype.slice.call(arguments, 1);
	
	return function () {
		return callback.apply(this, args);	
	}
}