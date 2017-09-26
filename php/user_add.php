<?php

header('Content-Type:application/json');

@$name = $_REQUEST['name'] or die('用户名是必须的');
@$tel = $_REQUEST['tel'] or die('用户电话是必须的');
@$email = $_REQUEST['email'] or die('用户邮箱是必须的');
@$msg = $_REQUEST['msg'] or die('留言内容是必须的');

#if(empty($name)||empty($tel)||empty($email)||$empty($msg)){
#    echo '[]';
#    return;
#};

$userTime = time()*1000;

$conn = mysqli_connect("127.0.0.1","root","","");
        mysqli_query($conn,"SET NAMES UTF8");

$sql = "INSERT INTO user_msg VALUES(null,'$name','$tel','$email','$msg')";

$result = mysqli_query($conn,$sql);

$output = [];

if($result){
    $myResult['msg'] = "留言成功";
    $myResult['uid'] = mysqli_insert_id($conn);
}else{
    $myResult['msg'] = "留言失败";
}

$output[] = $myResult;

echo json_encode($output);

?>