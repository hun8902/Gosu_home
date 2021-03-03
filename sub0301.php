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
        <div class="subcontent animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">상품안내</div>
        <div class="subcont_txt1 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.3s">주식의 절대 고수, 고수경제TV만의 차별화된 혜택!<br/>압도적인 성과와 상위1%의 고급정보를 아낌없이 보여드립니다.</div>
        <div class="sub0301_01 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.5s"><img src="images/sub0301_01.png"/></div>
        <div class="subcont_title animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">고수경제TV가 함께합니다.</div>
        <div class="subcont_text animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">오직 실력으로 증명하는 고수경제TV는 국내 NO.1 주식 전문가의 탐방을 통한 빠른 급등 유망 정보 수집과<br/>즉각적인 신호를 통한 단기~장기 꾸준한 수익률을 책임집니다.</div>
        
        <div class="db_box animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">
        <div class="subcont_title1 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">고수경제TV <span class="yel">VIP 무료 체험</span> 서비스 신청</div>
        <form name="sentMessage" method="post"  action="process.php"  class="landing_form" novalidate="">
				<div class="form_padding animate" data-animate="fadeInUp" data-duration="1s" data-delay="0.1s">
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
					</table>
					<div class="agree_div">

						<div class="form_agree">
							<div class="chkB"><input type="checkbox" id="agree_mo1" checked="" class="agree form-control form" data-message="개인정보취급방침에 동의 해주세요"><label for="agree_mo1">개인정보취급방침 동의</label><span class="popup_view1"> [보기]</span></div>
						</div>
						<div class="form_agree">
							<div class="chkB"><input type="checkbox" id="agree_mo2" checked="" class="agree form-control form" data-message="전화수신에 동의 해주세요"><label for="agree_mo2">전화수신동의 </label></div>
						</div>
						<div class="form_agree">
							<div class="chkB"><input type="checkbox" id="agree_mo3" checked="" class="agree form-control form" data-message="제 3자프로모션에 동의 해주세요"><label for="agree_mo3">제 3자프로모션동의</label></div>
						</div>					
					</div>

				</div>

				</form>
        </div>

        <div class="subcont_title animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">고수가 알려주는 국내주식 6가지 투자원칙</div>
        <div class="subcont_text animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">주식투자에 어려움을 겪는 분들을 위해 올바른 투자경험이 가능한 최상의 서비스를 제공합니다.</div>
        
    </div>
</div>
				
<?php include "bottom.php" ?>
