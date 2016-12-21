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
			var goodpicstr = "";
			for(var i = 0;i< goodpic.length;i++){
				goodpicstr = "<p><img src="+goodpic[i] +"></p>"
				$(".argnamelist").append(goodpicstr);
			}
			
			//尺寸的内容
			var sizea = $(".shosize a");
			var sja = data.classify[0].goods.argument.size;
			for(var i = 0;i < sja.length;i++){
				sizea.eq(i).html(sja[i]);
			}

			//默认的选择规格
			var inputval = 1;
			var aval = "";	
			var index = 0;
			//选择加入到购物车页的信息   尺寸  点击a
			$(".shosize a").each(function(){
				$(this).click(function(){
					index = $(this).index();
//					alert(index);
					$(".shosize a").removeClass("on"),
					$(this).addClass("on");
					aval = $(this).html();
					var str = aval+"*" +inputval;
					$(".guige .guisum").html(str);
					
					//点击a时，改变价格
					var pricebox = $(".shopsec .goodpr");
					var pricesj = data.classify[0].goods.argument.sizeprice;
//						console.log(pricesj[index]);
						pricebox.html(pricesj[index]);
					
					
				});
			});
			
			//选择加入到购物车页的信息   数量
			//点击+加入购物车
			var goodnum = 1;
			$(".contshop .add").click(function(){
				goodnum++;					
				$(".contshop input").val(goodnum);
				$(".contshop .jian").css({
					"color":"#999",
					"borderColor":"#999"
				});
				inputval = $(".contshop input").val();
				var str = aval+"*" +inputval;
				if(!aval){
					$(".guige .guisum").html("请选择规格数量");
				}else{
					$(".guige .guisum").html(str);
				}
				
			});
			//点击-加入购物车
			$(".contshop .jian").click(function(){
				goodnum--;
				if(goodnum <= 1){
					goodnum = 1;
					$(".contshop .jian").css({
						"color":"#ccc",
						"borderColor":"#ccc"
					});
					$(".goodmark").show();
					setTimeout(function(){
						$(".goodmark").hide();
					},1000);
				}
				$(".contshop input").val(goodnum);
				inputval = $(".contshop input").val();
				var str = aval+"*" +inputval;
				$(".guige .guisum").html(str);
				
			});
		
			
			
			
		}
		
		
		
		
		
		
		
		
		
	});
			
			
	//点击按钮 进入到选择商品中
	touch.on(".number","tap",function(){
//		$(".toshop").show();
		$(".toshopping").addClass("all_height");
		$("body").addClass("over");

		$(".changebg").addClass(".glyphicon glyphicon-arrow-left");
		touch.on(".changebg","tap",function(){
			$(".toshopping").removeClass("all_height");
			$(".changebg").removeClass(".glyphicon glyphicon-arrow-left");	
			$(".changebg").addClass(".glyphicon glyphicon-headphones");
		})
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
