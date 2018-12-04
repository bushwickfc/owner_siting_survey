CREATE DATABASE owner_siting_survey;

\connect owner_siting_survey;

CREATE EXTENSION postgis;

CREATE TABLE geometries (
    id         serial PRIMARY KEY,
    geometry   varchar(255) NOT NULL,
    created_at timestamp DEFAULT current_timestamp
);
