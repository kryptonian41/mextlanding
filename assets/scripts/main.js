$(document).ready(function () {

    var navbarHeight = $('.cus-navbar').height()
    var newPadding = parseInt($('.landing').css("padding-top").replace("px", "")) + navbarHeight + 'px' 
    console.log(newPadding)
    var landingHeader = $('.landing').css("padding-top", newPadding)
    console.log('document is ready');
    $('.faq-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            680: {
                items: 3
            }
        }
    });


    // smooth scroll

    $('.cus-navbar--links ul li a').smoothScroll(
        {
            offset: -navbarHeight,

            direction: 'top',

            scrollTarget: null,

            beforeScroll: function () {},

            afterScroll: function () {},

            easing: 'swing',

            speed: "auto",

            autoCoefficient: 2,

            preventDefault: true

        }
    );
})