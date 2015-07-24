(function ($) {

    var compare = function (a, b, dataType) {
        
        if (dataType === "int")
            return +a > +b ? 1 : -1;
            
        else if (dataType === "string")
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    }

    $.fn.tableSort = function (columnIndex, direction, dataType) {
        var myTableArray = [],
            col = [],
            buffer;

        $(this).each(function () {
            var arrayOfThisRow = [];
            var rowData = $(this).find("td");
            if (rowData.length > 0) {
                rowData.each(function () { arrayOfThisRow.push($(this).text()); });
                myTableArray.push(arrayOfThisRow);
            }
        });

        for (var i in myTableArray) {
            col.push(myTableArray[i][columnIndex]);
        }


        for (var i = 0; i < col.length - 1; ++i)
            for (var j = 0; j < col.length - i - 1; ++j)
                if (compare(col[j], col[j + 1], dataType) === direction) {                    
                    buffer = col[j];
                    col[j] = col[j + 1];
                    col[j + 1] = buffer;
                    buffer = myTableArray[j];
                    myTableArray[j] = myTableArray[j + 1];
                    myTableArray[j + 1] = buffer;
                }

        myTableArray = decompress(myTableArray);

        $(this).find("td").each(function (i) {
            $(this).text(myTableArray[i]);
        })

        return this;
    };

} (jQuery));

$(document).ready(function () {

    $("#city_header").click(function () {
        $("#tbl tr").tableSort(2, 1, "string");
    })

    $("#facility_header").click(function () {
        $("#tbl tr").tableSort(0, 1, "string");
    })

    $('#phone').click(function () {
        $("#tbl tr").tableSort(1, 1, "int");
    })

    $('#speciality').click(function () {
        $("#tbl tr").tableSort(3, 1, "int");
    })
});
