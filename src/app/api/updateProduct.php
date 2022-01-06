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

if (!is_int($hidden)) exit("Problem occured with status.");
if (!is_int($productID) || $productID == null) exit("ProductID was not correct.");

if (strlen($name) > 0 && strlen($price) > 0 && strlen($amount) > 0) {
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  if ($conn->query("UPDATE products SET name='$name', description='$description', price='$price', filePath='$filePath', amount='$amount', hidden='$hidden' WHERE productID='$productID'") === TRUE) {
    echo 1;
  } else {
    echo 2;
  }

  $conn->close();
}
?>
