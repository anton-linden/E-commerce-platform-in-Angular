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

$customerID = $data["customerID"];
$email = $data["email"];
$phoneNumber = $data["phoneNumber"];
$adress = $data["adress"];
$city = $data["city"];
$postalCode = $data["postalCode"];
$forename = $data["forename"];
$lastname = $data["lastname"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE customer
SET email = '$email', phoneNumber = '$phoneNumber', adress = '$adress', city = '$city', postalCode = '$postalCode', forename = '$forename', lastname = '$lastname'
WHERE customerID='$customerID'";

if ($conn->query($sql) === TRUE) {
  echo 1;
} else {
  echo 2;
}

$conn->close();
?>
