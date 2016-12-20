//轮播图
$(document).ready(function(){
	var str = "";
	$.get("data/index.json",function(data){
		for(var i=0;i<data.length;i++){
			str+="<div class='swiper-slide'>"+data[i].img+"</div>"
			$(".swiper-wrapper").html(str);
		}
	})
})

