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

$customerID = $data["customerID"];
$productID = $data["productID"];
$grade = $data["grade"];
$reviewText = $data["reviewText"];

if (strlen($customerID) < 1 || $customerID == 0) { exit("illegal customerID given"); }
if (strlen($productID) < 1 || $productID == 0) { exit("illegal productID given"); }
if (strlen($grade) != 1 || $grade < 1 || $grade > 5) { exit("illegal grade given"); }
if (strlen($reviewText) < 0 || strlen($reviewText) > 100) { exit("illegal reviewText length given"); }

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

# Check if there already is a review.
# If review, UPDATE review.

$sql = "INSERT INTO reviews (customerID, productID, grade, reviewText)
VALUES ('$customerID', '$productID', '$grade', '$reviewText')
ON DUPLICATE KEY UPDATE grade = '$grade', reviewText = '$reviewText'";


if ($conn->query($sql) === TRUE) {
  echo 1;
} else {
  echo 2;
}


$conn->close();
?>
