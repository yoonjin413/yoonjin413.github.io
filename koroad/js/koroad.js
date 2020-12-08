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

    /* gnb 메뉴 노출 액션 */
    $('.gnb > li').on({
        mouseover: function(){
            $('.gnb > li').removeClass('on');
            $('.menu .gnb_sub').css('display', 'none');

            $(this).addClass('on');
            $('.menu .gnb_sub').eq($(this).index()).css('display', 'block');
        },
    });

    /* gnb 메뉴 노출 액션 */
    $('.menu').on({
        mouseleave: function(){
            $('.gnb > li').removeClass('on');
            $('.menu .gnb_sub').css('display', 'none');
            $('.menu .gnb_sub').css('display', 'none');
        },
    });

    /* 공지 탭 메뉴 선택 */
    $('.tab_menu > li').on('click', function() {
        $('.tab_menu > li').each(function(){
            $(this).removeClass('on');
        });

        $(this).addClass('on');

        $('.tab_cont > .con_box').css('display', 'none');
        $('.tab_cont > .con_box').eq($(this).index()).css('display', 'block');
    });

    $('.tab_menu > li').eq(0).click();
});