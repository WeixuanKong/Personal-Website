<?php
/*the php file to display photos*/
require_once('config.php');
$connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

//error handling
$error = mysqli_connect_error();
if ($error != null){
    $output = "<p>Unable to connect to database<p>".$error;
    exit($output);
}

$sqlVar1 = "SELECT ID, Name, fishType FROM photos ORDER BY ID";

try {
    $stmt1 = $connection->prepare($sqlVar1);

    $stmt1->execute();

    $result1 = $stmt1->get_result();
}

catch (Exception $e){
    echo $e->getMessage();
    die("Connection failed: " . $conn->connect_error);
}
finally {
    $stmt1->close();
}

foreach($result1 as $row){
    $ID = $row['ID'];
    $Name = $row['Name'];
    $fishType = $row['fishType'];
    //echo the html tags with custom data attribute
    echo "<figure id='$ID' data-name='$Name' data-fishType='$fishType' 
    style=\"
    opacity: 0.8;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url('../photos/$ID.jpg');

    /* Full height */
    height: 100%
    \"><figcaption>$fishType</figcaption></figure>";
}