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
        pager: false,
        infiniteLoop: true,
        slideWidth: 404,
        pause: 3000,
        speed: 700,
    });
});

