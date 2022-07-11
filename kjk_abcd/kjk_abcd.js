$(function() {
    setTimeout(function() {
        console.log('this is kjk_abcd.html');
    }, 100);

    $('.sect03 .cont_slide ul').bxSlider({
        pager: false,
        infiniteLoop:true,
        slideWidth: 590,
        slideMargin:24,
        speed: 30000,
        ticker: true
    });

    $('.sect05 .cont_slide ul').bxSlider({
        auto: true,
        controls: true,
        pager: false,
        infiniteLoop: true,
        slideWidth: 404,
        speed: 700,
    });

    $('.sect09 .btn_cert').on('click', function() {
        $('.sect10').css('display', 'block');
    });
});

var layer_close = function() {
    $('.sect10').css('display', 'none');
};

