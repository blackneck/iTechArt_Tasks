function linearFold(array, callback, initialValue) {

	var previous = array[0],
		i = 1;

	if (typeof initialValue !== "undefined") {
		previous = initialValue;
		i = 0;
	}

	for (; i < array.length; ++i) {
		previous = callback(previous, array[i])
	}

	return previous;
}

var a = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 , -1];

function min(a, b) {
	return a < b ? a : b;
}

function sum(a, b) {
	return a + b;
}

function callback(a, b) {
	return a.concat(b);
}

console.log(linearFold(a, callback));
console.log(linearFold(b, min));