<?php
include "credentials.php";

$conn = pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");
// Construct the crs map, to be added to the incoming geoJSON data - {"type":"name","properties":{"name":"EPSG:4326"}}
$crs = new stdClass;
$name = new stdClass;
$name->name = "EPSG:4326";
$crs->type = "name";
$crs->properties = $name;

function handle_insert($geometry) {
  global $conn;
  global $crs;
  $geometry->crs = $crs; // Not working correctly yet, but this is roughly the idea.
  $encoded_geom = json_encode($geometry);
  $the_geom = "ST_GeomFromGeoJSON('{$encoded_geom}')";

  $sql = "INSERT INTO owner_siting_survey (geometry) VALUES (ST_GeomFromGeoJSON('{$encoded_geom}'))";

  pg_query($conn, $sql);

  // echo $the_geom;

  // pg_query_params($conn, "INSERT INTO owner_siting_survey (geometry) VALUES ($1)", array($the_geom));
}

function insert_records($features) {
  foreach ($features as $feature) {
    handle_insert($feature->geometry);
  }
};

insert_records(json_decode($_POST["features"]));
pg_close($conn);
?>
