<?php
 header('content-type:text/html;charset=utf-8');
    require 'public.php';
	
	if(isset($_POST['tel'])|| isset($_POST['submit'])){
		$username=$_POST['tel'];
	}else{
		exit("非法登录");
	};
	$query="select * from user where tel='$username'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	};
	
	if(isset($_POST['submit']) && $_POST['submit']=='同意协议并注册'){
		$username=$_POST['tel'];
		$pass=md5($_POST['pass']);

		$query1="insert into user values(null,'$username','$pass')";
		mysql_query($query1);
		header('location:../login.html');
	}
?>