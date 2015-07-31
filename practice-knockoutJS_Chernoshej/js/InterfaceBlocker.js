(function ($) {
    $.fn.block = function (text, delay) {
        $(this).each(function () {
            var block = "<div class='additional-block'></div>";
            $(this).append(block);
            $('.additional-block')
                .append("<img src='img/loader.gif'/>")
                .append("<p>" + text + "</p>");
            setTimeout(function () {                
                // $('.additional-block').remove();
                $('.additional-block')
                    .append("<p>" + "Complete!" + "</p>");
                setTimeout(function () {
                    $('.additional-block').remove();
                }, 1000)
            }, delay);
        });
    }
})(jQuery);