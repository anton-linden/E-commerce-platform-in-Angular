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
$name = $data["name"];
$description = $data["description"];
$price = $data["price"];
$filePath = $data["filePath"];

if (strlen($name) > 0 && strlen($price) > 0) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO products (name, description, price, filePath, active) VALUES ('$name', '$description', '$price', '$filePath', 1)";

  if ($conn->query($sql) === TRUE) {
    echo 1;
  } else {
    echo 2;
  }

  $conn->close();
}
?>
