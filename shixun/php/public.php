<?php
    $conn=mysql_connect('localhost','root','123456');
   if(!$conn){
   	  exit('连接数据库有误'.mysql_error());
   };
   mysql_select_db('123456');
   mysql_query('SET NAMES UTF8');
?>