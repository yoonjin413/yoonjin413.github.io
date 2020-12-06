$(document).ready(function(){
    /* .top_slide slider */
    $('.top_slide ul').bxSlider({
        mode: 'fade',
        auto: true,
        pager: false,
        controls: false,
        infiniteLoop:true,
        slideWidth: 995,
    });

    /* .slide_area slider */
    $('.slide_area ul').bxSlider({
        auto: true,
        pager: true,
        controls: false,
        infiniteLoop: true,
        slideWidth: 995,
        onSliderLoad:function(currentIndex){
            $('.slide_area ul li').eq(currentIndex+1).addClass('on');
        },
        onSlideBefore:function($slideElement, oldIndex, newIndex){
            $('.slide_area ul li').removeClass('on');
            $($slideElement).addClass('on');
        }
    });

    /* .info_slide slider */
    $('.info_slide ul').bxSlider({
        auto: true,
        pager: true,
        controls: true,
        infiniteLoop:true,
        slideWidth: 270,
        pagerType: 'short',
        pagerShortSeparator: '/',
    });

});
