<?php
// Retrieve all of the geoJSONs.
include "../credentials.php";

$conn = pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");

function fetch_records() {
	global $conn;
	$sql = "SELECT * FROM owner_siting_survey";
	return pg_query($conn, $sql);
}

echo json_encode(fetch_records());
pg_close($conn);
?>
