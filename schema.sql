-- CREATE DATABASE owners_db;

-- \connect owners_db;

CREATE EXTENSION postgis;

CREATE TABLE owner_siting_survey (
    id         serial PRIMARY KEY,
    the_geom   geometry NOT NULL,
    created_at timestamp DEFAULT current_timestamp
);
