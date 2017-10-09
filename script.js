$(document).ready(function(){$(".landing").hide().fadeIn(2000);});
$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1200);
});
