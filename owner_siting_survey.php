<?php
include 'credentials.php';

function handle_insert($geometry) {
  $sql = 'INSERT INTO owner_siting_survey(geometry) values("hello")'
  // echo json_encode($geometry);
}

function insert_records($geometries) {
  foreach ($geometries as $key => $geometry) {
    handle_insert($geometry);
  }
};

insert_records($_POST["geometries"]);
?>
