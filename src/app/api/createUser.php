<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$minPWD = 5;
$minUsername = 3;

$enteredUsername = '';
$enteredPWD = '';

$data = json_decode(file_get_contents('php://input'), true);

$enteredUsername = $data["Username"];
$enteredPWD = $data["Password"];

$enteredUsername = str_replace(' ', '', $enteredUsername);    // Remove spaces
$enteredPWD = str_replace(' ', '', $enteredPWD);              // Remove spaces

if ((strlen($enteredPWD) >= $minPWD) && (strlen($enteredUsername) >= $minUsername)) {

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  //Hash password
  $hashed_password = password_hash($enteredPWD, PASSWORD_DEFAULT);

  //$hashed_password = $enteredPWD;

  $sql = "INSERT INTO users (username, pwd)
  VALUES ('$enteredUsername', '$hashed_password')";

  if ($conn->query($sql) === TRUE) {
    echo 1;
  } else {
    echo 2;
    //echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>
