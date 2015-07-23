$(document).ready(function () {
    

    // console.log(sortTable(0, 0, 0, myTableArray));
    // display(sortTable(2, 0, 0, myTableArray));
    display(getValues("#tbl tr"));
    
    display(sortTable(0,0,0,getValues("#tbl tr")));
    // generate_table("table", sortTable(0, 0, 0, myTableArray));

});

