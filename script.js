$(document).ready(function(){$(".landing").hide().fadeIn(1000);});
$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1200);
});
