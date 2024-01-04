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


// Testimonial Js
$(document).ready(function() {
    $('.TestiCarousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        navText: ['<span class="custom-prev-btn">&#x2190;</span>', '<span class="custom-next-btn">&#x2192;</span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});


// faq js
const buttons = document.querySelectorAll('.faq-toggle');


buttons.forEach(button =>{
  button.addEventListener('click', () =>{
    button.parentNode.classList.toggle('active');
  })
})
 