$(function(){
    $('.menu-wrap').css('height', $(window).height());

    $('.folding').click(function(){
        $('.menu-wrap').toggleClass('menu-off');
        $('.container').toggleClass('menu-off');
    })

    $('.menu').children('li').children('a').click(function(){
        $('.menu').children('li').removeClass('on');
        $(this).parent('li').addClass('on');
        $(this).children('.arrow').toggleClass('fa-caret-down fa-caret-up')
        $(this).next('.menu-second').slideToggle(200);
    })
})
