<?php
include "../credentials.php";

$conn = pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");
?>
