function display(array) {
	for (var i in array)
		console.log(array[i]);
}

function decompress(array) {
	var out = [];
	for (var i in array)
		for (var j in array[i])
			out.push(array[i][j]);
	return out;
}

var a = [[8, 2, 3], [13, 4, 0], [-7, 11, 9]];

var array = [
	["CCC", "00001111", "Amsterdam", "-6"],
	["JJJ", "55544444", "London", "-8"],
	["AAA", "33332222", "Paris", "-19"],
];
var s1 = "A";
var s2 = "P ";

// console.log(s1 > s2 ? s1 : s2);