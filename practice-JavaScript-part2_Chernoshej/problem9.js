function first(array, condition) {

	for (var i in array)
		if (condition(array[i]))
			return array[i]
}