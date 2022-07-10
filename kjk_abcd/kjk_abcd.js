$(function() {
    setTimeout(function() {
        console.log('this is kjk_abcd.html');
    }, 100);

    $('.cont_slide ul').bxSlider({
        pager: false,
        infiniteLoop:true,
        slideWidth: 590,
        slideMargin:24,
        speed: 30000,
        ticker: true
    });
});

