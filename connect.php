<?php
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $container = $_POST['container'];

    //create DB

    $conn = new mysqli('localhost','root','', 'portfoliodb');

    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(fname, lname, email, container)
        values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $fname, $lname, $email, $container);
        $stmt->execute();
        echo "<script>alert('Thank you for sending a ticket. I will look into it and get back!')</script>";
        $stmt->close();
        $conn->close();
        header( "refresh:0; url=http://localhost/portfolio-project/" );
    }
?>