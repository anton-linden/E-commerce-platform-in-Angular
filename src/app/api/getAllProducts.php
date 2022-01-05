<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT productID, name, price, amount, hidden, filePath FROM products");
echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
