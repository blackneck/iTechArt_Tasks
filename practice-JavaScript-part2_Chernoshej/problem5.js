function map(callback, array) {

	var result = [];

	for (var a in array)
		result.push(callback(a));

	return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callback(i) {
	return i*i;	
}

console.log(map(callback, arr));