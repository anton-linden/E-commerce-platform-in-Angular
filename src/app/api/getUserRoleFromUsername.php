<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

//Data from request
if (!isset($_GET['username'])) { exit("WARNING, No username was gotten"); }
$uname = $_GET['username'];

// TODO: check length of username before trying. And make sure not null.

//DB connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }


$result = $conn->query("SELECT userID, role FROM users WHERE username='$uname'");

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
if ($row['userID'] == null) { exit(json_encode("No userID found")); }
if ($row['role'] == null) { exit(json_encode("No role found")); }

$roleID = $row['role'];
$result = $conn->query("SELECT roleName FROM roles WHERE roleID='$roleID'");
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

echo json_encode($row['roleName']);

$conn->close();
?>
