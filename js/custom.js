$(function () {
    //----------------------header menu BEGIN----------------------
    var headerMenu = {};
    headerMenu.self = $('.header__menu');
    headerMenu.wrapper = headerMenu.self.closest('.header');
    headerMenu.topBox = headerMenu.wrapper.find('.header__top');
    headerMenu.bottomBox = headerMenu.wrapper.find('.header__bottom');
    headerMenu.items = headerMenu.self.find('.menu__item');
    headerMenu.subMenu = headerMenu.self.find('.sub-menu');
    headerMenu.addSubmenuOffsets = function() {
        this.subMenu.css({
            top:  this.wrapper.innerHeight() - parseInt(headerMenu.bottomBox.css('padding-bottom')),
        });
    };
    headerMenu.addStickToTop = function () {
        var windowOffset = $(window).scrollTop();

        if(windowOffset > 0) {
            this.wrapper.addClass('stick');

            this.wrapper.css({
                top: -(this.topBox.innerHeight()),
            });

            $('body').css({
                paddingTop: this.wrapper.innerHeight(),
            });

            this.subMenu.css({
                top: this.bottomBox.innerHeight()
            });
        } else {
            this.wrapper.removeClass('stick');

            this.wrapper.css({
                top: '',
            });

            $('body').css({
                paddingTop: '',
            });

            this.addSubmenuOffsets();
        }
    };
    headerMenu.init = function () {
        this.addSubmenuOffsets();
        this.addStickToTop();

        $(window).resize(function () {
            headerMenu.addSubmenuOffsets();
        });

        $(window).scroll(function () {
            headerMenu.addStickToTop();
        });
    };

    headerMenu.init();
    //----------------------header menu END----------------------



    //----------------------sliders BEGIN----------------------
    var defaultOptions = {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        navText: [makeSliderArrow('arrow-prev'),makeSliderArrow('arrow-next')],
    };

    var sliderMainOptions = {
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: [makeSliderArrow('arrow-prev'),makeSliderArrow('arrow-next')],
    };

    var sliderPressaOptions = {
        items: 1,
        nav: false,
        dots: true,
        navText: [makeSliderArrow('arrow-prev'),makeSliderArrow('arrow-next')],
    };

    if($('.slider__main').length) {
        $('.slider__main').owlCarousel(sliderMainOptions);
    }

    if($('.slider__news').length) {
        $('.slider__news').owlCarousel(defaultOptions);
    }

    if($('.slider__news-pressa').length) {
        $('.slider__news-pressa').owlCarousel(sliderPressaOptions);
    }

    //----------------------sliders END----------------------



    //----------------------parallax BEGIN----------------------
    if($('.parallax').length) {
        $('.banner__parallax').parallax();
    }
    //----------------------parallax END----------------------
});



//----------------------functions BEGIN----------------------
function makeSliderArrow(arrowClasses) {
    return  '<svg class="' + arrowClasses + '" width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M12.6606 21.0033C13.0331 20.6286 13.2422 20.1217 13.2422 19.5933C13.2422 19.0649 13.0331 18.558 12.6606 18.1833L5.5806 11.0033L12.6606 3.92331C13.0331 3.54859 13.2422 3.04169 13.2422 2.51331C13.2422 1.98494 13.0331 1.47804 12.6606 1.10332C12.4747 0.915858 12.2535 0.767069 12.0098 0.665532C11.766 0.563995 11.5046 0.511719 11.2406 0.511719C10.9766 0.511719 10.7152 0.563995 10.4714 0.665532C10.2277 0.767069 10.0065 0.915858 9.8206 1.10332L1.3406 9.58331C1.15314 9.76924 1.00435 9.99044 0.902815 10.2342C0.801279 10.4779 0.749001 10.7393 0.749001 11.0033C0.749001 11.2673 0.801279 11.5287 0.902815 11.7725C1.00435 12.0162 1.15314 12.2374 1.3406 12.4233L9.8206 21.0033C10.0065 21.1908 10.2277 21.3396 10.4714 21.4411C10.7152 21.5426 10.9766 21.5949 11.2406 21.5949C11.5046 21.5949 11.766 21.5426 12.0098 21.4411C12.2535 21.3396 12.4747 21.1908 12.6606 21.0033Z"/>\n' +
            '</svg>';


}
//----------------------functions END----------------------