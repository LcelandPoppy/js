<?php
    header('content-type:text/html;charset=utf-8');
    require 'public.php';
    $goodsSid=isset($_GET["id"])?$_GET["id"]:1;
//	echo $goodsSid;
	$query="select * from baokuan where sid='$goodsSid'";
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);//获取查询结果
	}
	echo json_encode($arr);
?>