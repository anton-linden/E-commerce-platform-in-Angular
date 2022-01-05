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

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  //Get cart contents.
  $sql = "SELECT userID FROM users WHERE username = '$uname'";
  $result = $conn->query($sql);

  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
