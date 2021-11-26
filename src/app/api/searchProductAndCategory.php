<?php

$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';
$searchString = 'cle';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// product search first
//then category search.
$sql = "SELECT name, description, filePath FROM products WHERE hidden=0 AND  ('%$searchString%' LIKE name OR '%$searchString%' LIKE description OR name like '%$searchString%' OR description LIKE '%$searchString%')
UNION
SELECT name, description, filePath FROM products WHERE hidden=0 AND productID in 
  (SELECT productID FROM products_in_category WHERE  categoryID = 
    (SELECT categoryID FROM category WHERE hidden=0 AND ('%$searchString%' LIKE name OR '%$searchString%' LIKE description OR name like '%$searchString%' OR description LIKE '%$searchString%')))"; 
  
$result = $conn->query($sql);

echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

$conn->close();
?>