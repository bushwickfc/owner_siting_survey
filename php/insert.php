<?php
// Insert geoJSONs.
include "../credentials.php";

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
  $geometry->crs = $crs; // Add crs to the geoJSON.
  $encoded_geom = json_encode($geometry);
  $sql = "INSERT INTO owner_siting_survey (the_geom) VALUES (ST_GeomFromGeoJSON('{$encoded_geom}'))";
  
  return pg_query($conn, $sql);
}

function insert_records($features) {
  $response = new stdClass;

  foreach ($features as $feature) {
    if (!handle_insert($feature->geometry)) {
      $response->status = "error";
      $response->message = pg_last_error($conn);
      echo json_encode($response);
      return;
    }
  }

  $response->status = "ok";
  $response->message = "Success!";
  echo json_encode($response);
};

insert_records(json_decode($_POST["features"]));
pg_close($conn);
?>
