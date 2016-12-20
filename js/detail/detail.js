$(function(){
	
//	var goodobj = ro();
	//banner 部分
		//通过ajax获取banner部分的图片
//	$.ajax({
//		url:"../data/detail.json",
//		dataType:"json",
//		success:function(data){
//			console.log(data.classify);
//			$(data.classify).each(function(){
//				if(this.classid = goodobj.classid){
//					$(this.goods).each(function(){
//						if(this.goodsid = goodobj.goodsid){
//							pushData(this);
//						}
//					})
//				}
//					
//			});
//		}
//	});
			
	$.ajax({
		url:"../data/detail.json",
		dataType:"json",
		success:function(data){
			var ban = data.classify[0].goods.banner;
			var odiv = $(".swiper-wrapper .swiper-slide");		
			for(var i = 0;i < odiv.length;i++ ){//遍历odiv
				var str = "";
				str = "<img src="+ban[i]+">";
				odiv.eq(i).append(str);
			}
			//让banner部分的图片轮播
			var swiper = new Swiper('.swiper-container', {
     			pagination: '.swiper-pagination',
      			paginationType: 'fraction',
   				autoplay:3000,
 				loop:true, 
 				 autoplayDisableOnInteraction : false,
  			});
			
			//标题部分
			var title = data.classify[0].goods.fontname;
			$(".goodname p:first-child").append(title.name);
			$(".goodname p:nth-child(2)").append(title.mark);
			$(".goodname p:last-child").append(title.price);
			
			//商品参数
			var argname = data.classify[0].goods.argument;
			
			var argstr = "<p>"+ argname.argname+"</p>"+
		    	"<p><span>产地</span><span>"+argname.add+"</span></p>"+
		    	"<p><span>材质</span><span>"+argname.caizhi+"</span></p>"+
		    	"<p><span>尺寸</span><span>"+argname.size+"</span></p>"+
		    	"<p><span>工艺</span><span>"+argname.gongyi+"</span></p>"
			$(".argnamebt").append(argstr);
			
			//商品图片加载
			var goodpic = data.classify[0].goods.goodpic;
//			console.log(goodpic);
			var goodpicstr = "";
			for(var i = 0;i< goodpic.length;i++){
				goodpicstr = "<p><img src="+goodpic[i] +"></p>"
//				console.log(goodpicstr);
				$(".argnamelist").append(goodpicstr);
			}
			
			
		}
		
	});
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			

//			var ban = data.classify.imgurl;
//			var odiv = $(".swiper-wrapper .swiper-slide");
//			for(var i = 0;i < odiv.length;i++ ){//遍历odiv
//				var str = "";
//				str = "<img src="+ban[i]+">";
//				odiv.eq(i).append(str);
//			}
//			
//			//让banner部分的图片轮播
//			var swiper = new Swiper('.swiper-container', {
//     			pagination: '.swiper-pagination',
//      		paginationType: 'fraction',
//     
//   			autoplay:3000,
// 				loop:true, 
//  		});
			
		
		
	
	
//	function pushData(obj){
//		var str = "";
//		
//	}
//	
//	
	
	
	
	
	
//	function ro(){
//		var qs = location.href.split("?")[1];
//		var arr = qs.split("&");
//		nar obj = {};
//		for(var i = 0;i < arr.length;i++){
//			var _arr = arr[i].split("=");
//			obj[_attr[0]] = _arr[1];
//		}
//		return obj;
//	}
//	
	
	
	
	



	//让section部分滚动时有缓冲效果
//	var timer;
//	var myIscroll=new iScroll("wrapper",{
//		onScrollMove:function(){
//			if(this.y < -800){
//				$(".top").show();
//			}else{
//				$(".top").hide();
//			}
//		},
//		onTouchEnd:function(){
//			var that = this;
//			timer = setInterval(function(){
//				if(this.y < -800){
//					$(".top").show();
//				}else{
//					$(".top").hide();
//				}
//			},30);
//		},
//		onScrollEnd:function(){
//			clearInterval(timer);
//		}	
//	});	
	
//	$(".top").tap(function(){
//		myIscroll.scrollTo(0,0,800);
//	});	
//	报错    tap不是一个函数
	
	
})
