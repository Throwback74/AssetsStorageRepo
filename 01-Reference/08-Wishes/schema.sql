DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('I wish someone would pick up milk.');
INSERT INTO wishes (wish) VALUES ('I wish someone would mow the lawn.');
INSERT INTO wishes (wish) VALUES ('I wish Shannon would call me back.');