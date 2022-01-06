<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (!isset($_GET['productID'])) exit("WARNING, No productID was gotten");
$productID = $_GET['productID'];
if (!ctype_digit(strval($productID)) || $productID == null) exit("ProductID was not correct.");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT name, description, price, filePath, amount, hidden FROM products WHERE productID = '$productID'");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
