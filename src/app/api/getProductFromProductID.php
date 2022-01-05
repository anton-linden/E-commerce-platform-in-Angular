<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (isset($_GET['productID'])) {
    $productID = $_GET['productID'];
} else {
    exit("WARNING, No productID was gotten");
}

if (strlen($productID) > 0 && $productID != null) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  //Get cart contents.
  $sql = "SELECT name, description, filePath FROM products WHERE productID = '$productID'";
  $result = $conn->query($sql);

  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
