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

https://stackoverflow.com/questions/48180282/how-to-populate-a-heroku-postgresql-database-with-a-sql-file

### Linting

This app's JavaScript has been (mostly) linted to ESLint's Airbnb base standard.
