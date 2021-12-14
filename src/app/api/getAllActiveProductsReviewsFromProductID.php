<?php

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$servername = 'localhost';;
$username = 'root';
$password = '';
$dbname = 'ws2';

if (isset($_GET['productID'])) {
    $productID = $_GET['productID'];
} else {
    exit("WARNING, No productID was gotten");
}

if ($productID) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  $result = $conn->query("SELECT grade, reviewText FROM reviews WHERE productID = '$productID' AND hidden = 0");
  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
