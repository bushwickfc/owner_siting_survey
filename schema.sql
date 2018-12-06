CREATE DATABASE IF NOT EXISTS owners_db;

\connect owners_db;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS owner_siting_survey (
    id         serial PRIMARY KEY,
    the_geom   geometry NOT NULL,
    created_at timestamp DEFAULT current_timestamp
);
