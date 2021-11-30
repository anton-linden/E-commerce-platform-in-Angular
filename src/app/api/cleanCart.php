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

$userID = $data["userID"];

if (strlen($userID) >= 1) {

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "DELETE FROM products_in_cart WHERE userID='$userID'";

  if ($conn->query($sql) === TRUE) {
    //echo "Record deleted successfully";
    echo 1;
  } else {
    echo 2;
    //echo "Error deleting record: " . $conn->error;
  }

  $conn->close();
}
?>
