<?php include "top.php" ?>


<div class="sub_visual sub01 type">
    <div class="container_s">
        <div class="subvisual_txt1 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">회사소개</div>
        <div class="subvisual_txt2 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.3s">수익의 창조와 도전을 멈추지 않는 고수경제TV입니다.</div>
    </div>
</div>

<div class="content_nav">
    <div class="container_s">
        <ul class="center_nav">
            <li class="home">
                <a href="#"><img src="images/select_home.png"></a>
            </li>
            <li class="select_area">
                <div class="selectbox_s">
                    <dl id="center_nav1" class="dropdown">
                        <dt><a href="#" ><span>신상품순</span></a></dt>
                        <dd>
                        <ul class="dropdown2">
                            <li><a href="#">신상품순</a></li>
                            <li><a href="#">인기상품순</a></li>
                            <li><a href="#">낮은가격순</a></li>
                            <li><a href="#">높은가격순</a></li>
                        </ul>
                        </dd>
                    </dl>
                </div>
            </li>
            <li class="select_area">
                <div  class="selectbox_s">
                    <dl  id="center_nav2" class="dropdown">
                        <dt><a href="#" ><span>신상품순</span></a></dt>
                        <dd>
                        <ul class="dropdown2">
                            <li><a href="#">신상품순</a></li>
                            <li><a href="#">인기상품순</a></li>
                            <li><a href="#">낮은가격순</a></li>
                            <li><a href="#">높은가격순</a></li>
                        </ul>
                        </dd>
                    </dl>
                </div>  
            </li>
        </ul>

    </div>

</div>

<div class="sub_content">
    <div class="container_s">
        <div class="subcontent animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">무료체험 신청</div>
        <div class="sub0601_bg">

            <div class="sub0601_01 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s"><img src="images/sub0601_01.png"/></div>
            <div class="db_box animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">
                <div class="subcont_title1 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">고수경제TV <span class="yel">VIP 무료 체험</span> 서비스 신청</div>
                <form name="sentMessage" method="post"  action="process.php"  class="landing_form" novalidate="">
                <div class="form_padding animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">
                    <table class="db_form_table">
                        <tr>
                            <th>이름</th>
                            <td><input type="text" id="representative" name="representative" value="" class="inputform" placeholder="이름을 입력해주세요" data-message="이름을 입력해주세요"></td>
                            <td rowspan="2" class="w211"><div class="btn_img"><input type="image" src="images/btn_img.png" class=""></div></td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td><input type="text" name="phone" id="hp" value="" class="phone_check inputform" placeholder="연락처를 입력해주세요(숫자만) " data-message="연락처를 입력해주세요" pattern="[0-9]*" inputmode="numeric" maxlength="13"></td>
                            </tr>
                        <tr>
                            <th>
                            <td colspan="2">
                                <div class="agree_div">

                                    <div class="form_agree">
                                        <div class="chkB"><input type="checkbox" id="agree_mo1" checked="" class="agree form-control form" data-message="개인정보수집 및 활용 동의 해주세요"><label for="agree_mo1">개인정보수집 및 활용 동의(필수)</label><span class="popup_view1"> [보기]</span></div>
                                    </div>
                                    <div class="form_agree">
                                        <div class="chkB"><input type="checkbox" id="agree_mo2" checked="" class="agree form-control form" data-message="개인정보 제3자 제공 동의 해주세요"><label for="agree_mo2">개인정보 제3자 제공동의(필수) </label><span class="popup_view1"> [보기]</span><</div>
                                    </div>
                                    <br/>
                                    <div class="form_agree">
                                        <div class="chkB"><input type="checkbox" id="agree_mo3" checked="" class="agree form-control form" data-message="광고 문자메시지 수신 동의 해주세요"><label for="agree_mo3">광고 문자메시지 수신동의(필수)</label></div>
                                    </div>					
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                </form>

            </div>
            <div class="sub0601_02 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s"><img src="images/sub0601_02.png"/></div>
            <div class="sub0601_03 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s"><img src="images/sub0601_03.png"/></div>
            <div class="sub0601_04 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s"><img src="images/sub0601_04.png"/></div>


        </div>
    </div>
</div>
				
<?php include "bottom.php" ?>
