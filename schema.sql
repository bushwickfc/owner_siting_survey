CREATE DATABASE owners_db;

\connect owners_db;

CREATE EXTENSION postgis;

CREATE TABLE owner_siting_survey (
    id         serial PRIMARY KEY,
    geometry   polygon NOT NULL,
    created_at timestamp DEFAULT current_timestamp
);
