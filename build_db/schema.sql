CREATE DATABASE tech;

USE tech;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(220),
    email VARCHAR(220)
);