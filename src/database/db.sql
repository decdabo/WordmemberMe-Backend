CREATE DATABASE cardsdb

CREATE TABLE cards(
id SERIAL PRIMARY KEY,
email VARCHAR(255),
word VARCHAR(255) UNIQUE,
quotesContext VARCHAR(255),
meaning VARCHAR(255)
userId INT
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE,
name VARCHAR(255),
password VARCHAR(255)
);
