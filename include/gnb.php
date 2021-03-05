<div id="ab_navi">
			<ul class="p_right_banner">
				<li><img src="images/navi_1.png"></li>
				<li><img src="images/navi_2.png"></li>
				<li><img src="images/navi_3.png"></li>
				<li><img src="images/navi_4.png"></li>
				<li><a href="#"><img src="images/navi_kakao.png"></a></li>
				<li><a href="#"><img src="images/navi_naver.png"></a></li>
			</ul>

		</div>
		<div id="ab_form">
			<div class="obj_top"><a href="#"><img src="images/top_bt.png"></a></div>
			<div class="obj_bg">
				<form name="sentMessage" method="post"  action="<?php echo G5_THEME_URL?>/process.php"  class="landing_form" novalidate="">
					<input name="has_data" type="hidden" value="1">
					<input name="landing" type="hidden" value="GGT홈페이지">
					<input name="this_url" type="hidden" value="http://ggtrading.kr/">
					<input name="requset_url" type="hidden" value="">
					<div class="popup_form">
						<input type="text" id="representative" name="representative" value="" class="scroll_input" placeholder="이름을 입력해주세요" data-message="이름을 입력해주세요">
						<input type="phone" name="phone" pattern="[0-9]*" inputmode="numeric"  class="phone-number-check scroll_input" placeholder="휴대폰 번호(숫자만)" data-message="연락처를 입력해주세요">
						<div class="checks_s">
							<input type="checkbox" id="ex_chk1"> 
							<label for="ex_chk1">개인정보 취급방침 동의 (필수)</label><span class="aqpopup_view1"> [보기]</span>
						</div>
						<div class="checks_s">
							<input type="checkbox" id="ex_chk2"> 
							<label for="ex_chk2">이용약관 및 개인정보 수집동의 (필수)</label><span class="aqpopup_view2"> [보기]</span>
						</div>
						<div class="checks_s">
							<input type="checkbox" id="ex_chk3"> 
							<label for="ex_chk3">광고성 문자메시지 수신 동의(필수)</label>
						</div>
					</div>
					<div class="p_agree_mo_p1 agp">
						<div href="" class="agpopup_close"><img src="images/ag_close.png" alt="닫기"></div>
						<textarea class="long_text" style="width:100%">개인정보 취급방침 동의
						 </textarea>
					</div>

					<div class="p_agree_mo_p2 agp">
						<div href="" class="agpopup_close"><img src="images/ag_close.png" alt="닫기"></div>
						<textarea class="long_text" style="width:100%">이용약관
						 </textarea>
					</div>							

					<div class="poup_submit_btn"><input type="image" src="images/poup_submit_btn.png"></div>
				</form>
			</div>
		</div>

		<!-- 탑 메뉴 -->
		<div class="top_select">
			<div class="container">
				<div class="selectbox">
					<label for="lang">KR</label>
					<select id="lang">
						<option selected>KR</option>
						<option>EN</option>
					</select>
				</div>
				<ul class="ts_right">
					<li><a href="#">로그인</a></li>
					<li><a href="#">회원가입</a></li>
				</ul>
				

			</div>
		</div>
		<!-- 탑 메뉴 끝 -->

		<!--nav-->
		<div id="top_gnb">
			<div class="DB_wrap">
				<h1><a href="index.php"><img src="images/logo.png" alt="logo"/></a></h1>
				<ul class="DB_main">					
					<li><a href="sub0101.php">회사소개</a></li>
					<li><a href="sub0201.php">CH고수TV</a></li>
					<li><a href="sub0301.php">상품안내</a></li>
					<li><a href="#">성과인증</a></li>
					<li><a href="#">고객센터</a></li>
					<li class="redbox"><a href="sub0601.php">급등무료체험</a></li>
				</ul>
			</div>
			<div class="DB_mask">
				<div class="DB_move">
					<div class="DB_subSet">
						<ul>
							<li><a href="sub0101.php">회사소개</a></li>
							<li><a href="sub0102.php">기업철학</a></li>
							<li><a href="sub0103.php">위험관리체계</a></li>
							<li><a href="sub0104.php">솔루션</a></li>
							<li><a href="sub0105.php">수상내역</a></li>
							<li><a href="sub0106.php">오시는길</a></li>
						</ul>		
						<ul>
							<li><a href="#">종목분석</a></li>
							<li><a href="#">경제이슈</a></li>
							<li><a href="#">시황분석</a></li>
						</ul>		
						<ul>
							<li><a href="sub0301.php">국내주식</a></li>
							<li><a href="sub0302.php">애널리스트 소개</a></li>
							<li><a href="sub0303.php">가입안내</a></li>
						</ul>
						<ul>
							<li><a href="#">압도적인 성과</a></li>
							<li><a href="#">투자 공문인증서</a></li>
							<li><a href="#">회원 수익 인증</a></li>
						</ul>
						<ul>
							<li><a href="#">1:1 문의하기</a></li>
						</ul>
						
					</div>
					
				</div>
			</div>
		</div>
		<!--/nav-->