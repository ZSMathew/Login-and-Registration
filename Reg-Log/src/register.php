<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_DEFAULT);

$check = "SELECT * FROM users WHERE email='$email'";
$reuslt = mysqli_query($conn, $check);

if (mysqli_num_rows($reuslt) > 0){
    echo json_encode(["status"=>"email_exists"]);
    exit();
}
 //INSERTING
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email','$password')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["status" =>"success"]);
}else {
    echo json_encode(["status" =>"error"]);
}

?>