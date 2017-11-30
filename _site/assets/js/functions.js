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
