CREATE DATABASE IF NOT EXISTS owners_db;

\connect owners_db;

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS owner_siting_survey (
    id         serial PRIMARY KEY,
    geometry   geometry NOT NULL,
    created_at timestamp DEFAULT current_timestamp
);
