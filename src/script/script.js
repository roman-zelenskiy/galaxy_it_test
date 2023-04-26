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



// tabs
$('.tabs nav .tabs_btn_item').click(function () {
  $(this).closest('.tabs').find('nav .tabs_btn_item').removeClass('active');
  $(this).addClass('active');
  $(`.tabs .tabs_content .tabs_content_box[data-tabs-id="${$(this).attr(`data-tabs-id`)}"]`)
    .addClass('active');
})

// mask input telephone

$(document).ready(function() {
  $('#input_subscribe').mask('+38 (999) 999-99-99', {placeholder: '+38 (___) ___-___-___'});
});