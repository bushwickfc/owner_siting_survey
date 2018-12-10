<?php
// Deployed to Heroku, we expect to use the environment variable to generate the connection string;
// locally, we'll need to include the .gitignored credentials.php (see README).
if (getenv("DATABASE_URL")) {
	$conn = pg_connect(getenv("DATABASE_URL"));
} else {
	include "../credentials.php";
	$conn = pg_connect("host={$host} dbname={$dbname} user={$user} password={$password}");
}
?>
