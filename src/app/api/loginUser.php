<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (isset($_GET['Username'])) {
    $enteredUsername = $_GET['Username'];
} else {
    // Fallback behaviour goes here
    print("WARNING, No Username was gotten");
}

if (isset($_GET['Pwd'])) {
    $enteredPWD = $_GET['Pwd'];
} else {
    // Fallback behaviour goes here
    print("WARNING, No Password was gotten");
}

if ($enteredPWD) {

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT Username, Pwd FROM users WHERE Username='$enteredUsername'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      if(password_verify($enteredPWD, $row["Pwd"]) && ($enteredUsername == $row["Username"])) {
          echo 1;
      } else {
          echo 2;
      }
    }
  } else {
    echo 2; //Bad, attacker knows that user exists. Failed pass & failed uName shall have same error.
  }

  $conn->close();
}
?>
