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
$name = $data["name"];
$description = $data["description"];
$price = $data["price"];
$filePath = $data["filePath"];
$amount = $data["amount"];
$hidden = $data["hidden"];

if (!is_int($hidden)) exit("Problem occured with status.");

if (strlen($name) > 0 && strlen($price) > 0 && strlen($amount) > 0) {
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  if ($conn->query("INSERT INTO products (name, description, price, filePath, hidden, amount) VALUES ('$name', '$description', '$price', '$filePath', '$hidden', '$amount')") === TRUE) {
    echo 1;
  } else {
    echo 2;
  }

  $conn->close();
}
?>
