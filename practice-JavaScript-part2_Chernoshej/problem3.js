function linearFold(array, callback, initialValue) {

	var previous = array[0],
		i = 1;

	if (typeof initialValue !== "undefined") {
		previous = initialValue;
		i = 0;
	}

	for (; i < array.length; ++i) 
		previous = callback(previous, array[i], i, array)	

	return previous;
}
