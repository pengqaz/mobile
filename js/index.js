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

//产品信息
$(document).ready(function(){
	var str = "";
	$.get("data/index.json",function(data){
		for(var i=0;i<data.length;i++){
			str+="<div class='col-xs-6' id='cp_box1'>"
				"<div id=' cp1'>"+
					data[i].img1+
					"<div id='word_box1'>"
					"<h4>"+data[i].cangs+"</h4>"
					"<span>"+data[i].pcrice+"</span>"
					"</div>"
				"</div>"
				"<div id='cp2'>"+
					data[i].img1+
					"<div id='word_box2'>"
					"<h4>"+data[i].cangs+"</h4>"
					"<span>"+data[i].price+"</span>"
					"</div>"
				"</div>"
			"</div>"
			"<div class='ccol-xs-6' id='cp_box2'>"
				"<div id ='cp3'>"+
					data[i].img1+
					"<div id='word_box3'>"
					"<h4>"+data[i].cangs+"</h4>"
					"<span>"+data[i].price+"</span>"
				"</div>"
			"</div>"
			$("＃ploduct_BOX").html(str);
		}
	})
})
