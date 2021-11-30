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

$productsInCartID = $data["productsInCartID"];
$amount = $data["amount"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$sql = "UPDATE products_in_cart SET amount = '$amount' WHERE productsInCartID='$productsInCartID'";

if ($conn->query($sql) === TRUE) {
  echo json_encode("Successful");
} else {
  echo json_encode("Failure");
}

$conn->close();
?>
