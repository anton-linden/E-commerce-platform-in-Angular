<?php
$servername = 'localhost';;
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$data = json_decode(file_get_contents('php://input'), true);
$orderID = $data["orderID"];
$productID = $data["productID"];
$productAmount = $data["productAmount"];
$productPrice = $data["productPrice"];

if ((strlen($orderID) > 0) && (strlen($productID) > 0) && (strlen($productPrice) > 0) && (strlen($productAmount) > 0)) { //Add amount
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO ordered_products (productID, orderID, amount, price)
  VALUES ('$productID', '$orderID', '$productAmount', '$productPrice')";

  if ($conn->query($sql) === TRUE) {
    echo 1;
  } else {
    echo 2;
  }

  $conn->close();
}
?>
