$(document).ready(function () {

    $('#offCanvas').offcanvas({
        modifiers: 'left, overlay',
        triggerButton: '#triggerButton'
    });

    // Bottom fly form subscribe
    $('#off-canvas-bottom').offcanvas({
        modifiers: 'bottom, overlay',
        triggerButton: '#off-canvas-bottom-trigger',
        modalClass: "c-offcanvas-bg-bottom"
    });



    // Определяем мобилу
    var isMobile = false;
    if (window.matchMedia("screen and (min-width: 1px) and (max-width:575px)").matches) {
        isMobile = true;
    }
    // console.log('isMobile: ', isMobile);
    if(!isMobile) {
        $('#off-canvas-bottom-trigger').hide();
    }

    // подписка открыта при загрузке, если нет куки subscribe_hide на сутки
    var dataOffcanvas = $('#off-canvas-bottom').data('offcanvas-component');

    if ((!Cookies.get('subscribe_hide')) && (isMobile)) {
        dataOffcanvas.open();
    };
    dataOffcanvas.onClose  = function() {
        if (!Cookies.get('subscribe_hide')) {
            Cookies.set('subscribe_hide', 1, {expires: 1, path: '/'});
        };
    };

    // sliders
    $('.card-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.brands-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        dots: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-for',
        // centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        dots: true,
    });


    // if (window.matchMedia("screen and (min-width: 1px) and (max-width:991px)").matches) {
    //     // console.log('mobile');
    //     if ($('#sidebar .collapse').hasClass('show')) {
    //         $('#sidebar .collapse').removeClass('show');
    //     }
    // }

    function toggleSidebar() {
        var w = $(window).width();
        if (w <= 991) {
            $('#sidebar .collapse').removeClass('show');
        } else {
            $('#sidebar .collapse').addClass('show');
        }
    }

    $(window).resize(function () {
        toggleSidebar();
    });

    toggleSidebar();


    // Sticky navbar
    // =========================

    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });



});