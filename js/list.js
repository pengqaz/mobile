$(function(){
	//使内容区可以移动
	var myIscroll = new iScroll("wrap");
	
	
	//列表页的导航(可以移动)
	var mySwiper = new Swiper ('.lsnav', {
		direction: 'horizontal',
	    loop: false,    
  	});
 
	//初始化
	$.ajax({
	url:"../data/list.json",
	dataType:"json",
	success:function(data){	
		var prod = data.classify[0].goods1.product;
		var prodLen = prod.length;
		var str = "";
		$(prod).each(function(){
			var proImg = this.thing0.img;
			var proBt = this.thing0.thingbt;
			var proPrice = this.thing0.thingprice;
			var proChoice = this.thing0.colchoice;
			str +='<dl class="list1"><dt><img class= "text-center" src="'+ proImg +'"/></dt><dd class="list_name text-center">'+ proBt +'</dd><dd class="price text-center">'+ proPrice +'</dd><dd class="text-center color">'+ proChoice +'</dd></dl>';			
		})
		$(".list_prod").html("");
		$(".list_prod").append(str);
		
	}
	
	});
	  
 
  	//点击时导航换并图片相应变化
  	$(".lsnav").on("click","li",function(){
  		var index = $(this).index();
  		alert(index);
  		
  		//遍历列表页的导航，当点击时字体变红，有下边框
  		$(this).css("color","#AB2B2B").siblings().css("color","#333");
  		$(this).addClass("active").siblings().removeClass("active");  		
  		//从json里面获取到数据并分类	
  		$.ajax({
			url:"../data/list.json",
			dataType:"json",
			success:function(data){
				var lnname = data.classify[index].classname;
				var banImg = data.classify[index].classbanner;
				var bname = data.classify[index].classbname;
				
				//点击对于的li，出现对应大商品列
				var goodsBt = data.classify[index].goods1.goodsbt;				
				var goodsbt = goodsBt.goodbt;
				var goodsdes = goodsBt.gooddes;
				
				//把每一个导航对于的li的文字和图插到页面
				$(".lsnav li").eq(index).html(lnname);
				$("#list_banner .img img").attr("src",banImg);
				$(".cnt .name").html(bname);
				
				//把点击对应的li插到页面中
				for(var i = 0 ; i < 3 ; i++){
					$(".list_bt h3").html(goodsbt);
					$(".list_bt .des").html(goodsdes);
				}
				
			}	
		});			
		
		//从json里面获取商品并显示
		$.ajax({
		url:"../data/list.json",
		dataType:"json",
		success:function(data){	
			var prod = data.classify[index].goods1.product;
			var prodLen = prod.length;
			var str = "";
			$(prod).each(function(){
				var proImg = this.thing0.img;
				var proBt = this.thing0.thingbt;
				var proPrice = this.thing0.thingprice;
				var proChoice = this.thing0.colchoice;
				str +='<dl class="list1"><dt><img class= "text-center" src="'+ proImg +'"/></dt><dd class="list_name text-center">'+ proBt +'</dd><dd class="price text-center">'+ proPrice +'</dd><dd class="text-center color">'+ proChoice +'</dd></dl>';			
			})
			$(".list_prod").html("");
			$(".list_prod").append(str);
			
		}
		
		});
	   						
  	})
	//克隆图片列表(克隆2次)
	$(".prod").clone().appendTo("#content");
	$(".prod").clone().appendTo("#content");
	
});































