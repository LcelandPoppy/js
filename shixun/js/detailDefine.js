define(["jquery","cookie","public"],function(){
	return{
		//放大镜
		fangdajing:(function(){
//			this.wrap=document.querySelector('.wrap');//包含框\n
            var warp=$("#article .detail .detail_l .wrap");
            var spic=$("#spic");
            var sf=$("#sf");
            var bf=$("#bf");
            var bpic=$("#bpic");
            var oUl=$("#article .detail .detail_l #list ul");
            var aLi=oUl.find("li");
            var left=$("#left");
            var right=$("#right");
            var num=6;
            function init(){
            	spic.on("mouseover",function(){
            		show();
            		sfsize();
            		spic.on("mousemove",function(e){
            			sfmove(e);
            		})
            	})
            	spic.on("mouseout",function(){
            		hide();
            	})
            };
            spic.on("mouseout",function(){
            		hide();
            		})
            		for(var i=0;i<aLi.length;i++){
            			aLi.on("click",function(){
            				var aLisrc=$(this).find("img").attr("src");
            				spic.find("img").attr("src",""+aLisrc+"");
            				bpic.attr("src",""+aLisrc+"");
            			})
            		}
            		
            		var liwidth=oUl.find("li:first").width();
            		parseInt(liwidth)
            		oUl.css("width",""+aLi.length*liwidth+"");
            		if(num>aLi.length){
            			right.css("color","#fff");
            		}
            	    left.on("click",function(){
            	    	if(num>6){
            	    		num--;
            	    		if(num==6){
            	    			left.css("color","#fff");
            	    		}
            	    		right.css("color","#333");
            	    	}
            	    	oUl.stop(true,true).animate({
            	    		left:-liwidth*(num-6)
            	    	});
            	    })
			     right.on("click",function(){
			     	if(num<aLi.length){
			     		num++;
			     		if(num==aLi.length){
			     			right.css("color","#fff");
			     		}
			     		left.css("color","#333");
			     	}
			     	oUl.stop(true,true).animate({
            	    		left:-liwidth*(num-6)
            	    	});
			     })
			     
			     function show(){
			     	sf.css("visibility","visible");
			     	bf.css("visibility","visible");
			     };
			     function hide(){
			     	sf.css("visibility","hidden");
			     	bf.css("visibility","hidden");
			     };
			     
			     function sfsize(){
			     	sf.css("width",""+spic.width()*bf.width()/bpic.width()+"");
			     	sf.css("height",""+spic.height()*bf.height()/bpic.height()+"");
			     	var scale=bf.width()/sf.width();
			     };
			     function sfmove(e){
			     	sf.css("width",""+spic.width()*bf.width()/bpic.width()+"");
			     	sf.css("height",""+spic.height()*bf.height()/bpic.height()+"");
			     	var scale=bf.width()/sf.width();
			     	var x=e.pageX-150-sf.width()/2;
			     	var y=e.pageY-300-sf.height()/2;
			     	if(x<0){
			     		x=0;
			     	}else if(x>spic.width()-sf.width()){
			     		x=spic.width()-sf.width()-2;
			     	}
			     	if(y<0){
			     		y=0;
			     	}else if(y>spic.height()-sf.height()){
			     		y=spic.height()-sf.height()-2;
			     	}
			     	console.log(sf.height);
			     	console.log(spic.height);
			     	sf.css("left",x);
			     	sf.css("top",y);
			     	bpic.css("left",-scale*x);
			     	bpic.css("top",-scale*y);
			     	
			     }
                 init();
		})(),
		//商品数量的加减
		add:(function(){
			var Va=1
				$("#dity-m").on("click",function(){
					Va=parseInt($("#dity-input").html());
				if(Va==0){
					Va=0;
				}else{
					Va--;
					$("#dity-input").html(Va);
				}
		})
			$("#dity-p").on("click",function(){
				Va=parseInt($("#dity-input").html());
				if(Va>=10){
					Va=10
				}else{
					Va++;
					$("#dity-input").html(Va);
				}
			})
			
		})(),
		//存入cookie
		saveCookie:(function(){
			function GetQueryString(name)
					{
					     var reg= new RegExp("(^|&)"+name +"=([^&]*)(&|$)");
					     var r= window.location.search.substr(1).match(reg);
					     if(r!=null)return  unescape(r[2]);return null;
					}
					var arrsid=[];
					var arrnum=[];
					function cookietoarray(){
						if(getCookie('cardsid')){
							arrsid=getCookie('cardsid').split(',');
						}else{
							arrsid=[];
						};
						if(getCookie('cardnum')){
							arrnum=getCookie('cardnum').split(',');
						}else{
							arrnum=[];
						}
					}
					var id=GetQueryString("id");
                    var Value=$("#article .detail .detail_r .dity-size ol .dity-size-r .dity-input").html();
                    $("#article .detail .detail_r .dity-cont a .add-to-cart-pro").on("click",function(){
                    	value=$("#dity-input").html(Value);
                    	addCookie("sid",id,7);
			            addCookie("num",Value,7);
			            cookietoarray();
			            if($.inArray(id,arrsid)!=-1){
			            	value++;
			            	addCookie("num",Value,7);
			            }else{
			            	arrsid.push(id);
							addCookie("cardsid",arrsid.toString(),7);
							arrnum.push(1);
							addCookie("cardnum",arrnum.toString(),7);
			            }
                    })
			   
		})(),
		//数据连接
		conn:(function(){
			function GetQueryString(name)
					{
					     var reg= new RegExp("(^|&)"+name +"=([^&]*)(&|$)");
					     var r= window.location.search.substr(1).match(reg);
					     if(r!=null)return  unescape(r[2]);return null;
					}
					var id=GetQueryString("id");
					$.ajax({
				   	type:"get",
				   	url:"http://127.0.0.1/js1707/shixun/php/detail.php",
				   	data:{
				   		id:id
				   	}
				   	}).done(function(data){
				   		var obj=JSON.parse(data);
				   		console.log(obj);
				   		$("#article .detail .detail_l .wrap #spic img").attr("src",obj[0].src);
				   		$("#article .detail .detail_l .wrap #bf img").attr("src",obj[0].src);
				   		$("#article .detail .detail_l .wrap #list ul li:first img").attr("src",obj[0].src);
				   		$("#article .detail .detail_l .d_title").html(obj[0].title);
				   		$("#article .detail .detail_r .dity-cont .dity-price-c strong").html(obj[0].price);
				   		$("#article .detail .detail_r .dity-cont .dity-price-c .marketPrice-s").html(obj[0].yuanjia);
				   		$("#article .detail .detail_r .dity-cont .dity-price-c .dity-countdown").html(obj[0].zhekou);
				   	})
		})(),
		//页面跳转
		jump:(function(){
			$("#article .detail .detail_r .dity-cont a .add-to-cart-pro").on("click",function(){
				location.href='cart.html';
			})
		})()
	}
})
