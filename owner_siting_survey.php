<?php
function insert_records($geometries) {
  foreach ($geometries as $key => $value) {
    echo json_encode($value);
  }
};

insert_records($_POST["geometries"]);
?>
