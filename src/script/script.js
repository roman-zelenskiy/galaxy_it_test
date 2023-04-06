const burgerIcon = document.getElementsByClassName('burger_icon')[0];
const menuCollapse = document.getElementsByClassName('main_menu_collapse')[0];

burgerIcon.addEventListener('click', onClickBurger)

function onClickBurger() {
    menuCollapse.classList.toggle('active');
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass: true,
    items: 1,
    center: true,
    dots: true,
    dotsData: true,
    dotsEach: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})