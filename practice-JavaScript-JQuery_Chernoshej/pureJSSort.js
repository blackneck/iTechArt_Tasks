function getValues(id) {
	
	var myTableArray = [];
    $(id).each(function () {		
        var arrayOfThisRow = [];
        var rowData = $(this).find('td');
        if (rowData.length > 0) {
            rowData.each(function () { arrayOfThisRow.push($(this).text()); });
            myTableArray.push(arrayOfThisRow);
        }
    });
	
	return myTableArray;
}

var sortTable = function (columnIndex, direction, dataType, array) {

	var col = [],
		buffer;

	for (var i in array) {
		col.push(array[i][columnIndex]);
	}

	col.sort();

	for (var i = 0; i < col.length - 1; ++i)
		for (var j = 0; j < col.length - i - 1; ++j)
			if (col[j] < col[j + 1]) {
				buffer = col[j];
				col[j] = col[j + 1];
				col[j + 1] = buffer;
				buffer = array[j];
				array[j] = array[j + 1];
				array[j + 1] = buffer;
			}

	return array;
}

var a = [[8, 2, 3], [13, 4, 0], [-7, 11, 9]];

function display(array) {
	for (var i in array)
		console.log(array[i]);
}

function generate_table(table, array) {
	for (var i in array)
		for (var j in array[i])
			$(table + " td").text(array[i][j]);
}

sortTable(0, 0, 0, a);

// display(sortTable(0, 0, 0, a));