function lazyEval(callback) {
	return partial.apply(callback, arguments);		
}