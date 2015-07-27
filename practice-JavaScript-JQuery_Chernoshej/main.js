$(document).ready(function () {

    $("#city_header").click(function () {
        $("tr").tableSort(2, 1, "string");
    })

    $("#facility_header").click(function () {
        $("tr").tableSort(0, 1, "string");
    })

    $('#phone').click(function () {
        $("tr").tableSort(1, 1, "int");
    })

    $('#speciality').click(function () {
        $("tr").tableSort(3, 1, "int");
    })
});
