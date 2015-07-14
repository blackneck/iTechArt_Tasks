// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays

// typeof [1, 2, 4] === 'object';

// typeof new Date() === 'object';

var trueType = function (entity) {
	var toString = Object.prototype.toString;
	var val = toString.call(entity);
	return val.substring(8, val.length - 1); 				
}

var isArray = function (entity) {	
	return trueType(entity) === "Array";	
}

var isBoolean = function (entity) {	
	return trueType(entity) === "Boolean";
}

var isDate = function (entity) {
	return trueType(entity) === "Date";
}