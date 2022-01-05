<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (isset($_GET['roleID'])) {
    $roleID = $_GET['roleID'];
} else {
    exit("WARNING, No roleID was gotten");
}

if ($roleID) {
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

  $result = $conn->query("SELECT roleName FROM `roles` WHERE roleID = $roleID");
  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
