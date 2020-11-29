$(document).ready(function(){
    $('.sub02_slide ul').bxSlider({
        auto: true,
        controls: true,
        pager: true,
        infiniteLoop:true,
        slideWidth: 950,
        pagerCustom: '.sub02_slide .tab'
    });

    $('.sub06_slide ul').bxSlider({
        auto: true,
        controls: true,
        pager: true,
        infiniteLoop:true,
        slideWidth: 950,
        pagerCustom: '.sub06_slide .tab'
    });
});

// 해당 영역으로 이동하기
function goPage(el) {
    $('html, body').stop().animate({
        scrollTop: $(el).offset().top
    }, 'slow');
    return false;
};