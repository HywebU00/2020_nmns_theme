// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
});
// 快速連結
// $(function(){
//     $('.group01').click(function() {
//         $('body,html').stop(true, true).animate({ scrollTop: $('.groupA').offset().top - 90 }, 0, 'easeOutExpo');
//     });
//     $('.group02').click(function() {
//         $('body,html').stop(true, true).animate({ scrollTop: $('.groupB').offset().top - 90 }, 0, 'easeOutExpo');
//     });
//     $('.group03').click(function() {
//         $('body,html').stop(true, true).animate({ scrollTop: $('.groupC').offset().top - 90 }, 0, 'easeOutExpo');
//     });
//     $('.group04').click(function() {
//         $('body,html').stop(true, true).animate({ scrollTop: $('.groupD').offset().top - 90 }, 0, 'easeOutExpo');
//     });
// })
$(function() {
    $('.menu ul li a').each(function(index, el) {
        $(this).bind('click', function() {
            var num = $(this).parent('li').index() + 1;
            //先抓每一個li的序列，index從0開始，所以要+1
            $('body,html').stop(true, true).animate({
                scrollTop: $('.s_' + num).offset().top - 90
            }, 0, 'easeOutExpo');
            //移動body scrollTop，做動畫，去取對應的section序列設定為offset=0，把該section推到最頂端
            return false;
        });
    });
});
/*-----------------------------------*/
/////////////燈箱設定/////////////
/*-----------------------------------*/
$(function() {
    // 1
    $('#modal1').hide(); //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $('.modal_overlay').hide(); //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal() {
        $('#modal1').fadeOut(400);
        $('.modal_overlay').fadeOut(400);
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);

});
$(function() {
    // 2
    $('#modal2').hide(); //先隱藏視窗
    $('.modal2').after('<div class="modal_overlay2"></div>'); //新增透明底
    $('.modal2').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $('.modal_overlay2').hide(); //隱藏透明底
    //按鈕動作
    $('#openModal2').click(function(e) {
        $('.modal_overlay2').fadeIn(100);
        $('.modal2').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal2() {
        $('#modal2').fadeOut(400);
        $('.modal_overlay2').fadeOut(400);
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay2').click(closeModal2);
    $('.modal2 .close').click(closeModal2);
    $('.modal2 .cancel').click(closeModal2);
});
$(function() {
    // 3
    $('#modal3').hide(); //先隱藏視窗
    $('.modal3').after('<div class="modal_overlay3"></div>'); //新增透明底
    $('.modal3').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
    $('.modal_overlay3').hide(); //隱藏透明底
    //按鈕動作
    $('#openModal3').click(function(e) {
        $('.modal_overlay3').fadeIn(100);
        $('.modal3').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal3() {
        $('#modal3').fadeOut(400);
        $('.modal_overlay3').fadeOut(400);
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay3').click(closeModal3);
    $('.modal3 .close').click(closeModal3);
});
// 手機版h1固定
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) { /* 要滑動到選單的距離 */
            $('h1').addClass('h1fixed'); /* 幫選單加上固定效果 */
            $('.header').addClass('header_fixed');
        } else {
            $('h1').removeClass('h1fixed'); /* 移除選單固定效果 */
            $('.header').removeClass('header_fixed');
        }
    });
});

// 
