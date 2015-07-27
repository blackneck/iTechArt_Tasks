(function ($) {

    var compare = function (a, b, dataType) {

        if (dataType === "int") {
            return +a > +b ? 1 : -1;
        }

        else if (dataType === "string")
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    }

    $.fn.tableSort = function (columnIndex, direction, dataType) {
        var myTableArray = [];
        
        //retrieve alements from HTML table
        $(this).each(function () {
            var arrayOfThisRow = [];
            var rowData = $(this).find("td");
            if (rowData.length > 0) {
                rowData.each(function () { arrayOfThisRow.push($(this).text()); });
                myTableArray.push(arrayOfThisRow);
            }
        });

        for (var i = 0; i < myTableArray.length - 1; ++i)
            for (var j = 0; j < myTableArray.length - i - 1; ++j) {
                if (compare(myTableArray[j][columnIndex], myTableArray[j + 1][columnIndex], dataType) === direction) {                        
                    //swap elements
                    myTableArray[j + 1] = [myTableArray[j], myTableArray[j] = myTableArray[j + 1]][0];
                }
            }
                            
        //convert to 1D array
        myTableArray = (function (array) {
            var out = [];
            for (var i in array)
                for (var j in array[i])
                    out.push(array[i][j]);
            return out;
        })(myTableArray);

        $(this).find("td").each(function (i) {
            $(this).text(myTableArray[i]);
        })

        return this;
    };

} (jQuery));