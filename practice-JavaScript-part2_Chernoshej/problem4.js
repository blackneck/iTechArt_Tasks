function linearUnfold(callback, initialValue) {
	var result = [],
		val = [, initialValue];

	while (val = callback(val[1]))
		result.push(val[0]);

	return result;
}
