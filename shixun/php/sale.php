<?php
    header('content-type:text/html;charset=utf-8');
    require 'public.php';
	
	
	$query="select * from dayly";
	$result=mysql_query($query);
//  echo mysql_num_rows($result);
    $arr=array();
    for($i=0;$i<mysql_num_rows($result);$i++){
    	$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    };
    
//  print_r ($arr);
	$arrL=json_encode($arr);
    echo $arrL;
	
	
?>