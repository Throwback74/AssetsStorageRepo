DROP DATABASE IF EXISTS `films_db`;

CREATE DATABASE `films_db`;

USE `films_db`;

CREATE TABLE `movies` (
    `id` INTEGER(11) AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `rating` INTEGER(11) NOT NULL,
    PRIMARY KEY(`id`)
);