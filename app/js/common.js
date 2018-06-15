function scrollAnimate(selector){
    var absOffsetTop = selector.offset().top - $(window).height();
    var scrollWin = $(window).scrollTop();
    if (scrollWin >= absOffsetTop - 100) {
        //console.log('addClass animate');
        selector.addClass('animate');
    } else {
        //console.log('removeClass animate')
        selector.removeClass('animate');
    }
};
function MainSliderInit(){//слайдер на главной странице
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="45px"><path fill-rule="evenodd" opacity="0.2" fill="rgb(25, 41, 49)" d="M21.579,45.003 C20.887,44.434 20.307,43.754 19.688,43.111 C16.856,40.169 14.018,37.233 11.185,34.293 C7.560,30.530 3.937,26.765 0.314,23.000 C-0.082,22.589 -0.087,22.266 0.303,21.865 C2.924,19.166 5.547,16.472 8.166,13.772 C12.050,9.771 15.931,5.769 19.810,1.763 C20.390,1.165 20.932,0.528 21.579,-0.002 C21.843,-0.002 22.106,-0.002 22.370,-0.002 C23.127,0.555 23.196,1.110 22.545,1.788 C20.771,3.635 18.982,5.469 17.198,7.307 C14.670,9.911 12.141,12.515 9.613,15.119 C7.380,17.419 5.146,19.718 2.913,22.017 C2.518,22.424 2.519,22.422 2.921,22.840 C7.055,27.130 11.188,31.421 15.321,35.712 C17.636,38.116 19.952,40.519 22.267,42.923 C22.359,43.018 22.452,43.111 22.541,43.208 C23.173,43.903 23.121,44.445 22.370,45.003 C22.106,45.003 21.843,45.003 21.579,45.003 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="45px"><path fill-rule="evenodd" opacity="0.2" fill="rgb(25, 41, 49)" d="M1.452,-0.003 C2.144,0.566 2.725,1.246 3.343,1.889 C6.175,4.831 9.013,7.766 11.847,10.707 C15.472,14.470 19.095,18.235 22.718,22.000 C23.114,22.411 23.118,22.734 22.728,23.135 C20.108,25.834 17.484,28.528 14.865,31.227 C10.981,35.229 7.100,39.231 3.221,43.236 C2.641,43.835 2.100,44.472 1.452,45.002 C1.188,45.002 0.925,45.002 0.662,45.002 C-0.096,44.445 -0.165,43.890 0.486,43.212 C2.261,41.365 4.049,39.531 5.833,37.693 C8.361,35.089 10.890,32.485 13.419,29.881 C15.652,27.581 17.885,25.282 20.118,22.982 C20.514,22.576 20.512,22.578 20.110,22.160 C15.976,17.870 11.844,13.579 7.710,9.288 C5.395,6.884 3.079,4.481 0.764,2.077 C0.673,1.982 0.579,1.889 0.491,1.792 C-0.142,1.096 -0.090,0.555 0.662,-0.003 C0.925,-0.003 1.188,-0.003 1.452,-0.003 Z"/></svg>' +
        '</button>'
    });



    $(document).on('click', '.slider-trigers .item-t', function () {
        var slideIndex = $(this).index();
        console.log('slideIndex = ', slideIndex);
        // $( '.main-slider' ).slickGoTo( parseInt(slideIndex) );

        var slider = $('.main-slider');
        slider[0].slick.slickGoTo(parseInt(slideIndex));

    });


}
function feedbackSliderSliderInit(){//слайдер на главной странице
    $('.feedback-slider').on('init', function(slick){
        console.log('.feedback-slider init was hit');

        $('.feedback-slider .slick-slide').each(function(index){
            $(this).attr('data-mh',$('.feedback-slider .slick-slide')[index].clientHeight+26);
        });

        heightFeedback();

    });

    $('.feedback-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        heightFeedback();
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="29px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M7.852,14.105 C7.972,14.185 8.110,14.246 8.209,14.347 C10.835,17.037 13.456,19.732 16.078,22.426 C17.313,23.695 17.316,25.222 16.087,26.487 C15.869,26.712 15.651,26.937 15.432,27.160 C14.292,28.318 12.763,28.328 11.627,27.167 C9.521,25.014 7.423,22.852 5.322,20.694 C3.851,19.183 2.379,17.673 0.909,16.161 C-0.295,14.922 -0.291,13.098 0.919,11.854 C4.466,8.210 8.013,4.567 11.560,0.925 C12.777,-0.324 14.275,-0.324 15.490,0.921 C15.717,1.154 15.945,1.387 16.171,1.621 C17.281,2.771 17.285,4.355 16.174,5.498 C13.528,8.219 10.879,10.937 8.230,13.655 C8.129,13.758 8.008,13.839 7.897,13.931 C7.882,13.989 7.867,14.047 7.852,14.105 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="28px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M9.148,13.895 C9.028,13.816 8.890,13.755 8.791,13.653 C6.165,10.969 3.544,8.281 0.922,5.593 C-0.313,4.326 -0.316,2.803 0.913,1.541 C1.131,1.317 1.349,1.092 1.568,0.869 C2.708,-0.286 4.237,-0.296 5.373,0.863 C7.479,3.011 9.577,5.168 11.678,7.321 C13.149,8.828 14.621,10.335 16.091,11.843 C17.295,13.080 17.291,14.900 16.081,16.142 C12.534,19.777 8.987,23.412 5.440,27.046 C4.223,28.292 2.725,28.292 1.510,27.049 C1.283,26.817 1.055,26.585 0.829,26.352 C-0.281,25.203 -0.285,23.624 0.826,22.483 C3.472,19.768 6.121,17.056 8.770,14.345 C8.871,14.242 8.992,14.160 9.103,14.069 C9.118,14.011 9.133,13.953 9.148,13.895 Z"/></svg>' +
        '</button>'
    });
}

$(document).on('click', '.lvl-3h .btn-find', function () {

    $('.find-form').fadeIn();

});
$(document).on('click', '.lvl-3h .close-find', function () {
    $('.find-form').fadeOut();
});

$(document).on('click', '.tab-trigger-r .tab-trigger-c .tab-trigger-i button', function () {

    $('.tab-trigger-r .tab-trigger-c .tab-trigger-i button').removeClass('active')
    $(this).toggleClass('active');

    $('.tab-content-cc .tab-content-r').removeClass('active');

    $('.tab-content-cc .tab-content-r').eq($(this).index()).addClass('active');
    console.log('index = ', $(this).index())

});
$(document).on('click', '.garmoshka-r .garmoshka-c .js-triger-g', function () {
 
    $(this).next('.content-tr').slideToggle();

});


function imgIntoFancybox() {
    $('.typepage .content').find('img').each(function(index, element) {
        var imgSrc = $(element).attr('src'),
            wrapTxt = '<a data-fancybox="typepage-gal" href="'+imgSrc+'"></a>';

        $(element).wrap(wrapTxt);
    });
}

function sameSliderInit(){//слайдер на главной странице
    $('.same-slider').slick({
        dots: false,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="45px"><path fill-rule="evenodd" opacity="0.2" fill="rgb(25, 41, 49)" d="M21.579,45.003 C20.887,44.434 20.307,43.754 19.688,43.111 C16.856,40.169 14.018,37.233 11.185,34.293 C7.560,30.530 3.937,26.765 0.314,23.000 C-0.082,22.589 -0.087,22.266 0.303,21.865 C2.924,19.166 5.547,16.472 8.166,13.772 C12.050,9.771 15.931,5.769 19.810,1.763 C20.390,1.165 20.932,0.528 21.579,-0.002 C21.843,-0.002 22.106,-0.002 22.370,-0.002 C23.127,0.555 23.196,1.110 22.545,1.788 C20.771,3.635 18.982,5.469 17.198,7.307 C14.670,9.911 12.141,12.515 9.613,15.119 C7.380,17.419 5.146,19.718 2.913,22.017 C2.518,22.424 2.519,22.422 2.921,22.840 C7.055,27.130 11.188,31.421 15.321,35.712 C17.636,38.116 19.952,40.519 22.267,42.923 C22.359,43.018 22.452,43.111 22.541,43.208 C23.173,43.903 23.121,44.445 22.370,45.003 C22.106,45.003 21.843,45.003 21.579,45.003 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="45px"><path fill-rule="evenodd" opacity="0.2" fill="rgb(25, 41, 49)" d="M1.452,-0.003 C2.144,0.566 2.725,1.246 3.343,1.889 C6.175,4.831 9.013,7.766 11.847,10.707 C15.472,14.470 19.095,18.235 22.718,22.000 C23.114,22.411 23.118,22.734 22.728,23.135 C20.108,25.834 17.484,28.528 14.865,31.227 C10.981,35.229 7.100,39.231 3.221,43.236 C2.641,43.835 2.100,44.472 1.452,45.002 C1.188,45.002 0.925,45.002 0.662,45.002 C-0.096,44.445 -0.165,43.890 0.486,43.212 C2.261,41.365 4.049,39.531 5.833,37.693 C8.361,35.089 10.890,32.485 13.419,29.881 C15.652,27.581 17.885,25.282 20.118,22.982 C20.514,22.576 20.512,22.578 20.110,22.160 C15.976,17.870 11.844,13.579 7.710,9.288 C5.395,6.884 3.079,4.481 0.764,2.077 C0.673,1.982 0.579,1.889 0.491,1.792 C-0.142,1.096 -0.090,0.555 0.662,-0.003 C0.925,-0.003 1.188,-0.003 1.452,-0.003 Z"/></svg>' +
        '</button>'
    });



    $(document).on('click', '.slider-trigers .item-t', function () {
        var slideIndex = $(this).index();
        console.log('slideIndex = ', slideIndex);
        // $( '.main-slider' ).slickGoTo( parseInt(slideIndex) );

        var slider = $('.same-slider');
        slider[0].slick.slickGoTo(parseInt(slideIndex));

    });
}

function setEqFieldHeight() { //Установка высоты для строк в блоке сравненеие
    var fieldArr = $('.equaiments .txt-field-c .txt-field'),
        txtArr = $('.equaiments .discr p'),
        maxHeight = 0;
    
    if($(window).width() < 768){
        console.log('win < 768');
        for(var i = 0; i < txtArr.length; i++){
            var tmpFieldsArr = $('.equaiments .txt-field-c .txt-field:nth-child('+String(i+1)+')');
            maxHeight = 0;
            //вычисляем высоту шапки
            var thHeight = $('.equaiments .discr p').eq(i).height() + 20;

            //вычисляем максимальную высоту контентной части

            tmpFieldsArr.each(function (index, value) {
                if(maxHeight < ($(this).height())){
                    maxHeight = $(this).height();
                }
            });

            console.log('thHeight = ', thHeight);
            tmpFieldsArr.height(maxHeight + thHeight + 'px');
            tmpFieldsArr.css('padding-top', String(thHeight-10) + 'px');
            $('.equaiments .discr p').eq(i).height(maxHeight + thHeight + 'px');
        }
    } else {
        console.log('win > 768');
        for(var i = 0; i < txtArr.length; i++){
            var tmpFieldsArr = $('.equaiments .txt-field-c .txt-field:nth-child('+String(i+1)+')');
            maxHeight = $('.equaiments .discr p').eq(i).height();

            tmpFieldsArr.each(function (index, value) {
                if(maxHeight < $(this).height()){
                    maxHeight = $(this).height();
                }
            });
            maxHeight += 30;
            tmpFieldsArr.height(maxHeight + 'px');
            $('.equaiments .discr p').eq(i).height(maxHeight + 'px');
        }
    }
    


}


 var calcEqualDevices = false;//Расчитывалась ли высота для мобильных устройств
//
// $(window).resize(function () {
//     if(calcEqualDevices = false){
//
//     }
// });


$(function() {

    //todo: Добавить имена товаров в мобильных устройствах
    if($(window).width() < 768){
        setEqFieldHeight();
        // calcEqualDevices = true;
    } else {
        $('.equaiments-cont').mCustomScrollbar({
            theme: "dark",
            axis:"x",
            callbacks:{
                onInit: function(){
                    if(!calcEqualDevices){
                        setTimeout(function() { setEqFieldHeight(); }, 1000);
                    }
                    calcEqualDevices = true;
                }
            },
            scrollInertia: 1,
            documentTouchScroll: false,
            contentTouchScroll: true,
            mouseWheel: false
        });
    }





    /*datepicker start*/
    //Календарь для выбора даты
    var now = new Date();
    var minDate = new Date(new Date().getTime() + 30 * 60 * 1000);//now +30 минут
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()+30);//now + 30 day

    var datetime = $('.datepicker-here').datepicker({
        dateFormat : 'dd.mm.yyyy',
        minDate: minDate,
        maxDate: maxDate,
        onSelect: function(fd, d, picker) {
            console.log('dateSelected', $('.datepicker-here').val());
        }
    });

    /*datepicker end*/


    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('input:not(.vue-input), select:not(.vue-select)').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());

    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide"
        ],
        "offCanvas": {
            "position": "bottom"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');


        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $("#my-header").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('#my-header').height() + $(window).scrollTop());
        //bugfix fixed menu 2
        $("#my-header").css({ top: $(window).scrollTop() });
    });
    api.bind( "open:before", function() {
        $('#my-menu').css('top', $('#my-header').outerHeight() - $(window).scrollTop());
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $("#my-header").css({ top: 0});
    });

    imgIntoFancybox();

});
