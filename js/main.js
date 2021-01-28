

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
new Swiper('.swiper-container', {

	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 30, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

	navigation : { // 네비게이션
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
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


