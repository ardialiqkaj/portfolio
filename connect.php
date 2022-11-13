<?php
session_start();
include('dbcon.php');

if(isset($_POST["submit"])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $container = $_POST['container'];

    $postData = [
        'firstname'=>$fname,
        'lastname'=>$lname,
        'emailaddress'=>$email,
        'containermessage'=>$container,
    ];

$ref_table = "contact";
$postRef_result = $database->getReference($ref_table)->push($postData);

if($postRef_result) {
    echo "<script>alert('Thank you for sending a ticket. I will look into it and get back!')</script>";
    header('Location: index.html');
} else {
    $_SESSION['status'] = "Contact not added successfuly";
    header('Location: index.html');
}

}

?>