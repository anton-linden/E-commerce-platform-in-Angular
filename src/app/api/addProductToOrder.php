<?php
$servername = 'localhost';
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

echo !ctype_digit(strval($orderID));

if (!ctype_digit(strval($orderID)) || $orderID < 1 || $orderID == null) exit("OrderID was incorrect.");
if (!ctype_digit(strval($productID)) || $productID < 1 || $productID == null) exit("productID was incorrect.");
if (!ctype_digit(strval($productAmount)) || $productAmount < 1 || $productAmount == null) exit("productAmount was incorrect.");
if (!ctype_digit(strval($productPrice)) || $productPrice < 0 || $productPrice == null) exit("productPrice was incorrect.");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$sql = "INSERT INTO ordered_products (productID, orderID, amount, price)
VALUES ('$productID', '$orderID', '$productAmount', '$productPrice')";

if ($conn->query($sql) === TRUE) {
  echo 1;
} else {
  echo 2;
}

$conn->close();
?>
