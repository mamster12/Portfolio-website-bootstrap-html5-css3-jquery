
document.onreadystatechange = function () {

    if (document.readyState == "interactive") {
        const preloader = $('.preloader');
        const preloaderImg = $('.sharingan');
        var allElement = $("*");
        var length = allElement.length;
        for (var i = 0; i <= length; i++) {
            if (i < length) {
                console.log('loading...');
            } else {

                setTimeout(function () {
                    preloader.addClass('preload-finished');
                    preloaderImg.addClass('preload-finished-img');
                    // console.log('end!');

                    /* animation on scroll */
                    $('.js--1').addClass('animate__animated animate__fadeInUp');
                    $('.js--2').addClass('animate__animated animate__fadeInUp');
                    $('.js--3').addClass('animate__animated animate__fadeInUp');
                    $('.js--4').addClass('animate__animated animate__fadeIn');




                    /* scrollmagic animation */
                    const flightPath = {
                        curviness: 0,
                        autoRotate: false,
                        values: [
                            { x: window.innerWidth + window.innerWidth, y: 0 }
                        ]
                    }

                    const tween = new TimelineLite();

                    tween.add(
                        TweenLite.to('.animate1', 2, {
                            bezier: flightPath,
                            ease: Power1.easeInOut
                        })
                    );

                    const controller = new ScrollMagic.Controller();

                    const scene = new ScrollMagic.Scene({
                        triggerElement: '.animation',
                        duration: 3000,
                        triggerHook: 0
                    })
                        .setTween(tween)
                        // .addIndicators()
                        .setPin('.animation')
                        .addTo(controller);

                    /* animation on scroll */
                    $(".js-section-about").waypoint(function (direction) {
                        $('.js--5').addClass('animate__animated animate__fadeIn');
                        $('.js--6').addClass('animate__animated animate__fadeInUp');
                        if (direction === "down") {
                            $('nav').addClass("sticky navbar-light");
                            $('nav').removeClass("navbar-dark");
                        } else {
                            $('nav').addClass("navbar-dark");
                            $('nav').removeClass("sticky navbar-light");
                        }
                    }, {
                        offset: '55px'
                    });

                    $('#skills').waypoint(function (direction) {
                        $('.js--7').addClass('animate__animated animate__zoomIn');
                    }, {
                        offset: '60px'
                    });

                    /* smooth scrolling */
                    const scroll = new SmoothScroll('a[href*="#"]', {
                        speed: 500,
                        speedAsDuration: true,
                        topOnEmptyHash: true,
                        easing: 'easeInQuint',
                        offset: 50,
                        updateURL: true
                    });

                    // add active style to current scroll section
                    $(window).scroll(function (e) {

                        var scrollBarLocation = $(this).scrollTop();
                        var scrollHeight = $(document).height();
                        var scrollPosition = $(window).height() + $(window).scrollTop();

                        $('.nav-item a').each(function () {
                            var sectionOffset = $(this.hash).offset().top - 55

                            if (sectionOffset < scrollBarLocation) {
                                $(this).parent().addClass('active');
                                $(this).parent().siblings().removeClass('active');
                            }

                            else if ((scrollHeight - scrollPosition) / scrollBarLocation === 0) {
                                $('#contact-link').parent().addClass('active');
                                $('#contact-link').parent().siblings().removeClass('active');
                            } else if (scrollBarLocation === 0) {
                                $('.nav-item').removeClass('active');
                            }
                        });
                    });
                }, 2000);
            }
        }
    }
}

