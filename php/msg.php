<?php

header('Content-Type:application/json');

$start = $_REQUEST['start'];

$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
        mysqli_query($conn,"SET NAMES UTF8");

$sql = "SELECT uid,name,tel,email,msg FROM user_msg limit $start,10";

$result = mysqli_query($conn,$sql);

$output = [];

while(true){
    $row = mysqli_fetch_assoc($result);
    if(!$row){
        break;
    }
    $output[] = $row;
}

echo json_encode($output);

?>