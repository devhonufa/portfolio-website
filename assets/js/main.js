$(document).ready(function () {
    $('.project-popup').magnificPopup({
        type: "image",
        gallery:{
        enabled:true,
        },     
    });
    // vdo js popup
    $('.video').magnificPopup({
        type: "iframe",     
    });
    $(function(){
        $('#menu').slicknav();
    });
    // counter js code

    $('.counter').counterUp();
    $('.testimonials').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-circle-right"></i></button>',
        dots: true,
        autoplay: true,
    });  

});

// --------------------navber js code------------------
const toggleButton = document.getElementsByClassName('taggle-bar')[0]
         const navbarLinks = document.getElementsByClassName('menu')[0]

         toggleButton.addEventListener('click', () => {
         navbarLinks.classList.toggle('active')
             
             
         })
