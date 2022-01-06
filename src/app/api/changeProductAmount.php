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
$amount = $data["amount"];
$status = 0;

echo $amount == null;

if (!ctype_digit(strval($productID)) || $productID < 1) exit("productID was incorrect.");
if (!ctype_digit(strval($amount)) || $amount < 0) exit("amount was incorrect.");
if ($amount == 0) $status = 1;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

if ($conn->query("UPDATE products SET amount='$amount', hidden='$status' WHERE productID='$productID'") === TRUE) {
  echo 1;
} else {
  echo 2;
}

$conn->close();

?>
