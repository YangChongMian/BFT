<?php

header('Content-Type:application/json');

$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
        mysqli_query($conn,"SET NAMES UTF8");

$sql = "SELECT count(uid) FROM user_msg";

$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_row($result);

#var_dump($row);

$size = ceil($row[0]/8);

$output = ["page"=>$size];

echo json_encode($output);

?>