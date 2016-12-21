
$(function(){
	var goodObj = ro();
	$.ajax({
		url:"../data/detail.json",
		dataType:"json",
		success:function(data){
			$(data.classify).each(function(){
				if(this.classid==goodObj.classid){
					$(this.goods).each(function(){
						if(this.goodsid==goodObj.goodsid){
							pushData(this);
//							console.log(this);
						}
					})
				}
			});
		}
	});

	function pushData(obj){
		//banner部分
		var goodsid = obj.goodsid;
//		alert(goodsid);
		$(".goodbox").attr("data-id",goodsid);
		var ban = obj.banner;
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
		var title = obj.fontname;
		$(".goodname p:first-child").append(title.name);
		$(".goodname p:nth-child(2)").append(title.mark);
		$(".goodname p:last-child").append(title.price);
		//商品参数
		var argname = obj.argument;			
		var argstr = "<p>"+ argname.argname+"</p>"+
	    	"<p><span>产地</span><span>"+argname.add+"</span></p>"+
	    	"<p><span>材质</span><span>"+argname.caizhi+"</span></p>"+
	    	"<p><span>尺寸</span><span>"+argname.size+"</span></p>"+
	    	"<p><span>工艺</span><span>"+argname.gongyi+"</span></p>"
		$(".argnamebt").append(argstr);
		//商品图片加载
		var goodpic = obj.goodpic;
		var goodpicstr = "";
		for(var i = 0;i< goodpic.length;i++){
			goodpicstr = "<p><img src="+goodpic[i] +"></p>"
			$(".argnamelist").append(goodpicstr);
		}	
		//尺寸的内容
		var sizea = $(".shosize a");
		var sja = obj.argument.size;
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
				$(".shosize a").removeClass("on"),
				$(this).addClass("on");
				aval = $(this).html();
				var str = aval+"*" +inputval;
				$(".guige .guisum").html(str);
				//点击a时，改变价格
				var pricebox = $(".shopsec .goodpr");
				var pricesj = obj.argument.sizeprice;
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
			if(goodnum < 1){
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

	function ro(){
		var qs=location.href.split("?")[1];
//		alert(location.href)
		var arr=qs.split("&");
		var obj={};
		for (var i=0;i<arr.length;i++) {
			var _arr=arr[i].split("=");
			obj[_arr[0]]=_arr[1];
		}
		return obj;
	}
	
	//点击按钮 进入到选择商品中
	touch.on(".number","tap",function(){
		$(".toshopping").addClass("all_height");
		$("body").addClass("over");

		$(".changebg").addClass(".glyphicon glyphicon-arrow-left");
		touch.on(".changebg","tap",function(){
			$(".toshopping").removeClass("all_height");
			$(".changebg").removeClass(".glyphicon glyphicon-arrow-left");	
			$(".changebg").addClass(".glyphicon glyphicon-headphones");
		})
	});
	
	
	//存入到本地
	var buycar=localStorage.buycar?JSON.parse(localStorage.buycar):[];
	touch.on(".goshopping","tap",function(){
		var goodh = $(".toshopping").height();
		if(goodh==0){
			$(".toshopping").addClass("all_height");
			$("body").addClass("over");
			$(".changebg").addClass(".glyphicon glyphicon-arrow-left");
			touch.on(".changebg","tap",function(){
				$(".toshopping").removeClass("all_height");
				$(".changebg").removeClass(".glyphicon glyphicon-arrow-left");	
				$(".changebg").addClass(".glyphicon glyphicon-headphones");
			})
		}
		
		//把对象存入到本地  以便加入到购物车
		var goodname = $(".goodtitle").html();
		var goodpic = $(".shoppic img").attr("src");
		var goodprice = $(".goodpr").html();
		var goodnum = $(".text").val();
//		var goodid = 
		var goodsize;
		var sizea = $("#goodsize a");
		for(var i =0;i<sizea.length;i++){
			if(sizea.eq(i).hasClass("on")){
				goodsize = sizea.eq(i).html();
			}
		}
		var obj = {
			goodname:goodname,
			goodpic:goodpic,
			goodprice:goodprice,
			goodnum:goodnum,
			goodsize:goodsize
			
		}
		if(!buycar.length){
			buycar.push(obj);
			localStorage.buycar=JSON.stringify(buycar);
		}else{
			var num=0;
			for (var i =0;i<buycar.length;i++) {
				if(buycar[i].goodsid==id){
					buycar[i].num++;
					localStorage.buycar=JSON.stringify(buycar)				
				}else{
					num++;
				}
			}
			if(num==buycar.length){				
				buycar.push(obj);
				localStorage.buycar=JSON.stringify(buycar);
			}
		}

		
		
		
	})
	
	
	
	
});












