# owner_siting_survey
> Map geometry collection tool

A map interface owners can use to illustrate their preferred shopping areas.

## Schema

Create the schema from the `schema.sql` file by running the command

```bash
psql -U postgres -d DATABASE -a -f ABSOLUTE/PATH/TO/schema.sql
```

If the `owners_db` database does not yet exist, use `postgres` as the `DATABASE` in the command above; otherwise, you can use `owners_db`.

In my local case,

```bash
psql -U postgres -d owners_db -a -f /Users/darrenklein/Desktop/Darren/development/bushwickfc/owner_siting_survey/schema.sql
```

## Requirements

In local development, this app requires a root-level `credentials.php` file, formatted like so:

```php
<?php
    $password = 'password';
    $user = 'postgres';
    $host = 'localhost';
    $dbname = 'owners_db';
?>
```

## Use

Locally, I'm running this app at http://bushwickfc.owner_siting_survey.local

## Notes

### Polygon closing issue

The drawn polygons are supposed to 'finish' when the user clicks the first point they added - however, this feature was not working out-of-the-box. See https://github.com/Leaflet/Leaflet.draw/issues/670 - basically, had to additionally import Polyline and Polygon classes.

### Linting

This app's JavaScript has been (mostly) linted to ESLint's Airbnb base standard.
