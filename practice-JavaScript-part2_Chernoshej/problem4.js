function linearUnfold(callback, initialValue) {
	var result = [initialValue];

	while (callback(initialValue)[1]) 
		result.push(initialValue = callback(initialValue)[0])

	return result;
}

function callback(x) {
	return [x - 1, x > 0];
}

console.log(linearUnfold(callback, 15));