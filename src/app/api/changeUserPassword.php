<?php
$servername = 'localhost';;
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$minUsernameLength = 3;
$minPasswordLength = 5;

$data = json_decode(file_get_contents('php://input'), true);

$enteredUsername = str_replace(' ', '', $data["username"]);
$currentPassword = str_replace(' ', '', $data["currentPassword"]);
$newPassword = str_replace(' ', '', $data["newPassword"]);

if (strlen($currentPassword) < $minPasswordLength || strlen($enteredUsername) < $minUsernameLength || strlen($newPassword) < $minPasswordLength) { exit(json_encode("Data was not correct.")); }

$currentPasswordHashed = password_hash($currentPassword, PASSWORD_DEFAULT);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

$result = $conn->query("SELECT pwd FROM users WHERE username = '$enteredUsername'");

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
if ($row['pwd'] == null) { exit(json_encode("No pwd found.")); }

if (!password_verify($currentPassword, $row["pwd"])) { exit(json_encode("Passwords do not match.")); }

$newPasswordHashed = password_hash($newPassword, PASSWORD_DEFAULT);

$sql = "UPDATE users
        SET pwd = '$newPasswordHashed'
        WHERE username = '$enteredUsername'";

if ($conn->query($sql) === TRUE) {
  echo 1;
} else {
  echo 2;
}

$conn->close();
?>
