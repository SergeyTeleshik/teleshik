$(function() {
  mobileNav();
}); 

function mobileNav() {
  $('.home-menu-button').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.home-menu-button, .mobile-nav-home').removeClass('is-open'); }
    else { $('.home-menu-button, .mobile-nav-home').addClass('is-open'); }
  });
}


//Pure JS
//Dot slider
let slideIndex = 1

let showSlides = x => {
  let slides = document.getElementsByClassName("slide")
  let dots = document.getElementsByClassName("dot")
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "")
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active"
}
