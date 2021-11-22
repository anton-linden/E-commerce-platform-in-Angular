<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (isset($_GET['customerID'])) {
    $customerID = $_GET['customerID'];
} else {
    exit("WARNING, No customerID was gotten");
}

if (strlen($customerID) > 0 && $customerID != null) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT MAX(orderID) AS orderID FROM orders WHERE customerID='$customerID'"; //Selects the latest order of the customer.
  $result = $conn->query($sql);
  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
