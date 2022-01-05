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

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  $sql = "DELETE FROM users WHERE userID='$userID'";

  if ($conn->query($sql) === TRUE) {
    echo 1;
  } else {
    echo 2;
  }

  $conn->close();
}
?>
