$(document).ready(function () {
  $('.CourseCarousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    slideTransition: 'linear',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    navText: ['<span class="custom-prev-btn">&#x2190;</span>', '<span class="custom-next-btn">&#x2192;</span>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4
      }
    }
  });
});

// Client logo
$(document).ready(function () {
  $('.client-logo').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    slideTransition: 'linear',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
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
$(document).ready(function () {
  $('.TestiCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    slideTransition: 'linear',
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    navText: ['<span class="custom-prev-btn">&#x2190;</span>', '<span class="custom-next-btn">&#x2192;</span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
});


// faq js
const buttons = document.querySelectorAll('.faq-toggle');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  })
})



// COUNTER JS
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 3000,
      easing: 'linear',
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  })
});



// Navbar Js

$(function () {
  // Add class on button click
  $("#DropdownButton").on('click', function () {
    $(this).toggleClass('arrowRotate')
    $("#DropdownUL").toggleClass('DropDownOpen');
  });

  // Remove class on body click
  $("body").on('click', function (event) {
    if (!$(event.target).closest("#DropdownButton").length) {
      $("#DropdownUL").removeClass('DropDownOpen');
      $("#DropdownButton").removeClass('arrowRotate');
    }
  });

  $('#mainmenu').on('click', function(){
    $(this).toggleClass('clickEffect')
  })

});

// sidebar sticky css
$(function () {
  let navbar = document.getElementsByClassName('MainHaeder')[0]; // Specify the index
  let active_class = "navbar_scrolled";

  window.addEventListener('scroll', e => {
    if (window.pageYOffset > 80) {
      navbar.classList.add(active_class);
    } else {
      navbar.classList.remove(active_class);
    }
  });
});

