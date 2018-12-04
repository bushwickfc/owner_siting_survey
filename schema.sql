CREATE DATABASE owner_siting_survey;

\connect owner_siting_survey;

CREATE TABLE geometries (
    id         serial PRIMARY KEY,
    geometry   varchar(255) NOT NULL,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp
);
