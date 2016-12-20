$(function(){
	//列表页的导航(可以移动)
	var mySwiper = new Swiper ('.lsnav', {
		direction: 'horizontal',
	    loop: false,    
  	});
  	
  	//遍历列表页的导航，当点击时字体变红，有下边框
  	$(".lsnav").on("click","li",function(){
  		$(this).css("color","#AB2B2B").siblings().css("color","#333");
  		$(this).addClass("active").siblings().removeClass("active");
  	})
	
	//从json里面获取到数据	
	$.ajax({
		url:"../data/list.json",
		dataType:"json",
		success:function(data){
			console.log(data);
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});































