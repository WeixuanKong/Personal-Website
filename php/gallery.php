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

