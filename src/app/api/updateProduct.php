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
$productID = $data["productID"];
$name = $data["name"];
$description = $data["description"];
$price = $data["price"];
$filePath = $data["filePath"];
$amount = $data["amount"];
$hidden = $data["hidden"];

if (!ctype_digit(strval($hidden)) || $hidden < 0 || $hidden > 1) exit("Problem occured with status.");
if (!ctype_digit(strval($productID)) || $productID < 1 || $productID == null) exit("productID was incorrect.");
if (!ctype_digit(strval($price)) || $price < 0 || $price == null) exit("price was incorrect.");
if (!ctype_digit(strval($amount)) || $amount < 0 || $amount == null) exit("amount was incorrect.");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

if ($conn->query("UPDATE products SET name='$name', description='$description', price='$price', filePath='$filePath', amount='$amount', hidden='$hidden' WHERE productID='$productID'") === TRUE) {
  echo 1;
} else {
  echo 2;
}

$conn->close();

?>
