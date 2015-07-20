var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(a, b) {
	return a + b;
}

function isEven(a) {
	return a % 2 == 0;
}

console.log(linearFold(sum, filter(isEven, arr)));