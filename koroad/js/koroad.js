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

    /* .slide_area slider */
    $('.slide_area ul').bxSlider({
        auto: true,
        pager: false,
        controls: false,
        infiniteLoop:true,
        slideWidth:995,
        //slideMargin:10,
        onSliderLoad:function(currentIndex){
            $('.slide_area ul li').eq(currentIndex+1).addClass('on');
        },
        onSlideBefore:function($slideElement, oldIndex, newIndex){
            $('.slide_area ul li').removeClass('on');
            $($slideElement).addClass('on');
        }
    });



});

// 해당 영역으로 이동하기
function goPage(el) {
    $('html, body').stop().animate({
        scrollTop: $(el).offset().top
    }, 'slow');
    return false;
};