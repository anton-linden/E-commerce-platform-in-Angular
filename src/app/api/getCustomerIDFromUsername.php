<?php

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

if (isset($_GET['username'])) {
    $uname = $_GET['username'];
} else {
    exit("WARNING, No username was gotten");
}

if ($uname) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  $result = $conn->query("SELECT userID FROM users WHERE username = '$uname'");
  $id = mysqli_fetch_array($result, MYSQLI_ASSOC)['userID'];

  $result = $conn->query("SELECT customerID FROM customer WHERE userID = '$id'");
  $res = mysqli_fetch_array($result, MYSQLI_ASSOC);
  echo json_encode($res);

  $conn->close();
}
?>
