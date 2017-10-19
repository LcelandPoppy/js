define(["jquery","cookie"],function($){
	return{
		//登录页面
             //登录页面
             login:(function(){
             	$("#in").on("click",function(){
             		var Uvalue=$("#user").val();
             		var Pvalue=$("#pass").val();
             		console.log(Uvalue)
             		$.ajax({
             			type:"post",
             			url:"http://127.0.0.1/js1707/shixun/php/login.php",
             			data:{
             				user:Uvalue,
             				pass:Pvalue
             			}
             		}).done(function(data){
             			var Uvalue=$("#user").val();
             			if(!data){
             				alert(1);
             				$("#article .biao .t1").find("s").html("用户名或密码错误");
             				$("#pass").val("");
             			}else{
             				location.href='index.html';//调到首页
							addCookie("username",Uvalue,7);
             			}
             		})
             	})
             	function getCode(n) {
				var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
				var b = "";
				for(var i = 0; i < n; i++) {
					var index = Math.floor(Math.random() * 62);
					b += all.charAt(index);
				}
				return b;
			};
			
			$("#article .biao .t3 #suiji").html(""+getCode(4)+"");
			$("#article .biao .t3 strong").on("click",function(){
				$("#article .biao .t3 #suiji").html(""+getCode(4)+"");
			})
			$("#article .biao .t3 .te").on("blur",function(){
				var Va=$("#article .biao .t3 .te").val();
				if(Va==$("#article .biao .t3 #suiji").html()){
					$("#article .biao .t3").find("s").html("√");
					$("#article .biao .t3").find("s").css("color","red");
				}else{
					$("#article .biao .t3").find("s").html("验证码错误，请重新输入");
				}
			});
             })()
	}
})