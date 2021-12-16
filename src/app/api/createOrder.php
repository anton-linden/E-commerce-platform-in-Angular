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

if (strlen($customerID) > 0) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

try {
  $conn->begin_transaction();
  $sql = "INSERT INTO orders (customerID) VALUES ('$customerID')";
  $conn->query($sql);
  
  //In no error have been thrown
  $conn-> commit();
  echo 1;
}
catch ( Exception $e ) {

    $conn->rollback(); 
    echo 2;
}
  $conn->close();
}
?>