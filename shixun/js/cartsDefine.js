define(["jquery","cookie"],function(){
	return{
		//获取数据
		accData:(function(){
			if(getCookie("sid")){
				$("#list").show();
				$("#kong").hide();
				$.ajax({
				   	type:"get",
				   	url:"http://127.0.0.1/js1707/shixun/php/detail.php",
				   	data:{
				   		id:getCookie("sid")
				   	}
			   }).done(function(data){
				   console.log(data);
				   var obj=JSON.parse(data);
				   console.log(typeof obj);
				   var html="<div id='goods_formation'>"
				   html+="<ul><li class='g_t'><div class='left'><i></i><span class='tit'>商品信息</span></div>"+
		 					"<div class='right'><span>单价</span><span>数量</span><span>小计</span><span>操作</span></div></li>"+
		 					"<li class='g_c'><p class='pic'><img src='"+obj[0].src+"'/></p><p class='guige'><span>舒缓眼膜10片</span><span>规格10片</span></p><p class='op'><input type='button' class='del' value='删除'/></p><p class='xiao_j'><span class='x_p'>"+obj[0].price+"</span></p><p class='num'><input type='button' value='-' class='jian'/><input type='text' value='"+getCookie('num')+"' class='numb'/><input type='button' value='+' class='add'/></p><p class='price'><span class='x_p'>"+obj[0].price+"</span><span class='y_p'>"+obj[0].yuanjia+"</span></p></li>"+
		 					"<li class='g_b'><p class='yun'>运费</p><p class='y_p'>本单已免运费</p></li></ul>"
				   html+="</div>";
				   $("#container .margin").prepend(html);
				   	console.log(obj[0].src);
				   	var num=parseInt($("#container #goods_formation ul .g_c p.num .numb").val());
				   	var price=parseInt($("#container #goods_formation ul .g_c .price .x_p").html());
				   	$("#container #goods_formation ul .g_c p.num .add").on("click",function(){
				   		if(num<1){
				   			num=1
				   		}else{
				   			num++;
				   			$("#container #goods_formation ul .g_c p.num .numb").val(num);
				   			$("#container #goods_formation ul .g_c .xiao_j span").html(num*price);
				   			$("#container #jiesuan .ka .ka_b .geshu i").html(num);
				   			$("#container #jiesuan .ka .ka_b .jiage").html(price);
				   			$("#container #jiesuan .zong_p em").html(num*price);
				   			addCookie("num",num,7);
				   		}
				   	});
				   	$("#container #goods_formation ul .g_c p.num .jian").on("click",function(){
				   		if(num>1){
				   			num--;
				   			$("#container #goods_formation ul .g_c p.num .numb").val(num);
				   			$("#container #goods_formation ul .g_c .xiao_j span").html(num*price);
				   			$("#container #jiesuan .ka .ka_b .geshu i").html(num);
				   			$("#container #jiesuan .ka .ka_b .jiage").html(price);
				   			$("#container #jiesuan .zong_p em").html(num*price);
				   			addCookie("num",num,7);
				   		}else{
				   			num=1;
				   		}
				   	});
				   	//删除cookie
				   	var n=$("#container #goods_formation ul .g_c .op input");
						console.log(n)
						$("#container #goods_formation").on("click","ul .g_c .op input",function(){
//							alert(1);
							delCookie("cardsid");
							delCookie("cardnum");
							delCookie("sid");
							delCookie("num");
							$("#kong").hide();
				            $("#list").show();
						})
				   });
			}else{
				$("#kong").show();
				$("#list").hide();
			}
		})(),
		search:(function(){
			$("#kong .input").on("input",function(){
						var Value=$("#kong .input").val();
							$.ajax({
							url:"http://www.lefeng.com/api/neptune/search/suggestion/v2",
							dataType:"jsonp",
							data:{
								keyword:Value
							}
						}).done(function(data){
                            var html="";
                            for(var i=0;i<data.data.length;i++){
                            	html+="<li>"+data.data[i].content+"</li>"
                            }
							html+="";
							$(".Lis").html(html);
						    $(".Lis li").hover(function(){
						    $(this).css("background","#E0E0E0").siblings().css("background","#fff");
					       });
						 })
					});
		})(),
		//倒计时
		daojishi:(function(){
			var intDiff = parseInt(60); //倒计时总秒数量
				function timer(intDiff) {
				  window.setInterval(function () {
				    var day = 0,
				      hour = 0,
				      minute = 0,
				      second = 0; //时间默认值
				    if (intDiff > 0) {
				      day = Math.floor(intDiff / (60 * 60 * 24));
				      hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				      minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				      second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
				    }
				    if (minute <= 9) minute = '0' + minute;
				    if (second <= 9) second = '0' + second;
//				    $('#day_show').html(day + "天");//天
//				    $('#hour_show').html('<s id="h"></s>' + hour + '时');//时
//				    $('#minute_show').html('<s></s>' + minute + '分');//分
//				    $('#second_show').html('<s></s>' + second + '秒');//秒
                    $("#container #s_title span").html(minute+"分"+second+"秒");
				    intDiff--;
				  }, 1000);
				}
					$(function () {
					  timer(30*intDiff);
					});
		})()
		}
})