<?php
// Retrieve all of the geoJSONs.

include "./conn.php";

function fetch_records() {
	global $conn;
	$sql = "SELECT ST_AsGeoJSON(the_geom) from owner_siting_survey";
	$results = pg_query($conn, $sql);
	$features = [];

	while($row = pg_fetch_array($results)){
		array_push($features, $row);
	};

	echo json_encode($features);
}

fetch_records();
pg_close($conn);
?>
