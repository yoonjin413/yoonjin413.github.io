// 해당 영역으로 이동하기
var go_page = function(el) {
    $('html, body').stop().animate({
        scrollTop: $(el).offset().top
    }, 'slow');
    return false;
};