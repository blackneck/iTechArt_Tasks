var array = [1, 23, 2, 6, 12, 0];
var a = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

function sum(x, y) {
	return x + y;
}

function mergeArray(a, b) {
	return a.concat(b);
}

function sumarize(x, y, z) {
	return x + y + z;
}

function makeArray(x) {
	if (x <= 1)
		return false;
	return [x - 1, x - 1];
}

function makeRandom(x) {
	return Math.round(Math.random() * 10 * x);
}

function makeRandomArray(x) {
	if (x <= 0)
		return false;
	return [Math.round(Math.random() * 10 * x), x - 1];
}

function isEven(x) {
	return x % 2 == 0;
}

console.log("problem1: partial(callback)");
console.log("var sumWith3 = partial(sum, 3)");
var sumWith3 = partial(sum, 3)
console.log("sumWith3(1)");
console.log(sumWith3(1));

console.log("problem2: curry(callback)");
console.log("var f = curry(sumarize)");
var f = curry(sumarize)
console.log("f(1)(2)(3)");
console.log(f(1)(2)(3));

console.log("problem3: linearFold(array, callback, initialValue)");
console.log("linearFold(a, mergeArray)");
console.log("output: " + linearFold(a, mergeArray));

console.log("problem4: linearUnfold(callback, initialValue)");
console.log("linearUnfold(decrement, 15)");
console.log("output: " + linearUnfold(makeArray, 15));

console.log("problem5: map(array, callback)");
console.log("map(array, makeRandom)");
console.log("output: " + map(array, makeRandom));

console.log("problem6: filter(array, callback)");
console.log("filter(array, isEven)");
console.log("output: " + filter(array, isEven));

console.log("problem7: Average of even");
console.log("solution: var evenCount = filter(isEven, array).length");
var evenCount = filter(array, isEven).length;
console.log("linearFold(filter(isEven, array), sum) / evenCount");
console.log(linearFold(filter(array, isEven), sum) / evenCount);

console.log("problem8: sum of random numbers");
console.log("solution: linearFold(linearUnfold(makeRandomArray, 10), sum)");
console.log("output: " + linearFold(linearUnfold(makeRandomArray, 10), sum));

console.log("problem9: first(array, condition)");
console.log("first(array, isEven)");
console.log("output: " + first(array, isEven));

console.log("problem10: lazyEval(callback)");
console.log("var addThisLater = lazyEval(sum, 5, 7)");
var addThisLater = partial(sum, 5, 9)
console.log("output: " + addThisLater());