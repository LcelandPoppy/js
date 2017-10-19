define(["jquery","public","cookie"],function($){
	return{
		hover: (function(){
			//送货到：地址
				$("#top .top-l").find("p").hover(function(){
				 $("#top .top-l").find(".address").css("display","block");
				 $("#top .top-l").find(".address").css("border-top","0");
				 $("#top .top-l").find("p").css("border-left","1px solid #dfdfdf")
				},function(){
				$("#top .top-l").find(".address").css("display","none");
				})
				//我的订单
				$("#top .top-r").find("b.order").hover(function(){
					$("#top .top-r .b_order").css("display","block");
					$("#top .top-r .b_order").css("border-top","0");
				},function(){
					$("#top .top-r .b_order").css("display","none");
				})
				//快速导航
				$("#top .top-r").find("b.quick_nav").hover(function(){
					$("#top .top-r .b_q_nav").css("display","block");
					$("#top .top-r .b_q_nav").css("border-top","0");
				},function(){
					$("#top .top-r .b_q_nav").css("display","none");
				})
				//手机乐峰
				$("#top .top-r").find("b.sjlf").hover(function(){
					$("#top .top-r .b_sjlf").css("display","block");
					$("#top .top-r .b_sjlf").css("border-top","0");
				},function(){
					$("#top .top-r .b_sjlf").css("display","none");
				})
				//商品分类
				$("#nav .nav_one .menu ul").find(".hid").hide();
				$("#nav .nav_one .menu ul").find(".last").find("b").hide();
				$("#nav .nav_one .menu ul").find(".hid").css("height","0");
				$("#nav .menu ul").find(".last").hover(function(){
					$("#nav .nav_one .menu ul").find(".hid").show();
					$("#nav .nav_one .menu ul ").find(".hid").stop(true,true).animate({
						height:110
					},400);
					$("#nav .nav_one .menu ul").find(".last").find("b").show();
					$("#nav .nav_one .menu ul").find(".last").find("i").hide();
				},function(){
				var timer=setTimeout(function(){
					$("#nav .nav_one .menu ul").find(".hid").hide();
					$("#nav .nav_one .menu ul").find(".hid").stop(true,true).animate({
						height:0
					},400);
					$("#nav .nav_one .menu ul").find(".last").find("b").hide();
					$("#nav .nav_one .menu ul").find(".last").find("i").show();
				},1000)
				})
				$("#c_content").hide();
				
				$("#header .carts").hover(function(){
					$("#c_content").show();
					
				},function(){
					$("#c_content").hide();
				})
				
		})(),
		//轮播图
		lunbo: (function(){
					$.ajax({
						url:"http://127.0.0.1/js1707/shixun/php/lunbo.json",
						dataType:"json"
					}).done(function(data){
						var $obj=data;
						var $html="<ul>";
						var $aOl="<ol>";
						for(var $i=0;$i<$obj.length;$i++){
							$html+="<li><img src='"+$obj[$i].url+"'></li>";
							$aOl+="<li></li>";
						};
						$html+="</ul>";
						$aOl+="</ol>";
						$("#banner").html($html);
						$("#banner").append($aOl);
						$("banner ol li:first").addClass("active");
						var num=0;
						var Btns=$("#banner ol li");
						var Pics=$("#banner ul li");
						$("#banner ol li:first").addClass("active");
						$("#banner ul li:first").css("opacity","1").siblings().css("opacity","0");
						var index=$(this).index();
		     			    $("#banner ol li").mouseover(function(){
							$(this).addClass("active").siblings().removeClass("active");
						    $("#banner ul li").eq($(this).index()).css("opacity","1").siblings().css("opacity","0");
							});
							
					var timer=setInterval(function(){
						
						if(index>Btns.length){
							index=0;
							$("#banner ul li").eq(index).css("opacity","1").siblings().css("opacity","0");
							$("#banner ol li").eq(index).addClass("active").siblings().removeClass("active");
						}else{
							index++;
							$("#banner ul li").eq(index).css("opacity","1").siblings().css("opacity","0");
							$("#banner ol li").eq(index).addClass("active").siblings().removeClass("active");
						}
					},1000);
                       $("#banner").on("mouseover",function(){
                       	   clearInterval(timer);
                       });
						$("#banner").on("mouseout",function(){
                       	  clearInterval(timer);
                       	timer=setInterval(function(){
						
						if(index>Btns.length){
							index=0;
							$("#banner ul li").eq(index).css("opacity","1").siblings().css("opacity","0");
							$("#banner ol li").eq(index).addClass("active").siblings().removeClass("active");
						}else{
							index++;
							$("#banner ul li").eq(index).css("opacity","1").siblings().css("opacity","0");
							$("#banner ol li").eq(index).addClass("active").siblings().removeClass("active");
						}
					},1000);
                       	   
                       });
		});
				})(),
				//tab切换
				tab:(function(){
					$("#nav .nav_one .menu ul li").find(".s_list").hide();
					var index=$(this).index;
					$("#nav .nav_one .menu ul li").mouseover(function(){
						$("#nav .nav_one .menu ul li").find(".s_list").eq($(this).index()).css("display","block");
					});
					$("#nav .nav_one .menu ul li").mouseout(function(){
						$("#nav .nav_one .menu ul li").find(".s_list").css("display","none");
					});
				})(),
				//搜索
				search:(function(){
					$("#search").on("input",function(){
						var Value=$("#search").val();
						
							$.ajax({
							url:"http://www.lefeng.com/api/neptune/search/suggestion/v2",
							dataType:"jsonp",
							data:{
								keyword:Value
							}
						}).done(function(data){
//							alert(1);
							console.log(data.data.length);
                            var html="<ul id='sea'>";
                            for(var i=0;i<data.data.length;i++){
                            	html+="<li>"+data.data[i].content+"</li>"
                            }
							html+="</ul>";
							$("body").append(html);
						    $("#sea li").hover(function(){
						    $(this).css("background","#E0E0E0").siblings().css("background","#fff");
					       });
						 })
					});
				})(),
                
                //每日精选
				dayly: (function(){
					$.ajax({
						type:"get",
						url:"http://127.0.0.1/js1707/shixun/php/dayly.php",
						dataType:"json"
					}).done(function(data){
						var obj=data;
						var html="<ul>"
						for(var i=0;i<obj.length;i++){
							html+="<li class="+"i"+(i+1)+"><i></i><img src='"+obj[i].src+"'><p class='tit'><span>"+obj[i].zhekou+"</span><a href='#'>"+obj[i].title+"</a></p><p class='price'><b>"+obj[i].price+"</b><s>"+obj[i].yuanjia+"</s></p><input type='button' value='"+obj[i].opera+"'/></li>";
						}
						html+="</ul>";
						$("#article .dayly .content").html(html);
					});
				})(),
				//隐藏部分
				hide: (function(){
					$("#louti i").on("click",function(){
						$("#louti i").hide();
					});
				})(), 
				//回到顶部
				backtop: (function(){
					var scrolltop=$(window).scrollTop();
					$("#back_top i").on("click",function(){
					var timer=setInterval(function(){
						scrolltop=scrolltop-30;
						window.scrollTo(0,scrolltop);
						if(scrolltop<=0){
					 		scrolltop=0;
					 		clearInterval(timer);
		 	            }
					},50)
					})
				})(),
				//楼梯效果
				louti:  (function(){
					$("#louti").hide();
					$(window).scroll(function(){
						var scrolltop=$(window).scrollTop();
						if(scrolltop>=800){
							$("#louti").fadeIn(500);
						}else{
							$("#louti").fadeOut(500);
						};
						$('#article .tizi').each(function(){
						var $top=$('.tizi').eq($(this).index()).offset().top+400;
						if($top>scrolltop){
							$('#louti li').removeClass('active');
							$('#louti li').eq($(this).index()).addClass('active');
							return false;
			}
						$('#louti li').on('click',function(){
						$(this).addClass('active').siblings().removeClass('active');
						var $index=$(this).index();//当前的索引
						var $top=$('.tizi').eq($index).offset().top;//当前楼梯对应的楼层的top值
						$('html,body').animate({//赋值 
							//document.documentElement.scrollTop || document.body.scrollTop
							scrollTop:$top
						},200);
					});
	              });
		})
				})(),
				//获取数据
				accept:(function(){
					$.ajax({
						url:"http://127.0.0.1/js1707/shixun/php/baokuan.php",
						dataTye:"json"
					}).done(function(data){
						var obj=JSON.parse(data);
						var oDiv="";
						for(var i=0;i<obj.length;i++){
							oDiv+="<div class='e_list'><dl><dt class='list_img'><img src='"+obj[i].src+"'/></dt><dd class='x_title'><b>"+obj[i].zhekou+"</b><a href='detail.html?id="+obj[i].sid+"' class='option' target='_blank'>"+obj[i].title+"</a></dd><dd class='price'><span>"+obj[i].price+"</span><b>"+obj[i].yuanjia+"</b><a href='#'>加入购物车</a></dd></dl></div>"
						};
						$("#article .early .content").html(oDiv);
						
						$("#article .early .content .e_list .price a").css("display","none");
						$("#article .early .content .e_list").hover(function(){
							$(this).find(".price a").css("display","inline-block");
						},function(){
							$(this).find(".price a").css("display","none");
						});
					});
					
					$.ajax({
						url:"http://127.0.0.1/js1707/shixun/php/sale.php",
						dataTye:"json"
					}).done(function(data){
						var obj=JSON.parse(data);
						var oDiv="";
						for(var i=0;i<obj.length;i++){
							oDiv+="<div class='F_l'><img src='img/load.gif' data-src='"+obj[i].src+"'/><p class='mask'>"+obj[i].title+"</p><p class='x_title'><s>"+obj[i].zhekou+"</s>"+obj[i].soruce+"</p></div>"
						};
						$("#article .sale .aside").html(oDiv);
						
						
						//懒加载
						$(window).on('scroll',function () {//当页面滚动的时候绑定事件
						        $('#article .sale .aside img').each(function () {//遍历所有的img标签
						            if (checkShow($(this)) && !isLoaded($(this)) ){
						                // 需要写一个checkShow函数来判断当前img是否已经出现在了视野中
						                //还需要写一个isLoaded函数判断当前img是否已经被加载过了
						               loadImg($(this));//符合上述条件之后，再写一个加载函数加载当前img
						            }
						        })
						    })
						    function checkShow($img) { // 传入一个img的jq对象
						        var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
						        var windowHeight = $(window).height(); // 浏览器自身的高度
						        var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置
						
						        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的
						            return true;
						        }
						        return false;
						    }
						    function isLoaded ($img) {
						        return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
						    }
						    function loadImg ($img) {
						        $img.attr('src',$img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性
						    }
					})
				})(),
             //用户注册
             register:(function(){
			    var bstop=true;
			    $("#telphone").on("blur",function(){
			    	var oinput=$("#telphone");
			    	var Vlaue=oinput.val();
			    	console.log(Vlaue)
			    	var patter=/\d{11}/;
			    	if(Vlaue!=""){
			    		if(patter.test(Vlaue)){
//			    			alert(1)
			    			$.ajax({
			    				type:'post',
								url:'http://127.0.0.1/js1707/shixun/php/register.php',
								data:{
									tel:Vlaue
								}
								}).done(function(data){
									alert(data);
									if(data){
									  	$("#article .biao .i1").find("s").html("用户名已存在");
							            $("#article .biao .i1").find("s").css("color","red");
							            bstop=true;
									}else{
										$("#article .biao .i1").find("s").html("√");
							            $("#article .biao .i1").find("s").css("color","blue");
							            bstop=false;
									}
			    			})
			    		}else{
			    		  $("#article .biao .i1").find("s").html("用户名格式错误");	
			    		}
			    	}else{
			    		$("#article .biao .i1").find("s").html("用户名不能为空");
			    	}
			    })
			    
			    $("#article .biao").find("form").on("submit",function(){
					if($("#telphone").val()==''){
						$("#article .biao .i1").find("s").html("请输入用户名");
						$("#article .biao .i1").find("s").css("color","red");
					}
					if(bstop){
						return false;
					}
				})
			    $("#password").on("blur",function(){
			    	var Va=$(this).val();
			    	if(Va.length>6 && Va.length<20){
			    		$("#article .biao .i2").find("s").html("√");
			    	}else{
			    		$("#article .biao .i2").find("s").html("密码长度不够");
			    	}
			    	$("#reset").on("blur",function(){
			    		var Vc=$("#reset").val();
			    		if(Vc==Va){
			    			$("#article .biao .i3").find("s").html("√");
			    		}else{
			    			$("#article .biao .i3").find("s").html("密码不一致，请重新输入");
			    		}
			    	})
			    });
			    //随机验证码
			    function getCode(n) {
				var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
				var b = "";
				for(var i = 0; i < n; i++) {
					var index = Math.floor(Math.random() * 62);
					b += all.charAt(index);
				}
				return b;
			};
			
			$("#article .biao .i4 .te1").html(""+getCode(4)+"");
			$("#article .biao .i4 strong").on("click",function(){
				$("#article .biao .i4 .te1").html(""+getCode(4)+"");
			})
			$("#yanz").on("blur",function(){
				var Va=$("#yanz").val();
				if(Va==$("#article .biao .i4 .te1").html()){
					$("#article .biao .i4").find("s").html("√");
				}else{
					$("#article .biao .i4").find("s").html("验证码错误，请重新输入");
				}
			})
             })(),
             //获取cookie值实现完整登录
             denglu:(function(){
             	if(getCookie('username')){
             		var username=getCookie('username');
	             	$("#top .top-r span:first").html(username+" 欢迎来到乐蜂首页");
	             	$("#top .top-r a:first").html(' ');
	             	$("#top .top-r a:nth-child(2)").html(' ');
             	}
             })(),
             //弹窗
             tan:(function(){
             	$("#modal").hide();
             	$("#mask").hide();
             	$("#header .carts .num").on("click",function(){
             		$("#modal").show();
             		$("#mask").show();
             	})
             	$("#modal .close").on("click",function(){
             		$("#modal").hide();
             	$("#mask").hide();
             	})
             })()
	}
})
