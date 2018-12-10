<?php
// include "../credentials.php";

$host = $_ENV("HOST");
$dbname = $_ENV("DBNAME");
$user = $_ENV("USER");
$password = $_ENV("PASSWORD");

$conn = pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");
?>
