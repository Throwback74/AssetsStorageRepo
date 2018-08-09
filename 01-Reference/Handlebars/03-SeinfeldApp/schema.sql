DROP DATABASE IF EXISTS `seinfeld_db`;
-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE `seinfeld_db`;
USE `seinfeld_db`;

-- Created the table "actors" 
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NULL,
  attitude varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO actors (name, coolness_points, attitude)
VALUES ("Jerry Seinfeld", 9001, "cool"),
("Michael Richards", 12, "racist"),
("Jason Alexander", 0, "loser"),
("Julia Louis-Dreyfus", 8000, "high-strung");