<?php
include "credentials.php";

pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");

function handle_insert($geometry) {
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
