function partial(callback) {
	var slice = Array.prototype.slice;

	var args = slice.call(arguments, 1);

	return function () {

		return callback.apply(this, args.concat(slice.call(arguments)));
	}
}