$(document).ready(function() {
    $('.CourseCarousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

// Client logo
$(document).ready(function() {
    $('.client-logo').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1500,
        responsive: {
            0: {
                items: 3
            },
            300: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
});