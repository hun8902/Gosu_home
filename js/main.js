

$(document).ready(function() {
    $('#DB_navi24').DB_naviFullWideMove({
        key:'c37080',                 //라이센스키
        pageNum:3,           //메인메뉴 페이지인식(1~)
        subNum:1,            //서브메뉴 페이지인식(1~)
        subState:false,         //메뉴활성시 서브메뉴의 오픈유무(true,false)
        motionSpeed:300,        //모션속도(밀리초)
        delayTime:100             //메뉴아웃시 되돌아가는 딜레이시간(밀리초)
    });

});
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
// 애니메이션
$('.animate').scrolla({
	mobile: true,
	once: true
});
//슬라이더
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


