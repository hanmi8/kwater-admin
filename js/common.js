$(function(){
    $('.menu-wrap').css('min-height', $(window).height());

    $('.folding').click(function(){
        $('.menu-wrap').toggleClass('menu-off');
        $('.container').toggleClass('menu-off');
    })

    if($(window).width() < 1024) {
        $('.menu-wrap').addClass('menu-off');
        $('.container').addClass('menu-off');
    }else{
        $('.menu-wrap').removeClass('menu-off');
        $('.container').removeClass('menu-off');
    }
    $(window).resize(function(){
        if($(window).width() < 1024) {
            $('.menu-wrap').addClass('menu-off');
            $('.container').addClass('menu-off');
        }else{
            $('.menu-wrap').removeClass('menu-off');
            $('.container').removeClass('menu-off');
        }

    })

    $('.menu').children('li').children('a').click(function() {
        $('.menu').children('li').removeClass('on');
        $(this).parent('li').addClass('on');
        $(this).children('i').toggleClass('fa-caret-down fa-caret-up')
        if($(this).next('.menu-second').hasClass('on')){
            $(this).next('.menu-second').slideUp(200);
        }else{
            $(this).next('.menu-second').slideDown(200);
        }
        $(this).next('.menu-second').toggleClass('on')

    })

    $('.tabs').find('a').click(function(e){
        e.preventDefault();
       var tabID = $(this).attr('href');
       $('.tab-contents').hide();
       $(tabID).show();
       $(this).parent('li').siblings('li').removeClass('on');
       $(this).parent('li').addClass('on');
    });

    $('.modalCall').click(function(){
        var modalID = $(this).attr('name');
        $('body').css('overflow', 'hidden');
        $('#' + modalID).show();
        if($(window).height() < 768) {
            $('#' + modalID + ' .modal-body').css('max-height', $(window).height() - $('#' + modalID + ' .modal-header').outerHeight() - $('#' + modalID + ' .modal-footer').outerHeight() - 40);
        }
    })
    $('.modal-close').click(function(){
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })
})
