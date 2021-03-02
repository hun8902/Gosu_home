$("#center_nav1 img.flag").addClass("flagvisibility");

$("#center_nav1 dt a").click(function() {
  $("#center_nav1 dd ul").toggle();
});

$("#center_nav1 dd ul li a").click(function() {
  var text = $(this).html();
  $("#center_nav1 dt a span").html(text);
  $("#center_nav1 dd ul").hide();
  /* $("#result").html("Selected value is: " + getSelectedValue("sample"));*/
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown"))
    $("#center_nav1 dd ul").hide();
});

$("#center_nav1 img.flag").toggleClass("flagvisibility");

$("#center_nav2 img.flag").addClass("flagvisibility");

$("#center_nav2 dt a").click(function() {
  $("#center_nav2 dd ul").toggle();
});

$("#center_nav2 dd ul li a").click(function() {
  var text = $(this).html();
  $("#center_nav2 dt a span").html(text);
  $("#center_nav2 dd ul").hide();
  /* $("#result").html("Selected value is: " + getSelectedValue("sample"));*/
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown"))
    $("#center_nav2 dd ul").hide();
});

$("#center_nav2 img.flag").toggleClass("flagvisibility");


var swiper = new Swiper('.indexvisual-container', {
  // Optional parameters
  autoplay: {
     delay: 10000,
     disableOnInteraction: true,
   },
  loop: true,
  navigation: {
    nextEl: '.visual_right_btn',
    prevEl: '.visual_left_btn',
  },
});


var swiper = new Swiper('.index_bottom-container', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  direction: 'vertical',
  // Navigation arrows
  navigation: {
    nextEl: '.btn_down',
    prevEl: '.btn_up',
  },
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

var swiper = new Swiper('.swiper-container_photo', {
  slidesPerView: 6,
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
  }
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

//new SwitchMenu('#mySubMenu', ['#subpage1', '#subpage2', '#subpage3', '#subpage4', '#subpage5']);
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
// 애니메이션
$('.animate').scrolla({
	mobile: true,
	once: true
});



$(document).ready(function() {
  $('.aqpopup_view1').click(function(){
    $('.p_agree_mo_p1').fadeIn();
    $('.p_agree_mo_p2').fadeOut();
  });
  
  $('.aqpopup_view2').click(function(){
    $('.p_agree_mo_p2').fadeIn();
    $('.p_agree_mo_p1').fadeOut();
  });
  
  $('.popup_view1').click(function(){
    $('.agree_mo_p3').fadeOut();
    $('.agree_mo_p2').fadeOut();
    $('.p_agree_mo_p1').fadeOut();
    $('.p_agree_mo_p2').fadeOut();
    $('.agree_mo_p1').fadeIn();
  });
  $('.popup_view2').click(function(){
    $('.agree_mo_p1').fadeOut();
    $('.agree_mo_p2').fadeIn();
    $('.p_agree_mo_p1').fadeOut();
    $('.p_agree_mo_p2').fadeOut();
    $('.agree_mo_p3').fadeOut();
  });
  
  $('.popup_view3').click(function(){
    $('.agree_mo_p2').fadeOut();
    $('.agree_mo_p1').fadeOut();
    $('.p_agree_mo_p1').fadeOut();
    $('.p_agree_mo_p2').fadeOut();
    $('.agree_mo_p3').fadeIn();
  });
  $('.agpopup_close').click(function(){
    $('.agp').fadeOut();
  });
  // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#ab_navi").css('top'));
  var floatPosition1 = parseInt($("#ab_form").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";
    var newPosition1 = scrollTop + floatPosition1 + "px"; 
		/* 애니메이션 없이 바로 따라감
		 $("#floatMenu").css('top', newPosition);
		 */

		$("#ab_navi").stop().animate({
			"top" : newPosition
		}, 1000);

    $("#ab_form").stop().animate({
			"top" : newPosition1
		}, 1300);

    

	}).scroll();



  //When page loads...
  $(".tab_content").hide(); //Hide all content
  $("ul.tabs li:first").addClass("active").show(); //Activate first tab
  $(".tab_content:first").show(); //Show first tab content

  //On Click Event
  $("ul.tabs li").click(function() {

      $("ul.tabs li").removeClass("active"); //Remove any "active" class
      $(this).addClass("active"); //Add "active" class to selected tab
      $(".tab_content").hide(); //Hide all tab content

      var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
      $(activeTab).fadeIn(); //Fade in the active ID content
      return false;
  });
  $('#d_tab37').d_tabMotionScaleBanner({
    key:'c37080',
    speed:800,
    textSpeed:1000,
    scale:110,
    autoRollingTime:10000
  })
  $('#top_gnb').DB_naviFullWideMove({
      key:'c37080',                 //라이센스키
      //pageNum:3,           //메인메뉴 페이지인식(1~)
      //subNum:1,            //서브메뉴 페이지인식(1~)
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