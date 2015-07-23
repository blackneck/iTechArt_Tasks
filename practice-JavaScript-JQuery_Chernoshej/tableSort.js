// (function ($) {

//     $.fn.sortTable = function (columnIndex, direction, dataType) {

//         var th = $(this),
//             table = $("table"),
//             thIndex = th.index(),
//             inverse = false;

//         table.find('td').filter(function () {

//             return $(this).index() === thIndex;

//         }).sortElements(function (a, b) {

//             return $.text([a]) > $.text([b]) ?
//                 inverse ? -1 : 1
//                 : inverse ? 1 : -1;

//         }, function () {
                    
//             // parentNode is the element we want to move
//             return this.parentNode;

//         });

//         inverse = !inverse;
//     };
// } (jQuery));