//轮播图
$(document).ready(function(){
	
	$.get("data/index.json",function(data){
		var str = "";
		for(var i=0;i<data[0]["banner"].length;i++){
			
			str+="<div class='swiper-slide'>"+data[0]["banner"][i].img+"</div>"
			$(".swiper-wrapper").html(str);
			mySwiper.update();
		}
		
		var arr="";
		for(var i=0;i<data[0].list.length; i++){
			alert(data[0].list.length);
			arr+='<li>'
						"<a href=''>"+data[0].list.img1[i]+"</a>"
//						"<h5>"+data[0]["list"][i].name+"</h5>"
//						"<p>"+data+[0]["list"][i].price+"</p>"
				'</li>'
				$("#m_box1").html(arr);	
				
			
		}
		
	})
})

//产品信息

