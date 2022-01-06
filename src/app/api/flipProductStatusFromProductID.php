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
$status = $data["status"];

if (!$productID) { exit("No productID"); }
if (!is_int($status)) { exit("Wrong status sent in"); }

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$sql = "UPDATE products SET hidden = '$status' WHERE productID='$productID'";

if ($conn->query($sql) === TRUE) {
  echo json_encode("Successful");
} else {
  echo json_encode("Failure");
}

$conn->close();
?>
