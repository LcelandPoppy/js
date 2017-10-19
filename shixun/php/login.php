<?php
  header('content-type:text/html;charset=utf-8');
    require 'public.php';
	
	if(isset($_POST['user'])){
		$username=$_POST['user'];
		$password=md5($_POST['pass']);
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
	
?>