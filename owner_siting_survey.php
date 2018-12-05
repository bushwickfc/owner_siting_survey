<?php
include "credentials.php";

pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");
// Construct the crs map, to be added to the incoming geoJSON data - {"type":"name","properties":{"name":"EPSG:4326"}}
$crs = new stdClass;
$name = new stdClass;
$name->name = "EPSG:4326";
$crs->type = "name";
$crs->properties = $name;

function handle_insert($geometry) {
  global $crs;
  $geometry->crs = $crs; // Not working correctly yet, but this is roughly the idea.
  echo json_encode($geometry);
  // pg_query_params("INSERT INTO owner_siting_survey (geometry) VALUES ($1)", array($geometry));
}

function insert_records($geometries) {
  foreach ($geometries as $key => $geometry) {
    handle_insert($geometry);
  }
};

insert_records($_POST["geometries"]);
?>
