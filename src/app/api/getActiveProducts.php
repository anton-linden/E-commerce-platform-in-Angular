<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT productID, name, description, price, filePath FROM products WHERE hidden=0";
$result = $conn->query($sql);

echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>
