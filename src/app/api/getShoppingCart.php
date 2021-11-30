<?php

$servername = 'localhost';;
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

if (isset($_GET['userID'])) {
    $userID = $_GET['userID'];
} else {
    exit("WARNING, No userID was gotten");
}

if ($userID) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  //Get cart contents.
  $sql = "SELECT productsInCartID, productID, amount FROM products_in_cart WHERE userID = '$userID'";
  $result = $conn->query($sql);

  echo json_encode($result -> fetch_all(MYSQLI_ASSOC));

  $conn->close();
}
?>
