$(document).ready(function(){

    $('.faq-question').on('click',function(){
        const $item = $(this).parent('.faq-item');
        const $answer = $(this).next('.faq-answer');

        const isOpen = $item.hasClass('open');

        $('.faq-item').removeClass('open');
        $('.faq-answer').slideUp(250)

        if (!isOpen){
            $item.addClass('open');
            $answer.slideDown(250);
        }
    });

    $('.btnfilter').on('click',function(){

        $('.btnfilter').removeClass('active');
        $(this).addClass('active');

        const tombolId = $(this).attr('id');

        $('.faq-item').removeClass('open');
        $('.faq-answer').hide();
        $('.faq-item').hide();

        if(tombolId === 'filter-semua'){
            $('.faq-item').fadeIn();
        }else if (tombolId === 'filter-html'){
            $(".faq-item[data-category='html']").fadeIn();
        }else if (tombolId === 'filter-css'){
            $(".faq-item[data-category='css']").fadeIn();
        }else if (tombolId === 'filter-js'){
            $(".faq-item[data-category='js']").fadeIn();
        }
    });
   

});