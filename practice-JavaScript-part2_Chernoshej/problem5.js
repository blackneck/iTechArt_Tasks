function map(array, callback) {

	var result = [];

	for (var a in array)
		result.push(callback(a));

	return result;
}