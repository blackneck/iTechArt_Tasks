function filter(callback, array) {

	var result = [];

	for (var a in array)
		if (callback(a))
			result.push(a);

	return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callback(i) {
	return i % 2 == 0;
}

console.log(filter(callback, arr));