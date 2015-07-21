function filter(array, callback) {

	var result = [];

	for (var a in array)
		if (callback(array[a]))
			result.push(array[a]);

	return result;
}