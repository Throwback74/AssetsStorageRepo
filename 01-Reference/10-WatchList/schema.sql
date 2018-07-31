-- Create the database moviePlannerDB and specified it for use.
DROP DATABASE IF EXISTS moviePlannerDB;
CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

-- Create the table movies.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Wristcutters: A Love Story');