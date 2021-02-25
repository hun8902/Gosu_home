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
        <div class="subcontent animate" data-animate="fadeIn" data-duration="1s" data-delay="0.1s">오시는 길</div>
        <div class="subcont_txt1 animate" data-animate="fadeIn" data-duration="1s" data-delay="0.3s">고수경제TV로 오시는 길을 안내합니다.</div>
        <div class="maps_box">
        <div id="staticMap" class="animate"  data-animate="fadeIn" data-duration="1s" data-delay="0.1s" style="width:100%;height:560px;"></div>
			<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=94e6ba69dd34a024477b54e3d9e914a3"></script>
			<script>
				// 이미지 지도에 표시할 마커입니다
				// 이미지 지도에 표시할 마커를 아래와 같이 배열로 넣어주면 여러개의 마커를 표시할 수 있습니다 
				var markers = [
					{
						position: new kakao.maps.LatLng(37.5514295907013, 126.91756823463221),
						text: '고수경제TV 본사' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
					}
				];
		
				var staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div  
					staticMapOption = { 
						center: new kakao.maps.LatLng(37.5514295907013, 126.91756823463221), // 이미지 지도의 중심좌표http://map.daum.net/?mapJson=%7B%22mapCenterX%22%3A481302.5%2C%22mapCenterY%22%3A1125222.5%2C%22mapLevel%22%3A3%2C%22coordinate%22%3A%22wcongnamul%22%2C%22map_type%22%3A%22TYPE_MAP%22%2C%22map_hybrid%22%3A%22false%22%2C%22markInfo%22%3A%5B%7B%22coordinate%22%3A%22wcongnamul%22%2C%22x%22%3A474049.91800347395%2C%22y%22%3A1125247.8230981529%2C%22content%22%3A%22111111%22%7D%2C%7B%22coordinate%22%3A%22wcongnamul%22%2C%22x%22%3A400206.345643045%2C%22y%22%3A-11702.439372717636%2C%22content%22%3A%22%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%20%ED%91%9C%EC%8B%9C%ED%95%A0%20%EC%88%98%20%EC%9E%88%EC%96%B4%EC%9A%94!%22%7D%5D%7D
		
						level: 4, // 이미지 지도의 확대 레벨
						marker: markers // 이미지 지도에 표시할 마커 
					};    
		
				// 이미지 지도를 생성합니다
				var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
					// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
									map.setCenter(coords);
					
				</script>
				<!-- 지도를 표시할 div 입니다 -->
			
        </div>
        <ul class="maps_bottom">
            <li><div class="maps_txtbox">본사</div></li>
            <li>
                
                <div class="maps_txt1">서울시 마포구 서교동 395-155, 4층</div><br/>
                <div class="maps_txt2">1566-2827 /  1899-5286</div>
            </li>
        </ul>
    </div>
</div>
				
<?php include "bottom.php" ?>
