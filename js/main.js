$(document).ready(function() {

    $('#top_gnb').DB_naviFullWideMove({
        key:'c37080',                 //라이센스키
        pageNum:3,           //메인메뉴 페이지인식(1~)
        subNum:1,            //서브메뉴 페이지인식(1~)
        subState:false,         //메뉴활성시 서브메뉴의 오픈유무(true,false)
        motionSpeed:300,        //모션속도(밀리초)
        delayTime:100             //메뉴아웃시 되돌아가는 딜레이시간(밀리초)
    });

  var selectTarget = $('.selectbox select');
 selectTarget.on('blur', function(){
   $(this).parent().removeClass('focus');
 });
  selectTarget.change(function(){
    var select_name = $(this).children('option:selected').text();
  $(this).siblings('label').text(select_name);
  });
});
new SwitchMenu('#mySubMenu', ['#subpage1', '#subpage2', '#subpage3', '#subpage4', '#subpage5']);

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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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

});
var swiper = new Swiper('.youtube-container', {
  // Optional parameters
  autoplay: {
     delay: 10000,
     disableOnInteraction: true,
   },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.youtube_number',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.you_right',
    prevEl: '.you_left',
  },
});

var swiper = new Swiper('.swiper-analy', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: true,
  },
    // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper_number',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.arr_right',
    prevEl: '.arr_left',
  },
});

function zoomIn(event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
};

var swiper = new Swiper('.swiper-container_photo', {
  slidesPerView: 7,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-container_banner', {
  slidesPerView: 7,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});