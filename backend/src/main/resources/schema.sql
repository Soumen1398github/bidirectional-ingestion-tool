-- This file contains SQL statements for initializing the database schema.

CREATE TABLE IF NOT EXISTS data_records (
    id UUID PRIMARY KEY,
    column1 String,
    column2 Int32,
    column3 DateTime,
    -- Add additional columns as needed
);

CREATE TABLE IF NOT EXISTS flat_file_data (
    id UUID PRIMARY KEY,
    column1 String,
    column2 Int32,
    column3 DateTime,
    -- Add additional columns as needed
);