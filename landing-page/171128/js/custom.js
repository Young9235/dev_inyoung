/* ===========================================
                    wow
============================================*/
$(document).ready(function() {
    new WOW().init();
});
/* ==============================================================
              magnific-popup
http://dimsemenov.com/plugins/magnific-popup/documentation.html
================================================================*/
$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
      gallery:{
        enabled:true       //갤러리처럼 만들어라는 의미
      }
      // other options
});

/* ===========================================
                owl-carousel
============================================*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:3
    });
});

/*
//a링크를 클릭하면 팝업창에서 보여준다?
$('.gallery').each(function(){
    $(this).magnificPopup({
        delegate : 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});
*/