$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('#navbar').addClass('solid');
    } else {
        $('#navbar').removeClass('solid');
    }
});