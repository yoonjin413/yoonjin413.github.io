$(document).ready(function () {

});

// 스크롤 애니메이션
$(window).on('scroll',function() {
    $('.scrollAni').each( function(i){

        var bottom_of_element = $(this).offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_element ){
            $(this).addClass('on');
        }

    });
});

// 해당 영역으로 이동하기
function goPage(el) {
    var winSc = $(window).scrollTop();

    $('html, body').stop().animate({
        scrollTop: $(el).offset().top
    }, 500);
    return false;
}